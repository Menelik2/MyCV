/* mobile-icons-uniform.js — same size + solid polished icons */
(function () {
  "use strict";

  var ICON = 48;
  var RADIUS = 12;

  function isMobile() {
    return window.innerWidth < 900;
  }

  function svg(path, fill) {
    fill = fill || "#fff";
    return (
      "url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' +
          fill +
          '">' +
          path +
          "</svg>"
      ) +
      '")'
    );
  }

  /* Solid full-color tiles (no stripe / half-white look) */
  var SOLID = {
    "apps-folder": {
      color: "#3b82f6",
      img: svg(
        '<rect x="3" y="3" width="8" height="8" rx="1.8"/><rect x="13" y="3" width="8" height="8" rx="1.8"/><rect x="3" y="13" width="8" height="8" rx="1.8"/><rect x="13" y="13" width="8" height="8" rx="1.8"/>'
      ),
    },
    "games-folder": {
      color: "#f59e0b",
      img: svg(
        '<path d="M6 9h3v2H6V9zm9 0h3v2h-3V9zM8 6h2v2H8V6zm6 0h2v2h-2V6zM8 16h2v2H8v-2zm6 0h2v2h-2v-2z"/><rect x="2" y="7" width="20" height="10" rx="5" fill="none" stroke="#fff" stroke-width="1.8"/>'
      ),
    },
    edge: {
      color: "#2563eb",
      img: svg(
        '<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="3.5"/>'
      ),
    },
    chat: {
      color: "#10b981",
      img: svg(
        '<path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>'
      ),
    },
    control: {
      color: "#64748b",
      img: svg(
        '<path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.2 7.2 0 00-1.62-.94l-.36-2.54A.49.49 0 0014 2h-4a.49.49 0 00-.49.42l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.63 8.87a.49.49 0 00.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.75 14.5a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.3.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.25.42.49.42h4c.24 0 .44-.18.49-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"/>'
      ),
    },
    device: {
      color: "#5b5fc7",
      img: svg(
        '<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>'
      ),
    },
  };

  function matchKey(el) {
    var c = (el.className && el.className.toString()) || "";
    var keys = Object.keys(SOLID);
    for (var i = 0; i < keys.length; i++) {
      if (c.indexOf(keys[i]) !== -1) return keys[i];
    }
    return null;
  }

  function styleIcon(el) {
    if (!el || !isMobile()) return;
    el.style.setProperty("width", ICON + "px", "important");
    el.style.setProperty("height", ICON + "px", "important");
    el.style.setProperty("min-width", ICON + "px", "important");
    el.style.setProperty("min-height", ICON + "px", "important");
    el.style.setProperty("max-width", ICON + "px", "important");
    el.style.setProperty("max-height", ICON + "px", "important");
    el.style.setProperty("border-radius", RADIUS + "px", "important");
    el.style.setProperty("margin", "0", "important");
    el.style.setProperty("flex-shrink", "0", "important");
    el.style.setProperty("box-sizing", "border-box", "important");
    el.style.setProperty("box-shadow", "0 2px 6px rgba(0,0,0,.25)", "important");

    var key = matchKey(el);
    if (key) {
      var s = SOLID[key];
      el.style.setProperty("background-color", s.color, "important");
      el.style.setProperty("background-image", s.img, "important");
      el.style.setProperty("background-size", "54%", "important");
      el.style.setProperty("background-repeat", "no-repeat", "important");
      el.style.setProperty("background-position", "center", "important");
    } else {
      el.style.setProperty("background-size", "52%", "important");
      el.style.setProperty("background-repeat", "no-repeat", "important");
      el.style.setProperty("background-position", "center", "important");
    }
  }

  function styleLabel(span) {
    if (!span || !isMobile()) return;
    span.style.setProperty("font-size", "10px", "important");
    span.style.setProperty("font-weight", "600", "important");
    span.style.setProperty("line-height", "1.2", "important");
    span.style.setProperty("text-align", "center", "important");
    span.style.setProperty("max-width", "100%", "important");
    span.style.setProperty("overflow", "hidden", "important");
    span.style.setProperty("text-overflow", "ellipsis", "important");
    span.style.setProperty("white-space", "nowrap", "important");
    var light = document.body && document.body.classList.contains("light");
    var inPage =
      span.closest &&
      (span.closest(".apps-folder-grid") ||
        span.closest(".games-folder-grid") ||
        span.closest(".page-body"));
    if (inPage) {
      span.style.setProperty("color", "#1c1c1e", "important");
      span.style.setProperty("text-shadow", "none", "important");
    } else if (light) {
      span.style.setProperty("color", "#111", "important");
      span.style.setProperty(
        "text-shadow",
        "0 0 2px #fff, 0 1px 2px #fff",
        "important"
      );
    } else {
      span.style.setProperty("color", "#fff", "important");
      span.style.setProperty(
        "text-shadow",
        "0 0 2px #000, 0 1px 2px #000",
        "important"
      );
    }
  }

  function styleThemeBtn(btn) {
    if (!btn || !isMobile()) return;
    btn.style.setProperty("width", ICON + "px", "important");
    btn.style.setProperty("height", ICON + "px", "important");
    btn.style.setProperty("min-width", ICON + "px", "important");
    btn.style.setProperty("min-height", ICON + "px", "important");
    btn.style.setProperty("border-radius", RADIUS + "px", "important");
  }

  function run() {
    if (!isMobile()) return;
    document.querySelectorAll("#mobile .app-img, .mobile .app-img").forEach(styleIcon);
    document.querySelectorAll("#mobile .app-icon span, .mobile .app-icon span").forEach(styleLabel);
    document.querySelectorAll("#mobile .theme-toggle-mobile, .theme-toggle-mobile").forEach(styleThemeBtn);
  }

  function injectCss() {
    var id = "mobile-icons-uniform-css";
    var old = document.getElementById(id);
    if (old) old.remove();
    var s = document.createElement("style");
    s.id = id;

    function rule(cls, color, path) {
      return (
        "#mobile .app-img." +
        cls +
        ",.mobile .app-img." +
        cls +
        "{" +
        "background-color:" +
        color +
        "!important;" +
        "background-image:" +
        svg(path) +
        "!important;" +
        "background-size:54%!important;" +
        "background-repeat:no-repeat!important;" +
        "background-position:center!important}"
      );
    }

    s.textContent =
      "@media (max-width:899px){" +
      "#mobile .app-img,.mobile .app-img," +
      "#mobile .app-icon .app-img,#mobile .dock .app-img," +
      "#mobile .apps-folder-grid .app-img,#mobile .games-folder-grid .app-img{" +
      "width:48px!important;height:48px!important;" +
      "min-width:48px!important;min-height:48px!important;" +
      "max-width:48px!important;max-height:48px!important;" +
      "border-radius:12px!important;margin:0!important;" +
      "box-sizing:border-box!important;flex-shrink:0!important;" +
      "box-shadow:0 2px 6px rgba(0,0,0,.25)!important}" +
      rule(
        "apps-folder",
        "#3b82f6",
        '<rect x="3" y="3" width="8" height="8" rx="1.8"/><rect x="13" y="3" width="8" height="8" rx="1.8"/><rect x="3" y="13" width="8" height="8" rx="1.8"/><rect x="13" y="13" width="8" height="8" rx="1.8"/>'
      ) +
      rule(
        "games-folder",
        "#f59e0b",
        '<path d="M6 9h3v2H6V9zm9 0h3v2h-3V9zM8 6h2v2H8V6zm6 0h2v2h-2V6zM8 16h2v2H8v-2zm6 0h2v2h-2v-2z"/><rect x="2" y="7" width="20" height="10" rx="5" fill="none" stroke="#fff" stroke-width="1.8"/>'
      ) +
      rule(
        "edge",
        "#2563eb",
        '<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="3.5"/>'
      ) +
      rule(
        "chat",
        "#10b981",
        '<path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>'
      ) +
      rule(
        "control",
        "#64748b",
        '<path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.2 7.2 0 00-1.62-.94l-.36-2.54A.49.49 0 0014 2h-4a.49.49 0 00-.49.42l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.63 8.87a.49.49 0 00.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.75 14.5a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.3.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.25.42.49.42h4c.24 0 .44-.18.49-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z"/>'
      ) +
      rule(
        "device",
        "#5b5fc7",
        '<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>'
      ) +
      "#mobile .app-grid,#mobile .apps-folder-grid,#mobile .games-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:14px 8px!important;justify-items:center!important}" +
      "#mobile .app-icon{display:flex!important;flex-direction:column!important;" +
      "align-items:center!important;gap:4px!important;max-width:72px!important;" +
      "padding:0!important;background:transparent!important;border:0!important}" +
      "#mobile .app-icon span{font-size:10px!important;font-weight:600!important;" +
      "color:#fff!important;text-shadow:0 0 2px #000,0 1px 2px #000!important;" +
      "text-align:center!important;max-width:100%!important;overflow:hidden!important;" +
      "text-overflow:ellipsis!important;white-space:nowrap!important}" +
      "body.light #mobile .app-icon span{color:#111!important;text-shadow:0 0 2px #fff!important}" +
      "#mobile .dock .app-icon span{display:none!important}" +
      "#mobile .apps-folder-grid .app-icon span,#mobile .games-folder-grid .app-icon span{" +
      "color:#1c1c1e!important;text-shadow:none!important}" +
      "}";
    document.head.appendChild(s);
  }

  function boot() {
    injectCss();
    run();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  document.addEventListener("menelik-boot-done", boot);
  window.addEventListener("resize", boot);
  setTimeout(boot, 200);
  setTimeout(boot, 800);
  setTimeout(boot, 2000);

  if (typeof MutationObserver === "function") {
    new MutationObserver(run).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
})();
