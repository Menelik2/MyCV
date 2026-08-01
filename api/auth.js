/**
 * Decap CMS — GitHub OAuth (start)
 * GET /api/auth  →  redirect to GitHub authorize
 *
 * Vercel env:
 *   GITHUB_CLIENT_ID       (required)
 *   OAUTH_REDIRECT_URI     (optional; default https://<host>/api/callback)
 */
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html><html><body style="font-family:system-ui;padding:2rem">
<h1>OAuth not configured</h1>
<p>Set <code>GITHUB_CLIENT_ID</code> in Vercel → Settings → Environment Variables, then redeploy.</p>
</body></html>`);
    return;
  }

  const host = req.headers["x-forwarded-host"] || req.headers.host || "menelikcv.vercel.app";
  const proto = (req.headers["x-forwarded-proto"] || "https").split(",")[0].trim();
  const redirectUri =
    process.env.OAUTH_REDIRECT_URI || `${proto}://${host}/api/callback`;

  // repo scope: Decap needs to read/write content files
  const scope = "repo user:email";
  const authorize =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}`;

  res.statusCode = 302;
  res.setHeader("Location", authorize);
  res.end();
};
