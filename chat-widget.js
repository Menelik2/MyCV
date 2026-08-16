/**
 * Portfolio Chat — mountable app UI (desktop window / mobile page)
 * Uses /api/chat (local knowledge + optional Gemini)
 */
(function () {
  window.mountPortfolioChat = function mountPortfolioChat(container, opts) {
    opts = opts || {};
    if (!container) return null;
    if (container.dataset.chatMounted === "1") return container;

    const root = document.createElement("div");
    root.className = "chat-app";
    root.innerHTML =
      '<div class="chat-app-header">' +
      "  <div class=\"chat-app-title\"><span class=\"chat-app-orb\">💬</span> ረዳት · Assistant</div>" +
      '  <a class="chat-app-email" href="mailto:linuxos777@gmail.com">linuxos777@gmail.com</a>' +
      "</div>" +
      '<div class="chat-app-messages" role="log" aria-live="polite">' +
      '  <div class="message bot">ጤና ይስጥልኝ! 👋 የ Menelik Admasu ፖርትፎሊዮ ረዳት ነኝ። ስለ እሱ፣ ስራው፣ ፕሮጀክቶቹ ወይም እንዴት ማግኘት እንደሚችሉ ይጠይቁኝ።\n\n' +
      "Hi! I'm Menelik's portfolio assistant. Ask about his work, projects, or how to reach him.\n\n" +
      "Contact: linuxos777@gmail.com</div>" +
      "</div>" +
      '<div class="chat-app-input">' +
      '  <input type="text" class="chat-app-field" placeholder="መልእክትዎን ይጻፉ... / Type a message..." autocomplete="off" />' +
      '  <button type="button" class="chat-app-send">ላክ</button>' +
      "</div>";

    container.appendChild(root);
    container.dataset.chatMounted = "1";

    const messages = root.querySelector(".chat-app-messages");
    const input = root.querySelector(".chat-app-field");
    const sendBtn = root.querySelector(".chat-app-send");

    function addMessage(text, sender) {
      const div = document.createElement("div");
      div.className = "message " + sender;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
      const div = document.createElement("div");
      div.className = "message bot";
      div.dataset.typing = "1";
      div.innerHTML =
        '<div class="typing-dots"><span></span><span></span><span></span></div>';
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    async function callAPI(userMessage) {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json().catch(function () {
        return {};
      });
      if (!res.ok) throw new Error(data.error || "API error " + res.status);
      return data.reply || "ምላሽ አልተገኘም።";
    }

    function sendMessage() {
      const text = (input.value || "").trim();
      if (!text) return;
      addMessage(text, "user");
      input.value = "";
      input.focus();
      sendBtn.disabled = true;
      const typing = showTyping();
      callAPI(text)
        .then(function (reply) {
          typing.remove();
          addMessage(reply, "bot");
        })
        .catch(function (err) {
          typing.remove();
          addMessage(
            "ይቅርታ፣ ችግር ተፈጥሯል። / Sorry, something went wrong. " +
              (err && err.message ? err.message : ""),
            "bot"
          );
        })
        .finally(function () {
          sendBtn.disabled = false;
        });
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });

    setTimeout(function () {
      try {
        input.focus();
      } catch (_) {}
    }, 200);

    return root;
  };

  // No floating FAB — chat is a regular app like Sudoku
})();
