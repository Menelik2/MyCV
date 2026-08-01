/**
 * Decap CMS — GitHub OAuth (callback)
 * GET /api/callback?code=…  →  exchange code, postMessage token to opener
 *
 * Vercel env:
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html><html><body style="font-family:system-ui;padding:2rem">
<h1>OAuth not configured</h1>
<p>Set <code>GITHUB_CLIENT_ID</code> and <code>GITHUB_CLIENT_SECRET</code> in Vercel, then redeploy.</p>
</body></html>`);
    return;
  }

  const url = new URL(req.url, "http://localhost");
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDesc = url.searchParams.get("error_description") || "";

  if (error || !code) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html><html><body style="font-family:system-ui;padding:2rem">
<h1>Login cancelled</h1>
<p>${escapeHtml(error || "No authorization code returned")} ${escapeHtml(errorDesc)}</p>
<p><a href="/admin/">Back to admin</a></p>
</body></html>`);
    return;
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await tokenRes.json();

    if (!data.access_token) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(`<!DOCTYPE html><html><body style="font-family:system-ui;padding:2rem">
<h1>Token exchange failed</h1>
<pre>${escapeHtml(JSON.stringify(data, null, 2))}</pre>
<p>Check Client ID/Secret and that the callback URL matches the GitHub OAuth App exactly.</p>
</body></html>`);
      return;
    }

    const token = data.access_token;
    const provider = "github";
    // Decap / Netlify CMS external auth handshake
    const content = {
      token: token,
      provider: provider,
    };
    const msgSuccess =
      "authorization:" + provider + ":success:" + JSON.stringify(content);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Signing in…</title>
  <style>body{font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#1e1e24;color:#e2e8f0}</style>
</head>
<body>
  <p>Authorization complete. Returning to the content manager…</p>
  <script>
(function () {
  var msg = ${JSON.stringify(msgSuccess)};
  var provider = "github";
  function send() {
    if (window.opener) {
      window.opener.postMessage(msg, "*");
    }
  }
  function receiveMessage(e) {
    if (e.data === "authorizing:" + provider || e.data === "authorizing:github") {
      send();
    }
  }
  window.addEventListener("message", receiveMessage, false);
  // Kick off handshake (Decap listens for authorizing:github then replies)
  if (window.opener) {
    window.opener.postMessage("authorizing:" + provider, "*");
    // Also send success after a short delay if no handshake
    setTimeout(send, 500);
    setTimeout(function () { try { window.close(); } catch (e) {} }, 2000);
  } else {
    document.body.innerHTML = "<p>Login OK, but no opener window. Close this tab and open <a href='/admin/' style='color:#93c5fd'>/admin/</a> again.</p>";
  }
})();
  </script>
</body>
</html>`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html><html><body style="font-family:system-ui;padding:2rem">
<h1>OAuth failed</h1>
<pre>${escapeHtml(String(err && err.stack ? err.stack : err))}</pre>
</body></html>`);
  }
};

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
