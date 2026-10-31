/* xp-icons.js — modern Apple-style desktop icons (squircle + soft depth) */
(function () {
  "use strict";

  var uid = 0;
  function svg(s) {
    return "url(\"data:image/svg+xml," + encodeURIComponent(s) + "\")";
  }

  /* Continuous-corner approx + vertical gradient + top gloss (macOS Big Sur+) */
  function tile(body, c1, c2) {
    uid++;
    var g = "g" + uid;
    var h = "h" + uid;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
      "<defs>" +
      '<linearGradient id="' +
      g +
      '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' +
      c1 +
      '"/>' +
      '<stop offset="100%" stop-color="' +
      c2 +
      '"/>' +
      "</linearGradient>" +
      '<linearGradient id="' +
      h +
      '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#fff" stop-opacity=".38"/>' +
      '<stop offset="42%" stop-color="#fff" stop-opacity="0"/>' +
      "</linearGradient>" +
      "</defs>" +
      /* squircle-ish continuous corner */
      '<rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="url(#' +
      g +
      ')"/>' +
      '<rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="url(#' +
      h +
      ')"/>' +
      '<rect x="1.5" y="1.5" width="45" height="45" rx="12.5" fill="none" stroke="#fff" stroke-opacity=".22"/>' +
      body +
      "</svg>"
    );
  }

  var ICONS = {
    "about-icon": tile(
      '<circle cx="24" cy="18" r="7.5" fill="#fff" opacity=".98"/><path fill="#fff" d="M10 38c2.2-7.2 7.2-10.5 14-10.5S35.8 30.8 38 38H10z"/>',
      "#5ac8fa",
      "#007aff"
    ),
    "edu-icon": tile(
      '<path fill="#fff" d="M24 11L7 19.5 24 28l14-7.2V30h3V19.5L24 11zM11 24.2v6.2L24 37l13-6.6v-6.2L24 31.2 11 24.2z"/>',
      "#34c759",
      "#248a3d"
    ),
    "exp-icon": tile(
      '<rect x="13" y="16" width="22" height="18" rx="2.5" fill="#fff"/><rect x="17" y="12" width="14" height="5" rx="1.5" fill="#fff"/><rect x="17" y="22" width="14" height="2" rx="1" fill="#0a7" opacity=".35"/><rect x="17" y="27" width="10" height="2" rx="1" fill="#0a7" opacity=".35"/>',
      "#64d2ff",
      "#00a0c8"
    ),
    "cert-icon": tile(
      '<path fill="#fff" d="M24 10l3.2 8.2H36l-6.6 4.8 2.5 8.2L24 26.8 16.1 31.2l2.5-8.2L12 18.2h8.8z"/>',
      "#ffd60a",
      "#ff9f0a"
    ),
    "projects-icon": tile(
      '<rect x="11" y="12" width="15" height="20" rx="2" fill="#fff"/><rect x="20" y="17" width="17" height="18" rx="2" fill="#fff" opacity=".92"/><rect x="14" y="16" width="9" height="2" rx="1" fill="#c60" opacity=".35"/><rect x="24" y="22" width="9" height="2" rx="1" fill="#c60" opacity=".35"/>',
      "#ff9f0a",
      "#ff6b00"
    ),
    "skills-icon": tile(
      '<path fill="#fff" d="M24 11l3.2 8H36l-6.5 4.7 2.5 8L24 26.8 16 31.7l2.5-8L12 19h8.8z"/>',
      "#bf5af2",
      "#8944ab"
    ),
    "contact-icon": tile(
      '<rect x="10" y="14" width="28" height="20" rx="3" fill="#fff"/><path fill="#c00" opacity=".25" d="M10 16.5l14 9.5 14-9.5"/><path fill="none" stroke="#c00" stroke-opacity=".4" stroke-width="1.6" d="M12 17l12 8 12-8"/>',
      "#ff6961",
      "#d70015"
    ),
    "resume-icon": tile(
      '<rect x="14" y="9" width="20" height="30" rx="2.5" fill="#fff"/><rect x="17" y="14" width="14" height="2.2" rx="1" fill="#5b6" opacity=".35"/><rect x="17" y="19" width="14" height="1.6" rx=".8" fill="#000" opacity=".12"/><rect x="17" y="23" width="11" height="1.6" rx=".8" fill="#000" opacity=".12"/><rect x="17" y="27" width="13" height="1.6" rx=".8" fill="#000" opacity=".12"/>',
      "#aeb4bf",
      "#636366"
    ),
    "control-icon": tile(
      '<circle cx="24" cy="24" r="8" fill="none" stroke="#fff" stroke-width="3"/><circle cx="24" cy="24" r="3.2" fill="#fff"/><g fill="#fff"><rect x="22.2" y="9" width="3.6" height="5.5" rx="1"/><rect x="22.2" y="33.5" width="3.6" height="5.5" rx="1"/><rect x="9" y="22.2" width="5.5" height="3.6" rx="1"/><rect x="33.5" y="22.2" width="5.5" height="3.6" rx="1"/></g>',
      "#64d2ff",
      "#0a84ff"
    ),
    "blog-icon": tile(
      '<rect x="10" y="12" width="28" height="20" rx="2.5" fill="#fff"/><rect x="13" y="15" width="14" height="9" rx="1.5" fill="#0a84ff" opacity=".85"/><rect x="18" y="34" width="12" height="2.5" rx="1" fill="#fff" opacity=".9"/><rect x="14" y="37" width="20" height="3" rx="1" fill="#fff"/>',
      "#5e5ce6",
      "#3634a3"
    ),
    "edge-icon": tile(
      '<circle cx="24" cy="24" r="11" fill="none" stroke="#fff" stroke-width="2.4"/><circle cx="24" cy="24" r="4" fill="#fff"/><path fill="#fff" opacity=".9" d="M24 13c6 0 11 5 11 11 0 1.2-.2 2.3-.5 3.4-2.2-3.4-6.2-5.4-10.5-5.4-1.4 0-2.7.2-4 .6C21.2 15.5 24 13 24 13z"/>',
      "#32ade6",
      "#0071e3"
    ),
    "ie-icon": tile(
      '<circle cx="24" cy="24" r="11" fill="none" stroke="#fff" stroke-width="2.4"/><circle cx="24" cy="24" r="4" fill="#fff"/>',
      "#32ade6",
      "#0071e3"
    ),
    "sudoku-icon": tile(
      '<rect x="12" y="12" width="24" height="24" rx="3" fill="none" stroke="#fff" stroke-width="2"/><path stroke="#fff" stroke-width="1.6" d="M20 12v24M28 12v24M12 20h24M12 28h24"/>',
      "#30d158",
      "#248a3d"
    ),
    "chat-icon": tile(
      '<path fill="#fff" d="M11 13h22a4 4 0 014 4v11a4 4 0 01-4 4H21l-7 5.5V32h-3a4 4 0 01-4-4V17a4 4 0 014-4z"/><circle cx="18" cy="22" r="1.8" fill="#007aff" opacity=".5"/><circle cx="24" cy="22" r="1.8" fill="#007aff" opacity=".5"/><circle cx="30" cy="22" r="1.8" fill="#007aff" opacity=".5"/>',
      "#5ac8fa",
      "#007aff"
    ),
    "notepad-icon": tile(
      '<rect x="13" y="9" width="22" height="30" rx="2.5" fill="#fff"/><rect x="16" y="14" width="16" height="2" rx="1" fill="#007aff" opacity=".45"/><rect x="16" y="19" width="16" height="1.5" rx=".8" fill="#000" opacity=".12"/><rect x="16" y="23" width="12" height="1.5" rx=".8" fill="#000" opacity=".12"/>',
      "#ffd60a",
      "#ff9f0a"
    ),
    "paint-icon": tile(
      '<circle cx="18" cy="18" r="6" fill="#ff453a"/><circle cx="30" cy="18" r="6" fill="#30d158"/><circle cx="18" cy="30" r="6" fill="#0a84ff"/><circle cx="30" cy="30" r="6" fill="#ffd60a"/>',
      "#ff9f0a",
      "#ff375f"
    ),
    "terminal-icon": tile(
      '<rect x="9" y="11" width="30" height="26" rx="3" fill="#1c1c1e"/><path fill="#30d158" d="M14 20l5 4-5 4v-2.5l2.8-1.5L14 22.5V20zm8 9h10v2.2H22V29z"/>',
      "#48484a",
      "#1c1c1e"
    ),
    "vscode-icon": tile(
      '<path fill="#fff" d="M13 15l9 9-9 9 3.5 2 11-11L16.5 13z"/><path fill="#fff" opacity=".85" d="M29 13l6 3.5v15L29 35l-3.5-3.5 5.5-7.5-5.5-7.5z"/>',
      "#5ac8fa",
      "#007aff"
    ),
    "recycle-icon": tile(
      '<path fill="#fff" d="M16 15h16l-1.8 20H17.8z"/><rect x="14" y="13" width="20" height="3.5" rx="1" fill="#fff"/><rect x="20" y="10.5" width="8" height="3" rx="1" fill="#fff"/>',
      "#30d158",
      "#248a3d"
    ),
    "github-icon": tile(
      '<path fill="#fff" d="M24 12c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C32.6 33.8 36 29.3 36 24c0-6.6-5.4-12-12-12z"/>',
      "#8e8e93",
      "#3a3a3c"
    ),
    "snake-icon": tile(
      '<path fill="#fff" d="M12 28c0-9 7-13 14-13s11 5 11 9-4 7-9 7h-5v3h-4v-3h-3c-2.5 0-4-1.5-4-3z"/><circle cx="30" cy="22" r="2" fill="#1b5e20" opacity=".5"/>',
      "#30d158",
      "#248a3d"
    ),
    "tetris-icon": tile(
      '<g fill="#fff"><rect x="18" y="10" width="8" height="8" rx="1.2"/><rect x="10" y="18" width="8" height="8" rx="1.2"/><rect x="18" y="18" width="8" height="8" rx="1.2"/><rect x="26" y="18" width="8" height="8" rx="1.2"/><rect x="18" y="26" width="8" height="8" rx="1.2"/></g>',
      "#ff375f",
      "#c41c3a"
    ),
  };

  function paint(el) {
    if (!el) return;
    var cls = el.className || "";
    var keys = Object.keys(ICONS);
    for (var i = 0; i < keys.length; i++) {
      if (cls.indexOf(keys[i]) !== -1) {
        var bg = svg(ICONS[keys[i]]);
        el.style.background = "transparent";
        el.style.backgroundImage = "none";
        el.style.boxShadow = "none";
        var layer = el.querySelector(".xp-glyph");
        if (!layer) {
          layer = document.createElement("span");
          layer.className = "xp-glyph";
          layer.setAttribute("aria-hidden", "true");
          layer.style.cssText =
            "position:absolute;inset:0;display:block;background-size:contain;background-repeat:no-repeat;background-position:center;" +
            "filter:drop-shadow(0 2px 4px rgba(0,0,0,.28));pointer-events:none;";
          if (getComputedStyle(el).position === "static") el.style.position = "relative";
          el.appendChild(layer);
        }
        layer.style.backgroundImage = bg;
        el.dataset.xpIcon = "1";
        return;
      }
    }
  }

  function paintAll() {
    /* force re-paint so Apple style replaces old XP cache */
    document.querySelectorAll(".icon-img, .sm-icon").forEach(function (el) {
      el.dataset.xpIcon = "";
      paint(el);
    });
  }

  var style = document.createElement("style");
  style.textContent =
    "@media (min-width:900px){" +
    "#desktop .desktop-icons .icon{" +
    "width:78px;padding:8px 4px 6px;border-radius:12px;" +
    "background:transparent;border:0;cursor:pointer}" +
    "#desktop .desktop-icons .icon:hover," +
    "#desktop .desktop-icons .icon:focus{" +
    "background:rgba(255,255,255,.14);" +
    "outline:none;" +
    "backdrop-filter:blur(8px)}" +
    "#desktop .desktop-icons .icon span{" +
    "color:#fff;" +
    "text-shadow:0 1px 3px rgba(0,0,0,.55);" +
    "font:11.5px/1.2 -apple-system,\"SF Pro Text\",\"Segoe UI\",system-ui,sans-serif;" +
    "font-weight:500;max-width:74px}" +
    ".icon-img{width:52px;height:52px;margin-bottom:4px;background:transparent!important;" +
    "box-shadow:none!important;border-radius:0}" +
    ".icon-img::after,.sm-icon::after{display:none!important}" +
    ".sm-icon{width:24px;height:24px;background:transparent!important;box-shadow:none!important;position:relative}" +
    "}";
  document.head.appendChild(style);

  paintAll();
  document.addEventListener("menelik-boot-done", paintAll);
  setTimeout(paintAll, 200);
  setTimeout(paintAll, 800);
  setTimeout(paintAll, 2000);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function () {
      paintAll();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
