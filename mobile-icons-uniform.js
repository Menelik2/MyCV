/* mobile-icons-uniform.js — every mobile icon same size + readable labels */
(function () {
  "use strict";

  var ICON = 48; // px — one size for all
  var RADIUS = 12;

  function isMobile() {
    return window.innerWidth < 900;
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
    el.style.setProperty("background-size", "52%", "important");
    el.style.setProperty("background-repeat", "no-repeat", "important");
    el.style.setProperty("background-position", "center", "important");
    el.style.setProperty("margin", "0", "important");
    el.style.setProperty("flex-shrink", "0", "important");
    el.style.setProperty("box-sizing", "border-box", "important");
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
    if (light) {
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
      "#mobile .app-icon .app-img,.mobile .app-icon .app-img," +
      "#mobile .dock .app-img,.mobile .dock .app-img," +
      "#mobile .apps-folder-grid .app-img,.mobile .apps-folder-grid .app-img," +
      "#mobile .games-folder-grid .app-img,.mobile .games-folder-grid .app-img," +
      "#mobile .app-img.about,#mobile .app-img.edu,#mobile .app-img.experience," +
      "#mobile .app-img.certifications,#mobile .app-img.projects,#mobile .app-img.skills," +
      "#mobile .app-img.contact,#mobile .app-img.resume,#mobile .app-img.edge," +
      "#mobile .app-img.chat,#mobile .app-img.control,#mobile .app-img.device," +
      "#mobile .app-img.apps-folder,#mobile .app-img.games-folder," +
      "#mobile .app-img.notepad,#mobile .app-img.paint,#mobile .app-img.terminal," +
      "#mobile .app-img.voice,#mobile .app-img.sudoku,#mobile .app-img.tetris," +
      "#mobile .app-img.snake,#mobile .app-img.blockblaster," +
      "#mobile .app-img.vscode{" +
      "width:48px!important;height:48px!important;" +
      "min-width:48px!important;min-height:48px!important;" +
      "max-width:48px!important;max-height:48px!important;" +
      "border-radius:12px!important;margin:0!important;" +
      "background-size:52%!important;background-repeat:no-repeat!important;" +
      "background-position:center!important;box-sizing:border-box!important;" +
      "flex-shrink:0!important}" +
      "#mobile .theme-toggle-mobile,.theme-toggle-mobile{" +
      "width:48px!important;height:48px!important;min-width:48px!important;" +
      "min-height:48px!important;border-radius:12px!important}" +
      "#mobile .app-grid,.mobile .app-grid," +
      "#mobile .apps-folder-grid,.mobile .apps-folder-grid," +
      "#mobile .games-folder-grid,.mobile .games-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:14px 8px!important;justify-items:center!important;align-items:start!important}" +
      "#mobile .app-icon,.mobile .app-icon," +
      "#mobile .apps-folder-grid .app-icon,#mobile .games-folder-grid .app-icon{" +
      "display:flex!important;flex-direction:column!important;align-items:center!important;" +
      "gap:4px!important;width:100%!important;max-width:72px!important;min-height:0!important;" +
      "padding:0!important;background:transparent!important;border:0!important}" +
      "#mobile .app-icon span,.mobile .app-icon span{" +
      "font-size:10px!important;font-weight:600!important;color:#fff!important;" +
      "text-shadow:0 0 2px #000,0 1px 2px #000,0 1px 4px rgba(0,0,0,.8)!important;" +
      "line-height:1.2!important;text-align:center!important;max-width:100%!important;" +
      "overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}" +
      "body.light #mobile .app-icon span,body.light .mobile .app-icon span{" +
      "color:#111!important;text-shadow:0 0 2px #fff,0 1px 2px #fff,0 0 6px rgba(255,255,255,.7)!important}" +
      "#mobile .dock .app-icon span,.dock .app-icon span{display:none!important}" +
      "#mobile .page-body .app-icon span,#mobile .apps-folder-grid .app-icon span," +
      "#mobile .games-folder-grid .app-icon span{" +
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
  window.addEventListener("resize", function () {
    injectCss();
    run();
  });
  setTimeout(boot, 200);
  setTimeout(boot, 800);
  setTimeout(boot, 2000);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function () {
      run();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
