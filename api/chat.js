/**
 * Portfolio chat — full site knowledge + Gemini + smart local answers
 */
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let body = req.body;
  async function readRaw() {
    if (body != null) return body;
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString("utf8");
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch (_) {
      return {};
    }
  }
  body = await readRaw();
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (_) {
      body = {};
    }
  }
  if (!body || typeof body !== "object") body = {};

  const message = String(body.message || body.text || "").trim();
  const prior = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  if (!message) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing message" }));
    return;
  }

  // Accept classic AIza… and newer AQ.… Google AI keys (no AIza-only regex)
  const KEY_RE = /^(AIza|AQ\.)[a-zA-Z0-9_.-]+$/;
  const rawKey = (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ""
  ).trim();
  const apiKey = KEY_RE.test(rawKey) ? rawKey : "";

  if (apiKey) {
    try {
      const reply = await callGemini(apiKey, message, prior);
      if (reply) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ reply, source: "gemini" }));
        return;
      }
    } catch (err) {
      console.error("[chat] Gemini:", err && err.message ? err.message : err);
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      reply: localAnswer(message),
      source: "local",
      geminiConfigured: Boolean(apiKey),
    })
  );
};

const SITE_KNOWLEDGE = `You are the official assistant for ምኒልክ አድማሱ (Menelik Admasu) on his Menelik OS portfolio website.
Answer any visitor question using the facts below. Match the user's language (Amharic or English).
Be friendly, accurate, and concise. If a detail is not listed here, say you do not have that information and offer email or LinkedIn instead.

=== IDENTITY ===
- Full name (English): Menelik Admasu
- Full name (Amharic): ምኒልክ አድማሱ
- Roles: Full-Stack Application Developer · IT Administrator · Hardware & Networking · Technical Trainer
- Location: Bahir Dar, Ethiopia
- About: Detail-oriented IT Administrator who keeps systems running smoothly. Full-stack application developer building complete applications from UI and back-end logic to APIs and deployment. Level 4 Hardware and Networking Technology. Enjoys building practical tools including this portfolio.
- Languages: Amharic — professional working proficiency; English — professional working proficiency
- Volunteer: Trains communities and organizations on how to use technology effectively

=== EDUCATION (all completed) ===
1. Bahir Dar University — Bachelor of Science in Computer Science (2022–2026, completed)
   Coursework: programming, data structures, algorithms, databases, software engineering, computer networks, web technologies, operating systems, OOP, web development
2. Bahir Dar Poly Technical College — Computer Hardware & Networking Technology (2002–2004, GPA 3.45)
3. Debre Markos Poly College — Computer Hardware & Networking Service (2007)

=== EXPERIENCE (~10 years total) ===
1. Trainer — Dejen TVET College (2004–2012): trained students in computer skills, supported IT operations, maintained lab systems
2. Trainer — Debre Elias TVET College (2012–2014): technical training and computer administration
Focus: system administration, networking, multi-platform support, technical training (governmental TVET colleges)

=== CERTIFICATIONS & AWARDS ===
- Computer Hardware and Networking Technology Level IV
- National Qualifications Certificates (COC) — Certificate of Competence
- Certificate in Computer Cybersecurity
- Best Worker of the Year (2010) — Dejen TVET College

=== SKILLS ===
Soft: problem solving, team collaboration, communication, learning & adapting
Technical: HTML, CSS, JavaScript, Python, Java, Git & GitHub, SQL, responsive design, website design, video editing, computer networking, cybersecurity, hardware maintenance, system administration, technical training, coding
Interests: full-stack web/app development, UI/UX and interactive interfaces, networking and maintenance, cybersecurity, learning new technologies, reading

=== PROJECTS ===
1. Yeni Pro CV — Resume Builder (Live: https://procv.is-cool.dev)
   Privacy-first ATS-friendly resume builder with live preview, multiple templates; data stays in the browser
2. Yeni Movie (Live: https://yeni-movie.vercel.app)
   Movies & TV discovery with trailers, ratings, cast, search
3. Yeni Typing Learning (Live: https://fidel.is-local.dev)
   Typing tutor with live WPM, accuracy, timed practice
4. Yeni Exam — Exit Exam Generator (Live: https://yeniexams.vercel.app/)
   Topic-driven exit-exam style practice questions
5. BDU Internship Management System — university project (demo coming soon)
6. Windows XP Portfolio / Menelik OS (this site: https://menelik.webhop.me)
   Interactive XP desktop + Android-style phone shell with apps: About, Education, Experience, Projects, Skills, Contact, Resume, Notepad, Paint, Terminal, Sudoku, Tetris, Settings/Control Panel, Chats assistant, Device Inspector, etc.

=== CONTACT ===
- Email: linuxos777@gmail.com
- Phone: +251 918 006 053 and +251 977 832 379
- GitHub: https://github.com/Menelik2 (@Menelik2)
- LinkedIn: https://www.linkedin.com/in/menelik7
- Location: Bahir Dar, Ethiopia
- Contact form on the site sends via Formspree; auto-reply confirms receipt

=== THIS WEBSITE (Menelik OS) ===
- Desktop: Windows XP-style UI (icons, Start menu, windows, taskbar)
- Phone: Android-style shell with app grid and navigation gestures
- Theme: light/dark and wallpapers via Control Panel / Settings
- Resume downloadable as PDF
- Chat app: this assistant
- Boot screen: Click the button to enter (fullscreen)

=== HOW TO ANSWER ===
- Use only the facts above; do not invent employers, degrees, or URLs
- For hiring or collaboration: highlight relevant skills and projects, then point to email or LinkedIn
- If asked what you can do: explain that you answer questions about ምኒልክ and can help with portfolio topics
- Amharic name spelling: always use ምኒልክ (never መነሊክ)
`;

async function callGemini(apiKey, message, prior) {
  const preferred = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const models = [preferred, "gemini-2.0-flash", "gemini-flash-latest", "gemini-1.5-flash", "gemini-1.5-flash-latest"];
  const seen = new Set();
  let lastErr = null;
  for (const model of models) {
    if (seen.has(model)) continue;
    seen.add(model);
    try {
      const text = await generateWithModel(apiKey, model, message, prior);
      if (text) return text;
    } catch (e) {
      lastErr = e;
    }
  }
  if (lastErr) throw lastErr;
  return null;
}

function buildGeminiContents(prior, message) {
  const out = [];
  if (Array.isArray(prior)) {
    for (const m of prior) {
      if (!m || !m.content) continue;
      const role = m.role === "assistant" || m.role === "model" ? "model" : "user";
      out.push({ role, parts: [{ text: String(m.content) }] });
    }
  }
  const last = out[out.length - 1];
  if (!last || last.role !== "user" || last.parts[0].text !== message) {
    out.push({ role: "user", parts: [{ text: message }] });
  }
  return out.length ? out : [{ role: "user", parts: [{ text: message }] }];
}

async function generateWithModel(apiKey, model, message, prior) {
  // Native Gemini endpoint only (not OpenAI-compatible / Bearer)
  const base =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    encodeURIComponent(model) +
    ":generateContent";

  const payload = {
    systemInstruction: { parts: [{ text: SITE_KNOWLEDGE }] },
    contents: buildGeminiContents(prior, message),
    generationConfig: { temperature: 0.45, maxOutputTokens: 1200, topP: 0.9 },
  };

  // 1) Header X-goog-api-key (works for AIza and AQ. formats)
  // 2) Fallback: ?key= query on same native endpoint
  const attempts = [
    {
      url: base,
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
    },
    {
      url: base + "?key=" + encodeURIComponent(apiKey),
      headers: { "Content-Type": "application/json" },
    },
  ];

  let lastErr = null;
  for (const attempt of attempts) {
    const upstream = await fetch(attempt.url, {
      method: "POST",
      headers: attempt.headers,
      body: JSON.stringify(payload),
    });
    const data = await upstream.json().catch(() => ({}));
    if (upstream.ok) {
      const parts = data?.candidates?.[0]?.content?.parts;
      if (!parts || !parts.length) continue;
      return parts.map((p) => p.text || "").join("").trim();
    }
    const msg =
      (data && data.error && data.error.message) ||
      "Gemini HTTP " + upstream.status;
    lastErr = new Error(msg);
    lastErr.status = upstream.status;
    // Try next auth style on 401/403
    if (upstream.status !== 401 && upstream.status !== 403) break;
  }
  if (lastErr) throw lastErr;
  return null;
}

function localAnswer(raw) {
  const text = String(raw || "");
  const q = text.toLowerCase();
  const isAm = /[\u1200-\u137F]/.test(text);
  const email = "linuxos777@gmail.com";
  const phone = "+251 918 006 053";
  const phone2 = "+251 977 832 379";
  const linkedin = "https://www.linkedin.com/in/menelik7";
  const github = "https://github.com/Menelik2";
  const site = "https://menelik.webhop.me";

  const checks = [
    {
      keys: /email|e-mail|mail|contact|reach|phone|call|linkedin|github|hire|collaborat|ኢሜይል|ስልክ|አድራሻ|ማግኘት|ኢሜል|ቅጥር/,
      en:
        "Contact ምኒልክ (Menelik Admasu):\n📧 " +
        email +
        "\n☎ " +
        phone +
        " · " +
        phone2 +
        "\n🔗 LinkedIn: " +
        linkedin +
        "\n⌥ GitHub: " +
        github +
        "\n📍 Bahir Dar, Ethiopia\n🌐 " +
        site +
        "\nYou can also use the Contact form on this site.",
      am:
        "ምኒልክ አድማሱን ማግኘት:\n📧 " +
        email +
        "\n☎ " +
        phone +
        " · " +
        phone2 +
        "\n🔗 LinkedIn: " +
        linkedin +
        "\n⌥ GitHub: " +
        github +
        "\n📍 ባሕር ዳር፣ ኢትዮጵያ\n🌐 " +
        site +
        "\nበጣቢያው Contact ቅጽም መላክ ይችላሉ።",
    },
    {
      keys: /project|yen|cv|movie|typing|exam|internship|portfolio site|demo|ፕሮጀክት|የኒ/,
      en:
        "Featured projects:\n• Yeni Pro CV — ATS resume builder → https://procv.is-cool.dev\n• Yeni Movie — movies & TV → https://yeni-movie.vercel.app\n• Yeni Typing — typing tutor → https://fidel.is-local.dev\n• Yeni Exam — exit exam practice → https://yeniexams.vercel.app/\n• BDU Internship Management System (demo soon)\n• Menelik OS / XP portfolio — this site (" +
        site +
        ")",
      am:
        "ዋና ፕሮጀክቶች:\n• Yeni Pro CV — የሪዝዩም ገንቢ → https://procv.is-cool.dev\n• Yeni Movie → https://yeni-movie.vercel.app\n• Yeni Typing → https://fidel.is-local.dev\n• Yeni Exam → https://yeniexams.vercel.app/\n• BDU Internship Management (በቅርቡ)\n• Menelik OS ፖርትፎሊዮ — ይህ ጣቢያ",
    },
    {
      keys: /experience|work|job|trainer|career|tv et|ደጀን|ስራ|ልምድ|አሰልጣኝ/,
      en:
        "About 10 years of experience:\n• Trainer — Dejen TVET College (2004–2012): teaching, IT ops, lab systems\n• Trainer — Debre Elias TVET College (2012–2014): training & computer administration\nFocus: system administration, networking, multi-platform support, technical training.",
      am:
        "ወደ 10 ዓመት የስራ ልምድ:\n• አሰልጣኝ — Dejen TVET College (2004–2012)\n• አሰልጣኝ — Debre Elias TVET College (2012–2014)\nትኩረት: system administration, networking, technical training።",
    },
    {
      keys: /education|degree|university|study|bsc|college|gpa|ትምህርት|ዩኒቨርሲቲ|ዲግሪ/,
      en:
        "Education (all completed):\n• BSc Computer Science — Bahir Dar University (2022–2026)\n  Coursework: DSA, OOP, databases, web, networks, OS, software engineering\n• Computer Hardware & Networking Technology — Bahir Dar Poly Technical College (2002–2004, GPA 3.45)\n• Computer Hardware & Networking Service — Debre Markos Poly College (2007)",
      am:
        "ትምህርት (ሁሉም ተጠናቅቋል):\n• BSc Computer Science — Bahir Dar University (2022–2026)\n• Computer Hardware & Networking — Bahir Dar Poly Technical College (2002–2004, GPA 3.45)\n• Computer Hardware & Networking Service — Debre Markos Poly College (2007)",
    },
    {
      keys: /certif|award|coc|cybersecurity certificate|best worker|ሰርተፍ|ሽልማት/,
      en:
        "Certifications & awards:\n• Computer Hardware and Networking Technology Level IV\n• National Qualifications Certificates (COC)\n• Certificate in Computer Cybersecurity\n• Best Worker of the Year (2010) — Dejen TVET College",
      am:
        "ሰርተፍኬቶችና ሽልማቶች:\n• Hardware & Networking Technology Level IV\n• COC (National Qualifications)\n• Computer Cybersecurity certificate\n• Best Worker of the Year (2010) — Dejen TVET",
    },
    {
      keys: /skill|stack|tech|html|python|javascript|strength|ክህሎት|ቴክኖሎጂ/,
      en:
        "Skills:\nSoft — problem solving, teamwork, communication, learning & adapting\nTechnical — HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, hardware, website design, video editing, technical training",
      am:
        "ክህሎቶች:\nSoft — problem solving, teamwork, communication\nTechnical — HTML, CSS, JS, Python, Java, Git, SQL, networking, system admin, cybersecurity, hardware, website design, training",
    },
    {
      keys: /language|amharic|english|ቋንቋ|አማርኛ|እንግሊዝኛ/,
      en: "Languages: Amharic — professional working proficiency; English — professional working proficiency.",
      am: "ቋንቋዎች: አማርኛ — professional working proficiency፤ እንግሊዝኛ — professional working proficiency።",
    },
    {
      keys: /volunteer|community|train communities|በጎ ፈቃድ/,
      en: "Volunteer work: trains communities and organizations in practical technology use.",
      am: "በጎ ፈቃድ: ማህበረሰቦችንና ድርጅቶችን በተግባራዊ ቴክኖሎጂ አጠቃቀም ያሰለጥናል።",
    },
    {
      keys: /who|about|menelik|name|profile|introduce|ምኒልክ|ማን ነው|ስለ እሱ|hi\b|hello|ሰላም|ጤና/,
      en:
        "ምኒልክ አድማሱ (Menelik Admasu) is a Full-Stack App Developer, Computer Administrator, and Technical Trainer based in Bahir Dar, Ethiopia. BSc Computer Science (Bahir Dar University, 2022–2026) and about 10 years of IT/training experience. Email: " +
        email,
      am:
        "ምኒልክ አድማሱ Full-Stack App Developer፣ Computer Administrator እና Technical Trainer ነው። ቦታው ባሕር ዳር፣ ኢትዮጵያ። BSc Computer Science (Bahir Dar University, 2022–2026) እና ወደ 10 ዓመት የ IT/training ልምድ አለው። ኢሜይል: " +
        email,
    },
    {
      keys: /site|website|this portfolio|menelik os|windows xp|android|sudoku|how (do|to) use|ጣቢያ|ፖርትፎሊዮ/,
      en:
        "This site is Menelik OS: a Windows XP-style desktop on large screens and an Android-style phone UI on mobile. Open apps from icons (About, Projects, Resume, Chats, Sudoku, Settings, …). Resume can be downloaded as PDF. Chat is this assistant.",
      am:
        "ይህ ጣቢያ Menelik OS ነው — በኮምፒውተር Windows XP-style፣ በስልክ Android-style። ከ icons Apps ይክፈቱ (About, Projects, Resume, Chats, …)። Resume እንደ PDF ማውረድ ይችላሉ።",
    },
  ];

  for (const c of checks) {
    if (c.keys.test(q) || c.keys.test(text)) return isAm ? c.am : c.en;
  }

  return isAm
    ? "ስለ ምኒልክ ማንኛውንም ጥያቄ መጠየቅ ይችላሉ — ስራ፣ ትምህርት፣ ፕሮጀክት፣ ክህሎት፣ ሰርተፍኬት፣ ወይም አድራሻ።\nለምሳሌ: «ፕሮጀክቶቹ ምንድን ናቸው?» «ትምህርቱ ምንድን ነው?»\n\nኢሜይል: " +
        email
    : "Ask anything about Menelik — work, education, projects, skills, certificates, or contact.\nExamples: “What projects has he built?” “What is his education?”\n\nEmail: " +
        email;
}
