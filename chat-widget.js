/**
 * Portfolio mini chat widget (Amharic UI) → /api/chat (Gemini)
 */
(function () {
  if (window.__menelikChatBound) return;
  window.__menelikChatBound = true;

  const CSS = `
#chat-widget{position:fixed;bottom:20px;right:20px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;font-family:'Segoe UI',Tahoma,system-ui,sans-serif}
#chat-widget *{box-sizing:border-box}
.chat-toggle-btn{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border:none;font-size:24px;cursor:pointer;box-shadow:0 8px 25px rgba(79,70,229,.4);display:flex;align-items:center;justify-content:center;transition:transform .2s}
.chat-toggle-btn:hover{transform:scale(1.05)}
.chat-toggle-btn .close-icon{display:none}
.chat-toggle-btn.active .open-icon{display:none}
.chat-toggle-btn.active .close-icon{display:block}
.chat-box{width:min(360px,calc(100vw - 24px));height:min(480px,70vh);background:#fff;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.25);display:none;flex-direction:column;overflow:hidden;margin-bottom:12px;border:1px solid rgba(0,0,0,.06)}
.chat-box.open{display:flex;animation:chatSlideUp .28s ease}
@keyframes chatSlideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.chat-header{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}
.chat-header h3{font-size:15px;font-weight:600;margin:0}
.chat-header span{font-size:11px;opacity:.9;background:rgba(255,255,255,.2);padding:2px 10px;border-radius:20px}
.chat-messages{flex:1;padding:14px;overflow-y:auto;background:#f8fafc;display:flex;flex-direction:column;gap:10px;-webkit-overflow-scrolling:touch}
.chat-messages::-webkit-scrollbar{width:4px}
.chat-messages::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}
.message{max-width:82%;padding:10px 14px;border-radius:16px;font-size:14px;line-height:1.5;word-wrap:break-word;white-space:pre-wrap}
.message.user{align-self:flex-end;background:#4f46e5;color:#fff;border-bottom-right-radius:4px}
.message.bot{align-self:flex-start;background:#fff;color:#1e293b;border:1px solid #e2e8f0;border-bottom-left-radius:4px}
.message .typing-dots{display:inline-flex;gap:4px}
.message .typing-dots span{width:7px;height:7px;background:#94a3b8;border-radius:50%;display:inline-block;animation:chatDot 1.2s infinite ease-in-out}
.message .typing-dots span:nth-child(2){animation-delay:.2s}
.message .typing-dots span:nth-child(3){animation-delay:.4s}
@keyframes chatDot{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
.chat-input-area{padding:10px 12px;background:#fff;border-top:1px solid #e2e8f0;display:flex;gap:8px;align-items:center}
.chat-input-area input{flex:1;padding:10px 14px;border:1px solid #e2e8f0;border-radius:30px;outline:none;font-size:14px;min-width:0}
.chat-input-area input:focus{border-color:#4f46e5;box-shadow:0 0 0 3px rgba(79,70,229,.15)}
.chat-input-area button{background:#4f46e5;color:#fff;border:none;border-radius:30px;padding:10px 16px;font-weight:600;font-size:14px;cursor:pointer;white-space:nowrap}
.chat-input-area button:disabled{opacity:.5;cursor:not-allowed}
@media (max-width:480px){
  #chat-widget{bottom:0;right:0}
  .chat-box{width:100vw;height:100dvh;max-height:100dvh;border-radius:0;margin:0;position:fixed;inset:0}
  .chat-toggle-btn{margin:16px;position:relative;z-index:2}
  .chat-box.open ~ .chat-toggle-btn, .chat-toggle-btn.active{position:fixed;bottom:16px;right:16px}
}
@media (min-width:900px){
  #chat-widget{bottom:48px;right:16px}
}
`;

  function inject() {
    if (document.getElementById("chat-widget")) return;

    const style = document.createElement("style");
    style.id = "chat-widget-style";
    style.textContent = CSS;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.id = "chat-widget";
    root.innerHTML =
      '<div class="chat-box" id="chatBox" role="dialog" aria-label="Chat assistant">' +
      '  <div class="chat-header"><h3>🤖 ረዳት</h3><span>ኦንላይን</span></div>' +
      '  <div class="chat-messages" id="chatMessages">' +
      '    <div class="message bot">ጤና ይስጥልኝ! 👋 የ Menelik Admasu ፖርትፎሊዮ ረዳት ነኝ። ስለ እሱ፣ ስራው፣ ፕሮጀክቶቹ ወይም እንዴት ማግኘት እንደሚችሉ ይጠይቁኝ።

Hi! I'm Menelik's portfolio assistant. Ask about his work, projects, or how to reach him.</div>' +
      "  </div>" +
      '  <div class="chat-input-area">' +
      '    <input type="text" id="chatInput" placeholder="መልእክትዎን ይጻፉ..." autocomplete="off" />' +
      '    <button type="button" id="sendBtn">ላክ</button>' +
      "  </div>" +
      "</div>" +
      '<button type="button" class="chat-toggle-btn" id="toggleBtn" aria-label="Open chat">' +
      '  <span class="open-icon">💬</span><span class="close-icon">✕</span>' +
      "</button>";
    document.body.appendChild(root);

    const toggleBtn = document.getElementById("toggleBtn");
    const chatBox = document.getElementById("chatBox");
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    toggleBtn.addEventListener("click", () => {
      chatBox.classList.toggle("open");
      toggleBtn.classList.toggle("active");
      if (chatBox.classList.contains("open")) chatInput.focus();
    });

    function addMessage(text, sender) {
      const div = document.createElement("div");
      div.className = "message " + sender;
      div.textContent = text;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
      const div = document.createElement("div");
      div.className = "message bot";
      div.id = "typing-" + Date.now();
      div.innerHTML =
        '<div class="typing-dots"><span></span><span></span><span></span></div>';
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      return div.id;
    }

    function removeTyping(id) {
      const el = document.getElementById(id);
      if (el) el.remove();
    }

    async function callAPI(userMessage) {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "API error " + res.status);
      }
      return data.reply || "ምላሽ አልተገኘም።";
    }

    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      addMessage(text, "user");
      chatInput.value = "";
      chatInput.focus();
      sendBtn.disabled = true;
      const typingId = showTyping();
      callAPI(text)
        .then((reply) => {
          removeTyping(typingId);
          addMessage(reply, "bot");
        })
        .catch((err) => {
          removeTyping(typingId);
          addMessage(
            "ይቅርታ፣ ቴክኒካል ችግር ተፈጥሯል። " +
              (err && err.message ? err.message : "እባክዎ እንደገና ይሞክሩ።"),
            "bot"
          );
          console.error("Chat API:", err);
        })
        .finally(() => {
          sendBtn.disabled = false;
        });
    }

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
