/**
 * Menelik OS — high-value feature pack
 * Extends APPS / CONTENT after script.js loads core APIs.
 */
(function () {
  "use strict";

  /* Language switcher removed — desktop clock uses Amharic (Geez) numerals */

  const BLOG_POSTS = [
    {
      id: "welcome",
      title: "Welcome to Menelik OS",
      date: "2026-07-01",
      body: "This portfolio runs as a playful Windows XP desktop in the browser. Open apps from the Start menu, snap windows, and explore projects.",
    },
    {
      id: "stack",
      title: "Why vanilla HTML/CSS/JS?",
      date: "2026-06-15",
      body: "No heavy framework keeps the XP shell fast to load and easy to host on GitHub Pages or Vercel. Content lives in JSON for Decap CMS.",
    },
    {
      id: "bdu",
      title: "BSc CS graduate · computer administrator & trainer",
      date: "2026-05-20",
      body: "Coursework spans algorithms, networks, databases, and web tech. Side projects (Yeni Movie, Yeni Typing, Yeni Exam) keep skills sharp.",
    },
    {
      id: "it-years",
      title: "10+ years in IT operations",
      date: "2026-04-10",
      body: "System admin, networking, and training experience informs how I design reliable tools and clear UIs.",
    },
  ];

  const TESTIMONIALS = [
    {
      quote: "Menelik combines solid systems knowledge with a genuine care for usable interfaces.",
      who: "Colleague · IT support",
    },
    {
      quote: "Reliable, curious, and always ready to explain technical ideas clearly.",
      who: "Training participant",
    },
    {
      quote: "The XP portfolio shows both craft and personality — rare in student work.",
      who: "Peer developer",
    },
  ];

  const CASE_STUDIES = {
    "yeni-movie": {
      problem: "People need a simple way to discover films and series without clutter.",
      approach: "Built a responsive discovery UI with search, genre browsing, and detail views.",
      stack: "HTML, CSS, JavaScript, Vercel",
      outcome: "Live demo at yeni-movie.vercel.app with fast search and clean cards.",
    },
    "yeni-typing": {
      problem: "Typing practice tools are often distracting or hard to measure.",
      approach: "Focused tutor with live WPM/accuracy and timed sessions.",
      stack: "HTML, CSS, JavaScript, Vercel",
      outcome: "Live at fidel.is-local.dev — clear metrics, minimal UI.",
    },
    "yeni-exam": {
      problem: "Exit exam prep needs quick, topic-focused practice exams.",
      approach: "Topic-driven generator that builds exam-style questions on demand.",
      stack: "HTML, CSS, JavaScript, Vercel",
      outcome: "Live at yeniexams.vercel.app — type a topic, get a practice exam.",
    },
    internship: {
      problem: "University internships need tracking from application to evaluation.",
      approach: "Workflow for applications, placements, and supervisor feedback.",
      stack: "Web app + SQL-style data model",
      outcome: "University platform design covering the full internship lifecycle.",
    },
    portfolio: {
      problem: "Standard portfolios feel generic and forgettable.",
      approach: "Interactive OS metaphor (XP desktop + iPhone shell) with real apps.",
      stack: "Vanilla JS, CSS, Decap CMS, Vercel Edge",
      outcome: "Memorable personal site with games, tools, and CMS-backed content.",
    },
  };

  const GITHUB_ACTIVITY = [
    { type: "Push", repo: "xp-portfolio", detail: "Windows XP portfolio updates", when: "Recently" },
    { type: "Deploy", repo: "yeni-movie", detail: "Production deploy on Vercel", when: "Recently" },
    { type: "Deploy", repo: "yenityping", detail: "Typing tutor live", when: "Recently" },
    { type: "Deploy", repo: "yeniexams", detail: "Exit exam generator live", when: "Recently" },
    { type: "Commit", repo: "xp-portfolio", detail: "Content & CMS config", when: "2026" },
  ];

  function el(html) {
    const d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  /** User-visible error panel inside a window */
  function safeAppError(title, err, extra) {
    const msg = err && err.message ? err.message : String(err || "Unknown error");
    const box = document.createElement("div");
    box.className = "app-error-panel";
    box.setAttribute("role", "alert");
    box.innerHTML =
      "<h3 style=\"margin:0 0 8px\">" + escapeHtml(title || "Something went wrong") + "</h3>" +
      "<p>" + escapeHtml(msg) + "</p>" +
      (extra ? "<p class=\"muted\">" + escapeHtml(extra) + "</p>" : "") +
      "<p><button type=\"button\" class=\"proj-btn app-error-retry\">Try again</button></p>";
    return box;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function withAppErrorBoundary(name, builder) {
    return function () {
      try {
        const el = builder();
        if (!el) throw new Error(name + " returned nothing");
        return el;
      } catch (err) {
        console.error("[Menelik OS]", name, err);
        const panel = safeAppError(name + " failed to open", err, "Hard-refresh the page (Ctrl+Shift+R), then try again.");
        panel.querySelector(".app-error-retry")?.addEventListener("click", () => {
          try {
            if (typeof openWindow === "function") {
              // close empty shell if any, reopen
              const id = name.toLowerCase().includes("explorer")
                ? "edge"
                : name.toLowerCase().includes("media")
                  ? "mediaplayer"
                  : name.toLowerCase().includes("help")
                    ? "help"
                    : null;
              if (id && typeof closeWindow === "function") {
                try { closeWindow(id); } catch (_) {}
              }
              if (id) setTimeout(() => openWindow(id), 50);
            }
          } catch (e2) {
            showDialog(name, String(e2 && e2.message ? e2.message : e2));
          }
        });
        return panel;
      }
    };
  }


  /* ========== Open URLs inside Microsoft Edge ========== */
  window.openInEdge = function openInEdge(url) {
    try {
      url = String(url || "").trim();
      if (!url) return;
      if (!/^https?:\/\//i.test(url) && !/^menelik:\/\//i.test(url)) {
        if (/^[\w.-]+\.[a-z]{2,}/i.test(url)) url = "https://" + url;
        else if (!url.startsWith("menelik://")) url = "https://" + url;
      }
      // Stay inside Microsoft Edge (in-app) on desktop and mobile
      window.__edgePendingUrl = url;
      document.dispatchEvent(
        new CustomEvent("menelik-edge-navigate", { detail: { url: url } })
      );
      const isMobile =
        window.innerWidth < 900 &&
        document.getElementById("page-edge") &&
        document.getElementById("mobile") &&
        window.getComputedStyle(document.getElementById("mobile")).display !== "none";
      if (isMobile && typeof window.showPage === "function") {
        window.showPage("edge");
      } else if (typeof openWindow === "function") {
        openWindow("edge");
      } else if (typeof window.openWindow === "function") {
        window.openWindow("edge");
      }
    } catch (err) {
      console.warn("[Edge] openInEdge", err);
      try {
        if (typeof window.showPage === "function" && document.getElementById("page-edge")) {
          window.showPage("edge");
        } else if (typeof openWindow === "function") {
          openWindow("edge");
        }
      } catch (_) {}
    }
  };
  // Project / external links → Microsoft Edge (desktop OS)
  if (!window.__edgeLinkIntercept) {
    window.__edgeLinkIntercept = true;
    document.addEventListener(
      "click",
      (e) => {
        try {
          // Only on desktop shell, not pure mobile-only chrome if desktop hidden
          const desktop = document.getElementById("desktop");
          if (desktop && desktop.classList.contains("boot-hidden")) return;
          // Mobile + desktop: open http(s) project links inside Edge app when available
          const a = e.target.closest("a[href]");
          if (!a) return;
          // Already handled inside IE
          if (a.closest(".edge-app")) return;
          // Explicit system browser
          if (a.classList.contains("edge-open-ext")) return;
          if (a.dataset && a.dataset.edge === "external") return;

          let href = a.getAttribute("href") || "";
          if (!href || href === "#" || href.startsWith("javascript:")) return;
          if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

          const isHttp = /^https?:\/\//i.test(href);
          const isProj =
            a.classList.contains("proj-btn") ||
            a.classList.contains("resume-link") ||
            a.closest(".project-card") ||
            a.closest("#content-projects") ||
            a.closest("[data-window-body]") ||
            a.closest(".window-body");

          if (isHttp && isProj) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window.openInEdge === "function") window.openInEdge(href);
            else window.open(href, "_blank", "noopener");
          }
        } catch (_) {}
      },
      true
    );
  }



  /* ========== Microsoft Edge ========== */
  /* Browser UX inspired by daedalOS (MIT) — https://github.com/DustinBrett/daedalOS
     Features adapted: address bar URL/search, history, bookmarks, iframe + proxy modes. */
  function buildEdge() {
    const GOOGLE_HOME = "https://www.google.com/webhp?igu=1";
    const GOOGLE_SEARCH = "https://www.google.com/search?igu=1&q=";
    const BOOKMARKS = [
      { name: "Home", url: "menelik://home" },
      { name: "Projects", url: "menelik://projects" },
      { name: "Yeni Movie", url: "https://yeni-movie.vercel.app/" },
      { name: "Yeni Exam", url: "https://yeniexams.vercel.app/" },
      { name: "Google", url: GOOGLE_HOME },
      { name: "Wikipedia", url: "https://www.wikipedia.org/" },
      { name: "Archive.org", url: "https://archive.org/" },
    ];

    const wrap = el(`<div class="edge-app">
      <div class="edge-toolbar">
        <button type="button" class="edge-nav" data-act="back" title="Back" disabled>◀</button>
        <button type="button" class="edge-nav" data-act="fwd" title="Forward" disabled>▶</button>
        <button type="button" class="edge-nav" data-act="stop" title="Stop">■</button>
        <button type="button" class="edge-nav" data-act="home" title="Home">🏠</button>
        <button type="button" class="edge-nav" data-act="refresh" title="Refresh">↻</button>
        <input class="edge-address" type="text" value="menelik://home" spellcheck="false" aria-label="Address" autocomplete="off" />
        <button type="button" class="edge-nav edge-go" data-act="go" title="Go">Go</button>
        <select class="edge-proxy" title="Proxy mode" aria-label="Proxy mode">
          <option value="direct">Direct</option>
          <option value="allorigins">CORS proxy</option>
          <option value="wayback">Wayback</option>
        </select>
      </div>
      <div class="edge-bookmarks" role="toolbar" aria-label="Bookmarks"></div>
      <div class="edge-body" tabindex="0" role="document"></div>
      <div class="edge-status">Done</div>
    </div>`);

    const body = wrap.querySelector(".edge-body");
    const addr = wrap.querySelector(".edge-address");
    const status = wrap.querySelector(".edge-status");
    const proxySel = wrap.querySelector(".edge-proxy");
    const btnBack = wrap.querySelector('[data-act="back"]');
    const btnFwd = wrap.querySelector('[data-act="fwd"]');
    const bmBar = wrap.querySelector(".edge-bookmarks");

    const history = [];
    let histIdx = -1;
    let currentUrl = "menelik://home";
    let proxyMode = "direct";

    try {
      proxyMode = localStorage.getItem("menelik-edge-proxy") || "direct";
    } catch (_) {}
    if (proxySel) proxySel.value = proxyMode;

    BOOKMARKS.forEach((b) => {
      const a = document.createElement("button");
      a.type = "button";
      a.className = "edge-bm";
      a.textContent = b.name;
      a.title = b.url;
      a.addEventListener("click", () => navigate(b.url, true));
      bmBar.appendChild(a);
    });

    function contentHtml(key) {
      try {
        if (window.CONTENT && CONTENT[key] && CONTENT[key].html) return CONTENT[key].html;
      } catch (_) {}
      return "<p>Content not loaded yet. Try Refresh in a moment.</p>";
    }

    const pages = {
      "menelik://home": () => `
        <div class="edge-home">
          <h2 style="margin-top:0">Microsoft Edge</h2>
          <p>Browse portfolio pages and the web. Type a URL or search terms, then press Enter.</p>
          <h4>Favorites</h4>
          <ul class="edge-links">
            <li><a href="#" data-nav="menelik://about">About Me</a></li>
            <li><a href="#" data-nav="menelik://projects">Projects</a></li>
            <li><a href="#" data-nav="menelik://resume">Resume</a></li>
            <li><a href="#" data-nav="menelik://skills">Skills</a></li>
            <li><a href="#" data-nav="menelik://contact">Contact</a></li>
          </ul>
          <h4>Live projects</h4>
          <ul class="edge-links">
            <li><a href="#" data-nav="https://yeni-movie.vercel.app/">Yeni Movie</a></li>
            <li><a href="#" data-nav="https://yeniexams.vercel.app/">Yeni Exam</a></li>
            <li><a href="#" data-nav="${GOOGLE_HOME}">Google</a></li>
          </ul>
          <p class="muted">Tip: if a site shows “content is blocked”, switch <strong>Proxy mode</strong> to <em>CORS proxy</em> or <em>Wayback</em>, or open in the system browser.</p>
        </div>`,
      "menelik://about": () => contentHtml("about"),
      "menelik://education": () => contentHtml("education"),
      "menelik://experience": () => contentHtml("experience"),
      "menelik://projects": () => contentHtml("projects"),
      "menelik://skills": () => contentHtml("skills"),
      "menelik://certifications": () => contentHtml("certifications"),
      "menelik://resume": () => contentHtml("resume"),
      "menelik://contact": () => contentHtml("contact"),
      "menelik://help": () => {
        try {
          if (typeof openWindow === "function") openWindow("help");
        } catch (_) {}
        return "<p>Opening Help…</p><p><a href=\"#\" data-nav=\"menelik://home\">Back to home</a></p>";
      },
    };

    function updateNavButtons() {
      if (btnBack) btnBack.disabled = histIdx <= 0;
      if (btnFwd) btnFwd.disabled = histIdx < 0 || histIdx >= history.length - 1;
    }

    function bindPageLinks() {
      body.querySelectorAll("[data-nav]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          navigate(a.getAttribute("data-nav") || "menelik://home", true);
        });
      });
      body.querySelectorAll("a[href]").forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href.startsWith("menelik://")) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            navigate(href, true);
          });
        } else if (/^https?:\/\//i.test(href) && !a.classList.contains("edge-open-ext")) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            navigate(href, true);
          });
        }
      });
    }

    async function resolveAddress(input) {
      input = String(input || "").trim();
      if (!input) return "menelik://home";
      if (/^menelik:\/\//i.test(input)) return input.toLowerCase();
      if (/^https?:\/\//i.test(input)) return input;
      // bare domain-ish
      if (/^[\w.-]+\.[a-z]{2,}([/:].*)?$/i.test(input) && !/\s/.test(input)) {
        return "https://" + input;
      }
      // search
      return GOOGLE_SEARCH + encodeURIComponent(input);
    }

    async function applyProxy(url) {
      if (proxyMode === "allorigins") {
        return "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
      }
      if (proxyMode === "wayback") {
        try {
          const r = await fetch(
            "https://archive.org/wayback/available?url=" + encodeURIComponent(url)
          );
          const data = await r.json();
          const snap =
            data &&
            data.archived_snapshots &&
            data.archived_snapshots.closest &&
            data.archived_snapshots.closest.url;
          if (snap) {
            return String(snap).replace(/^http:/, "https:");
          }
        } catch (_) {}
        return url;
      }
      return url;
    }

    async function navigate(url, push) {
      try {
        url = await resolveAddress(url);
        currentUrl = url;
        status.textContent = "Opening " + url + "…";
        addr.value = url;

        if (/^https?:\/\//i.test(url)) {
          let frameSrc = url;
          try {
            frameSrc = await applyProxy(url);
          } catch (_) {}

          body.innerHTML =
            `<div class="edge-external edge-browse">
              <iframe class="edge-frame" title="Microsoft Edge" referrerpolicy="no-referrer"
                sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
                allow="fullscreen"></iframe>
              <div class="edge-frame-note muted" hidden></div>
            </div>`;
          const frame = body.querySelector(".edge-frame");
          const note = body.querySelector(".edge-frame-note");
          if (frame) {
            let loaded = false;
            frame.addEventListener("load", () => {
              loaded = true;
              status.textContent = "Done";
              if (note) {
                note.textContent =
                  proxyMode === "direct"
                    ? "Preview loaded (Direct)."
                    : "Preview loaded via " + proxyMode + ".";
              }
            });
            frame.src = frameSrc;
            // Mobile compatibility: ensure iframe fills Edge body
            try {
              if (window.innerWidth < 900) {
                frame.style.position = "absolute";
                frame.style.inset = "0";
                frame.style.width = "100%";
                frame.style.height = "100%";
                frame.setAttribute("scrolling", "yes");
              }
            } catch (_) {}
            setTimeout(() => {
              if (!loaded && note) {
                note.innerHTML =
                  "Still blocked or slow. Try <strong>CORS proxy</strong> / <strong>Wayback</strong> in the toolbar, or " +
                  '<a class="edge-open-ext-fallback" href="#">Open in system browser ↗</a>.';
                const fb = note.querySelector(".edge-open-ext-fallback");
                if (fb) {
                  fb.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.open(url, "_blank", "noopener,noreferrer");
                  });
                }
                status.textContent = "Blocked or slow — try proxy / system browser";
              }
            }, 3000);
          }
          bindPageLinks();
        } else {
          const key = url.toLowerCase();
          const render =
            pages[key] ||
            (() =>
              `<p>The page <code>${escapeHtml(url)}</code> cannot be found.</p>
               <p><a href="#" data-nav="menelik://home">Back to home</a></p>`);
          try {
            body.innerHTML = `<div class="edge-page">${render()}</div>`;
          } catch (err) {
            body.innerHTML = `<p>Could not show this page.</p><pre>${escapeHtml(err)}</pre>`;
          }
          bindPageLinks();
          status.textContent = "Done";
        }

        if (push) {
          history.splice(histIdx + 1);
          history.push(url);
          histIdx = history.length - 1;
        }
        updateNavButtons();
      } catch (err) {
        console.error("[Edge] navigate", err);
        try {
          body.innerHTML =
            '<div class="app-error-panel" role="alert"><h3 style="margin:0 0 8px">Page error</h3><p>' +
            escapeHtml(err && err.message ? err.message : String(err)) +
            '</p><p><a href="#" data-nav="menelik://home">Back to home</a></p></div>';
          bindPageLinks();
          status.textContent = "Error";
        } catch (_) {
          status.textContent = "Error";
        }
      }
    }

    wrap.querySelectorAll(".edge-nav").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.dataset.act;
        if (act === "back" && histIdx > 0) {
          histIdx--;
          navigate(history[histIdx], false);
        } else if (act === "fwd" && histIdx < history.length - 1) {
          histIdx++;
          navigate(history[histIdx], false);
        } else if (act === "home") navigate("menelik://home", true);
        else if (act === "go") navigate(addr.value.trim() || "menelik://home", true);
        else if (act === "refresh") navigate(currentUrl, false);
        else if (act === "stop") {
          const frame = body.querySelector(".edge-frame");
          if (frame) frame.src = "about:blank";
          status.textContent = "Stopped";
        }
      });
    });

    addr.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        navigate(addr.value.trim() || "menelik://home", true);
      }
    });

    if (proxySel) {
      proxySel.addEventListener("change", () => {
        proxyMode = proxySel.value || "direct";
        try {
          localStorage.setItem("menelik-edge-proxy", proxyMode);
        } catch (_) {}
        if (/^https?:\/\//i.test(currentUrl)) navigate(currentUrl, false);
      });
    }

    const pending = window.__edgePendingUrl;
    if (pending) {
      window.__edgePendingUrl = null;
      navigate(pending, true);
    } else {
      navigate("menelik://home", true);
    }

    wrap.__edgeNavigate = navigate;
    const onEdgeNav = (ev) => {
      if (!wrap.isConnected) {
        document.removeEventListener("menelik-edge-navigate", onEdgeNav);
        return;
      }
      const u = ev && ev.detail && ev.detail.url;
      if (u) navigate(u, true);
    };
    document.addEventListener("menelik-edge-navigate", onEdgeNav);

    return wrap;
  }

  /* ========== Media Player ========== */
  function buildMediaPlayer() {
    const wrap = el(`<div class="wmp-app">
      <div class="wmp-display">
        <div class="wmp-viz" id="wmp-viz" aria-hidden="true"></div>
        <div class="wmp-track">Menelik OS · Startup Theme</div>
        <div class="wmp-time"><span class="wmp-pos">0:00</span> / <span class="wmp-dur">0:00</span></div>
      </div>
      <div class="wmp-controls">
        <button type="button" data-wmp="prev" title="Previous">⏮</button>
        <button type="button" data-wmp="play" title="Play">▶ Play</button>
        <button type="button" data-wmp="stop" title="Stop">■ Stop</button>
        <button type="button" data-wmp="next" title="Next">⏭</button>
        <label class="wmp-vol-label">Vol <input type="range" min="0" max="100" value="45" class="wmp-vol" /></label>
      </div>
      <ul class="wmp-playlist" role="listbox" aria-label="Playlist">
        <li class="active" data-track="startup" role="option">1. Startup Theme</li>
        <li data-track="notify" role="option">2. Notify Chime</li>
        <li data-track="scale" role="option">3. Practice Scale</li>
        <li data-track="calm" role="option">4. Calm Pad</li>
      </ul>
      <div class="wmp-foot muted">Uses Web Audio in this browser — no files downloaded.</div>
    </div>`);

    const trackLabel = wrap.querySelector(".wmp-track");
    const posEl = wrap.querySelector(".wmp-pos");
    const durEl = wrap.querySelector(".wmp-dur");
    const playBtn = wrap.querySelector('[data-wmp="play"]');
    let ctx = null;
    let nodes = [];
    let playing = false;
    let timer = null;
    let startedAt = 0;
    let durationSec = 0;
    let trackIndex = 0;
    const tracks = [
      { id: "startup", title: "Startup Theme", dur: 2.4 },
      { id: "notify", title: "Notify Chime", dur: 0.5 },
      { id: "scale", title: "Practice Scale", dur: 2.0 },
      { id: "calm", title: "Calm Pad", dur: 3.0 },
    ];

    const vol = () => Math.max(0.001, (wrap.querySelector(".wmp-vol").value | 0) / 100);

    function fmt(t) {
      t = Math.max(0, t | 0);
      return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
    }

    function ensureCtx() {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctx) ctx = new AC();
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }

    function stopAll() {
      try {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
        nodes.forEach((n) => {
          try { n.stop(); } catch (_) {}
          try { n.disconnect(); } catch (_) {}
        });
        nodes = [];
        playing = false;
        wrap.querySelector(".wmp-viz")?.classList.remove("playing");
        if (playBtn) playBtn.textContent = "▶ Play";
        if (posEl) posEl.textContent = "0:00";
      } catch (err) {
        console.warn("[WMP] stopAll", err);
        nodes = [];
        playing = false;
      }
    }

    function tone(freq, start, dur, type, gain) {
      if (!ctx) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type || "sine";
      o.frequency.value = freq;
      const level = Math.max(0.0001, gain * vol());
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(level, start + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(start);
      o.stop(start + dur + 0.05);
      nodes.push(o);
    }

    function selectTrack(index) {
      trackIndex = (index + tracks.length) % tracks.length;
      const t = tracks[trackIndex];
      wrap.querySelectorAll(".wmp-playlist li").forEach((li, i) => {
        li.classList.toggle("active", i === trackIndex);
      });
      trackLabel.textContent = "Menelik OS · " + t.title;
      durEl.textContent = fmt(Math.ceil(t.dur));
      durationSec = t.dur;
    }

    function playTrack(id) {
      try {
      stopAll();
      if (!ensureCtx()) {
        showDialog("Media Player", "This browser cannot play Web Audio sounds.");
        return;
      }
      const meta = tracks.find((t) => t.id === id) || tracks[0];
      trackIndex = tracks.indexOf(meta);
      selectTrack(trackIndex);

      const now = ctx.currentTime;
      playing = true;
      startedAt = performance.now();
      durationSec = meta.dur;
      wrap.querySelector(".wmp-viz").classList.add("playing");
      playBtn.textContent = "❚❚ Pause";

      if (meta.id === "startup") {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
          tone(f, now + i * 0.2, 0.45, "triangle", 0.1)
        );
      } else if (meta.id === "notify") {
        tone(880, now, 0.12, "sine", 0.09);
        tone(1174.7, now + 0.12, 0.22, "sine", 0.07);
      } else if (meta.id === "calm") {
        [261.63, 329.63, 392.0].forEach((f, i) =>
          tone(f, now + i * 0.05, 2.8, "sine", 0.04)
        );
      } else {
        [262, 294, 330, 349, 392, 440, 494, 523].forEach((f, i) =>
          tone(f, now + i * 0.2, 0.18, "square", 0.035)
        );
      }

      timer = setInterval(() => {
        const elapsed = (performance.now() - startedAt) / 1000;
        posEl.textContent = fmt(elapsed);
        if (elapsed >= durationSec) stopAll();
      }, 200);

      setTimeout(() => {
        if (playing) stopAll();
      }, durationSec * 1000 + 80);
      } catch (err) {
        console.error("[WMP] playTrack", err);
        stopAll();
        showDialog(
          "Media Player",
          "Could not play this track.\n\n" + (err && err.message ? err.message : String(err))
        );
      }
    }

    wrap.querySelectorAll("[data-wmp]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.dataset.wmp;
        if (act === "stop") stopAll();
        else if (act === "prev") {
          selectTrack(trackIndex - 1);
          playTrack(tracks[trackIndex].id);
        } else if (act === "next") {
          selectTrack(trackIndex + 1);
          playTrack(tracks[trackIndex].id);
        } else if (act === "play") {
          if (playing) stopAll();
          else playTrack(tracks[trackIndex].id);
        }
      });
    });
    wrap.querySelectorAll(".wmp-playlist li").forEach((li, i) => {
      li.addEventListener("click", () => {
        selectTrack(i);
        playTrack(li.dataset.track);
      });
    });
    selectTrack(0);
    return wrap;
  }

  /* ========== Solitaire (simplified Klondike draw) ========== */
  /* ========== Solitaire (simplified Klondike draw) ========== */
  function buildSolitaire() {
    const suits = [
      { s: "♠", red: false },
      { s: "♥", red: true },
      { s: "♦", red: true },
      { s: "♣", red: false },
    ];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let stock = [];
    let waste = [];
    let foundations = [[], [], [], []];
    let tableau = [[], [], [], [], [], [], []];
    let moves = 0;

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
      return arr;
    }

    function newGame() {
      const deck = [];
      suits.forEach((su) =>
        ranks.forEach((r, i) =>
          deck.push({ rank: r, val: i + 1, suit: su.s, red: su.red, face: false })
        )
      );
      shuffle(deck);
      stock = deck;
      waste = [];
      foundations = [[], [], [], []];
      tableau = [[], [], [], [], [], [], []];
      moves = 0;
      for (let c = 0; c < 7; c++) {
        for (let r = 0; r <= c; r++) {
          const card = stock.pop();
          card.face = r === c;
          tableau[c].push(card);
        }
      }
      setMsg("Click stock to draw · build A→K by suit · alternate colors in columns");
    }

    const wrap = el(`<div class="sol-app">
      <div class="sol-toolbar">
        <button type="button" class="sol-new">New game</button>
        <span class="sol-moves">Moves: 0</span>
        <span class="sol-msg">Loading…</span>
      </div>
      <div class="sol-top">
        <div class="sol-stock" title="Stock — click to draw"></div>
        <div class="sol-waste" title="Waste"></div>
        <div class="sol-foundations"></div>
      </div>
      <div class="sol-tableau"></div>
    </div>`);

    function setMsg(t) {
      const m = wrap.querySelector(".sol-msg");
      if (m) m.textContent = t;
      const mv = wrap.querySelector(".sol-moves");
      if (mv) mv.textContent = "Moves: " + moves;
    }

    function cardHtml(c, idx, extra) {
      const cls = "sol-card " + (c.face ? (c.red ? "red" : "black") : "back") + (extra ? " " + extra : "");
      const label = c.face ? c.rank + c.suit : "";
      return `<button type="button" class="${cls}" data-i="${idx}" aria-label="${c.face ? c.rank + " " + c.suit : "face down"}">${label}</button>`;
    }

    function canOnFoundation(card, pile) {
      if (!pile.length) return card.val === 1;
      const top = pile[pile.length - 1];
      return top.suit === card.suit && card.val === top.val + 1;
    }

    function canOnTableau(card, dest) {
      if (!dest.length) return card.val === 13;
      const top = dest[dest.length - 1];
      return top.face && top.red !== card.red && card.val === top.val - 1;
    }

    function tryMoveToFoundation(card, fromWaste, colIdx) {
      for (let i = 0; i < 4; i++) {
        if (canOnFoundation(card, foundations[i])) {
          foundations[i].push(card);
          if (fromWaste) waste.pop();
          else {
            tableau[colIdx].pop();
            const col = tableau[colIdx];
            if (col.length && !col[col.length - 1].face) col[col.length - 1].face = true;
          }
          moves++;
          return true;
        }
      }
      return false;
    }

    function checkWin() {
      if (foundations.every((p) => p.length === 13)) {
        setMsg("You win! Press New game to play again.");
        try {
          showDialog("Solitaire", "Congratulations — you cleared all foundations!");
        } catch (_) {}
      }
    }

    function render() {
      try {
        const stockEl = wrap.querySelector(".sol-stock");
        stockEl.innerHTML = stock.length
          ? `<button type="button" class="sol-card back sol-stock-btn" aria-label="Draw from stock"></button><span class="sol-count">${stock.length}</span>`
          : `<button type="button" class="sol-slot sol-stock-btn" aria-label="Recycle waste">↻</button>`;

        const wasteEl = wrap.querySelector(".sol-waste");
        const topW = waste[waste.length - 1];
        wasteEl.innerHTML = topW ? cardHtml(topW, 0, "sol-waste-card") : `<div class="sol-slot"></div>`;

        const fEl = wrap.querySelector(".sol-foundations");
        fEl.innerHTML = foundations
          .map((pile, i) => {
            const t = pile[pile.length - 1];
            return `<div class="sol-found" data-f="${i}">${
              t ? cardHtml(t, 0) : '<div class="sol-slot">A</div>'
            }</div>`;
          })
          .join("");

        const tabEl = wrap.querySelector(".sol-tableau");
        tabEl.innerHTML = tableau
          .map((col, ci) => {
            const cards = col
              .map((c, idx) => cardHtml(c, idx))
              .join("");
            return `<div class="sol-col" data-c="${ci}">${cards || '<div class="sol-slot sol-empty-col"></div>'}</div>`;
          })
          .join("");

        // Stock click: draw or recycle
        wrap.querySelector(".sol-stock-btn")?.addEventListener("click", () => {
          if (stock.length) {
            const c = stock.pop();
            c.face = true;
            waste.push(c);
            moves++;
            setMsg("Drawn " + c.rank + c.suit);
          } else if (waste.length) {
            while (waste.length) {
              const c = waste.pop();
              c.face = false;
              stock.push(c);
            }
            moves++;
            setMsg("Waste recycled to stock");
          } else {
            setMsg("Stock and waste are empty");
          }
          render();
        });

        // Waste → foundation or tableau
        wrap.querySelector(".sol-waste-card")?.addEventListener("click", () => {
          const card = waste[waste.length - 1];
          if (!card) return;
          if (tryMoveToFoundation(card, true, -1)) {
            setMsg("Moved to foundation");
            render();
            checkWin();
            return;
          }
          for (let t = 0; t < 7; t++) {
            if (canOnTableau(card, tableau[t])) {
              tableau[t].push(waste.pop());
              moves++;
              setMsg("Moved to column " + (t + 1));
              render();
              return;
            }
          }
          setMsg("No valid move for " + card.rank + card.suit);
        });

        // Tableau cards
        wrap.querySelectorAll(".sol-col").forEach((colEl) => {
          const ci = +colEl.dataset.c;
          colEl.querySelectorAll(".sol-card").forEach((cardEl) => {
            cardEl.addEventListener("click", () => {
              const idx = +cardEl.dataset.i;
              const col = tableau[ci];
              const c = col[idx];
              if (!c || !c.face) return;

              // Single top card → foundation
              if (idx === col.length - 1) {
                if (tryMoveToFoundation(c, false, ci)) {
                  setMsg("Moved to foundation");
                  render();
                  checkWin();
                  return;
                }
              }

              // Move face-up run to another column
              const stack = col.slice(idx);
              if (!stack.every((x) => x.face)) return;
              for (let t = 0; t < 7; t++) {
                if (t === ci) continue;
                if (canOnTableau(stack[0], tableau[t])) {
                  tableau[t] = tableau[t].concat(stack);
                  tableau[ci] = col.slice(0, idx);
                  if (tableau[ci].length && !tableau[ci][tableau[ci].length - 1].face) {
                    tableau[ci][tableau[ci].length - 1].face = true;
                  }
                  moves++;
                  setMsg("Moved stack to column " + (t + 1));
                  render();
                  return;
                }
              }
              setMsg("No move for that card");
            });
          });
        });
      } catch (err) {
        console.error("[Solitaire] render", err);
        setMsg("Error — click New game");
      }
    }

    wrap.querySelector(".sol-new").addEventListener("click", () => {
      newGame();
      render();
    });
    newGame();
    render();
    return wrap;
  }

  /* ========== Blog / My Computer ========== */
  /* ========== Blog / My Computer ========== */
  function buildBlog() {
    const wrap = el(`<div class="blog-app mc-app">
      <div class="mc-toolbar">
        <button type="button" class="mc-tb" data-mc-act="back" title="Back">◀</button>
        <button type="button" class="mc-tb" data-mc-act="up" title="Up">⬆</button>
        <span class="mc-tb-sep"></span>
        <button type="button" class="mc-tb" data-mc-act="refresh" title="Refresh">↻</button>
        <span class="mc-path" id="mc-path">My Computer</span>
        <input type="search" class="mc-search" id="mc-search" placeholder="Search documents…" aria-label="Search" />
      </div>
      <div class="mc-body">
        <div class="blog-sidebar mc-sidebar">
          <div class="blog-side-title">📁 My Computer</div>
          <button type="button" class="blog-nav active" data-view="drives">Drives</button>
          <button type="button" class="blog-nav" data-view="posts">Documents</button>
          <button type="button" class="blog-nav" data-view="links">Network Places</button>
          <button type="button" class="blog-nav" data-view="apps">Programs</button>
          <button type="button" class="blog-nav" data-view="pack">Shared Downloads</button>
          <button type="button" class="blog-nav" data-view="sys">System</button>
          <div class="mc-side-foot">
            <div class="mc-disk-meter" title="Portfolio storage (fun)">
              <div class="mc-disk-fill" style="width:62%"></div>
            </div>
            <span class="mc-disk-label">C: · 62% used</span>
          </div>
        </div>
        <div class="blog-main mc-main"></div>
      </div>
      <div class="mc-statusbar">
        <span class="mc-status-left" id="mc-status">Ready</span>
        <span class="mc-status-right">Menelik OS</span>
      </div>
    </div>`);

    const main = wrap.querySelector(".blog-main");
    const pathEl = wrap.querySelector("#mc-path");
    const statusEl = wrap.querySelector("#mc-status");
    const searchEl = wrap.querySelector("#mc-search");
    let viewHistory = ["drives"];
    let currentView = "drives";

    function setPath(label) {
      if (pathEl) pathEl.textContent = label;
    }
    function setStatus(msg) {
      if (statusEl) statusEl.textContent = msg;
    }
    function setNav(view) {
      wrap.querySelectorAll(".blog-nav").forEach((b) => {
        b.classList.toggle("active", b.dataset.view === view);
      });
    }

    function showDrives() {
      currentView = "drives";
      setPath("My Computer");
      setNav("drives");
      setStatus("5 objects");
      main.innerHTML = `
        <p class="mc-lead">Local devices and places on this portfolio “PC”.</p>
        <div class="mc-drive-grid">
          <button type="button" class="mc-drive" data-open-view="posts">
            <span class="mc-drive-icon mc-icon-hdd" aria-hidden="true"></span>
            <span class="mc-drive-meta">
              <strong>Local Disk (C:)</strong>
              <span>Documents · notes &amp; posts</span>
              <span class="mc-drive-bar"><i style="width:62%"></i></span>
            </span>
          </button>
          <button type="button" class="mc-drive" data-open-view="apps">
            <span class="mc-drive-icon mc-icon-cd" aria-hidden="true"></span>
            <span class="mc-drive-meta">
              <strong>Programs (D:)</strong>
              <span>Open portfolio apps</span>
              <span class="mc-drive-bar"><i style="width:40%"></i></span>
            </span>
          </button>
          <button type="button" class="mc-drive" data-open-view="links">
            <span class="mc-drive-icon mc-icon-net" aria-hidden="true"></span>
            <span class="mc-drive-meta">
              <strong>Network Places</strong>
              <span>GitHub, live demos, email</span>
              <span class="mc-drive-bar mc-drive-bar-net"><i style="width:100%"></i></span>
            </span>
          </button>
          <button type="button" class="mc-drive" data-open-view="pack">
            <span class="mc-drive-icon mc-icon-share" aria-hidden="true"></span>
            <span class="mc-drive-meta">
              <strong>Shared Downloads</strong>
              <span>Resume, vCard, content JSON</span>
              <span class="mc-drive-bar"><i style="width:28%"></i></span>
            </span>
          </button>
          <button type="button" class="mc-drive" data-open-view="sys">
            <span class="mc-drive-icon mc-icon-sys" aria-hidden="true"></span>
            <span class="mc-drive-meta">
              <strong>System</strong>
              <span>About this PC · skills snapshot</span>
              <span class="mc-drive-bar"><i style="width:75%"></i></span>
            </span>
          </button>
        </div>`;
      main.querySelectorAll("[data-open-view]").forEach((btn) => {
        btn.addEventListener("click", () => go(btn.dataset.openView));
      });
    }

    function showPosts(filter) {
      currentView = "posts";
      setPath("My Computer \\ Documents");
      setNav("posts");
      const q = (filter || "").trim().toLowerCase();
      const list = BLOG_POSTS.filter(
        (p) => !q || p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
      );
      setStatus(list.length + " document(s)");
      main.innerHTML =
        `<div class="mc-section-head">
          <h3>Documents</h3>
          <span class="mc-badge">${list.length}</span>
        </div>` +
        (list.length
          ? list
              .map(
                (p) => `<article class="blog-post mc-doc" data-id="${p.id}">
            <div class="mc-doc-icon" aria-hidden="true">📄</div>
            <div class="mc-doc-body">
              <h4>${p.title}</h4>
              <time datetime="${p.date}">${p.date}</time>
              <p>${p.body}</p>
            </div>
          </article>`
              )
              .join("")
          : `<p class="mc-empty">No documents match “${q.replace(/"/g, "")}”.</p>`);
    }

    function showLinks() {
      currentView = "links";
      setPath("My Computer \\ Network Places");
      setNav("links");
      const places = [
        { href: "https://github.com/Menelik2", title: "GitHub", sub: "@Menelik2", icon: "⌥", tone: "gh" },
        { href: "https://menelik.webhop.me", title: "This portfolio", sub: "menelik.webhop.me", icon: "🖥", tone: "site" },
        { href: "https://yeni-movie.vercel.app", title: "Yeni Movie", sub: "Live demo", icon: "🎬", tone: "movie" },
        { href: "https://fidel.is-local.dev", title: "Yeni Typing", sub: "Live demo", icon: "⌨️", tone: "type" },
        { href: "https://yeniexams.vercel.app/", title: "Yeni Exam", sub: "Exit exam generator", icon: "📝", tone: "site" },
        { href: "https://www.linkedin.com/in/menelik7", title: "LinkedIn", sub: "menelik7", icon: "in", tone: "in" },
        { href: "mailto:linuxos777@gmail.com", title: "Email", sub: "linuxos777@gmail.com", icon: "✉", tone: "mail" },
      ];
      setStatus(places.length + " network places");
      main.innerHTML =
        `<div class="mc-section-head"><h3>My Network Places</h3></div>
        <div class="mc-net-grid">` +
        places
          .map(
            (p) => `<a class="mc-net-card mc-tone-${p.tone}" href="${p.href}" target="${p.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">
            <span class="mc-net-ico">${p.icon}</span>
            <span class="mc-net-title">${p.title}</span>
            <span class="mc-net-sub">${p.sub}</span>
          </a>`
          )
          .join("") +
        `</div>`;
    }

    function showApps() {
      currentView = "apps";
      setPath("My Computer \\ Programs");
      setNav("apps");
      const apps = [
        { id: "about", label: "About Me", icon: "👤" },
        { id: "projects", label: "Projects", icon: "💼" },
        { id: "skills", label: "Skills", icon: "📊" },
        { id: "resume", label: "Resume", icon: "📋" },
        { id: "contact", label: "Contact", icon: "✉" },
        { id: "terminal", label: "Terminal", icon: "⬛" },
        { id: "paint", label: "Paint", icon: "🎨" },
        { id: "minesweeper", label: "Minesweeper", icon: "💣" },
        { id: "help", label: "Help", icon: "❓" },
      ];
      setStatus(apps.length + " programs");
      main.innerHTML =
        `<div class="mc-section-head"><h3>Programs</h3><span class="mc-muted">Double-click style — single click opens</span></div>
        <div class="mc-app-grid">` +
        apps
          .map(
            (a) => `<button type="button" class="mc-app-tile" data-open-app="${a.id}">
            <span class="mc-app-emoji" aria-hidden="true">${a.icon}</span>
            <span>${a.label}</span>
          </button>`
          )
          .join("") +
        `</div>`;
      main.querySelectorAll("[data-open-app]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (typeof openWindow === "function") openWindow(btn.dataset.openApp);
        });
      });
    }

    function showPack() {
      currentView = "pack";
      setPath("My Computer \\ Shared Downloads");
      setNav("pack");
      setStatus("3 downloads available");
      main.innerHTML = `
        <div class="mc-section-head"><h3>Shared Downloads</h3></div>
        <p class="mc-lead">Grab portfolio assets in one place.</p>
        <div class="mc-pack-grid">
          <a class="mc-pack-card" href="resume.pdf" download="Menelik-Admasu-Resume.pdf">
            <span class="mc-pack-ico">📄</span>
            <strong>Resume PDF</strong>
            <span>Menelik-Admasu-Resume.pdf</span>
          </a>
          <button type="button" class="mc-pack-card" id="pack-json">
            <span class="mc-pack-ico">📦</span>
            <strong>Content JSON</strong>
            <span>Backup / Decap export</span>
          </button>
          <button type="button" class="mc-pack-card" id="pack-vcard">
            <span class="mc-pack-ico">📇</span>
            <strong>Contact card</strong>
            <span>Menelik-Admasu.vcf</span>
          </button>
        </div>
        <p class="muted mc-hint">JSON is useful for backups. VCF opens in phone contacts.</p>`;
      main.querySelector("#pack-json")?.addEventListener("click", exportContentJson);
      main.querySelector("#pack-vcard")?.addEventListener("click", exportVCard);
    }

    function showSys() {
      currentView = "sys";
      setPath("My Computer \\ System");
      setNav("sys");
      setStatus("System information");
      const ua = (navigator.userAgent || "").slice(0, 80);
      main.innerHTML = `
        <div class="mc-section-head"><h3>System Properties</h3></div>
        <div class="mc-sys-card">
          <div class="mc-sys-banner">Menelik OS</div>
          <dl class="mc-sys-dl">
            <div><dt>Owner</dt><dd>Menelik Admasu</dd></div>
            <div><dt>Role</dt><dd>Computer Administrator · Hardware & Networking · Computer Administrator</dd></div>
            <div><dt>Experience</dt><dd>10+ years IT ops · networking · hardware</dd></div>
            <div><dt>Shell</dt><dd>Windows XP + iPhone layout (browser)</dd></div>
            <div><dt>Stack</dt><dd>HTML · CSS · JavaScript · Vercel</dd></div>
            <div><dt>Client</dt><dd title="${ua.replace(/"/g, "")}">${(navigator.platform || "Web") + " · " + (navigator.language || "")}</dd></div>
          </dl>
          <div class="mc-sys-actions">
            <button type="button" class="proj-btn primary" data-open-app="about">Open About Me</button>
            <button type="button" class="proj-btn" data-open-app="skills">View Skills</button>
            <button type="button" class="proj-btn" data-open-app="control">Control Panel</button>
          </div>
        </div>`;
      main.querySelectorAll("[data-open-app]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (typeof openWindow === "function") openWindow(btn.dataset.openApp);
        });
      });
    }

    function go(view, pushHist) {
      if (pushHist !== false && view !== currentView) {
        viewHistory.push(view);
        if (viewHistory.length > 20) viewHistory.shift();
      }
      if (view === "drives") showDrives();
      else if (view === "posts") showPosts(searchEl && searchEl.value);
      else if (view === "links") showLinks();
      else if (view === "apps") showApps();
      else if (view === "pack") showPack();
      else if (view === "sys") showSys();
      else showDrives();
    }

    wrap.querySelectorAll(".blog-nav").forEach((btn) => {
      btn.addEventListener("click", () => go(btn.dataset.view));
    });

    wrap.querySelector('[data-mc-act="back"]')?.addEventListener("click", () => {
      if (viewHistory.length > 1) {
        viewHistory.pop();
        go(viewHistory[viewHistory.length - 1], false);
      } else go("drives", false);
    });
    wrap.querySelector('[data-mc-act="up"]')?.addEventListener("click", () => go("drives"));
    wrap.querySelector('[data-mc-act="refresh"]')?.addEventListener("click", () => {
      go(currentView, false);
      setStatus("Refreshed");
    });

    let searchTimer;
    searchEl?.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (currentView !== "posts") go("posts");
        else showPosts(searchEl.value);
      }, 180);
    });

    showDrives();
    return wrap;
  }

  function exportContentJson() {
    const data = {};
    if (window.CONTENT) {
      Object.keys(CONTENT).forEach((k) => {
        data[k] = { title: CONTENT[k].title, html: CONTENT[k].html, iconClass: CONTENT[k].iconClass };
      });
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "menelik-portfolio-content.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function exportVCard() {
    const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Menelik Admasu
EMAIL:linuxos777@gmail.com
URL:https://menelik.webhop.me
URL:https://github.com/Menelik2
ADR:;;Bahir Dar;;;Ethiopia
NOTE:Computer Administrator · Hardware & Networking · Computer Administrator
END:VCARD`;
    const blob = new Blob([vcf], { type: "text/vcard" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Menelik-Admasu.vcf";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  /* ========== Help ========== */
  function buildHelp() {
    const wrap = el(`<div class="help-app">
      <h3 style="margin-top:0">Help and Support</h3>
      <p>Choose a topic, or press a shortcut on your keyboard.</p>
      <div class="help-topics">
        <button type="button" class="help-topic active" data-topic="shortcuts">Keyboard shortcuts</button>
        <button type="button" class="help-topic" data-topic="desktop">Using the desktop</button>
        <button type="button" class="help-topic" data-topic="apps">Programs</button>
        <button type="button" class="help-topic" data-topic="trouble">Troubleshooting</button>
      </div>
      <div class="help-panel" data-panel="shortcuts">
        <table class="help-table">
          <tr><td><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd></td><td>Switch light / dark theme</td></tr>
          <tr><td><kbd>F1</kbd></td><td>Open this Help window</td></tr>
          <tr><td><kbd>Enter</kbd> on boot</td><td>Enter desktop (with fullscreen if allowed)</td></tr>
          <tr><td>Drag title bar</td><td>Move a window</td></tr>
          <tr><td>Double-click title</td><td>Maximize or restore</td></tr>
          <tr><td>Right-click desktop</td><td>Quick menu</td></tr>
        </table>
      </div>
      <div class="help-panel" data-panel="desktop" hidden>
        <ul>
          <li>Double-click any desktop icon to open it.</li>
          <li>Use the green <strong>start</strong> button for Programs and folders.</li>
          <li>The taskbar at the bottom shows open windows — click to switch.</li>
          <li>Virtual desktop buttons (1–4) on the taskbar switch workspaces.</li>
          <li>Clock and language controls sit on the right side of the desktop.</li>
        </ul>
      </div>
      <div class="help-panel" data-panel="apps" hidden>
        <ul>
          <li><strong>Microsoft Edge</strong> — browse About, Projects, Resume, and links.</li>
          <li><strong>Windows Media Player</strong> — play short built-in themes (Play / Stop).</li>
          <li><strong>Notepad, Paint, Terminal, VS Code</strong> — small tools inside the OS.</li>
          <li><strong>Minesweeper / Solitaire</strong> — classic games.</li>
          <li><strong>Control Panel</strong> — wallpaper, sounds, icon size.</li>
          <li><strong>Recycle Bin</strong> — restore a window you closed.</li>
        </ul>
        <p>
          <button type="button" class="proj-btn primary" data-open="edge">Open Microsoft Edge</button>
          <button type="button" class="proj-btn" data-open="mediaplayer">Open Media Player</button>
        </p>
      </div>
      <div class="help-panel" data-panel="trouble" hidden>
        <ul>
          <li><strong>Stuck on startup?</strong> Click the green button or press Enter. Wait a few seconds for auto-start.</li>
          <li><strong>No fullscreen?</strong> Your browser may block it — the desktop still works. Try clicking the start button again.</li>
          <li><strong>No sound?</strong> Unmute the tab and check Control Panel → Sounds. Media Player needs one click to unlock audio.</li>
          <li><strong>Empty program window?</strong> Hard-refresh the page (Ctrl+Shift+R), then open the program again.</li>
          <li><strong>Offline?</strong> The main desktop still works; live GitHub data needs internet.</li>
        </ul>
      </div>
    </div>`);

    wrap.querySelectorAll(".help-topic").forEach((btn) => {
      btn.addEventListener("click", () => {
        wrap.querySelectorAll(".help-topic").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const id = btn.dataset.topic;
        wrap.querySelectorAll(".help-panel").forEach((p) => {
          p.hidden = p.dataset.panel !== id;
        });
      });
    });
    wrap.querySelectorAll("[data-open]").forEach((btn) => {
      btn.addEventListener("click", () => openWindowSafe(btn.dataset.open));
    });
    return wrap;
  }

  /* ========== Testimonials ========== */
  /* ========== Testimonials ========== */
  function buildTestimonials() {
    const list = Array.isArray(TESTIMONIALS) && TESTIMONIALS.length
      ? TESTIMONIALS
      : [
          { quote: "Reliable, clear, and careful with real systems work.", who: "Colleague" },
          { quote: "A portfolio that shows both skill and personality.", who: "Peer developer" },
        ];
    let index = 0;
    const wrap = el(`<div class="testimonial-app">
      <h3 style="margin-top:0">Testimonials</h3>
      <p class="muted">What people say — use arrows or the dots to browse.</p>
      <div class="testimonial-stage">
        <blockquote class="testimonial-card testimonial-active">
          <p class="t-quote"></p>
          <footer class="t-who"></footer>
        </blockquote>
      </div>
      <div class="testimonial-nav">
        <button type="button" class="proj-btn" data-t="prev">← Prev</button>
        <span class="t-dots"></span>
        <button type="button" class="proj-btn" data-t="next">Next →</button>
      </div>
      <div class="testimonial-actions">
        <button type="button" class="proj-btn primary" data-t="contact">Open Contact</button>
        <button type="button" class="proj-btn" data-t="about">Open About Me</button>
      </div>
      <ul class="testimonial-list"></ul>
    </div>`);

    function show(i) {
      index = (i + list.length) % list.length;
      const t = list[index];
      wrap.querySelector(".t-quote").textContent = "“" + t.quote + "”";
      wrap.querySelector(".t-who").textContent = "— " + t.who;
      wrap.querySelector(".t-dots").innerHTML = list
        .map(
          (_, d) =>
            `<button type="button" class="t-dot${d === index ? " active" : ""}" data-d="${d}" aria-label="Quote ${d + 1}"></button>`
        )
        .join("");
      wrap.querySelectorAll(".t-dot").forEach((btn) => {
        btn.addEventListener("click", () => show(+btn.dataset.d));
      });
      const ul = wrap.querySelector(".testimonial-list");
      ul.innerHTML = list
        .map(
          (item, d) =>
            `<li class="${d === index ? "active" : ""}"><strong>${escapeHtml(item.who)}</strong> — ${escapeHtml(item.quote.slice(0, 72))}${item.quote.length > 72 ? "…" : ""}</li>`
        )
        .join("");
    }

    wrap.querySelector('[data-t="prev"]').addEventListener("click", () => show(index - 1));
    wrap.querySelector('[data-t="next"]').addEventListener("click", () => show(index + 1));
    wrap.querySelector('[data-t="contact"]').addEventListener("click", () => openWindowSafe("contact"));
    wrap.querySelector('[data-t="about"]').addEventListener("click", () => openWindowSafe("about"));
    show(0);
    return wrap;
  }

  /* ========== GitHub activity ========== */
  function buildGithub() {
    const USER = "Menelik2";
    const wrap = el(`<div class="gh-app">
      <h3 style="margin-top:0">GitHub Activity</h3>
      <div class="gh-profile">
        <div class="gh-avatar" aria-hidden="true">GH</div>
        <div>
          <div class="gh-name">@${USER}</div>
          <div class="gh-meta muted">Public activity</div>
        </div>
        <button type="button" class="proj-btn gh-refresh" title="Refresh">↻ Refresh</button>
      </div>
      <p class="muted gh-status">Loading public events…</p>
      <div class="gh-stats" hidden>
        <span class="gh-stat" data-s="repos">Repos —</span>
        <span class="gh-stat" data-s="followers">Followers —</span>
        <span class="gh-stat" data-s="following">Following —</span>
      </div>
      <table class="gh-table">
        <thead><tr><th>Type</th><th>Repo</th><th>Detail</th><th>When</th></tr></thead>
        <tbody></tbody>
      </table>
      <p style="margin-top:12px">
        <a class="proj-btn primary" href="https://github.com/${USER}" target="_blank" rel="noopener">Open GitHub ↗</a>
        <a class="proj-btn" href="https://github.com/${USER}?tab=repositories" target="_blank" rel="noopener">Repositories ↗</a>
      </p>
    </div>`);

    const tbody = wrap.querySelector("tbody");
    const status = wrap.querySelector(".gh-status");
    const statsBox = wrap.querySelector(".gh-stats");

    function renderRows(rows) {
      if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="4">No recent public events.</td></tr>`;
        return;
      }
      tbody.innerHTML = rows
        .map(
          (g) =>
            `<tr>
              <td><strong>${escapeHtml(g.type)}</strong></td>
              <td>${escapeHtml(g.repo)}</td>
              <td>${escapeHtml(g.detail)}</td>
              <td>${escapeHtml(g.when)}</td>
            </tr>`
        )
        .join("");
    }

    function mapEvents(events) {
      return events.slice(0, 12).map((ev) => {
        const repo = (ev.repo && ev.repo.name) || "—";
        const when = ev.created_at ? new Date(ev.created_at).toLocaleString() : "";
        let detail = ev.type || "";
        try {
          if (ev.type === "PushEvent" && ev.payload && ev.payload.commits && ev.payload.commits.length) {
            detail = ev.payload.commits[0].message || "Push";
          } else if (ev.type === "CreateEvent") {
            detail = "Created " + ((ev.payload && ev.payload.ref_type) || "ref");
          } else if (ev.type === "WatchEvent") {
            detail = "Starred repository";
          } else if (ev.type === "ForkEvent") {
            detail = "Forked repository";
          } else if (ev.type === "IssuesEvent") {
            detail = ((ev.payload && ev.payload.action) || "issue") + ": " + ((ev.payload.issue && ev.payload.issue.title) || "");
          } else if (ev.type === "PullRequestEvent") {
            detail = ((ev.payload && ev.payload.action) || "pr") + ": " + ((ev.payload.pull_request && ev.payload.pull_request.title) || "");
          } else if (ev.type === "PublicEvent") {
            detail = "Made repository public";
          }
        } catch (_) {}
        return {
          type: String(ev.type || "").replace(/Event$/, "") || "Event",
          repo: String(repo).replace(/^[^/]+\//, ""),
          detail: String(detail).slice(0, 100),
          when,
        };
      });
    }

    function load() {
      status.textContent = "Loading public events…";
      renderRows(GITHUB_ACTIVITY || []);

      const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer = setTimeout(() => {
        try {
          if (ctrl) ctrl.abort();
        } catch (_) {}
      }, 10000);

      const opts = ctrl ? { signal: ctrl.signal } : {};
      Promise.all([
        fetch("https://api.github.com/users/" + USER + "/events/public?per_page=12", opts).then((r) => {
          if (!r.ok) throw new Error("Events HTTP " + r.status);
          return r.json();
        }),
        fetch("https://api.github.com/users/" + USER, opts).then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ])
        .then(([events, profile]) => {
          clearTimeout(timer);
          if (!Array.isArray(events) || !events.length) throw new Error("No public events");
          renderRows(mapEvents(events));
          status.textContent = "Live data from api.github.com · @" + USER;
          if (profile) {
            statsBox.hidden = false;
            statsBox.querySelector('[data-s="repos"]').textContent = "Repos " + (profile.public_repos ?? "—");
            statsBox.querySelector('[data-s="followers"]').textContent = "Followers " + (profile.followers ?? "—");
            statsBox.querySelector('[data-s="following"]').textContent = "Following " + (profile.following ?? "—");
            if (profile.name) wrap.querySelector(".gh-name").textContent = profile.name + " · @" + USER;
            if (profile.avatar_url) {
              const av = wrap.querySelector(".gh-avatar");
              av.style.backgroundImage = "url(" + profile.avatar_url + ")";
              av.style.backgroundSize = "cover";
              av.textContent = "";
            }
          }
        })
        .catch((err) => {
          clearTimeout(timer);
          console.warn("[GitHub Activity]", err);
          renderRows(GITHUB_ACTIVITY || []);
          status.textContent =
            "Showing saved highlights (live API unavailable). " +
            (err && err.name === "AbortError" ? "Request timed out." : "You may be offline or rate-limited.");
        });
    }

    wrap.querySelector(".gh-refresh").addEventListener("click", () => load());
    load();
    return wrap;
  }

  /* ========== Skills radar ========== */
  /* ========== Skills radar (CONTENT enhancement helper) ========== */
  function skillsRadarHtml() {
    const skills = [
      { name: "HTML/CSS", v: 90 },
      { name: "JavaScript", v: 85 },
      { name: "Python", v: 75 },
      { name: "Java", v: 70 },
      { name: "Git", v: 80 },
      { name: "SQL", v: 65 },
      { name: "Networking", v: 88 },
      { name: "Hardware", v: 90 },
    ];
    const n = skills.length;
    const cx = 100,
      cy = 100,
      r = 80;
    const pts = skills
      .map((s, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2;
        const rr = (r * s.v) / 100;
        return `${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`;
      })
      .join(" ");
    const grid = [0.25, 0.5, 0.75, 1]
      .map((f) => {
        const poly = skills
          .map((_, i) => {
            const a = (Math.PI * 2 * i) / n - Math.PI / 2;
            return `${cx + r * f * Math.cos(a)},${cy + r * f * Math.sin(a)}`;
          })
          .join(" ");
        return `<polygon points="${poly}" fill="none" stroke="rgba(36,94,219,0.25)" />`;
      })
      .join("");
    const labels = skills
      .map((s, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + (r + 14) * Math.cos(a);
        const y = cy + (r + 14) * Math.sin(a);
        return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="9" fill="currentColor">${s.name}</text>`;
      })
      .join("");
    return `<div class="skills-radar-wrap"><svg viewBox="0 0 200 200" class="skills-radar" role="img" aria-label="Skills radar chart">${grid}<polygon points="${pts}" fill="rgba(36,94,219,0.35)" stroke="#245edb" stroke-width="2"/>${labels}</svg></div>`;
  }

  /* ========== Cert gallery enhancement ========== */
  function certGalleryHtml() {
    const items = [
      { title: "Hardware & Networking Level IV", desc: "Professional qualification in hardware and networking." },
      { title: "National Qualifications COC", desc: "Certificate of Competence (national qualifications)." },
      { title: "Best Worker Award 2010", desc: "Recognition for outstanding performance." },
    ];
    return (
      `<div class="cert-gallery">` +
      items
        .map(
          (c) => `<button type="button" class="cert-tile" data-cert="${c.title}">
        <div class="cert-badge">🏆</div>
        <strong>${c.title}</strong>
        <span>${c.desc}</span>
      </button>`
        )
        .join("") +
      `</div>`
    );
  }

  /* ========== Resume timeline ========== */
  function resumeTimelineHtml() { return ""; }

  let contentEnhanced = false;
  function enhanceContent() {
    if (!window.CONTENT) return;
    // Case studies on project cards
    if (CONTENT.projects && CONTENT.projects.html && !CONTENT.projects.html.includes("case-study")) {
      Object.keys(CASE_STUDIES).forEach((key) => {
        const cs = CASE_STUDIES[key];
        const block = `<details class="case-study"><summary>Case study</summary>
          <p><strong>Problem:</strong> ${cs.problem}</p>
          <p><strong>Approach:</strong> ${cs.approach}</p>
          <p><strong>Stack:</strong> ${cs.stack}</p>
          <p><strong>Outcome:</strong> ${cs.outcome}</p>
        </details>`;
        const marker = `data-project="${key}"`;
        // Case studies are appended as a section below (per-card inject is brittle).
      });
      CONTENT.projects.html += `<h3>Case studies</h3>` +
        Object.entries(CASE_STUDIES)
          .map(
            ([k, cs]) => `<div class="project-card case-study-card" data-case="${k}">
            <h4>${k.replace(/-/g, " ")}</h4>
            <p><strong>Problem:</strong> ${cs.problem}</p>
            <p><strong>Approach:</strong> ${cs.approach}</p>
            <p><strong>Stack:</strong> ${cs.stack}</p>
            <p><strong>Outcome:</strong> ${cs.outcome}</p>
          </div>`
          )
          .join("");
    }
    if (CONTENT.skills && CONTENT.skills.html && !CONTENT.skills.html.includes("skills-radar")) {
      CONTENT.skills.html = skillsRadarHtml() + CONTENT.skills.html;
    }
    if (CONTENT.certifications && CONTENT.certifications.html && !CONTENT.certifications.html.includes("cert-gallery")) {
      CONTENT.certifications.html =
        `<h2>Certifications</h2>` + certGalleryHtml() + CONTENT.certifications.html.replace(/<h2>Certifications<\/h2>/, "");
    }
    if (CONTENT.contact && CONTENT.contact.html) {
      if (!CONTENT.contact.html.includes("contact-success-hint")) {
        CONTENT.contact.html += `<p class="contact-success-hint muted" style="font-size:12px">Contact form is connected to Formspree (<code>xqervlnj</code>). Messages go to linuxos777@gmail.com.</p>`;
      }
      // Prefer configured Formspree id from localStorage if user set one
      try {
        const fid = localStorage.getItem("menelik-formspree-id");
        if (fid && fid !== "xqervlnj") {
          CONTENT.contact.html = CONTENT.contact.html.replace(/xqervlnj/g, fid);
        }
      } catch (_) {}
    }
  }

  function bindResumeTimeline() { /* timeline UI removed */ }

  function bindCertGallery(root) {
    root.querySelectorAll(".cert-tile").forEach((btn) => {
      btn.addEventListener("click", () => {
        showDialog("Certificate", btn.dataset.cert + "\n\n" + (btn.querySelector("span")?.textContent || ""));
      });
    });
  }

  /* ========== Ethiopian calendar + desktop widgets ========== */
  /** Ethiopic digits 1–9 (፩–፱); 0 stays Latin (no traditional zero). */
  function toGeezDigits(str) {
    const map = { "1": "፩", "2": "፪", "3": "፫", "4": "፬", "5": "፭", "6": "፮", "7": "፯", "8": "፰", "9": "፱", "0": "0" };
    return String(str).replace(/[0-9]/g, (d) => map[d] || d);
  }

  const ETH_MONTHS_EN = [
    "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit",
    "Megabit", "Miazia", "Ginbot", "Sene", "Hamle", "Nehasse", "Pagumen",
  ];
  const ETH_MONTHS_AM = [
    "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት",
    "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን",
  ];
  const ETH_WEEKDAYS_AM = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"];

  /** Gregorian civil date → Julian Day Number (integer, local calendar date). */
  function gregorianToJDN(year, month, day) {
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
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

  /**
   * Convert a JS Date (local Y/M/D) to Ethiopian calendar.
   * Uses JDN offset aligned with the civil Ethiopian calendar
   * (New Year ≈ 11/12 September Gregorian).
   */
  function toEthiopianDate(date) {
    const gy = date.getFullYear();
    const gm = date.getMonth() + 1;
    const gd = date.getDate();
    const jdn = gregorianToJDN(gy, gm, gd);
    // Ethiopian epoch: JDN of Meskerem 1, year 1 EE
    const r = (jdn - 1723856) % 1461;
    const n = (r % 365) + 365 * Math.floor(r / 1460);
    const year =
      4 * Math.floor((jdn - 1723856) / 1461) +
      Math.floor(r / 365) -
      Math.floor(r / 1460);
    const month = Math.floor(n / 30) + 1;
    const day = (n % 30) + 1;
    return {
      year: year,
      month: month,
      day: day,
      monthNameEn: ETH_MONTHS_EN[month - 1] || "",
      monthNameAm: ETH_MONTHS_AM[month - 1] || "",
      weekdayAm: ETH_WEEKDAYS_AM[date.getDay()] || "",
    };
  }

  function formatEthiopianShort(eth) {
    // e.g. መስከረም ፳፩ · ፪፬፲፯
    return (
      eth.monthNameAm +
      " " +
      toGeezDigits(String(eth.day)) +
      " · " +
      toGeezDigits(String(eth.year))
    );
  }

  function formatEthiopianLong(eth) {
    return (
      eth.weekdayAm +
      "፣ " +
      eth.monthNameAm +
      " " +
      toGeezDigits(String(eth.day)) +
      " ቀን " +
      toGeezDigits(String(eth.year)) +
      " ዓ.ም. (" +
      eth.monthNameEn +
      " " +
      eth.day +
      ", " +
      eth.year +
      " EE)"
    );
  }

  // Expose for Terminal / other apps
  window.toEthiopianDate = toEthiopianDate;
  window.toGeezDigits = toGeezDigits;

  function mountWidgets() {
    if (document.getElementById("desktop-widgets")) return;
    const desktop = document.getElementById("desktop");
    if (!desktop) return;
    const hcOn = document.body.classList.contains("high-contrast");
    const box = el(`<div id="desktop-widgets" class="desktop-widgets" aria-label="Desktop gadgets">
      <div class="gadget clock-gadget" id="eth-clock-gadget" title="Ethiopian calendar">
        <div class="gadget-time" id="gadget-time">12:00:00</div>
        <div class="gadget-ms" id="gadget-ms">.000</div>
        <div class="gadget-date" id="gadget-date"></div>
        <div class="gadget-eth" id="gadget-eth"></div>
        <button type="button" class="gadget-hc" id="hc-toggle" title="High contrast">${hcOn ? "HC ✓" : "HC"}</button>
      </div>
    </div>`);
    desktop.appendChild(box);
    let lastDateKey = "";
    function tickTime() {
      const n = new Date();
      const t = document.getElementById("gadget-time");
      const msEl = document.getElementById("gadget-ms");
      if (t) {
        const h = String(n.getHours()).padStart(2, "0");
        const m = String(n.getMinutes()).padStart(2, "0");
        const sec = String(n.getSeconds()).padStart(2, "0");
        t.textContent = toGeezDigits(h + ":" + m + ":" + sec);
      }
      if (msEl) {
        // Browsers expose millisecond precision (Date); shown as 3-digit fraction
        const ms = String(n.getMilliseconds()).padStart(3, "0");
        msEl.textContent = toGeezDigits("." + ms);
      }
      // Update calendar lines once per minute (or first run)
      const key = n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate() + "-" + n.getHours() + "-" + n.getMinutes();
      if (key !== lastDateKey) {
        lastDateKey = key;
        const d = document.getElementById("gadget-date");
        const e = document.getElementById("gadget-eth");
        const eth = toEthiopianDate(n);
        if (d) d.textContent = formatEthiopianShort(eth);
        if (e) {
          e.textContent = n.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          });
        }
        const tip = formatEthiopianLong(eth) + " · " + n.toLocaleString();
        const root = document.getElementById("eth-clock-gadget");
        if (root) root.setAttribute("title", tip);
        if (t) t.setAttribute("title", tip);
      }
    }
    tickTime();
    setInterval(tickTime, 50);
    document.getElementById("hc-toggle")?.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
      const on = document.body.classList.contains("high-contrast");
      localStorage.setItem("menelik-hc", on ? "1" : "0");
      const b = document.getElementById("hc-toggle");
      if (b) b.textContent = on ? "HC ✓" : "HC";
    });
    if (localStorage.getItem("menelik-hc") === "1") {
      document.body.classList.add("high-contrast");
      const b = document.getElementById("hc-toggle");
      if (b) b.textContent = "HC ✓";
    }
  }


  /* ========== Persistence ========== */
  const STATE_KEY = "menelik-os-state-v1";

  function saveState() {
    try {
      const wins = {};
      if (window.openWindows) {
        Object.keys(openWindows).forEach((id) => {
          const w = openWindows[id];
          if (!w) return;
          wins[id] = {
            left: w.style.left,
            top: w.style.top,
            width: w.style.width,
            height: w.style.height,
            minimized: w.dataset.minimized === "1",
          };
        });
      }
      const state = {
        theme: document.body.classList.contains("light") ? "light" : "dark",
        wallpaper: document.body.getAttribute("data-wallpaper") || "",
        wins,
      };
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function restoreState() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw);
      // Always open light; user can still toggle dark during the session
      if (typeof applyTheme === "function") applyTheme("light");
      else {
        document.body.classList.add("light");
        try { localStorage.setItem("portfolio-theme", "light"); } catch (_) {}
      }
      if (state.wallpaper) document.body.setAttribute("data-wallpaper", state.wallpaper);
      // Re-open windows after boot finishes (positions applied after open)
      if (state.wins && typeof openWindow === "function") {
        const ids = Object.keys(state.wins).slice(0, 6);
        const apply = () => {
          ids.forEach((id) => {
            try {
              openWindow(id);
              const w = window.openWindows && openWindows[id];
              const s = state.wins[id];
              if (!w || !s) return;
              if (s.left) w.style.left = s.left;
              if (s.top) w.style.top = s.top;
              if (s.width) w.style.width = s.width;
              if (s.height) w.style.height = s.height;
              if (s.minimized && typeof minimizeWindow === "function") {
                try { minimizeWindow(id); } catch (_) {}
              }
            } catch (_) {}
          });
        };
        // Wait for boot-done (not a fixed delay from page load)
        const onBoot = () => setTimeout(apply, 80);
        if (!document.getElementById("boot-screen")) onBoot();
        else {
          document.addEventListener("menelik-boot-done", onBoot, { once: true });
          // Safety if boot event never fires (e.g. no boot UI)
          setTimeout(() => {
            if (!document.getElementById("boot-screen")) apply();
          }, 90 * 1000);
        }
      }
    } catch (_) {}
  }

  /* ========== Error easter egg ========== */
  function bindEasterEggs() {
    document.addEventListener(
      "dblclick",
      (e) => {
        const icon = e.target.closest('.icon[data-window="recycle"]');
        if (!icon) return;
        if (window.recycleBin && recycleBin.length === 0) {
          showDialog(
            "Recycle Bin",
            "Recycle Bin is empty.\n\n(Just kidding — no files were harmed.)",
            true
          );
        }
      },
      true
    );
  }

  function showDialog(title, msg, isError) {
    if (typeof showXpDialog === "function") {
      showXpDialog(title, msg);
      return;
    }
    alert(title + "\n\n" + msg);
  }

  function openWindowSafe(id) {
    if (typeof openWindow === "function") openWindow(id);
  }

  /* ========== Register apps ========== */
  let registered = false;
  function register() {
    // Always (re)bind builders so openWindow works even if register ran early
    window.openInIE = window.openInEdge; // alias
    window.extraAppBuilders = Object.assign(window.extraAppBuilders || {}, {
      edge: withAppErrorBoundary("Microsoft Edge", buildEdge),
      ie: withAppErrorBoundary("Microsoft Edge", buildEdge),
      mediaplayer: withAppErrorBoundary("Windows Media Player", buildMediaPlayer),
      solitaire: withAppErrorBoundary("Solitaire", buildSolitaire),
      blog: withAppErrorBoundary("My Computer", buildBlog),
      help: withAppErrorBoundary("Help and Support", buildHelp),
      testimonials: withAppErrorBoundary("Testimonials", buildTestimonials),
      github: withAppErrorBoundary("GitHub Activity", buildGithub),
      downloadpack: withAppErrorBoundary("Download Pack", function () {
        const w = buildBlog();
        setTimeout(() => {
          try { w.querySelector('[data-view="pack"]')?.click(); } catch (_) {}
        }, 0);
        return w;
      }),
    });

    const appsRef = (typeof APPS !== "undefined" && APPS) || window.APPS;
    if (!appsRef) return false;
    if (registered) return true;
    registered = true;
    window.APPS = appsRef;
    Object.assign(appsRef, {
      ie: { title: "Microsoft Edge", iconClass: "ie-icon", interactive: true },
      mediaplayer: { title: "Windows Media Player", iconClass: "wmp-icon", interactive: true },
      solitaire: { title: "Solitaire", iconClass: "solitaire-icon", interactive: true },
      blog: { title: "My Computer", iconClass: "blog-icon", interactive: true },
      help: { title: "Help and Support", iconClass: "help-icon", interactive: true },
      testimonials: { title: "Testimonials", iconClass: "testimonial-icon", interactive: true },
      github: { title: "GitHub Activity", iconClass: "github-icon", interactive: true },
      downloadpack: { title: "Download Pack", iconClass: "pack-icon", interactive: true },
    });

    // Patch sizes via openWindow monkey-patch
    const origOpen = window.openWindow;
    if (origOpen) {
      window.openWindow = function (id) {
        const result = origOpen.apply(this, arguments);
        const win = window.openWindows && openWindows[id];
        if (win) {
          bindCertGallery(win);
        }
        saveState();
        return result;
      };
    }

    enhanceContent();
    mountWidgets();
    bindEasterEggs();
    restoreState();

    document.addEventListener("keydown", (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        openWindowSafe("help");
      }
    });

    window.addEventListener("beforeunload", saveState);
    setInterval(saveState, 30000);

    // A11y skip link focus target
    const skip = document.getElementById("skip-to-desktop");
    if (skip) {
      skip.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("desktop")?.focus?.();
        document.getElementById("boot-start-btn")?.click();
      });
    }
  }

  function tryRegister(attemptsLeft) {
    const ok = register();
    if (!ok && attemptsLeft > 0) {
      setTimeout(() => tryRegister(attemptsLeft - 1), 50);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => tryRegister(40));
  } else {
    tryRegister(40);
  }

  // Re-apply case studies / radar / certs after content/*.json loads
  document.addEventListener("menelik-content-ready", () => {
    try {
      enhanceContent();
    } catch (_) {}
  });

  // Late register after script.js finishes (APPS defined)
  window.addEventListener("load", () => {
    register();
    try {
      enhanceContent();
    } catch (_) {}
    if ("serviceWorker" in navigator) {
      // Reload once when a new SW takes control so visitors see the latest deploy
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
      const swUrl =
        "./sw.js?v=" +
        encodeURIComponent(
          (typeof window !== "undefined" && window.__MENELIK_V__) || "20260808y"
        );
      navigator.serviceWorker
        .register(swUrl)
        .then((reg) => {
          // Check for updates on every visit
          try {
            reg.update();
          } catch (_) {}
          // If a new worker is waiting, activate it immediately
          if (reg.waiting) {
            reg.waiting.postMessage({ type: "SKIP_WAITING" });
          }
          reg.addEventListener("updatefound", () => {
            const nw = reg.installing;
            if (!nw) return;
            nw.addEventListener("statechange", () => {
              if (nw.state === "installed" && navigator.serviceWorker.controller) {
                // New version ready — skipWaiting already called in sw install
              }
            });
          });
        })
        .catch(() => {});
    }
  });
})();
