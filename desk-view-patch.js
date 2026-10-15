/* desk-view-patch.js — desktop shell reliability (loaded after script.js) */
(function () {
  "use strict";

  function isDesktopView() {
    try {
      if (typeof window.matchMedia === "function") {
        return window.matchMedia("(min-width: 900px)").matches;
      }
    } catch (_) {}
    return window.innerWidth >= 900;
  }
  window.isDesktopView = isDesktopView;

  function clampAllWindowsToViewport() {
    if (typeof openWindows !== "object" || !openWindows) return;
    var taskbarH = 36;
    var maxW = Math.max(320, window.innerWidth - 16);
    var maxH = Math.max(180, window.innerHeight - taskbarH - 8);
    var current = typeof currentDesktop === "number" ? currentDesktop : 0;
    var map = typeof windowDesktop === "object" && windowDesktop ? windowDesktop : {};
    Object.keys(openWindows).forEach(function (id) {
      var win = openWindows[id];
      if (!win || win.dataset.maximized === "1") return;
      if ((map[id] ?? 0) !== current) return;
      var w = parseInt(win.style.width, 10) || win.offsetWidth || 440;
      var h = parseInt(win.style.height, 10) || win.offsetHeight || 360;
      var left = parseInt(win.style.left, 10);
      var top = parseInt(win.style.top, 10);
      if (Number.isNaN(left)) left = 48;
      if (Number.isNaN(top)) top = 36;
      w = Math.min(Math.max(280, w), maxW);
      h = Math.min(Math.max(160, h), maxH);
      left = Math.min(Math.max(-40, left), Math.max(0, window.innerWidth - 80));
      top = Math.min(Math.max(0, top), Math.max(0, window.innerHeight - taskbarH - 40));
      win.style.width = w + "px";
      win.style.height = h + "px";
      win.style.left = left + "px";
      win.style.top = top + "px";
    });
  }
  window.clampAllWindowsToViewport = clampAllWindowsToViewport;

  function syncShellView() {
    var desktop = document.getElementById("desktop");
    var mobile = document.getElementById("mobile");
    var onDesktop = isDesktopView();
    if (desktop) desktop.setAttribute("aria-hidden", onDesktop ? "false" : "true");
    if (mobile) mobile.setAttribute("aria-hidden", onDesktop ? "true" : "false");
    if (onDesktop) {
      clampAllWindowsToViewport();
      try { if (typeof updateTaskbarVisibility === "function") updateTaskbarVisibility(); } catch (_) {}
      try { if (typeof updateDesktopIndicators === "function") updateDesktopIndicators(); } catch (_) {}
    } else {
      try { if (typeof closeStartMenu === "function") closeStartMenu(); } catch (_) {}
      try { if (typeof hideSnapPreview === "function") hideSnapPreview(); } catch (_) {}
    }
  }
  window.syncShellView = syncShellView;

  // Improve switchDesktop if present
  if (typeof switchDesktop === "function") {
    var _switchDesktop = switchDesktop;
    window.switchDesktop = function (index, silent) {
      _switchDesktop(index, silent);
      // Normalize display after switch
      try {
        var current = typeof currentDesktop === "number" ? currentDesktop : 0;
        var map = typeof windowDesktop === "object" && windowDesktop ? windowDesktop : {};
        Object.keys(openWindows || {}).forEach(function (id) {
          var win = openWindows[id];
          if (!win) return;
          var desk = map[id] ?? 0;
          if (desk === current) {
            win.classList.remove("on-other-desktop");
            win.removeAttribute("aria-hidden");
            if (win.dataset.minimized === "1") win.style.display = "none";
            else win.style.display = "flex";
          } else {
            win.classList.add("on-other-desktop");
            win.setAttribute("aria-hidden", "true");
          }
        });
      } catch (_) {}
      try { syncShellView(); } catch (_) {}
    };
  }

  // Resize / orientation sync
  var t = 0;
  var lastDesktop = null;
  function onResize() {
    clearTimeout(t);
    t = setTimeout(function () {
      var now = isDesktopView();
      if (lastDesktop === null) lastDesktop = now;
      if (lastDesktop !== now) {
        lastDesktop = now;
        try { if (typeof closeStartMenu === "function") closeStartMenu(); } catch (_) {}
        try {
          var ctx = document.querySelector(".tb-context");
          if (ctx) ctx.remove();
        } catch (_) {}
      }
      try { syncShellView(); } catch (err) {
        console.warn("[Menelik OS] syncShellView", err);
      }
    }, 80);
  }
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("orientationchange", onResize, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", onResize, { passive: true });
  }
  document.addEventListener("menelik-boot-done", function () {
    lastDesktop = isDesktopView();
    try { syncShellView(); } catch (_) {}
  });
  setTimeout(function () {
    if (lastDesktop === null) lastDesktop = isDesktopView();
    try { syncShellView(); } catch (_) {}
  }, 1200);
})();
