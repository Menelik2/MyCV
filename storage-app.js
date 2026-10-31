/* storage-app.js — real storage scanner (File System Access API)
   Pick a folder → top files, old downloads, duplicate photos, installers.
   Delete only after explicit confirm. */
(function () {
  "use strict";

  var PAGE_ID = "page-storage";
  var CONTENT_ID = "content-storage";
  var OLD_DAYS = 30;
  var MAX_FILES = 8000;
  var PHOTO_RE = /\.(jpe?g|png|gif|webp|heic|heif|bmp|tiff?)$/i;
  var INSTALLER_RE = /\.(exe|msi|dmg|pkg|msix|appx|deb|rpm)$/i;
  var SETUP_RE = /(setup|installer|install)[^\\/]*\.(exe|msi|dmg|pkg)$/i;

  var state = {
    rootName: "",
    files: [],
    handles: {},
    scanning: false,
  };

  function fmt(bytes) {
    if (bytes == null || isNaN(bytes)) return "—";
    var u = ["B", "KB", "MB", "GB", "TB"];
    var i = 0;
    var n = Number(bytes);
    while (n >= 1024 && i < u.length - 1) {
      n /= 1024;
      i++;
    }
    return (i === 0 ? n : n.toFixed(n >= 10 ? 1 : 2)) + " " + u[i];
  }

  function daysAgo(ms) {
    if (!ms) return "—";
    var d = Math.floor((Date.now() - ms) / 86400000);
    if (d <= 0) return "today";
    if (d === 1) return "1 day";
    return d + " days";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }

  function supportsFs() {
    return typeof window.showDirectoryPicker === "function";
  }

  function iconSvg() {
    return (
      "url(\"data:image/svg+xml," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">' +
          '<path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2v8h16V8H4zm12 5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>' +
          "</svg>"
      ) +
      '")'
    );
  }

  function ensureIconCss() {
    var id = "storage-app-icon-css";
    if (document.getElementById(id)) return;
    var s = document.createElement("style");
    s.id = id;
    s.textContent =
      ".app-img.storage{background-color:#0ea5e9!important;background-image:" +
      iconSvg() +
      "!important;background-size:54%!important;background-repeat:no-repeat!important;background-position:center!important}" +
      ".storage-report{font:13px/1.45 system-ui,-apple-system,sans-serif;color:#1c1c1e}" +
      ".storage-report h3{margin:18px 0 8px;font-size:14px;font-weight:700}" +
      ".storage-report .sum{background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:12px 14px;margin-bottom:8px}" +
      ".storage-report .note{font-size:12px;color:#64748b;margin:6px 0 12px}" +
      ".storage-report table{width:100%;border-collapse:collapse;font-size:12px}" +
      ".storage-report th,.storage-report td{text-align:left;padding:8px 6px;border-bottom:1px solid #e5e7eb;vertical-align:top}" +
      ".storage-report th{color:#64748b;font-weight:600}" +
      ".storage-report .sz{white-space:nowrap;font-weight:600;color:#0f172a}" +
      ".storage-report .path{word-break:break-all}" +
      ".storage-report .bar{height:8px;background:#e2e8f0;border-radius:99px;overflow:hidden;margin-top:8px}" +
      ".storage-report .bar>i{display:block;height:100%;background:linear-gradient(90deg,#38bdf8,#0284c7)}" +
      ".storage-actions{position:sticky;bottom:0;background:#fff;padding:12px 0 4px;display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid #e5e7eb;margin-top:16px;z-index:2}" +
      ".storage-actions button{appearance:none;border:0;border-radius:10px;padding:10px 14px;font-weight:600;font-size:13px;cursor:pointer}" +
      ".storage-actions .primary{background:#0ea5e9;color:#fff}" +
      ".storage-actions .danger{background:#fee2e2;color:#b91c1c}" +
      ".storage-actions .danger[disabled]{opacity:.45;cursor:not-allowed}" +
      ".storage-actions .ghost{background:#f1f5f9;color:#334155}" +
      ".storage-progress{font-size:12px;color:#0369a1;margin:8px 0}" +
      "#mobile .app-img.storage{width:48px!important;height:48px!important;border-radius:12px!important}";
    document.head.appendChild(s);
  }

  async function estimateBrowser() {
    try {
      if (navigator.storage && navigator.storage.estimate) {
        var e = await navigator.storage.estimate();
        return { usage: e.usage || 0, quota: e.quota || 0 };
      }
    } catch (err) {}
    return { usage: 0, quota: 0 };
  }

  async function walkDir(dirHandle, prefix, out, onProgress) {
    if (out.length >= MAX_FILES) return;
    var entries = [];
    try {
      for await (var entry of dirHandle.values()) entries.push(entry);
    } catch (err) {
      return;
    }
    for (var i = 0; i < entries.length; i++) {
      if (out.length >= MAX_FILES) return;
      var handle = entries[i];
      var path = prefix ? prefix + "/" + handle.name : handle.name;
      try {
        if (handle.kind === "file") {
          var file = await handle.getFile();
          var item = {
            path: path,
            name: handle.name,
            size: file.size,
            lastModified: file.lastModified,
            type: file.type || "",
          };
          out.push(item);
          state.handles[path] = handle;
          if (onProgress && out.length % 40 === 0) onProgress(out.length, path);
        } else if (handle.kind === "directory") {
          /* skip heavy / system-ish dirs */
          var n = handle.name.toLowerCase();
          if (
            n === "node_modules" ||
            n === ".git" ||
            n === "$recycle.bin" ||
            n === "system volume information" ||
            n === "windows" ||
            n === "proc" ||
            n === "dev"
          ) {
            continue;
          }
          await walkDir(handle, path, out, onProgress);
        }
      } catch (e2) {
        /* permission / locked file */
      }
    }
  }

  function analyze(files) {
    var sorted = files.slice().sort(function (a, b) {
      return b.size - a.size;
    });
    var top20 = sorted.slice(0, 20).map(function (f) {
      return { path: f.path, size: fmt(f.size), bytes: f.size, key: f.path };
    });

    var cutoff = Date.now() - OLD_DAYS * 86400000;
    var oldDownloads = files
      .filter(function (f) {
        return (
          /download/i.test(f.path) &&
          f.lastModified &&
          f.lastModified < cutoff &&
          f.size > 50 * 1024
        );
      })
      .sort(function (a, b) {
        return a.lastModified - b.lastModified;
      })
      .slice(0, 30)
      .map(function (f) {
        return {
          path: f.path,
          size: fmt(f.size),
          age: daysAgo(f.lastModified),
          key: f.path,
        };
      });

    /* duplicate photos: same name + same size */
    var photoMap = {};
    files.forEach(function (f) {
      if (!PHOTO_RE.test(f.name)) return;
      var k = f.name.toLowerCase() + "::" + f.size;
      if (!photoMap[k]) photoMap[k] = [];
      photoMap[k].push(f);
    });
    var duplicatePhotos = [];
    Object.keys(photoMap).forEach(function (k) {
      var g = photoMap[k];
      if (g.length < 2) return;
      duplicatePhotos.push({
        path: g.map(function (x) {
          return x.path;
        }).join(" ≈ "),
        size: fmt(g[0].size) + " ×" + g.length,
        note: "same name + size",
        key: g[0].path,
        keys: g.map(function (x) {
          return x.path;
        }),
      });
    });
    duplicatePhotos = duplicatePhotos.slice(0, 40);

    var usedInstallers = files
      .filter(function (f) {
        return INSTALLER_RE.test(f.name) || SETUP_RE.test(f.name);
      })
      .sort(function (a, b) {
        return b.size - a.size;
      })
      .slice(0, 30)
      .map(function (f) {
        return {
          path: f.path,
          size: fmt(f.size),
          note: /download/i.test(f.path) ? "in Downloads" : "installer package",
          key: f.path,
        };
      });

    var totalBytes = files.reduce(function (s, f) {
      return s + (f.size || 0);
    }, 0);

    return {
      top20: top20,
      oldDownloads: oldDownloads,
      duplicatePhotos: duplicatePhotos,
      usedInstallers: usedInstallers,
      totalBytes: totalBytes,
      fileCount: files.length,
    };
  }

  function rowsHtml(list, withAge) {
    if (!list || !list.length) {
      return (
        '<tr><td colspan="' +
        (withAge ? 4 : 3) +
        '" class="note">None found in this folder.</td></tr>'
      );
    }
    return list
      .map(function (item) {
        var keys = item.keys || [item.key || item.path];
        return (
          "<tr>" +
          "<td><input type=\"checkbox\" data-keys=\"" +
          esc(JSON.stringify(keys)) +
          "\"/></td>" +
          '<td class="path">' +
          esc(item.path) +
          (item.note
            ? '<div class="note" style="margin:2px 0 0">' + esc(item.note) + "</div>"
            : "") +
          "</td>" +
          '<td class="sz">' +
          esc(item.size) +
          "</td>" +
          (withAge ? "<td>" + esc(item.age || "") + "</td>" : "") +
          "</tr>"
        );
      })
      .join("");
  }

  function renderShell(root, opts) {
    opts = opts || {};
    var browser = opts.browser || { usage: 0, quota: 0 };
    var report = opts.report;
    var pct =
      browser.quota > 0
        ? Math.min(100, (browser.usage / browser.quota) * 100).toFixed(1)
        : 0;

    var body =
      '<div class="storage-report">' +
      '<div class="sum">' +
      "<strong>Real storage tools</strong><br/>" +
      "This site origin: <strong>" +
      fmt(browser.usage) +
      "</strong> used" +
      (browser.quota ? " of " + fmt(browser.quota) + " quota" : "") +
      '<div class="bar"><i style="width:' +
      pct +
      '%"></i></div>' +
      "</div>" +
      '<p class="note">Browsers cannot scan your whole PC without permission. Choose a folder (e.g. Downloads, Pictures, or your user folder) to run a <strong>real</strong> scan.</p>' +
      '<div class="storage-actions" style="position:static;border:0;padding:0 0 12px;margin:0">' +
      '<button type="button" class="primary" id="storage-pick">' +
      (supportsFs() ? "Choose folder to scan" : "Folder scan not supported") +
      "</button>" +
      (report
        ? '<button type="button" class="ghost" id="storage-rescan">Scan again</button>'
        : "") +
      "</div>" +
      '<div class="storage-progress" id="storage-progress"></div>';

    if (!supportsFs()) {
      body +=
        '<p class="note">Your browser does not support the File System Access API. Use <strong>Chrome</strong> or <strong>Edge</strong> on desktop for real folder scanning.</p>';
    }

    if (report) {
      body +=
        '<div class="sum">' +
        "Folder: <strong>" +
        esc(state.rootName) +
        "</strong><br/>" +
        report.fileCount +
        " files · " +
        fmt(report.totalBytes) +
        " total (scanned)" +
        "</div>" +
        "<h3>Top 20 largest files</h3>" +
        "<table><thead><tr><th></th><th>Path</th><th>Size</th></tr></thead><tbody>" +
        rowsHtml(report.top20, false) +
        "</tbody></table>" +
        "<h3>Old downloads (" +
        OLD_DAYS +
        "+ days, under *Download*)</h3>" +
        "<table><thead><tr><th></th><th>Path</th><th>Size</th><th>Age</th></tr></thead><tbody>" +
        rowsHtml(report.oldDownloads, true) +
        "</tbody></table>" +
        "<h3>Duplicate photos (same name + size)</h3>" +
        "<table><thead><tr><th></th><th>Match</th><th>Size</th></tr></thead><tbody>" +
        rowsHtml(report.duplicatePhotos, false) +
        "</tbody></table>" +
        "<h3>Installers (.exe / .msi / .dmg / setup*)</h3>" +
        "<table><thead><tr><th></th><th>Path</th><th>Size</th></tr></thead><tbody>" +
        rowsHtml(report.usedInstallers, false) +
        "</tbody></table>" +
        '<div class="storage-actions">' +
        '<button type="button" class="primary" id="storage-select-all">Select all listed</button>' +
        '<button type="button" class="ghost" id="storage-clear">Clear</button>' +
        '<button type="button" class="danger" id="storage-delete" disabled>Delete selected…</button>' +
        "</div>" +
        '<p class="note" id="storage-status">Nothing is deleted until you confirm.</p>';
    }

    body += "</div>";
    root.innerHTML = body;
    wireUi(root, report);
  }

  function wireUi(root, report) {
    var pick = root.querySelector("#storage-pick");
    var rescan = root.querySelector("#storage-rescan");
    var progress = root.querySelector("#storage-progress");

    async function startPick() {
      if (!supportsFs()) {
        if (progress)
          progress.textContent =
            "Not supported here. Open this site in Chrome or Edge on a computer.";
        return;
      }
      if (state.scanning) return;
      try {
        var dir = await window.showDirectoryPicker({
          mode: "readwrite",
          id: "menelik-storage-scan",
        });
        state.rootName = dir.name;
        state.files = [];
        state.handles = {};
        state.scanning = true;
        if (progress) progress.textContent = "Scanning “" + dir.name + "”…";
        await walkDir(dir, dir.name, state.files, function (n, path) {
          if (progress)
            progress.textContent =
              "Scanned " + n + " files… " + path.slice(0, 60);
        });
        state.scanning = false;
        var report2 = analyze(state.files);
        var browser = await estimateBrowser();
        if (progress) progress.textContent = "Done.";
        renderShell(root, { browser: browser, report: report2 });
      } catch (err) {
        state.scanning = false;
        if (err && err.name === "AbortError") {
          if (progress) progress.textContent = "Folder pick cancelled.";
          return;
        }
        if (progress)
          progress.textContent =
            "Could not scan: " + (err && err.message ? err.message : String(err));
      }
    }

    if (pick) pick.onclick = startPick;
    if (rescan) rescan.onclick = startPick;

    if (!report) return;

    var delBtn = root.querySelector("#storage-delete");
    var status = root.querySelector("#storage-status");
    var selectAll = root.querySelector("#storage-select-all");
    var clear = root.querySelector("#storage-clear");

    if (selectAll)
      selectAll.onclick = function () {
        root.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
          c.checked = true;
        });
        root.dispatchEvent(new Event("change", { bubbles: true }));
      };
    if (clear)
      clear.onclick = function () {
        root.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
          c.checked = false;
        });
        root.dispatchEvent(new Event("change", { bubbles: true }));
      };

    root.addEventListener("change", function (e) {
      if (!e.target || !e.target.matches('input[type="checkbox"]')) return;
      var n = root.querySelectorAll('input[type="checkbox"]:checked').length;
      if (delBtn) delBtn.disabled = n === 0;
      if (status)
        status.textContent =
          n === 0
            ? "Nothing is deleted until you confirm."
            : n + " selected — delete still needs your confirmation.";
    });

    if (delBtn)
      delBtn.onclick = async function () {
        var keys = [];
        root.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
          try {
            var arr = JSON.parse(c.getAttribute("data-keys") || "[]");
            arr.forEach(function (k) {
              if (keys.indexOf(k) === -1) keys.push(k);
            });
          } catch (e3) {}
        });
        if (!keys.length) {
          if (status) status.textContent = "Select at least one item.";
          return;
        }
        var ok = window.confirm(
          "Permanently delete " +
            keys.length +
            " file(s) from your disk?\n\nThis cannot be undone.\n\nPress OK only if you are sure."
        );
        if (!ok) {
          if (status) status.textContent = "Cancelled. Nothing was deleted.";
          return;
        }
        var removed = 0;
        var failed = 0;
        for (var i = 0; i < keys.length; i++) {
          var h = state.handles[keys[i]];
          if (!h) {
            failed++;
            continue;
          }
          try {
            if (typeof h.remove === "function") {
              await h.remove();
              removed++;
              delete state.handles[keys[i]];
              state.files = state.files.filter(function (f) {
                return f.path !== keys[i];
              });
            } else {
              failed++;
            }
          } catch (e4) {
            failed++;
          }
        }
        if (status)
          status.textContent =
            "Deleted " + removed + " file(s)" + (failed ? ", " + failed + " failed" : "") + ".";
        var report2 = analyze(state.files);
        var browser = await estimateBrowser();
        renderShell(root, { browser: browser, report: report2 });
      };
  }

  async function renderHome(root) {
    var browser = await estimateBrowser();
    renderShell(root, { browser: browser, report: null });
  }

  function ensurePage() {
    var mobile =
      document.getElementById("mobile-content") ||
      document.querySelector("#mobile .mobile-content");
    if (!mobile) return null;
    var page = document.getElementById(PAGE_ID);
    if (!page) {
      page = document.createElement("div");
      page.className = "app-page";
      page.id = PAGE_ID;
      page.hidden = true;
      page.innerHTML =
        '<div class="page-header"><button type="button" class="back-btn">‹ Back</button><h2>Storage</h2></div>' +
        '<div class="page-body page-body-full" id="' +
        CONTENT_ID +
        '"></div>';
      mobile.appendChild(page);
      var back = page.querySelector(".back-btn");
      if (back) {
        back.addEventListener("click", function () {
          page.hidden = true;
          var home = document.getElementById("home-screen");
          if (home) home.style.display = "";
          if (typeof window.showMobileHome === "function") {
            try {
              window.showMobileHome();
            } catch (e) {}
          }
        });
      }
    }
    return page;
  }

  function openStorage() {
    var page = ensurePage();
    if (!page) return;
    document.querySelectorAll("#mobile .app-page").forEach(function (p) {
      p.hidden = true;
    });
    var home = document.getElementById("home-screen");
    if (home) home.style.display = "none";
    page.hidden = false;
    var content = document.getElementById(CONTENT_ID);
    if (content) renderHome(content);
  }

  function injectHomeIcon() {
    var grid =
      document.querySelector("#home-screen .app-grid") ||
      document.querySelector(".app-grid");
    if (!grid || grid.querySelector('[data-page="storage"]')) return;
    var btn = document.createElement("button");
    btn.className = "app-icon";
    btn.setAttribute("data-page", "storage");
    btn.type = "button";
    btn.innerHTML = '<div class="app-img storage"></div><span>Storage</span>';
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openStorage();
    });
    var device = grid.querySelector('[data-page="device"]');
    if (device && device.parentNode === grid) grid.insertBefore(btn, device.nextSibling);
    else grid.appendChild(btn);
  }

  function injectAppsFolder() {
    var folder = document.querySelector(".apps-folder-grid");
    if (!folder || folder.querySelector('[data-page="storage"]')) return;
    var btn = document.createElement("button");
    btn.className = "app-icon";
    btn.setAttribute("data-page", "storage");
    btn.type = "button";
    btn.innerHTML = '<div class="app-img storage"></div><span>Storage</span>';
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openStorage();
    });
    folder.appendChild(btn);
  }

  function interceptClicks() {
    document.addEventListener(
      "click",
      function (e) {
        var t = e.target.closest && e.target.closest('[data-page="storage"]');
        if (!t) return;
        e.preventDefault();
        e.stopPropagation();
        openStorage();
      },
      true
    );
  }

  function boot() {
    ensureIconCss();
    injectHomeIcon();
    injectAppsFolder();
    ensurePage();
  }

  interceptClicks();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  document.addEventListener("menelik-boot-done", boot);
  setTimeout(boot, 300);
  setTimeout(boot, 900);
  setTimeout(boot, 2000);

  window.openStorageApp = openStorage;
})();
