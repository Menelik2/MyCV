/* mobile-view-patch.js — mobile shell reliability */
(function () {
  "use strict";

  var BP = 900;

  function isMobileView() {
    try {
      if (typeof window.matchMedia === "function") {
        return window.matchMedia("(max-width: 899px)").matches;
      }
    } catch (_) {}
    return window.innerWidth < BP;
  }

  function setAppHeight() {
    try {
      var h =
        (window.visualViewport && window.visualViewport.height) ||
        window.innerHeight ||
        document.documentElement.clientHeight ||
        0;
      if (!h || h < 100) h = window.innerHeight;
      document.documentElement.style.setProperty("--app-height", h + "px");
      document.documentElement.style.setProperty("--vh", h * 0.01 + "px");
    } catch (_) {}
  }

  function syncMobileShell() {
    var desktop = document.getElementById("desktop");
    var mobile = document.getElementById("mobile");
    var onMobile = isMobileView();

    if (desktop) {
      desktop.setAttribute("aria-hidden", onMobile ? "true" : "false");
      if (onMobile) {
        try {
          if (typeof closeStartMenu === "function") closeStartMenu();
        } catch (_) {}
      }
    }
    if (mobile) {
      mobile.setAttribute("aria-hidden", onMobile ? "false" : "true");
      var boot = document.getElementById("boot-screen");
      if (!boot || boot.classList.contains("boot-done")) {
        mobile.classList.remove("boot-hidden");
      }
    }

    if (onMobile) {
      try {
        document.querySelectorAll("#desktop .window").forEach(function (w) {
          w.style.pointerEvents = "none";
        });
      } catch (_) {}
    } else {
      try {
        document.querySelectorAll("#desktop .window").forEach(function (w) {
          w.style.pointerEvents = "";
        });
      } catch (_) {}
    }

    setAppHeight();
  }

  function ensureHomeVisible() {
    if (!isMobileView()) return;
    var home = document.getElementById("home-screen");
    var openPage = document.querySelector("#mobile .app-page:not([hidden])");
    if (!openPage && home) {
      home.hidden = false;
    }
  }

  function wireAndroidNav() {
    var mobile = document.getElementById("mobile");
    if (!mobile || mobile.dataset.navWired === "1") return;
    mobile.dataset.navWired = "1";

    mobile.addEventListener(
      "click",
      function (e) {
        var t = e.target;
        if (!t || !t.closest) return;

        var homeBtn = t.closest(".android-nav-home, [data-nav=home]");
        if (homeBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof showHome === "function") showHome();
          else ensureHomeVisible();
          return;
        }

        var backBtn = t.closest(".android-nav-back, [data-nav=back], .back-btn");
        if (backBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof androidGoBack === "function") androidGoBack();
          else if (typeof mobileGoBack === "function") mobileGoBack();
          else if (typeof showHome === "function") showHome();
          return;
        }

        var recentsBtn = t.closest(".android-nav-recents, [data-nav=recents]");
        if (recentsBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof androidShowRecents === "function") androidShowRecents();
          else if (typeof showHome === "function") showHome();
          return;
        }

        var app = t.closest(".app-icon[data-page]");
        if (app && app.getAttribute("data-page")) {
          var pageId = app.getAttribute("data-page");
          setTimeout(function () {
            if (!isMobileView()) return;
            if (typeof showPage !== "function") return;
            var anyOpen = document.querySelector("#mobile .app-page:not([hidden])");
            if (!anyOpen) {
              try {
                showPage(pageId);
              } catch (_) {}
            }
          }, 80);
        }
      },
      true
    );

    window.addEventListener("popstate", function () {
      if (!isMobileView()) return;
      if (typeof mobileGoBack === "function") mobileGoBack();
    });
  }

  function fixMobileScroll() {
    if (!isMobileView()) return;
    var content = document.getElementById("mobile-content");
    var home = document.getElementById("home-screen");
    if (content) {
      content.style.overflow = "hidden";
      content.style.webkitOverflowScrolling = "touch";
      content.style.minHeight = "0";
      content.style.flex = "1 1 auto";
    }
    if (home && !home.hidden) {
      home.style.overflowY = "auto";
      home.style.webkitOverflowScrolling = "touch";
      home.style.minHeight = "0";
    }
    document
      .querySelectorAll(
        "#mobile .app-page:not([hidden]) .page-body, #mobile .app-page:not([hidden]) [id^=content-]"
      )
      .forEach(function (el) {
        el.style.overflowY = "auto";
        el.style.webkitOverflowScrolling = "touch";
        el.style.minHeight = "0";
        el.style.flex = "1 1 auto";
      });
  }

  function updateMobileClock() {
    var el = document.getElementById("mobile-time");
    if (!el) return;
    try {
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var fmt = "24";
      try {
        fmt = localStorage.getItem("portfolio-clock-fmt") || "24";
      } catch (_) {}
      if (fmt === "12") {
        var am = h < 12;
        var h12 = h % 12;
        if (h12 === 0) h12 = 12;
        el.textContent = h12 + ":" + (m < 10 ? "0" : "") + m + (am ? " AM" : " PM");
      } else {
        el.textContent = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
      }
    } catch (_) {}
  }

  function onBootDone() {
    syncMobileShell();
    wireAndroidNav();
    ensureHomeVisible();
    fixMobileScroll();
    updateMobileClock();
    setAppHeight();
  }

  setAppHeight();
  window.addEventListener(
    "resize",
    function () {
      setAppHeight();
      syncMobileShell();
      fixMobileScroll();
    },
    { passive: true }
  );
  window.addEventListener("orientationchange", function () {
    setTimeout(function () {
      setAppHeight();
      syncMobileShell();
      fixMobileScroll();
    }, 150);
    setTimeout(setAppHeight, 400);
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", setAppHeight, { passive: true });
    window.visualViewport.addEventListener("scroll", setAppHeight, { passive: true });
  }

  document.addEventListener("menelik-boot-done", onBootDone);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      wireAndroidNav();
      syncMobileShell();
      setAppHeight();
    });
  } else {
    wireAndroidNav();
    syncMobileShell();
  }
  setTimeout(onBootDone, 800);
  setTimeout(onBootDone, 2000);
  setInterval(updateMobileClock, 30000);

  window.isMobileView = isMobileView;
  window.syncMobileShell = syncMobileShell;
  window.setAppHeight = setAppHeight;
})();
