/**
 * Vercel Edge Middleware — https://menelikcv.vercel.app
 *
 * Performance:
 *  - Invoked only on HTML shells (/, /index.html, /admin*)
 *  - Static assets, /api/*, /content/*, SW, images never enter Edge
 *  - No catch-all negative-lookahead matcher (expensive path filter)
 *  - No per-request bypass scans or header duplication
 *  - CSP strings built once at module load
 *
 * CDN headers (vercel.json — zero Edge cost):
 *  X-Content-Type-Options, Referrer-Policy, X-Frame-Options,
 *  Permissions-Policy, Cache-Control, X-Robots-Tag
 *
 * This middleware only adds path-specific CSP-Report-Only + reporting APIs.
 */
export const config = {
  matcher: ["/", "/index.html", "/admin", "/admin/", "/admin/:path*"],
};

const REPORT_TO =
  '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"/api/csp-report"}],"include_subdomains":false}';
const REPORTING_ENDPOINTS = 'csp-endpoint="/api/csp-report"';
const CSP_REPORT =
  "; report-uri /api/csp-report; report-to csp-endpoint";

const CSP_SITE =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-eval'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com data:; " +
  "img-src 'self' data: blob: https:; " +
  "connect-src 'self' https://formspree.io https://jsonplaceholder.typicode.com https://api.github.com https://dog.ceo https://*.dog.ceo https://httpbin.org; " +
  "form-action 'self' https://formspree.io mailto:; " +
  "frame-src 'self' blob: https://liveweave.com https://*.liveweave.com; " +
  "worker-src 'self' blob:; " +
  "frame-ancestors 'self'; " +
  "object-src 'none'; base-uri 'self'" +
  CSP_REPORT;

const CSP_ADMIN =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; " +
  "style-src 'self' 'unsafe-inline' https://unpkg.com; " +
  "img-src 'self' data: blob: https:; " +
  "font-src 'self' data: https:; " +
  "connect-src 'self' https://api.github.com https://github.com https://*.github.com https://unpkg.com; " +
  "frame-src 'self' https://github.com; " +
  "frame-ancestors 'none'; " +
  "object-src 'none'; base-uri 'self'" +
  CSP_REPORT;

export default function middleware(request) {
  const path = request.nextUrl
    ? request.nextUrl.pathname
    : new URL(request.url).pathname;

  const isAdmin = path === "/admin" || path.startsWith("/admin/");

  return new Response(null, {
    headers: {
      "x-middleware-next": "1",
      "Report-To": REPORT_TO,
      "Reporting-Endpoints": REPORTING_ENDPOINTS,
      "Content-Security-Policy-Report-Only": isAdmin ? CSP_ADMIN : CSP_SITE,
    },
  });
}
