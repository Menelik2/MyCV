/**
 * Portfolio chat — Gemini primary, local knowledge fallback
 *
 * Vercel env:
 *   GEMINI_API_KEY  — Google AI Studio key (starts with AIza…)
 *   GEMINI_MODEL    — optional, default gemini-2.0-flash
 *
 * Get a key: https://aistudio.google.com/apikey
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

  const apiKey = (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ""
  ).trim();

  // Try Gemini first when a key is configured
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
      // fall through to local — still return 200 so the UI stays smooth
    }
  }

  const local = localAnswer(message);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      reply: local,
      source: "local",
      geminiConfigured: Boolean(apiKey),
    })
  );
};

const SITE_KNOWLEDGE = `
You are the official assistant on Menelik Admasu's portfolio website.
Answer in the same language the user writes (Amharic or English). Be friendly, accurate, and concise.

Facts about Menelik Admasu:
- Full-Stack App Developer, Computer Administrator, Hardware & Networking, Technical Trainer
- Location: Bahir Dar, Ethiopia
- Education: BSc Computer Science, Bahir Dar University (2022–2026, completed)
- Earlier: Computer Hardware & Networking (Bahir Dar Poly Technical College, 2002–2004, GPA 3.45)
- Experience (~10 years): Trainer at Dejen TVET College (2004–2012); Trainer at Debre Elias TVET College (2012–2014)
- Skills: HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, technical training, UI/UX
- Projects:
  • Yeni Pro CV — https://procv.is-cool.dev
  • Yeni Movie — https://yeni-movie.vercel.app
  • Yeni Typing — https://fidel.is-local.dev
  • Yeni Exam — https://yeniexams.vercel.app/
  • This Windows XP / Android-style portfolio site
- Contact: linuxos777@gmail.com · +251 918 006 053 · +251 977 832 379
- GitHub: https://github.com/Menelik2 · LinkedIn: https://www.linkedin.com/in/menelik7

Rules:
- Prefer these facts. If unknown, say so and suggest email or LinkedIn.
- Do not invent employers, degrees, or URLs.
- You are the portfolio assistant, not Menelik himself.
`.trim();

async function callGemini(apiKey, message, prior) {
  const preferred = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const models = [
    preferred,
    "gemini-2.0-flash",
    "gemini-flash-latest",
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
  ];
  // unique preserve order
  const tried = new Set();
  const list = models.filter((m) => {
    if (tried.has(m)) return false;
    tried.add(m);
    return true;
  });

  let lastErr = null;
  for (const model of list) {
    try {
      const text = await generateWithModel(apiKey, model, message, prior);
      if (text) return text;
    } catch (e) {
      lastErr = e;
      // try next model
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
  // Ensure last is the current user message if not already duplicated
  const last = out[out.length - 1];
  if (!last || last.role !== "user" || last.parts[0].text !== message) {
    out.push({ role: "user", parts: [{ text: message }] });
  }
  return out.length ? out : [{ role: "user", parts: [{ text: message }] }];
}

async function generateWithModel(apiKey, model, message, prior) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    encodeURIComponent(model) +
    ":generateContent?key=" +
    encodeURIComponent(apiKey);

  const upstream = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SITE_KNOWLEDGE }] },
      contents: buildGeminiContents(prior, message),
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 1024,
        topP: 0.9,
      },
    }),
  });

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const msg =
      (data && data.error && data.error.message) ||
      "Gemini HTTP " + upstream.status;
    const err = new Error(msg);
    err.status = upstream.status;
    throw err;
  }

  const parts = data?.candidates?.[0]?.content?.parts;
  if (!parts || !parts.length) return null;
  return parts
    .map((p) => p.text || "")
    .join("")
    .trim();
}

function localAnswer(raw) {
  const q = String(raw || "").toLowerCase();
  const isAm = /[\u1200-\u137F]/.test(raw);
  const email = "linuxos777@gmail.com";
  const phone = "+251 918 006 053";
  const linkedin = "https://www.linkedin.com/in/menelik7";
  const github = "https://github.com/Menelik2";

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
