/**
 * Vercel Edge Middleware — https://menelikcv.vercel.app
 *
 * Sets security headers including Content-Security-Policy-Report-Only.
 * Violations are reported to /api/csp-report (see api/csp-report.js) and
 * still appear in DevTools. Promote to Content-Security-Policy when stable.
 */

export const config = {
  matcher: [
    "/",
    "/admin",
    "/admin/(.*)",
    "/content/(.*)",
    "/api/(.*)",
  ],
};

const REPORT_SUFFIX =
  "; report-uri /api/csp-report; report-to csp-endpoint";

/** Portfolio shell (index) — Google Fonts, Formspree, VS Code preview (srcdoc + new Function) */
const CSP_REPORT_ONLY_SITE =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-eval'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com data:; " +
  "img-src 'self' data: blob: https:; " +
  "connect-src 'self' https://formspree.io https://jsonplaceholder.typicode.com https://api.github.com https://dog.ceo https://*.dog.ceo https://httpbin.org; " +
  "form-action 'self' https://formspree.io mailto:; " +
  "frame-src 'self' blob: https://liveweave.com https://*.liveweave.com; " +
  "worker-src 'self' blob:; " +
  "object-src 'none'; " +
  "base-uri 'self'; " +
  "frame-ancestors 'self'" +
  REPORT_SUFFIX;

/** Decap CMS admin — unpkg bundle, inline boot script, GitHub OAuth / API */
const CSP_REPORT_ONLY_ADMIN =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; " +
  "style-src 'self' 'unsafe-inline' https://unpkg.com; " +
  "img-src 'self' data: blob: https:; " +
  "font-src 'self' data: https:; " +
  "connect-src 'self' https://api.github.com https://github.com https://*.github.com https://unpkg.com; " +
  "frame-src 'self' https://github.com; " +
  "object-src 'none'; " +
  "base-uri 'self'; " +
  "frame-ancestors 'none'" +
  REPORT_SUFFIX;

/** Reporting API endpoint group (pairs with report-to csp-endpoint) */
const REPORT_TO =
  '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"/api/csp-report"}],"include_subdomains":false}';

/** Modern Reporting-Endpoints header (Chrome prefers this alongside Report-To) */
const REPORTING_ENDPOINTS = 'csp-endpoint="/api/csp-report"';

export default async function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname === "/admin") {
    url.pathname = "/admin/";
    return Response.redirect(url, 308);
  }

  // Zero-dependency continue signal (no @vercel/edge install needed)
  let response = new Response(null, {
    headers: { "x-middleware-next": "1" },
  });

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set("X-Edge-Middleware", "menelik-portfolio");

  // Reporting API registration (browsers that support it)
  response.headers.set("Report-To", REPORT_TO);
  response.headers.set("Reporting-Endpoints", REPORTING_ENDPOINTS);

  const isAdmin =
    url.pathname === "/admin" || url.pathname.startsWith("/admin/");
  response.headers.set(
    "Content-Security-Policy-Report-Only",
    isAdmin ? CSP_REPORT_ONLY_ADMIN : CSP_REPORT_ONLY_SITE
  );

  if (isAdmin) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set("Cache-Control", "private, no-store");
    // Align with admin CSP frame-ancestors
    response.headers.set("X-Frame-Options", "DENY");
  } else if (url.pathname.startsWith("/content/")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=60, must-revalidate"
    );
  } else if (url.pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-store");
  }

  return response;
}
