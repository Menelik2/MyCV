/* boot-loader.js — loads full portfolio shell safely */
(function () {
  "use strict";

  var GOOD =
    "https://cdn.jsdelivr.net/gh/Menelik2/MyCV@0b2fcde6dc32469dd2563cdf9f6bfbf58747f63b/index.html";
  var V = "20261015origIcons";

  function ensureLink(href) {
    var base = href.split("?")[0];
    var links = document.querySelectorAll("link[rel=stylesheet]");
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute("href") || "";
      if (h.indexOf(base) !== -1) return;
    }
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }

  function ensureScript(src) {
    var base = src.split("?")[0];
    var scripts = document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      var s = scripts[i].getAttribute("src") || "";
      if (s.indexOf(base) !== -1) return;
    }
    var el = document.createElement("script");
    el.src = src;
    el.async = false;
    (document.body || document.documentElement).appendChild(el);
  }

  function injectAfterLoad() {
    ensureLink("styles.css?v=" + V);
    ensureLink("xp-wallpaper.css?v=" + V);
    ensureLink("mobile-view.css?v=" + V);
    ensureScript("desk-view-patch.js?v=" + V);
    ensureScript("xp-wallpaper.js?v=" + V);
    ensureScript("xp-icons.js?v=" + V);
    ensureScript("mobile-view-patch.js?v=" + V);
    ensureScript("admin-fix.js?v=" + V);
    // ios-icons.js intentionally NOT loaded — keep original mobile icons
    try {
      if (!localStorage.getItem("portfolio-wallpaper")) {
        localStorage.setItem("portfolio-wallpaper", "default");
      }
      document.body.dataset.wallpaper =
        localStorage.getItem("portfolio-wallpaper") || "default";
    } catch (e) {
      document.body.dataset.wallpaper = "default";
    }
    if (typeof window.applyWallpaper === "function") {
      try {
        window.applyWallpaper(
          document.body.dataset.wallpaper || "default",
          { silent: true }
        );
      } catch (e2) {}
    }
    if (typeof window.syncMobileShell === "function") {
      try {
        window.syncMobileShell();
      } catch (e3) {}
    }
    if (typeof window.setAppHeight === "function") {
      try {
        window.setAppHeight();
      } catch (e4) {}
    }
  }

  function apply(html) {
    html = html.split("20260823phonefs1").join(V);
    html = html.replace(/styles\.css\?v=[^"]+/g, "styles.css?v=" + V);

    if (html.indexOf("xp-wallpaper.css") === -1) {
      html = html.replace(
        /(<link[^>]*styles\.css[^>]*>)/,
        "$1\n  <link rel=\"stylesheet\" href=\"xp-wallpaper.css?v=" + V + "\" />"
      );
    }

    document.open();
    document.write(html);
    document.close();

    setTimeout(injectAfterLoad, 0);
    setTimeout(injectAfterLoad, 250);
    setTimeout(injectAfterLoad, 700);
  }

  function fail(err) {
    var msg = document.getElementById("boot-msg");
    if (msg) {
      msg.innerHTML =
        "<div style=\"text-align:left;max-width:480px;padding:24px\">" +
        "<h1 style=\"margin:0 0 8px\">Menelik OS</h1>" +
        "<p>Could not load the portfolio shell.</p>" +
        "<pre style=\"color:#400;background:#fee;padding:8px;border-radius:4px\">" +
        String(err) +
        "</pre>" +
        "<p><a href=\"" +
        GOOD +
        "\" style=\"color:#06c\">Open last good shell directly</a></p>" +
        "</div>";
    }
  }

  fetch(GOOD, { cache: "no-store", mode: "cors" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status + " fetching shell");
      return r.text();
    })
    .then(apply)
    .catch(fail);
})();
