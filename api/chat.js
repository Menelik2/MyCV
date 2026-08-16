/**
 * Gemini chat proxy — keeps the API key off the public client.
 * Set GEMINI_API_KEY in Vercel project env for production.
 */
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (_) {
      body = {};
    }
  }
  if (!body || typeof body !== "object") body = {};

  const message = String(body.message || body.text || "").trim();
  if (!message) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing message" }));
    return;
  }

  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    "AQ.Ab8RN6IuaGR70HRAKmBeWLB8BVJTgRhCWJd8EJ26FYQNMQgSng";

  const model = process.env.GEMINI_MODEL || "gemini-flash-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const systemHint =
    "You are a helpful assistant on Menelik Admasu's portfolio site. " +
    "Reply clearly and concisely. You may answer in Amharic or English to match the user.";

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: systemHint + "\n\nUser: " + message }],
          },
        ],
      }),
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const errMsg =
        (data && data.error && data.error.message) ||
        "Gemini API request failed (" + upstream.status + ")";
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: errMsg }));
      return;
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "ምላሽ አልተገኘም። / No reply returned.";

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ reply }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: err && err.message ? err.message : "Server error",
      })
    );
  }
};
