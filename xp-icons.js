/* xp-icons.js — professional Windows XP style desktop icons */
(function () {
  "use strict";

  function svg(s) {
    return "url(\"data:image/svg+xml," + encodeURIComponent(s) + \")";
  }

  function tile(body, c1, c2) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' + c1 + '"/>' +
      '<stop offset="100%" stop-color="' + c2 + '"/>' +
      "</linearGradient>" +
      '<linearGradient id="h" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#fff" stop-opacity=".5"/>' +
      '<stop offset="55%" stop-color="#fff" stop-opacity="0"/>' +
      "</linearGradient></defs>" +
      '<rect x="2" y="2" width="44" height="44" rx="5" fill="url(#g)" stroke="#000" stroke-opacity=".22"/>' +
      '<rect x="3" y="3" width="42" height="18" rx="4" fill="url(#h)"/>' +
      body +
      "</svg>"
    );
  }

  var ICONS = {
    "about-icon": tile(
      '<circle cx="24" cy="17" r="7" fill="#fff"/><ellipse cx="24" cy="35" rx="12" ry="8" fill="#fff"/>',
      "#4fc3f7",
      "#0277bd"
    ),
    "edu-icon": tile(
      '<path fill="#fff" d="M24 10L8 18l16 8 16-8-16-8zm-14 12v8l14 7 14-7v-8l-14 7-14-7z"/>',
      "#81c784",
      "#2e7d32"
    ),
    "exp-icon": tile(
      '<rect x="14" y="14" width="20" height="16" rx="1" fill="#fff"/><rect x="17" y="10" width="14" height="5" rx="1" fill="#fff"/><rect x="18" y="20" width="12" height="2" fill="#00695c"/><rect x="18" y="24" width="8" height="2" fill="#00695c"/>',
      "#4db6ac",
      "#00695c"
    ),
    "cert-icon": tile(
      '<path fill="#fff" d="M24 9l3.5 9h9.5l-7.5 5.5 3 9.5L24 27l-8.5 6 3-9.5L11 18h9.5z"/>',
      "#ffd54f",
      "#f9a825"
    ),
    "projects-icon": tile(
      '<rect x="10" y="12" width="14" height="18" fill="#fff"/><rect x="20" y="18" width="16" height="16" fill="#fff" opacity=".9"/><rect x="13" y="16" width="8" height="2" fill="#e65100"/><rect x="24" y="22" width="8" height="2" fill="#e65100"/>',
      "#ffb74d",
      "#ef6c00"
    ),
    "skills-icon": tile(
      '<path fill="#fff" d="M16 34L24 12l8 22z"/><circle cx="24" cy="28" r="3.5" fill="#6a1b9a"/>',
      "#ce93d8",
      "#8e24aa"
    ),
    "contact-icon": tile(
      '<rect x="10" y="14" width="28" height="20" rx="2" fill="#fff"/><path fill="#b71c1c" d="M10 16l14 10 14-10"/>',
      "#ef9a9a",
      "#c62828"
    ),
    "resume-icon": tile(
      '<rect x="14" y="8" width="20" height="30" fill="#fff"/><rect x="17" y="12" width="14" height="2" fill="#455a64"/><rect x="17" y="17" width="14" height="1.5" fill="#90a4ae"/><rect x="17" y="21" width="10" height="1.5" fill="#90a4ae"/>',
      "#b0bec5",
      "#546e7a"
    ),
    "control-icon": tile(
      '<circle cx="24" cy="24" r="9" fill="none" stroke="#fff" stroke-width="3"/><circle cx="24" cy="24" r="3.5" fill="#fff"/><rect x="22" y="9" width="4" height="5" fill="#fff"/><rect x="22" y="34" width="4" height="5" fill="#fff"/><rect x="9" y="22" width="5" height="4" fill="#fff"/><rect x="34" y="22" width="5" height="4" fill="#fff"/>',
      "#64b5f6",
      "#1565c0"
    ),
    "blog-icon":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="6" y="6" width="36" height="28" rx="2" fill="#cfd8dc" stroke="#546e7a"/><rect x="9" y="9" width="30" height="20" fill="#1565c0"/><rect x="12" y="12" width="10" height="6" fill="#81d4fa" opacity=".85"/><rect x="18" y="34" width="12" height="3" fill="#78909c"/><rect x="12" y="37" width="24" height="4" rx="1" fill="#607d8b"/></svg>',
    "edge-icon":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#1565c0"/><ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#fff" stroke-width="2.2"/><text x="24" y="31" text-anchor="middle" font-size="18" font-weight="bold" fill="#fff" font-family="Georgia,serif">e</text></svg>',
    "ie-icon":
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#1565c0"/><ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#fff" stroke-width="2.2"/><text x="24" y="31" text-anchor="middle" font-size="18" font-weight="bold" fill="#fff" font-family="Georgia,serif">e</text></svg>',
    "sudoku-icon": tile(
      '<rect x="12" y="12" width="24" height="24" fill="none" stroke="#fff" stroke-width="2"/><path stroke="#fff" d="M20 12v24M28 12v24M12 20h24M12 28h24"/>',
      "#80cbc4",
      "#00897b"
    ),
    "chat-icon": tile(
      '<path fill="#fff" d="M10 12h22a4 4 0 014 4v10a4 4 0 01-4 4H20l-8 6v-6h-2a4 4 0 01-4-4V16a4 4 0 014-4z"/><circle cx="18" cy="21" r="2" fill="#0277bd"/><circle cx="24" cy="21" r="2" fill="#0277bd"/><circle cx="30" cy="21" r="2" fill="#0277bd"/>',
      "#4fc3f7",
      "#0288d1"
    ),
    "notepad-icon": tile(
      '<rect x="13" y="8" width="22" height="30" fill="#fff"/><rect x="16" y="12" width="16" height="2" fill="#3949ab"/><rect x="16" y="17" width="16" height="1.5" fill="#9fa8da"/><rect x="16" y="21" width="12" height="1.5" fill="#9fa8da"/>',
      "#9fa8da",
      "#3949ab"
    ),
    "paint-icon": tile(
      '<rect x="14" y="10" width="20" height="20" fill="#fff"/><rect x="16" y="12" width="7" height="7" fill="#e53935"/><rect x="25" y="12" width="7" height="7" fill="#43a047"/><rect x="16" y="21" width="7" height="7" fill="#1e88e5"/><rect x="25" y="21" width="7" height="7" fill="#fdd835"/>',
      "#ffb74d",
      "#ef6c00"
    ),
    "terminal-icon": tile(
      '<rect x="8" y="10" width="32" height="26" rx="2" fill="#111"/><text x="12" y="24" font-family="monospace" font-size="11" fill="#00e676">>_</text>',
      "#616161",
      "#212121"
    ),
    "vscode-icon": tile(
      '<path fill="#fff" d="M12 14l10 10-10 10 4 2 12-12L16 12z"/><path fill="#fff" opacity=".8" d="M30 12l6 4v16l-6 4-4-4 6-8-6-8z"/>',
      "#42a5f5",
      "#1565c0"
    ),
    "recycle-icon": tile(
      '<path fill="#fff" d="M16 14h16l-2 22H18z"/><rect x="14" y="12" width="20" height="4" rx="1" fill="#fff"/><rect x="20" y="10" width="8" height="3" fill="#fff"/><path stroke="#1b5e20" stroke-width="2.2" fill="none" d="M20 22l4 4 5-7"/>',
      "#81c784",
      "#388e3c"
    ),
    "registry-icon": tile(
      '<rect x="14" y="10" width="20" height="28" fill="#fff"/><rect x="16" y="14" width="16" height="4" fill="#5d4037"/><rect x="16" y="20" width="16" height="3" fill="#8d6e63"/>',
      "#bcaaa4",
      "#6d4c41"
    ),
    "wmp-icon": tile(
      '<circle cx="24" cy="24" r="12" fill="#fff"/><path fill="#6a1b9a" d="M20 16l14 8-14 8z"/>',
      "#ce93d8",
      "#8e24aa"
    ),
    "help-icon": tile(
      '<circle cx="24" cy="24" r="14" fill="#fff"/><text x="24" y="31" text-anchor="middle" font-size="20" font-weight="bold" fill="#1565c0" font-family="serif">?</text>',
      "#64b5f6",
      "#1e88e5"
    ),
    "github-icon": tile(
      '<circle cx="24" cy="24" r="12" fill="#fff"/><path fill="#211" d="M24 14c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z"/>',
      "#e0e0e0",
      "#424242"
    ),
    "pack-icon": tile(
      '<path fill="#fff" d="M10 18l14-8 14 8v14l-14 8-14-8z"/>',
      "#ffcc80",
      "#fb8c00"
    ),
    "testimonial-icon": tile(
      '<circle cx="17" cy="18" r="6" fill="#fff"/><circle cx="31" cy="18" r="6" fill="#fff" opacity=".85"/><ellipse cx="24" cy="34" rx="13" ry="7" fill="#fff"/>',
      "#80cbc4",
      "#00897b"
    ),
    "vector-icon": tile(
      '<path fill="none" stroke="#fff" stroke-width="2.2" d="M10 34l8-20 10 14 10-16"/><circle cx="18" cy="14" r="3" fill="#fff"/><circle cx="28" cy="28" r="3" fill="#fff"/><circle cx="38" cy="12" r="3" fill="#fff"/>',
      "#a5d6a7",
      "#43a047"
    ),
    "snake-icon": tile(
      '<path fill="#fff" d="M12 28q0-12 12-12t12 8q0 6-8 6h-6v4h-4v-4h-4q-2 0-2-2z"/><circle cx="30" cy="22" r="2" fill="#1b5e20"/>',
      "#81c784",
      "#388e3c"
    ),
    "tetris-icon": tile(
      '<g fill="#fff"><rect x="18" y="10" width="8" height="8"/><rect x="10" y="18" width="8" height="8"/><rect x="18" y="18" width="8" height="8"/><rect x="26" y="18" width="8" height="8"/><rect x="18" y="26" width="8" height="8"/></g>',
      "#f48fb1",
      "#e91e63"
    )
  };

  function paint(el) {
    if (!el || el.dataset.xpIcon === "1") return;
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
            "position:absolute;inset:0;display:block;background-size:contain;background-repeat:no-repeat;background-position:center;filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.45));pointer-events:none;";
          if (getComputedStyle(el).position === "static") {
            el.style.position = "relative";
          }
          el.appendChild(layer);
        }
        layer.style.backgroundImage = bg;
        el.dataset.xpIcon = "1";
        return;
      }
    }
  }

  function paintAll() {
    document.querySelectorAll(".icon-img, .sm-icon").forEach(paint);
  }

  var style = document.createElement("style");
  style.textContent =
    "#desktop .desktop-icons .icon{width:76px;padding:6px 4px 4px;border-radius:2px}" +
    "#desktop .desktop-icons .icon:hover,#desktop .desktop-icons .icon:focus{background:rgba(10,36,106,.42);outline:1px dotted rgba(255,255,255,.85)}" +
    "#desktop .desktop-icons .icon span{color:#fff;text-shadow:1px 1px 0 #000,0 1px 2px rgba(0,0,0,.6);font:11px/1.15 Tahoma,sans-serif;max-width:72px}" +
    ".icon-img{width:48px;height:48px;margin-bottom:2px;background:transparent!important;box-shadow:none!important;border-radius:0}" +
    ".icon-img::after,.sm-icon::after{display:none!important}" +
    ".sm-icon{width:24px;height:24px;background:transparent!important;box-shadow:none!important;position:relative}";
  document.head.appendChild(style);

  paintAll();
  document.addEventListener("menelik-boot-done", paintAll);
  setTimeout(paintAll, 300);
  setTimeout(paintAll, 1000);
  setTimeout(paintAll, 2500);

  if (typeof MutationObserver === "function") {
    var obs = new MutationObserver(function () {
      paintAll();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
