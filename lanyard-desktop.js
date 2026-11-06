/* lanyard-desktop.js — open 3D ID badge from desktop / mobile */
(function () {
  "use strict";

  var LANYARD_URL = "lanyard.html";

  function isDesktop() {
    return window.innerWidth >= 900;
  }

  function openLanyard() {
    if (isDesktop() && typeof openWindow === "function") {
      /* Prefer dedicated window with iframe if shell supports generic content */
      try {
        if (!window.CONTENT) window.CONTENT = {};
        if (!window.CONTENT.lanyard) {
          window.CONTENT.lanyard = {
            title: "ID Badge — 3D",
            iconClass: "about-icon",
            html:
              '<div style="height:100%;min-height:420px;margin:-8px;display:flex;flex-direction:column">' +
              '<iframe src="' +
              LANYARD_URL +
              '" title="3D Lanyard Badge" style="flex:1;width:100%;border:0;background:#050811;min-height:480px" allow="fullscreen"></iframe>' +
              "</div>",
          };
        }
        openWindow("lanyard");
        return;
      } catch (e) {}
    }
    window.location.href = LANYARD_URL;
  }

  function injectDesktopIcon() {
    var grid = document.querySelector("#desktop .desktop-icons");
    if (!grid || grid.querySelector('[data-window="lanyard"]')) return;
    var btn = document.createElement("button");
    btn.className = "icon";
    btn.setAttribute("data-window", "lanyard");
    btn.type = "button";
    btn.innerHTML =
      '<div class="icon-img about-icon" style="position:relative"></div><span>ID Badge</span>';
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLanyard();
    });
    grid.appendChild(btn);
  }

  function injectMobileIcon() {
    var grid =
      document.querySelector("#home-screen .app-grid") ||
      document.querySelector(".app-grid");
    if (!grid || grid.querySelector('[data-page="lanyard"]')) return;
    var btn = document.createElement("button");
    btn.className = "app-icon";
    btn.setAttribute("data-page", "lanyard");
    btn.type = "button";
    btn.innerHTML = '<div class="app-img about"></div><span>ID Badge</span>';
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = LANYARD_URL;
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
        if (t.getAttribute("data-page") === "lanyard" && !isDesktop()) {
          window.location.href = LANYARD_URL;
        } else {
          openLanyard();
        }
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
  setTimeout(boot, 400);
  setTimeout(boot, 1200);
  setTimeout(boot, 2500);

  window.openLanyardBadge = openLanyard;
})();
