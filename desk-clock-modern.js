/* desk-clock-modern.js — modern desktop clock with Geez (Ethiopic) numerals */
(function () {
  "use strict";

  function isDesktop() {
    return window.innerWidth >= 900;
  }

  /* Ethiopic digits ፩–፱; 0 has no traditional form → Latin 0 */
  var GEEZ = {
    "0": "0",
    "1": "፩",
    "2": "፪",
    "3": "፫",
    "4": "፬",
    "5": "፭",
    "6": "፮",
    "7": "፯",
    "8": "፰",
    "9": "፱",
  };

  function toGeezDigits(str) {
    return String(str).replace(/[0-9]/g, function (d) {
      return GEEZ[d] != null ? GEEZ[d] : d;
    });
  }

  var ETH_MONTHS_AM = [
    "መስከረም",
    "ጥቅምት",
    "ኅዳር",
    "ታኅሣሥ",
    "ጥር",
    "የካቲት",
    "መጋቢት",
    "ሚያዝያ",
    "ግንቦት",
    "ሰኔ",
    "ሐምሌ",
    "ነሐሴ",
    "ጳጉሜን",
  ];

  function gregorianToJDN(year, month, day) {
    var a = Math.floor((14 - month) / 12);
    var y = year + 4800 - a;
    var m = month + 12 * a - 3;
    return (
      day +
      Math.floor((153 * m + 2) / 5) +
      365 * y +
      Math.floor(y / 4) -
      Math.floor(y / 100) +
      Math.floor(y / 400) -
      32045
    );
  }

  function toEthiopianDate(date) {
    var gy = date.getFullYear();
    var gm = date.getMonth() + 1;
    var gd = date.getDate();
    var jdn = gregorianToJDN(gy, gm, gd);
    var r = (jdn - 1723856) % 1461;
    var n = (r % 365) + 365 * Math.floor(r / 1460);
    var year =
      4 * Math.floor((jdn - 1723856) / 1461) +
      Math.floor(r / 365) -
      Math.floor(r / 1460);
    var month = Math.floor(n / 30) + 1;
    var day = (n % 30) + 1;
    return {
      year: year,
      month: month,
      day: day,
      monthNameAm: ETH_MONTHS_AM[month - 1] || "",
    };
  }

  function ensureEthiopicFont() {
    if (document.getElementById("noto-ethiopic-font")) return;
    var pre = document.createElement("link");
    pre.rel = "preconnect";
    pre.href = "https://fonts.googleapis.com";
    document.head.appendChild(pre);
    var pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://fonts.gstatic.com";
    pre2.crossOrigin = "anonymous";
    document.head.appendChild(pre2);
    var link = document.createElement("link");
    link.id = "noto-ethiopic-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }

  function injectCss() {
    var id = "desk-clock-modern-css";
    var old = document.getElementById(id);
    if (old) old.remove();
    var s = document.createElement("style");
    s.id = id;
    s.textContent =
      "@media (min-width:900px){" +
      "#desktop-widgets.desktop-widgets,.desktop-widgets{" +
      "position:absolute!important;top:24px!important;right:28px!important;" +
      "z-index:40!important;pointer-events:none!important}" +
      "#eth-clock-gadget.clock-gadget,#eth-clock-gadget.gadget.clock-gadget," +
      ".clock-gadget#eth-clock-gadget{" +
      "pointer-events:auto!important;" +
      "width:min(300px,34vw)!important;" +
      "padding:22px 22px 16px!important;" +
      "border-radius:22px!important;" +
      "background:rgba(15,23,42,.55)!important;" +
      "backdrop-filter:blur(24px) saturate(1.4)!important;" +
      "-webkit-backdrop-filter:blur(24px) saturate(1.4)!important;" +
      "border:1px solid rgba(255,255,255,.14)!important;" +
      "box-shadow:0 18px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.12)!important;" +
      "color:#f8fafc!important;" +
      "font-family:\"Noto Sans Ethiopic\",\"Noto Sans\",ui-sans-serif,system-ui,sans-serif!important;" +
      "text-align:center!important;" +
      "user-select:none!important}" +
      "#eth-clock-gadget .gadget-time,#gadget-time{" +
      "font-family:\"Noto Sans Ethiopic\",\"Noto Sans\",sans-serif!important;" +
      "font-size:40px!important;" +
      "font-weight:600!important;" +
      "letter-spacing:0.06em!important;" +
      "line-height:1.1!important;" +
      "color:#fff!important;" +
      "text-shadow:0 2px 12px rgba(0,0,0,.35)!important;" +
      "margin:0!important}" +
      "#eth-clock-gadget .gadget-ms,#gadget-ms{" +
      "font-family:\"Noto Sans Ethiopic\",\"Noto Sans\",sans-serif!important;" +
      "font-size:14px!important;" +
      "font-weight:500!important;" +
      "letter-spacing:0.14em!important;" +
      "color:rgba(226,232,240,.75)!important;" +
      "margin:4px 0 12px!important}" +
      "#eth-clock-gadget .gadget-date,#gadget-date{" +
      "font-family:\"Noto Sans Ethiopic\",\"Noto Sans\",sans-serif!important;" +
      "font-size:15px!important;" +
      "font-weight:600!important;" +
      "color:#e2e8f0!important;" +
      "margin:0 0 4px!important;" +
      "line-height:1.4!important}" +
      "#eth-clock-gadget .gadget-eth,#gadget-eth{" +
      "font-size:12px!important;" +
      "font-weight:500!important;" +
      "color:rgba(148,163,184,.95)!important;" +
      "margin:0 0 14px!important;" +
      "font-family:ui-sans-serif,system-ui,sans-serif!important}" +
      "#eth-clock-gadget .gadget-hc,#hc-toggle.gadget-hc,#hc-toggle{" +
      "display:inline-flex!important;align-items:center!important;justify-content:center!important;" +
      "min-width:72px!important;height:34px!important;padding:0 14px!important;" +
      "border:0!important;border-radius:999px!important;" +
      "background:rgba(255,255,255,.12)!important;color:#f1f5f9!important;" +
      "font-size:12px!important;font-weight:600!important;cursor:pointer!important;" +
      "font-family:ui-sans-serif,system-ui,sans-serif!important}" +
      "#hc-toggle:hover{background:rgba(255,255,255,.2)!important}" +
      "body.high-contrast #eth-clock-gadget{background:#000!important;border-color:#fff!important;backdrop-filter:none!important}" +
      "body.high-contrast #hc-toggle{background:#fff!important;color:#000!important}" +
      "}" +
      "@media (max-width:899px){#desktop-widgets,.desktop-widgets{display:none!important}}";
    document.head.appendChild(s);
  }

  function pad(n, len) {
    var s = String(n);
    while (s.length < (len || 2)) s = "0" + s;
    return s;
  }

  function tick() {
    if (!isDesktop()) return;
    var n = new Date();
    var t = document.getElementById("gadget-time");
    var msEl = document.getElementById("gadget-ms");
    var d = document.getElementById("gadget-date");
    var e = document.getElementById("gadget-eth");

    var h = pad(n.getHours());
    var m = pad(n.getMinutes());
    var sec = pad(n.getSeconds());
    var ms = pad(n.getMilliseconds(), 3);

    /* Geez numerals for time */
    if (t) t.textContent = toGeezDigits(h + ":" + m + ":" + sec);
    if (msEl) msEl.textContent = toGeezDigits("." + ms);

    var eth = toEthiopianDate(n);
    if (d) {
      d.textContent =
        eth.monthNameAm +
        " " +
        toGeezDigits(String(eth.day)) +
        " · " +
        toGeezDigits(String(eth.year));
    }
    if (e) {
      e.textContent = n.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    var hc = document.getElementById("hc-toggle");
    if (hc && !hc.dataset.modern) {
      hc.dataset.modern = "1";
      hc.setAttribute("aria-label", "Toggle high contrast");
      function syncHcLabel() {
        var on = document.body.classList.contains("high-contrast");
        hc.textContent = on ? "Contrast · On" : "Contrast";
      }
      syncHcLabel();
      hc.addEventListener("click", function () {
        setTimeout(syncHcLabel, 0);
      });
    }
  }

  function enhanceStructure() {
    var root = document.getElementById("eth-clock-gadget");
    if (!root) return;
    root.classList.add("clock-modern");
    root.setAttribute("lang", "am");
  }

  function boot() {
    if (!isDesktop()) return;
    ensureEthiopicFont();
    injectCss();
    enhanceStructure();
    tick();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  document.addEventListener("menelik-boot-done", boot);
  window.addEventListener("resize", boot);
  setTimeout(boot, 400);
  setTimeout(boot, 1200);
  setTimeout(boot, 2500);
  setInterval(tick, 50);

  window.toGeezDigits = toGeezDigits;
})();
