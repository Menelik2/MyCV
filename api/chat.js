/**
 * Portfolio chat API
 * 1) Tries Gemini (GEMINI_API_KEY env or valid AI Studio key)
 * 2) Falls back to local knowledge answers if Gemini fails
 *
 * Get a free key: https://aistudio.google.com/apikey  (starts with AIza...)
 * Set on Vercel: GEMINI_API_KEY
 */
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

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
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (_) {
      body = {};
    }
  }
  if (!body || typeof body !== "object") body = {};

  const message = String(body.message || body.text || "").trim();
  if (!message) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing message" }));
    return;
  }

  const apiKey = (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ""
  ).trim();

  // Try Gemini only with a key that looks like a Google AI Studio / API key
  const looksLikeApiKey =
    apiKey.startsWith("AIza") ||
    (apiKey.length > 20 && !apiKey.startsWith("AQ."));

  if (looksLikeApiKey) {
    try {
      const reply = await callGemini(apiKey, message);
      if (reply) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ reply, source: "gemini" }));
        return;
      }
    } catch (err) {
      console.error("[chat] Gemini failed:", err && err.message);
      // fall through to local
    }
  }

  // Local portfolio knowledge (always works)
  const local = localAnswer(message);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      reply: local,
      source: "local",
    })
  );
};

const SITE_KNOWLEDGE = `
You are the official assistant for Menelik Admasu's portfolio.
Answer in the user's language (Amharic or English). Be concise and accurate.
Facts:
- Menelik Admasu — Full-Stack App Developer, Computer Administrator, Technical Trainer, Bahir Dar, Ethiopia
- BSc Computer Science, Bahir Dar University (2022–2026, completed)
- ~10 years experience: Dejen TVET (2004–2012), Debre Elias TVET (2012–2014)
- Skills: HTML, CSS, JS, Python, Java, Git, SQL, networking, system admin, cybersecurity, training
- Projects: Yeni Pro CV (procv.is-cool.dev), Yeni Movie (yeni-movie.vercel.app), Yeni Typing (fidel.is-local.dev), Yeni Exam (yeniexams.vercel.app)
- Contact: linuxos777@gmail.com · +251 918 006 053 · GitHub @Menelik2 · LinkedIn menelik7
`.trim();

async function callGemini(apiKey, message) {
  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
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
      contents: [{ role: "user", parts: [{ text: message }] }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
    }),
  });

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const msg =
      (data && data.error && data.error.message) ||
      "Gemini error " + upstream.status;
    throw new Error(msg);
  }
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

function localAnswer(raw) {
  const q = raw.toLowerCase();
  const isAm =
    /[\u1200-\u137F]/.test(raw) ||
    /ማን|ስራ|ፕሮጀክት|ኢሜይል|ስልክ|ትምህርት|ክህሎት|አድራሻ|ሰላም|ጤና/.test(raw);

  const email = "linuxos777@gmail.com";
  const phone = "+251 918 006 053";
  const linkedin = "https://www.linkedin.com/in/menelik7";
  const github = "https://github.com/Menelik2";

  // Contact
  if (
    /email|e-mail|mail|contact|reach|phone|call|linkedin|github|ኢሜይል|ስልክ|አድራሻ|ማግኘት|contact/.test(
      q
    ) ||
    /ኢሜል|ሊንክድ|ጂትሃብ/.test(raw)
  ) {
    if (isAm) {
      return (
        "መነሊክን ማግኘት የሚችሉበት:\n" +
        "📧 ኢሜይል: " +
        email +
        "\n" +
        "☎ ስልክ: " +
        phone +
        " / +251 977 832 379\n" +
        "🔗 LinkedIn: " +
        linkedin +
        "\n" +
        "⌥ GitHub: " +
        github +
        "\n" +
        "📍 ቦታ: ባሕር ዳር፣ ኢትዮጵያ"
      );
    }
    return (
      "You can reach Menelik at:\n" +
      "📧 Email: " +
      email +
      "\n" +
      "☎ Phone: " +
      phone +
      " / +251 977 832 379\n" +
      "🔗 LinkedIn: " +
      linkedin +
      "\n" +
      "⌥ GitHub: " +
      github +
      "\n" +
      "📍 Bahir Dar, Ethiopia"
    );
  }

  // Projects
  if (/project|portfolio|demo|app|yen|cv|movie|typing|exam|ፕሮጀክት|ስራዎቹ/.test(q)) {
    if (isAm) {
      return (
        "ዋና ፕሮጀክቶች:\n" +
        "• Yeni Pro CV — Resume builder → https://procv.is-cool.dev\n" +
        "• Yeni Movie — Movies & TV → https://yeni-movie.vercel.app\n" +
        "• Yeni Typing — Typing tutor → https://fidel.is-local.dev\n" +
        "• Yeni Exam — Exit exam practice → https://yeniexams.vercel.app/\n" +
        "• ይህ Windows XP / Android style ፖርትፎሊዮ ጣቢያ"
      );
    }
    return (
      "Featured projects:\n" +
      "• Yeni Pro CV — Resume builder → https://procv.is-cool.dev\n" +
      "• Yeni Movie — Movies & TV → https://yeni-movie.vercel.app\n" +
      "• Yeni Typing — Typing tutor → https://fidel.is-local.dev\n" +
      "• Yeni Exam — Exit exam practice → https://yeniexams.vercel.app/\n" +
      "• This XP / Android-style portfolio site"
    );
  }

  // Experience / work
  if (/experience|work|job|trainer|tv et|career|ስራ|ልምድ|አሰልጣኝ/.test(q)) {
    if (isAm) {
      return (
        "መነሊክ ወደ ~10 ዓመት የስራ ልምድ አለው:\n" +
        "• አሰልጣኝ — Dejen TVET College (2004–2012)\n" +
        "• አሰልጣኝ — Debre Elias TVET College (2012–2014)\n" +
        "ትኩረት: system administration, networking, technical training።"
      );
    }
    return (
      "Menelik has about 10 years of experience:\n" +
      "• Trainer — Dejen TVET College (2004–2012)\n" +
      "• Trainer — Debre Elias TVET College (2012–2014)\n" +
      "Focus: system administration, networking, and technical training."
    );
  }

  // Education
  if (/education|degree|university|study|bsc|ትምህርት|ዩኒቨርሲቲ|ዲግሪ/.test(q)) {
    if (isAm) {
      return (
        "ትምህርት:\n" +
        "• BSc Computer Science — Bahir Dar University (2022–2026, ተጠናቋል)\n" +
        "• Computer Hardware & Networking — Bahir Dar Poly Technical College (2002–2004)\n" +
        "• ተጨማሪ ስልጠናዎች እና COC / cybersecurity certificates"
      );
    }
    return (
      "Education:\n" +
      "• BSc Computer Science — Bahir Dar University (2022–2026, completed)\n" +
      "• Computer Hardware & Networking — Bahir Dar Poly Technical College (2002–2004)\n" +
      "• Additional COC and cybersecurity certifications"
    );
  }

  // Skills
  if (/skill|stack|tech|language|ክህሎት|ቴክኖሎጂ/.test(q)) {
    if (isAm) {
      return (
        "ክህሎቶች: HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, technical training, UI/UX።"
      );
    }
    return (
      "Skills include HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, cybersecurity, technical training, and UI/UX."
    );
  }

  // Who is
  if (
    /who|about|menelik|name|ማን|ስለ|መነሊክ|introduce|profile/.test(q) ||
    raw.length < 20
  ) {
    if (isAm) {
      return (
        "መነሊክ አድማሱ Full-Stack App Developer፣ Computer Administrator እና Technical Trainer ነው። " +
        "በባሕር ዳር፣ ኢትዮጵያ ይገኛል። BSc Computer Science (Bahir Dar University) አለው፣ እና ~10 ዓመት የ IT / training ልምድ።\n\n" +
        "ለተጨማሪ: " +
        email
      );
    }
    return (
      "Menelik Admasu is a Full-Stack App Developer, Computer Administrator, and Technical Trainer based in Bahir Dar, Ethiopia. " +
      "He holds a BSc in Computer Science from Bahir Dar University and about 10 years of IT / training experience.\n\n" +
      "Contact: " +
      email
    );
  }

  // Default
  if (isAm) {
    return (
      "ስለ መነሊክ፣ ፕሮጀክቶቹ፣ ስራው፣ ትምህርቱ ወይም አድራሻው መጠየቅ ይችላሉ።\n" +
      "ለምሳሌ: «ፕሮጀክቶቹ ምንድን ናቸው?» ወይም «ኢሜይል ምንድን ነው?»\n\n" +
      "ቀጥታ ኢሜይል: " +
      email
    );
  }
  return (
    "You can ask about Menelik's background, projects, experience, education, skills, or contact details.\n" +
    "Examples: “What projects has he built?” or “How do I email him?”\n\n" +
    "Direct email: " +
    email
  );
}
