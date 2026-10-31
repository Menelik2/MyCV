/* desk-window-size.js — larger default windows on desktop */
(function () {
  "use strict";

  function isDesktop() {
    return window.innerWidth >= 900;
  }

  /* Comfortable sizes for desktop users (content + system apps) */
  var SIZES = {
    about: { w: 720, h: 560 },
    education: { w: 760, h: 600 },
    experience: { w: 780, h: 620 },
    certifications: { w: 760, h: 600 },
    projects: { w: 860, h: 640 },
    skills: { w: 740, h: 580 },
    contact: { w: 700, h: 540 },
    resume: { w: 820, h: 660 },
    control: { w: 720, h: 600 },
    blog: { w: 800, h: 620 },
    ie: { w: 960, h: 680 },
    edge: { w: 960, h: 680 },
    chat: { w: 520, h: 640 },
    sudoku: { w: 480, h: 640 },
    notepad: { w: 720, h: 560 },
    paint: { w: 800, h: 600 },
    terminal: { w: 720, h: 480 },
    vscode: { w: 1000, h: 700 },
    help: { w: 680, h: 560 },
    github: { w: 720, h: 560 },
    registry: { w: 780, h: 560 },
    recycle: { w: 560, h: 420 },
    testimonials: { w: 640, h: 520 },
    downloadpack: { w: 680, h: 560 },
    mediaplayer: { w: 640, h: 520 },
    snake: { w: 480, h: 560 },
    tetris: { w: 520, h: 640 },
    vector: { w: 820, h: 620 },
  };

  var DEFAULT = { w: 760, h: 580 };

  function applySize(win, id) {
    if (!win || !isDesktop()) return;
    if (win.dataset.maximized === "1" || win.dataset.snapped === "1") return;
    if (win.dataset.deskSized === "1") return;

    var pref = SIZES[id] || DEFAULT;
    var marginX = 48;
    var marginY = 56;
    var taskbar = 40;
    var maxW = Math.max(400, window.innerWidth - marginX * 2);
    var maxH = Math.max(300, window.innerHeight - taskbar - marginY);
    var w = Math.min(pref.w, maxW);
    var h = Math.min(pref.h, maxH);

    /* Prefer ~70% of viewport when even larger is available */
    if (window.innerWidth >= 1200) {
      w = Math.max(w, Math.min(maxW, Math.round(window.innerWidth * 0.55)));
      h = Math.max(h, Math.min(maxH, Math.round(window.innerHeight * 0.62)));
      w = Math.min(w, pref.w + 80, maxW);
      h = Math.min(h, pref.h + 60, maxH);
    }

    win.style.width = w + "px";
    win.style.height = h + "px";

    var left = parseInt(win.style.left, 10);
    var top = parseInt(win.style.top, 10);
    if (isNaN(left)) left = Math.round((window.innerWidth - w) / 2);
    if (isNaN(top)) top = Math.round((window.innerHeight - taskbar - h) / 3);
    left = Math.min(Math.max(12, left), Math.max(12, window.innerWidth - w - 12));
    top = Math.min(Math.max(12, top), Math.max(12, window.innerHeight - taskbar - h - 8));
    win.style.left = left + "px";
    win.style.top = top + "px";
    win.dataset.deskSized = "1";
  }

  function enlargeOpenWindows() {
    if (!isDesktop() || typeof openWindows !== "object" || !openWindows) return;
    Object.keys(openWindows).forEach(function (id) {
      applySize(openWindows[id], id);
    });
  }

  function wrapOpenWindow() {
    if (typeof window.openWindow !== "function") return false;
    if (window.openWindow.__deskSized) return true;
    var orig = window.openWindow;
    window.openWindow = function (id) {
      var result = orig.apply(this, arguments);
      try {
        var win = openWindows && openWindows[id];
        if (win) {
          win.dataset.deskSized = "";
          applySize(win, id);
        }
      } catch (e) {}
      return result;
    };
    window.openWindow.__deskSized = true;
    return true;
  }

  function boot() {
    wrapOpenWindow();
    enlargeOpenWindows();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  document.addEventListener("menelik-boot-done", boot);
  setTimeout(boot, 400);
  setTimeout(boot, 1200);
  setTimeout(boot, 2500);

  if (typeof MutationObserver === "function") {
    new MutationObserver(function (muts) {
      if (!isDesktop()) return;
      muts.forEach(function (m) {
        m.addedNodes &&
          m.addedNodes.forEach(function (n) {
            if (n.nodeType !== 1) return;
            if (n.classList && n.classList.contains("window")) {
              applySize(n, n.dataset.id);
            }
          });
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
})();
