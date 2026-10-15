/* xp-wallpaper.js — authentic Windows XP wallpapers */
(function () {
  "use strict";

  var XP_WALLS = {
    default: true,
    bliss: true,
    azure: true,
    luna: true,
    follow: true,
    desert: true,
    crystal: true
  };

  var XP_LABELS = {
    default: "Bliss (Windows XP)",
    bliss: "Bliss (Windows XP)",
    azure: "Azure",
    luna: "Luna Blue",
    follow: "Follow",
    desert: "Red moon desert",
    crystal: "Crystal"
  };

  function applyXpWallpaper(v, opts) {
    opts = opts || {};
    if (!v || !XP_WALLS[v]) v = "default";

    try {
      localStorage.setItem("portfolio-wallpaper", v);
    } catch (_) {}

    document.body.dataset.wallpaper = v;
    var desk = document.getElementById("desktop");
    if (desk) desk.dataset.wallpaper = v;

    // Clear inline gradients so CSS XP wallpapers show
    document.querySelectorAll("#desktop .wallpaper, .desktop > .wallpaper").forEach(function (el) {
      el.style.background = "";
      el.style.backgroundImage = "";
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.style.filter = "none";
      if (!opts.silent) {
        el.classList.add("refresh-flash");
        setTimeout(function () {
          el.classList.remove("refresh-flash");
        }, 280);
      }
    });

    document.querySelectorAll(".wall-thumb").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-wall") === v);
    });
    document.querySelectorAll(".cp-wall").forEach(function (sel) {
      if (sel.value !== v) sel.value = v;
    });

    if (!opts.silent) {
      try {
        if (typeof playUiSound === "function") playUiSound("notify");
      } catch (_) {}
    }
  }

  function install() {
    window.applyWallpaper = applyXpWallpaper;
    var w = "default";
    try {
      w = localStorage.getItem("portfolio-wallpaper") || "default";
    } catch (_) {}
    if (!XP_WALLS[w]) w = "default";
    applyXpWallpaper(w, { silent: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install);
  } else {
    install();
  }
  document.addEventListener("menelik-boot-done", function () {
    install();
  });
  setTimeout(install, 800);

  var obs = typeof MutationObserver === "function"
    ? new MutationObserver(function () {
        var picker = document.querySelector(".wall-picker");
        if (!picker || picker.dataset.xpWalls === "1") return;
        picker.dataset.xpWalls = "1";
        var keys = ["default", "azure", "luna", "follow", "desert", "crystal"];
        picker.innerHTML = keys
          .map(function (k) {
            return (
              '<button type="button" class="wall-thumb" data-wall="' +
              k +
              '" title="' +
              (XP_LABELS[k] || k) +
              '" role="option"></button>'
            );
          })
          .join("");
        picker.querySelectorAll(".wall-thumb").forEach(function (btn) {
          btn.addEventListener("click", function () {
            applyXpWallpaper(btn.getAttribute("data-wall"));
          });
        });
        var sel = document.querySelector(".cp-wall");
        if (sel) {
          sel.innerHTML = keys
            .map(function (k) {
              return (
                '<option value="' +
                k +
                '">' +
                (XP_LABELS[k] || k) +
                "</option>"
              );
            })
            .join("");
          sel.addEventListener("change", function () {
            applyXpWallpaper(sel.value);
          });
        }
        var cur = "default";
        try {
          cur = localStorage.getItem("portfolio-wallpaper") || "default";
        } catch (_) {}
        applyXpWallpaper(cur, { silent: true });
      })
    : null;
  if (obs) {
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
