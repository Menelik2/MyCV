/**
 * Menelik OS — Advanced Chats app
 * History, tools, rich messages, markdown-lite, session context
 */
(function () {
  "use strict";

  var HISTORY_KEY = "menelik-chat-history-v2";
  var MAX_HISTORY = 40;

  function loadHistory() {
    try {
      var raw = localStorage.getItem(HISTORY_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.slice(-MAX_HISTORY) : [];
    } catch (_) {
      return [];
    }
  }

  function saveHistory(msgs) {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(msgs.slice(-MAX_HISTORY)));
    } catch (_) {}
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** markdown-lite: links, bold, code, newlines */
  function formatMessage(text) {
    var s = escapeHtml(text);
    s = s.replace(
      /`([^`]+)`/g,
      "<code class=\"chats-code\">$1</code>"
    );
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="chats-link">$1</a>'
    );
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  function localAnswer(raw) {
    var q = String(raw || "").toLowerCase();
    var isAm = /[\u1200-\u137F]/.test(raw);
    var email = "linuxos777@gmail.com";
    var phone = "+251 918 006 053";
    var phone2 = "+251 977 832 379";
    var linkedin = "https://www.linkedin.com/in/menelik7";
    var github = "https://github.com/Menelik2";

    if (/email|e-mail|mail|contact|reach|phone|call|linkedin|github|ኢሜይል|ስልክ|አድራሻ|ማግኘት/.test(q + raw)) {
      return isAm
        ? "ምኒልክን ማግኘት:\n📧 **" + email + "**\n☎ " + phone + " · " + phone2 + "\n🔗 " + linkedin + "\n⌥ " + github
        : "Contact **Menelik Admasu**:\n📧 **" + email + "**\n☎ " + phone + " · " + phone2 + "\n🔗 " + linkedin + "\n⌥ " + github;
    }
    if (/project|yen|cv|movie|typing|exam|ፕሮጀክት/.test(q + raw)) {
      return (
        (isAm ? "ዋና ፕሮጀክቶች:\n" : "Featured projects:\n") +
        "• **Yeni Pro CV** — https://procv.is-cool.dev\n" +
        "• **Yeni Movie** — https://yeni-movie.vercel.app\n" +
        "• **Yeni Typing** — https://fidel.is-local.dev\n" +
        "• **Yeni Exam** — https://yeniexams.vercel.app/"
      );
    }
    if (/experience|work|job|trainer|ስራ|ልምድ|አሰልጣኝ/.test(q + raw)) {
      return isAm
        ? "ወደ **10 ዓመት** የስራ ልምድ:\n• አሰልጣኝ — Dejen TVET (2004–2012)\n• አሰልጣኝ — Debre Elias TVET (2012–2014)"
        : "About **10 years** experience:\n• Trainer — Dejen TVET (2004–2012)\n• Trainer — Debre Elias TVET (2012–2014)\nFocus: systems, networking, technical training.";
    }
    if (/education|degree|university|bsc|ትምህርት|ዩኒቨርሲቲ/.test(q + raw)) {
      return isAm
        ? "**BSc Computer Science** — Bahir Dar University (2022–2026)\n**Level 4** Hardware & Networking Technology"
        : "**BSc Computer Science** — Bahir Dar University (2022–2026)\n**Level 4** Hardware and Networking Technology qualification";
    }
    if (/skill|ክህሎት/.test(q + raw)) {
      return "HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system admin, cybersecurity, hardware, technical training";
    }
    if (/who|about|menelik|ምኒልክ|ማን|hi|hello|ሰላም|ጤና/.test(q + raw)) {
      return isAm
        ? "**ምኒልክ አድማሱ** Full-Stack Application Developer እና IT Administrator ነው (ባሕር ዳር)። ኢሜይል: " + email
        : "**ምኒልክ አድማሱ (Menelik Admasu)** is a Full-Stack Application Developer and IT Administrator in Bahir Dar. Email: " + email;
    }
    return isAm
      ? "ስለ ምኒልክ ማንኛውንም ጥያቄ ይጠይቁ — ስራ፣ ትምህርት፣ ፕሮጀክት፣ ክህሎት፣ አድራሻ።\nኢሜይል: " + email
      : "Ask anything about Menelik — work, education, projects, skills, or contact.\nEmail: " + email;
  }

  function runLocalTools(text) {
    var q = text.toLowerCase();
    var actions = [];
    function open(id, label) {
      try {
        if (window.innerWidth < 900 && typeof window.showPage === "function") {
          window.showPage(id);
          actions.push(label);
        } else if (typeof window.openWindow === "function") {
          window.openWindow(id);
          actions.push(label);
        }
      } catch (_) {}
    }
    if (/\b(open|show|launch)\b.*\b(about|profile)\b|ስለ.*ክፈት/.test(q + text)) open("about", "About");
    if (/\b(open|show|launch)\b.*\bprojects?\b|ፕሮጀክት.*ክፈት/.test(q + text)) open("projects", "Projects");
    if (/\b(open|show|launch)\b.*\bresume\b|ሪዝዩም/.test(q + text)) open("resume", "Resume");
    if (/\b(open|show|launch)\b.*\bcontact\b|አድራሻ.*ክፈት/.test(q + text)) open("contact", "Contact");
    if (/\b(open|show|launch)\b.*\bsudoku\b/.test(q)) open("sudoku", "Sudoku");
    if (/\b(open|show|launch)\b.*\b(skills?)\b|ክህሎት.*ክፈት/.test(q + text)) open("skills", "Skills");
    if (/\b(open|show|launch)\b.*\b(education)\b|ትምህርት.*ክፈት/.test(q + text)) open("education", "Education");
    if (/\b(open|show|launch)\b.*\b(settings|control)\b/.test(q)) open("control", "Settings");
    return actions;
  }

  async function callAPI(userMessage, history) {
    var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer =
      controller &&
      setTimeout(function () {
        try {
          controller.abort();
        } catch (_) {}
      }, 22000);

    try {
      var res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          message: userMessage,
          messages: history.slice(-16).map(function (m) {
            return { role: m.role, content: m.content };
          }),
        }),
        signal: controller ? controller.signal : undefined,
      });
      if (timer) clearTimeout(timer);
      var data = {};
      try {
        data = await res.json();
      } catch (_) {}
      if (res.ok && data && data.reply) {
        return { text: String(data.reply), source: data.source || "api" };
      }
      return { text: localAnswer(userMessage), source: "local" };
    } catch (_) {
      if (timer) clearTimeout(timer);
      return { text: localAnswer(userMessage), source: "local" };
    }
  }

  function typewriter(el, text, done) {
    var i = 0;
    var step = Math.max(1, Math.ceil(text.length / 60));
    function tick() {
      i = Math.min(text.length, i + step);
      el.innerHTML = formatMessage(text.slice(0, i));
      var sc = el.closest(".chats-messages");
      if (sc) sc.scrollTop = sc.scrollHeight;
      if (i < text.length) requestAnimationFrame(tick);
      else if (done) done();
    }
    requestAnimationFrame(tick);
  }

  function timeLabel(ts) {
    try {
      var d = new Date(ts || Date.now());
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch (_) {
      return "";
    }
  }

  window.mountPortfolioChat = function mountPortfolioChat(container) {
    if (!container) return null;
    container.innerHTML = "";
    container.dataset.chatMounted = "1";

    var history = loadHistory();

    var root = document.createElement("div");
    root.className = "chats-app chats-app-advanced";
    root.innerHTML =
      '<div class="chats-top">' +
      '  <div class="chats-persona">' +
      '    <div class="chats-avatar" aria-hidden="true">M</div>' +
      '    <div class="chats-persona-text">' +
      '      <div class="chats-name">Menelik OS Assistant</div>' +
      '      <div class="chats-status"><span class="chats-dot"></span> <span class="chats-status-text">Online</span></div>' +
      "    </div>" +
      "  </div>" +
      '  <div class="chats-top-actions">' +
      '    <a class="chats-mail" href="mailto:linuxos777@gmail.com" title="Email">✉</a>' +
      '    <button type="button" class="chats-export" title="Export chat">Export</button>' +
      '    <button type="button" class="chats-clear" title="Clear chat">Clear</button>' +
      "  </div>" +
      "</div>" +
      '<div class="chats-messages" role="log" aria-live="polite"></div>' +
      '<div class="chats-suggestions"></div>' +
      '<div class="chats-composer">' +
      '  <button type="button" class="chats-attach" title="Quick actions" aria-label="Quick actions">+</button>' +
      '  <textarea class="chats-input" rows="1" placeholder="Message Menelik OS… / መልእክት ይጻፉ…" enterkeyhint="send"></textarea>' +
      '  <button type="button" class="chats-send" aria-label="Send">Send</button>' +
      "</div>" +
      '<div class="chats-quick" hidden>' +
      '  <button type="button" data-q="Who is Menelik?">About</button>' +
      '  <button type="button" data-q="Open projects">Open Projects</button>' +
      '  <button type="button" data-q="Open resume">Open Resume</button>' +
      '  <button type="button" data-q="How can I contact him?">Contact</button>' +
      '  <button type="button" data-q="ምኒልክ ማን ነው?">ስለ እሱ</button>' +
      "</div>";

    container.appendChild(root);

    var messagesEl = root.querySelector(".chats-messages");
    var input = root.querySelector(".chats-input");
    var sendBtn = root.querySelector(".chats-send");
    var clearBtn = root.querySelector(".chats-clear");
    var exportBtn = root.querySelector(".chats-export");
    var attachBtn = root.querySelector(".chats-attach");
    var quick = root.querySelector(".chats-quick");
    var suggestions = root.querySelector(".chats-suggestions");
    var statusText = root.querySelector(".chats-status-text");
    var inFlight = false;

    suggestions.innerHTML =
      '<button type="button" data-q="Who is Menelik?">About</button>' +
      '<button type="button" data-q="What projects has he built?">Projects</button>' +
      '<button type="button" data-q="What is his education?">Education</button>' +
      '<button type="button" data-q="How can I contact him?">Contact</button>' +
      '<button type="button" data-q="ምኒልክ ማን ነው?">ስለ እሱ</button>';

    function addBubble(role, text, opts) {
      opts = opts || {};
      var row = document.createElement("div");
      row.className = "chats-row chats-row-" + role;
      var bubble = document.createElement("div");
      bubble.className = "chats-bubble chats-bubble-" + role;
      if (opts.typing) {
        bubble.innerHTML =
          '<span class="chats-typing"><i></i><i></i><i></i></span>';
      } else if (opts.html) {
        bubble.innerHTML = text;
      } else {
        bubble.innerHTML = formatMessage(text || "");
      }
      row.appendChild(bubble);

      var foot = document.createElement("div");
      foot.className = "chats-foot";
      var time = document.createElement("span");
      time.className = "chats-time";
      time.textContent = timeLabel(opts.ts);
      foot.appendChild(time);
      if (opts.source && role === "assistant") {
        var meta = document.createElement("span");
        meta.className = "chats-meta";
        meta.textContent =
          opts.source === "gemini" ? "Gemini" : opts.source === "local" ? "Local" : opts.source;
        foot.appendChild(meta);
      }
      if (role === "assistant" && !opts.typing) {
        var copy = document.createElement("button");
        copy.type = "button";
        copy.className = "chats-copy";
        copy.textContent = "Copy";
        copy.addEventListener("click", function () {
          var plain = text || bubble.innerText;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(plain).then(function () {
              copy.textContent = "Copied";
              setTimeout(function () {
                copy.textContent = "Copy";
              }, 1200);
            });
          }
        });
        foot.appendChild(copy);
      }
      row.appendChild(foot);

      if (opts.tools && opts.tools.length) {
        var tools = document.createElement("div");
        tools.className = "chats-tool-card";
        tools.innerHTML =
          "<strong>Opened</strong> " +
          opts.tools.map(function (x) {
            return "<span>" + escapeHtml(x) + "</span>";
          }).join(" ");
        row.appendChild(tools);
      }

      messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return { row: row, bubble: bubble };
    }

    function renderHistory() {
      messagesEl.innerHTML = "";
      if (!history.length) {
        addBubble(
          "assistant",
          "Hi — I'm the **Menelik OS** assistant.\n\nጤና ይስጥልኝ! ስለ **ምኒልክ** ወይም ፕሮጀክቶቹ ይጠይቁኝ።",
          { ts: Date.now() }
        );
        return;
      }
      history.forEach(function (m) {
        addBubble(m.role === "user" ? "user" : "assistant", m.content, {
          ts: m.ts,
          source: m.source,
        });
      });
    }

    function autoSize() {
      input.style.height = "auto";
      input.style.height = Math.min(120, input.scrollHeight) + "px";
    }

    function setBusy(busy) {
      inFlight = busy;
      sendBtn.disabled = busy;
      input.disabled = busy;
      if (statusText) statusText.textContent = busy ? "Thinking…" : "Online";
    }

    function sendMessage(preset) {
      if (inFlight) return;
      var text = (preset != null ? preset : input.value || "").trim();
      if (!text) return;

      setBusy(true);
      input.value = "";
      autoSize();
      quick.hidden = true;

      var ts = Date.now();
      history.push({ role: "user", content: text, ts: ts });
      saveHistory(history);
      addBubble("user", text, { ts: ts });

      var toolActions = runLocalTools(text);
      var typing = addBubble("assistant", "", { typing: true, ts: Date.now() });

      callAPI(text, history)
        .then(function (result) {
          typing.row.remove();
          var reply = result.text || localAnswer(text);
          var node = addBubble("assistant", "", {
            source: result.source,
            ts: Date.now(),
            tools: toolActions,
          });
          typewriter(node.bubble, reply, function () {
            history.push({
              role: "assistant",
              content: reply,
              ts: Date.now(),
              source: result.source,
            });
            saveHistory(history);
          });
        })
        .catch(function () {
          typing.row.remove();
          var reply = localAnswer(text);
          addBubble("assistant", reply, { source: "local", ts: Date.now(), tools: toolActions });
          history.push({ role: "assistant", content: reply, ts: Date.now(), source: "local" });
          saveHistory(history);
        })
        .finally(function () {
          setBusy(false);
          try {
            input.focus();
          } catch (_) {}
        });
    }

    function onSuggestClick(e) {
      var b = e.target.closest("button[data-q]");
      if (!b) return;
      sendMessage(b.getAttribute("data-q"));
    }
    suggestions.addEventListener("click", onSuggestClick);
    quick.addEventListener("click", onSuggestClick);

    attachBtn.addEventListener("click", function () {
      quick.hidden = !quick.hidden;
    });

    clearBtn.addEventListener("click", function () {
      if (!confirm("Clear chat history?")) return;
      history = [];
      saveHistory(history);
      renderHistory();
    });

    exportBtn.addEventListener("click", function () {
      var lines = history.map(function (m) {
        return (
          (m.role === "user" ? "You" : "Assistant") +
          ": " +
          m.content
        );
      });
      var blob = new Blob([lines.join("\n\n") || "No messages"], {
        type: "text/plain;charset=utf-8",
      });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "menelik-os-chat.txt";
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
      }, 1000);
    });

    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sendMessage();
    });

    input.addEventListener("input", autoSize);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    renderHistory();
    setTimeout(function () {
      try {
        input.focus();
      } catch (_) {}
    }, 120);

    return root;
  };
})();
