/* admin-fix.js — fix admin login + known default password */
(function () {
  "use strict";

  // Default password for this deployment (change after first login)
  var DEFAULT_PASSWORD = "MenelikAdmin1";
  var NEW_RECORD =
    "pbkdf2$310000$6d656e656c696b2d78702d61646d696e2d76322d64656661756c742d73616c74$c94f8adf0e34579e90400c34ec69155a1691712493c04e6d2f27dc3456c4eb12";
  var OLD_DEFAULT_RECORD =
    "pbkdf2$310000$6d656e656c696b2d78702d61646d696e2d76322d64656661756c742d73616c74$5458ac3166ac879b3bcb8fd0b5246ed74ad2113aac766093118fbf40553d3b25";

  var PASS_HASH_KEY = "portfolio-admin-pass-hash";
  var SESSION_KEY = "portfolio-admin-session";
  var LOCK_KEY = "portfolio-admin-lock";

  function toHex(buf) {
    return Array.from(new Uint8Array(buf))
      .map(function (b) {
        return b.toString(16).padStart(2, "0");
      })
      .join("");
  }

  function fromHex(hex) {
    var clean = String(hex).replace(/[^0-9a-f]/gi, "");
    var out = new Uint8Array(clean.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
    return out;
  }

  function timingSafeEqualHex(a, b) {
    if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }

  async function hashPbkdf2(password, saltBytes, iterations) {
    var iters = iterations || 310000;
    var salt = saltBytes || crypto.getRandomValues(new Uint8Array(16));
    var keyMaterial = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    );
    var bits = await crypto.subtle.deriveBits(
      { name: "PBKDF2", salt: salt, iterations: iters, hash: "SHA-256" },
      keyMaterial,
      256
    );
    return "pbkdf2$" + iters + "$" + toHex(salt) + "$" + toHex(bits);
  }

  function getRecord() {
    try {
      var stored = localStorage.getItem(PASS_HASH_KEY);
      // Drop unknown factory default so our known default applies
      if (!stored || stored === OLD_DEFAULT_RECORD) {
        return NEW_RECORD;
      }
      return stored;
    } catch (_) {
      return NEW_RECORD;
    }
  }

  async function verify(password) {
    if (!password) return false;
    var record = getRecord();
    var parts = record.split("$");
    if (parts[0] !== "pbkdf2" || parts.length < 4) return false;
    var iters = parseInt(parts[1], 10) || 310000;
    var salt = fromHex(parts[2]);
    var hashHex = (parts[3] || "").toLowerCase();
    var candidate = await hashPbkdf2(password, salt, iters);
    var candHash = (candidate.split("$")[3] || "").toLowerCase();
    return timingSafeEqualHex(candHash, hashHex);
  }

  function clearLock() {
    try {
      localStorage.removeItem(LOCK_KEY);
    } catch (_) {}
  }

  function showEditor() {
    var login = document.getElementById("admin-login");
    var editor = document.getElementById("admin-editor");
    var err = document.getElementById("admin-error");
    if (login) login.hidden = true;
    if (editor) editor.hidden = false;
    if (err) err.hidden = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch (_) {}
    if (typeof populateAdminEditor === "function") {
      try {
        populateAdminEditor();
      } catch (_) {}
    }
  }

  function ensureOverlayCss() {
    if (document.getElementById("admin-fix-css")) return;
    var s = document.createElement("style");
    s.id = "admin-fix-css";
    s.textContent =
      "#admin-overlay{position:fixed!important;inset:0!important;z-index:10000!important;" +
      "display:flex!important;align-items:center!important;justify-content:center!important;" +
      "background:rgba(0,0,0,.55)!important;padding:16px!important;box-sizing:border-box!important}" +
      "#admin-overlay[hidden]{display:none!important}" +
      "#admin-overlay .admin-panel,#admin-overlay .admin-box{max-width:min(560px,96vw)!important;" +
      "max-height:min(90vh,720px)!important;overflow:auto!important;" +
      "background:#f0f0f0!important;color:#111!important;border-radius:8px!important;" +
      "padding:16px!important;box-shadow:0 8px 32px rgba(0,0,0,.35)!important}" +
      "#admin-overlay input,#admin-overlay textarea,#admin-overlay select{" +
      "width:100%!important;box-sizing:border-box!important;margin-top:4px!important}" +
      "#admin-overlay .admin-btn{cursor:pointer!important;padding:8px 12px!important;margin:4px 4px 4px 0!important}" +
      "#admin-overlay .admin-btn.primary{background:#1a73e8!important;color:#fff!important;border:none!important}" +
      "#admin-error{color:#b00020!important;margin:8px 0!important}" +
      "#admin-status.err{color:#b00020!important}";
    document.head.appendChild(s);
  }

  function openAdminFixed() {
    ensureOverlayCss();
    clearLock();
    var overlay = document.getElementById("admin-overlay");
    if (!overlay) {
      alert("Admin panel not found in page.");
      return;
    }
    overlay.hidden = false;
    overlay.removeAttribute("hidden");
    var session = false;
    try {
      session = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch (_) {}
    var login = document.getElementById("admin-login");
    var editor = document.getElementById("admin-editor");
    if (login) login.hidden = session;
    if (editor) editor.hidden = !session;
    var err = document.getElementById("admin-error");
    if (err) err.hidden = true;
    var pass = document.getElementById("admin-password");
    if (pass) pass.value = "";
    if (session && typeof populateAdminEditor === "function") {
      try {
        populateAdminEditor();
      } catch (_) {}
    }
    try {
      if (typeof closeStartMenu === "function") closeStartMenu();
    } catch (_) {}
  }

  async function onLoginClick(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    ensureOverlayCss();
    clearLock();
    var errEl = document.getElementById("admin-error");
    var btn = document.getElementById("admin-login-btn");
    var passEl = document.getElementById("admin-password");
    var pass = passEl ? passEl.value : "";
    if (!pass) {
      if (errEl) {
        errEl.hidden = false;
        errEl.textContent = "Enter your password.";
      }
      return;
    }
    if (btn) btn.disabled = true;
    try {
      var ok = await verify(pass);
      // Also accept if original verify works
      if (!ok && typeof verifyAdminPassword === "function") {
        try {
          ok = await verifyAdminPassword(pass);
        } catch (_) {}
      }
      if (ok) {
        showEditor();
        var st = document.getElementById("admin-status");
        if (pass === DEFAULT_PASSWORD && st) {
          st.className = "admin-status err";
          st.textContent =
            "Logged in with default password. Please set a new password (8+ characters) below.";
        }
      } else {
        if (errEl) {
          errEl.hidden = false;
          errEl.textContent = "Wrong password. Try again.";
        }
      }
    } catch (err) {
      if (errEl) {
        errEl.hidden = false;
        errEl.textContent = "Login error: " + (err && err.message ? err.message : err);
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  function wire() {
    ensureOverlayCss();
    clearLock();

    // Prefer known default when old factory hash is in storage
    try {
      var stored = localStorage.getItem(PASS_HASH_KEY);
      if (stored === OLD_DEFAULT_RECORD) {
        localStorage.removeItem(PASS_HASH_KEY);
      }
    } catch (_) {}

    var btn = document.getElementById("admin-login-btn");
    if (btn && btn.dataset.adminFix !== "1") {
      btn.dataset.adminFix = "1";
      btn.addEventListener("click", onLoginClick, true);
    }

    var pass = document.getElementById("admin-password");
    if (pass && pass.dataset.adminFix !== "1") {
      pass.dataset.adminFix = "1";
      pass.addEventListener("keydown", function (e) {
        if (e.key === "Enter") onLoginClick(e);
      });
    }

    var openBtn = document.getElementById("admin-open-start");
    if (openBtn && openBtn.dataset.adminFix !== "1") {
      openBtn.dataset.adminFix = "1";
      openBtn.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          openAdminFixed();
        },
        true
      );
    }

    // Override global openAdmin when possible
    window.openAdmin = openAdminFixed;

    // Ctrl+Shift+A
    if (!window.__adminFixKey) {
      window.__adminFixKey = true;
      document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
          e.preventDefault();
          openAdminFixed();
        }
      });
    }

    // URL ?admin=1 or #admin
    if (location.hash === "#admin" || /[?&]admin=1\b/.test(location.search)) {
      setTimeout(openAdminFixed, 400);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
  document.addEventListener("menelik-boot-done", wire);
  setTimeout(wire, 500);
  setTimeout(wire, 1500);

  // Expose for debugging (password not logged)
  window.__adminFixReady = true;
})();
