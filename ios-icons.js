/* ios-icons.js — authentic iOS system-style home icons */
(function () {
  "use strict";

  var SIZE = 52;
  var R = 11.6;

  function u(s) {
    return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
  }

  function base(id, body, stops) {
    var g = stops
      .map(function (s) {
        return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"/>';
      })
      .join("");
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">' +
      "<defs>" +
      '<linearGradient id="bg' +
      id +
      '" x1="0" y1="0" x2="0" y2="1">' +
      g +
      "</linearGradient>" +
      '<linearGradient id="sh' +
      id +
      '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#fff" stop-opacity=".32"/>' +
      '<stop offset="45%" stop-color="#fff" stop-opacity=".05"/>' +
      '<stop offset="100%" stop-color="#000" stop-opacity=".06"/>' +
      "</linearGradient>" +
      "</defs>" +
      '<rect width="52" height="52" rx="' +
      R +
      '" ry="' +
      R +
      '" fill="url(#bg' +
      id +
      ')"/>' +
      '<rect width="52" height="52" rx="' +
      R +
      '" ry="' +
      R +
      '" fill="url(#sh' +
      id +
      ')"/>' +
      body +
      "</svg>"
    );
  }

  var ICONS = {
    about: base(
      "ab",
      '<circle cx="26" cy="18.5" r="8" fill="#fff"/>' +
        '<path fill="#fff" d="M8 44c0-9.4 8-14.5 18-14.5S44 34.6 44 44v2H8v-2z"/>',
      [["0%", "#5ac8fa"], ["100%", "#007aff"]]
    ),
    edu: base(
      "ed",
      '<path fill="#fff" d="M9 14h15v24H12a3 3 0 01-3-3V14z" opacity=".95"/>' +
        '<path fill="#fff" d="M28 14h15v21a3 3 0 01-3 3H28V14z"/>' +
        '<path fill="#30d158" d="M24 14h4v24h-4z" opacity=".9"/>',
      [["0%", "#64d2ff"], ["100%", "#0a84ff"]]
    ),
    experience: base(
      "ex",
      '<rect x="11" y="18" width="30" height="24" rx="3" fill="#fff"/>' +
        '<rect x="17" y="12" width="18" height="8" rx="2" fill="#fff"/>' +
        '<rect x="15" y="26" width="22" height="2.5" rx="1" fill="#32ade6"/>' +
        '<rect x="15" y="32" width="14" height="2.5" rx="1" fill="#32ade6"/>',
      [["0%", "#64d2ff"], ["100%", "#0071e3"]]
    ),
    certifications: base(
      "ce",
      '<path fill="#1c1c1e" d="M26 10l3.8 9.5H40l-8 6.2 3 9.8L26 29.5 17 35.5l3-9.8-8-6.2h10.2z"/>',
      [["0%", "#ffd60a"], ["100%", "#ff9f0a"]]
    ),
    projects: base(
      "pr",
      '<rect x="12" y="14" width="20" height="26" rx="2.5" fill="#fff" opacity=".85"/>' +
        '<rect x="18" y="12" width="22" height="28" rx="2.5" fill="#fff"/>' +
        '<circle cx="25" cy="22" r="4" fill="#ff9f0a"/>' +
        '<path fill="#ff9f0a" d="M18 34l6-8 4 5 3-3 7 6H18z" opacity=".9"/>',
      [["0%", "#ff9f0a"], ["100%", "#ff453a"]]
    ),
    skills: base(
      "sk",
      '<path fill="#fff" d="M26 9l4.2 12.2H43L32.6 28.7l4 12.3L26 33.5 15.4 41l4-12.3L9 21.2h12.8z"/>',
      [["0%", "#d4a0ff"], ["100%", "#bf5af2"]]
    ),
    contact: base(
      "co",
      '<rect x="8" y="14" width="36" height="24" rx="3" fill="#fff"/>' +
        '<path fill="#ff3b30" d="M8 16.5L26 29 44 16.5V14L26 26.5 8 14z"/>',
      [["0%", "#ff6961"], ["100%", "#d70015"]]
    ),
    resume: base(
      "re",
      '<rect x="13" y="8" width="26" height="36" rx="2.5" fill="#fff"/>' +
        '<rect x="17" y="14" width="18" height="2.2" rx="1" fill="#007aff"/>' +
        '<rect x="17" y="20" width="18" height="1.8" rx=".8" fill="#c7c7cc"/>' +
        '<rect x="17" y="25" width="14" height="1.8" rx=".8" fill="#c7c7cc"/>' +
        '<rect x="17" y="30" width="16" height="1.8" rx=".8" fill="#c7c7cc"/>' +
        '<rect x="17" y="35" width="10" height="1.8" rx=".8" fill="#c7c7cc"/>',
      [["0%", "#64d2ff"], ["100%", "#007aff"]]
    ),
    "apps-folder": base(
      "af",
      '<rect x="9" y="9" width="14" height="14" rx="3.2" fill="#5ac8fa"/>' +
        '<rect x="29" y="9" width="14" height="14" rx="3.2" fill="#30d158"/>' +
        '<rect x="9" y="29" width="14" height="14" rx="3.2" fill="#ff9f0a"/>' +
        '<rect x="29" y="29" width="14" height="14" rx="3.2" fill="#ff453a"/>',
      [["0%", "#b0b0b5"], ["100%", "#6c6c70"]]
    ),
    "games-folder": base(
      "gf",
      '<circle cx="20" cy="22" r="8" fill="#fff"/>' +
        '<circle cx="34" cy="30" r="7" fill="#fff" opacity=".92"/>' +
        '<path fill="#ff2d55" d="M17 20h6v4h-6z"/><path fill="#ff2d55" d="M20 17h4v6h-4z"/>' +
        '<circle cx="32" cy="28" r="2" fill="#007aff"/><circle cx="36" cy="32" r="2" fill="#ffd60a"/>',
      [["0%", "#ff6482"], ["100%", "#d70040"]]
    ),
    edge: base(
      "eg",
      '<circle cx="26" cy="26" r="16" fill="#fff"/>' +
        '<circle cx="26" cy="26" r="13.5" fill="none" stroke="#64d2ff" stroke-width="1"/>' +
        '<path fill="#ff3b30" d="M26 12l3.5 18.5L26 28l-3.5 2.5z"/>' +
        '<path fill="#007aff" d="M26 40l-3.5-18.5L26 24l3.5-2.5z"/>' +
        '<circle cx="26" cy="26" r="2.2" fill="#1c1c1e"/>',
      [["0%", "#5ac8fa"], ["100%", "#0071e3"]]
    ),
    chat: base(
      "ch",
      '<path fill="#fff" d="M9 13h26a6 6 0 016 6v12a6 6 0 01-6 6H24l-9 7v-7H9a6 6 0 01-6-6V19a6 6 0 016-6z"/>',
      [["0%", "#34c759"], ["100%", "#248a3d"]]
    ),
    control: base(
      "ct",
      '<g fill="#fff"><circle cx="26" cy="26" r="6.5"/><circle cx="26" cy="26" r="11" fill="none" stroke="#fff" stroke-width="5"/></g>' +
        '<circle cx="26" cy="26" r="4" fill="#8e8e93"/>' +
        '<g fill="#fff">' +
        '<rect x="24.2" y="6" width="3.6" height="7" rx="1"/>' +
        '<rect x="24.2" y="39" width="3.6" height="7" rx="1"/>' +
        '<rect x="6" y="24.2" width="7" height="3.6" rx="1"/>' +
        '<rect x="39" y="24.2" width="7" height="3.6" rx="1"/>' +
        "</g>",
      [["0%", "#c7c7cc"], ["100%", "#636366"]]
    ),
    device: base(
      "dv",
      '<rect x="16" y="6" width="20" height="40" rx="4" fill="#fff"/>' +
        '<rect x="18" y="10" width="16" height="28" rx="1" fill="#1c1c1e"/>' +
        '<circle cx="26" cy="42" r="2" fill="#c7c7cc"/>' +
        '<rect x="22" y="8" width="8" height="1.5" rx=".75" fill="#c7c7cc"/>',
      [["0%", "#d1d1d6"], ["100%", "#8e8e93"]]
    ),
    notepad: base(
      "np",
      '<rect x="11" y="7" width="30" height="38" rx="2.5" fill="#fff"/>' +
        '<rect x="11" y="7" width="30" height="8" rx="2.5" fill="#ffd60a"/>' +
        '<rect x="11" y="13" width="30" height="2" fill="#ffd60a"/>' +
        '<rect x="15" y="20" width="22" height="1.6" fill="#c7c7cc"/>' +
        '<rect x="15" y="25" width="22" height="1.6" fill="#c7c7cc"/>' +
        '<rect x="15" y="30" width="18" height="1.6" fill="#c7c7cc"/>' +
        '<rect x="15" y="35" width="20" height="1.6" fill="#c7c7cc"/>',
      [["0%", "#ffe566"], ["100%", "#ff9f0a"]]
    ),
    paint: base(
      "pt",
      '<circle cx="20" cy="20" r="8" fill="#ff3b30"/>' +
        '<circle cx="32" cy="20" r="8" fill="#ffd60a"/>' +
        '<circle cx="20" cy="32" r="8" fill="#007aff"/>' +
        '<circle cx="32" cy="32" r="8" fill="#30d158"/>',
      [["0%", "#fff"], ["100%", "#e5e5ea"]]
    ),
    terminal: base(
      "tm",
      '<rect x="7" y="11" width="38" height="30" rx="4" fill="#1c1c1e"/>' +
        '<path fill="none" stroke="#30d158" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M13 22l6 5-6 5"/>' +
        '<rect x="22" y="30" width="12" height="2.2" rx="1" fill="#30d158"/>',
      [["0%", "#3a3a3c"], ["100%", "#1c1c1e"]]
    ),
    voice: base(
      "vo",
      '<rect x="22" y="10" width="8" height="18" rx="4" fill="#fff"/>' +
        '<path fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" d="M16 26a10 10 0 0020 0"/>' +
        '<path stroke="#fff" stroke-width="2.5" stroke-linecap="round" d="M26 36v6"/>' +
        '<path stroke="#fff" stroke-width="2.5" stroke-linecap="round" d="M20 42h12"/>',
      [["0%", "#ff6482"], ["100%", "#d70040"]]
    ),
    sudoku: base(
      "su",
      '<rect x="10" y="10" width="32" height="32" rx="3" fill="#fff"/>' +
        '<path stroke="#5856d6" stroke-width="1.2" d="M20.7 10v32M31.3 10v32M10 20.7h32M10 31.3h32"/>' +
        '<path stroke="#1c1c1e" stroke-width="2.2" fill="none" d="M10 10h32v32H10z"/>',
      [["0%", "#7d7aff"], ["100%", "#3634a3"]]
    ),
    tetris: base(
      "te",
      '<g fill="#fff">' +
        '<rect x="20" y="8" width="11" height="11" rx="1.5"/>' +
        '<rect x="9" y="19" width="11" height="11" rx="1.5"/>' +
        '<rect x="20" y="19" width="11" height="11" rx="1.5"/>' +
        '<rect x="31" y="19" width="11" height="11" rx="1.5"/>' +
        '<rect x="20" y="30" width="11" height="11" rx="1.5"/>' +
        "</g>",
      [["0%", "#ff6482"], ["100%", "#bf1d3f"]]
    ),
    snake: base(
      "sn",
      '<path fill="#fff" d="M12 32c0-10 9-15 16-15s12 5 12 10-5 9-11 9h-7v5h-5v-5h-3c-1.5 0-2-1.5-2-4z"/>' +
        '<circle cx="33" cy="24" r="2.2" fill="#1c1c1e"/>',
      [["0%", "#30d158"], ["100%", "#1b7a36"]]
    )
  };

  function classKey(el) {
    var cls = (el.className && el.className.toString()) || "";
    var keys = Object.keys(ICONS);
    for (var i = 0; i < keys.length; i++) {
      if (cls.indexOf(keys[i]) !== -1) return keys[i];
    }
    return null;
  }

  function paint(el) {
    if (!el) return;
    var key = classKey(el);
    if (!key) return;
    el.style.backgroundColor = "transparent";
    el.style.backgroundImage = u(ICONS[key]);
    el.style.backgroundSize = "cover";
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundPosition = "center";
    el.style.width = SIZE + "px";
    el.style.height = SIZE + "px";
    el.style.minWidth = SIZE + "px";
    el.style.minHeight = SIZE + "px";
    el.style.borderRadius = R + "px";
    el.style.boxShadow = "0 1px 3px rgba(0,0,0,.25)";
    el.style.overflow = "hidden";
    el.dataset.iosIcon = "3";
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
      "#mobile .app-grid,.mobile .app-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:16px 6px!important;padding:10px 20px 14px!important;justify-items:center!important}" +
      "#mobile .app-icon,.mobile .app-icon{" +
      "display:flex!important;flex-direction:column!important;align-items:center!important;" +
      "gap:5px!important;width:100%!important;max-width:76px!important;min-height:0!important;" +
      "padding:0!important;background:transparent!important;border:0!important;" +
      "font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',sans-serif!important;" +
      "font-size:10px!important;font-weight:400!important;letter-spacing:-0.1px!important;" +
      "color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.4)!important;" +
      "-webkit-tap-highlight-color:transparent!important}" +
      "body.light #mobile .app-icon{color:#1c1c1e!important;text-shadow:none!important}" +
      "#mobile .app-icon span{font-size:10px!important;line-height:1.15!important;" +
      "max-width:100%!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}" +
      "#mobile .app-img,.mobile .app-img,#mobile .app-icon .app-img{" +
      "width:52px!important;height:52px!important;min-width:52px!important;min-height:52px!important;" +
      "border-radius:11.6px!important;margin:0!important;" +
      "background-size:cover!important;background-repeat:no-repeat!important;" +
      "box-shadow:0 1px 3px rgba(0,0,0,.25)!important}" +
      "#mobile .dock,.mobile .dock{" +
      "display:flex!important;justify-content:space-evenly!important;align-items:center!important;" +
      "padding:11px 18px!important;margin:8px 12px 10px!important;" +
      "background:rgba(255,255,255,.22)!important;" +
      "backdrop-filter:blur(40px) saturate(180%)!important;" +
      "-webkit-backdrop-filter:blur(40px) saturate(180%)!important;" +
      "border-radius:24px!important;border:.5px solid rgba(255,255,255,.3)!important}" +
      "body.light #mobile .dock{background:rgba(255,255,255,.6)!important}" +
      "#mobile .dock .app-img{width:50px!important;height:50px!important;min-width:50px!important;min-height:50px!important;border-radius:11.2px!important}" +
      "#mobile .dock .app-icon span{display:none!important}" +
      "#mobile .apps-folder-grid,#mobile .games-folder-grid{" +
      "display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;" +
      "gap:16px 6px!important;justify-items:center!important;padding:12px!important}" +
      "}";
    document.head.appendChild(s);
  }

  function run() {
    injectCss();
    paintAll();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
  document.addEventListener("menelik-boot-done", run);
  setTimeout(run, 300);
  setTimeout(run, 1000);
  setTimeout(run, 2200);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function () {
      paintAll();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
