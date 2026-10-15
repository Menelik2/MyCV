/* ios-icons.js — iPhone-style home screen app icons */
(function () {
  "use strict";

  function svgUrl(s) {
    return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
  }

  /* iOS-style icon: continuous-ish corner + vertical gloss + glyph */
  function iosIcon(glyph, c1, c2, glyphColor) {
    glyphColor = glyphColor || "#fff";
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">' +
      "<defs>" +
      '<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' +
      c1 +
      '"/>' +
      '<stop offset="100%" stop-color="' +
      c2 +
      '"/>' +
      "</linearGradient>" +
      '<linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#fff" stop-opacity=".38"/>' +
      '<stop offset="42%" stop-color="#fff" stop-opacity=".06"/>' +
      '<stop offset="100%" stop-color="#fff" stop-opacity="0"/>' +
      "</linearGradient>" +
      '<clipPath id="sq"><rect x="0" y="0" width="60" height="60" rx="13.4" ry="13.4"/></clipPath>' +
      "</defs>" +
      '<g clip-path="url(#sq)">' +
      '<rect width="60" height="60" fill="url(#bg)"/>' +
      '<rect width="60" height="30" fill="url(#gloss)"/>' +
      glyph +
      "</g>" +
      "</svg>"
    );
  }

  var ICONS = {
    about: iosIcon(
      '<circle cx="30" cy="22" r="9" fill="#fff"/><ellipse cx="30" cy="46" rx="16" ry="11" fill="#fff"/>',
      "#5ac8fa",
      "#007aff"
    ),
    edu: iosIcon(
      '<path fill="#fff" d="M30 12L10 22l20 10 16-8v12h4V22L30 12zM14 28v10c0 4 16 8 16 8s16-4 16-8V28l-16 8-16-8z"/>',
      "#34c759",
      "#248a3d"
    ),
    experience: iosIcon(
      '<rect x="14" y="20" width="32" height="26" rx="3" fill="#fff"/><rect x="20" y="14" width="20" height="8" rx="2" fill="#fff"/><rect x="22" y="28" width="16" height="2.5" fill="#32ade6"/><rect x="22" y="34" width="12" height="2.5" fill="#32ade6"/>',
      "#64d2ff",
      "#0a84ff"
    ),
    certifications: iosIcon(
      '<path fill="#1c1c1e" d="M30 10l4.5 11H46l-9 7 3.5 11L30 32l-10.5 7 3.5-11-9-7h11.5z"/>',
      "#ffd60a",
      "#ff9f0a",
      "#1c1c1e"
    ),
    projects: iosIcon(
      '<rect x="12" y="14" width="20" height="28" rx="2" fill="#fff"/><rect x="24" y="22" width="24" height="24" rx="2" fill="#fff" opacity=".92"/><rect x="16" y="20" width="10" height="2.5" fill="#ff9f0a"/><rect x="30" y="28" width="12" height="2.5" fill="#ff9f0a"/>',
      "#ff9f0a",
      "#c93400"
    ),
    skills: iosIcon(
      '<path fill="#fff" d="M30 8l5.5 16H52l-13 10 5 16L30 40 16 50l5-16L8 24h16.5z"/>',
      "#bf5af2",
      "#8944ab"
    ),
    contact: iosIcon(
      '<rect x="10" y="16" width="40" height="28" rx="4" fill="#fff"/><path fill="#ff3b30" d="M10 20l20 14 20-14v-4L30 30 10 16z"/>',
      "#ff453a",
      "#d70015"
    ),
    resume: iosIcon(
      '<rect x="16" y="10" width="28" height="40" rx="2" fill="#fff"/><rect x="20" y="16" width="20" height="2.5" fill="#007aff"/><rect x="20" y="22" width="20" height="2" fill="#8e8e93"/><rect x="20" y="27" width="14" height="2" fill="#8e8e93"/><rect x="20" y="32" width="18" height="2" fill="#8e8e93"/>',
      "#64d2ff",
      "#0071e3"
    ),
    "apps-folder": iosIcon(
      '<rect x="12" y="12" width="14" height="14" rx="3" fill="#fff" opacity=".95"/><rect x="34" y="12" width="14" height="14" rx="3" fill="#fff" opacity=".85"/><rect x="12" y="34" width="14" height="14" rx="3" fill="#fff" opacity=".85"/><rect x="34" y="34" width="14" height="14" rx="3" fill="#fff" opacity=".7"/>',
      "#8e8e93",
      "#636366"
    ),
    "games-folder": iosIcon(
      '<rect x="14" y="22" width="32" height="20" rx="6" fill="#fff"/><circle cx="22" cy="32" r="4" fill="#ff2d55"/><circle cx="38" cy="32" r="4" fill="#007aff"/><rect x="26" y="14" width="8" height="10" rx="2" fill="#fff"/>',
      "#ff2d55",
      "#d70040"
    ),
    edge: iosIcon(
      '<circle cx="30" cy="30" r="16" fill="none" stroke="#fff" stroke-width="3"/><ellipse cx="30" cy="30" rx="16" ry="6" fill="none" stroke="#fff" stroke-width="2"/><text x="30" y="36" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="-apple-system,system-ui,sans-serif">e</text>',
      "#0a84ff",
      "#0040dd"
    ),
    chat: iosIcon(
      '<path fill="#fff" d="M12 14h28a6 6 0 016 6v14a6 6 0 01-6 6H28l-10 8v-8h-6a6 6 0 01-6-6V20a6 6 0 016-6z"/><circle cx="22" cy="30" r="2.5" fill="#34c759"/><circle cx="30" cy="30" r="2.5" fill="#34c759"/><circle cx="38" cy="30" r="2.5" fill="#34c759"/>',
      "#30d158",
      "#248a3d"
    ),
    control: iosIcon(
      '<circle cx="30" cy="30" r="10" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="30" cy="30" r="4" fill="#fff"/><rect x="28" y="10" width="4" height="8" rx="1" fill="#fff"/><rect x="28" y="42" width="4" height="8" rx="1" fill="#fff"/><rect x="10" y="28" width="8" height="4" rx="1" fill="#fff"/><rect x="42" y="28" width="8" height="4" rx="1" fill="#fff"/>',
      "#8e8e93",
      "#48484a"
    ),
    device: iosIcon(
      '<rect x="18" y="8" width="24" height="44" rx="4" fill="#fff"/><rect x="21" y="12" width="18" height="32" fill="#1c1c1e"/><circle cx="30" cy="48" r="2" fill="#8e8e93"/>',
      "#a2a2a7",
      "#636366"
    ),
    notepad: iosIcon(
      '<rect x="14" y="8" width="32" height="44" rx="2" fill="#fff"/><rect x="18" y="14" width="24" height="2.5" fill="#ff9f0a"/><rect x="18" y="21" width="24" height="2" fill="#aeaeb2"/><rect x="18" y="27" width="20" height="2" fill="#aeaeb2"/><rect x="18" y="33" width="22" height="2" fill="#aeaeb2"/>',
      "#ffd60a",
      "#ff9f0a"
    ),
    paint: iosIcon(
      '<rect x="14" y="12" width="32" height="28" rx="2" fill="#fff"/><rect x="17" y="15" width="10" height="10" fill="#ff3b30"/><rect x="29" y="15" width="10" height="10" fill="#34c759"/><rect x="17" y="27" width="10" height="10" fill="#007aff"/><rect x="29" y="27" width="10" height="10" fill="#ffd60a"/><path fill="#8e5a3c" d="M36 40l8 12 3-2-8-12z"/>',
      "#ff9f0a",
      "#ff453a"
    ),
    terminal: iosIcon(
      '<rect x="8" y="12" width="44" height="36" rx="4" fill="#1c1c1e"/><text x="14" y="34" font-family="ui-monospace,Menlo,monospace" font-size="14" fill="#30d158">>_</text>',
      "#2c2c2e",
      "#1c1c1e"
    ),
    voice: iosIcon(
      '<rect x="26" y="12" width="8" height="22" rx="4" fill="#fff"/><path fill="#fff" d="M18 28a12 12 0 0024 0h-3a9 9 0 01-18 0z"/><rect x="28" y="40" width="4" height="8" fill="#fff"/><rect x="20" y="46" width="20" height="3" rx="1.5" fill="#fff"/>',
      "#ff2d55",
      "#d70040"
    ),
    sudoku: iosIcon(
      '<rect x="12" y="12" width="36" height="36" rx="2" fill="#fff"/><path stroke="#5856d6" stroke-width="1.5" fill="none" d="M24 12v36M36 12v36M12 24h36M12 36h36"/><path stroke="#1c1c1e" stroke-width="2.5" fill="none" d="M12 12h36v36H12z"/>',
      "#5e5ce6",
      "#3634a3"
    ),
    tetris: iosIcon(
      '<g fill="#fff"><rect x="22" y="10" width="12" height="12" rx="1"/><rect x="10" y="22" width="12" height="12" rx="1"/><rect x="22" y="22" width="12" height="12" rx="1"/><rect x="34" y="22" width="12" height="12" rx="1"/><rect x="22" y="34" width="12" height="12" rx="1"/></g>',
      "#ff2d55",
      "#bf1d3f"
    ),
    snake: iosIcon(
      '<path fill="#fff" d="M14 36c0-12 10-18 18-18s14 6 14 12-6 10-12 10h-8v6h-6v-6h-4c-2 0-2-2-2-4z"/><circle cx="38" cy="28" r="2.5" fill="#1c1c1e"/>',
      "#30d158",
      "#1b7a36"
    )
  };

  function classKey(el) {
    var cls = el.className || "";
    var keys = Object.keys(ICONS);
    for (var i = 0; i < keys.length; i++) {
      if (cls.indexOf(keys[i]) !== -1) return keys[i];
    }
    return null;
  }

  function paint(el) {
    if (!el || el.dataset.iosIcon === "1") return;
    var key = classKey(el);
    if (!key) return;
    el.style.backgroundColor = "transparent";
    el.style.backgroundImage = svgUrl(ICONS[key]);
    el.style.backgroundSize = "100% 100%";
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundPosition = "center";
    el.style.borderRadius = "13.4px";
    el.style.boxShadow =
      "0 1px 1px rgba(255,255,255,.25) inset, 0 4px 10px rgba(0,0,0,.28)";
    el.dataset.iosIcon = "1";
  }

  function paintAll() {
    document.querySelectorAll("#mobile .app-img, .mobile .app-img").forEach(paint);
  }

  function injectCss() {
    if (document.getElementById("ios-icons-css")) return;
    var s = document.createElement("style");
    s.id = "ios-icons-css";
    s.textContent =
      "@media (max-width:899px){" +
      "#mobile .app-grid,.mobile .app-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:18px 10px!important;padding:12px 16px 20px!important}" +
      "#mobile .app-icon,.mobile .app-icon{" +
      "display:flex!important;flex-direction:column!important;align-items:center!important;" +
      "gap:6px!important;background:none!important;border:none!important;" +
      "font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Segoe UI\",sans-serif!important;" +
      "font-size:11px!important;font-weight:500!important;color:#fff!important;" +
      "text-shadow:0 1px 2px rgba(0,0,0,.45)!important;-webkit-tap-highlight-color:transparent!important}" +
      "body.light #mobile .app-icon,body.light .mobile .app-icon{color:#1c1c1e!important;text-shadow:none!important}" +
      "#mobile .app-img,.mobile .app-img{" +
      "width:60px!important;height:60px!important;border-radius:13.4px!important;" +
      "background-size:100% 100%!important;background-repeat:no-repeat!important;" +
      "box-shadow:0 1px 1px rgba(255,255,255,.25) inset,0 4px 10px rgba(0,0,0,.28)!important}" +
      "#mobile .dock,.mobile .dock{" +
      "display:flex!important;justify-content:center!important;gap:16px!important;" +
      "padding:12px 14px 14px!important;margin:8px 12px 10px!important;" +
      "background:rgba(255,255,255,.18)!important;backdrop-filter:blur(24px) saturate(180%)!important;" +
      "-webkit-backdrop-filter:blur(24px) saturate(180%)!important;border-radius:28px!important;" +
      "border:1px solid rgba(255,255,255,.2)!important}" +
      "body.light #mobile .dock,body.light .mobile .dock{background:rgba(255,255,255,.55)!important}" +
      "#mobile .dock .app-img,.mobile .dock .app-img{width:54px!important;height:54px!important;border-radius:12px!important}" +
      "#mobile .apps-folder-grid,.mobile .apps-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:16px 10px!important}" +
      "}";
    document.head.appendChild(s);
  }

  function run() {
    injectCss();
    paintAll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  document.addEventListener("menelik-boot-done", run);
  setTimeout(run, 400);
  setTimeout(run, 1200);
  setTimeout(run, 2500);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function () {
      paintAll();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
