/**
 * Portfolio Chat app — reliable send/receive with API + local fallback
 */
(function () {
  "use strict";

  function localAnswer(raw) {
    var q = String(raw || "").toLowerCase();
    var isAm = /[\u1200-\u137F]/.test(raw);
    var email = "linuxos777@gmail.com";
    var phone = "+251 918 006 053";
    var linkedin = "https://www.linkedin.com/in/menelik7";
    var github = "https://github.com/Menelik2";

    if (/email|e-mail|mail|contact|reach|phone|call|linkedin|github|ኢሜይል|ስልክ|አድራሻ|ማግኘት|ኢሜል/.test(q + raw)) {
      if (isAm) {
        return (
          "መነሊክን ማግኘት የሚችሉበት:\n📧 ኢሜይል: " +
          email +
          "\n☎ ስልክ: " +
          phone +
          " / +251 977 832 379\n🔗 LinkedIn: " +
          linkedin +
          "\n⌥ GitHub: " +
          github +
          "\n📍 ቦታ: ባሕር ዳር፣ ኢትዮጵያ"
        );
      }
      return (
        "You can reach Menelik at:\n📧 Email: " +
        email +
        "\n☎ Phone: " +
        phone +
        " / +251 977 832 379\n🔗 LinkedIn: " +
        linkedin +
        "\n⌥ GitHub: " +
        github +
        "\n📍 Bahir Dar, Ethiopia"
      );
    }

    if (/project|portfolio|demo|app|yen|cv|movie|typing|exam|ፕሮጀክት/.test(q + raw)) {
      if (isAm) {
        return (
          "ዋና ፕሮጀክቶች:\n• Yeni Pro CV → https://procv.is-cool.dev\n• Yeni Movie → https://yeni-movie.vercel.app\n• Yeni Typing → https://fidel.is-local.dev\n• Yeni Exam → https://yeniexams.vercel.app/\n• ይህ Windows XP / Android style ፖርትፎሊዮ"
        );
      }
      return (
        "Featured projects:\n• Yeni Pro CV → https://procv.is-cool.dev\n• Yeni Movie → https://yeni-movie.vercel.app\n• Yeni Typing → https://fidel.is-local.dev\n• Yeni Exam → https://yeniexams.vercel.app/\n• This XP / Android-style portfolio site"
      );
    }

    if (/experience|work|job|trainer|career|ስራ|ልምድ|አሰልጣኝ/.test(q + raw)) {
      if (isAm) {
        return (
          "መነሊክ ወደ ~10 ዓመት የስራ ልምድ አለው:\n• አሰልጣኝ — Dejen TVET College (2004–2012)\n• አሰልጣኝ — Debre Elias TVET College (2012–2014)\nትኩረት: system administration, networking, technical training።"
        );
      }
      return (
        "Menelik has about 10 years of experience:\n• Trainer — Dejen TVET College (2004–2012)\n• Trainer — Debre Elias TVET College (2012–2014)\nFocus: system administration, networking, and technical training."
      );
    }

    if (/education|degree|university|study|bsc|ትምህርት|ዩኒቨርሲቲ|ዲግሪ/.test(q + raw)) {
      if (isAm) {
        return (
          "ትምህርት:\n• BSc Computer Science — Bahir Dar University (2022–2026)\n• Computer Hardware & Networking — Bahir Dar Poly Technical College (2002–2004)"
        );
      }
      return (
        "Education:\n• BSc Computer Science — Bahir Dar University (2022–2026, completed)\n• Computer Hardware & Networking — Bahir Dar Poly Technical College (2002–2004)"
      );
    }

    if (/skill|stack|tech|language|ክህሎት|ቴክኖሎጂ/.test(q + raw)) {
      if (isAm) {
        return "ክህሎቶች: HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, technical training።";
      }
      return "Skills include HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, and technical training.";
    }

    if (/who|about|menelik|name|ማን|ስለ|መነሊክ|introduce|profile|hi|hello|ሰላም|ጤና/.test(q + raw)) {
      if (isAm) {
        return (
          "መነሊክ አድማሱ Full-Stack App Developer፣ Computer Administrator እና Technical Trainer ነው። በባሕር ዳር፣ ኢትዮጵያ ይገኛል። BSc Computer Science (Bahir Dar University) አለው፣ እና ~10 ዓመት የ IT / training ልምድ።\n\nኢሜይል: " +
          email
        );
      }
      return (
        "Menelik Admasu is a Full-Stack App Developer, Computer Administrator, and Technical Trainer based in Bahir Dar, Ethiopia. He holds a BSc in Computer Science from Bahir Dar University and about 10 years of IT / training experience.\n\nEmail: " +
        email
      );
    }

    if (isAm) {
      return (
        "ስለ መነሊክ፣ ፕሮጀክቶቹ፣ ስራው፣ ትምህርቱ ወይም አድራሻው መጠየቅ ይችላሉ።\nለምሳሌ: «ፕሮጀክቶቹ ምንድን ናቸው?» ወይም «ኢሜይል ምንድን ነው?»\n\nቀጥታ ኢሜይል: " +
        email
      );
    }
    return (
      "You can ask about Menelik's background, projects, experience, education, skills, or contact details.\nExamples: “What projects has he built?” or “How do I email him?”\n\nDirect email: " +
      email
    );
  }

  async function callAPI(userMessage) {
    var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer =
      controller &&
      setTimeout(function () {
        try {
          controller.abort();
        } catch (_) {}
      }, 12000);

    try {
      var res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message: userMessage }),
        signal: controller ? controller.signal : undefined,
      });
      if (timer) clearTimeout(timer);
      var data = {};
      try {
        data = await res.json();
      } catch (_) {
        data = {};
      }
      if (res.ok && data && data.reply) return String(data.reply);
      // Non-OK or empty → local
      return localAnswer(userMessage);
    } catch (err) {
      if (timer) clearTimeout(timer);
      return localAnswer(userMessage);
    }
  }

  window.mountPortfolioChat = function mountPortfolioChat(container) {
    if (!container) return null;
    // Always rebuild clean UI in this container
    container.innerHTML = "";
    container.dataset.chatMounted = "1";

    var root = document.createElement("div");
    root.className = "chat-app";
    root.innerHTML =
      '<div class="chat-app-header">' +
      '  <div class="chat-app-title"><span class="chat-app-orb">💬</span> ረዳት · Assistant</div>' +
      '  <a class="chat-app-email" href="mailto:linuxos777@gmail.com">linuxos777@gmail.com</a>' +
      "</div>" +
      '<div class="chat-app-messages" role="log" aria-live="polite">' +
      '  <div class="message bot">ጤና ይስጥልኝ! 👋 የ Menelik Admasu ፖርትፎሊዮ ረዳት ነኝ። ስለ እሱ፣ ስራው፣ ፕሮጀክቶቹ ወይም እንዴት ማግኘት እንደሚችሉ ይጠይቁኝ።\n\nHi! I\'m Menelik\'s portfolio assistant. Ask about his work, projects, or how to reach him.\n\nContact: linuxos777@gmail.com</div>' +
      "</div>" +
      '<div class="chat-app-input">' +
      '  <input type="text" class="chat-app-field" placeholder="መልእክትዎን ይጻፉ... / Type a message..." autocomplete="off" enterkeyhint="send" />' +
      '  <button type="button" class="chat-app-send">ላክ</button>' +
      "</div>";

    container.appendChild(root);

    var messages = root.querySelector(".chat-app-messages");
    var input = root.querySelector(".chat-app-field");
    var sendBtn = root.querySelector(".chat-app-send");
    var inFlight = false;

    function addMessage(text, sender) {
      var div = document.createElement("div");
      div.className = "message " + sender;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function showTyping() {
      var div = document.createElement("div");
      div.className = "message bot";
      div.dataset.typing = "1";
      div.innerHTML =
        '<div class="typing-dots"><span></span><span></span><span></span></div>';
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function sendMessage() {
      if (inFlight) return;
      var text = (input.value || "").trim();
      if (!text) return;

      inFlight = true;
      addMessage(text, "user");
      input.value = "";
      sendBtn.disabled = true;
      input.disabled = true;

      var typing = showTyping();

      callAPI(text)
        .then(function (reply) {
          if (typing && typing.parentNode) typing.remove();
          addMessage(reply || localAnswer(text), "bot");
        })
        .catch(function () {
          if (typing && typing.parentNode) typing.remove();
          addMessage(localAnswer(text), "bot");
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

    // Quick suggestion chips
    var chips = document.createElement("div");
    chips.className = "chat-app-chips";
    chips.innerHTML =
      '<button type="button" data-q="Who is Menelik?">About</button>' +
      '<button type="button" data-q="What projects has he built?">Projects</button>' +
      '<button type="button" data-q="How can I contact him?">Contact</button>' +
      '<button type="button" data-q="መነሊክ ማን ነው?">ስለ እሱ</button>';
    messages.parentNode.insertBefore(chips, messages.nextSibling);
    chips.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-q]");
      if (!btn) return;
      input.value = btn.getAttribute("data-q");
      sendMessage();
    });

    setTimeout(function () {
      try {
        input.focus();
      } catch (_) {}
    }, 150);

    return root;
  };
})();
