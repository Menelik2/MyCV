/**
 * Vercel Edge Middleware — https://menelikcv.vercel.app
 *
 * Performance:
 *  - Invoked only on HTML shells (/, /index.html, /admin*)
 *  - Static assets, /api/*, /content/*, SW, images never enter Edge
 *
 * Headers:
 *  - Content-Security-Policy (enforcing) — iframe / framing rules for embeds
 *  - Content-Security-Policy-Report-Only — full policy for monitoring
 *  - Report-To / Reporting-Endpoints — CSP violation reports
 */
export const config = {
  matcher: ["/", "/index.html", "/admin", "/admin/", "/admin/:path*"],
};

const REPORT_TO =
  '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"/api/csp-report"}],"include_subdomains":false}';
const REPORTING_ENDPOINTS = 'csp-endpoint="/api/csp-report"';
const CSP_REPORT =
  "; report-uri /api/csp-report; report-to csp-endpoint";

/**
 * Enforcing CSP focused on iframes / embedding.
 * Directives not listed here are unrestricted by this header
 * (full lockdown stays on Report-Only below).
 *
 * frame-src  — what THIS page may embed in <iframe>
 * frame-ancestors — who may embed THIS page
 * object-src / base-uri — basic hardening
 */
const CSP_FRAME_SITE =
  "frame-src 'self' blob: " +
  "https://www.tetrisgratuit.fr https://*.tetrisgratuit.fr " +
  "https://liveweave.com https://*.liveweave.com " +
  "https://meet.jit.si https://*.jit.si https://*.jitsi.net; " +
  "frame-ancestors 'self'; " +
  "object-src 'none'; " +
  "base-uri 'self'";

const CSP_FRAME_ADMIN =
  "frame-src 'self' https://github.com; " +
  "frame-ancestors 'none'; " +
  "object-src 'none'; " +
  "base-uri 'self'";

/** Full policy — report only (will not block; used to tune later) */
const CSP_SITE =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-eval'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com data:; " +
  "img-src 'self' data: blob: https:; " +
  "connect-src 'self' https://formspree.io https://jsonplaceholder.typicode.com https://api.github.com https://dog.ceo https://*.dog.ceo https://httpbin.org; " +
  "form-action 'self' https://formspree.io mailto:; " +
  "frame-src 'self' blob: https://liveweave.com https://*.liveweave.com https://www.tetrisgratuit.fr https://*.tetrisgratuit.fr https://meet.jit.si https://*.jit.si https://*.jitsi.net; " +
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
      // Enforcing: controls which iframes are allowed
      "Content-Security-Policy": isAdmin ? CSP_FRAME_ADMIN : CSP_FRAME_SITE,
      "Permissions-Policy": "camera=(self \"https://meet.jit.si\"), microphone=(self \"https://meet.jit.si\"), display-capture=(self \"https://meet.jit.si\"), autoplay=(self \"https://meet.jit.si\"), geolocation=()",
      // Report-only: full policy for monitoring (does not block)
      "Content-Security-Policy-Report-Only": isAdmin ? CSP_ADMIN : CSP_SITE,
    },
  });
}
