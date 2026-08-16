/**
 * Gemini chat proxy — answers using Menelik portfolio knowledge.
 * Set GEMINI_API_KEY in Vercel env for production.
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

  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    "AQ.Ab8RN6IuaGR70HRAKmBeWLB8BVJTgRhCWJd8EJ26FYQNMQgSng";

  const model = process.env.GEMINI_MODEL || "gemini-flash-latest";
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    model +
    ":generateContent";

  const SITE_KNOWLEDGE = `
You are the official assistant for Menelik Admasu's personal portfolio website (Menelik OS).
Your job is to help visitors learn about Menelik, his skills, experience, projects, and how to contact him.
Answer in the same language the user writes in (Amharic or English). Be friendly, clear, and concise.

=== ABOUT MENELIK ===
- Full name: Menelik Admasu
- Roles: Full-Stack App Developer · Computer Administrator · Hardware & Networking · Technical Trainer
- Location: Bahir Dar, Ethiopia
- Education: BSc Computer Science, Bahir Dar University (2022 – 2026, completed)
- Earlier training: Computer Hardware & Networking Technology (Bahir Dar Poly Technical College, 2002–2004, GPA 3.45); Computer Hardware & Networking Service (Debre Markos Poly College, 2007)
- Languages: Amharic (professional), English (professional)
- Volunteer: trains communities and organizations on effective technology use
- Interests: full-stack web/app development, UI/UX, networking, cybersecurity, learning new tech

=== WORK EXPERIENCE (about 10 years total) ===
- Trainer, Dejen TVET College (2004 – 2012): computer skills training, IT operations, lab systems
- Trainer, Debre Elias TVET College (2012 – 2014): technical training and computer administration
- Focus: system administration, networking, multi-platform support, technical training (TVET / governmental colleges)

=== CERTIFICATIONS & AWARDS ===
- Computer Hardware and Networking Technology Level IV
- National Qualifications Certificates (COC)
- Certificate in Computer Cybersecurity
- Best Worker of the Year (2010) — Dejen TVET College

=== SKILLS ===
Soft: problem solving, teamwork, communication, learning & adapting
Technical: HTML, CSS, JavaScript, Python, Java, Git, SQL, networking, system administration, website design, video editing, hardware maintenance, cybersecurity, technical training, coding

=== PROJECTS (featured on this site) ===
1) Yeni Pro CV — Resume Builder (Live: https://procv.is-cool.dev)
   Privacy-first ATS-friendly resume builder with live preview and templates; data stays in the browser.
2) Yeni Movie (Live: https://yeni-movie.vercel.app)
   Movies & TV discovery with trailers, ratings, cast, search.
3) Yeni Typing Learning (Live: https://fidel.is-local.dev)
   Typing tutor with WPM, accuracy, timed practice.
4) Yeni Exam — Exit Exam Generator (Live: https://yeniexams.vercel.app/)
   Topic-driven exit-exam style practice questions.
5) BDU Internship Management System (university project; demo soon)
   Internship lifecycle for Bahir Dar University.
6) Windows XP Portfolio — this site (https://menelik.webhop.me and related deploys)
   Interactive XP desktop + Android-style phone shell with apps (Notepad, Paint, Terminal, Sudoku, Tetris, Settings, etc.)

=== CONTACT ===
- Email: linuxos777@gmail.com
- Phone: +251 918 006 053 · +251 977 832 379
- GitHub: https://github.com/Menelik2
- LinkedIn: https://www.linkedin.com/in/menelik7
- Location: Bahir Dar, Ethiopia
- Contact form on the site uses Formspree

=== THIS WEBSITE ===
- Desktop view looks like Windows XP (icons, Start menu, windows)
- Phone view uses an Android-style shell with app grid and gestures
- Resume can be downloaded as PDF from the Resume app
- Chat widget is this assistant

=== RULES ===
- Prefer facts from the knowledge above. If asked something unknown, say you don't have that detail and suggest contacting Menelik by email or LinkedIn.
- Do not invent employers, degrees, or project URLs.
- Do not claim to be Menelik the person; you are his portfolio assistant.
- Keep answers reasonably short unless the user asks for detail.
- For job/collaboration interest, encourage email or LinkedIn and mention relevant skills/projects briefly.
`.trim();

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SITE_KNOWLEDGE }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 1024,
        },
      }),
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const errMsg =
        (data && data.error && data.error.message) ||
        "Gemini API request failed (" + upstream.status + ")";
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: errMsg }));
      return;
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "ምላሽ አልተገኘም። / No reply returned.";

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ reply }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: err && err.message ? err.message : "Server error",
      })
    );
  }
};
