/**
 * CSP violation report collector
 * POST /api/csp-report
 *
 * Accepts legacy application/csp-report and Reporting API
 * application/reports+json bodies. Logs a compact summary to
 * Vercel function logs (Dashboard → Logs). Always returns 204.
 *
 * Optional: set CSP_REPORT_WEBHOOK to a URL (e.g. Discord/Slack
 * incoming webhook) to forward a short summary off-platform.
 */

const MAX_BODY_BYTES = 32 * 1024; // 32 KiB

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("payload too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function summarize(payload) {
  // Legacy: { "csp-report": { ... } }
  if (payload && payload["csp-report"]) {
    const r = payload["csp-report"];
    return {
      format: "csp-report",
      document: r["document-uri"] || r.documentURI || null,
      violated: r["violated-directive"] || r.violatedDirective || null,
      effective: r["effective-directive"] || r.effectiveDirective || null,
      blocked: r["blocked-uri"] || r.blockedURI || null,
      source: r["source-file"] || r.sourceFile || null,
      line: r["line-number"] || r.lineNumber || null,
      disposition: r.disposition || "report",
    };
  }

  // Reporting API: [ { type, body, url, age }, ... ]
  if (Array.isArray(payload) && payload.length) {
    return payload.slice(0, 5).map((item) => {
      const b = item.body || {};
      return {
        format: "reports+json",
        type: item.type || null,
        document: b.documentURL || b["document-uri"] || item.url || null,
        violated: b.effectiveDirective || b.violatedDirective || null,
        blocked: b.blockedURL || b["blocked-uri"] || null,
        source: b.sourceFile || null,
        line: b.lineNumber || null,
        disposition: b.disposition || "report",
      };
    });
  }

  return { format: "unknown", rawKeys: payload ? Object.keys(payload) : [] };
}

async function maybeWebhook(summary) {
  const url = process.env.CSP_REPORT_WEBHOOK;
  if (!url) return;
  try {
    const text =
      typeof summary === "object"
        ? "```json\n" + JSON.stringify(summary, null, 2).slice(0, 1800) + "\n```"
        : String(summary);
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "CSP report:\n" + text,
        // Slack-compatible fallback
        text: "CSP report: " + JSON.stringify(summary).slice(0, 500),
      }),
    });
  } catch (err) {
    console.warn("[csp-report] webhook failed", err && err.message);
  }
}

module.exports = async (req, res) => {
  // CORS preflight (some reporters / tools probe OPTIONS)
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Reporting-Endpoints"
    );
    res.setHeader("Access-Control-Max-Age", "86400");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST, OPTIONS");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Method Not Allowed");
    return;
  }

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const raw = await readBody(req);
    if (!raw || !raw.trim()) {
      res.statusCode = 204;
      res.end();
      return;
    }

    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      console.warn("[csp-report] non-JSON body", raw.slice(0, 200));
      res.statusCode = 204;
      res.end();
      return;
    }

    const summary = summarize(payload);
    console.log("[csp-report]", JSON.stringify(summary));
    await maybeWebhook(summary);
  } catch (err) {
    if (err && err.message === "payload too large") {
      res.statusCode = 413;
      res.end();
      return;
    }
    console.warn("[csp-report] error", err && err.message);
  }

  res.statusCode = 204;
  res.end();
};
