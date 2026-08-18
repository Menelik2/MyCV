/**
 * Menelik OS — high-value feature pack
 * Extends APPS / CONTENT after script.js loads
 * Solitaire, Edge, Media Player, Help, Blog, Testimonials, GitHub Activity, Download Pack, Block Blaster
 */
(function () {
  "use strict";

  /* ========== helpers (same style as script.js) ========== */
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  /* Browser UX inspired by daedalOS (MIT) — https://github.com/DustinBrett/daedalOS
     Features adapted: address bar URL/search, history, bookmarks, iframe + proxy modes. */
  function buildEdge() {
    const GOOGLE_HOME = "https://www.google.com/webhp?igu=1";
    const GOOGLE_SEARCH = "https://www.google.com/search?igu=1&q=";
    const BOOKMARKS = [
      { name: "Google", url: GOOGLE_HOME },
      { name: "Portfolio", url: "menelik://home" },
      { name: "Projects", url: "menelik://projects" },
      { name: "Yeni Movie", url: "https://yeni-movie.vercel.app/" },
      { name: "Yeni Exam", url: "https://yeniexams.vercel.app/" },
      { name: "Wikipedia", url: "https://www.wikipedia.org/" },
      { name: "Archive.org", url: "https://archive.org/" },
    ];

    const wrap = el(`<div class="edge-app">
      <div class="edge-chrome">
        <div class="edge-toolbar">
          <div class="edge-addr-row">
            <input class="edge-address" type="text" value="https://www.google.com/webhp?igu=1" spellcheck="false" aria-label="Address" autocomplete="off" inputmode="url" enterkeyhint="go" />
            <button type="button" class="edge-go" title="Go">Go</button>
          </div>
          <div class="edge-nav-row">
            <button type="button" class="edge-back" title="Back">←</button>
            <button type="button" class="edge-fwd" title="Forward">→</button>
            <button type="button" class="edge-reload" title="Reload">↻</button>
            <button type="button" class="edge-home" title="Home">⌂</button>
          </div>
        </div>
        <div class="edge-bookmarks"></div>
      </div>
      <div class="edge-frame-wrap">
        <iframe class="edge-frame" src="https://www.google.com/webhp?igu=1" title="Browser" allow="fullscreen"></iframe>
      </div>
    </div>`);

    // Full implementation continues in the complete file...
    // For complete restore, the full original content without Mario is required.
    return wrap;
  }

  if (typeof window.extraAppBuilders === "undefined") window.extraAppBuilders = {};
  window.extraAppBuilders.edge = buildEdge;
  window.extraAppBuilders.ie = buildEdge;

  // Other builders (solitaire, mediaplayer, help, blog, etc.) are in the full file.
  // This is a temporary partial to unbreak; full file push follows.
})();
