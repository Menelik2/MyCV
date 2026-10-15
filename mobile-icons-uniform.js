/* mobile-icons-uniform.js — every mobile icon same size + readable labels */
(function () {
  "use strict";

  var ICON = 48;
  var RADIUS = 12;

  function isMobile() {
    return window.innerWidth < 900;
  }

  function isFolder(el) {
    var c = (el.className && el.className.toString()) || "";
    return c.indexOf("apps-folder") !== -1 || c.indexOf("games-folder") !== -1;
  }

  /* Proper folder tiles: glyph + gradient (must keep dual background-size) */
  var FOLDER_BG = {
    "apps-folder":
      "url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">' +
          '<rect x="3" y="5" width="7" height="7" rx="1.5"/>' +
          '<rect x="12" y="5" width="7" height="7" rx="1.5"/>' +
          '<rect x="3" y="14" width="7" height="7" rx="1.5"/>' +
          '<rect x="12" y="14" width="7" height="7" rx="1.5"/>' +
          "</svg>"
      ) +
      '") , linear-gradient(145deg, #3b82f6, #1d4ed8)',
    "games-folder":
      "url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">' +
          '<path d="M6 10h4v4H6v-4zm8 0h4v4h-4v-4zM8 6h2v2H8V6zm6 0h2v2h-2V6zM8 16h2v2H8v-2zm6 0h2v2h-2v-2z"/>' +
          '<rect x="2" y="8" width="20" height="10" rx="5" fill="none" stroke="#fff" stroke-width="1.8"/>' +
          "</svg>"
      ) +
      '") , linear-gradient(145deg, #f59e0b, #ea580c)',
  };

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
    el.style.setProperty("background-repeat", "no-repeat, no-repeat", "important");
    el.style.setProperty("background-position", "center, center", "important");

    if (isFolder(el)) {
      var key =
        ((el.className && el.className.toString()) || "").indexOf("games-folder") !== -1
          ? "games-folder"
          : "apps-folder";
      el.style.setProperty("background-image", FOLDER_BG[key], "important");
      el.style.setProperty("background-size", "52%, cover", "important");
      el.style.setProperty("background-color", "transparent", "important");
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
        "0 0 2px #fff, 0 1px 2px #fff, 0 0 6px rgba(255,255,255,.7)",
        "important"
      );
    } else {
      span.style.setProperty("color", "#fff", "important");
      span.style.setProperty(
        "text-shadow",
        "0 0 2px #000, 0 1px 2px #000, 0 1px 4px rgba(0,0,0,.8)",
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
    s.textContent =
      "@media (max-width:899px){" +
      "#mobile .app-img,.mobile .app-img," +
      "#mobile .app-icon .app-img,#mobile .dock .app-img," +
      "#mobile .apps-folder-grid .app-img,#mobile .games-folder-grid .app-img{" +
      "width:48px!important;height:48px!important;" +
      "min-width:48px!important;min-height:48px!important;" +
      "max-width:48px!important;max-height:48px!important;" +
      "border-radius:12px!important;margin:0!important;" +
      "box-sizing:border-box!important;flex-shrink:0!important}" +
      /* Folder icons: keep glyph + gradient layers */
      "#mobile .app-img.apps-folder,.mobile .app-img.apps-folder{" +
      "background-image:url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">' +
          '<rect x="3" y="5" width="7" height="7" rx="1.5"/>' +
          '<rect x="12" y="5" width="7" height="7" rx="1.5"/>' +
          '<rect x="3" y="14" width="7" height="7" rx="1.5"/>' +
          '<rect x="12" y="14" width="7" height="7" rx="1.5"/>' +
          "</svg>"
      ) +
      '\") ,linear-gradient(145deg,#3b82f6,#1d4ed8)!important;' +
      "background-size:52%,cover!important;" +
      "background-position:center,center!important;" +
      "background-repeat:no-repeat,no-repeat!important}" +
      "#mobile .app-img.games-folder,.mobile .app-img.games-folder{" +
      "background-image:url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">' +
          '<path d="M6 10h4v4H6v-4zm8 0h4v4h-4v-4zM8 6h2v2H8V6zm6 0h2v2h-2V6zM8 16h2v2H8v-2zm6 0h2v2h-2v-2z"/>' +
          '<rect x="2" y="8" width="20" height="10" rx="5" fill="none" stroke="#fff" stroke-width="1.8"/>' +
          "</svg>"
      ) +
      '\") ,linear-gradient(145deg,#f59e0b,#ea580c)!important;' +
      "background-size:52%,cover!important;" +
      "background-position:center,center!important;" +
      "background-repeat:no-repeat,no-repeat!important}" +
      "#mobile .app-grid,#mobile .apps-folder-grid,#mobile .games-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:14px 8px!important;justify-items:center!important}" +
      "#mobile .app-icon,#mobile .apps-folder-grid .app-icon,#mobile .games-folder-grid .app-icon{" +
      "display:flex!important;flex-direction:column!important;align-items:center!important;" +
      "gap:4px!important;width:100%!important;max-width:72px!important;min-height:0!important;" +
      "padding:0!important;background:transparent!important;border:0!important}" +
      "#mobile .app-icon span{font-size:10px!important;font-weight:600!important;" +
      "color:#fff!important;text-shadow:0 0 2px #000,0 1px 2px #000!important;" +
      "line-height:1.2!important;text-align:center!important;max-width:100%!important;" +
      "overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}" +
      "body.light #mobile .app-icon span{color:#111!important;" +
      "text-shadow:0 0 2px #fff,0 1px 2px #fff!important}" +
      "#mobile .dock .app-icon span{display:none!important}" +
      "#mobile .apps-folder-grid .app-icon span,#mobile .games-folder-grid .app-icon span," +
      "#mobile .page-body .app-icon span{color:#1c1c1e!important;text-shadow:none!important}" +
      "#mobile .theme-toggle-mobile{width:48px!important;height:48px!important;border-radius:12px!important}" +
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
