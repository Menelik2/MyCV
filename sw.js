/* Menelik OS — offline shell service worker
 *
 * Strategy (so deploys show up without hard-refresh):
 *  - Network-first for HTML, JSON content, CSS, JS (always prefer live files)
 *  - Cache-first only for images / fonts / PDF (rarely change)
 *  - Bump CACHE name on every meaningful release so old shells are dropped
 */
const CACHE = "menelik-os-v6";

/** App shell used only as offline fallback */
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./features-extra.js",
  "./manifest.webmanifest",
  "./profile.jpg",
  "./profile.webp",
  "./content/about.json",
  "./content/projects.json",
  "./content/resume.json",
  "./content/skills.json",
  "./content/contact.json",
];

const NETWORK_FIRST_EXT =
  /\.(?:html?|json|js|mjs|css|webmanifest)$/i;
const CACHE_FIRST_EXT =
  /\.(?:jpg|jpeg|png|gif|svg|webp|avif|ico|woff2?|ttf|eot|pdf)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        Promise.all(
          PRECACHE.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("[sw] precache skip", url, err && err.message);
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// Allow the page to request immediate activation of a waiting worker
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function networkFirst(req) {
  return fetch(req)
    .then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    })
    .catch(() => caches.match(req).then((c) => c || caches.match("./index.html")));
}

function cacheFirst(req) {
  return caches.match(req).then((cached) => {
    const network = fetch(req)
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => cached);
    return cached || network;
  });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Never cache API (OAuth / CSP reports)
  if (url.pathname.startsWith("/api/")) return;

  // Navigations + HTML always network-first
  if (req.mode === "navigate" || url.pathname === "/" || url.pathname.endsWith(".html")) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Content JSON, CSS, JS — network-first so portfolio updates appear immediately
  if (
    url.pathname.startsWith("/content/") ||
    NETWORK_FIRST_EXT.test(url.pathname)
  ) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Resume PDF must stay fresh (network-first) so Download always gets the latest file
  if (url.pathname.endsWith("/resume.pdf") || url.pathname === "/resume.pdf") {
    event.respondWith(networkFirst(req));
    return;
  }

  // Images / fonts / other PDFs — cache-first is fine
  if (CACHE_FIRST_EXT.test(url.pathname) || url.pathname.startsWith("/static/")) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Default: network-first
  event.respondWith(networkFirst(req));
});
