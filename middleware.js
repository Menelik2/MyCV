/**
 * Vercel Edge Middleware — https://menelikcv.vercel.app
<<<<<<< HEAD
 * Security headers + CSP-Report-Only. No /admin redirects (avoids trailingSlash loop).
 */
export const config = {
  matcher: ["/", "/admin", "/admin/(.*)", "/content/(.*)", "/api/(.*)"],
};

const REPORT =
  '; report-uri /api/csp-report; report-to csp-endpoint';
const REPORT_TO =
  '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"/api/csp-report"}],"include_subdomains":false}';
const REPORTING_ENDPOINTS = 'csp-endpoint="/api/csp-report"';

// Shared CSP base (object-src / base-uri)
const CSP_BASE =
  "object-src 'none'; base-uri 'self'" + REPORT;
=======
 * Security headers + CSP-Report-Only.
 *
 * Exclusion rules (never run middleware on these):
 *   - /api/*          serverless functions (OAuth, CSP reports)
 *   - static assets   css/js/images/fonts/maps/manifest/sw
 *   - binary/docs     pdf, zip, webmanifest
 *
 * Matcher uses negative lookahead so excluded paths skip Edge entirely.
 */
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api (Vercel serverless)
     * - _next / static internals (if any)
     * - common static file extensions
     * - sw.js / manifest (PWA)
     */
    {
      source:
        "/((?!api/|_next/|static/|.*\\.(?:css|js|mjs|map|jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|eot|pdf|zip|webmanifest)$).*)",
    },
    "/",
  ],
};

/** Paths that must never be processed (defense in depth if matcher widens). */
const EXCLUDE_PREFIXES = ["/api/", "/_next/", "/static/"];
const EXCLUDE_EXACT = new Set([
  "/sw.js",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/robots.txt",
]);
const EXCLUDE_EXT =
  /\.(?:css|js|mjs|map|jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|eot|pdf|zip|webmanifest)$/i;

function shouldBypass(pathname) {
  if (EXCLUDE_EXACT.has(pathname)) return true;
  if (EXCLUDE_PREFIXES.some((p) => pathname === p.slice(0, -1) || pathname.startsWith(p))) {
    return true;
  }
  if (EXCLUDE_EXT.test(pathname)) return true;
  return false;
}

const REPORT =
  "; report-uri /api/csp-report; report-to csp-endpoint";
const REPORT_TO =
  '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"/api/csp-report"}],"include_subdomains":false}';
const REPORTING_ENDPOINTS = 'csp-endpoint="/api/csp-report"';

const CSP_BASE = "object-src 'none'; base-uri 'self'" + REPORT;
>>>>>>> d67564d (Describe what you updated here)

/** Site shell */
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
  CSP_BASE;

/** Decap /admin — unpkg + GitHub OAuth */
const CSP_ADMIN =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; " +
  "style-src 'self' 'unsafe-inline' https://unpkg.com; " +
  "img-src 'self' data: blob: https:; " +
  "font-src 'self' data: https:; " +
  "connect-src 'self' https://api.github.com https://github.com https://*.github.com https://unpkg.com; " +
  "frame-src 'self' https://github.com; " +
  "frame-ancestors 'none'; " +
  CSP_BASE;

export default function middleware(request) {
  const path = new URL(request.url).pathname;
<<<<<<< HEAD
  const isAdmin = path === "/admin" || path.startsWith("/admin/");

  // Continue request (no redirect — vercel.json trailingSlash:false)
=======

  // Defense in depth: skip excluded paths even if matcher changes later
  if (shouldBypass(path)) {
    return new Response(null, {
      headers: { "x-middleware-next": "1" },
    });
  }

  const isAdmin = path === "/admin" || path.startsWith("/admin/");

>>>>>>> d67564d (Describe what you updated here)
  const response = new Response(null, {
    headers: { "x-middleware-next": "1" },
  });

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set("X-Edge-Middleware", "menelik-portfolio");
  response.headers.set("Report-To", REPORT_TO);
  response.headers.set("Reporting-Endpoints", REPORTING_ENDPOINTS);
  response.headers.set(
    "Content-Security-Policy-Report-Only",
    isAdmin ? CSP_ADMIN : CSP_SITE
  );

  if (isAdmin) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("X-Frame-Options", "DENY");
  } else {
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
    if (path.startsWith("/content/")) {
      response.headers.set(
        "Cache-Control",
        "public, max-age=60, must-revalidate"
      );
<<<<<<< HEAD
    } else if (path.startsWith("/api/")) {
      response.headers.set("Cache-Control", "no-store");
=======
>>>>>>> d67564d (Describe what you updated here)
    }
  }

  return response;
}
