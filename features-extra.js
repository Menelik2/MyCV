/**
 * Menelik OS — high-value feature pack
 * Extends APPS / CONTENT after script.js loads
 */
(function () {
  "use strict";

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

    // NOTE: Full file content is large; this is a temporary partial restore to unbreak the site.
    // Full restoration of the rest of the file will follow.
    const wrap = document.createElement("div");
    wrap.className = "edge-app";
    wrap.innerHTML = "<p>Edge app loading...</p>";
    return wrap;
  }

  // Minimal stub to prevent breakage - full file will be restored next
  if (typeof window.extraAppBuilders === "undefined") window.extraAppBuilders = {};
  window.extraAppBuilders.edge = buildEdge;
  window.extraAppBuilders.ie = buildEdge;
})();
