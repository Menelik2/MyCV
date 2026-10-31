/* storage-app.js — Storage icon + disk report (delete only after user says yes) */
(function () {
  "use strict";

  var PAGE_ID = "page-storage";
  var CONTENT_ID = "content-storage";

  /* Demo scan data (portfolio shell cannot read the visitor's real disk) */
  var SCAN = {
    scannedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
    freeGb: 18.4,
    totalGb: 256,
    top20: [
      { path: "C:\\Users\\Public\\Videos\\Travel-2024.mp4", size: "12.4 GB", cat: "video" },
      { path: "C:\\Users\\You\\AppData\\Local\\Steam\\steamapps\\common\\…", size: "28.1 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Documents\\Projects\\node_modules", size: "9.8 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\ubuntu-24.04-desktop.iso", size: "5.6 GB", cat: "iso" },
      { path: "C:\\Users\\You\\Pictures\\Camera Roll", size: "4.2 GB", cat: "folder" },
      { path: "C:\\Program Files\\Adobe\\Adobe Photoshop 2024", size: "3.9 GB", cat: "folder" },
      { path: "C:\\Users\\You\\AppData\\Local\\Docker\\wsl", size: "3.5 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\Windows.iso", size: "3.1 GB", cat: "iso" },
      { path: "C:\\Users\\You\\Videos\\Screen recordings", size: "2.8 GB", cat: "folder" },
      { path: "C:\\Users\\You\\.gradle\\caches", size: "2.4 GB", cat: "folder" },
      { path: "C:\\Users\\You\\AppData\\Local\\Temp", size: "2.1 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\setup-office.exe", size: "1.9 GB", cat: "installer" },
      { path: "C:\\Users\\You\\Pictures\\iPhone Backup", size: "1.7 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Music\\Library", size: "1.5 GB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\chrome.dmg", size: "1.2 GB", cat: "installer" },
      { path: "C:\\Users\\You\\Documents\\Archive.zip", size: "980 MB", cat: "archive" },
      { path: "C:\\Users\\You\\AppData\\Roaming\\Slack", size: "860 MB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\dataset.csv", size: "720 MB", cat: "file" },
      { path: "C:\\Users\\You\\.cache\\pip", size: "640 MB", cat: "folder" },
      { path: "C:\\Users\\You\\Downloads\\vscode-setup.exe", size: "120 MB", cat: "installer" },
    ],
    oldDownloads: [
      { path: "Downloads\\ubuntu-24.04-desktop.iso", size: "5.6 GB", age: "94 days" },
      { path: "Downloads\\Windows.iso", size: "3.1 GB", age: "61 days" },
      { path: "Downloads\\setup-office.exe", size: "1.9 GB", age: "48 days" },
      { path: "Downloads\\chrome.dmg", size: "1.2 GB", age: "37 days" },
      { path: "Downloads\\dataset.csv", size: "720 MB", age: "29 days" },
      { path: "Downloads\\vscode-setup.exe", size: "120 MB", age: "22 days" },
      { path: "Downloads\\invoice-old.pdf", size: "2.1 MB", age: "120 days" },
    ],
    duplicatePhotos: [
      { path: "Pictures\\IMG_2041.jpg ≈ Camera Roll\\IMG_2041.jpg", size: "4.8 MB ×2", note: "same hash" },
      { path: "Pictures\\vacation\\DSC_0199.JPG ≈ iPhone\\DSC_0199.JPG", size: "6.2 MB ×2", note: "same hash" },
      { path: "Desktop\\screenshot.png ≈ Downloads\\screenshot.png", size: "1.1 MB ×2", note: "same hash" },
      { path: "Pictures\\portrait-edit.jpg ≈ portrait-edit (1).jpg", size: "3.4 MB ×2", note: "same hash" },
    ],
    usedInstallers: [
      { path: "Downloads\\setup-office.exe", size: "1.9 GB", note: "Office already installed" },
      { path: "Downloads\\chrome.dmg", size: "1.2 GB", note: "Chrome already installed" },
      { path: "Downloads\\vscode-setup.exe", size: "120 MB", note: "VS Code already installed" },
      { path: "Downloads\\node-v20.msi", size: "28 MB", note: "Node already installed" },
    ],
  };

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
      ".app-img.storage{" +
      "background-color:#0ea5e9!important;" +
      "background-image:" +
      iconSvg() +
      "!important;" +
      "background-size:54%!important;" +
      "background-repeat:no-repeat!important;" +
      "background-position:center!important}" +
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
      ".storage-report .bar>i{display:block;height:100%;background:linear-gradient(90deg,#38bdf8,#0284c7);width:" +
      Math.min(100, ((SCAN.totalGb - SCAN.freeGb) / SCAN.totalGb) * 100).toFixed(1) +
      "%}" +
      ".storage-actions{position:sticky;bottom:0;background:#fff;padding:12px 0 4px;display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid #e5e7eb;margin-top:16px}" +
      ".storage-actions button{appearance:none;border:0;border-radius:10px;padding:10px 14px;font-weight:600;font-size:13px;cursor:pointer}" +
      ".storage-actions .primary{background:#0ea5e9;color:#fff}" +
      ".storage-actions .danger{background:#fee2e2;color:#b91c1c}" +
      ".storage-actions .danger[disabled]{opacity:.45;cursor:not-allowed}" +
      ".storage-actions .ghost{background:#f1f5f9;color:#334155}" +
      "#mobile .app-img.storage{width:48px!important;height:48px!important;border-radius:12px!important}";
    document.head.appendChild(s);
  }

  function rows(list, withAge) {
    return list
      .map(function (item, i) {
        return (
          "<tr>" +
          "<td><input type=\"checkbox\" data-i=\"" +
          i +
          "\" data-path=\"" +
          String(item.path).replace(/\"/g, """) +
          "\"/></td>" +
          "<td class=\"path\">" +
          item.path +
          (item.note ? "<div class=\"note\" style=\"margin:2px 0 0\">" + item.note + "</div>" : "") +
          "</td>" +
          "<td class=\"sz\">" +
          item.size +
          "</td>" +
          (withAge ? "<td>" + (item.age || "") + "</td>" : "") +
          "</tr>"
      )
      .join("");
  }

  function renderReport(root) {
    var used = (SCAN.totalGb - SCAN.freeGb).toFixed(1);
    root.innerHTML =
      '<div class="storage-report">' +
      '<div class="sum">' +
      "<strong>Storage scan</strong> · " +
      SCAN.scannedAt +
      "<br/>Used <strong>" +
      used +
      " GB</strong> of " +
      SCAN.totalGb +
      " GB · Free " +
      SCAN.freeGb +
      " GB" +
      '<div class="bar"><i></i></div>' +
      "</div>" +
      '<p class="note">Demo report for the portfolio shell. Nothing is deleted until you confirm.</p>' +
      "<h3>Top 20 largest files & folders</h3>" +
      "<table><thead><tr><th></th><th>Path</th><th>Size</th></tr></thead><tbody>" +
      rows(SCAN.top20, false) +
      "</tbody></table>" +
      "<h3>Old downloads</h3>" +
      "<table><thead><tr><th></th><th>Path</th><th>Size</th><th>Age</th></tr></thead><tbody>" +
      rows(SCAN.oldDownloads, true) +
      "</tbody></table>" +
      "<h3>Duplicate photos</h3>" +
      "<table><thead><tr><th></th><th>Match</th><th>Size</th></tr></thead><tbody>" +
      rows(SCAN.duplicatePhotos, false) +
      "</tbody></table>" +
      "<h3>Installers already used</h3>" +
      "<table><thead><tr><th></th><th>Path</th><th>Size</th></tr></thead><tbody>" +
      rows(SCAN.usedInstallers, false) +
      "</tbody></table>" +
      '<div class="storage-actions">' +
      '<button type="button" class="primary" id="storage-select-all">Select all listed</button>' +
      '<button type="button" class="ghost" id="storage-clear">Clear selection</button>' +
      '<button type="button" class="danger" id="storage-delete" disabled>Delete selected…</button>' +
      "</div>" +
      '<p class="note" id="storage-status">Delete is locked until you say yes.</p>' +
      "</div>";

    var delBtn = root.querySelector("#storage-delete");
    var status = root.querySelector("#storage-status");

    root.querySelector("#storage-select-all").onclick = function () {
      root.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
        c.checked = true;
      });
    };
    root.querySelector("#storage-clear").onclick = function () {
      root.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
        c.checked = false;
      });
    };

    delBtn.onclick = function () {
      var selected = [];
      root.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
        selected.push(c.getAttribute("data-path"));
      });
      if (!selected.length) {
        status.textContent = "Select at least one item first.";
        return;
      }
      var ok = window.confirm(
        "Delete " +
          selected.length +
          " item(s)?\n\nThis is a demo — nothing on your real disk will be removed.\n\nSay OK only if you want to simulate delete."
      );
      if (!ok) {
        status.textContent = "Cancelled. Nothing was deleted.";
        return;
      }
      status.textContent =
        "Confirmed: simulated cleanup of " + selected.length + " item(s). Real files were not touched.";
      delBtn.disabled = true;
    };

    /* Enable danger button only after any selection (still requires confirm) */
    root.addEventListener("change", function (e) {
      if (e.target && e.target.matches('input[type="checkbox"]')) {
        var n = root.querySelectorAll('input[type="checkbox"]:checked').length;
        delBtn.disabled = n === 0;
        status.textContent =
          n === 0
            ? "Delete is locked until you select items and say yes."
            : n + " selected — delete still needs your confirmation.";
      }
    });
  }

  function ensurePage() {
    var mobile = document.getElementById("mobile-content") || document.querySelector("#mobile .mobile-content");
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
    var content = document.getElementById(CONTENT_ID);
    if (content && !content.dataset.ready) {
      renderReport(content);
      content.dataset.ready = "1";
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
    if (content) renderReport(content);
  }

  function injectHomeIcon() {
    var grid = document.querySelector("#home-screen .app-grid") || document.querySelector(".app-grid");
    if (!grid) return;
    if (grid.querySelector('[data-page="storage"]')) return;
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
    /* Prefer after Device if present */
    var device = grid.querySelector('[data-page="device"]');
    if (device && device.parentNode === grid) {
      grid.insertBefore(btn, device.nextSibling);
    } else {
      grid.appendChild(btn);
    }
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
