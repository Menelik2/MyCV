/* lanyard-desktop.js — desktop ID Badge icon → 3D lanyard */
(function () {
  "use strict";

  var LANYARD_URL = "lanyard.html";
  var WIN_ID = "lanyard";

  function isDesktop() {
    return window.innerWidth >= 900;
  }

  function openLanyardFullPage() {
    window.location.href = LANYARD_URL;
  }

  function openLanyardWindow() {
    /* If already open, focus */
    if (typeof openWindows === "object" && openWindows && openWindows[WIN_ID]) {
      if (typeof focusWindow === "function") focusWindow(WIN_ID);
      return;
    }

    var tpl = document.getElementById("window-template");
    var container = document.getElementById("windows-container");
    if (!tpl || !container) {
      openLanyardFullPage();
      return;
    }

    var win = tpl.content.cloneNode(true).querySelector(".window");
    if (!win) {
      openLanyardFullPage();
      return;
    }

    win.dataset.id = WIN_ID;
    win.dataset.maximized = "0";
    win.dataset.snapped = "0";
    win.dataset.deskSized = "1";

    var w = Math.min(920, Math.max(480, window.innerWidth - 80));
    var h = Math.min(720, Math.max(420, window.innerHeight - 90));
    win.style.width = w + "px";
    win.style.height = h + "px";
    win.style.left = Math.max(24, Math.round((window.innerWidth - w) / 2)) + "px";
    win.style.top = Math.max(24, Math.round((window.innerHeight - h - 40) / 3)) + "px";
    win.style.zIndex = String((window.zIndex = (window.zIndex || 100) + 1));

    var title = win.querySelector(".win-title");
    if (title) title.textContent = "ID Badge — 3D";
    var icon = win.querySelector(".win-icon");
    if (icon) icon.className = "win-icon about-icon";

    var body = win.querySelector(".window-body");
    if (body) {
      body.classList.add("no-pad");
      body.style.padding = "0";
      body.style.overflow = "hidden";
      body.innerHTML =
        '<iframe src="' +
        LANYARD_URL +
        '" title="3D ID Badge" style="width:100%;height:100%;min-height:400px;border:0;display:block;background:#050811" allow="fullscreen"></iframe>';
    }

    function closeMe() {
      try {
        if (win.parentNode) win.parentNode.removeChild(win);
      } catch (e) {}
      if (typeof openWindows === "object" && openWindows) delete openWindows[WIN_ID];
      var tb = document.querySelector('.taskbar-btn[data-id="' + WIN_ID + '"]');
      if (tb && tb.parentNode) tb.parentNode.removeChild(tb);
    }

    var btnClose = win.querySelector(".btn-close");
    var btnMin = win.querySelector(".btn-min");
    var btnMax = win.querySelector(".btn-max");
    if (btnClose)
      btnClose.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMe();
      });
    if (btnMin)
      btnMin.addEventListener("click", function (e) {
        e.stopPropagation();
        win.style.display = "none";
        win.dataset.minimized = "1";
      });
    if (btnMax)
      btnMax.addEventListener("click", function (e) {
        e.stopPropagation();
        if (win.dataset.maximized === "1") {
          win.dataset.maximized = "0";
          win.style.width = win.dataset.prevWidth || w + "px";
          win.style.height = win.dataset.prevHeight || h + "px";
          win.style.left = win.dataset.prevLeft || "40px";
          win.style.top = win.dataset.prevTop || "40px";
        } else {
          win.dataset.prevWidth = win.style.width;
          win.dataset.prevHeight = win.style.height;
          win.dataset.prevLeft = win.style.left;
          win.dataset.prevTop = win.style.top;
          win.dataset.maximized = "1";
          win.style.left = "0px";
          win.style.top = "0px";
          win.style.width = window.innerWidth + "px";
          win.style.height = window.innerHeight - 36 + "px";
        }
      });

    var titleBar = win.querySelector(".title-bar");
    if (titleBar && typeof startDrag === "function") {
      titleBar.addEventListener("mousedown", function (e) {
        if (e.target.closest && e.target.closest(".title-bar-controls")) return;
        startDrag(e, win);
      });
    } else if (titleBar) {
      /* simple drag fallback */
      titleBar.addEventListener("mousedown", function (e) {
        if (e.target.closest && e.target.closest(".title-bar-controls")) return;
        var sx = e.clientX;
        var sy = e.clientY;
        var sl = parseInt(win.style.left, 10) || 0;
        var st = parseInt(win.style.top, 10) || 0;
        function move(ev) {
          win.style.left = sl + (ev.clientX - sx) + "px";
          win.style.top = st + (ev.clientY - sy) + "px";
        }
        function up() {
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        }
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
      });
    }

    if (typeof addResizeHandles === "function") {
      try {
        addResizeHandles(win);
      } catch (e2) {}
    }

    container.appendChild(win);
    if (typeof openWindows === "object" && openWindows) openWindows[WIN_ID] = win;
    if (typeof windowDesktop === "object" && windowDesktop && typeof currentDesktop === "number") {
      windowDesktop[WIN_ID] = currentDesktop;
    }
    if (typeof focusWindow === "function") {
      try {
        focusWindow(WIN_ID);
      } catch (e3) {}
    }
    if (typeof addTaskbarButton === "function") {
      try {
        addTaskbarButton(WIN_ID, "ID Badge — 3D");
      } catch (e4) {}
    }
  }

  function openLanyard() {
    if (isDesktop()) openLanyardWindow();
    else openLanyardFullPage();
  }

  function injectDesktopIcon() {
    var grid = document.querySelector("#desktop .desktop-icons");
    if (!grid) return;
    if (grid.querySelector('[data-window="lanyard"]')) return;

    var btn = document.createElement("button");
    btn.className = "icon";
    btn.type = "button";
    btn.setAttribute("data-window", "lanyard");
    btn.setAttribute("title", "ID Badge — 3D");
    btn.innerHTML =
      '<div class="icon-img about-icon"></div><span>ID Badge</span>';

    btn.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        openLanyard();
      },
      true
    );
    btn.addEventListener(
      "dblclick",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        openLanyard();
      },
      true
    );

    grid.appendChild(btn);

    /* paint Apple-style icon if painter is available */
    try {
      if (typeof window.paintAllXpIcons === "function") window.paintAllXpIcons();
      var img = btn.querySelector(".icon-img");
      if (img && img.dataset) img.dataset.xpIcon = "";
    } catch (e) {}
  }

  function injectMobileIcon() {
    var grid =
      document.querySelector("#home-screen .app-grid") ||
      document.querySelector(".app-grid");
    if (!grid || grid.querySelector('[data-page="lanyard"]')) return;
    var btn = document.createElement("button");
    btn.className = "app-icon";
    btn.type = "button";
    btn.setAttribute("data-page", "lanyard");
    btn.innerHTML = '<div class="app-img about"></div><span>ID Badge</span>';
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLanyardFullPage();
    });
    grid.appendChild(btn);
  }

  function intercept() {
    document.addEventListener(
      "click",
      function (e) {
        var t =
          (e.target.closest && e.target.closest('[data-window="lanyard"]')) ||
          (e.target.closest && e.target.closest('[data-page="lanyard"]'));
        if (!t) return;
        e.preventDefault();
        e.stopPropagation();
        if (t.getAttribute("data-page") === "lanyard" && !isDesktop()) openLanyardFullPage();
        else openLanyard();
      },
      true
    );
  }

  function boot() {
    injectDesktopIcon();
    injectMobileIcon();
  }

  intercept();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  document.addEventListener("menelik-boot-done", boot);
  setTimeout(boot, 300);
  setTimeout(boot, 900);
  setTimeout(boot, 2000);
  setTimeout(boot, 4000);

  window.openLanyardBadge = openLanyard;
})();
