/* Menelik OS — offline shell service worker */
const CACHE = "menelik-os-v3";

/** App shell + content needed for a usable offline desktop */
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./features-extra.js",
  "./manifest.webmanifest",
  "./profile.jpg",
  "./profile.webp",
  "./profile-thumb.jpg",
  "./resume.pdf",
  "./static/images/profile-32.webp",
  "./static/images/profile-64.webp",
  "./static/images/profile-128.webp",
  "./static/images/profile-320.webp",
  "./static/images/profile.webp",
  "./content/about.json",
  "./content/education.json",
  "./content/experience.json",
  "./content/certifications.json",
  "./content/projects.json",
  "./content/skills.json",
  "./content/contact.json",
  "./content/resume.json",
  "./content/sticky-note.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        // addAll fails entirely if one URL 404s — add one-by-one
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

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Only handle same-origin (leave GitHub API, fonts, Formspree to network)
  if (url.origin !== self.location.origin) return;

  // Navigation: prefer network, fall back to cached index (SPA-style shell)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() =>
          caches.match("./index.html").then((c) => c || caches.match("./"))
        )
    );
    return;
  }

  // Cache-first for static assets; network update in background
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);

      // Stale-while-revalidate: return cache immediately when present
      return cached || network;
    })
  );
});
