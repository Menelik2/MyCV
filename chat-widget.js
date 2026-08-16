/**
 * Menelik OS — Chats app (ryOS-inspired)
 * Messenger UI + portfolio AI + local tools (open apps)
 */
(function () {
  "use strict";

  var HISTORY_KEY = "menelik-chat-history-v1";
  var MAX_HISTORY = 24;

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

  function localAnswer(raw) {
    var q = String(raw || "").toLowerCase();
    var isAm = /[\u1200-\u137F]/.test(raw);
    var email = "linuxos777@gmail.com";
    var phone = "+251 918 006 053";
    var linkedin = "https://www.linkedin.com/in/menelik7";
    var github = "https://github.com/Menelik2";

    if (/email|e-mail|mail|contact|reach|phone|call|linkedin|github|ኢሜይል|ስልክ|አድራሻ|ማግኘት|ኢሜል/.test(q + raw)) {
      return isAm
        ? "ምኒልክን ማግኘት:\n📧 " + email + "\n☎ " + phone + "\n🔗 " + linkedin + "\n⌥ " + github
        : "Reach Menelik:\n📧 " + email + "\n☎ " + phone + "\n🔗 " + linkedin + "\n⌥ " + github;
    }
    if (/project|yen|cv|movie|typing|exam|ፕሮጀክት/.test(q + raw)) {
      return isAm
        ? "ፕሮጀክቶች:\n• Yeni Pro CV → https://procv.is-cool.dev\n• Yeni Movie → https://yeni-movie.vercel.app\n• Yeni Typing → https://fidel.is-local.dev\n• Yeni Exam → https://yeniexams.vercel.app/"
        : "Projects:\n• Yeni Pro CV → https://procv.is-cool.dev\n• Yeni Movie → https://yeni-movie.vercel.app\n• Yeni Typing → https://fidel.is-local.dev\n• Yeni Exam → https://yeniexams.vercel.app/";
    }
    if (/experience|work|job|trainer|ስራ|ልምድ|አሰልጣኝ/.test(q + raw)) {
      return isAm
        ? "~10 ዓመት ልምድ: Dejen TVET (2004–2012) · Debre Elias TVET (2012–2014). ትኩረት: systems, networking, training."
        : "~10 years experience: Dejen TVET (2004–2012) · Debre Elias TVET (2012–2014). Focus: systems, networking, training.";
    }
    if (/education|degree|university|bsc|ትምህርት|ዩኒቨርሲቲ/.test(q + raw)) {
      return isAm
        ? "BSc Computer Science — Bahir Dar University (2022–2026). Hardware & Networking diploma earlier."
        : "BSc Computer Science — Bahir Dar University (2022–2026, completed). Earlier hardware & networking diploma.";
    }
    if (/skill|ክህሎት/.test(q + raw)) {
      return isAm
        ? "ክህሎቶች: HTML, CSS, JS, Python, Java, Git, SQL, networking, system admin, cybersecurity, training."
        : "Skills: HTML, CSS, JS, Python, Java, Git, SQL, networking, system admin, cybersecurity, training.";
    }
    if (/who|about|menelik|ማን|ምኒልክ|hi|hello|ሰላም|ጤና/.test(q + raw)) {
      return isAm
        ? "እኔ የ Menelik OS ረዳት ነኝ። ምኒልክ አድማሱ Full-Stack Developer እና Computer Administrator ነው (ባሕር ዳር)። ኢሜይል: " + email
        : "I'm the Menelik OS assistant. Menelik Admasu is a Full-Stack Developer & Computer Administrator in Bahir Dar. Email: " + email;
    }
    return isAm
      ? "ስለ ምኒልክ፣ ፕሮጀክት፣ ስራ፣ ትምህርት ወይም አድራሻ ይጠይቁ። ኢሜይል: " + email
      : "Ask about Menelik, projects, work, education, or contact. Email: " + email;
  }

  /** Lightweight tools like ryOS launchApp */
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
    if (/\b(open|show|launch)\b.*\bcontact\b|እውቂያ/.test(q + text)) open("contact", "Contact");
    if (/\b(open|show|launch)\b.*\bsudoku\b/.test(q)) open("sudoku", "Sudoku");
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
      }, 20000);

    try {
      var res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          message: userMessage,
          messages: history.slice(-12).map(function (m) {
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
    el.textContent = "";
    var i = 0;
    var step = Math.max(1, Math.floor(text.length / 80));
    function tick() {
      i = Math.min(text.length, i + step);
      el.textContent = text.slice(0, i);
      el.parentElement && (el.parentElement.parentElement.scrollTop = 1e9);
      if (i < text.length) requestAnimationFrame(tick);
      else if (done) done();
    }
    requestAnimationFrame(tick);
  }

  window.mountPortfolioChat = function mountPortfolioChat(container) {
    if (!container) return null;
    container.innerHTML = "";
    container.dataset.chatMounted = "1";

    var history = loadHistory();

    var root = document.createElement("div");
    root.className = "chats-app";
    root.innerHTML =
      '<div class="chats-top">' +
      '  <div class="chats-persona">' +
      '    <div class="chats-avatar" aria-hidden="true">M</div>' +
      '    <div class="chats-persona-text">' +
      '      <div class="chats-name">Menelik OS Assistant</div>' +
      '      <div class="chats-status"><span class="chats-dot"></span> Online · portfolio AI</div>' +
      "    </div>" +
      "  </div>" +
      '  <div class="chats-top-actions">' +
      '    <a class="chats-mail" href="mailto:linuxos777@gmail.com" title="Email">✉</a>' +
      '    <button type="button" class="chats-clear" title="Clear chat">Clear</button>' +
      "  </div>" +
      "</div>" +
      '<div class="chats-messages" role="log" aria-live="polite"></div>' +
      '<div class="chats-suggestions"></div>' +
      '<div class="chats-composer">' +
      '  <input type="text" class="chats-input" placeholder="Message Menelik OS…" autocomplete="off" enterkeyhint="send" />' +
      '  <button type="button" class="chats-send" aria-label="Send">Send</button>' +
      "</div>";

    container.appendChild(root);

    var messagesEl = root.querySelector(".chats-messages");
    var input = root.querySelector(".chats-input");
    var sendBtn = root.querySelector(".chats-send");
    var clearBtn = root.querySelector(".chats-clear");
    var suggestions = root.querySelector(".chats-suggestions");
    var inFlight = false;

    function addBubble(role, text, opts) {
      opts = opts || {};
      var row = document.createElement("div");
      row.className = "chats-row chats-row-" + role;
      var bubble = document.createElement("div");
      bubble.className = "chats-bubble chats-bubble-" + role;
      if (opts.typing) {
        bubble.innerHTML =
          '<span class="chats-typing"><i></i><i></i><i></i></span>';
      } else {
        bubble.textContent = text || "";
      }
      row.appendChild(bubble);
      if (opts.source && role === "assistant") {
        var meta = document.createElement("div");
        meta.className = "chats-meta";
        meta.textContent = opts.source === "gemini" ? "Gemini" : opts.source === "local" ? "Local" : "";
        if (meta.textContent) row.appendChild(meta);
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
          "Hi — I'm the Menelik OS assistant (like Ryo in ryOS).\nAsk about Menelik, open apps (“open projects”), or get contact info.\n\nጤና ይስጥልኝ! ስለ ምኒልክ ወይም ፕሮጀክቶቹ ይጠይቁኝ።"
        );
        return;
      }
      history.forEach(function (m) {
        addBubble(m.role === "user" ? "user" : "assistant", m.content);
      });
    }

    suggestions.innerHTML =
      '<button type="button" data-q="Who is Menelik?">About</button>' +
      '<button type="button" data-q="What projects has he built?">Projects</button>' +
      '<button type="button" data-q="How can I contact him?">Contact</button>' +
      '<button type="button" data-q="Open resume">Open Resume</button>' +
      '<button type="button" data-q="ምኒልክ ማን ነው?">ስለ እሱ</button>';

    suggestions.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-q]");
      if (!b) return;
      input.value = b.getAttribute("data-q");
      sendMessage();
    });

    clearBtn.addEventListener("click", function () {
      history = [];
      saveHistory(history);
      renderHistory();
    });

    function sendMessage() {
      if (inFlight) return;
      var text = (input.value || "").trim();
      if (!text) return;

      inFlight = true;
      input.value = "";
      sendBtn.disabled = true;
      input.disabled = true;

      history.push({ role: "user", content: text });
      saveHistory(history);
      addBubble("user", text);

      var toolActions = runLocalTools(text);
      var typing = addBubble("assistant", "", { typing: true });

      callAPI(text, history)
        .then(function (result) {
          typing.row.remove();
          var reply = result.text || localAnswer(text);
          if (toolActions.length) {
            reply +=
              (reply ? "\n\n" : "") +
              "Opened: " +
              toolActions.join(", ") +
              ".";
          }
          var node = addBubble("assistant", "", { source: result.source });
          typewriter(node.bubble, reply, function () {
            history.push({ role: "assistant", content: reply });
            saveHistory(history);
          });
        })
        .catch(function () {
          typing.row.remove();
          var reply = localAnswer(text);
          addBubble("assistant", reply, { source: "local" });
          history.push({ role: "assistant", content: reply });
          saveHistory(history);
        })
        .finally(function () {
          inFlight = false;
          sendBtn.disabled = false;
          input.disabled = false;
          try {
            input.focus();
          } catch (_) {}
        });
    }

    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sendMessage();
    });
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

  // Expose showPage for tools if not global
  if (typeof window.showPage !== "function") {
    // no-op; script.js defines it
  }
})();
