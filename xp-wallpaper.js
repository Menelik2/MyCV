/* xp-wallpaper.js — real photo Windows XP-style desktop wallpapers */
(function () {
  "use strict";

  // Free Unsplash photos (Unsplash License) — Bliss-like hills, classic scenes
  var PHOTO = {
    default:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
    bliss:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
    azure:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80",
    luna:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
    follow:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
    desert:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=80",
    crystal:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
  };

  var XP_LABELS = {
    default: "Bliss (real photo)",
    bliss: "Bliss (real photo)",
    azure: "Mountain lake",
    luna: "Sunlit peaks",
    follow: "Foggy hills",
    desert: "Desert dunes",
    crystal: "Forest path",
    custom: "Custom photo"
  };

  function isHttpUrl(s) {
    return typeof s === "string" && /^https?:\/\//i.test(s.trim());
  }

  function resolveUrl(v) {
    if (v === "custom") {
      try {
        var u = localStorage.getItem("portfolio-wallpaper-url") || "";
        if (isHttpUrl(u)) return u.trim();
      } catch (_) {}
      return PHOTO.default;
    }
    if (isHttpUrl(v)) return v.trim();
    return PHOTO[v] || PHOTO.default;
  }

  function applyXpWallpaper(v, opts) {
    opts = opts || {};
    var key = v;
    if (isHttpUrl(v)) {
      try {
        localStorage.setItem("portfolio-wallpaper-url", v.trim());
        localStorage.setItem("portfolio-wallpaper", "custom");
      } catch (_) {}
      key = "custom";
    } else if (!PHOTO[v] && v !== "custom") {
      key = "default";
    }

    try {
      localStorage.setItem("portfolio-wallpaper", key);
    } catch (_) {}

    document.body.dataset.wallpaper = key;
    var desk = document.getElementById("desktop");
    if (desk) desk.dataset.wallpaper = key;

    var url = resolveUrl(key);
    var bg =
      'url("' +
      url +
      '") center center / cover no-repeat fixed';

    document.querySelectorAll("#desktop .wallpaper, .desktop > .wallpaper").forEach(function (el) {
      el.style.background = bg;
      el.style.backgroundImage = 'url("' + url + '")';
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center center";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundAttachment = "scroll";
      el.style.filter = "none";
      if (!opts.silent) {
        el.classList.add("refresh-flash");
        setTimeout(function () {
          el.classList.remove("refresh-flash");
        }, 280);
      }
    });

    // Preload next paint
    try {
      var img = new Image();
      img.src = url;
    } catch (_) {}

    document.querySelectorAll(".wall-thumb").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-wall") === key);
    });
    document.querySelectorAll(".cp-wall").forEach(function (sel) {
      if (sel.value !== key) sel.value = key;
    });
    var urlInput = document.querySelector(".cp-wall-url");
    if (urlInput && key === "custom") {
      try {
        urlInput.value = localStorage.getItem("portfolio-wallpaper-url") || "";
      } catch (_) {}
    }

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
    if (!PHOTO[w] && w !== "custom") w = "default";
    applyXpWallpaper(w, { silent: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install);
  } else {
    install();
  }
  document.addEventListener("menelik-boot-done", install);
  setTimeout(install, 500);
  setTimeout(install, 1200);

  var obs =
    typeof MutationObserver === "function"
      ? new MutationObserver(function () {
          var picker = document.querySelector(".wall-picker");
          if (!picker || picker.dataset.xpWalls === "2") return;
          picker.dataset.xpWalls = "2";
          var keys = ["default", "azure", "luna", "follow", "desert", "crystal"];
          picker.innerHTML = keys
            .map(function (k) {
              return (
                '<button type="button" class="wall-thumb" data-wall="' +
                k +
                '" title="' +
                (XP_LABELS[k] || k) +
                '" role="option" style="background-image:url(' +
                PHOTO[k] +
                ')"></button>'
              );
            })
            .join("");
          picker.querySelectorAll(".wall-thumb").forEach(function (btn) {
            btn.addEventListener("click", function () {
              applyXpWallpaper(btn.getAttribute("data-wall"));
            });
          });

          var block = picker.parentElement;
          if (block && !block.querySelector(".cp-wall-url")) {
            var wrap = document.createElement("div");
            wrap.style.marginTop = "10px";
            wrap.innerHTML =
              '<label class="cp-row" style="display:block">' +
              "<span>Custom photo URL</span>" +
              '<input type="url" class="cp-wall-url" placeholder="https://…jpg" ' +
              'style="width:100%;margin-top:4px;padding:4px 6px;box-sizing:border-box" />' +
              "</label>" +
              '<button type="button" class="cp-wall-url-apply" style="margin-top:6px">Apply photo</button>';
            block.appendChild(wrap);
            var input = wrap.querySelector(".cp-wall-url");
            var btn = wrap.querySelector(".cp-wall-url-apply");
            try {
              input.value = localStorage.getItem("portfolio-wallpaper-url") || "";
            } catch (_) {}
            function applyCustom() {
              var u = (input.value || "").trim();
              if (!/^https?:\/\//i.test(u)) {
                if (typeof showDialog === "function") showDialog("Wallpaper", "Enter a full http(s) image URL.");
                else alert("Enter a full http(s) image URL.");
                return;
              }
              applyXpWallpaper(u);
            }
            btn.addEventListener("click", applyCustom);
            input.addEventListener("keydown", function (e) {
              if (e.key === "Enter") {
                e.preventDefault();
                applyCustom();
              }
            });
          }

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
              .join("") + '<option value="custom">Custom photo</option>';
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
