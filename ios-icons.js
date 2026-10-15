/* ios-icons.js — compact real iPhone home-screen icons */
(function () {
  "use strict";

  var SIZE = 48; // iPhone-like visual size on web
  var RADIUS = 10.7; // ~22.37% of 48 (Apple continuous corner approx)

  function svgUrl(s) {
    return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
  }

  function iosIcon(id, glyph, c1, c2) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">' +
      "<defs>" +
      '<linearGradient id="b' +
      id +
      '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' +
      c1 +
      '"/>' +
      '<stop offset="100%" stop-color="' +
      c2 +
      '"/>' +
      "</linearGradient>" +
      '<linearGradient id="g' +
      id +
      '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#fff" stop-opacity=".28"/>' +
      '<stop offset="40%" stop-color="#fff" stop-opacity=".04"/>' +
      '<stop offset="100%" stop-color="#000" stop-opacity="0"/>' +
      "</linearGradient>" +
      "</defs>" +
      '<rect width="48" height="48" rx="' +
      RADIUS +
      '" ry="' +
      RADIUS +
      '" fill="url(#b' +
      id +
      ')"/>' +
      '<rect width="48" height="22" rx="' +
      RADIUS +
      '" ry="' +
      RADIUS +
      '" fill="url(#g' +
      id +
      ')"/>' +
      glyph +
      "</svg>"
    );
  }

  /* Compact SF-style glyphs centered in 48px */
  var ICONS = {
    about: iosIcon(
      "1",
      '<circle cx="24" cy="17" r="6.5" fill="#fff"/><path fill="#fff" d="M10 38c0-7.5 6.3-11 14-11s14 3.5 14 11v2H10v-2z"/>',
      "#64d2ff",
      "#007aff"
    ),
    edu: iosIcon(
      "2",
      '<path fill="#fff" d="M24 10L8 18l16 8 13-6.5V28h3V18L24 10zM12 24.5V32c0 3 12 6 12 6s12-3 12-6v-7.5L24 30 12 24.5z"/>',
      "#30d158",
      "#248a3d"
    ),
    experience: iosIcon(
      "3",
      '<path fill="#fff" d="M17 14h14a2 2 0 012 2v2h5a2 2 0 012 2v16a2 2 0 01-2 2H10a2 2 0 01-2-2V20a2 2 0 012-2h5v-2a2 2 0 012-2zm2 4h10v-2H19v2z"/>',
      "#5ac8fa",
      "#0a84ff"
    ),
    certifications: iosIcon(
      "4",
      '<path fill="#1c1c1e" d="M24 9l3.2 8.2H36l-6.6 5 2.5 8.3L24 25.8l-7.9 4.7 2.5-8.3L12 17.2h8.8z"/>',
      "#ffd60a",
      "#ff9f0a"
    ),
    projects: iosIcon(
      "5",
      '<rect x="10" y="12" width="16" height="22" rx="2" fill="#fff"/><rect x="20" y="18" width="18" height="18" rx="2" fill="#fff" opacity=".9"/>',
      "#ff9f0a",
      "#c93400"
    ),
    skills: iosIcon(
      "6",
      '<path fill="#fff" d="M24 8l3.8 11.2H40L29.9 26l3.7 11.3L24 30.4 14.4 37.3 18.1 26 8 19.2h12.2z"/>',
      "#bf5af2",
      "#8944ab"
    ),
    contact: iosIcon(
      "7",
      '<rect x="9" y="14" width="30" height="20" rx="3" fill="#fff"/><path fill="#ff3b30" d="M9 17l15 10 15-10v-3L24 24 9 14z"/>',
      "#ff453a",
      "#d70015"
    ),
    resume: iosIcon(
      "8",
      '<rect x="13" y="8" width="22" height="32" rx="2" fill="#fff"/><rect x="16" y="13" width="16" height="2" fill="#007aff"/><rect x="16" y="18" width="16" height="1.6" fill="#aeaeb2"/><rect x="16" y="22" width="12" height="1.6" fill="#aeaeb2"/><rect x="16" y="26" width="14" height="1.6" fill="#aeaeb2"/>',
      "#64d2ff",
      "#0071e3"
    ),
    "apps-folder": iosIcon(
      "9",
      '<rect x="10" y="10" width="11" height="11" rx="2.5" fill="#fff"/><rect x="27" y="10" width="11" height="11" rx="2.5" fill="#fff" opacity=".9"/><rect x="10" y="27" width="11" height="11" rx="2.5" fill="#fff" opacity=".9"/><rect x="27" y="27" width="11" height="11" rx="2.5" fill="#fff" opacity=".75"/>',
      "#8e8e93",
      "#636366"
    ),
    "games-folder": iosIcon(
      "a",
      '<rect x="11" y="18" width="26" height="16" rx="5" fill="#fff"/><circle cx="18" cy="26" r="3" fill="#ff2d55"/><circle cx="30" cy="26" r="3" fill="#007aff"/>',
      "#ff2d55",
      "#d70040"
    ),
    edge: iosIcon(
      "b",
      '<circle cx="24" cy="24" r="12" fill="none" stroke="#fff" stroke-width="2.4"/><ellipse cx="24" cy="24" rx="12" ry="4.5" fill="none" stroke="#fff" stroke-width="1.6"/><text x="24" y="28.5" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="-apple-system,system-ui,sans-serif">e</text>',
      "#0a84ff",
      "#0040dd"
    ),
    chat: iosIcon(
      "c",
      '<path fill="#fff" d="M10 12h22a5 5 0 015 5v11a5 5 0 01-5 5H24l-8 6v-6h-6a5 5 0 01-5-5V17a5 5 0 015-5z"/>',
      "#30d158",
      "#248a3d"
    ),
    control: iosIcon(
      "d",
      '<circle cx="24" cy="24" r="7.5" fill="none" stroke="#fff" stroke-width="2.8"/><circle cx="24" cy="24" r="3" fill="#fff"/><rect x="22.5" y="8" width="3" height="6" rx="1" fill="#fff"/><rect x="22.5" y="34" width="3" height="6" rx="1" fill="#fff"/><rect x="8" y="22.5" width="6" height="3" rx="1" fill="#fff"/><rect x="34" y="22.5" width="6" height="3" rx="1" fill="#fff"/>',
      "#8e8e93",
      "#48484a"
    ),
    device: iosIcon(
      "e",
      '<rect x="15" y="7" width="18" height="34" rx="3" fill="#fff"/><rect x="17.5" y="10" width="13" height="25" fill="#1c1c1e"/><circle cx="24" cy="38" r="1.5" fill="#8e8e93"/>',
      "#aeaeb2",
      "#636366"
    ),
    notepad: iosIcon(
      "f",
      '<rect x="12" y="7" width="24" height="34" rx="2" fill="#fff"/><rect x="15" y="12" width="18" height="2" fill="#ff9f0a"/><rect x="15" y="17" width="18" height="1.5" fill="#c7c7cc"/><rect x="15" y="21" width="14" height="1.5" fill="#c7c7cc"/><rect x="15" y="25" width="16" height="1.5" fill="#c7c7cc"/>',
      "#ffd60a",
      "#ff9f0a"
    ),
    paint: iosIcon(
      "g",
      '<rect x="12" y="11" width="24" height="20" rx="2" fill="#fff"/><rect x="14" y="13" width="8" height="8" fill="#ff3b30"/><rect x="24" y="13" width="8" height="8" fill="#34c759"/><rect x="14" y="23" width="8" height="8" fill="#007aff"/><rect x="24" y="23" width="8" height="8" fill="#ffd60a"/>',
      "#ff9f0a",
      "#ff453a"
    ),
    terminal: iosIcon(
      "h",
      '<rect x="7" y="11" width="34" height="26" rx="3" fill="#1c1c1e"/><text x="12" y="28" font-family="ui-monospace,Menlo,monospace" font-size="11" fill="#30d158">>_</text>',
      "#3a3a3c",
      "#1c1c1e"
    ),
    voice: iosIcon(
      "i",
      '<rect x="21" y="10" width="6" height="16" rx="3" fill="#fff"/><path fill="#fff" d="M15 24a9 9 0 0018 0h-2.5a6.5 6.5 0 01-13 0z"/><rect x="22.5" y="33" width="3" height="5" fill="#fff"/><rect x="16" y="37" width="16" height="2.5" rx="1" fill="#fff"/>',
      "#ff2d55",
      "#d70040"
    ),
    sudoku: iosIcon(
      "j",
      '<rect x="10" y="10" width="28" height="28" rx="2" fill="#fff"/><path stroke="#5856d6" stroke-width="1.2" fill="none" d="M19.3 10v28M28.7 10v28M10 19.3h28M10 28.7h28"/><path stroke="#1c1c1e" stroke-width="2" fill="none" d="M10 10h28v28H10z"/>',
      "#5e5ce6",
      "#3634a3"
    ),
    tetris: iosIcon(
      "k",
      '<g fill="#fff"><rect x="18" y="8" width="10" height="10" rx="1"/><rect x="8" y="18" width="10" height="10" rx="1"/><rect x="18" y="18" width="10" height="10" rx="1"/><rect x="28" y="18" width="10" height="10" rx="1"/><rect x="18" y="28" width="10" height="10" rx="1"/></g>',
      "#ff2d55",
      "#bf1d3f"
    ),
    snake: iosIcon(
      "l",
      '<path fill="#fff" d="M12 30c0-9 8-14 14-14s11 4 11 9-5 8-10 8h-6v5h-5v-5h-3c-1.5 0-1.5-1.5-1.5-3z"/><circle cx="31" cy="23" r="2" fill="#1c1c1e"/>',
      "#30d158",
      "#1b7a36"
    )
  };

  function classKey(el) {
    var cls = (el.className && el.className.toString()) || "";
    var keys = Object.keys(ICONS);
    for (var i = 0; i < keys.length; i++) {
      // word boundary-ish match so "about" does not hit inside other names
      if (new RegExp("(^|\\s)" + keys[i].replace("-", "\\-") + "(\\s|$)").test(cls)) {
        return keys[i];
      }
      if (cls.indexOf(keys[i]) !== -1) return keys[i];
    }
    return null;
  }

  function paint(el) {
    if (!el) return;
    var key = classKey(el);
    if (!key) return;
    el.style.backgroundColor = "transparent";
    el.style.backgroundImage = svgUrl(ICONS[key]);
    el.style.backgroundSize = "100% 100%";
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundPosition = "center";
    el.style.width = SIZE + "px";
    el.style.height = SIZE + "px";
    el.style.minWidth = SIZE + "px";
    el.style.minHeight = SIZE + "px";
    el.style.borderRadius = RADIUS + "px";
    el.style.boxShadow = "0 1px 2px rgba(0,0,0,.22)";
    el.dataset.iosIcon = "2";
  }

  function paintAll() {
    document.querySelectorAll("#mobile .app-img, .mobile .app-img").forEach(function (el) {
      el.dataset.iosIcon = "";
      paint(el);
    });
  }

  function injectCss() {
    var old = document.getElementById("ios-icons-css");
    if (old) old.remove();
    var s = document.createElement("style");
    s.id = "ios-icons-css";
    s.textContent =
      "@media (max-width:899px){" +
      /* tighter iPhone home grid */
      "#mobile .app-grid,.mobile .app-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:14px 8px!important;padding:8px 18px 12px!important;justify-items:center!important}" +
      "#mobile .app-icon,.mobile .app-icon{" +
      "display:flex!important;flex-direction:column!important;align-items:center!important;" +
      "justify-content:flex-start!important;gap:5px!important;" +
      "width:100%!important;max-width:72px!important;min-height:0!important;" +
      "padding:0!important;background:none!important;border:none!important;" +
      "font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Text\",\"Helvetica Neue\",sans-serif!important;" +
      "font-size:10px!important;font-weight:400!important;letter-spacing:-0.08px!important;" +
      "color:rgba(255,255,255,.92)!important;text-shadow:0 0.5px 1px rgba(0,0,0,.35)!important;" +
      "-webkit-tap-highlight-color:transparent!important}" +
      "body.light #mobile .app-icon,body.light .mobile .app-icon{" +
      "color:#1c1c1e!important;text-shadow:none!important}" +
      "#mobile .app-icon span,.mobile .app-icon span{" +
      "font-size:10px!important;line-height:1.15!important;max-width:100%!important;" +
      "overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}" +
      "#mobile .app-img,.mobile .app-img{" +
      "width:48px!important;height:48px!important;min-width:48px!important;min-height:48px!important;" +
      "border-radius:10.7px!important;margin:0!important;" +
      "background-size:100% 100%!important;background-repeat:no-repeat!important;" +
      "box-shadow:0 1px 2px rgba(0,0,0,.22)!important}" +
      /* dock — smaller icons, more glass */
      "#mobile .dock,.mobile .dock{" +
      "display:flex!important;justify-content:space-evenly!important;align-items:center!important;" +
      "gap:0!important;padding:10px 16px!important;margin:6px 10px 8px!important;" +
      "background:rgba(255,255,255,.2)!important;backdrop-filter:blur(30px) saturate(180%)!important;" +
      "-webkit-backdrop-filter:blur(30px) saturate(180%)!important;border-radius:22px!important;" +
      "border:0.5px solid rgba(255,255,255,.28)!important}" +
      "body.light #mobile .dock,body.light .mobile .dock{background:rgba(255,255,255,.55)!important}" +
      "#mobile .dock .app-icon,.mobile .dock .app-icon{max-width:56px!important;gap:0!important}" +
      "#mobile .dock .app-img,.mobile .dock .app-img{" +
      "width:46px!important;height:46px!important;min-width:46px!important;min-height:46px!important;" +
      "border-radius:10.3px!important}" +
      "#mobile .dock .app-icon span,.mobile .dock .app-icon span{display:none!important}" +
      "#mobile .apps-folder-grid,.mobile .apps-folder-grid," +
      "#mobile .games-folder-grid,.mobile .games-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:14px 8px!important;justify-items:center!important;padding:8px!important}" +
      /* kill oversized rules from other CSS */
      "#mobile .app-icon .app-img{width:48px!important;height:48px!important}" +
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
  setTimeout(run, 300);
  setTimeout(run, 900);
  setTimeout(run, 2000);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function () {
      paintAll();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
