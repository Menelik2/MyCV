/* ========== Content Data ========== */
const CONTENT = {
  about: {
    title: "About Me",
    iconClass: "about-icon",
    html: `
      <div class="profile-row">
        <div class="profile-pic" id="profile-pic"></div>
        <div>
          <h2 style="margin:0 0 6px;border:none;padding:0;">Menelik Admasu</h2>
          <p style="margin:0;color:#555;"><strong>BSc Computer Science</strong><br>Bahir Dar University<br>2022 – 2026</p>
        </div>
      </div>
      <p>Hello! I'm Menelik Admasu, a Computer Science student at Bahir Dar University with a passion for building clean, functional software and exploring modern web technologies.</p>
<p> My goal is to continue growing as a developer while building meaningful and useful technology </p>
      <p>I enjoy turning ideas into interactive experiences — from classic desktop UIs to polished mobile layouts. This portfolio itself is a playful tribute to Windows XP and the iPhone Pro Max.</p>
      <h3>Interests</h3>
      <ul>
        <li>Full-stack web development (HTML, CSS, JavaScript & beyond)</li>
        <li>UI/UX design and nostalgic interfaces</li>
        <li>Computer Networking & Maintenance </li>
        <li>Problem-solving and algorithms</li>
        <li>Open-source contributions</li>
      </ul>
      <h3>Languages</h3>
      <ul>
        <li>Amharic (native)</li>
        <li>English (professional)</li>
      </ul>
    `
  },
  education: {
    title: "Education",
    iconClass: "edu-icon",
    html: `
      <h2>Education</h2>
      <div class="project-card">
        <h4>Bahir Dar University</h4>
        <p style="margin:2px 0;color:#555;">Bachelor of Science in Computer Science</p>
        <p style="margin:2px 0;"><strong>2022 – 2026</strong></p>
        <p style="margin-top:8px;">Currently pursuing a BSc in Computer Science. Coursework covers programming fundamentals, data structures, algorithms, databases, software engineering, computer networks, and web technologies.</p>
      </div>
      <h3>Relevant Coursework</h3>
      <ul>
        <li>Data Structures & Algorithms</li>
        <li>Object-Oriented Programming</li>
        <li>Database Systems</li>
        <li>Web Development</li>
        <li>Software Engineering</li>
        <li>Computer Networks</li>
        <li>Operating Systems</li>
      </ul>
    `
  },
  experience: {
    title: "Experience",
    iconClass: "exp-icon",
    html: `
      <h2>Experience</h2>
      <div class="project-card">
        <h4>IT Operations · System Administration · Technical Training</h4>
        <p style="margin:2px 0;"><strong>10+ years</strong></p>
        <p style="margin-top:10px;">Over 10 years of experience in IT operations, system administration, and technical training. Specialized in computer systems management, network administration, and providing technical support across various platforms.</p>
      </div>
      <h3>Focus areas</h3>
      <ul>
        <li>IT operations &amp; day-to-day systems management</li>
        <li>System administration (installation, configuration, maintenance)</li>
        <li>Network administration</li>
        <li>Technical support across multiple platforms</li>
        <li>Technical training and knowledge transfer</li>
      </ul>
    `
  },
  certifications: {
    title: "Certifications",
    iconClass: "cert-icon",
    html: `
      <h2>Certifications</h2>
      <div class="project-card">
        <h4>Industry-recognized credentials</h4>
        <p style="margin-top:8px;">Holds multiple industry-recognized certifications in system administration, network management, and IT security. Committed to staying current with technological advances through ongoing certification.</p>
      </div>
      <h3>Key Highlights</h3>
      <div class="project-card">
        <h4>Hardware &amp; Networking Level IV</h4>
        <p>Professional qualification in hardware and networking.</p>
      </div>
      <div class="project-card">
        <h4>National Qualifications COC</h4>
        <p>Certificate of Competence (national qualifications).</p>
      </div>
      <div class="project-card">
        <h4>Best Worker Award 2010</h4>
        <p>Recognition for outstanding performance.</p>
      </div>
    `
  },
  projects: {
    title: "Projects",
    iconClass: "projects-icon",
    html: `
      <h2>Featured Projects</h2>
      <p class="proj-intro">Visual previews below — open a live demo or explore highlights. Links open in a new tab.</p>

      <div class="project-card" data-project="yeni-movie">
        <div class="proj-header">
          <h4>Yeni Movie</h4>
          <span class="proj-badge live">Live</span>
        </div>
        <div class="proj-demo-frame proj-visual" data-theme="movie">
          <svg class="proj-svg" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeni Movie preview">
            <defs>
              <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e3a5f"/></linearGradient>
              <linearGradient id="mp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
            </defs>
            <rect width="360" height="140" rx="8" fill="url(#mg)"/>
            <rect x="12" y="12" width="336" height="22" rx="4" fill="#1e293b"/>
            <circle cx="24" cy="23" r="4" fill="#ef4444"/><circle cx="36" cy="23" r="4" fill="#eab308"/><circle cx="48" cy="23" r="4" fill="#22c55e"/>
            <rect x="60" y="18" width="120" height="10" rx="3" fill="#334155"/>
            <g class="anim-poster anim-d0">
              <rect x="16" y="44" width="70" height="82" rx="4" fill="url(#mp)" opacity="0.95"/>
              <rect x="22" y="50" width="58" height="36" rx="2" fill="#fde68a" opacity="0.35"/>
              <text x="51" y="72" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700">FILM</text>
              <rect x="22" y="92" width="40" height="5" rx="2" fill="#fff" opacity="0.85"/>
              <rect x="22" y="102" width="52" height="4" rx="2" fill="#fff" opacity="0.4"/>
            </g>
            <g class="anim-poster anim-d1">
              <rect x="94" y="44" width="70" height="82" rx="4" fill="#3b82f6" opacity="0.9"/>
              <rect x="100" y="50" width="58" height="36" rx="2" fill="#93c5fd" opacity="0.3"/>
              <text x="129" y="72" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700">TV</text>
              <rect x="100" y="92" width="40" height="5" rx="2" fill="#fff" opacity="0.85"/>
              <rect x="100" y="102" width="48" height="4" rx="2" fill="#fff" opacity="0.4"/>
            </g>
            <g class="anim-poster anim-d2">
              <rect x="172" y="44" width="70" height="82" rx="4" fill="#8b5cf6" opacity="0.9"/>
              <rect x="178" y="50" width="58" height="36" rx="2" fill="#c4b5fd" opacity="0.3"/>
              <text x="207" y="72" text-anchor="middle" fill="#fff" font-size="10" font-family="Segoe UI,sans-serif" font-weight="700">NEW</text>
              <rect x="178" y="92" width="36" height="5" rx="2" fill="#fff" opacity="0.85"/>
              <rect x="178" y="102" width="50" height="4" rx="2" fill="#fff" opacity="0.4"/>
            </g>
            <g class="anim-search-panel">
              <rect x="250" y="44" width="94" height="82" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
            <text x="297" y="68" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="Segoe UI,sans-serif">Search</text>
            <rect x="262" y="78" width="70" height="8" rx="3" fill="#1e293b"/>
            <rect x="262" y="92" width="54" height="6" rx="2" fill="#334155"/>
            <rect x="262" y="104" width="62" height="6" rx="2" fill="#334155"/>
            </g>
            <text x="180" y="136" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="Segoe UI,sans-serif">Yeni Movie · discovery UI</text>
          </svg>
        </div>
        <p class="proj-desc">Discover films and TV series with a clean search-and-browse experience — posters, plots, and details in one place.</p>
        <p><strong>What it is:</strong> A full-featured movie &amp; TV discovery web app for browsing by genre and popularity.</p>
        <p><strong>Highlights:</strong> Search, poster grids, plot summaries, detailed title pages, and a responsive UI deployed on Vercel.</p>
        <details class="proj-snippet">
          <summary>View code snippet · JavaScript</summary>
          <div class="proj-code-wrap">
            <button type="button" class="proj-copy" data-copy-snippet title="Copy">Copy</button>
            <pre class="proj-code" tabindex="0"><code><span class="c-kw">async function</span> <span class="c-fn">searchMovies</span>(query) {
  <span class="c-kw">const</span> res = <span class="c-kw">await</span> fetch(<span class="c-str">\`/api/movies?q=\${encodeURIComponent(query)}\`</span>);
  <span class="c-kw">const</span> { results } = <span class="c-kw">await</span> res.json();
  <span class="c-kw">return</span> results.map(m =&gt; ({
    id: m.id,
    title: m.title,
    year: m.release_date?.slice(<span class="c-num">0</span>, <span class="c-num">4</span>),
    poster: m.poster_path
  }));
}</code></pre>
          </div>
        </details>
        <div class="proj-actions">
          <a class="proj-btn primary" href="https://yeni-movie.vercel.app" target="_blank" rel="noopener">Open live demo ↗</a>
          <a class="proj-btn" href="https://yeni-movie.vercel.app" target="_blank" rel="noopener">Visit site</a>
        </div>
        <div class="tags">
          <span class="tag">Web App</span>
          <span class="tag">Movies &amp; TV</span>
          <span class="tag">Search</span>
          <span class="tag">Vercel</span>
        </div>
      </div>

      <div class="project-card" data-project="yeni-typing">
        <div class="proj-header">
          <h4>Yeni Typing Learning</h4>
          <span class="proj-badge live">Live</span>
        </div>
        <div class="proj-demo-frame proj-visual" data-theme="typing">
          <svg class="proj-svg" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeni Typing preview">
            <defs>
              <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#052e16"/><stop offset="100%" stop-color="#166534"/></linearGradient>
            </defs>
            <rect width="360" height="140" rx="8" fill="url(#tg)"/>
            <rect x="20" y="16" width="320" height="48" rx="6" fill="#0f172a" opacity="0.55"/>
            <text x="36" y="36" fill="#86efac" font-size="13" font-family="Consolas,monospace">The quick brown fox jumps</text>
            <text x="36" y="54" fill="#4ade80" font-size="13" font-family="Consolas,monospace">over the lazy <tspan class="anim-cursor" fill="#fef08a">|</tspan></text>
            <g class="anim-metric anim-d0">
              <rect x="20" y="76" width="100" height="36" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
              <text x="70" y="92" text-anchor="middle" fill="#86efac" font-size="9" font-family="Segoe UI,sans-serif">WPM</text>
              <text class="anim-metric-val" x="70" y="106" text-anchor="middle" fill="#fff" font-size="14" font-family="Segoe UI,sans-serif" font-weight="700">72</text>
            </g>
            <g class="anim-metric anim-d1">
              <rect x="130" y="76" width="100" height="36" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
              <text x="180" y="92" text-anchor="middle" fill="#86efac" font-size="9" font-family="Segoe UI,sans-serif">Accuracy</text>
              <text class="anim-metric-val" x="180" y="106" text-anchor="middle" fill="#fff" font-size="14" font-family="Segoe UI,sans-serif" font-weight="700">98%</text>
            </g>
            <g class="anim-metric anim-d2">
              <rect x="240" y="76" width="100" height="36" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
              <text x="290" y="92" text-anchor="middle" fill="#86efac" font-size="9" font-family="Segoe UI,sans-serif">Time</text>
              <text class="anim-metric-val" x="290" y="106" text-anchor="middle" fill="#fff" font-size="14" font-family="Segoe UI,sans-serif" font-weight="700">0:45</text>
            </g>
            <text x="180" y="132" text-anchor="middle" fill="#86efac" font-size="8" font-family="Segoe UI,sans-serif" opacity="0.8">Yeni Typing · live metrics</text>
          </svg>
        </div>
        <p class="proj-desc">Build speed and accuracy with timed typing tests, live WPM, and focused practice lessons.</p>
        <p><strong>What it is:</strong> An interactive typing tutor designed for measurable progress, not clutter.</p>
        <p><strong>Highlights:</strong> Live WPM and accuracy, timed sessions, practice lessons, and a minimal distraction-free layout.</p>
        <details class="proj-snippet">
          <summary>View code snippet · JavaScript</summary>
          <div class="proj-code-wrap">
            <button type="button" class="proj-copy" data-copy-snippet title="Copy">Copy</button>
            <pre class="proj-code" tabindex="0"><code><span class="c-kw">function</span> <span class="c-fn">calcStats</span>(typed, target, elapsedMs) {
  <span class="c-kw">const</span> chars = typed.length;
  <span class="c-kw">const</span> minutes = Math.max(elapsedMs / <span class="c-num">60000</span>, <span class="c-num">1</span> / <span class="c-num">60</span>);
  <span class="c-kw">const</span> wpm = Math.round((chars / <span class="c-num">5</span>) / minutes);
  <span class="c-kw">let</span> correct = <span class="c-num">0</span>;
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i &lt; chars; i++) {
    <span class="c-kw">if</span> (typed[i] === target[i]) correct++;
  }
  <span class="c-kw">const</span> accuracy = chars ? Math.round((correct / chars) * <span class="c-num">100</span>) : <span class="c-num">100</span>;
  <span class="c-kw">return</span> { wpm, accuracy };
}</code></pre>
          </div>
        </details>
        <div class="proj-actions">
          <a class="proj-btn primary" href="https://yenityping.vercel.app" target="_blank" rel="noopener">Open live demo ↗</a>
          <a class="proj-btn" href="https://yenityping.vercel.app" target="_blank" rel="noopener">Visit site</a>
        </div>
        <div class="tags">
          <span class="tag">Education</span>
          <span class="tag">Typing Tutor</span>
          <span class="tag">WPM / Accuracy</span>
          <span class="tag">Vercel</span>
        </div>
      </div>

      <div class="project-card" data-project="yeni-exam">
        <div class="proj-header">
          <h4>Yeni Exam — Exit Exam Generator</h4>
          <span class="proj-badge live">Live</span>
        </div>
        <div class="proj-demo-frame proj-visual" data-theme="exam">
          <svg class="proj-svg" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeni Exam preview">
            <defs>
              <linearGradient id="eg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#312e81"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
            </defs>
            <rect width="360" height="140" rx="8" fill="url(#eg)"/>
            <rect x="16" y="14" width="220" height="18" rx="4" fill="#1e1b4b" opacity="0.55"/>
            <text x="26" y="27" fill="#c7d2fe" font-size="10" font-family="Segoe UI,sans-serif">Topic → generate exam</text>
            <g class="anim-poster anim-d0">
              <rect x="16" y="42" width="150" height="80" rx="6" fill="#fff" opacity="0.12"/>
              <text x="28" y="62" fill="#e0e7ff" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700">Q1. Multiple choice</text>
              <rect x="28" y="72" width="110" height="8" rx="2" fill="#a5b4fc" opacity="0.5"/>
              <rect x="28" y="86" width="90" height="8" rx="2" fill="#fff" opacity="0.25"/>
              <rect x="28" y="100" width="100" height="8" rx="2" fill="#fff" opacity="0.2"/>
            </g>
            <g class="anim-metric anim-d1">
              <rect x="180" y="42" width="72" height="36" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1"/>
              <text x="216" y="58" text-anchor="middle" fill="#c7d2fe" font-size="9" font-family="Segoe UI,sans-serif">Items</text>
              <text class="anim-metric-val" x="216" y="72" text-anchor="middle" fill="#fff" font-size="14" font-family="Segoe UI,sans-serif" font-weight="700">40</text>
            </g>
            <g class="anim-metric anim-d2">
              <rect x="262" y="42" width="72" height="36" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1"/>
              <text x="298" y="58" text-anchor="middle" fill="#c7d2fe" font-size="9" font-family="Segoe UI,sans-serif">Topics</text>
              <text class="anim-metric-val" x="298" y="72" text-anchor="middle" fill="#fff" font-size="14" font-family="Segoe UI,sans-serif" font-weight="700">∞</text>
            </g>
            <g class="anim-cta">
              <rect x="180" y="90" width="154" height="28" rx="6" fill="#22c55e" opacity="0.9"/>
              <text x="257" y="108" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700">Generate exam</text>
            </g>
            <text x="180" y="132" text-anchor="middle" fill="#c7d2fe" font-size="8" font-family="Segoe UI,sans-serif" opacity="0.85">Yeni Exam · exit exam practice</text>
          </svg>
        </div>
        <p class="proj-desc">Type any topic and generate an exit-exam style practice set instantly — built for serious exam prep.</p>
        <p><strong>What it is:</strong> A topic-driven exit exam generator that turns a subject into exam-style questions on demand.</p>
        <p><strong>Highlights:</strong> Instant generation from a topic, multiple-choice practice flow, and a clean study UI for exit exam readiness.</p>
        <div class="proj-actions">
          <a class="proj-btn primary" href="https://yeniexams.vercel.app/" target="_blank" rel="noopener">Open live demo ↗</a>
          <a class="proj-btn" href="https://yeniexams.vercel.app/" target="_blank" rel="noopener">Visit site</a>
        </div>
        <div class="tags">
          <span class="tag">Education</span>
          <span class="tag">Exit Exam</span>
          <span class="tag">Generator</span>
          <span class="tag">Vercel</span>
        </div>
      </div>

      <div class="project-card" data-project="internship">
        <div class="proj-header">
          <h4>BDU Internship Management System</h4>
          <span class="proj-badge">University</span>
        </div>
        <div class="proj-demo-frame proj-visual" data-theme="intern">
          <svg class="proj-svg" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Internship system preview">
            <defs>
              <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
            </defs>
            <rect width="360" height="140" rx="8" fill="url(#ig)"/>
            <rect x="14" y="14" width="90" height="112" rx="6" fill="#0f172a" opacity="0.35"/>
            <rect x="24" y="28" width="70" height="10" rx="3" fill="#93c5fd" opacity="0.9"/>
            <rect x="24" y="46" width="56" height="8" rx="2" fill="#fff" opacity="0.35"/>
            <rect x="24" y="60" width="62" height="8" rx="2" fill="#fff" opacity="0.25"/>
            <rect x="24" y="74" width="48" height="8" rx="2" fill="#fff" opacity="0.25"/>
            <g class="anim-cta">
              <rect x="24" y="96" width="70" height="16" rx="4" fill="#22c55e" opacity="0.85"/>
              <text x="59" y="107" text-anchor="middle" fill="#fff" font-size="8" font-family="Segoe UI,sans-serif" font-weight="600">Apply</text>
            </g>
            <g class="anim-dash anim-d0">
              <rect x="116" y="14" width="230" height="50" rx="6" fill="#fff" opacity="0.12"/>
              <text x="128" y="34" fill="#e0f2fe" font-size="11" font-family="Segoe UI,sans-serif" font-weight="700">Applications</text>
              <rect class="anim-bar" x="128" y="42" width="80" height="12" rx="3" fill="#38bdf8" opacity="0.7"/>
              <rect class="anim-bar anim-d1" x="216" y="42" width="60" height="12" rx="3" fill="#a78bfa" opacity="0.7"/>
            </g>
            <g class="anim-dash anim-d1">
              <rect x="116" y="72" width="110" height="54" rx="6" fill="#fff" opacity="0.12"/>
              <text x="128" y="92" fill="#e0f2fe" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600">Placements</text>
              <rect x="128" y="100" width="70" height="8" rx="2" fill="#fff" opacity="0.35"/>
              <rect x="128" y="112" width="50" height="6" rx="2" fill="#fff" opacity="0.25"/>
            </g>
            <g class="anim-dash anim-d2">
              <rect x="236" y="72" width="110" height="54" rx="6" fill="#fff" opacity="0.12"/>
              <text x="248" y="92" fill="#e0f2fe" font-size="10" font-family="Segoe UI,sans-serif" font-weight="600">Evaluations</text>
              <rect x="248" y="100" width="70" height="8" rx="2" fill="#fff" opacity="0.35"/>
              <rect x="248" y="112" width="55" height="6" rx="2" fill="#fff" opacity="0.25"/>
            </g>
          </svg>
        </div>
        <p class="proj-desc">End-to-end internship workflow for Bahir Dar University — from application through placement and evaluation.</p>
        <p><strong>What it is:</strong> A university platform covering the full internship lifecycle for students, supervisors, and coordinators.</p>
        <p><strong>Highlights:</strong> Applications, company placements, supervisor workflows, and evaluation tracking in one system.</p>
        <details class="proj-snippet">
          <summary>View code snippet · SQL / workflow</summary>
          <div class="proj-code-wrap">
            <button type="button" class="proj-copy" data-copy-snippet title="Copy">Copy</button>
            <pre class="proj-code" tabindex="0"><code><span class="c-kw">SELECT</span> a.id, s.name, c.title, a.status, a.submitted_at
<span class="c-kw">FROM</span> applications a
<span class="c-kw">JOIN</span> students s <span class="c-kw">ON</span> s.id = a.student_id
<span class="c-kw">JOIN</span> companies c <span class="c-kw">ON</span> c.id = a.company_id
<span class="c-kw">WHERE</span> a.status = <span class="c-str">'under_review'</span>
<span class="c-kw">ORDER BY</span> a.submitted_at <span class="c-kw">DESC</span>;</code></pre>
          </div>
        </details>
        <div class="proj-actions">
          <button type="button" class="proj-btn" disabled title="Demo link coming soon">Demo soon</button>
        </div>
        <div class="tags">
          <span class="tag">University System</span>
          <span class="tag">Internship</span>
          <span class="tag">Bahir Dar University</span>
        </div>
      </div>

      <div class="project-card" data-project="portfolio">
        <div class="proj-header">
          <h4>Windows XP Portfolio</h4>
          <span class="proj-badge live">You are here</span>
        </div>
        <div class="proj-demo-frame proj-visual" data-theme="portfolio">
          <svg class="proj-svg" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="XP Portfolio preview">
            <defs>
              <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#245edb"/><stop offset="100%" stop-color="#5b9bd5"/></linearGradient>
              <linearGradient id="tb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
            </defs>
            <rect width="360" height="140" rx="8" fill="url(#pg)"/>
            <!-- desktop icons -->
            <rect class="anim-icon anim-d0" x="18" y="16" width="28" height="28" rx="3" fill="#4fc3f7"/>
            <rect class="anim-icon anim-d1" x="18" y="50" width="28" height="28" rx="3" fill="#81c784"/>
            <rect class="anim-icon anim-d2" x="18" y="84" width="28" height="28" rx="3" fill="#ffb74d"/>
            <!-- window -->
            <g class="anim-window">
            <rect x="64" y="18" width="200" height="96" rx="4" fill="#f0f0f0" stroke="#0831d9" stroke-width="1.5"/>
            <rect x="64" y="18" width="200" height="16" rx="4" fill="url(#tb)"/>
            <rect x="64" y="30" width="200" height="4" fill="url(#tb)"/>
            <text x="78" y="30" fill="#fff" font-size="9" font-family="Tahoma,sans-serif" font-weight="700">About Me</text>
            <rect x="246" y="21" width="12" height="10" rx="1" fill="#e81123"/>
            <rect x="72" y="42" width="40" height="40" rx="3" fill="#4fc3f7"/>
            <rect x="120" y="44" width="120" height="8" rx="2" fill="#0a246a" opacity="0.7"/>
            <rect x="120" y="58" width="100" height="5" rx="2" fill="#64748b" opacity="0.5"/>
            <rect x="120" y="68" width="110" height="5" rx="2" fill="#64748b" opacity="0.4"/>
            <rect x="72" y="90" width="80" height="14" rx="2" fill="#e0e8f5"/>
            </g>
            <!-- taskbar -->
            <rect x="0" y="124" width="360" height="16" fill="#245edc"/>
            <rect class="anim-start" x="4" y="126" width="40" height="12" rx="2" fill="#3c8a2e"/>
            <text x="24" y="135" text-anchor="middle" fill="#fff" font-size="7" font-family="Tahoma,sans-serif" font-weight="700">start</text>
            <rect x="50" y="127" width="50" height="10" rx="1" fill="#1a4a9a"/>
            <text x="180" y="118" text-anchor="middle" fill="#e0f2fe" font-size="8" font-family="Segoe UI,sans-serif" opacity="0.9">Menelik OS · XP + iPhone</text>
          </svg>
        </div>
        <p class="proj-desc">This site — a playful Windows XP desktop (and iPhone shell on mobile) that hosts real apps and your full CV.</p>
        <p><strong>What it is:</strong> An interactive OS-style portfolio in the browser with windows, games, tools, and CMS-backed content.</p>
        <p><strong>Highlights:</strong> XP windows &amp; snap, virtual desktops, Notepad, Paint, Terminal, VS Code, Minesweeper, Solitaire, and an iPhone layout under ~900px.</p>
        <details class="proj-snippet">
          <summary>View code snippet · JavaScript</summary>
          <div class="proj-code-wrap">
            <button type="button" class="proj-copy" data-copy-snippet title="Copy">Copy</button>
            <pre class="proj-code" tabindex="0"><code><span class="c-kw">function</span> <span class="c-fn">openWindow</span>(id) {
  <span class="c-kw">if</span> (openWindows[id]) {
    focusWindow(id);
    <span class="c-kw">return</span>;
  }
  <span class="c-kw">const</span> data = CONTENT[id] || APPS[id];
  <span class="c-kw">const</span> win = createWindowEl(data);
  openWindows[id] = win;
  windowDesktop[id] = currentDesktop;
  document.getElementById(<span class="c-str">"windows-container"</span>).appendChild(win);
  focusWindow(id);
}</code></pre>
          </div>
        </details>
        <div class="proj-actions">
          <button type="button" class="proj-btn primary" onclick="openWindow && openWindow('about')">Explore About</button>
          <button type="button" class="proj-btn" onclick="openWindow && openWindow('minesweeper')">Play Minesweeper</button>
        </div>
        <div class="tags">
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">UI / UX</span>
        </div>
      </div>
    `
  },
  skills: {
    title: "Skills",
    iconClass: "skills-icon",
    html: `
<h2>Skills</h2>
      <p class="skills-lead">Strengths at a glance — radar above, soft skills below.</p>

      <h3 class="skills-section-title">Soft Skills</h3>
      <div class="soft-skills-grid">
        <article class="soft-skill-card">
          <div class="soft-skill-icon" aria-hidden="true">🧩</div>
          <div class="soft-skill-body">
            <h4>Problem solving</h4>
            <p>Break down issues, debug carefully, and ship practical fixes.</p>
          </div>
        </article>
        <article class="soft-skill-card">
          <div class="soft-skill-icon" aria-hidden="true">🤝</div>
          <div class="soft-skill-body">
            <h4>Team collaboration</h4>
            <p>Work clearly with others, share knowledge, and support the goal.</p>
          </div>
        </article>
        <article class="soft-skill-card">
          <div class="soft-skill-icon" aria-hidden="true">💬</div>
          <div class="soft-skill-body">
            <h4>Technical communication</h4>
            <p>Explain ideas simply — for users, teammates, and stakeholders.</p>
          </div>
        </article>
        <article class="soft-skill-card">
          <div class="soft-skill-icon" aria-hidden="true">📚</div>
          <div class="soft-skill-body">
            <h4>Continuous learning</h4>
            <p>Stay curious, practice often, and grow with new tools and ideas.</p>
          </div>
        </article>
      </div>

      <h3 class="skills-section-title">Focus areas</h3>
      <div class="tags skills-focus-tags">
        <span class="tag">HTML / CSS</span>
        <span class="tag">JavaScript</span>
        <span class="tag">Python</span>
        <span class="tag">Java</span>
        <span class="tag">Git &amp; GitHub</span>
        <span class="tag">SQL</span>
        <span class="tag">Responsive Design</span>
      </div>
    `
  },
  contact: {
    title: "Contact",
    iconClass: "contact-icon",
    html: `
<h2>Get in Touch</h2>
      <p class="contact-lead">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>

      <div class="contact-grid">
        <a class="contact-tile" href="mailto:linuxos777@gmail.com">
          <span class="contact-tile-icon" aria-hidden="true">✉</span>
          <span class="contact-tile-body">
            <span class="contact-tile-label">Email</span>
            <span class="contact-tile-value">linuxos777@gmail.com</span>
          </span>
        </a>
        <a class="contact-tile" href="tel:+251977832379">
          <span class="contact-tile-icon" aria-hidden="true">☎</span>
          <span class="contact-tile-body">
            <span class="contact-tile-label">Phone</span>
            <span class="contact-tile-value">+251 977 832 379</span>
            <span class="contact-tile-sub">+251 918 006 053</span>
          </span>
        </a>
        <a class="contact-tile" href="https://github.com/Menelik2" target="_blank" rel="noopener">
          <span class="contact-tile-icon" aria-hidden="true">⌥</span>
          <span class="contact-tile-body">
            <span class="contact-tile-label">GitHub</span>
            <span class="contact-tile-value">@Menelik2</span>
          </span>
        </a>
        <a class="contact-tile" href="https://www.linkedin.com/in/menelikadmasu" target="_blank" rel="noopener">
          <span class="contact-tile-icon" aria-hidden="true">in</span>
          <span class="contact-tile-body">
            <span class="contact-tile-label">LinkedIn</span>
            <span class="contact-tile-value">menelikadmasu</span>
          </span>
        </a>
        <div class="contact-tile contact-tile-static">
          <span class="contact-tile-icon" aria-hidden="true">⌖</span>
          <span class="contact-tile-body">
            <span class="contact-tile-label">Location</span>
            <span class="contact-tile-value">Bahir Dar, Ethiopia</span>
          </span>
        </div>
      </div>

      <h3 class="contact-form-heading">Send a message</h3>
      <form class="contact-form" id="portfolio-contact-form" action="https://formspree.io/f/xqervlnj" method="POST">
        <input type="hidden" name="_subject" value="Portfolio contact — Menelik OS" />
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;opacity:0;height:0;width:0" aria-hidden="true" />
        <label>Name<input type="text" name="name" required placeholder="Your name" autocomplete="name" /></label>
        <label>Email<input type="email" name="email" required placeholder="you@example.com" autocomplete="email" /></label>
        <label>Message<textarea name="message" rows="4" required placeholder="How can I help?"></textarea></label>
        <button type="submit" class="proj-btn primary" id="contact-send-btn">Send message</button>
        <p class="contact-form-note">Messages are delivered to <strong>linuxos777@gmail.com</strong>. Sent securely via Formspree.</p>
        <p class="contact-form-status" id="contact-form-status" hidden role="status"></p>
      </form>
    `
  },
  resume: {
    title: "Resume",
    iconClass: "resume-icon",
    html: `
      <div class="resume-toolbar no-print">
        <a class="resume-btn primary" href="resume.pdf" download="Menelik-Admasu-Resume.pdf">Download PDF</a>
        <button type="button" class="resume-btn" data-resume-print>Print / Save as PDF</button>
      </div>
      <article class="resume-doc" id="resume-printable">
        <header class="resume-header">
          <h1 class="resume-name">Menelik Admasu</h1>
          <p class="resume-tagline">BSc Computer Science · Bahir Dar University · 2022 – 2026</p>
              <p class="resume-contact">
      <span>Bahir Dar, Ethiopia</span>
      <span class="sep">·</span>
      <a href="mailto:linuxos777@gmail.com">linuxos777@gmail.com</a>
      <span class="sep">·</span>
      <a href="tel:+251977832379">+251 977 832 379</a>
      <span class="sep">·</span>
      <a href="tel:+251918006053">+251 918 006 053</a>
      <span class="sep">·</span>
      <a href="https://github.com/Menelik2" target="_blank" rel="noopener">github.com/Menelik2</a>
      <span class="sep">·</span>
      <a href="https://www.linkedin.com/in/menelikadmasu" target="_blank" rel="noopener">linkedin.com/in/menelikadmasu</a>
      <span class="sep">·</span>
      <a href="https://menelikcv.vercel.app" target="_blank" rel="noopener">menelikcv.vercel.app</a>
    </p>
        </header>

        <section class="resume-section">
          <h2>Professional Summary</h2>
          <p>Computer Science student and experienced IT professional with 10+ years in operations, system administration, and technical training. Strong foundation in programming, web development, and problem-solving. Passionate about building clean, reliable software and polished user interfaces.</p>
        </section>

        <section class="resume-section">
          <h2>Experience</h2>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>IT Operations · System Administration · Technical Training</h3>
              <span class="resume-dates">10+ years</span>
            </div>
            <p class="resume-meta">Multi-platform environments</p>
            <ul>
              <li>Day-to-day IT operations and systems management across workstations and servers</li>
              <li>System administration: installation, configuration, maintenance, and troubleshooting</li>
              <li>Network administration and multi-platform technical support</li>
              <li>Technical training and knowledge transfer for end users and junior staff</li>
            </ul>
          </div>
        </section>

        <section class="resume-section">
          <h2>Education</h2>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>Bachelor of Science in Computer Science</h3>
              <span class="resume-dates">2022 – 2026</span>
            </div>
            <p class="resume-meta">Bahir Dar University</p>
            <p>Coursework: Data Structures &amp; Algorithms, OOP, Database Systems, Web Development, Software Engineering, Computer Networks, Operating Systems</p>
          </div>
        </section>

        <section class="resume-section">
          <h2>Certifications &amp; Awards</h2>
          <ul class="resume-plain">
            <li><strong>Hardware &amp; Networking Level IV</strong> — professional qualification</li>
            <li><strong>National Qualifications COC</strong> — Certificate of Competence</li>
            <li><strong>Best Worker Award 2010</strong> — recognition for outstanding performance</li>
          </ul>
        </section>

        <section class="resume-section">
          <h2>Technical Skills</h2>
          <dl class="resume-skills">
            <div><dt>Languages</dt><dd>HTML, CSS, JavaScript, Python, Java</dd></div>
            <div><dt>Tools</dt><dd>Git, GitHub, SQL / Databases</dd></div>
            <div><dt>Other</dt><dd>Responsive design, system &amp; network administration, technical training</dd></div>
          </dl>
        </section>

        <section class="resume-section">
          <h2>Selected Projects</h2>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>Yeni Movie</h3>
              <a class="resume-link" href="https://yeni-movie.vercel.app" target="_blank" rel="noopener">Live</a>
            </div>
            <p>Full-featured movie &amp; TV discovery web app (browse, search, details).</p>
          </div>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>Yeni Typing Learning</h3>
              <a class="resume-link" href="https://yenityping.vercel.app" target="_blank" rel="noopener">Live</a>
            </div>
            <p>Interactive typing tutor with timed tests, WPM and accuracy tracking.</p>
          </div>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>Yeni Exam — Exit Exam Generator</h3>
              <a class="resume-link" href="https://yeniexams.vercel.app/" target="_blank" rel="noopener">Live</a>
            </div>
            <p>Topic-driven exit exam generator for real exam-style practice.</p>
          </div>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>BDU Internship Management System</h3>
            </div>
            <p>University platform for internship applications, placements, and evaluation tracking.</p>
          </div>
          <div class="resume-item">
            <div class="resume-item-head">
              <h3>Windows XP Portfolio</h3>
              <a class="resume-link" href="https://menelikcv.vercel.app" target="_blank" rel="noopener">Live</a>
            </div>
            <p>Interactive desktop OS portfolio in the browser (this site).</p>
          </div>
        </section>

        <section class="resume-section">
          <h2>Languages</h2>
          <p>Amharic (native) · English (professional)</p>
        </section>
      </article>
    `
  }
};

/* Interactive apps meta */
const APPS = {
  notepad: { title: "Untitled - Notepad", iconClass: "notepad-icon", interactive: true },
  paint: { title: "untitled - Paint", iconClass: "paint-icon", interactive: true },
  vector: { title: "Vector Graphics", iconClass: "vector-icon", interactive: true },
  terminal: { title: "Terminal — menelik@bahirdar", iconClass: "terminal-icon", interactive: true },
  vscode: { title: "Liveweave", iconClass: "vscode-icon", interactive: true },
  minesweeper: { title: "Minesweeper", iconClass: "minesweeper-icon", interactive: true },
  control: { title: "Control Panel", iconClass: "control-icon", interactive: true },
  recycle: { title: "Recycle Bin", iconClass: "recycle-icon", interactive: true },
  registry: { title: "Registry Editor", iconClass: "registry-icon", interactive: true },
  ie: { title: "Internet Explorer", iconClass: "ie-icon", interactive: true },
  mediaplayer: { title: "Windows Media Player", iconClass: "wmp-icon", interactive: true },
  solitaire: { title: "Solitaire", iconClass: "solitaire-icon", interactive: true },
  blog: { title: "My Computer", iconClass: "blog-icon", interactive: true },
  help: { title: "Help and Support", iconClass: "help-icon", interactive: true },
  testimonials: { title: "Testimonials", iconClass: "testimonial-icon", interactive: true },
  github: { title: "GitHub Activity", iconClass: "github-icon", interactive: true },
  downloadpack: { title: "Download Pack", iconClass: "pack-icon", interactive: true }
};
window.CONTENT = CONTENT;
window.APPS = APPS;

/* ========== Theme ========== */
function applyTheme(mode) {
  const isLight = mode === "light";
  document.body.classList.toggle("light", isLight);
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  try {
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  } catch (_) {}
  // Browser chrome / mobile status bar hint
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = isLight ? "#3a6ea5" : "#0f172a";
  try {
    document.dispatchEvent(new CustomEvent("menelik-theme", { detail: { mode: isLight ? "light" : "dark" } }));
  } catch (_) {}
}

function initTheme() {
  // Always open in classic XP light mode
  applyTheme("light");
}
function toggleTheme() {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
}
document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
document.getElementById("theme-toggle-mobile")?.addEventListener("click", toggleTheme);
// Ctrl+Shift+L — toggle theme
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && (e.key === "L" || e.key === "l")) {
    e.preventDefault();
    toggleTheme();
  }
});

/* ========== Clock ========== */
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = timeStr;
  const mobileTime = document.getElementById("mobile-time");
  if (mobileTime) {
    mobileTime.textContent = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false });
  }
}
setInterval(updateClock, 1000);
updateClock();

/* ========== State ========== */
let zIndex = 100;
let openWindows = {};
let activeWindowId = null;
/** Most-recently-focused window ids (front = last). Used for stacking / Alt order. */
let recentWindowOrder = [];
let isDragging = false;
let dragOffset = { x: 0, y: 0 };
let dragTarget = null;

/* Virtual desktops */
const VD_COUNT = 4;
let currentDesktop = 0;
const windowDesktop = {}; // windowId -> desktop index

/* ========== Build interactive app UIs ========== */
function buildNotepad() {
  const wrap = document.createElement("div");
  wrap.className = "notepad-app";
  wrap.innerHTML = `
    <div class="notepad-toolbar">
      <button data-action="new">New</button>
      <button data-action="save">Save</button>
      <button data-action="load">Load</button>
      <button data-action="clear">Clear</button>
    </div>
    <textarea class="notepad-textarea" placeholder="Type something..." spellcheck="false"></textarea>
  `;
  const ta = wrap.querySelector("textarea");
  const saved = localStorage.getItem("notepad-content");
  if (saved) ta.value = saved;

  wrap.querySelector('[data-action="new"]').onclick = () => { ta.value = ""; };
  wrap.querySelector('[data-action="save"]').onclick = () => {
    localStorage.setItem("notepad-content", ta.value);
    alert("Saved to browser storage.");
  };
  wrap.querySelector('[data-action="load"]').onclick = () => {
    ta.value = localStorage.getItem("notepad-content") || "";
  };
  wrap.querySelector('[data-action="clear"]').onclick = () => { ta.value = ""; };
  return wrap;
}

function buildPaint() {
  const wrap = document.createElement("div");
  wrap.className = "paint-app paint-pro";
  const palette = [
    "#000000", "#ffffff", "#808080", "#c0c0c0",
    "#ff0000", "#800000", "#ff8800", "#ffcc00",
    "#ffff00", "#00ff00", "#008000", "#00ffff",
    "#008080", "#0000ff", "#000080", "#ff00ff",
    "#800080", "#ffc0cb", "#a52a2a", "#00aa88"
  ];
  wrap.innerHTML = `
    <div class="paint-toolbar">
      <div class="paint-tools" role="toolbar" aria-label="Tools">
        <button type="button" class="tool-btn active" data-tool="pen" title="Pencil (P)">✏️</button>
        <button type="button" class="tool-btn" data-tool="eraser" title="Eraser (E)">🧽</button>
        <button type="button" class="tool-btn" data-tool="line" title="Line (L)">／</button>
        <button type="button" class="tool-btn" data-tool="rect" title="Rectangle (R)">▢</button>
        <button type="button" class="tool-btn" data-tool="ellipse" title="Ellipse (O)">◯</button>
        <button type="button" class="tool-btn" data-tool="fill" title="Fill (F)">🪣</button>
        <button type="button" class="tool-btn" data-tool="spray" title="Spray (S)">💨</button>
        <button type="button" class="tool-btn" data-tool="picker" title="Eyedropper (I)">💉</button>
        <button type="button" class="tool-btn" data-tool="text" title="Text (T)">A</button>
      </div>
      <div class="paint-colors">
        ${palette.map((c, i) => `<button type="button" data-color="${c}" style="background:${c}" class="${i === 0 ? "active" : ""}" title="${c}"></button>`).join("")}
        <label class="paint-custom-color" title="Custom color"><input type="color" class="paint-color-input" value="#000000" /></label>
      </div>
      <label class="paint-size-label">Size <input type="range" min="1" max="40" value="4" class="brush-size"></label>
      <label class="paint-fill-shape"><input type="checkbox" class="shape-fill" /> Fill shapes</label>
      <div class="paint-actions">
        <button type="button" class="tool-btn" data-action="undo" title="Undo (Ctrl+Z)">↶</button>
        <button type="button" class="tool-btn" data-action="redo" title="Redo (Ctrl+Y)">↷</button>
        <button type="button" class="tool-btn" data-action="clear" title="Clear">Clear</button>
        <button type="button" class="tool-btn" data-action="save" title="Save PNG">💾 Save</button>
      </div>
    </div>
    <div class="paint-canvas-wrap">
      <canvas width="640" height="400"></canvas>
    </div>
    <div class="paint-status"><span class="paint-tool-name">Pencil</span> · <span class="paint-coords">0, 0</span></div>
  `;

  const canvas = wrap.querySelector("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let drawing = false;
  let color = "#000000";
  let size = 4;
  let tool = "pen";
  let startX = 0, startY = 0;
  let lastX = 0, lastY = 0;
  let snapshot = null;
  const undoStack = [];
  const redoStack = [];
  const MAX_HIST = 30;
  const toolNames = {
    pen: "Pencil", eraser: "Eraser", line: "Line", rect: "Rectangle",
    ellipse: "Ellipse", fill: "Fill", spray: "Spray", picker: "Eyedropper", text: "Text"
  };

  function pushHistory() {
    try {
      undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      if (undoStack.length > MAX_HIST) undoStack.shift();
      redoStack.length = 0;
    } catch (_) {}
  }
  function restore(data) {
    if (!data) return;
    ctx.putImageData(data, 0, 0);
  }
  function undo() {
    if (!undoStack.length) return;
    try {
      redoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      restore(undoStack.pop());
    } catch (_) {}
  }
  function redo() {
    if (!redoStack.length) return;
    try {
      undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      restore(redoStack.pop());
    } catch (_) {}
  }
  function setTool(name) {
    tool = name;
    wrap.querySelectorAll(".tool-btn[data-tool]").forEach(b => b.classList.toggle("active", b.dataset.tool === name));
    wrap.querySelector(".paint-tool-name").textContent = toolNames[name] || name;
    canvas.style.cursor = name === "picker" ? "crosshair" : name === "fill" ? "cell" : "crosshair";
  }
  function setColor(c) {
    color = c;
    wrap.querySelectorAll(".paint-colors button[data-color]").forEach(b => {
      b.classList.toggle("active", b.dataset.color.toLowerCase() === c.toLowerCase());
    });
    const inp = wrap.querySelector(".paint-color-input");
    if (inp) inp.value = /^#[0-9a-fA-F]{6}$/.test(c) ? c : "#000000";
  }
  function pos(e) {
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - r.left) * scaleX,
      y: (src.clientY - r.top) * scaleY
    };
  }
  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function floodFill(x, y, fillHex) {
    const w = canvas.width, h = canvas.height;
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    const sx = Math.floor(x), sy = Math.floor(y);
    if (sx < 0 || sy < 0 || sx >= w || sy >= h) return;
    const i0 = (sy * w + sx) * 4;
    const tr = d[i0], tg = d[i0 + 1], tb = d[i0 + 2], ta = d[i0 + 3];
    const fill = hexToRgb(fillHex);
    if (tr === fill.r && tg === fill.g && tb === fill.b && ta === 255) return;
    const match = (i) => d[i] === tr && d[i + 1] === tg && d[i + 2] === tb && d[i + 3] === ta;
    const stack = [[sx, sy]];
    const seen = new Uint8Array(w * h);
    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (cx < 0 || cy < 0 || cx >= w || cy >= h) continue;
      const id = cy * w + cx;
      if (seen[id]) continue;
      const i = id * 4;
      if (!match(i)) continue;
      seen[id] = 1;
      d[i] = fill.r; d[i + 1] = fill.g; d[i + 2] = fill.b; d[i + 3] = 255;
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
    }
    ctx.putImageData(img, 0, 0);
  }
  function sprayAt(x, y) {
    ctx.fillStyle = color;
    const radius = Math.max(size * 1.5, 4);
    const dots = Math.max(8, size * 3);
    for (let i = 0; i < dots; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      ctx.fillRect(x + Math.cos(a) * r, y + Math.sin(a) * r, 1, 1);
    }
  }
  function drawShape(x1, y1, x2, y2, preview) {
    if (snapshot && preview) ctx.putImageData(snapshot, 0, 0);
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    const fillOn = wrap.querySelector(".shape-fill")?.checked;
    ctx.fillStyle = color;
    if (tool === "line") {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else if (tool === "rect") {
      const rx = Math.min(x1, x2), ry = Math.min(y1, y2);
      const rw = Math.abs(x2 - x1), rh = Math.abs(y2 - y1);
      if (fillOn) ctx.fillRect(rx, ry, rw, rh);
      ctx.strokeRect(rx, ry, rw, rh);
    } else if (tool === "ellipse") {
      const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
      const rx = Math.abs(x2 - x1) / 2, ry = Math.abs(y2 - y1) / 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, Math.max(rx, 0.5), Math.max(ry, 0.5), 0, 0, Math.PI * 2);
      if (fillOn) ctx.fill();
      ctx.stroke();
    }
  }

  wrap.querySelectorAll(".paint-colors button[data-color]").forEach(btn => {
    btn.addEventListener("click", () => {
      setColor(btn.dataset.color);
      if (tool === "eraser" || tool === "picker") setTool("pen");
    });
  });
  wrap.querySelector(".paint-color-input").addEventListener("input", (e) => {
    setColor(e.target.value);
    if (tool === "eraser" || tool === "picker") setTool("pen");
  });
  wrap.querySelector(".brush-size").addEventListener("input", (e) => { size = +e.target.value; });
  wrap.querySelectorAll(".tool-btn[data-tool]").forEach(btn => {
    btn.addEventListener("click", () => setTool(btn.dataset.tool));
  });
  wrap.querySelector('[data-action="clear"]').addEventListener("click", () => {
    pushHistory();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });
  wrap.querySelector('[data-action="undo"]').addEventListener("click", undo);
  wrap.querySelector('[data-action="redo"]').addEventListener("click", redo);
  wrap.querySelector('[data-action="save"]').addEventListener("click", () => {
    const a = document.createElement("a");
    a.download = "paint-" + Date.now() + ".png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });

  function start(e) {
    const p = pos(e);
    wrap.querySelector(".paint-coords").textContent = Math.round(p.x) + ", " + Math.round(p.y);

    if (tool === "picker") {
      const pixel = ctx.getImageData(Math.floor(p.x), Math.floor(p.y), 1, 1).data;
      const hex = "#" + [pixel[0], pixel[1], pixel[2]].map(v => v.toString(16).padStart(2, "0")).join("");
      setColor(hex);
      setTool("pen");
      e.preventDefault();
      return;
    }
    if (tool === "fill") {
      pushHistory();
      floodFill(p.x, p.y, color);
      e.preventDefault();
      return;
    }
    if (tool === "text") {
      const text = prompt("Text:", "Hello");
      if (text) {
        pushHistory();
        ctx.font = Math.max(12, size * 4) + "px Tahoma, sans-serif";
        ctx.fillStyle = color;
        ctx.textBaseline = "top";
        ctx.fillText(text, p.x, p.y);
      }
      e.preventDefault();
      return;
    }

    drawing = true;
    startX = lastX = p.x;
    startY = lastY = p.y;
    if (tool === "line" || tool === "rect" || tool === "ellipse") {
      snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    } else {
      pushHistory();
    }
    if (tool === "pen" || tool === "eraser") {
      ctx.beginPath();
      ctx.arc(p.x, p.y, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = tool === "eraser" ? "#ffffff" : color;
      ctx.fill();
    } else if (tool === "spray") {
      sprayAt(p.x, p.y);
    }
    e.preventDefault();
  }

  function move(e) {
    const p = pos(e);
    wrap.querySelector(".paint-coords").textContent = Math.round(p.x) + ", " + Math.round(p.y);
    if (!drawing) return;
    if (tool === "pen" || tool === "eraser") {
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      lastX = p.x;
      lastY = p.y;
    } else if (tool === "spray") {
      sprayAt(p.x, p.y);
      lastX = p.x;
      lastY = p.y;
    } else if (tool === "line" || tool === "rect" || tool === "ellipse") {
      drawShape(startX, startY, p.x, p.y, true);
    }
    e.preventDefault();
  }

  function end(e) {
    if (!drawing) return;
    drawing = false;
    if (tool === "line" || tool === "rect" || tool === "ellipse") {
      const p = e && (e.clientX != null || e.changedTouches)
        ? pos(e.changedTouches ? { touches: e.changedTouches } : e)
        : { x: lastX, y: lastY };
      if (snapshot) {
        pushHistory();
        ctx.putImageData(snapshot, 0, 0);
        drawShape(startX, startY, p.x, p.y, false);
        snapshot = null;
      }
    }
  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  canvas.addEventListener("mouseup", end);
  canvas.addEventListener("mouseleave", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  canvas.addEventListener("touchend", end);

  wrap.tabIndex = 0;
  wrap.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === "z") { e.preventDefault(); undo(); }
    if ((e.ctrlKey || e.metaKey) && k === "y") { e.preventDefault(); redo(); }
    if ((e.ctrlKey || e.metaKey) && k === "s") {
      e.preventDefault();
      wrap.querySelector('[data-action="save"]').click();
    }
    if (!e.ctrlKey && !e.metaKey) {
      if (k === "p") setTool("pen");
      if (k === "e") setTool("eraser");
      if (k === "l") setTool("line");
      if (k === "r") setTool("rect");
      if (k === "o") setTool("ellipse");
      if (k === "f") setTool("fill");
      if (k === "s") setTool("spray");
      if (k === "i") setTool("picker");
      if (k === "t") setTool("text");
    }
  });

  return wrap;
}

function buildTerminal() {
  const wrap = document.createElement("div");
  wrap.className = "terminal-app";
  wrap.innerHTML = `
    <div class="terminal-output"></div>
    <div class="terminal-input-row">
      <span class="prompt">menelik@bahirdar:~$</span>
      <input type="text" spellcheck="false" autocomplete="off" />
    </div>
  `;
  const output = wrap.querySelector(".terminal-output");
  const input = wrap.querySelector("input");
  const promptEl = wrap.querySelector(".prompt");

  const history = [];
  let histIdx = -1;
  let cwd = "/home/menelik";

  const FS = {
    "/": { type: "dir", children: ["home", "etc", "var", "tmp", "usr"] },
    "/home": { type: "dir", children: ["menelik"] },
    "/home/menelik": {
      type: "dir",
      children: ["about.txt", "education.txt", "projects", "skills.txt", "resume.pdf", ".bashrc", "Documents", "Downloads"]
    },
    "/home/menelik/projects": {
      type: "dir",
      children: ["portfolio", "yeni-movie", "yeni-typing", "internship-mgmt", "README.md"]
    },
    "/home/menelik/projects/portfolio": {
      type: "dir",
      children: ["index.html", "styles.css", "script.js"]
    },
    "/home/menelik/Documents": { type: "dir", children: ["notes.txt", "todo.txt"] },
    "/home/menelik/Downloads": { type: "dir", children: [] },
    "/etc": { type: "dir", children: ["hostname", "passwd", "os-release"] },
    "/var": { type: "dir", children: ["log"] },
    "/tmp": { type: "dir", children: [] },
    "/usr": { type: "dir", children: ["bin", "share"] },
    "/usr/bin": { type: "dir", children: [] },
    "/usr/share": { type: "dir", children: [] },
    "/var/log": { type: "dir", children: ["syslog"] }
  };

  const FILES = {
    "/home/menelik/about.txt": "Menelik Admasu — BSc Computer Science @ Bahir Dar University (2022–2026)\nPassionate about web development and classic UIs.",
    "/home/menelik/education.txt": "Bahir Dar University\nBachelor of Science in Computer Science\n2022 – 2026\n\nRelevant coursework:\n- Data Structures & Algorithms\n- Web Development\n- Database Systems\n- Operating Systems",
    "/home/menelik/skills.txt": "Languages: HTML, CSS, JavaScript, Python, Java\nTools: Git, SQL, VS Code\nOther: Responsive Design, UI/UX",
    "/home/menelik/.bashrc": "# ~/.bashrc\nexport PS1='\\u@\\h:\\w\\$ '\nexport PATH=$PATH:/usr/local/bin\nalias ll='ls -la'\nalias cls='clear'",
    "/home/menelik/resume.pdf": "[Binary PDF — open the Resume app instead]",
    "/home/menelik/projects/README.md": "# Projects\n\n- yeni-movie — https://yeni-movie.vercel.app\n- yeni-typing — https://yenityping.vercel.app\n- yeni-exam — https://yeniexams.vercel.app/\n- internship-mgmt — Bahir Dar University Internship Management System\n- portfolio — Windows XP + iPhone portfolio site",
    "/home/menelik/projects/portfolio/index.html": "<!DOCTYPE html>\n<html>\n<head><title>Menelik Admasu</title></head>\n<body><!-- XP Portfolio --></body>\n</html>",
    "/home/menelik/projects/portfolio/styles.css": "/* Windows XP + iPhone styles */\n:root { --xp-blue: #245edb; }",
    "/home/menelik/projects/portfolio/script.js": "// Portfolio logic: windows, terminal, paint, notepad, vscode",
    "/home/menelik/Documents/notes.txt": "Study plan:\n1. Finish DSA assignments\n2. Improve portfolio\n3. Practice JavaScript daily",
    "/home/menelik/Documents/todo.txt": "[ ] Update contact links\n[ ] Add profile photo\n[x] Build terminal app\n[x] Add Paint & Notepad",
    "/etc/hostname": "bahirdar",
    "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\nmenelik:x:1000:1000:Menelik Admasu:/home/menelik:/bin/bash",
    "/etc/os-release": 'NAME="Portfolio Linux"\nVERSION="1.0"\nID=portfolio\nPRETTY_NAME="Portfolio Linux 1.0 (Web)"',
    "/var/log/syslog": "Jul 27 12:00:01 bahirdar kernel: Portfolio OS booted\nJul 27 12:00:02 bahirdar systemd: Started Terminal Service"
  };

  function print(text, cls = "") {
    const line = document.createElement("div");
    if (cls) line.className = cls;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }
  function printHTML(html) {
    const line = document.createElement("div");
    line.innerHTML = html;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }
  function updatePrompt() {
    let short = cwd.replace("/home/menelik", "~");
    promptEl.textContent = `menelik@bahirdar:${short}$`;
  }
  function resolvePath(path) {
    if (!path || path === ".") return cwd;
    if (path === "..") {
      if (cwd === "/") return "/";
      const parts = cwd.split("/").filter(Boolean);
      parts.pop();
      return "/" + parts.join("/") || "/";
    }
    if (path.startsWith("/")) return path.replace(/\/+$/, "") || "/";
    if (path.startsWith("~/")) path = "/home/menelik/" + path.slice(2);
    else if (path === "~") return "/home/menelik";
    const base = cwd === "/" ? "" : cwd;
    return (base + "/" + path).replace(/\/+/g, "/").replace(/\/+$/, "") || "/";
  }
  function exists(path) {
    return FS[path] || FILES[path] !== undefined;
  }
  function isDir(path) {
    return FS[path] && FS[path].type === "dir";
  }

  print("Welcome to Menelik's Linux Terminal (simulated)");
  print("Type 'help' for available commands.\n");

  const commands = {
    help: () => {
      print("Portfolio Linux — command reference");
      print("");
      print("  Navigation & files");
      print("    ls [-l|-a] [path]   list directory contents");
      print("    cd [dir]           change directory");
      print("    pwd                print working directory");
      print("    cat <file>         show file contents");
      print("    head <file>        first 10 lines of file");
      print("    tail <file>        last 10 lines of file");
      print("    tree               directory tree");
      print("    find <name>        find files by name");
      print("    file <path>        show file type");
      print("    wc <file>          word/line/char count");
      print("");
      print("  System info");
      print("    whoami, id, hostname, uname [-a]");
      print("    date, cal, uptime, free, df, du");
      print("    neofetch / screenfetch");
      print("    env, printenv, ps, top");
      print("");
      print("  Text & misc");
      print("    echo [text]        print text");
      print("    printf <fmt>       formatted print");
      print("    clear / cls        clear screen");
      print("    history            command history");
      print("    help               this help");
      print("    about              about Menelik");
      print("    fortune            random quote");
      print("    cowsay [text]      ASCII cow");
      print("    figlet [text]      big text");
      print("    banner [text]      banner text");
      print("    yes [text]         repeat text (5 lines)");
      print("    sleep <n>          pause n seconds");
      print("    echo $HOME         environment vars");
      print("    exit               close hint");
    },

    clear: () => { output.innerHTML = ""; },
    cls: () => { output.innerHTML = ""; },

    whoami: () => print("menelik"),
    id: () => print("uid=1000(menelik) gid=1000(menelik) groups=1000(menelik),27(sudo),100(users)"),
    hostname: () => print("bahirdar"),

    date: (args) => {
      const d = new Date();
      if (args[0] === "+%Y-%m-%d") print(d.toISOString().slice(0, 10));
      else if (args[0] === "+%H:%M:%S") print(d.toTimeString().slice(0, 8));
      else print(d.toString());
    },

    cal: () => {
      const d = new Date();
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const year = d.getFullYear();
      const month = d.getMonth();
      print(`    ${months[month]} ${year}`);
      print("Su Mo Tu We Th Fr Sa");
      const first = new Date(year, month, 1).getDay();
      const days = new Date(year, month + 1, 0).getDate();
      let line = "   ".repeat(first);
      for (let day = 1; day <= days; day++) {
        line += String(day).padStart(2, " ") + " ";
        if ((first + day) % 7 === 0 || day === days) {
          print(line.trimEnd());
          line = "";
        }
      }
    },

    uptime: () => {
      const sec = Math.floor(performance.now() / 1000);
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;
      print(` ${new Date().toTimeString().slice(0, 8)} up ${h}:${String(m).padStart(2,"0")},  1 user,  load average: 0.${s % 50}, 0.12, 0.08`);
    },

    free: () => {
      print("               total        used        free");
      print("Mem:         16384000     4200000    12184000");
      print("Swap:         2097152           0     2097152");
    },

    df: () => {
      print("Filesystem     Size  Used Avail Use% Mounted on");
      print("/dev/web        50G   12G   38G  24% /");
      print("tmpfs          8.0G     0  8.0G   0% /tmp");
    },

    du: (args) => {
      const path = resolvePath(args[0] || ".");
      if (!exists(path)) print(`du: cannot access '${args[0]}': No such file or directory`, "err");
      else print(`4.0K\t${path}`);
    },

    uname: (args) => {
      if (args.includes("-a") || args.includes("--all"))
        print("Linux bahirdar 6.5.0-portfolio #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux");
      else if (args.includes("-r")) print("6.5.0-portfolio");
      else if (args.includes("-n")) print("bahirdar");
      else if (args.includes("-m")) print("x86_64");
      else print("Linux");
    },

    pwd: () => print(cwd),

    cd: (args) => {
      const target = resolvePath(args[0] || "~");
      if (!exists(target)) print(`bash: cd: ${args[0]}: No such file or directory`, "err");
      else if (!isDir(target)) print(`bash: cd: ${args[0]}: Not a directory`, "err");
      else { cwd = target; updatePrompt(); }
    },

    ls: (args) => {
      let path = cwd;
      let long = false, all = false;
      args.forEach(a => {
        if (a === "-l" || a === "-la" || a === "-al") long = true;
        if (a === "-a" || a === "-la" || a === "-al") all = true;
        if (!a.startsWith("-")) path = resolvePath(a);
      });
      if (!exists(path)) { print(`ls: cannot access '${args.join(" ")}': No such file or directory`, "err"); return; }
      if (!isDir(path)) { print(path.split("/").pop()); return; }
      let children = FS[path].children.slice();
      if (all) children = [".", "..", ...children];
      if (long) {
        print("total " + children.length * 4);
        children.forEach(name => {
          const full = path === "/" ? "/" + name : path + "/" + name;
          const dir = name === "." || name === ".." || isDir(full);
          const perms = dir ? "drwxr-xr-x" : "-rw-r--r--";
          const size = dir ? "4096" : String((FILES[full] || "").length || 128).padStart(4);
          print(`${perms} 1 menelik menelik ${size} Jul 27 12:00 ${name}`);
        });
      } else {
        print(children.join("  "));
      }
    },

    tree: (args) => {
      const start = resolvePath(args[0] || ".");
      if (!isDir(start)) { print(`tree: ${args[0]}: Not a directory`, "err"); return; }
      print(start);
      function walk(path, prefix) {
        const kids = (FS[path] && FS[path].children) || [];
        kids.forEach((name, i) => {
          const last = i === kids.length - 1;
          const full = path === "/" ? "/" + name : path + "/" + name;
          print(prefix + (last ? "└── " : "├── ") + name);
          if (isDir(full)) walk(full, prefix + (last ? "    " : "│   "));
        });
      }
      walk(start, "");
    },

    cat: (args) => {
      if (!args[0]) { print("cat: missing file operand", "err"); return; }
      const path = resolvePath(args[0]);
      if (FILES[path] !== undefined) print(FILES[path]);
      else if (isDir(path)) print(`cat: ${args[0]}: Is a directory`, "err");
      else print(`cat: ${args[0]}: No such file or directory`, "err");
    },

    head: (args) => {
      if (!args[0]) { print("head: missing file operand", "err"); return; }
      const path = resolvePath(args[0]);
      if (FILES[path] === undefined) { print(`head: cannot open '${args[0]}'`, "err"); return; }
      print(FILES[path].split("\n").slice(0, 10).join("\n"));
    },

    tail: (args) => {
      if (!args[0]) { print("tail: missing file operand", "err"); return; }
      const path = resolvePath(args[0]);
      if (FILES[path] === undefined) { print(`tail: cannot open '${args[0]}'`, "err"); return; }
      print(FILES[path].split("\n").slice(-10).join("\n"));
    },

    wc: (args) => {
      if (!args[0]) { print("wc: missing file operand", "err"); return; }
      const path = resolvePath(args[0]);
      if (FILES[path] === undefined) { print(`wc: ${args[0]}: No such file`, "err"); return; }
      const text = FILES[path];
      const lines = text.split("\n").length;
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const chars = text.length;
      print(` ${lines} ${words} ${chars} ${args[0]}`);
    },

    file: (args) => {
      if (!args[0]) { print("file: missing operand", "err"); return; }
      const path = resolvePath(args[0]);
      if (isDir(path)) print(`${args[0]}: directory`);
      else if (FILES[path] !== undefined) {
        if (path.endsWith(".pdf")) print(`${args[0]}: PDF document`);
        else if (path.endsWith(".js")) print(`${args[0]}: JavaScript source`);
        else if (path.endsWith(".css")) print(`${args[0]}: CSS stylesheet`);
        else if (path.endsWith(".html")) print(`${args[0]}: HTML document`);
        else print(`${args[0]}: ASCII text`);
      } else print(`${args[0]}: cannot open`);
    },

    find: (args) => {
      const name = args[0];
      if (!name) { print("find: missing search term", "err"); return; }
      const results = [];
      function walk(path) {
        if (!FS[path]) return;
        FS[path].children.forEach(c => {
          const full = path === "/" ? "/" + c : path + "/" + c;
          if (c.includes(name)) results.push(full);
          if (isDir(full)) walk(full);
        });
      }
      walk("/home/menelik");
      if (results.length) results.forEach(r => print(r));
      else print(`find: no matches for '${name}'`);
    },

    echo: (args) => {
      let text = args.join(" ");
      text = text
        .replace(/\$HOME/g, "/home/menelik")
        .replace(/\$USER/g, "menelik")
        .replace(/\$PWD/g, cwd)
        .replace(/\$HOSTNAME/g, "bahirdar")
        .replace(/\$SHELL/g, "/bin/bash");
      print(text);
    },

    printf: (args) => print(args.join(" ").replace(/\\n/g, "\n").replace(/\\t/g, "\t")),

    env: () => {
      print("USER=menelik");
      print("HOME=/home/menelik");
      print("PWD=" + cwd);
      print("SHELL=/bin/bash");
      print("HOSTNAME=bahirdar");
      print("PATH=/usr/local/bin:/usr/bin:/bin");
      print("LANG=en_US.UTF-8");
      print("TERM=xterm-256color");
    },
    printenv: (args) => {
      if (!args[0]) { commands.env(); return; }
      const vars = { USER: "menelik", HOME: "/home/menelik", PWD: cwd, SHELL: "/bin/bash", HOSTNAME: "bahirdar", PATH: "/usr/local/bin:/usr/bin:/bin" };
      print(vars[args[0]] || "");
    },

    ps: () => {
      print("  PID TTY          TIME CMD");
      print("    1 pts/0    00:00:00 bash");
      print("  128 pts/0    00:00:00 portfolio");
      print("  256 pts/0    00:00:00 terminal");
      print("  512 pts/0    00:00:00 ps");
    },

    top: () => {
      print("Tasks: 4 total, 1 running, 3 sleeping");
      print("%Cpu(s): 2.1 us, 0.5 sy, 0.0 id");
      print("MiB Mem: 16000 total, 4200 used, 11800 free");
      print("");
      print("  PID USER      %CPU %MEM    TIME+ COMMAND");
      print("  128 menelik    1.2  2.1  0:04.20 portfolio");
      print("  256 menelik    0.4  0.8  0:01.10 terminal");
      print("    1 menelik    0.0  0.1  0:00.05 bash");
    },

    neofetch: () => {
      printHTML(`<pre class="info" style="margin:0;line-height:1.35">
      <span style="color:#4ec9b0">menelik@bahirdar</span>
      <span style="color:#666">------------------</span>
      <span style="color:#569cd6">OS</span>: Portfolio Linux 1.0 (Web)
      <span style="color:#569cd6">Host</span>: Bahir Dar University
      <span style="color:#569cd6">Kernel</span>: 6.5.0-portfolio
      <span style="color:#569cd6">Uptime</span>: ${Math.floor(performance.now()/60000)} mins
      <span style="color:#569cd6">Shell</span>: bash 5.2.0
      <span style="color:#569cd6">DE</span>: Windows XP Theme
      <span style="color:#569cd6">WM</span>: Portfolio WM
      <span style="color:#569cd6">Terminal</span>: web-terminal
      <span style="color:#569cd6">CPU</span>: JavaScript V8
      <span style="color:#569cd6">Memory</span>: 4200MiB / 16000MiB
      <span style="color:#569cd6">Student</span>: BSc CS · 2022–2026
</pre>`);
    },
    screenfetch: () => commands.neofetch(),

    about: () => {
      print("Menelik Admasu");
      print("BSc Computer Science — Bahir Dar University (2022–2026)");
      print("Open the About Me window for the full profile.");
    },

    history: () => history.forEach((h, i) => print(`  ${i + 1}  ${h}`)),

    fortune: () => {
      const quotes = [
        "The best way to predict the future is to invent it. — Alan Kay",
        "Talk is cheap. Show me the code. — Linus Torvalds",
        "First, solve the problem. Then, write the code. — John Johnson",
        "Code is like humor. When you have to explain it, it’s bad. — Cory House",
        "Simplicity is the soul of efficiency. — Austin Freeman",
        "Programs must be written for people to read. — Harold Abelson",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
        "Experience is the name everyone gives to their mistakes. — Oscar Wilde"
      ];
      print(quotes[Math.floor(Math.random() * quotes.length)]);
    },

    cowsay: (args) => {
      const msg = args.join(" ") || "Moo from Bahir Dar!";
      const len = Math.min(msg.length, 40);
      const border = " " + "_".repeat(len + 2);
      print(border);
      print(`< ${msg.slice(0, 40)} >`);
      print(" " + "-".repeat(len + 2));
      print("        \\   ^__^");
      print("         \\  (oo)\\_______");
      print("            (__)\\       )\\/\\");
      print("                ||----w |");
      print("                ||     ||");
    },

    figlet: (args) => {
      const t = (args.join(" ") || "MENELIK").toUpperCase().slice(0, 12);
      print("  " + t.split("").join(" "));
      print("  " + "=".repeat(t.length * 2 - 1));
      print("  (figlet-style banner)");
    },

    banner: (args) => {
      const t = args.join(" ") || "Portfolio";
      print("#".repeat(Math.min(t.length + 4, 40)));
      print(`# ${t.slice(0, 36)} #`);
      print("#".repeat(Math.min(t.length + 4, 40)));
    },

    yes: (args) => {
      const t = args.join(" ") || "y";
      for (let i = 0; i < 5; i++) print(t);
      print("(stopped after 5 lines)");
    },

    sleep: (args) => {
      const n = Math.min(parseInt(args[0], 10) || 1, 3);
      print(`sleeping ${n}s...`);
    },

    which: (args) => {
      const builtins = Object.keys(commands);
      if (!args[0]) print("which: missing argument", "err");
      else if (builtins.includes(args[0])) print(`/usr/bin/${args[0]}`);
      else print(`which: no ${args[0]} in (${"/usr/local/bin:/usr/bin:/bin"})`);
    },

    man: (args) => {
      if (!args[0]) print("What manual page do you want?", "err");
      else if (commands[args[0]]) print(`Manual entry for ${args[0]}\n\nSee 'help' for a short description of all commands.`);
      else print(`No manual entry for ${args[0]}`, "err");
    },

    exit: () => print("Use the window × button to close the terminal.", "info"),
    logout: () => commands.exit()
  };

  // aliases
  commands.ll = (args) => commands.ls(["-la", ...args]);
  commands.la = (args) => commands.ls(["-a", ...args]);
  commands.dir = (args) => commands.ls(args);

  function run(cmdLine) {
    const trimmed = cmdLine.trim();
    if (!trimmed) return;
    history.push(trimmed);
    histIdx = history.length;
    const short = cwd.replace("/home/menelik", "~");
    printHTML(`<span class="prompt-line">menelik@bahirdar:${short}$</span> <span class="cmd-echo">${trimmed.replace(/</g, "&lt;")}</span>`);

    // support simple pipes display only
    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[cmd]) commands[cmd](args);
    else print(`bash: ${cmd}: command not found\nTry 'help' for a list of commands.`, "err");
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      run(input.value);
      input.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx > 0) {
        histIdx--;
        input.value = history[histIdx] || "";
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < history.length - 1) {
        histIdx++;
        input.value = history[histIdx] || "";
      } else {
        histIdx = history.length;
        input.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // simple tab completion for commands
      const val = input.value.trim();
      if (!val.includes(" ")) {
        const match = Object.keys(commands).find(c => c.startsWith(val));
        if (match) input.value = match + " ";
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      output.innerHTML = "";
    } else if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      print("^C");
      input.value = "";
    }
  });

  setTimeout(() => input.focus(), 100);
  wrap.addEventListener("click", () => input.focus());
  return wrap;
}

const VSCODE_FILES = {
  "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Counter App</title>
</head>
<body>
  <main class="card">
    <h1 id="title">Hello, Menelik!</h1>
    <p class="sub">Full HTML · CSS · JavaScript playground</p>
    <div class="counter">
      <button id="dec" type="button">−</button>
      <span id="count">0</span>
      <button id="inc" type="button">+</button>
    </div>
    <button id="reset" type="button" class="secondary">Reset</button>
    <p id="out" class="msg"></p>
  </main>
</body>
</html>`,
  "styles.css": `* { box-sizing: border-box; }
body {
  margin: 0; min-height: 100vh; display: grid; place-items: center;
  font-family: system-ui, sans-serif;
  background: linear-gradient(160deg, #0f172a, #1e3a5f);
  color: #e2e8f0;
}
.card {
  width: min(420px, 92vw); padding: 28px 24px; border-radius: 16px;
  background: rgba(15,23,42,0.85); border: 1px solid #334155;
  box-shadow: 0 12px 40px rgba(0,0,0,0.35); text-align: center;
}
h1 { margin: 0 0 6px; color: #38bdf8; font-size: 1.6rem; }
.sub { margin: 0 0 20px; color: #94a3b8; font-size: 0.9rem; }
.counter { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 14px; }
.counter button {
  width: 48px; height: 48px; border: none; border-radius: 12px;
  background: #2563eb; color: #fff; font-size: 1.5rem; cursor: pointer;
}
.counter button:hover { background: #1d4ed8; }
#count { min-width: 64px; font-size: 2rem; font-weight: 700; }
.secondary {
  background: #334155; color: #e2e8f0; border: none;
  padding: 8px 16px; border-radius: 8px; cursor: pointer;
}
.secondary:hover { background: #475569; }
.msg { margin-top: 14px; min-height: 1.2em; color: #86efac; }`,
  "script.js": `const countEl = document.getElementById("count");
const out = document.getElementById("out");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
let count = 0;
function render() {
  countEl.textContent = count;
  if (count === 0) out.textContent = "Click + or − to begin";
  else if (count > 0) out.textContent = "Count is positive (" + count + ")";
  else out.textContent = "Count is negative (" + count + ")";
  console.log("count =", count);
}
inc.addEventListener("click", () => { count++; render(); });
dec.addEventListener("click", () => { count--; render(); });
reset.addEventListener("click", () => { count = 0; render(); });
render();
console.log("Counter app ready.");`,
  "main.js": `// Standalone JS — Run shows console output
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Menelik"));
console.log("2 + 2 =", 2 + 2);
["HTML", "CSS", "JavaScript"].forEach((s, i) => {
  console.log((i + 1) + ". " + s);
});
`
};

const VC_API_DEMO = {
  "api-demo.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>API Fetch Demo</title>\n</head>\n<body>\n  <main class=\"wrap\">\n    <h1>API Fetch Demo</h1>\n    <p class=\"sub\">Real <code>fetch()</code> to public JSON APIs</p>\n    <div class=\"row\">\n      <button id=\"btn-todo\" type=\"button\">Load todo</button>\n      <button id=\"btn-user\" type=\"button\">Load GitHub user</button>\n      <button id=\"btn-dog\" type=\"button\">Random dog</button>\n    </div>\n    <pre id=\"result\">Click a button to fetch…</pre>\n    <img id=\"dog\" alt=\"\" hidden />\n  </main>\n</body>\n</html>",
  "api-demo.css": "* { box-sizing: border-box; }\nbody {\n  margin: 0; min-height: 100vh;\n  font-family: system-ui, sans-serif;\n  background: #0b1220; color: #e2e8f0;\n  display: grid; place-items: center; padding: 16px;\n}\n.wrap {\n  width: min(520px, 100%);\n  background: #111827; border: 1px solid #334155;\n  border-radius: 14px; padding: 22px;\n}\nh1 { margin: 0 0 6px; font-size: 1.35rem; color: #7dd3fc; }\n.sub { margin: 0 0 16px; color: #94a3b8; font-size: .9rem; }\n.row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }\nbutton {\n  background: #2563eb; color: #fff; border: none;\n  padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 13px;\n}\nbutton:hover { background: #1d4ed8; }\nbutton:disabled { opacity: .55; cursor: wait; }\n#result {\n  margin: 0; padding: 12px; border-radius: 8px;\n  background: #0f172a; border: 1px solid #1e293b;\n  white-space: pre-wrap; word-break: break-word;\n  font-size: 12px; line-height: 1.45; min-height: 120px;\n}\n#dog { display: block; margin-top: 12px; max-width: 100%; border-radius: 10px; }\ncode { color: #86efac; }",
  "api-demo.js": "const result = document.getElementById(\"result\");\nconst dog = document.getElementById(\"dog\");\nconst buttons = [\"btn-todo\", \"btn-user\", \"btn-dog\"].map((id) => document.getElementById(id));\nfunction setBusy(on) { buttons.forEach((b) => { if (b) b.disabled = !!on; }); }\nfunction show(data) { result.textContent = typeof data === \"string\" ? data : JSON.stringify(data, null, 2); }\nasync function getJson(url) {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(res.status + \" \" + res.statusText + \" — \" + url);\n  return res.json();\n}\ndocument.getElementById(\"btn-todo\").addEventListener(\"click\", async () => {\n  setBusy(true); dog.hidden = true;\n  try {\n    const data = await getJson(\"https://jsonplaceholder.typicode.com/todos/1\");\n    console.log(\"todo\", data);\n    show(data);\n  } catch (err) { console.error(err); show(\"Error: \" + err.message); }\n  finally { setBusy(false); }\n});\ndocument.getElementById(\"btn-user\").addEventListener(\"click\", async () => {\n  setBusy(true); dog.hidden = true;\n  try {\n    const data = await getJson(\"https://api.github.com/users/octocat\");\n    console.log(\"user\", data.login);\n    show({ login: data.login, name: data.name, public_repos: data.public_repos, followers: data.followers, html_url: data.html_url });\n  } catch (err) { console.error(err); show(\"Error: \" + err.message); }\n  finally { setBusy(false); }\n});\ndocument.getElementById(\"btn-dog\").addEventListener(\"click\", async () => {\n  setBusy(true);\n  try {\n    const data = await getJson(\"https://dog.ceo/api/breeds/image/random\");\n    console.log(\"dog\", data.message);\n    show(data); dog.src = data.message; dog.hidden = false;\n  } catch (err) { console.error(err); show(\"Error: \" + err.message); dog.hidden = true; }\n  finally { setBusy(false); }\n});\nconsole.log(\"API demo ready — fetch is enabled in this preview.\");"
};


function buildVSCode() {
  /* Integrate https://liveweave.com/ inside Menelik OS + offline playground fallback */
  const LIVEWEAVE_URL = "https://liveweave.com/";
  const wrap = document.createElement("div");
  wrap.className = "liveweave-app lw-integrated";

  const DEFAULTS = {
    html:
      "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>Liveweave</title>\n</head>\n<body>\n  <h1>Hello, Liveweave!</h1>\n  <p>Edit HTML, CSS, and JavaScript — preview updates live.</p>\n  <button id=\"btn\">Click me</button>\n</body>\n</html>",
    css:
      "* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  min-height: 100vh;\n  font-family: system-ui, Segoe UI, sans-serif;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(145deg, #0f172a, #1d4ed8);\n  color: #f8fafc;\n  text-align: center;\n  padding: 24px;\n}\nh1 { margin: 0 0 8px; font-size: 2rem; }\np { opacity: 0.85; max-width: 36ch; }\nbutton {\n  margin-top: 16px;\n  padding: 10px 18px;\n  border: 0;\n  border-radius: 999px;\n  background: #22c55e;\n  color: #052e16;\n  font-weight: 700;\n  cursor: pointer;\n}\nbutton:hover { filter: brightness(1.08); }",
    js:
      "const btn = document.getElementById(\"btn\");\nlet n = 0;\nbtn.addEventListener(\"click\", () => {\n  n += 1;\n  btn.textContent = \"Clicked \" + n + (n === 1 ? \" time\" : \" times\");\n});\nconsole.log(\"Liveweave ready\");",
  };

  let mode = "online"; // online = embed liveweave.com, local = offline playground
  try {
    const m = localStorage.getItem("portfolio-liveweave-mode");
    if (m === "local" || m === "online") mode = m;
  } catch (_) {}

  let state = { html: DEFAULTS.html, css: DEFAULTS.css, js: DEFAULTS.js, auto: true, layout: "top" };
  try {
    const raw = localStorage.getItem("portfolio-liveweave");
    if (raw) {
      const saved = JSON.parse(raw);
      state = {
        html: typeof saved.html === "string" ? saved.html : DEFAULTS.html,
        css: typeof saved.css === "string" ? saved.css : DEFAULTS.css,
        js: typeof saved.js === "string" ? saved.js : DEFAULTS.js,
        auto: saved.auto !== false,
        layout: saved.layout === "left" ? "left" : "top",
      };
    }
  } catch (_) {}

  wrap.innerHTML =
    '<div class="lw-toolbar">' +
    '  <div class="lw-brand" title="Liveweave">' +
    '    <span class="lw-logo">LW</span><span class="lw-title">Liveweave</span>' +
    "  </div>" +
    '  <div class="lw-mode-tabs" role="tablist">' +
    '    <button type="button" class="lw-mode-btn' +
    (mode === "online" ? " active" : "") +
    '" data-mode="online" role="tab">liveweave.com</button>' +
    '    <button type="button" class="lw-mode-btn' +
    (mode === "local" ? " active" : "") +
    '" data-mode="local" role="tab">Offline editor</button>' +
    "  </div>" +
    '  <div class="lw-actions lw-online-actions">' +
    '    <button type="button" class="lw-btn lw-reload" title="Reload Liveweave">↻ Reload</button>' +
    '    <a class="lw-btn lw-open-ext" href="https://liveweave.com/" target="_blank" rel="noopener noreferrer">Open ↗</a>' +
    "  </div>" +
    '  <div class="lw-actions lw-local-actions" hidden>' +
    '    <label class="lw-check" title="Update preview while typing">' +
    '      <input type="checkbox" class="lw-auto"' +
    (state.auto ? " checked" : "") +
    " /> Auto-run</label>" +
    '    <button type="button" class="lw-btn lw-run" title="Run (Ctrl+Enter)">▶ Run</button>' +
    '    <button type="button" class="lw-btn lw-layout" title="Toggle layout">⊡ Layout</button>' +
    '    <button type="button" class="lw-btn lw-reset" title="Reset sample">Reset</button>' +
    '    <button type="button" class="lw-btn lw-export" title="Download HTML file">⬇ Export</button>' +
    "  </div>" +
    '  <div class="lw-status">Connecting to liveweave.com…</div>' +
    "</div>" +
    '<div class="lw-online-view">' +
    '  <iframe class="lw-site-frame" src="https://liveweave.com/" title="Liveweave" allow="accelerometer; clipboard-write; encrypted-media; gyroscope" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
    '  <div class="lw-embed-fallback" hidden>' +
    "    <h3>Could not embed Liveweave</h3>" +
    "    <p>The site may block embedding in a frame, or you may be offline.</p>" +
    '    <p><a href="https://liveweave.com/" target="_blank" rel="noopener noreferrer">Open liveweave.com in a new tab</a> · or use the <strong>Offline editor</strong> tab.</p>' +
    "  </div>" +
    "</div>" +
    '<div class="lw-local-view" hidden>' +
    '  <div class="lw-workspace lw-layout-' +
    state.layout +
    '">' +
    '    <div class="lw-editors">' +
    '      <section class="lw-pane" data-pane="html">' +
    '        <header class="lw-pane-head"><span class="lw-dot html"></span> HTML</header>' +
    '        <textarea class="lw-code" data-lang="html" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
    "      </section>" +
    '      <section class="lw-pane" data-pane="css">' +
    '        <header class="lw-pane-head"><span class="lw-dot css"></span> CSS</header>' +
    '        <textarea class="lw-code" data-lang="css" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
    "      </section>" +
    '      <section class="lw-pane" data-pane="js">' +
    '        <header class="lw-pane-head"><span class="lw-dot js"></span> JavaScript</header>' +
    '        <textarea class="lw-code" data-lang="js" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>' +
    "      </section>" +
    "    </div>" +
    '    <div class="lw-preview-wrap">' +
    '      <header class="lw-pane-head"><span>Result</span><span class="lw-preview-hint">sandbox preview</span></header>' +
    '      <iframe class="lw-preview" sandbox="allow-scripts allow-modals allow-forms allow-same-origin" title="Preview"></iframe>' +
    "    </div>" +
    "  </div>" +
    "</div>";

  const status = wrap.querySelector(".lw-status");
  const onlineView = wrap.querySelector(".lw-online-view");
  const localView = wrap.querySelector(".lw-local-view");
  const onlineActions = wrap.querySelector(".lw-online-actions");
  const localActions = wrap.querySelector(".lw-local-actions");
  const siteFrame = wrap.querySelector(".lw-site-frame");
  const embedFallback = wrap.querySelector(".lw-embed-fallback");
  const htmlTa = wrap.querySelector('textarea[data-lang="html"]');
  const cssTa = wrap.querySelector('textarea[data-lang="css"]');
  const jsTa = wrap.querySelector('textarea[data-lang="js"]');
  const frame = wrap.querySelector(".lw-preview");
  const autoCb = wrap.querySelector(".lw-auto");
  const workspace = wrap.querySelector(".lw-workspace");
  let timer = null;
  let embedOk = false;

  htmlTa.value = state.html;
  cssTa.value = state.css;
  jsTa.value = state.js;

  function setStatus(msg, ok) {
    status.textContent = msg;
    status.classList.toggle("ok", ok === true);
    status.classList.toggle("err", ok === false);
  }

  function setMode(next) {
    mode = next === "local" ? "local" : "online";
    try {
      localStorage.setItem("portfolio-liveweave-mode", mode);
    } catch (_) {}
    wrap.querySelectorAll(".lw-mode-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
    });
    const isOnline = mode === "online";
    onlineView.hidden = !isOnline;
    localView.hidden = isOnline;
    onlineActions.hidden = !isOnline;
    localActions.hidden = isOnline;
    if (isOnline) {
      setStatus(embedOk ? "liveweave.com loaded" : "Loading liveweave.com…", embedOk ? true : undefined);
    } else {
      setStatus("Offline editor", true);
      runLocal();
    }
  }

  function persistLocal() {
    try {
      localStorage.setItem(
        "portfolio-liveweave",
        JSON.stringify({
          html: htmlTa.value,
          css: cssTa.value,
          js: jsTa.value,
          auto: !!autoCb.checked,
          layout: workspace.classList.contains("lw-layout-left") ? "left" : "top",
        })
      );
    } catch (_) {}
  }

  function buildSrcdoc() {
    let html = htmlTa.value || "";
    const css = cssTa.value || "";
    const js = jsTa.value || "";
    const styleTag = "<style>\n" + css + "\n</style>";
    const scriptTag =
      "<script>\ntry {\n" +
      js +
      "\n} catch (e) { console.error(e); document.body.insertAdjacentHTML('beforeend', '<pre style=\"color:#f87171;padding:12px;font:12px monospace\">' + e.message + '</pre>'); }\n</scr" +
      "ipt>";
    if (/<html[\s>]/i.test(html)) {
      if (/<head[\s>]/i.test(html)) {
        html = html.replace(/<\/head>/i, styleTag + "\n</head>");
      } else {
        html = html.replace(/<html[^>]*>/i, function (m) {
          return m + "<head>" + styleTag + "</head>";
        });
      }
      if (/<body[\s>]/i.test(html)) {
        html = html.replace(/<\/body>/i, scriptTag + "\n</body>");
      } else {
        html += scriptTag;
      }
      return html;
    }
    return (
      "<!DOCTYPE html><html><head><meta charset=\"UTF-8\" />" +
      styleTag +
      "</head><body>" +
      html +
      scriptTag +
      "</body></html>"
    );
  }

  function runLocal() {
    try {
      frame.srcdoc = buildSrcdoc();
      setStatus("Preview updated · " + new Date().toLocaleTimeString(), true);
      persistLocal();
    } catch (err) {
      setStatus("Error: " + (err && err.message ? err.message : err), false);
    }
  }

  function schedule() {
    if (!autoCb.checked || mode !== "local") return;
    clearTimeout(timer);
    timer = setTimeout(runLocal, 350);
  }

  function bindEditor(ta) {
    ta.addEventListener("input", schedule);
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        const s0 = ta.selectionStart;
        const s1 = ta.selectionEnd;
        ta.value = ta.value.slice(0, s0) + "  " + ta.value.slice(s1);
        ta.selectionStart = ta.selectionEnd = s0 + 2;
        schedule();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runLocal();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        persistLocal();
        setStatus("Saved locally", true);
      }
    });
  }
  [htmlTa, cssTa, jsTa].forEach(bindEditor);

  wrap.querySelectorAll(".lw-mode-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setMode(btn.getAttribute("data-mode"));
    });
  });

  wrap.querySelector(".lw-reload").addEventListener("click", function () {
    embedFallback.hidden = true;
    siteFrame.hidden = false;
    embedOk = false;
    setStatus("Reloading liveweave.com…");
    siteFrame.src = LIVEWEAVE_URL + "?t=" + Date.now();
  });

  wrap.querySelector(".lw-run").addEventListener("click", runLocal);
  autoCb.addEventListener("change", function () {
    persistLocal();
    if (autoCb.checked) runLocal();
  });
  wrap.querySelector(".lw-layout").addEventListener("click", function () {
    const left = workspace.classList.toggle("lw-layout-left");
    workspace.classList.toggle("lw-layout-top", !left);
    persistLocal();
  });
  wrap.querySelector(".lw-reset").addEventListener("click", function () {
    if (!confirm("Reset HTML, CSS, and JS to the sample project?")) return;
    htmlTa.value = DEFAULTS.html;
    cssTa.value = DEFAULTS.css;
    jsTa.value = DEFAULTS.js;
    runLocal();
  });
  wrap.querySelector(".lw-export").addEventListener("click", function () {
    const blob = new Blob([buildSrcdoc()], { type: "text/html;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "liveweave-export.html";
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus("Exported liveweave-export.html", true);
  });

  siteFrame.addEventListener("load", function () {
    // Cannot always detect X-Frame-Options denial; assume success if load fires
    embedOk = true;
    embedFallback.hidden = true;
    siteFrame.hidden = false;
    if (mode === "online") setStatus("liveweave.com loaded", true);
  });

  // If still not loaded after a while, show fallback tip (may be frame-blocked)
  setTimeout(function () {
    if (!embedOk && mode === "online") {
      // Keep iframe visible; some browsers still show content. Also show tip bar.
      setStatus("If the page is blank, use Offline editor or Open ↗", false);
    }
  }, 5000);

  workspace.classList.toggle("lw-layout-left", state.layout === "left");
  workspace.classList.toggle("lw-layout-top", state.layout !== "left");

  setMode(mode);
  return wrap;
}


function buildMinesweeper() {
  const ROWS = 9, COLS = 9, MINES = 10;
  const wrap = document.createElement("div");
  wrap.className = "minesweeper-app";
  let grid = [];
  let started = false;
  let dead = false;
  let won = false;
  let flags = 0;
  let timer = 0;
  let timerId = null;

  wrap.innerHTML = `
    <div class="ms-toolbar">
      <span class="ms-mines">💣 <span class="ms-mine-count">${String(MINES).padStart(3,"0")}</span></span>
      <button type="button" class="ms-face" title="New game">🙂</button>
      <span class="ms-time">⏱ <span class="ms-timer">000</span></span>
    </div>
    <div class="ms-board" role="grid"></div>
    <div class="ms-status">Left-click open · Right-click flag</div>
  `;
  const board = wrap.querySelector(".ms-board");
  const face = wrap.querySelector(".ms-face");
  const mineCount = wrap.querySelector(".ms-mine-count");
  const timerEl = wrap.querySelector(".ms-timer");
  const status = wrap.querySelector(".ms-status");

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }
  function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
      timer = Math.min(999, timer + 1);
      timerEl.textContent = String(timer).padStart(3, "0");
    }, 1000);
  }
  function neighbors(r, c) {
    const out = [];
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) out.push([nr, nc]);
      }
    return out;
  }
  function placeMines(safeR, safeC) {
    let placed = 0;
    while (placed < MINES) {
      const r = Math.floor(Math.random() * ROWS);
      const c = Math.floor(Math.random() * COLS);
      if (grid[r][c].mine) continue;
      if (Math.abs(r - safeR) <= 1 && Math.abs(c - safeC) <= 1) continue;
      grid[r][c].mine = true;
      placed++;
    }
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c].mine) continue;
        grid[r][c].n = neighbors(r, c).filter(([nr, nc]) => grid[nr][nc].mine).length;
      }
  }
  function reset() {
    stopTimer();
    started = false; dead = false; won = false; flags = 0; timer = 0;
    timerEl.textContent = "000";
    mineCount.textContent = String(MINES).padStart(3, "0");
    face.textContent = "🙂";
    status.textContent = "Left-click open · Right-click flag";
    grid = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => ({ mine: false, open: false, flag: false, n: 0 }))
    );
    render();
  }
  function openCell(r, c) {
    const cell = grid[r][c];
    if (cell.open || cell.flag || dead || won) return;
    if (!started) {
      started = true;
      placeMines(r, c);
      startTimer();
    }
    if (cell.mine) {
      dead = true;
      stopTimer();
      face.textContent = "💥";
      status.textContent = "Game over — click face to retry";
      grid.forEach(row => row.forEach(c => { if (c.mine) c.open = true; }));
      render();
      return;
    }
    const stack = [[r, c]];
    while (stack.length) {
      const [cr, cc] = stack.pop();
      const cl = grid[cr][cc];
      if (cl.open || cl.flag) continue;
      cl.open = true;
      if (cl.n === 0) neighbors(cr, cc).forEach(([nr, nc]) => {
        if (!grid[nr][nc].open && !grid[nr][nc].flag) stack.push([nr, nc]);
      });
    }
    checkWin();
    render();
  }
  function toggleFlag(r, c) {
    if (dead || won) return;
    const cell = grid[r][c];
    if (cell.open) return;
    cell.flag = !cell.flag;
    flags += cell.flag ? 1 : -1;
    mineCount.textContent = String(Math.max(0, MINES - flags)).padStart(3, "0");
    checkWin();
    render();
  }
  function checkWin() {
    let closed = 0;
    grid.forEach(row => row.forEach(c => { if (!c.open) closed++; }));
    if (closed === MINES && !dead) {
      won = true;
      stopTimer();
      face.textContent = "😎";
      status.textContent = "You win!";
      grid.forEach(row => row.forEach(c => { if (c.mine) c.flag = true; }));
    }
  }
  function render() {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${COLS}, 24px)`;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = grid[r][c];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ms-cell";
        if (cell.open) {
          btn.classList.add("open");
          if (cell.mine) {
            btn.textContent = "💣";
            btn.classList.add("mine");
          } else if (cell.n > 0) {
            btn.textContent = cell.n;
            btn.dataset.n = cell.n;
          }
        } else if (cell.flag) {
          btn.textContent = "🚩";
          btn.classList.add("flag");
        }
        btn.addEventListener("click", () => openCell(r, c));
        btn.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          toggleFlag(r, c);
        });
        board.appendChild(btn);
      }
    }
  }
  face.addEventListener("click", reset);
  reset();
  return wrap;
}



/* ========== XP dialog + UI sounds ========== */
function showXpDialog(title, body) {
  const dlg = document.getElementById("xp-dialog");
  if (!dlg) { try { alert(body); } catch (_) {} return; }
  const tEl = document.getElementById("xp-dialog-title-text");
  const bEl = document.getElementById("xp-dialog-body");
  if (tEl) tEl.textContent = title || "Message";
  if (bEl) bEl.textContent = body || "";
  dlg.hidden = false;
  try { playUiSound("notify"); } catch (_) {}
}
document.getElementById("xp-dialog-ok")?.addEventListener("click", () => {
  document.getElementById("xp-dialog").hidden = true;
});

let uiSoundsEnabled = localStorage.getItem("portfolio-sounds") !== "off";
let _uiAudioCtx = null;
function playUiSound(kind) {
  if (!uiSoundsEnabled) return;
  // Window open/close tones disabled (silent by design)
  if (kind === "open" || kind === "close") return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!_uiAudioCtx || _uiAudioCtx.state === "closed") {
      _uiAudioCtx = new AC();
    }
    const ctx = _uiAudioCtx;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    const now = ctx.currentTime;
    o.frequency.setValueAtTime(660, now);
    g.gain.setValueAtTime(0.05, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    o.start(now); o.stop(now + 0.16);
  } catch (_) {}
}

/* ========== Recycle Bin (recover closed windows) ========== */
const recycleBin = [];
function buildRecycleBin() {
  const wrap = document.createElement("div");
  wrap.className = "recycle-app";
  function render() {
    if (!recycleBin.length) {
      wrap.innerHTML = `<div class="recycle-empty"><div class="recycle-empty-icon">🗑</div><p>Recycle Bin is empty</p></div>`;
      return;
    }
    wrap.innerHTML = `
      <div class="recycle-toolbar">
        <button type="button" class="recycle-empty-btn">Empty Recycle Bin</button>
      </div>
      <ul class="recycle-list">
        ${recycleBin.map((item, i) => `
          <li>
            <span>${item.title || item.id}</span>
            <button type="button" data-restore="${i}">Restore</button>
          </li>`).join("")}
      </ul>`;
    wrap.querySelector(".recycle-empty-btn")?.addEventListener("click", () => {
      recycleBin.length = 0;
      render();
      showXpDialog("Recycle Bin", "Recycle Bin has been emptied.");
    });
    wrap.querySelectorAll("[data-restore]").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = +btn.dataset.restore;
        const item = recycleBin.splice(i, 1)[0];
        if (item) openWindow(item.id);
        render();
      });
    });
  }
  render();
  wrap._refresh = render;
  return wrap;
}

/* ========== Control Panel ========== */
function applyIconSizes(desktopSize, startSize, spacing) {
  const validSize = new Set(["small", "medium", "large", "xlarge", "custom"]);
  const validSpace = new Set(["tight", "normal", "comfortable", "wide", "custom"]);
  let d = desktopSize != null ? desktopSize : (localStorage.getItem("portfolio-icon-desktop") || "medium");
  let s = startSize != null ? startSize : (localStorage.getItem("portfolio-icon-start") || "medium");
  let g = spacing != null ? spacing : (localStorage.getItem("portfolio-icon-spacing") || "normal");
  if (!validSize.has(d)) d = "medium";
  if (!validSize.has(s)) s = "medium";
  if (!validSpace.has(g)) g = "normal";
  document.body.dataset.iconDesktop = d;
  document.body.dataset.iconStart = s;
  document.body.dataset.iconSpacing = g;
  localStorage.setItem("portfolio-icon-desktop", d);
  localStorage.setItem("portfolio-icon-start", s);
  localStorage.setItem("portfolio-icon-spacing", g);
}

function buildControlPanel() {
  const wrap = document.createElement("div");
  wrap.className = "control-app";
  const isLight = document.body.classList.contains("light");
  const dSize = localStorage.getItem("portfolio-icon-desktop") || "medium";
  const sSize = localStorage.getItem("portfolio-icon-start") || "medium";
  const gSize = localStorage.getItem("portfolio-icon-spacing") || "normal";
  const sizeOpts = (cur) =>
    ["small", "medium", "large", "xlarge", "custom"].map(v =>
      `<option value="${v}" ${cur === v ? "selected" : ""}>${v[0].toUpperCase() + v.slice(1)}</option>`
    ).join("");
  const spaceOpts = (cur) =>
    [
      ["tight", "Tight (0–2px)"],
      ["normal", "Normal (4–6px)"],
      ["comfortable", "Comfortable (10–14px)"],
      ["wide", "Wide (16–20px)"],
      ["custom", "Custom (Registry)"]
    ].map(([v, label]) =>
      `<option value="${v}" ${cur === v ? "selected" : ""}>${label}</option>`
    ).join("");
  wrap.innerHTML = `
    <h3 class="cp-title">Control Panel</h3>
    <div class="cp-section">
      <h4>Display</h4>
      <label class="cp-row"><span>Theme</span>
        <select class="cp-theme">
          <option value="dark" ${!isLight ? "selected" : ""}>Dark</option>
          <option value="light" ${isLight ? "selected" : ""}>Light</option>
        </select>
      </label>
      <label class="cp-row"><span>Wallpaper accent</span>
        <select class="cp-wall">
          <option value="default">Default blue</option>
          <option value="green">Green field</option>
          <option value="sunset">Sunset</option>
          <option value="night">Deep night</option>
        </select>
      </label>
    </div>
    <div class="cp-section">
      <h4>Icons</h4>
      <label class="cp-row"><span>Desktop size</span>
        <select class="cp-icon-desktop">${sizeOpts(dSize)}</select>
      </label>
      <label class="cp-row"><span>Start menu size</span>
        <select class="cp-icon-start">${sizeOpts(sSize)}</select>
      </label>
      <label class="cp-row"><span>Desktop spacing</span>
        <select class="cp-icon-spacing">${spaceOpts(gSize)}</select>
      </label>
      <p class="cp-about" style="margin-top:6px">Size and spacing apply immediately and are saved for next visit.</p>
      <button type="button" class="cp-open-reg proj-btn" style="margin-top:8px">Advanced: Registry Editor…</button>
    </div>
    <div class="cp-section">
      <h4>System notifications &amp; sound</h4>
      <label class="cp-row"><span>Notification sounds</span>
        <input type="checkbox" class="cp-sounds" ${uiSoundsEnabled ? "checked" : ""} title="Dialogs and Control Panel feedback" />
      </label>
      <label class="cp-row"><span>Window open / close</span>
        <input type="checkbox" class="cp-win-sounds" disabled title="Always off" />
      </label>
      <p class="cp-about" style="margin:0 0 8px">Window open and close tones are permanently silent.</p>
      <label class="cp-row"><span>Startup sound</span>
        <input type="checkbox" class="cp-startup-sound" ${localStorage.getItem("portfolio-startup-sound") !== "off" ? "checked" : ""} />
      </label>
      <button type="button" class="cp-test-sound proj-btn">Test notification</button>
    </div>
    <div class="cp-section">
      <h4>Screensaver</h4>
      <label class="cp-row"><span>Idle minutes</span>
        <select class="cp-ss-idle">
          <option value="0">Off</option>
          <option value="1">1</option>
          <option value="2" selected>2</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
    <div class="cp-section">
      <h4>About this PC</h4>
      <p class="cp-about">Menelik OS · XP Portfolio<br/>https://menelikcv.vercel.app</p>
    </div>
  `;
  const savedWall = localStorage.getItem("portfolio-wallpaper") || "default";
  const savedIdle = localStorage.getItem("portfolio-ss-idle") || "2";
  wrap.querySelector(".cp-wall").value = savedWall;
  wrap.querySelector(".cp-ss-idle").value = savedIdle;

  wrap.querySelector(".cp-theme").addEventListener("change", (e) => {
    applyTheme(e.target.value);
    playUiSound("notify");
  });
  wrap.querySelector(".cp-wall").addEventListener("change", (e) => {
    document.body.dataset.wallpaper = e.target.value;
    localStorage.setItem("portfolio-wallpaper", e.target.value);
  });
  wrap.querySelector(".cp-icon-desktop").addEventListener("change", (e) => {
    const size = e.target.value;
    if (size !== "custom") {
      localStorage.removeItem("portfolio-icon-img-px");
      document.documentElement.style.removeProperty("--icon-img-size");
      // optional: clear cell size overrides so preset widths apply
      localStorage.removeItem("portfolio-icon-width");
      localStorage.removeItem("portfolio-icon-height");
      document.documentElement.style.removeProperty("--icon-cell-w");
      document.documentElement.style.removeProperty("--icon-cell-h");
    }
    applyIconSizes(size, null, null);
    playUiSound("notify");
  });
  wrap.querySelector(".cp-icon-start").addEventListener("change", (e) => {
    applyIconSizes(null, e.target.value, null);
    playUiSound("notify");
  });
  wrap.querySelector(".cp-icon-spacing").addEventListener("change", (e) => {
    const space = e.target.value;
    localStorage.removeItem("portfolio-icon-gap-px");
    localStorage.removeItem("portfolio-icon-gap-y");
    localStorage.removeItem("portfolio-icon-gap-y-locked");
    document.documentElement.style.removeProperty("--icon-gap-y");
    document.documentElement.style.removeProperty("--icon-gap-x");
    applyIconSizes(null, null, space);
    playUiSound("notify");
  });
  wrap.querySelector(".cp-open-reg")?.addEventListener("click", () => {
    openWindow("registry");
  });
  wrap.querySelector(".cp-sounds").addEventListener("change", (e) => {
    uiSoundsEnabled = e.target.checked;
    localStorage.setItem("portfolio-sounds", uiSoundsEnabled ? "on" : "off");
  });
  wrap.querySelector(".cp-startup-sound")?.addEventListener("change", (e) => {
    localStorage.setItem("portfolio-startup-sound", e.target.checked ? "on" : "off");
  });
  wrap.querySelector(".cp-test-sound").addEventListener("click", () => playUiSound("notify"));
  wrap.querySelector(".cp-ss-idle").addEventListener("change", (e) => {
    localStorage.setItem("portfolio-ss-idle", e.target.value);
    resetScreensaverTimer();
  });
  document.body.dataset.wallpaper = savedWall;
  return wrap;
}



/* ========== Registry Editor (XP-style icon spacing tweaks) ========== */
const REG_KEYS = {
  desktopSpacing: {
    path: "HKEY_CURRENT_USER\\Control Panel\\Desktop",
    name: "IconSpacing",
    type: "REG_SZ",
    hint: "Icon spacing in px (0–64) or XP-style (-480 to -2730). Examples: 4 tight · 12 normal · 24 comfortable · 36 wide · -1125 (XP default ≈ 12px).",
    get: () => {
      const px = localStorage.getItem("portfolio-icon-gap-px");
      if (px != null && px !== "") return String(px);
      const map = { tight: "4", normal: "12", comfortable: "24", wide: "36" };
      return map[localStorage.getItem("portfolio-icon-spacing") || "normal"] || "12";
    },
    set: (v) => {
      const raw = String(v).trim().toLowerCase();
      let px = null;
      // Named presets
      const named = { tight: 4, normal: 12, comfortable: 24, wide: 36 };
      if (raw in named) px = named[raw];
      else {
        const n = parseInt(raw, 10);
        if (isNaN(n)) return null;
        // XP-style negative registry values → approximate px ( |value| / 15 / 6 ≈ loose mapping )
        // Real XP: -480 (tight) … -1125 (default) … -2730 (wide). Map: px ≈ clamp(round(|n|/75 - 2), 0, 64)
        if (n < 0) {
          px = Math.round(Math.abs(n) / 75 - 2);
          px = Math.max(0, Math.min(64, px));
        } else {
          px = Math.max(0, Math.min(64, n));
        }
      }
      let space = "custom";
      if (px <= 6) space = "tight";
      else if (px <= 16) space = "normal";
      else if (px <= 28) space = "comfortable";
      else if (px <= 40) space = "wide";
      else space = "custom";

      const gapX = Math.round(px * 1.25);
      document.documentElement.style.setProperty("--icon-gap-y", px + "px");
      document.documentElement.style.setProperty("--icon-gap-x", gapX + "px");
      localStorage.setItem("portfolio-icon-gap-px", String(px));
      // Keep vertical in sync unless user set it separately
      if (!localStorage.getItem("portfolio-icon-gap-y-locked")) {
        localStorage.setItem("portfolio-icon-gap-y", String(px));
        document.documentElement.style.setProperty("--icon-gap-y", px + "px");
      }
      applyIconSizes(null, null, space);
      document.body.dataset.iconSpacing = space === "custom" ? "custom" : space;
      return String(px);
    }
  },
  desktopVertical: {
    path: "HKEY_CURRENT_USER\\Control Panel\\Desktop",
    name: "IconVerticalSpacing",
    type: "REG_SZ",
    hint: "Vertical gap only (0–80 px). Locks independent of IconSpacing until cleared.",
    get: () => {
      return localStorage.getItem("portfolio-icon-gap-y")
        || localStorage.getItem("portfolio-icon-gap-px")
        || "12";
    },
    set: (v) => {
      const n = parseInt(String(v).trim(), 10);
      if (isNaN(n) || n < 0 || n > 80) return null;
      document.documentElement.style.setProperty("--icon-gap-y", n + "px");
      localStorage.setItem("portfolio-icon-gap-y", String(n));
      localStorage.setItem("portfolio-icon-gap-y-locked", "1");
      // Ensure custom spacing mode so CSS variables win
      document.body.dataset.iconSpacing = "custom";
      localStorage.setItem("portfolio-icon-spacing", "custom");
      return String(n);
    }
  },
  iconSize: {
    path: "HKEY_CURRENT_USER\\Control Panel\\Desktop\\WindowMetrics",
    name: "Shell Icon Size",
    type: "REG_SZ",
    hint: "Bitmap size of the icon image (16–128 px). XP default 32. Independent of IconWidth/IconHeight grid cell.",
    get: () => {
      const custom = localStorage.getItem("portfolio-icon-img-px");
      if (custom) return custom;
      const map = { small: "32", medium: "48", large: "64", xlarge: "80" };
      return map[localStorage.getItem("portfolio-icon-desktop") || "medium"] || "48";
    },
    set: (v) => {
      let n = parseInt(String(v).trim(), 10);
      if (isNaN(n)) return null;
      // XP sometimes stored negative metrics — accept abs
      n = Math.abs(n);
      n = Math.max(16, Math.min(128, n));
      document.documentElement.style.setProperty("--icon-img-size", n + "px");
      localStorage.setItem("portfolio-icon-img-px", String(n));
      // Map nearest preset for Control Panel sync
      let size = "medium";
      if (n <= 36) size = "small";
      else if (n <= 56) size = "medium";
      else if (n <= 72) size = "large";
      else size = "xlarge";
      document.body.dataset.iconDesktop = "custom";
      localStorage.setItem("portfolio-icon-desktop", "custom");
      // still call apply for start menu unchanged
      applyIconSizes("custom", null, null);
      document.documentElement.style.setProperty("--icon-img-size", n + "px");
      return String(n);
    }
  },
  iconWidth: {
    path: "HKEY_CURRENT_USER\\Control Panel\\Desktop\\WindowMetrics",
    name: "IconWidth",
    type: "REG_SZ",
    hint: "Desktop icon grid cell width (px). In XP this is often a negative twip-like value; enter positive px (48–160) or XP-style negative (÷15).",
    get: () => localStorage.getItem("portfolio-icon-width") || "78",
    set: (v) => {
      let n = parseInt(String(v).trim(), 10);
      if (isNaN(n)) return null;
      if (n < 0) n = Math.round(Math.abs(n) / 15); // XP WindowMetrics style
      n = Math.max(48, Math.min(200, n));
      document.documentElement.style.setProperty("--icon-cell-w", n + "px");
      localStorage.setItem("portfolio-icon-width", String(n));
      document.body.dataset.iconDesktop = document.body.dataset.iconDesktop || "custom";
      return String(n);
    }
  },
  iconHeight: {
    path: "HKEY_CURRENT_USER\\Control Panel\\Desktop\\WindowMetrics",
    name: "IconHeight",
    type: "REG_SZ",
    hint: "Desktop icon grid cell height including label (px). XP negative values accepted (÷15). Typical 64–120.",
    get: () => localStorage.getItem("portfolio-icon-height") || "72",
    set: (v) => {
      let n = parseInt(String(v).trim(), 10);
      if (isNaN(n)) return null;
      if (n < 0) n = Math.round(Math.abs(n) / 15);
      n = Math.max(48, Math.min(220, n));
      document.documentElement.style.setProperty("--icon-cell-h", n + "px");
      localStorage.setItem("portfolio-icon-height", String(n));
      return String(n);
    }
  },
  startIconSize: {
    path: "HKEY_CURRENT_USER\\Software\\Menelik\\StartMenu",
    name: "IconSize",
    type: "REG_SZ",
    hint: "Start menu icon size (18–40 px mapped to small…xlarge).",
    get: () => {
      const map = { small: "18", medium: "24", large: "32", xlarge: "40" };
      return map[localStorage.getItem("portfolio-icon-start") || "medium"] || "24";
    },
    set: (v) => {
      const n = parseInt(v, 10);
      let size = "medium";
      if (n <= 20) size = "small";
      else if (n <= 28) size = "medium";
      else if (n <= 36) size = "large";
      else size = "xlarge";
      applyIconSizes(null, size, null);
      return size;
    }
  },
  snapThreshold: {
    path: "HKEY_CURRENT_USER\\Software\\Menelik\\WindowManager",
    name: "SnapThreshold",
    type: "REG_DWORD",
    hint: "Pixels from screen edge to trigger Aero Snap (8–48).",
    get: () => String(window.__snapThreshold || 18),
    set: (v) => {
      const n = parseInt(v, 10);
      if (isNaN(n) || n < 8 || n > 48) return null;
      // SNAP_THRESHOLD is const — use runtime override
      window.__snapThreshold = n;
      localStorage.setItem("portfolio-snap-threshold", String(n));
      return String(n);
    }
  }
};

function buildRegistry() {
  const wrap = document.createElement("div");
  wrap.className = "registry-app";
  const keys = Object.keys(REG_KEYS);
  wrap.innerHTML = `
    <div class="reg-toolbar">
      <span class="reg-title">Registry Editor</span>
      <span class="reg-status" data-reg-status>Ready</span>
    </div>
    <div class="reg-body">
      <div class="reg-tree">
        <div class="reg-tree-root">Computer</div>
        <div class="reg-tree-item open" data-hive="hkcu">
          <button type="button" class="reg-twist" aria-expanded="true">▾</button>
          <span class="reg-folder">HKEY_CURRENT_USER</span>
          <div class="reg-tree-children">
            <div class="reg-tree-item open">
              <button type="button" class="reg-twist">▾</button>
              <span class="reg-folder">Control Panel</span>
              <div class="reg-tree-children">
                <button type="button" class="reg-key active" data-reg-group="desktop">Desktop</button>
                <button type="button" class="reg-key" data-reg-group="metrics">WindowMetrics</button>
              </div>
            </div>
            <div class="reg-tree-item open">
              <button type="button" class="reg-twist">▾</button>
              <span class="reg-folder">Software</span>
              <div class="reg-tree-children">
                <div class="reg-tree-item open">
                  <button type="button" class="reg-twist">▾</button>
                  <span class="reg-folder">Menelik</span>
                  <div class="reg-tree-children">
                    <button type="button" class="reg-key" data-reg-group="start">StartMenu</button>
                    <button type="button" class="reg-key" data-reg-group="wm">WindowManager</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reg-values">
        <div class="reg-path" data-reg-path>HKEY_CURRENT_USER\\Control Panel\\Desktop</div>
        <table class="reg-table">
          <thead><tr><th>Name</th><th>Type</th><th>Data</th></tr></thead>
          <tbody data-reg-tbody></tbody>
        </table>
        <div class="reg-edit">
          <label>Selected value</label>
          <div class="reg-edit-row">
            <input type="text" class="reg-name" readonly />
            <input type="text" class="reg-data" placeholder="Value data" />
            <button type="button" class="reg-apply proj-btn primary">Modify…</button>
          </div>
          <p class="reg-hint" data-reg-hint></p>
        </div>
      </div>
    </div>
  `;

  const groups = {
    desktop: ["desktopSpacing", "desktopVertical"],
    metrics: ["iconSize", "iconWidth", "iconHeight"],
    start: ["startIconSize"],
    wm: ["snapThreshold"]
  };

  let selectedKey = "desktopSpacing";

  function renderGroup(group) {
    const ids = groups[group] || [];
    const tbody = wrap.querySelector("[data-reg-tbody]");
    tbody.innerHTML = ids.map(id => {
      const k = REG_KEYS[id];
      return `<tr class="reg-row" data-reg-id="${id}">
        <td><span class="reg-val-icon"></span> ${k.name}</td>
        <td>${k.type}</td>
        <td class="reg-data-cell">${k.get()}</td>
      </tr>`;
    }).join("");
    if (ids[0]) selectKey(ids[0]);
    const path = ids[0] ? REG_KEYS[ids[0]].path : "";
    wrap.querySelector("[data-reg-path]").textContent = path;
  }

  function selectKey(id) {
    selectedKey = id;
    const k = REG_KEYS[id];
    if (!k) return;
    wrap.querySelectorAll(".reg-row").forEach(r => r.classList.toggle("active", r.dataset.regId === id));
    wrap.querySelector(".reg-name").value = k.name;
    wrap.querySelector(".reg-data").value = k.get();
    wrap.querySelector("[data-reg-hint]").textContent = k.hint;
    wrap.querySelector("[data-reg-path]").textContent = k.path;
  }

  wrap.querySelectorAll(".reg-key").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".reg-key").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGroup(btn.dataset.regGroup);
    });
  });

  wrap.querySelector("[data-reg-tbody]").addEventListener("click", (e) => {
    const row = e.target.closest(".reg-row");
    if (row) selectKey(row.dataset.regId);
  });

  wrap.querySelector("[data-reg-tbody]").addEventListener("dblclick", (e) => {
    const row = e.target.closest(".reg-row");
    if (row) {
      selectKey(row.dataset.regId);
      wrap.querySelector(".reg-data").focus();
      wrap.querySelector(".reg-data").select();
    }
  });

  function applyEdit() {
    const k = REG_KEYS[selectedKey];
    if (!k) return;
    const val = wrap.querySelector(".reg-data").value.trim();
    const result = k.set(val);
    const status = wrap.querySelector("[data-reg-status]");
    if (result == null) {
      status.textContent = "Invalid value";
      status.classList.add("err");
      playUiSound?.("notify");
      return;
    }
    status.textContent = "Value updated";
    status.classList.remove("err");
    // refresh table data cells
    wrap.querySelectorAll(".reg-row").forEach(r => {
      const id = r.dataset.regId;
      if (REG_KEYS[id]) r.querySelector(".reg-data-cell").textContent = REG_KEYS[id].get();
    });
    wrap.querySelector(".reg-data").value = k.get();
    playUiSound?.("open");
  }

  wrap.querySelector(".reg-apply").addEventListener("click", applyEdit);
  wrap.querySelector(".reg-data").addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyEdit();
  });

  renderGroup("desktop");
  return wrap;
}



/* ========== Vector Graphics (SVG explorer / editor) ========== */
function buildVectorGraphics() {
  const wrap = document.createElement("div");
  wrap.className = "vector-app";
  wrap.innerHTML = `
    <div class="vg-toolbar">
      <div class="vg-tools">
        <button type="button" class="vg-btn active" data-tool="select" title="Select (V)">⌖</button>
        <button type="button" class="vg-btn" data-tool="rect" title="Rectangle (R)">▢</button>
        <button type="button" class="vg-btn" data-tool="ellipse" title="Ellipse (O)">◯</button>
        <button type="button" class="vg-btn" data-tool="line" title="Line (L)">／</button>
        <button type="button" class="vg-btn" data-tool="poly" title="Polygon (P)">⬠</button>
        <button type="button" class="vg-btn" data-tool="path" title="Pen path (B)">✎</button>
        <button type="button" class="vg-btn" data-tool="text" title="Text (T)">A</button>
      </div>
      <label class="vg-field">Fill <input type="color" class="vg-fill" value="#38bdf8" /></label>
      <label class="vg-field">Stroke <input type="color" class="vg-stroke" value="#0f172a" /></label>
      <label class="vg-field">Width <input type="number" class="vg-sw" min="0" max="20" value="2" /></label>
      <label class="vg-field"><input type="checkbox" class="vg-nofill" /> No fill</label>
      <div class="vg-actions">
        <button type="button" class="vg-btn" data-act="front" title="Bring front">⬆</button>
        <button type="button" class="vg-btn" data-act="back" title="Send back">⬇</button>
        <button type="button" class="vg-btn" data-act="dup" title="Duplicate">⧉</button>
        <button type="button" class="vg-btn" data-act="del" title="Delete (Del)">🗑</button>
        <button type="button" class="vg-btn" data-act="clear" title="Clear all">Clear</button>
        <button type="button" class="vg-btn primary" data-act="export" title="Export SVG">⬇ SVG</button>
        <button type="button" class="vg-btn" data-act="copy" title="Copy SVG code">Copy</button>
      </div>
    </div>
    <div class="vg-body">
      <div class="vg-canvas-wrap">
        <svg class="vg-svg" viewBox="0 0 640 420" width="640" height="420" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect class="vg-bg" width="640" height="420" fill="#ffffff"/>
          <rect width="640" height="420" fill="url(#vg-grid)" pointer-events="none"/>
          <g class="vg-layer"></g>
        </svg>
      </div>
      <div class="vg-side">
        <div class="vg-side-title">Objects</div>
        <div class="vg-list"></div>
        <div class="vg-side-title">Explore</div>
        <p class="vg-help">Vector graphics use math shapes (SVG), not pixels. Scale freely without blur.</p>
        <ul class="vg-tips">
          <li><strong>Select</strong> — click + drag to move</li>
          <li><strong>Rect / Ellipse / Line</strong> — drag to create</li>
          <li><strong>Polygon</strong> — click points, double-click to close</li>
          <li><strong>Pen</strong> — click path points, double-click end</li>
          <li><strong>Export SVG</strong> — download pure vector file</li>
        </ul>
        <pre class="vg-code" title="Selected element markup"></pre>
      </div>
    </div>
    <div class="vg-status"><span class="vg-tool-label">Select</span> · <span class="vg-msg">Ready</span></div>
  `;

  const svg = wrap.querySelector(".vg-svg");
  const layer = wrap.querySelector(".vg-layer");
  const listEl = wrap.querySelector(".vg-list");
  const codeEl = wrap.querySelector(".vg-code");
  const msg = wrap.querySelector(".vg-msg");
  const toolLabel = wrap.querySelector(".vg-tool-label");
  const fillIn = wrap.querySelector(".vg-fill");
  const strokeIn = wrap.querySelector(".vg-stroke");
  const swIn = wrap.querySelector(".vg-sw");
  const noFill = wrap.querySelector(".vg-nofill");

  let tool = "select";
  let selected = null;
  let drawing = false;
  let start = null;
  let draft = null;
  let polyPts = [];
  let pathPts = [];
  let dragOff = null;
  let idSeq = 1;

  const toolNames = {
    select: "Select", rect: "Rectangle", ellipse: "Ellipse", line: "Line",
    poly: "Polygon", path: "Pen", text: "Text"
  };

  function svgPoint(e) {
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  }
  function fillVal() { return noFill.checked ? "none" : fillIn.value; }
  function strokeVal() { return strokeIn.value; }
  function swVal() { return Math.max(0, +swIn.value || 0); }

  function styleEl(el) {
    el.setAttribute("fill", fillVal());
    el.setAttribute("stroke", strokeVal());
    el.setAttribute("stroke-width", String(swVal()));
    el.setAttribute("stroke-linecap", "round");
    el.setAttribute("stroke-linejoin", "round");
  }

  function selectEl(el) {
    layer.querySelectorAll(".vg-selected").forEach(n => n.classList.remove("vg-selected"));
    selected = el || null;
    if (selected) {
      selected.classList.add("vg-selected");
      codeEl.textContent = selected.outerHTML.replace(/ class="[^"]*vg-selected[^"]*"/, "").slice(0, 280);
      const f = selected.getAttribute("fill");
      if (f && f !== "none") { fillIn.value = f; noFill.checked = false; }
      else noFill.checked = true;
      const s = selected.getAttribute("stroke");
      if (s) strokeIn.value = s;
      const w = selected.getAttribute("stroke-width");
      if (w != null) swIn.value = w;
    } else {
      codeEl.textContent = "";
    }
    renderList();
  }

  function renderList() {
    const kids = Array.from(layer.children);
    listEl.innerHTML = kids.map((el, i) => {
      const tag = el.tagName.toLowerCase();
      const id = el.dataset.vid || (i + 1);
      const active = el === selected ? " active" : "";
      return `<button type="button" class="vg-list-item${active}" data-i="${i}">${tag} #${id}</button>`;
    }).join("") || '<div class="vg-empty">No objects yet</div>';
    listEl.querySelectorAll(".vg-list-item").forEach(btn => {
      btn.addEventListener("click", () => selectEl(layer.children[+btn.dataset.i]));
    });
  }

  function setTool(name) {
    tool = name;
    wrap.querySelectorAll(".vg-btn[data-tool]").forEach(b => b.classList.toggle("active", b.dataset.tool === name));
    toolLabel.textContent = toolNames[name] || name;
    polyPts = []; pathPts = [];
    if (draft) { draft.remove(); draft = null; }
    drawing = false;
    msg.textContent = "Ready";
  }

  function tagEl(el) {
    el.dataset.vid = String(idSeq++);
    el.classList.add("vg-shape");
    el.style.cursor = "pointer";
    el.addEventListener("mousedown", (e) => {
      if (tool !== "select") return;
      e.stopPropagation();
      selectEl(el);
      const p = svgPoint(e);
      const bb = el.getBBox();
      dragOff = { x: p.x - bb.x, y: p.y - bb.y, el };
    });
  }

  function finishDraft() {
    if (!draft) return;
    tagEl(draft);
    selectEl(draft);
    draft = null;
    drawing = false;
    polyPts = [];
    pathPts = [];
    renderList();
    msg.textContent = "Shape added";
  }

  svg.addEventListener("mousedown", (e) => {
    if (e.target.closest(".vg-shape") && tool === "select") return;
    const p = svgPoint(e);
    if (tool === "select") {
      selectEl(null);
      return;
    }
    if (tool === "text") {
      const text = prompt("Text:", "Vector");
      if (!text) return;
      const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
      el.setAttribute("x", p.x);
      el.setAttribute("y", p.y);
      el.setAttribute("fill", noFill.checked ? strokeVal() : fillVal());
      el.setAttribute("font-family", "Tahoma, sans-serif");
      el.setAttribute("font-size", "18");
      el.textContent = text;
      tagEl(el);
      layer.appendChild(el);
      selectEl(el);
      renderList();
      return;
    }
    if (tool === "poly") {
      polyPts.push(p);
      if (!draft) {
        draft = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        styleEl(draft);
        layer.appendChild(draft);
      }
      draft.setAttribute("points", polyPts.map(pt => pt.x + "," + pt.y).join(" "));
      msg.textContent = "Polygon: " + polyPts.length + " points (double-click to close)";
      return;
    }
    if (tool === "path") {
      pathPts.push(p);
      if (!draft) {
        draft = document.createElementNS("http://www.w3.org/2000/svg", "path");
        styleEl(draft);
        draft.setAttribute("fill", "none");
        layer.appendChild(draft);
      }
      const d = pathPts.map((pt, i) => (i === 0 ? "M" : "L") + pt.x + " " + pt.y).join(" ");
      draft.setAttribute("d", d);
      msg.textContent = "Path: " + pathPts.length + " points (double-click to end)";
      return;
    }
    // rect / ellipse / line
    drawing = true;
    start = p;
    const tag = tool === "rect" ? "rect" : tool === "ellipse" ? "ellipse" : "line";
    draft = document.createElementNS("http://www.w3.org/2000/svg", tag);
    styleEl(draft);
    if (tool === "line") {
      draft.setAttribute("x1", p.x); draft.setAttribute("y1", p.y);
      draft.setAttribute("x2", p.x); draft.setAttribute("y2", p.y);
      draft.setAttribute("fill", "none");
    } else if (tool === "rect") {
      draft.setAttribute("x", p.x); draft.setAttribute("y", p.y);
      draft.setAttribute("width", 0); draft.setAttribute("height", 0);
    } else {
      draft.setAttribute("cx", p.x); draft.setAttribute("cy", p.y);
      draft.setAttribute("rx", 0); draft.setAttribute("ry", 0);
    }
    layer.appendChild(draft);
  });

  svg.addEventListener("mousemove", (e) => {
    const p = svgPoint(e);
    if (dragOff && tool === "select" && selected) {
      const el = dragOff.el;
      const nx = p.x - dragOff.x;
      const ny = p.y - dragOff.y;
      const tag = el.tagName.toLowerCase();
      if (tag === "rect") {
        el.setAttribute("x", nx); el.setAttribute("y", ny);
      } else if (tag === "ellipse") {
        el.setAttribute("cx", nx + (+el.getAttribute("rx") || 0));
        el.setAttribute("cy", ny + (+el.getAttribute("ry") || 0));
      } else if (tag === "text") {
        el.setAttribute("x", p.x - dragOff.x + (el.getBBox().x || 0));
        // simpler: move by delta stored
        el.setAttribute("x", p.x);
        el.setAttribute("y", p.y);
      } else if (tag === "line") {
        const x1 = +el.getAttribute("x1"), y1 = +el.getAttribute("y1");
        const x2 = +el.getAttribute("x2"), y2 = +el.getAttribute("y2");
        const dx = p.x - dragOff.x - x1, dy = p.y - dragOff.y - y1;
        // store start on first move
        if (dragOff.x1 == null) {
          dragOff.x1 = x1; dragOff.y1 = y1; dragOff.x2 = x2; dragOff.y2 = y2;
          dragOff.ox = p.x; dragOff.oy = p.y;
        }
        const mdx = p.x - dragOff.ox, mdy = p.y - dragOff.oy;
        el.setAttribute("x1", dragOff.x1 + mdx);
        el.setAttribute("y1", dragOff.y1 + mdy);
        el.setAttribute("x2", dragOff.x2 + mdx);
        el.setAttribute("y2", dragOff.y2 + mdy);
      } else if (tag === "polygon" || tag === "path") {
        // translate via transform
        el.setAttribute("transform", `translate(${p.x - dragOff.x}, ${p.y - dragOff.y})`);
      }
      codeEl.textContent = el.outerHTML.replace(/ class="[^"]*vg-selected[^"]*"/, "").slice(0, 280);
      return;
    }
    if (!drawing || !draft || !start) return;
    if (tool === "line") {
      draft.setAttribute("x2", p.x); draft.setAttribute("y2", p.y);
    } else if (tool === "rect") {
      const x = Math.min(start.x, p.x), y = Math.min(start.y, p.y);
      draft.setAttribute("x", x); draft.setAttribute("y", y);
      draft.setAttribute("width", Math.abs(p.x - start.x));
      draft.setAttribute("height", Math.abs(p.y - start.y));
    } else if (tool === "ellipse") {
      draft.setAttribute("cx", (start.x + p.x) / 2);
      draft.setAttribute("cy", (start.y + p.y) / 2);
      draft.setAttribute("rx", Math.abs(p.x - start.x) / 2);
      draft.setAttribute("ry", Math.abs(p.y - start.y) / 2);
    }
  });

  svg.addEventListener("mouseup", () => {
    dragOff = null;
    if (drawing && draft && (tool === "rect" || tool === "ellipse" || tool === "line")) {
      finishDraft();
    }
  });

  svg.addEventListener("dblclick", () => {
    if ((tool === "poly" || tool === "path") && draft) {
      finishDraft();
    }
  });

  // Style selected live
  [fillIn, strokeIn, swIn, noFill].forEach(inp => {
    inp.addEventListener("input", () => {
      if (!selected) return;
      if (selected.tagName.toLowerCase() === "line") {
        selected.setAttribute("stroke", strokeVal());
        selected.setAttribute("stroke-width", String(swVal()));
      } else if (selected.tagName.toLowerCase() === "text") {
        selected.setAttribute("fill", noFill.checked ? strokeVal() : fillVal());
      } else {
        styleEl(selected);
        if (selected.tagName.toLowerCase() === "path" && pathPts.length) {
          /* keep */
        }
      }
      codeEl.textContent = selected.outerHTML.replace(/ class="[^"]*vg-selected[^"]*"/, "").slice(0, 280);
    });
  });

  wrap.querySelectorAll(".vg-btn[data-tool]").forEach(btn => {
    btn.addEventListener("click", () => setTool(btn.dataset.tool));
  });

  function exportSvg() {
    const clone = svg.cloneNode(true);
    clone.querySelectorAll(".vg-selected").forEach(n => n.classList.remove("vg-selected"));
    // remove grid overlay for clean export
    const gridRect = clone.querySelector('rect[fill="url(#vg-grid)"]');
    if (gridRect) gridRect.remove();
    const blob = new Blob([`<?xml version="1.0" encoding="UTF-8"?>\n` + clone.outerHTML], { type: "image/svg+xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "vector-" + Date.now() + ".svg";
    a.click();
    URL.revokeObjectURL(a.href);
    msg.textContent = "SVG exported";
  }

  wrap.querySelectorAll(".vg-btn[data-act]").forEach(btn => {
    btn.addEventListener("click", () => {
      const act = btn.dataset.act;
      if (act === "clear") {
        if (!confirm("Clear all vector objects?")) return;
        layer.innerHTML = "";
        selected = null;
        renderList();
        codeEl.textContent = "";
        msg.textContent = "Cleared";
      } else if (act === "del" && selected) {
        selected.remove();
        selected = null;
        renderList();
        codeEl.textContent = "";
        msg.textContent = "Deleted";
      } else if (act === "dup" && selected) {
        const clone = selected.cloneNode(true);
        clone.classList.remove("vg-selected");
        const tag = clone.tagName.toLowerCase();
        if (tag === "rect") {
          clone.setAttribute("x", (+clone.getAttribute("x") || 0) + 12);
          clone.setAttribute("y", (+clone.getAttribute("y") || 0) + 12);
        } else if (tag === "ellipse") {
          clone.setAttribute("cx", (+clone.getAttribute("cx") || 0) + 12);
          clone.setAttribute("cy", (+clone.getAttribute("cy") || 0) + 12);
        } else if (tag === "text" || tag === "line") {
          ["x", "y", "x1", "y1", "x2", "y2"].forEach(a => {
            if (clone.hasAttribute(a)) clone.setAttribute(a, (+clone.getAttribute(a) || 0) + 12);
          });
        }
        tagEl(clone);
        layer.appendChild(clone);
        selectEl(clone);
        msg.textContent = "Duplicated";
      } else if (act === "front" && selected) {
        layer.appendChild(selected);
        renderList();
      } else if (act === "back" && selected) {
        layer.insertBefore(selected, layer.firstChild);
        renderList();
      } else if (act === "export") {
        exportSvg();
      } else if (act === "copy") {
        const clone = svg.cloneNode(true);
        clone.querySelectorAll(".vg-selected").forEach(n => n.classList.remove("vg-selected"));
        const gridRect = clone.querySelector('rect[fill="url(#vg-grid)"]');
        if (gridRect) gridRect.remove();
        const text = clone.outerHTML;
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(text).then(() => { msg.textContent = "SVG copied"; });
        } else {
          codeEl.textContent = text.slice(0, 400);
          msg.textContent = "SVG shown in panel";
        }
      }
    });
  });

  wrap.tabIndex = 0;
  wrap.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (k === "v") setTool("select");
    if (k === "r") setTool("rect");
    if (k === "o") setTool("ellipse");
    if (k === "l") setTool("line");
    if (k === "p") setTool("poly");
    if (k === "b") setTool("path");
    if (k === "t") setTool("text");
    if (k === "delete" || k === "backspace") {
      if (selected && document.activeElement === wrap) {
        e.preventDefault();
        selected.remove();
        selected = null;
        renderList();
        codeEl.textContent = "";
      }
    }
  });

  // Sample shapes to explore
  (function seed() {
    const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    r.setAttribute("x", 40); r.setAttribute("y", 40);
    r.setAttribute("width", 120); r.setAttribute("height", 80);
    r.setAttribute("rx", 8);
    r.setAttribute("fill", "#38bdf8"); r.setAttribute("stroke", "#0f172a"); r.setAttribute("stroke-width", "2");
    tagEl(r); layer.appendChild(r);
    const c = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    c.setAttribute("cx", 280); c.setAttribute("cy", 100);
    c.setAttribute("rx", 60); c.setAttribute("ry", 40);
    c.setAttribute("fill", "#a78bfa"); c.setAttribute("stroke", "#0f172a"); c.setAttribute("stroke-width", "2");
    tagEl(c); layer.appendChild(c);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 40); line.setAttribute("y1", 200);
    line.setAttribute("x2", 220); line.setAttribute("y2", 280);
    line.setAttribute("stroke", "#f43f5e"); line.setAttribute("stroke-width", "3");
    tagEl(line); layer.appendChild(line);
    const tx = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tx.setAttribute("x", 360); tx.setAttribute("y", 200);
    tx.setAttribute("fill", "#0f172a"); tx.setAttribute("font-family", "Tahoma, sans-serif");
    tx.setAttribute("font-size", "20");
    tx.textContent = "SVG vectors";
    tagEl(tx); layer.appendChild(tx);
    renderList();
  })();

  return wrap;
}


function getAppBody(id) {
  if (id === "notepad") return buildNotepad();
  if (id === "paint") return buildPaint();
  if (id === "vector") return buildVectorGraphics();
  if (id === "terminal") return buildTerminal();
  if (id === "vscode") return buildVSCode();
  if (id === "minesweeper") return buildMinesweeper();
  if (id === "control") return buildControlPanel();
  if (id === "recycle") return buildRecycleBin();
  if (id === "registry") return buildRegistry();
  // Extra apps from features-extra.js (IE, Media Player, Help, Solitaire, …)
  if (window.extraAppBuilders && typeof window.extraAppBuilders[id] === "function") {
    try {
      const node = window.extraAppBuilders[id]();
      if (node) return node;
      throw new Error("App builder returned empty content");
    } catch (err) {
      console.warn("[Menelik OS] extra app failed:", id, err);
      const fallback = document.createElement("div");
      fallback.className = "app-error-panel";
      fallback.setAttribute("role", "alert");
      fallback.innerHTML =
        "<h3 style=\"margin:0 0 8px\">Could not open this program</h3>" +
        "<p>" + String(err && err.message ? err.message : err).replace(/</g, "&lt;") + "</p>" +
        "<p class=\"muted\">Try hard-refresh (Ctrl+Shift+R), then open it again from the Start menu.</p>" +
        "<p><button type=\"button\" class=\"proj-btn app-error-retry\">Try again</button></p>";
      fallback.querySelector(".app-error-retry")?.addEventListener("click", () => {
        try {
          if (typeof closeWindow === "function") closeWindow(id);
        } catch (_) {}
        setTimeout(() => {
          try {
            if (typeof openWindow === "function") openWindow(id);
          } catch (e2) {
            console.warn(e2);
          }
        }, 80);
      });
      return fallback;
    }
  }
  return null;
}

/* ========== Advanced Window Management (Aero Snap + triple + linked split) ========== */
const SNAP_THRESHOLD = 18;
const SNAP_CORNER = 0.28; // fraction of work area for quarter detection on side edges
const SNAP_GAP = 0;
const TASKBAR_H = 36;
const MIN_WIN_W = 240;
const MIN_WIN_H = 140;
let isResizing = false;
let resizeDir = null;
let resizeStart = null;
let snapPreview = null;
let linkedPartner = null;
let linkedPartners = null; // for triple: extra neighbors
let altTabOpen = false;
let altTabIndex = 0;

const SNAP_CLASSES = [
  "snap-left", "snap-right", "snap-top-left", "snap-top-right",
  "snap-bottom-left", "snap-bottom-right",
  "snap-third-left", "snap-third-center", "snap-third-right"
];

function workHeight() {
  return Math.max(120, window.innerHeight - TASKBAR_H);
}

function ensureSnapPreview() {
  if (snapPreview) return snapPreview;
  snapPreview = document.createElement("div");
  snapPreview.className = "snap-preview";
  snapPreview.hidden = true;
  document.getElementById("desktop")?.appendChild(snapPreview);
  return snapPreview;
}

function zoneRect(zone) {
  const W = window.innerWidth;
  const H = workHeight();
  const t = 0;
  switch (zone) {
    case "left":
      return { left: 0, top: t, width: W * 0.5, height: H };
    case "right":
      return { left: W * 0.5, top: t, width: W * 0.5, height: H };
    case "top":
      return { left: 0, top: t, width: W, height: H };
    case "top-left":
      return { left: 0, top: t, width: W * 0.5, height: H * 0.5 };
    case "top-right":
      return { left: W * 0.5, top: t, width: W * 0.5, height: H * 0.5 };
    case "bottom-left":
      return { left: 0, top: t + H * 0.5, width: W * 0.5, height: H * 0.5 };
    case "bottom-right":
      return { left: W * 0.5, top: t + H * 0.5, width: W * 0.5, height: H * 0.5 };
    case "third-left":
      return { left: 0, top: t, width: W / 3, height: H };
    case "third-center":
      return { left: W / 3, top: t, width: W / 3, height: H };
    case "third-right":
      return { left: (2 * W) / 3, top: t, width: W / 3, height: H };
    default:
      return null;
  }
}

function showSnapPreview(zone) {
  const el = ensureSnapPreview();
  const r = zoneRect(zone);
  if (!r) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  el.dataset.zone = zone;
  el.style.left = r.left + "px";
  el.style.top = r.top + "px";
  el.style.width = r.width + "px";
  el.style.height = r.height + "px";
}

function hideSnapPreview() {
  if (snapPreview) snapPreview.hidden = true;
}

/** Infer snap zone from pointer position (Aero + thirds + corners). */
function detectSnapZone(clientX, clientY) {
  const W = window.innerWidth;
  const H = workHeight();
  const thr = (typeof window.__snapThreshold === "number" ? window.__snapThreshold : SNAP_THRESHOLD);
  const nearL = clientX <= thr;
  const nearR = clientX >= W - thr;
  const nearT = clientY <= thr;

  // Top edge → triple columns (thirds) or maximize in dead-center band
  if (nearT && !nearL && !nearR) {
    if (clientX < W / 3) return "third-left";
    if (clientX > (2 * W) / 3) return "third-right";
    // Center third of top edge → maximize; outer center still third-center if wide middle
    const mid = W / 2;
    if (Math.abs(clientX - mid) < W * 0.08) return "top";
    return "third-center";
  }

  // Left edge → half or vertical quarters
  if (nearL) {
    if (clientY < H * SNAP_CORNER) return "top-left";
    if (clientY > H * (1 - SNAP_CORNER)) return "bottom-left";
    return "left";
  }

  // Right edge → half or vertical quarters
  if (nearR) {
    if (clientY < H * SNAP_CORNER) return "top-right";
    if (clientY > H * (1 - SNAP_CORNER)) return "bottom-right";
    return "right";
  }

  return null;
}

function clearSnapState(win) {
  if (!win) return;
  win.dataset.snapped = "0";
  win.dataset.snapZone = "";
  SNAP_CLASSES.forEach(c => win.classList.remove(c));
}

function saveRestoreBounds(win) {
  if (win.dataset.maximized === "1" || win.dataset.snapped === "1") return;
  win.dataset.prevLeft = win.style.left || win.offsetLeft + "px";
  win.dataset.prevTop = win.style.top || win.offsetTop + "px";
  win.dataset.prevWidth = win.style.width || win.offsetWidth + "px";
  win.dataset.prevHeight = win.style.height || win.offsetHeight + "px";
}

function findSnappedWindow(zone, excludeId) {
  return getVisibleWindowIds()
    .map(id => openWindows[id])
    .find(w => w && w.dataset.id !== excludeId && w.dataset.snapped === "1" && w.dataset.snapZone === zone);
}

function findAllSnapped(zones) {
  const out = {};
  getVisibleWindowIds().forEach(id => {
    const w = openWindows[id];
    if (w && w.dataset.snapped === "1" && zones.includes(w.dataset.snapZone)) {
      out[w.dataset.snapZone] = w;
    }
  });
  return out;
}

function applyZoneGeometry(win, zone) {
  const r = zoneRect(zone);
  if (!r || !win) return;
  win.style.left = Math.round(r.left) + "px";
  win.style.top = Math.round(r.top) + "px";
  win.style.width = Math.round(r.width) - SNAP_GAP + "px";
  win.style.height = Math.round(r.height) - SNAP_GAP + "px";
}

function setSnapMeta(win, zone) {
  clearSnapState(win);
  win.dataset.snapped = "1";
  win.dataset.snapZone = zone;
  win.dataset.maximized = "0";
  const cls = "snap-" + zone;
  if (SNAP_CLASSES.includes(cls)) win.classList.add(cls);
}

/** Layout three equal columns; optionally only update existing third snaps. */
function layoutTripleColumns(map) {
  // map: { "third-left": win, ... } — missing slots left empty
  ["third-left", "third-center", "third-right"].forEach(z => {
    if (map[z]) {
      setSnapMeta(map[z], z);
      applyZoneGeometry(map[z], z);
    }
  });
}

/** Snap the first three visible windows into equal thirds. */
function snapTripleColumns() {
  const ids = getVisibleWindowIds().slice(0, 3);
  if (ids.length < 2) return;
  const zones = ["third-left", "third-center", "third-right"];
  const map = {};
  ids.forEach((id, i) => {
    const win = openWindows[id];
    if (!win) return;
    saveRestoreBounds(win);
    map[zones[i]] = win;
  });
  layoutTripleColumns(map);
  if (ids[0]) focusWindow(ids[0]);
}

function applySnap(win, zone) {
  if (!win || !zone) return;
  saveRestoreBounds(win);
  win.dataset.maximized = "0";

  if (zone === "top") {
    clearSnapState(win);
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = "100%";
    win.style.height = `calc(100% - ${TASKBAR_H}px)`;
    win.dataset.maximized = "1";
    hideSnapPreview();
    return;
  }

  // Replace occupant of same zone
  const same = findSnappedWindow(zone, win.dataset.id);
  if (same) clearSnapState(same);

  // —— Triple column zones ——
  if (zone.startsWith("third-")) {
    setSnapMeta(win, zone);
    applyZoneGeometry(win, zone);
    // If we now have 2+ thirds, reflow all third-snapped windows cleanly
    const thirds = findAllSnapped(["third-left", "third-center", "third-right"]);
    thirds[zone] = win;
    layoutTripleColumns(thirds);
    hideSnapPreview();
    return;
  }

  // —— Quarter corners ——
  if (zone.includes("-")) {
    setSnapMeta(win, zone);
    applyZoneGeometry(win, zone);
    hideSnapPreview();
    return;
  }

  // —— Classic left / right half ——
  // If opposite half has two stacked quarters, keep them; only fill this half.
  // If opposite is a full half, 50/50 split.
  let leftRatio = 0.5;
  const otherZone = zone === "left" ? "right" : "left";
  const other = findSnappedWindow(otherZone, win.dataset.id);
  if (other) {
    const fullW = window.innerWidth || 1;
    leftRatio = otherZone === "left"
      ? other.getBoundingClientRect().width / fullW
      : 1 - other.getBoundingClientRect().width / fullW;
    leftRatio = Math.min(0.75, Math.max(0.25, leftRatio));
  }

  setSnapMeta(win, zone);
  // Use half layout via zoneRect-style ratios
  const W = window.innerWidth;
  const H = workHeight();
  if (zone === "left") {
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = Math.floor(W * leftRatio) - SNAP_GAP + "px";
    win.style.height = H + "px";
  } else {
    const lw = Math.floor(W * leftRatio);
    win.style.left = lw + SNAP_GAP + "px";
    win.style.top = "0";
    win.style.width = W - lw - SNAP_GAP + "px";
    win.style.height = H + "px";
  }

  if (other) {
    const leftWin = zone === "left" ? win : other;
    const rightWin = zone === "right" ? win : other;
    const lr = leftWin.getBoundingClientRect().width / W;
    leftWin.style.left = "0";
    leftWin.style.width = Math.floor(W * lr) + "px";
    leftWin.style.top = "0";
    leftWin.style.height = H + "px";
    rightWin.style.left = Math.floor(W * lr) + "px";
    rightWin.style.width = W - Math.floor(W * lr) + "px";
    rightWin.style.top = "0";
    rightWin.style.height = H + "px";
  }

  hideSnapPreview();
}

function findLinkedResizePartner(win, dir) {
  if (win.dataset.snapped !== "1") return null;
  const zone = win.dataset.snapZone || "";

  // Vertical edges between thirds / halves
  if (zone === "third-left" && (dir === "e" || dir === "ne" || dir === "se")) {
    return findSnappedWindow("third-center", win.dataset.id)
      || findSnappedWindow("third-right", win.dataset.id);
  }
  if (zone === "third-center" && (dir === "w" || dir === "nw" || dir === "sw")) {
    return findSnappedWindow("third-left", win.dataset.id);
  }
  if (zone === "third-center" && (dir === "e" || dir === "ne" || dir === "se")) {
    return findSnappedWindow("third-right", win.dataset.id);
  }
  if (zone === "third-right" && (dir === "w" || dir === "nw" || dir === "sw")) {
    return findSnappedWindow("third-center", win.dataset.id)
      || findSnappedWindow("third-left", win.dataset.id);
  }
  if (zone === "left" && (dir === "e" || dir === "ne" || dir === "se")) {
    return findSnappedWindow("right", win.dataset.id)
      || findSnappedWindow("top-right", win.dataset.id)
      || findSnappedWindow("bottom-right", win.dataset.id);
  }
  if (zone === "right" && (dir === "w" || dir === "nw" || dir === "sw")) {
    return findSnappedWindow("left", win.dataset.id)
      || findSnappedWindow("top-left", win.dataset.id)
      || findSnappedWindow("bottom-left", win.dataset.id);
  }

  // Horizontal link for stacked quarters
  if ((zone === "top-left" || zone === "top-right") && (dir === "s" || dir === "se" || dir === "sw")) {
    const bot = zone.replace("top", "bottom");
    return findSnappedWindow(bot, win.dataset.id);
  }
  if ((zone === "bottom-left" || zone === "bottom-right") && (dir === "n" || dir === "ne" || dir === "nw")) {
    const top = zone.replace("bottom", "top");
    return findSnappedWindow(top, win.dataset.id);
  }

  // Geometric fallback: touching edges
  const rect = win.getBoundingClientRect();
  const ids = getVisibleWindowIds().filter(id => id !== win.dataset.id);
  for (const id of ids) {
    const other = openWindows[id];
    if (!other || other.dataset.minimized === "1") continue;
    const or = other.getBoundingClientRect();
    const touchEps = 14;
    if ((dir === "e" || dir === "ne" || dir === "se") &&
        Math.abs(rect.right - or.left) <= touchEps &&
        Math.abs(rect.top - or.top) < Math.max(rect.height, or.height) * 0.55) {
      return other;
    }
    if ((dir === "w" || dir === "nw" || dir === "sw") &&
        Math.abs(rect.left - or.right) <= touchEps &&
        Math.abs(rect.top - or.top) < Math.max(rect.height, or.height) * 0.55) {
      return other;
    }
    if ((dir === "s" || dir === "se" || dir === "sw") &&
        Math.abs(rect.bottom - or.top) <= touchEps &&
        Math.abs(rect.left - or.left) < Math.max(rect.width, or.width) * 0.55) {
      return other;
    }
    if ((dir === "n" || dir === "ne" || dir === "nw") &&
        Math.abs(rect.top - or.bottom) <= touchEps &&
        Math.abs(rect.left - or.left) < Math.max(rect.width, or.width) * 0.55) {
      return other;
    }
  }
  return null;
}

function applyLinkedSplit(leftWin, rightWin, dividerX) {
  const fullW = window.innerWidth;
  let x = Math.max(MIN_WIN_W, Math.min(fullW - MIN_WIN_W, dividerX));
  const H = workHeight();
  leftWin.style.left = "0";
  leftWin.style.top = "0";
  leftWin.style.width = x - SNAP_GAP + "px";
  leftWin.style.height = H + "px";
  setSnapMeta(leftWin, leftWin.dataset.snapZone?.startsWith("third") ? "third-left" : "left");
  // preserve third-left if both were thirds
  if (leftWin.dataset.snapZone === "third-left" || rightWin.dataset.snapZone === "third-right" ||
      leftWin.dataset.snapZone === "third-center" || rightWin.dataset.snapZone === "third-center") {
    // handled by applyLinkedTriple when possible
  }
  rightWin.style.left = x + SNAP_GAP + "px";
  rightWin.style.top = "0";
  rightWin.style.width = fullW - x - SNAP_GAP + "px";
  rightWin.style.height = H + "px";
  if (!rightWin.dataset.snapZone?.startsWith("third")) {
    setSnapMeta(rightWin, "right");
    setSnapMeta(leftWin, "left");
  }
}

/** Resize shared edge between two of three column panes; third stays put when possible. */
function applyLinkedTriple(primary, partner, dir, clientX) {
  const W = window.innerWidth;
  const H = workHeight();
  const z1 = primary.dataset.snapZone;
  const z2 = partner.dataset.snapZone;
  const thirds = findAllSnapped(["third-left", "third-center", "third-right"]);
  thirds[z1] = primary;
  thirds[z2] = partner;

  const min = MIN_WIN_W;
  let x = Math.max(min, Math.min(W - min, clientX));

  // Determine which divider is being dragged
  const pair = [z1, z2].sort().join("+");
  if (pair.includes("third-left") && pair.includes("third-center")) {
    const rightEdge = thirds["third-right"]
      ? thirds["third-right"].getBoundingClientRect().left
      : W;
    x = Math.min(x, rightEdge - min);
    x = Math.max(min, x);
    if (thirds["third-left"]) {
      thirds["third-left"].style.left = "0";
      thirds["third-left"].style.width = x + "px";
      thirds["third-left"].style.top = "0";
      thirds["third-left"].style.height = H + "px";
    }
    if (thirds["third-center"]) {
      const rw = (thirds["third-right"] ? rightEdge : W) - x;
      thirds["third-center"].style.left = x + "px";
      thirds["third-center"].style.width = Math.max(min, rw) + "px";
      thirds["third-center"].style.top = "0";
      thirds["third-center"].style.height = H + "px";
    }
  } else if (pair.includes("third-center") && pair.includes("third-right")) {
    const leftEdge = thirds["third-left"]
      ? thirds["third-left"].getBoundingClientRect().right
      : 0;
    x = Math.max(x, leftEdge + min);
    x = Math.min(W - min, x);
    if (thirds["third-center"]) {
      thirds["third-center"].style.left = leftEdge + "px";
      thirds["third-center"].style.width = x - leftEdge + "px";
      thirds["third-center"].style.top = "0";
      thirds["third-center"].style.height = H + "px";
    }
    if (thirds["third-right"]) {
      thirds["third-right"].style.left = x + "px";
      thirds["third-right"].style.width = W - x + "px";
      thirds["third-right"].style.top = "0";
      thirds["third-right"].style.height = H + "px";
    }
  } else if (pair.includes("third-left") && pair.includes("third-right") && !thirds["third-center"]) {
    // two-column fallback spanning full width
    applyLinkedSplit(thirds["third-left"] || primary, thirds["third-right"] || partner, x);
  } else {
    // generic horizontal pair
    const leftWin = primary.getBoundingClientRect().left <= partner.getBoundingClientRect().left ? primary : partner;
    const rightWin = leftWin === primary ? partner : primary;
    applyLinkedSplit(leftWin, rightWin, x);
  }
}

function applyLinkedVertical(topWin, botWin, dividerY) {
  const H = workHeight();
  const min = MIN_WIN_H;
  let y = Math.max(min, Math.min(H - min, dividerY));
  const left = Math.min(topWin.getBoundingClientRect().left, botWin.getBoundingClientRect().left);
  const width = Math.max(topWin.getBoundingClientRect().width, botWin.getBoundingClientRect().width);
  topWin.style.top = "0";
  topWin.style.height = y + "px";
  topWin.style.left = left + "px";
  topWin.style.width = width + "px";
  botWin.style.top = y + "px";
  botWin.style.height = H - y + "px";
  botWin.style.left = left + "px";
  botWin.style.width = width + "px";
}

function cascadeWindows() {
  const ids = getVisibleWindowIds();
  ids.forEach((id, i) => {
    const win = openWindows[id];
    win.dataset.maximized = "0";
    clearSnapState(win);
    win.dataset.minimized = "0";
    win.style.left = `${40 + i * 28}px`;
    win.style.top = `${30 + i * 28}px`;
    win.style.width = "520px";
    win.style.height = "400px";
    win.style.display = "flex";
    win.style.zIndex = ++zIndex;
  });
  if (ids.length) focusWindow(ids[ids.length - 1]);
}

function tileWindows() {
  const ids = getVisibleWindowIds();
  const n = ids.length;
  if (!n) return;
  const taskbarH = 36;
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const w = window.innerWidth / cols;
  const h = (window.innerHeight - taskbarH) / rows;
  ids.forEach((id, i) => {
    const win = openWindows[id];
    const col = i % cols;
    const row = Math.floor(i / cols);
    win.dataset.maximized = "0";
    win.dataset.snapped = "1";
    win.dataset.minimized = "0";
    win.style.left = `${col * w}px`;
    win.style.top = `${row * h}px`;
    win.style.width = `${w}px`;
    win.style.height = `${h}px`;
    win.style.display = "flex";
    win.style.zIndex = ++zIndex;
  });
  if (ids.length) focusWindow(ids[ids.length - 1]);
}

function minimizeAll() {
  getVisibleWindowIds().forEach(id => minimizeWindow(id));
}

function restoreAll() {
  Object.keys(openWindows).forEach(id => {
    if ((windowDesktop[id] ?? 0) !== currentDesktop) return;
    const win = openWindows[id];
    if (win) {
      win.dataset.minimized = "0";
      win.style.display = "flex";
    }
  });
  const ids = getVisibleWindowIds();
  if (ids.length) focusWindow(ids[ids.length - 1]);
}

function closeAllWindows() {
  Object.keys(openWindows).forEach(id => closeWindow(id));
}

function getFocusableWindowIds() {
  // Most-recent first, then any visible not in MRU list
  const visible = getVisibleWindowIds();
  const mru = [...recentWindowOrder].reverse().filter((id) => visible.includes(id));
  visible.forEach((id) => {
    if (!mru.includes(id)) mru.push(id);
  });
  return mru;
}

function cycleWindows(dir) {
  const ids = getFocusableWindowIds();
  if (!ids.length) return;
  let idx = ids.indexOf(activeWindowId);
  if (idx < 0) idx = 0;
  idx = (idx + dir + ids.length) % ids.length;
  focusWindow(ids[idx]);
}

/** Blur all windows (desktop clicked) — no active title bar */
function blurAllWindows() {
  Object.values(openWindows).forEach((w) => w.classList.remove("active"));
  activeWindowId = null;
  document.querySelectorAll(".taskbar-app").forEach((btn) => btn.classList.remove("active"));
}

/* ---- Resize handles ---- */
function addResizeHandles(win) {
  const dirs = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];
  dirs.forEach(d => {
    const h = document.createElement("div");
    h.className = `resize-handle resize-${d}`;
    h.dataset.dir = d;
    h.addEventListener("mousedown", (e) => startResize(e, win, d));
    win.appendChild(h);
  });
}

function startResize(e, win, dir) {
  if (win.dataset.maximized === "1") return;
  e.preventDefault();
  e.stopPropagation();
  isResizing = true;
  resizeDir = dir;
  dragTarget = win;
  linkedPartner = findLinkedResizePartner(win, dir);
  const rect = win.getBoundingClientRect();
  resizeStart = {
    x: e.clientX,
    y: e.clientY,
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    dividerX: null,
    dividerY: null,
    axis: null,
    leftIsPrimary: true
  };
  if (linkedPartner) {
    const or = linkedPartner.getBoundingClientRect();
    const vert = dir === "e" || dir === "w" || dir.includes("e") || dir.includes("w");
    const horz = dir === "n" || dir === "s" || (dir.includes("n") || dir.includes("s")) && !vert;
    // Prefer vertical divider for e/w
    if (dir === "e" || dir === "w" || dir === "ne" || dir === "nw" || dir === "se" || dir === "sw") {
      if (Math.abs(rect.right - or.left) <= 20 || Math.abs(or.right - rect.left) <= 20) {
        resizeStart.axis = "x";
        resizeStart.dividerX = rect.left <= or.left ? rect.right : or.right;
        resizeStart.leftIsPrimary = rect.left <= or.left;
      }
    }
    if (!resizeStart.axis && (dir === "n" || dir === "s" || dir === "ne" || dir === "nw" || dir === "se" || dir === "sw")) {
      if (Math.abs(rect.bottom - or.top) <= 20 || Math.abs(or.bottom - rect.top) <= 20) {
        resizeStart.axis = "y";
        resizeStart.dividerY = rect.top <= or.top ? rect.bottom : or.bottom;
        resizeStart.leftIsPrimary = rect.top <= or.top; // topIsPrimary
      }
    }
    if (resizeStart.axis) document.body.classList.add("split-resizing");
  }
  focusWindow(win.dataset.id);
  document.body.style.userSelect = "none";
}

function doResize(e) {
  if (!isResizing || !dragTarget || !resizeStart) return;
  const dx = e.clientX - resizeStart.x;
  const dy = e.clientY - resizeStart.y;
  const dir = resizeDir || "";

  // —— Linked resize (shared edge) ——
  if (linkedPartner && resizeStart.axis === "x" && resizeStart.dividerX != null) {
    const z = dragTarget.dataset.snapZone || "";
    if (z.startsWith("third-") || (linkedPartner.dataset.snapZone || "").startsWith("third-")) {
      applyLinkedTriple(dragTarget, linkedPartner, dir, resizeStart.dividerX + dx);
    } else {
      const leftWin = resizeStart.leftIsPrimary ? dragTarget : linkedPartner;
      const rightWin = resizeStart.leftIsPrimary ? linkedPartner : dragTarget;
      applyLinkedSplit(leftWin, rightWin, resizeStart.dividerX + dx);
    }
    return;
  }
  if (linkedPartner && resizeStart.axis === "y" && resizeStart.dividerY != null) {
    const topWin = resizeStart.leftIsPrimary ? dragTarget : linkedPartner;
    const botWin = resizeStart.leftIsPrimary ? linkedPartner : dragTarget;
    applyLinkedVertical(topWin, botWin, resizeStart.dividerY + dy);
    return;
  }

  // —— Normal resize ——
  let left = resizeStart.left;
  let top = resizeStart.top;
  let width = resizeStart.width;
  let height = resizeStart.height;

  if (dir.includes("e")) width = Math.max(MIN_WIN_W, resizeStart.width + dx);
  if (dir.includes("s")) height = Math.max(MIN_WIN_H, resizeStart.height + dy);
  if (dir.includes("w")) {
    width = Math.max(MIN_WIN_W, resizeStart.width - dx);
    left = resizeStart.left + (resizeStart.width - width);
  }
  if (dir.includes("n")) {
    height = Math.max(MIN_WIN_H, resizeStart.height - dy);
    top = resizeStart.top + (resizeStart.height - height);
  }

  top = Math.max(0, top);
  left = Math.min(left, window.innerWidth - 80);

  dragTarget.style.left = left + "px";
  dragTarget.style.top = top + "px";
  dragTarget.style.width = width + "px";
  dragTarget.style.height = height + "px";
  clearSnapState(dragTarget);
}

/* ---- Open / focus / close ---- */

/** Remember last normal (non-snap) size so new windows match. */
let lastOpenSize = null;

/**
 * Prefer size of an already-open window so desktop icons / new windows
 * open at the same dimensions as the current workspace.
 */
function getOpenWindowSize(newId, fallback) {
  const minW = 280, minH = 160;
  const clamp = (w, h) => ({
    w: Math.max(minW, Math.round(w)),
    h: Math.max(minH, Math.round(h))
  });

  // 1) Focused window if normal
  if (activeWindowId && openWindows[activeWindowId]) {
    const aw = openWindows[activeWindowId];
    if (aw.dataset.maximized !== "1" && aw.dataset.snapped !== "1" && aw.dataset.minimized !== "1") {
      const r = aw.getBoundingClientRect();
      if (r.width >= minW && r.height >= minH) {
        lastOpenSize = clamp(r.width, r.height);
        return lastOpenSize;
      }
    }
  }

  // 2) Any other visible normal window (most recently focused = highest z)
  const visibles = getVisibleWindowIds()
    .map(id => openWindows[id])
    .filter(w => w && w.dataset.maximized !== "1" && w.dataset.snapped !== "1");
  if (visibles.length) {
    visibles.sort((a, b) => (parseInt(b.style.zIndex, 10) || 0) - (parseInt(a.style.zIndex, 10) || 0));
    const r = visibles[0].getBoundingClientRect();
    if (r.width >= minW && r.height >= minH) {
      lastOpenSize = clamp(r.width, r.height);
      return lastOpenSize;
    }
  }

  // 3) Last remembered size from a previous open/resize
  if (lastOpenSize && lastOpenSize.w >= minW && lastOpenSize.h >= minH) {
    return { ...lastOpenSize };
  }

  // 4) Per-app / content defaults
  return { w: fallback.w, h: fallback.h };
}

function rememberWindowSize(win) {
  if (!win) return;
  if (win.dataset.maximized === "1" || win.dataset.snapped === "1") return;
  const r = win.getBoundingClientRect();
  if (r.width >= 280 && r.height >= 160) {
    lastOpenSize = { w: Math.round(r.width), h: Math.round(r.height) };
  }
}

function openWindow(id) {
  if (openWindows[id]) {
    focusWindow(id);
    return;
  }

  const isApp = !!APPS[id];
  const data = isApp ? APPS[id] : CONTENT[id];
  if (!data) return;

  const tpl = document.getElementById("window-template");
  const win = tpl.content.cloneNode(true).querySelector(".window");
  win.dataset.id = id;
  win.dataset.maximized = "0";
  win.dataset.snapped = "0";

  // Size: match currently open window when possible so desktop icons open at the same size
  const APP_SIZES = {
    notepad: { w: 480, h: 340 },
    paint: { w: 700, h: 520 },
    vector: { w: 720, h: 540 },
    terminal: { w: 500, h: 320 },
    vscode: { w: 900, h: 620 },
    minesweeper: { w: 320, h: 380 },
    control: { w: 420, h: 360 },
    recycle: { w: 400, h: 320 },
    registry: { w: 640, h: 460 },
    ie: { w: 660, h: 480 },
    mediaplayer: { w: 440, h: 400 },
    solitaire: { w: 640, h: 480 },
    blog: { w: 520, h: 440 },
    help: { w: 500, h: 440 },
    testimonials: { w: 440, h: 380 },
    github: { w: 520, h: 420 },
    downloadpack: { w: 520, h: 440 }
  };
  const CONTENT_SIZES = {
    resume: { w: 560, h: 480 },
    projects: { w: 540, h: 500 },
    about: { w: 480, h: 400 }
  };
  const fallback = isApp
    ? (APP_SIZES[id] || { w: 480, h: 340 })
    : (CONTENT_SIZES[id] || { w: 440, h: 360 });

  // Prefer size of the focused / most recent normal window (not maximized or snapped)
  const preferred = getOpenWindowSize(id, fallback);
  const maxW = Math.min(preferred.w, window.innerWidth - 80);
  const maxH = Math.min(preferred.h, window.innerHeight - 80);
  win.style.width = maxW + "px";
  win.style.height = maxH + "px";

  const offset = Object.keys(openWindows).length * 26;
  win.style.left = `${Math.min(48 + offset, window.innerWidth - maxW - 24)}px`;
  win.style.top = `${Math.min(36 + offset, window.innerHeight - maxH - 48)}px`;
  win.style.zIndex = ++zIndex;
  lastOpenSize = { w: maxW, h: maxH };

  win.querySelector(".win-title").textContent = data.title;
  win.querySelector(".win-icon").className = `win-icon ${data.iconClass}`;

  const body = win.querySelector(".window-body");
  if (isApp) {
    body.classList.add("no-pad");
    const appEl = getAppBody(id);
    if (appEl) body.appendChild(appEl);
    else {
      body.innerHTML = "<div class=\"app-error-panel\" role=\"alert\"><h3 style=\"margin:0 0 8px\">App failed to load</h3><p>This program is not available yet. Hard-refresh the page, then try Start menu again.</p></div>";
    }
  } else {
    body.innerHTML = data.html;
    applyProfilePhoto(win); // apply photo to About Me (and any other profile pics)
  }

  const btnClose = win.querySelector(".btn-close");
  const btnMin = win.querySelector(".btn-min");
  const btnMax = win.querySelector(".btn-max");
  btnClose.addEventListener("click", (e) => { e.stopPropagation(); closeWindow(id); });
  btnMin.addEventListener("click", (e) => { e.stopPropagation(); minimizeWindow(id); });
  btnMax.addEventListener("click", (e) => { e.stopPropagation(); maximizeWindow(id); });
  win.querySelector(".title-bar-controls").addEventListener("mousedown", (e) => e.stopPropagation());

  const titleBar = win.querySelector(".title-bar");
  // Double-click title bar = maximize/restore
  titleBar.addEventListener("dblclick", (e) => {
    if (e.target.closest(".title-bar-controls")) return;
    maximizeWindow(id);
  });
  titleBar.addEventListener("mousedown", (e) => {
    if (e.target.closest(".title-bar-controls")) return;
    // If maximized/snapped, drag restores first
    if (win.dataset.maximized === "1" || win.dataset.snapped === "1") {
      const prevW = parseInt(win.dataset.prevWidth, 10) || 520;
      const ratio = e.offsetX / win.offsetWidth;
      win.dataset.maximized = "0";
      clearSnapState(win);
      win.style.width = win.dataset.prevWidth || "520px";
      win.style.height = win.dataset.prevHeight || "400px";
      win.style.left = Math.max(0, e.clientX - prevW * ratio) + "px";
      win.style.top = Math.max(0, e.clientY - 14) + "px";
    }
    startDrag(e, win);
  });
  win.addEventListener("mousedown", () => focusWindow(id), true);

  addResizeHandles(win);

  // Open animation
  win.classList.add("win-opening");
  setTimeout(() => win.classList.remove("win-opening"), 180);

  const container = document.getElementById("windows-container");
  container.appendChild(win); // last DOM child paints above earlier siblings
  openWindows[id] = win;
  windowDesktop[id] = currentDesktop; // open on current virtual desktop
  // Bring to front (z-index + active) — previous window stays open behind
  focusWindow(id);
  addTaskbarButton(id, data.title);
  updateDesktopIndicators();
  closeStartMenu();
  playUiSound && playUiSound("open");
}

function touchRecentWindow(id) {
  recentWindowOrder = recentWindowOrder.filter((x) => x !== id && openWindows[x]);
  recentWindowOrder.push(id);
  // Cap history
  if (recentWindowOrder.length > 24) recentWindowOrder = recentWindowOrder.slice(-24);
}

function focusWindow(id) {
  const win = openWindows[id];
  if (!win) return;

  // Switch to window's desktop if needed
  if (windowDesktop[id] !== undefined && windowDesktop[id] !== currentDesktop) {
    switchDesktop(windowDesktop[id], true);
  }

  // Restore if minimized — always bring to front when focusing
  if (win.dataset.minimized === "1") {
    win.dataset.minimized = "0";
    win.classList.remove("win-minimizing");
  }
  win.style.display = "flex";
  win.classList.remove("on-other-desktop");

  // Deactivate others (previous active goes behind in stacking order)
  Object.values(openWindows).forEach((w) => {
    if (w !== win) w.classList.remove("active");
  });
  win.classList.add("active");

  // Raise stacking order (JS-managed; CSS must not force z-index)
  win.style.zIndex = ++zIndex;

  // Move node to end of container so paint order matches focus
  const container = win.parentElement;
  if (container && container.lastElementChild !== win) {
    container.appendChild(win);
  }

  activeWindowId = id;
  touchRecentWindow(id);

  document.querySelectorAll(".taskbar-app").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
  updateTaskbarVisibility();
}

function closeWindow(id) {
  const win = openWindows[id];
  if (!win) return;
  // Don't put Control Panel / Recycle / system tools? Put all recoverable apps
  const title = win.querySelector(".title-text")?.textContent || id;
  if (id !== "recycle") {
    // Keep one entry per id (most recent)
    for (let i = recycleBin.length - 1; i >= 0; i--) {
      if (recycleBin[i].id === id) recycleBin.splice(i, 1);
    }
    recycleBin.push({ id, title, at: Date.now() });
    if (recycleBin.length > 20) recycleBin.shift();
  }
  playUiSound("close");
  win.classList.add("win-closing");
  setTimeout(() => {
    win.remove();
    delete openWindows[id];
    delete windowDesktop[id];
    recentWindowOrder = recentWindowOrder.filter((x) => x !== id);
    document.querySelector(`.taskbar-app[data-id="${id}"]`)?.remove();
    if (activeWindowId === id) {
      activeWindowId = null;
      // Prefer most recently used still-open window
      const mru = [...recentWindowOrder].reverse().find((wid) => openWindows[wid] && openWindows[wid].dataset.minimized !== "1");
      const remaining = getVisibleWindowIds();
      const next = mru || (remaining.length ? remaining[remaining.length - 1] : null);
      if (next) focusWindow(next);
    }
    updateDesktopIndicators();
    // Refresh open recycle window list
    const rec = openWindows["recycle"];
    if (rec) {
      const app = rec.querySelector(".recycle-app");
      if (app && app._refresh) app._refresh();
    }
  }, 120);
}

function minimizeWindow(id) {
  const win = openWindows[id];
  if (!win) return;
  win.classList.add("win-minimizing");
  setTimeout(() => {
    win.style.display = "none";
    win.dataset.minimized = "1";
    win.classList.remove("active", "win-minimizing");
    if (activeWindowId === id) activeWindowId = null;
    document.querySelector(`.taskbar-app[data-id="${id}"]`)?.classList.remove("active");
  }, 120);
}

/* ---- Virtual desktop core ---- */
function switchDesktop(index, silent) {
  if (index < 0 || index >= VD_COUNT || index === currentDesktop) return;
  currentDesktop = index;

  // Show/hide windows per desktop
  Object.keys(openWindows).forEach(id => {
    const win = openWindows[id];
    const desk = windowDesktop[id] ?? 0;
    if (desk === currentDesktop) {
      win.classList.remove("on-other-desktop");
      if (win.dataset.minimized !== "1") win.style.display = "flex";
    } else {
      win.classList.add("on-other-desktop");
      win.classList.remove("active");
    }
  });

  // Clear active if it moved away
  if (activeWindowId && windowDesktop[activeWindowId] !== currentDesktop) {
    activeWindowId = null;
  }

  // Update pager UI
  document.querySelectorAll(".vd-btn").forEach(btn => {
    btn.classList.toggle("active", +btn.dataset.desktop === currentDesktop);
  });
  updateTaskbarVisibility();
  updateDesktopIndicators();

  // Visual feedback
  if (!silent) {
    const desktop = document.getElementById("desktop");
    desktop?.classList.add("vd-switching");
    setTimeout(() => desktop?.classList.remove("vd-switching"), 250);
    showDesktopToast(currentDesktop + 1);
  }
}

function showDesktopToast(msg) {
  const toast = document.getElementById("vd-toast");
  if (!toast) return;
  toast.textContent = typeof msg === "number" ? `Desktop ${msg}` : String(msg);
  toast.hidden = false;
  toast.style.animation = "none";
  void toast.offsetWidth;
  toast.style.animation = "";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.hidden = true; }, 800);
}

function moveWindowToDesktop(id, deskIndex) {
  if (!openWindows[id] || deskIndex < 0 || deskIndex >= VD_COUNT) return;
  windowDesktop[id] = deskIndex;
  const win = openWindows[id];
  if (deskIndex === currentDesktop) {
    win.classList.remove("on-other-desktop");
    if (win.dataset.minimized !== "1") win.style.display = "flex";
  } else {
    win.classList.add("on-other-desktop");
    win.classList.remove("active");
    if (activeWindowId === id) activeWindowId = null;
  }
  updateTaskbarVisibility();
  updateDesktopIndicators();
}

function updateTaskbarVisibility() {
  document.querySelectorAll(".taskbar-app").forEach(btn => {
    const id = btn.dataset.id;
    const desk = windowDesktop[id] ?? 0;
    btn.style.display = desk === currentDesktop ? "" : "none";
    btn.classList.toggle("active", id === activeWindowId);
  });
}

function updateDesktopIndicators() {
  const counts = [0, 0, 0, 0];
  Object.keys(windowDesktop).forEach(id => {
    if (openWindows[id]) counts[windowDesktop[id]]++;
  });
  document.querySelectorAll(".vd-btn").forEach(btn => {
    const d = +btn.dataset.desktop;
    btn.classList.toggle("has-windows", counts[d] > 0);
    btn.title = `Desktop ${d + 1}${counts[d] ? ` (${counts[d]} window${counts[d] > 1 ? "s" : ""})` : ""}`;
  });
}

function getVisibleWindowIds() {
  return Object.keys(openWindows).filter(id => {
    const win = openWindows[id];
    return win && (windowDesktop[id] ?? 0) === currentDesktop && win.dataset.minimized !== "1" && win.style.display !== "none";
  });
}

function maximizeWindow(id) {
  const win = openWindows[id];
  if (!win) return;
  if (win.dataset.maximized === "1") {
    win.style.left = win.dataset.prevLeft || "100px";
    win.style.top = win.dataset.prevTop || "60px";
    win.style.width = win.dataset.prevWidth || "520px";
    win.style.height = win.dataset.prevHeight || "400px";
    win.dataset.maximized = "0";
    clearSnapState(win);
  } else {
    saveRestoreBounds(win);
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = "100%";
    win.style.height = `calc(100% - ${TASKBAR_H}px)`;
    win.dataset.maximized = "1";
    clearSnapState(win);
  }
  focusWindow(id);
}

function addTaskbarButton(id, title) {
  const bar = document.getElementById("taskbar-apps");
  if (bar.querySelector(`[data-id="${id}"]`)) return;
  const btn = document.createElement("button");
  btn.className = "taskbar-app active";
  btn.dataset.id = id;
  btn.textContent = title.length > 22 ? title.slice(0, 20) + "…" : title;
  btn.title = title;
  btn.addEventListener("click", () => {
    const win = openWindows[id];
    if (!win) return;
    // Switch to window's desktop first
    if ((windowDesktop[id] ?? 0) !== currentDesktop) {
      switchDesktop(windowDesktop[id] ?? 0);
    }
    if (win.dataset.minimized === "1" || win.style.display === "none") {
      win.dataset.minimized = "0";
      win.style.display = "flex";
      win.classList.add("win-opening");
      setTimeout(() => win.classList.remove("win-opening"), 180);
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  });
  btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showTaskbarMenu(e.clientX, e.clientY, id);
  });
  bar.appendChild(btn);
  updateTaskbarVisibility();
}

function showTaskbarMenu(x, y, id) {
  document.querySelector(".tb-context")?.remove();
  const menu = document.createElement("div");
  menu.className = "tb-context";
  const desk = windowDesktop[id] ?? 0;
  menu.style.left = x + "px";
  menu.style.top = Math.min(y, window.innerHeight - 220) + "px";
  menu.innerHTML = `
    <button data-act="focus">Bring to Front</button>
    <button data-act="min">Minimize</button>
    <button data-act="max">Maximize / Restore</button>
    <hr/>
    <div class="vd-move-label">Move to desktop</div>
    <button data-act="vd" data-desk="0"${desk === 0 ? " disabled" : ""}>Desktop 1</button>
    <button data-act="vd" data-desk="1"${desk === 1 ? " disabled" : ""}>Desktop 2</button>
    <button data-act="vd" data-desk="2"${desk === 2 ? " disabled" : ""}>Desktop 3</button>
    <button data-act="vd" data-desk="3"${desk === 3 ? " disabled" : ""}>Desktop 4</button>
    <hr/>
    <button data-act="close">Close</button>
  `;
  menu.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
      const act = b.dataset.act;
      if (act === "focus") {
        openWindows[id].dataset.minimized = "0";
        openWindows[id].style.display = "flex";
        focusWindow(id);
      }
      if (act === "min") minimizeWindow(id);
      if (act === "max") maximizeWindow(id);
      if (act === "vd") moveWindowToDesktop(id, +b.dataset.desk);
      if (act === "close") closeWindow(id);
      menu.remove();
    });
  });
  document.body.appendChild(menu);
  const close = () => { menu.remove(); document.removeEventListener("click", close); };
  setTimeout(() => document.addEventListener("click", close), 0);
}

function startDrag(e, win) {
  if (win.dataset.maximized === "1") return;
  isDragging = true;
  isResizing = false;
  dragTarget = win;
  const rect = win.getBoundingClientRect();
  dragOffset.x = e.clientX - rect.left;
  dragOffset.y = e.clientY - rect.top;
  focusWindow(win.dataset.id);
  e.preventDefault();
}

document.addEventListener("mousemove", (e) => {
  if (isResizing) {
    doResize(e);
    return;
  }
  if (!isDragging || !dragTarget) return;
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 60;
  const x = Math.min(Math.max(-40, e.clientX - dragOffset.x), maxX);
  const y = Math.min(Math.max(0, e.clientY - dragOffset.y), maxY);
  dragTarget.style.left = x + "px";
  dragTarget.style.top = y + "px";

  // Edge / corner / third snap preview
  const zone = detectSnapZone(e.clientX, e.clientY);
  if (zone) showSnapPreview(zone);
  else hideSnapPreview();
});

document.addEventListener("mouseup", (e) => {
  if (isDragging && dragTarget) {
    const zone = detectSnapZone(e.clientX, e.clientY);
    if (zone) applySnap(dragTarget, zone);
    else hideSnapPreview();
  }
  if (dragTarget && (isResizing || isDragging)) {
    rememberWindowSize(dragTarget);
  }
  isDragging = false;
  isResizing = false;
  resizeDir = null;
  resizeStart = null;
  dragTarget = null;
  linkedPartner = null;
  document.body.classList.remove("split-resizing");
  document.body.style.userSelect = "";
  hideSnapPreview();
});

document.addEventListener("mouseleave", () => {
  isDragging = false;
  isResizing = false;
  dragTarget = null;
  linkedPartner = null;
  document.body.classList.remove("split-resizing");
  hideSnapPreview();
});

/* ---- Keyboard shortcuts ---- */
document.addEventListener("keydown", (e) => {
  if (window.innerWidth < 900) return;

  // Alt+Tab cycle windows on current desktop
  if (e.altKey && e.key === "Tab") {
    e.preventDefault();
    cycleWindows(e.shiftKey ? -1 : 1);
    return;
  }

  // Ctrl+Alt+Left/Right — switch virtual desktop
  if (e.ctrlKey && e.altKey) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      switchDesktop((currentDesktop - 1 + VD_COUNT) % VD_COUNT);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      switchDesktop((currentDesktop + 1) % VD_COUNT);
      return;
    }
  }

  // Ctrl+Shift+1..4 — jump to desktop
  if (e.ctrlKey && e.shiftKey && e.key >= "1" && e.key <= "4") {
    e.preventDefault();
    switchDesktop(+e.key - 1);
    return;
  }

  // Ctrl+Shift+Arrow / C T M R W — window management
  if (e.ctrlKey && e.shiftKey) {
    if (e.key === "ArrowUp" && activeWindowId) {
      e.preventDefault();
      maximizeWindow(activeWindowId);
    } else if (e.key === "ArrowDown" && activeWindowId) {
      e.preventDefault();
      const win = openWindows[activeWindowId];
      if (win?.dataset.maximized === "1" || win?.dataset.snapped === "1") {
        maximizeWindow(activeWindowId);
      } else {
        minimizeWindow(activeWindowId);
      }
    } else if (e.key === "ArrowLeft" && activeWindowId) {
      e.preventDefault();
      applySnap(openWindows[activeWindowId], "left");
    } else if (e.key === "ArrowRight" && activeWindowId) {
      e.preventDefault();
      applySnap(openWindows[activeWindowId], "right");
    } else if (e.key === "C") {
      e.preventDefault();
      cascadeWindows();
    } else if (e.key === "T") {
      e.preventDefault();
      tileWindows();
    } else if (e.key === "M") {
      e.preventDefault();
      minimizeAll();
    } else if (e.key === "R") {
      e.preventDefault();
      restoreAll();
    } else if (e.key === "W" && activeWindowId) {
      e.preventDefault();
      closeWindow(activeWindowId);
    }
  }

  if (e.key === "Escape") {
    closeStartMenu();
    document.querySelector(".tb-context")?.remove();
    hideSnapPreview();
  }
});

/* Virtual desktop pager clicks */
document.getElementById("vd-pager")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".vd-btn");
  if (!btn) return;
  e.stopPropagation();
  switchDesktop(+btn.dataset.desktop);
});

// Right-click pager button → move active window there
document.getElementById("vd-pager")?.addEventListener("contextmenu", (e) => {
  const btn = e.target.closest(".vd-btn");
  if (!btn || !activeWindowId) return;
  e.preventDefault();
  moveWindowToDesktop(activeWindowId, +btn.dataset.desktop);
  showDesktopToast(`Moved → Desktop ${+btn.dataset.desktop + 1}`);
});

/* Desktop icons & start menu */
document.querySelectorAll("[data-window]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = el.dataset.window;
    if (id) openWindow(id);
  });
});

const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

function closeStartMenu() {
  startMenu?.classList.remove("open");
}

startBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  startMenu.classList.toggle("open");
});

// Keep start menu open when clicking inside it (except on app buttons which open windows)
startMenu?.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  closeStartMenu();
});

function showOsOverlay(mode) {
  const ov = document.getElementById("os-overlay");
  const msg = document.getElementById("os-overlay-msg");
  const sub = document.getElementById("os-overlay-sub");
  const restart = document.getElementById("os-overlay-restart");
  const fill = ov?.querySelector(".os-overlay-bar-fill");
  if (!ov) return;
  closeStartMenu();
  ov.hidden = false;
  ov.classList.remove("shutdown-done");
  if (restart) restart.hidden = true;
  if (fill) fill.style.width = "0%";
  if (mode === "logoff") {
    if (msg) msg.textContent = "Logging off…";
    if (sub) sub.textContent = "Saving your settings";
  } else {
    if (msg) msg.textContent = "Turning off computer…";
    if (sub) sub.textContent = "Please wait";
  }
  let p = 0;
  const tick = setInterval(() => {
    p += 8 + Math.random() * 12;
    if (p >= 100) {
      p = 100;
      clearInterval(tick);
      if (mode === "logoff") {
        if (msg) msg.textContent = "Welcome";
        if (sub) sub.textContent = "Click Restart to return to the desktop";
        if (restart) {
          restart.hidden = false;
          restart.textContent = "Log on";
        }
        ov.classList.add("shutdown-done");
      } else {
        if (msg) msg.textContent = "It's now safe to turn off your computer.";
        if (sub) sub.textContent = "or click Restart to boot again";
        if (restart) {
          restart.hidden = false;
          restart.textContent = "Restart";
        }
        ov.classList.add("shutdown-done");
        ov.classList.add("safe-off");
      }
    }
    if (fill) fill.style.width = Math.min(100, p) + "%";
  }, 180);
}

document.getElementById("log-off")?.addEventListener("click", () => showOsOverlay("logoff"));
document.getElementById("shut-down")?.addEventListener("click", () => showOsOverlay("shutdown"));
document.getElementById("os-overlay-restart")?.addEventListener("click", () => {
  location.reload();
});

/* ========== Desktop right-click context menu ========== */
(function initDesktopContextMenu() {
  const menu = document.getElementById("desktop-context-menu");
  const desktop = document.getElementById("desktop");
  if (!menu || !desktop) return;

  function hideMenu() {
    menu.hidden = true;
  }
  function showMenu(x, y) {
    menu.hidden = false;
    const pad = 8;
    const mw = menu.offsetWidth || 180;
    const mh = menu.offsetHeight || 280;
    const maxX = window.innerWidth - mw - pad;
    const maxY = window.innerHeight - mh - pad - 40;
    menu.style.left = Math.max(pad, Math.min(x, maxX)) + "px";
    menu.style.top = Math.max(pad, Math.min(y, maxY)) + "px";
  }

  desktop.addEventListener("contextmenu", (e) => {
    // Don't override window/icon app menus
    if (e.target.closest(".window, .taskbar, .start-menu, .ms-board, .ms-cell")) return;
    e.preventDefault();
    closeStartMenu?.();
    showMenu(e.clientX, e.clientY);
  });

  document.addEventListener("click", (e) => {
    if (!menu.hidden && !menu.contains(e.target)) hideMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideMenu();
  });

  menu.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    hideMenu();
    if (action === "refresh") {
      document.querySelector(".wallpaper")?.classList.add("refresh-flash");
      setTimeout(() => document.querySelector(".wallpaper")?.classList.remove("refresh-flash"), 300);
    } else if (action === "theme") {
      toggleTheme?.();
    } else if (action === "cascade") {
      cascadeWindows?.();
    } else if (action === "tile") {
      tileWindows?.();
    } else if (action === "triple") {
      snapTripleColumns?.();
    } else if (action === "properties") {
      openWindow("about");
    } else if (action === "decap") {
      window.open("admin/", "_blank", "noopener");
    } else if (action) {
      openWindow(action);
    }
  });
})();

/* ========== Mobile ========== */
function mobileContent(key) {
  const c = CONTENT[key];
  if (!c) return "";
  return c.html
    .replace(/class="profile-row"/g, 'style="display:flex;gap:14px;align-items:flex-start;margin-bottom:16px;"')
    .replace(/class="profile-pic"/g, 'class="profile-pic" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#4fc3f7,#0288d1);flex-shrink:0;position:relative;"')
    .replace(/class="project-card"/g, 'class="mobile-card"')
    .replace(/class="skill-bar-wrap"/g, 'class="mobile-card"')
    .replace(/class="skill-bar"/g, 'style="height:8px;background:rgba(128,128,128,0.3);border-radius:4px;overflow:hidden;margin-top:6px;"')
    .replace(/class="tags"/g, 'style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;"')
    .replace(/class="tag"/g, 'style="font-size:11px;background:rgba(10,132,255,0.15);color:var(--accent);padding:3px 8px;border-radius:6px;"');
}

function mountMobileGame(body) {
  const EMBED_URL = "https://www.tetrisgratuit.fr/";
  body.classList.add("page-body-full");
  body.innerHTML = "";
  const root = document.createElement("div");
  root.className = "bb-mobile bb-mobile-only";
  // Game only — no "Open full site" toolbar
  root.innerHTML =
    '<div class="bb-frame-wrap">' +
    '<iframe class="bb-frame" title="Tetris" allow="fullscreen; autoplay; gamepad; clipboard-write" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' +
    EMBED_URL +
    '"></iframe>' +
    "</div>";
  body.appendChild(root);
}

function showPage(pageId) {
  const home = document.getElementById("home-screen");
  if (home) home.hidden = true;
  document.querySelectorAll(".app-page").forEach(p => { p.hidden = true; });
  const page = document.getElementById(`page-${pageId}`);
  if (!page) return;
  page.hidden = false;
  const body = document.getElementById(`content-${pageId}`);
  if (!body) return;

  // Mobile-only external game (iPhone shell)
  if (pageId === "tetris" || pageId === "blockblaster") {
    mountMobileGame(body);
    body.dataset.loaded = "1";
    return;
  }

  // Rebuild interactive apps each time so state is fresh; cache static content
  if (APPS[pageId]) {
    body.classList.add("page-body-full");
    body.innerHTML = "";
    body.appendChild(getAppBody(pageId));
    body.dataset.loaded = "1";
  } else if (!body.dataset.loaded) {
    body.dataset.loaded = "1";
    body.innerHTML = mobileContent(pageId);
    // Apply profile photo on mobile About (or fall back to initials)
    const pic = body.querySelector("[style*='border-radius:50%'], .profile-pic");
    if (pic) {
      if (profilePhotoReady) {
        pic.style.backgroundImage = `url(${profilePhotoUrl})`;
        pic.style.backgroundSize = "cover";
        pic.style.backgroundPosition = "center";
        pic.classList.add("has-photo");
        pic.textContent = "";
      } else {
        pic.textContent = "";
        pic.style.display = "flex";
        pic.style.alignItems = "center";
        pic.style.justifyContent = "center";
        pic.style.color = "#fff";
        pic.style.fontWeight = "700";
        pic.style.fontSize = "28px";
        pic.textContent = "MA";
      }
    }
  }
}

function showHome() {
  document.querySelectorAll(".app-page").forEach(p => p.hidden = true);
  document.getElementById("home-screen").hidden = false;
}

document.querySelectorAll(".app-icon[data-page]").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.page));
});
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", showHome);
});

/* ========== Init ========== */
initTheme();

/* ========== Screensaver ========== */
let ssTimer = null;
function resetScreensaverTimer() {
  clearTimeout(ssTimer);
  const mins = parseInt(localStorage.getItem("portfolio-ss-idle") || "2", 10);
  const el = document.getElementById("xp-screensaver");
  if (el) el.hidden = true;
  if (!mins || mins <= 0) return;
  ssTimer = setTimeout(() => {
    if (el) el.hidden = false;
  }, mins * 60 * 1000);
}
["mousemove", "keydown", "click", "touchstart"].forEach(ev => {
  document.addEventListener(ev, () => {
    const el = document.getElementById("xp-screensaver");
    if (el && !el.hidden) el.hidden = true;
    resetScreensaverTimer();
  }, { passive: true });
});
resetScreensaverTimer();
// Wallpaper from control panel
document.body.dataset.wallpaper = localStorage.getItem("portfolio-wallpaper") || "default";
if (typeof applyIconSizes === "function") applyIconSizes();
(function restoreIconMetrics() {
  const px = localStorage.getItem("portfolio-icon-gap-px");
  const py = localStorage.getItem("portfolio-icon-gap-y");
  if (px) {
    document.documentElement.style.setProperty("--icon-gap-y", px + "px");
    document.documentElement.style.setProperty("--icon-gap-x", Math.round(parseInt(px, 10) * 1.25) + "px");
  }
  if (py) document.documentElement.style.setProperty("--icon-gap-y", py + "px");
  const img = localStorage.getItem("portfolio-icon-img-px");
  if (img) document.documentElement.style.setProperty("--icon-img-size", img + "px");
  const iw = localStorage.getItem("portfolio-icon-width");
  if (iw) document.documentElement.style.setProperty("--icon-cell-w", iw + "px");
  const ih = localStorage.getItem("portfolio-icon-height");
  if (ih) document.documentElement.style.setProperty("--icon-cell-h", ih + "px");
  const snap = localStorage.getItem("portfolio-snap-threshold");
  if (snap) window.__snapThreshold = parseInt(snap, 10) || 18;
})();



/* ========== Project code snippet copy ========== */
function copyProjectSnippet(btn) {
  const wrap = btn.closest(".proj-code-wrap");
  const code = wrap?.querySelector("code");
  if (!code) return;
  const text = code.innerText || code.textContent || "";
  const done = () => {
    const prev = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = prev || "Copy";
      btn.classList.remove("copied");
    }, 1400);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      ta.remove();
      done();
    });
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (_) {}
    ta.remove();
    done();
  }
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-copy-snippet]");
  if (btn) {
    e.preventDefault();
    e.stopPropagation();
    copyProjectSnippet(btn);
  }
});

/* ========== Resume print / PDF helpers ========== */
function printResume() {
  // Prefer printing the on-screen professional layout (Save as PDF in browser dialog)
  const doc = document.querySelector(".resume-doc");
  if (!doc) {
    window.open("resume.pdf", "_blank", "noopener");
    return;
  }
  // Ensure resume window content is in DOM for @media print rules
  window.print();
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-resume-print]");
  if (btn) {
    e.preventDefault();
    printResume();
  }
});

/* ========== Contact form -> Gmail via Formspree (or mailto fallback) ========== */
const PORTFOLIO_CONTACT_EMAIL = "linuxos777@gmail.com";

function getFormspreeId() {
  try {
    const ls = localStorage.getItem("menelik-formspree-id");
    if (ls && ls !== "YOUR_FORM_ID" && /^[a-zA-Z0-9]+$/.test(ls.trim())) return ls.trim();
  } catch (_) {}
  // Default Formspree form (portfolio contact)
  return "xqervlnj";
}

function setContactStatus(form, text, kind) {
  let el = form.querySelector("#contact-form-status, .contact-form-status");
  if (!el) {
    el = document.createElement("p");
    el.className = "contact-form-status";
    el.id = "contact-form-status";
    el.setAttribute("role", "status");
    form.appendChild(el);
  }
  el.hidden = !text;
  el.textContent = text || "";
  el.dataset.kind = kind || "";
  el.style.color = kind === "err" ? "#b91c1c" : kind === "ok" ? "#15803d" : "";
}

function buildMailto(name, email, message) {
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " <" + email + ">");
  return "mailto:" + PORTFOLIO_CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
}

document.addEventListener("submit", async (e) => {
  const form = e.target.closest("#portfolio-contact-form, .contact-form");
  if (!form) return;
  e.preventDefault();

  const name = (form.querySelector('[name="name"]')?.value || "").trim();
  const email = (form.querySelector('[name="email"]')?.value || "").trim();
  const message = (form.querySelector('[name="message"]')?.value || "").trim();
  if (!name || !email || !message) {
    setContactStatus(form, "Please fill in all fields.", "err");
    return;
  }

  const btn = form.querySelector('[type="submit"]');
  const action = form.getAttribute("action") || "";
  let formId = getFormspreeId();
  if (!formId && action.includes("formspree.io/f/") && !action.includes("YOUR_FORM_ID")) {
    const m = action.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
    if (m) formId = m[1];
  }

  // No Formspree id yet -> open mail client addressed to your Gmail
  if (!formId) {
    window.location.href = buildMailto(name, email, message);
    setContactStatus(
      form,
      "Opening your email app to send to " + PORTFOLIO_CONTACT_EMAIL + ". For one-click in-browser send, set up Formspree.",
      "ok"
    );
    if (typeof showXpDialog === "function") {
      showXpDialog(
        "Contact",
        "Opening your email app to message " + PORTFOLIO_CONTACT_EMAIL + ". To receive messages without an email app, create a free form at formspree.io using " + PORTFOLIO_CONTACT_EMAIL + ", then run: localStorage.setItem('menelik-formspree-id','YOUR_FORM_ID')"
      );
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.dataset.prev = btn.textContent;
    btn.textContent = "Sending…";
  }
  setContactStatus(form, "Sending to " + PORTFOLIO_CONTACT_EMAIL + "…", "");

  try {
    const endpoint = "https://formspree.io/f/" + formId;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _replyto: email,
        _subject: "Portfolio contact from " + name,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const errMsg =
        (data && data.error) ||
        (data && data.errors && data.errors.map((x) => x.message).join(", ")) ||
        ("HTTP " + res.status);
      throw new Error(errMsg);
    }
    form.reset();
    setContactStatus(form, "Sent! Your message was delivered to " + PORTFOLIO_CONTACT_EMAIL + ".", "ok");
    if (typeof showXpDialog === "function") {
      showXpDialog("Contact", "Thanks! Your message was sent to " + PORTFOLIO_CONTACT_EMAIL + ".");
    }
  } catch (err) {
    console.error("[contact]", err);
    setContactStatus(form, "Could not send in-browser. Opening email app instead…", "err");
    window.location.href = buildMailto(name, email, message);
    if (typeof showXpDialog === "function") {
      showXpDialog(
        "Contact",
        "In-browser send failed. Opening your email app to " + PORTFOLIO_CONTACT_EMAIL + "."
      );
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.dataset.prev || "Send message";
    }
  }
});

let profilePhotoReady = false;
// Prefer WebP when supported; square crop is already face-centered
let profilePhotoUrl = "profile.jpg";

function supportsWebP() {
  try {
    return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0;
  } catch (e) {
    return false;
  }
}

function supportsAvif() {
  // AVIF support check via async image is heavy; use CSS/feature sniff lightly
  try {
    return typeof createImageBitmap === "function" &&
      document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0 &&
      CSS.supports("color", "color(display-p3 1 0 0)"); // rough modern-browser proxy
  } catch (e) {
    return false;
  }
}

/** Size-aware profile URLs — generated with sharp (avif / webp / jpeg) */
const PROFILE_SOURCES = {
  avif: {
    sm: "static/images/profile-64.avif",
    md: "static/images/profile-128.avif",
    lg: "static/images/profile-320.avif"
  },
  webp: {
    sm: "static/images/profile-64.webp",
    md: "static/images/profile-128.webp",
    lg: "static/images/profile-320.webp",
    fallback: "profile.webp"
  },
  jpeg: {
    sm: "static/images/profile-64.jpg",
    md: "static/images/profile-128.jpg",
    lg: "static/images/profile-320.jpg",
    fallback: "profile.jpg"
  }
};

function bestProfileSet() {
  if (window.__PROFILE_FORCE_JPEG__) return PROFILE_SOURCES.jpeg;
  // Prefer WebP for broad support; AVIF when clearly modern (optional)
  if (window.__PROFILE_PREFER_AVIF__ && supportsAvif()) return PROFILE_SOURCES.avif;
  if (supportsWebP()) return PROFILE_SOURCES.webp;
  return PROFILE_SOURCES.jpeg;
}

function profileUrlFor(el) {
  if (window.__PROFILE_IMAGE__) return window.__PROFILE_IMAGE__;
  const set = bestProfileSet();
  if (el.classList.contains("profile-pic")) return set.lg;
  if (el.classList.contains("mobile-avatar")) return set.md;
  if (el.classList.contains("user-avatar")) return set.sm;
  return set.md;
}

function applyProfilePhoto(root = document) {
  if (!profilePhotoReady && !window.__PROFILE_IMAGE__) return;
  root.querySelectorAll(".profile-pic, .user-avatar, .mobile-avatar").forEach(el => {
    const src = profileUrlFor(el);
    if (!src) return;
    el.style.backgroundImage = `url("${src}")`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.classList.add("has-photo");
  });
}

function tryLoadProfile() {
  // Decap media override — single custom URL for all avatars
  if (window.__PROFILE_IMAGE__) {
    profilePhotoReady = true;
    profilePhotoUrl = window.__PROFILE_IMAGE__;
    const style = document.createElement("style");
    style.textContent = `.has-photo::after { display: none !important; }`;
    document.head.appendChild(style);
    applyProfilePhoto();
    return;
  }

  const set = bestProfileSet();
  const primary = set.lg;
  const fallback = PROFILE_SOURCES.jpeg.lg;

  const img = new Image();
  img.onload = () => {
    profilePhotoUrl = primary;
    profilePhotoReady = true;
    const style = document.createElement("style");
    style.textContent = `.has-photo::after { display: none !important; }`;
    document.head.appendChild(style);
    applyProfilePhoto();
    // Warm smaller sizes in cache
    [set.sm, set.md].forEach(u => { const i = new Image(); i.src = u; });
  };
  img.onerror = () => {
    const img2 = new Image();
    img2.onload = () => {
      profilePhotoUrl = fallback;
      profilePhotoReady = true;
      const style = document.createElement("style");
      style.textContent = `.has-photo::after { display: none !important; }`;
      document.head.appendChild(style);
      // Force JPEG set if WebP failed
      window.__PROFILE_FORCE_JPEG__ = true;
      applyProfilePhoto();
    };
    img2.onerror = () => {
      // Root-level fallback
      const img3 = new Image();
      img3.onload = () => {
        profilePhotoUrl = "profile.jpg";
        profilePhotoReady = true;
        window.__PROFILE_IMAGE__ = "profile.jpg";
        applyProfilePhoto();
      };
      img3.onerror = () => console.warn("profile photo not found — using initials fallback");
      img3.src = "profile.jpg";
    };
    img2.src = fallback;
  };
  img.src = primary;
}
tryLoadProfile();

/* ========== Load content/*.json (Decap CMS source of truth) ========== */
const CONTENT_FILES = ["about", "education", "experience", "certifications", "projects", "skills", "contact", "resume"];
/** Cache-bust query for content fetches — mirrors window.__MENELIK_V__ from index.html */
const ASSET_V =
  (typeof window !== "undefined" && window.__MENELIK_V__) || "20260803c";
function withV(url) {
  const join = url.indexOf("?") >= 0 ? "&" : "?";
  return url + join + "v=" + encodeURIComponent(ASSET_V);
}

async function loadExternalContent() {
  const results = await Promise.all(
    CONTENT_FILES.map(async (key) => {
      try {
        const res = await fetch(withV(`content/${key}.json`), {
          cache: "no-cache",
        });
        if (!res.ok) return null;
        const data = await res.json();
        return { key, data };
      } catch {
        return null;
      }
    })
  );
  results.forEach((item) => {
    if (!item || !CONTENT[item.key]) return;
    if (item.data.title) CONTENT[item.key].title = item.data.title;
    if (item.data.html) CONTENT[item.key].html = item.data.html;
    if (item.data.iconClass) CONTENT[item.key].iconClass = item.data.iconClass;
  });

  // Sticky note text
  try {
    const res = await fetch(withV("content/sticky-note.json"), {
      cache: "no-cache",
    });
    if (res.ok) {
      const note = await res.json();
      const el = document.querySelector(".sticky-note p");
      if (el && note.text) el.textContent = note.text;
    }
  } catch { /* keep HTML default */ }

  // Optional profile image from Decap (about.json → profileImage)
  try {
    const about = results.find(r => r && r.key === "about");
    const src = about && about.data && about.data.profileImage;
    if (src) {
      window.__PROFILE_IMAGE__ = src.startsWith("http") || src.startsWith("/") ? src : ("/" + src.replace(/^\/+/, ""));
      profilePhotoReady = true;
      profilePhotoUrl = window.__PROFILE_IMAGE__;
      if (typeof applyProfilePhoto === "function") applyProfilePhoto();
      else if (typeof tryLoadProfile === "function") tryLoadProfile();
    }
  } catch { /* ignore */ }
}

// Content loads in parallel with boot sequence
const contentReady = loadExternalContent()
  .catch(() => {})
  .finally(() => {
    loadContentOverrides();
    // Notify feature pack so case studies / radar / certs re-apply after JSON overwrite
    try {
      document.dispatchEvent(new CustomEvent("menelik-content-ready"));
    } catch (_) {}
    // If a content window was opened before JSON finished, refresh its body
    try {
      ["about", "education", "experience", "certifications", "projects", "skills", "contact", "resume"].forEach((id) => {
        if (typeof openWindows !== "undefined" && openWindows[id] && typeof refreshOpenWindow === "function") {
          // refreshOpenWindow is defined later — queue microtask after full parse
        }
      });
      setTimeout(() => {
        if (typeof refreshOpenWindow !== "function") return;
        ["skills", "about", "contact", "resume", "projects"].forEach((id) => {
          try {
            if (openWindows[id]) refreshOpenWindow(id);
          } catch (_) {}
        });
      }, 0);
    } catch (_) {}
  });

/* ========== OS boot + startup sound + fullscreen ========== */
function playXpStartupSound() {
  try {
    if (localStorage.getItem("portfolio-startup-sound") === "off") return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    if (ctx.state === "suspended") ctx.resume();

    // XP-inspired rising chime (Microsoft's original sound is copyrighted — synthesized)
    const notes = [
      { f: 392.0, t: 0.00, d: 0.55 },
      { f: 523.25, t: 0.18, d: 0.55 },
      { f: 659.25, t: 0.36, d: 0.70 },
      { f: 783.99, t: 0.52, d: 1.10 }
    ];
    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.type = "sine";
      osc.frequency.value = f;
      filter.type = "lowpass";
      filter.frequency.value = 2400;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + d);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + d + 0.05);
    });
    const pad = ctx.createOscillator();
    const pg = ctx.createGain();
    pad.type = "triangle";
    pad.frequency.value = 196;
    pg.gain.setValueAtTime(0.0001, ctx.currentTime + 0.4);
    pg.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.6);
    pg.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);
    pad.connect(pg);
    pg.connect(ctx.destination);
    pad.start(ctx.currentTime + 0.4);
    pad.stop(ctx.currentTime + 2.3);
  } catch (e) {
    console.warn("Startup sound unavailable", e);
  }
}

/** Fullscreen API helpers — safe on all browsers; never throws to callers */
const FS_STATE = {
  lastError: null,
  native: false,
  cssFallback: false,
};

function isOsFullscreen() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    null
  );
}

function applyCssFullscreenFallback(on) {
  document.documentElement.classList.toggle("os-fullscreen", !!on);
  document.body.classList.toggle("os-fullscreen", !!on);
  FS_STATE.cssFallback = !!on;
}

function classifyFullscreenError(err) {
  if (!err) return { code: "unknown", message: "Fullscreen failed" };
  const name = err.name || "";
  const msg = String(err.message || err);
  // Common DOMException names from the Fullscreen API
  if (name === "NotAllowedError" || /permission|not allowed|user denied/i.test(msg)) {
    return {
      code: "NotAllowedError",
      message: "Fullscreen was blocked. Click the boot button again, or allow fullscreen in the browser.",
    };
  }
  if (name === "TypeError" || /requestfullscreen|not a function/i.test(msg)) {
    return {
      code: "TypeError",
      message: "This browser does not support fullscreen here.",
    };
  }
  if (name === "SecurityError") {
    return {
      code: "SecurityError",
      message: "Fullscreen needs a secure context (HTTPS or localhost).",
    };
  }
  if (name === "InvalidStateError") {
    return {
      code: "InvalidStateError",
      message: "Fullscreen is not available in the current state.",
    };
  }
  return { code: name || "Error", message: msg || "Fullscreen failed" };
}

/**
 * Request native fullscreen. Always resolves (never rejects).
 * @param {object} [opts]
 * @param {boolean} [opts.silent=true] — if false, show XP dialog on failure
 * @param {boolean} [opts.forceCssFallback=true] — keep immersive CSS class even if native FS fails
 * @returns {Promise<{ok:boolean, native:boolean, error?:object}>}
 */
function requestOsFullscreen(opts) {
  const options = Object.assign({ silent: true, forceCssFallback: true }, opts || {});
  const el = document.documentElement;

  // Already in native fullscreen
  if (isOsFullscreen()) {
    FS_STATE.native = true;
    FS_STATE.lastError = null;
    applyCssFullscreenFallback(true);
    return Promise.resolve({ ok: true, native: true });
  }

  const req =
    el.requestFullscreen ||
    el.webkitRequestFullscreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;

  // Always apply CSS immersive mode so the OS still feels full-bleed
  if (options.forceCssFallback) applyCssFullscreenFallback(true);

  if (typeof req !== "function") {
    const info = {
      code: "Unsupported",
      message: "Fullscreen API not available — using windowed immersive mode.",
    };
    FS_STATE.lastError = info;
    FS_STATE.native = false;
    if (!options.silent && typeof showXpDialog === "function") {
      try { showXpDialog("Display", info.message); } catch (_) {}
    }
    return Promise.resolve({ ok: false, native: false, error: info });
  }

  let result;
  try {
    // Options object is supported in modern Chromium; older engines ignore / throw TypeError
    try {
      result = req.call(el, { navigationUI: "hide" });
    } catch (optErr) {
      // Retry without options (Safari / older Firefox)
      result = req.call(el);
    }
  } catch (syncErr) {
    const info = classifyFullscreenError(syncErr);
    FS_STATE.lastError = info;
    FS_STATE.native = false;
    if (!options.silent && typeof showXpDialog === "function") {
      try { showXpDialog("Fullscreen", info.message); } catch (_) {}
    }
    return Promise.resolve({ ok: false, native: false, error: info });
  }

  // Legacy webkit may return void instead of a Promise
  if (!result || typeof result.then !== "function") {
    const native = isOsFullscreen();
    FS_STATE.native = native;
    FS_STATE.lastError = native ? null : { code: "Unknown", message: "Fullscreen request returned no result" };
    return Promise.resolve({ ok: native, native });
  }

  return result
    .then(() => {
      FS_STATE.native = true;
      FS_STATE.lastError = null;
      applyCssFullscreenFallback(true);
      return { ok: true, native: true };
    })
    .catch((err) => {
      const info = classifyFullscreenError(err);
      FS_STATE.lastError = info;
      FS_STATE.native = false;
      // CSS fallback already applied — desktop still usable
      if (!options.silent && typeof showXpDialog === "function") {
        try { showXpDialog("Fullscreen", info.message); } catch (_) {}
      } else {
        console.info("[Menelik OS] Fullscreen:", info.code, info.message);
      }
      return { ok: false, native: false, error: info };
    });
}

function exitOsFullscreen() {
  const exit =
    document.exitFullscreen ||
    document.webkitExitFullscreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    document.msExitFullscreen;
  applyCssFullscreenFallback(false);
  FS_STATE.native = false;
  if (typeof exit !== "function") return Promise.resolve();
  try {
    const p = exit.call(document);
    if (p && typeof p.then === "function") {
      return p.catch((err) => {
        console.info("[Menelik OS] exitFullscreen:", err && err.message);
      });
    }
  } catch (err) {
    console.info("[Menelik OS] exitFullscreen:", err && err.message);
  }
  return Promise.resolve();
}

// Keep CSS class in sync when user presses Esc or the browser exits FS
(function bindFullscreenEvents() {
  const sync = () => {
    const native = isOsFullscreen();
    FS_STATE.native = native;
    // Keep CSS fallback if we had entered OS mode; only drop native flag
    if (native) applyCssFullscreenFallback(true);
  };
  const onError = (e) => {
    const info = classifyFullscreenError(e && (e.error || e));
    FS_STATE.lastError = info;
    FS_STATE.native = false;
    console.info("[Menelik OS] fullscreenerror:", info.code, info.message);
  };
  document.addEventListener("fullscreenchange", sync);
  document.addEventListener("webkitfullscreenchange", sync);
  document.addEventListener("mozfullscreenchange", sync);
  document.addEventListener("MSFullscreenChange", sync);
  document.addEventListener("fullscreenerror", onError);
  document.addEventListener("webkitfullscreenerror", onError);
})();

window.requestOsFullscreen = requestOsFullscreen;
window.exitOsFullscreen = exitOsFullscreen;
window.isOsFullscreen = isOsFullscreen;

async function finishBoot(fullscreenAlreadyRequested) {
  const boot = document.getElementById("boot-screen");
  const desktop = document.getElementById("desktop");
  const mobile = document.getElementById("mobile");

  try { playXpStartupSound(); } catch (_) {}
  // Secondary attempt is usually blocked without a gesture — keep CSS fallback only
  if (!fullscreenAlreadyRequested && !isOsFullscreen()) {
    applyCssFullscreenFallback(true);
  }

  // Never hang forever if content/*.json fetch stalls
  try {
    await Promise.race([
      contentReady,
      new Promise((resolve) => setTimeout(resolve, 2500))
    ]);
  } catch (_) {}

  if (boot) boot.classList.add("boot-done");
  desktop?.classList.remove("boot-hidden");
  mobile?.classList.remove("boot-hidden");

  setTimeout(() => {
    boot?.remove();
    try {
      document.dispatchEvent(new CustomEvent("menelik-boot-done"));
    } catch (_) {}
    // Desktop only: open About after restoreState (features-extra) has a chance to run
    setTimeout(() => {
      try {
        if (window.innerWidth >= 900 && typeof openWindow === "function") {
          openWindow("about");
        }
      } catch (_) {}
    }, 350);
  }, 650);
}

function runBootSequence() {
  const boot = document.getElementById("boot-screen");
  const status = document.getElementById("boot-status");
  const fill = boot?.querySelector(".boot-bar-fill");
  const startBtn = document.getElementById("boot-start-btn");
  let entered = false;
  let readyToEnter = false;
  /** After boot UI is ready, wait this long before optional auto-enter (no native fullscreen). */
  const AUTO_ENTER_MS = 60 * 1000;

  const enterDesktop = (fromUserGesture) => {
    if (entered) return;
    entered = true;
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.hidden = true;
    }
    if (status) status.textContent = "Starting Windows…";
    // Fullscreen MUST be requested in the same tick as a user click/keypress
    if (fromUserGesture) {
      requestOsFullscreen({ silent: true, forceCssFallback: true }).catch(() => {});
    } else {
      // Auto-enter after 1 min: CSS immersive only (browsers block native FS without gesture)
      applyCssFullscreenFallback(true);
    }
    finishBoot(!!fromUserGesture);
  };

  if (!boot) {
    // No boot screen in DOM — stay on page; user opens apps manually
    return;
  }

  const steps = [
    { p: 18, msg: "Loading personal settings…" },
    { p: 40, msg: "Preparing desktop…" },
    { p: 62, msg: "Starting services…" },
    { p: 85, msg: "Almost ready…" },
    { p: 100, msg: "Welcome" }
  ];
  let i = 0;
  const tick = () => {
    if (entered) return;
    if (i >= steps.length) {
      readyToEnter = true;
      if (status) {
        status.textContent = "Click the button to enter · Full screen";
      }
      if (startBtn) {
        startBtn.hidden = false;
        startBtn.textContent = "Click to enter · Full screen";
        startBtn.focus();
      }
      // No instant auto-login. Optional: enter after 1 minute if user never clicks.
      setTimeout(() => {
        if (!entered) {
          if (status) status.textContent = "Entering desktop…";
          enterDesktop(false);
        }
      }, AUTO_ENTER_MS);
      return;
    }
    const step = steps[i++];
    if (fill) fill.style.width = step.p + "%";
    if (status) status.textContent = step.msg;
    setTimeout(tick, 280 + Math.random() * 120);
  };
  setTimeout(tick, 300);

  startBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!readyToEnter) return;
    enterDesktop(true); // user gesture → fullscreen
  });

  // Click the boot button area only when ready (not during loading bar)
  boot.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    if (!readyToEnter) return;
    if (startBtn && !startBtn.hidden) enterDesktop(true);
  });

  document.addEventListener("keydown", function onKey(e) {
    if (!readyToEnter || entered) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      document.removeEventListener("keydown", onKey);
      enterDesktop(true); // keyboard gesture → fullscreen
    }
  });
}

runBootSequence();


/* ========== Window focus keyboard shortcuts ========== */
document.addEventListener("keydown", (e) => {
  // Ctrl+Tab / Ctrl+Shift+Tab — cycle open windows (MRU)
  if (e.ctrlKey && e.key === "Tab") {
    e.preventDefault();
    cycleWindows(e.shiftKey ? -1 : 1);
    return;
  }
  // Ctrl+F6 — same as Ctrl+Tab (classic MDI)
  if (e.ctrlKey && (e.key === "F6" || e.code === "F6")) {
    e.preventDefault();
    cycleWindows(e.shiftKey ? -1 : 1);
    return;
  }
  // Alt+Esc — cycle without MRU reorder feel (still uses cycleWindows)
  if (e.altKey && e.key === "Escape") {
    e.preventDefault();
    cycleWindows(1);
    return;
  }
}, true);

// Click empty desktop → blur windows (XP-like)
document.getElementById("desktop")?.addEventListener("mousedown", (e) => {
  if (e.target.closest(".window") || e.target.closest(".taskbar") || e.target.closest(".start-menu")) return;
  if (e.target.closest(".desktop-icons") || e.target.closest(".sticky-notes")) return;
  if (e.target.closest(".desktop-widgets") || e.target.closest("#desktop-widgets")) return;
  if (e.target.closest(".context-menu")) return;
  // Only when clicking wallpaper / desktop root
  if (e.target.id === "desktop" || e.target.classList.contains("wallpaper") || e.target.classList.contains("desktop")) {
    blurAllWindows();
  }
});

/* ========== Admin CMS (client-side WordPress-style editor) ========== */
const ADMIN_STORAGE_KEY = "portfolio-content-overrides";
const ADMIN_PASS_HASH_KEY = "portfolio-admin-pass-hash";
const ADMIN_PASS_KEY_LEGACY = "portfolio-admin-pass"; // migrate old plaintext
const ADMIN_SESSION_KEY = "portfolio-admin-session";
const ADMIN_LOCK_KEY = "portfolio-admin-lock";
/** @deprecated fixed pepper used only for legacy SHA-256 records */
const ADMIN_SALT_LEGACY = "menelik-xp-portfolio-v1";
/** Factory default: PBKDF2-SHA-256 (310k iters). Password is not stored in source. */
const DEFAULT_ADMIN_RECORD =
  "pbkdf2$310000$6d656e656c696b2d78702d61646d696e2d76322d64656661756c742d73616c74$5458ac3166ac879b3bcb8fd0b5246ed74ad2113aac766093118fbf40553d3b25";
const PBKDF2_ITERATIONS = 310000;
const PBKDF2_HASH_BYTES = 32;
const MIN_PASS_LEN = 8;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_MS = 60 * 1000; // 1 minute

const EDITABLE_SECTIONS = ["about", "education", "experience", "certifications", "projects", "skills", "contact", "resume"];

function toHex(buf) {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex) {
  const clean = String(hex).replace(/[^0-9a-f]/gi, "");
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
  return out;
}

function timingSafeEqualHex(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Legacy single-pass SHA-256 (fast — only for migrating old records). */
async function hashPasswordLegacySha256(password) {
  const data = new TextEncoder().encode(ADMIN_SALT_LEGACY + "\0" + password);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return toHex(buf);
}

/**
 * PBKDF2-HMAC-SHA-256 password hash (Web Crypto).
 * Returns storage record: pbkdf2$<iters>$<saltHex>$<hashHex>
 */
async function hashPasswordPbkdf2(password, saltBytes, iterations) {
  const iters = iterations || PBKDF2_ITERATIONS;
  const salt =
    saltBytes ||
    (crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(16)) : new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: iters,
      hash: "SHA-256",
    },
    keyMaterial,
    PBKDF2_HASH_BYTES * 8
  );
  return "pbkdf2$" + iters + "$" + toHex(salt) + "$" + toHex(bits);
}

function parsePassRecord(record) {
  if (!record || typeof record !== "string") return null;
  if (record.startsWith("pbkdf2$")) {
    const parts = record.split("$");
    if (parts.length !== 4) return null;
    const iterations = parseInt(parts[1], 10);
    if (!iterations || !parts[2] || !parts[3]) return null;
    return { type: "pbkdf2", iterations, saltHex: parts[2], hashHex: parts[3] };
  }
  // Legacy: bare 64-char hex SHA-256
  if (/^[0-9a-f]{64}$/i.test(record)) {
    return { type: "sha256", hashHex: record.toLowerCase() };
  }
  return null;
}

async function getStoredPassRecord() {
  // Migrate legacy plaintext password if present
  const legacy = localStorage.getItem(ADMIN_PASS_KEY_LEGACY);
  if (legacy) {
    const rec = await hashPasswordPbkdf2(legacy);
    localStorage.setItem(ADMIN_PASS_HASH_KEY, rec);
    localStorage.removeItem(ADMIN_PASS_KEY_LEGACY);
    return rec;
  }
  const stored = localStorage.getItem(ADMIN_PASS_HASH_KEY);
  if (stored) return stored;
  return DEFAULT_ADMIN_RECORD;
}

async function verifyAdminPassword(password) {
  if (!password) return false;
  const record = await getStoredPassRecord();
  const parsed = parsePassRecord(record);
  if (!parsed) return false;

  if (parsed.type === "pbkdf2") {
    const candidate = await hashPasswordPbkdf2(password, fromHex(parsed.saltHex), parsed.iterations);
    const candHash = candidate.split("$")[3] || "";
    const ok = timingSafeEqualHex(candHash, parsed.hashHex.toLowerCase());
    // Transparent upgrade if iterations were below current policy
    if (ok && parsed.iterations < PBKDF2_ITERATIONS) {
      try {
        localStorage.setItem(ADMIN_PASS_HASH_KEY, await hashPasswordPbkdf2(password));
      } catch (_) {}
    }
    return ok;
  }

  // Legacy SHA-256 path → verify then upgrade to PBKDF2
  const legacyHash = await hashPasswordLegacySha256(password);
  const ok = timingSafeEqualHex(legacyHash, parsed.hashHex.toLowerCase());
  if (ok) {
    try {
      localStorage.setItem(ADMIN_PASS_HASH_KEY, await hashPasswordPbkdf2(password));
    } catch (_) {}
  }
  return ok;
}

async function isUsingDefaultPassword(password) {
  const parsed = parsePassRecord(DEFAULT_ADMIN_RECORD);
  if (!parsed || parsed.type !== "pbkdf2") return false;
  const candidate = await hashPasswordPbkdf2(password, fromHex(parsed.saltHex), parsed.iterations);
  const candHash = candidate.split("$")[3] || "";
  return timingSafeEqualHex(candHash, parsed.hashHex.toLowerCase());
}

function getLockState() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN_LOCK_KEY) || "{}");
  } catch {
    return {};
  }
}

function setLockState(state) {
  localStorage.setItem(ADMIN_LOCK_KEY, JSON.stringify(state));
}

function isLockedOut() {
  const { until } = getLockState();
  return until && Date.now() < until;
}

function recordFailedLogin() {
  const state = getLockState();
  const fails = (state.fails || 0) + 1;
  if (fails >= MAX_LOGIN_ATTEMPTS) {
    setLockState({ fails: 0, until: Date.now() + LOCKOUT_MS });
    return { locked: true, fails: 0 };
  }
  setLockState({ fails, until: 0 });
  return { locked: false, fails };
}

function clearLoginFails() {
  setLockState({ fails: 0, until: 0 });
}

function loadContentOverrides() {
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.keys(data).forEach(key => {
      if (CONTENT[key] && data[key]) {
        if (data[key].title) CONTENT[key].title = data[key].title;
        if (data[key].html) CONTENT[key].html = data[key].html;
      }
    });
  } catch (e) {
    console.warn("Could not load content overrides", e);
  }
}

function saveContentOverrides() {
  const data = {};
  EDITABLE_SECTIONS.forEach(key => {
    if (CONTENT[key]) {
      data[key] = { title: CONTENT[key].title, html: CONTENT[key].html };
    }
  });
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

function openAdmin() {
  const overlay = document.getElementById("admin-overlay");
  if (!overlay) return;
  overlay.hidden = false;
  const session = sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
  document.getElementById("admin-login").hidden = session;
  document.getElementById("admin-editor").hidden = !session;
  document.getElementById("admin-error").hidden = true;
  document.getElementById("admin-password").value = "";
  if (session) populateAdminEditor();
  closeStartMenu?.();
}

function closeAdmin() {
  const overlay = document.getElementById("admin-overlay");
  if (overlay) overlay.hidden = true;
}

function populateAdminEditor() {
  const sel = document.getElementById("admin-section");
  if (!sel) return;
  sel.innerHTML = EDITABLE_SECTIONS.map(k => {
    const t = CONTENT[k]?.title || k;
    return `<option value="${k}">${t}</option>`;
  }).join("");
  loadAdminSection(sel.value);
}

function loadAdminSection(key) {
  const c = CONTENT[key];
  if (!c) return;
  document.getElementById("admin-field-title").value = c.title || "";
  document.getElementById("admin-field-html").value = c.html || "";
  document.getElementById("admin-status").textContent = "";
}

function refreshOpenWindow(id) {
  if (!openWindows[id]) return;
  // Re-open with new content
  const wasMin = openWindows[id].dataset.minimized === "1";
  const left = openWindows[id].style.left;
  const top = openWindows[id].style.top;
  const width = openWindows[id].style.width;
  const height = openWindows[id].style.height;
  closeWindow(id);
  setTimeout(() => {
    openWindow(id);
    const win = openWindows[id];
    if (win) {
      if (left) win.style.left = left;
      if (top) win.style.top = top;
      if (width) win.style.width = width;
      if (height) win.style.height = height;
      if (wasMin) minimizeWindow(id);
    }
  }, 150);
}


function downloadTextFile(filename, text, mime) {
  const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

/** Build permanent content/*.json payload matching the repo schema. */
function buildContentFilePayload(key) {
  const c = CONTENT[key];
  if (!c) return null;
  return {
    title: c.title || key,
    iconClass: c.iconClass || "",
    html: c.html || "",
  };
}

/** Download one or all content section files for permanent deploy. */
function downloadContentFiles(keys) {
  const list = Array.isArray(keys) && keys.length ? keys : EDITABLE_SECTIONS.slice();
  let n = 0;
  list.forEach((key, i) => {
    const payload = buildContentFilePayload(key);
    if (!payload) return;
    const body = JSON.stringify(payload, null, 2) + "\n";
    // Stagger downloads so browsers do not block multiple files
    setTimeout(() => {
      downloadTextFile("content-" + key + ".json", body, "application/json");
    }, i * 350);
    n++;
  });
  return n;
}

function applyAdminEditorToContent() {
  const key = document.getElementById("admin-section")?.value;
  if (!key || !CONTENT[key]) return null;
  CONTENT[key].title = document.getElementById("admin-field-title").value.trim() || CONTENT[key].title;
  CONTENT[key].html = document.getElementById("admin-field-html").value;
  return key;
}

function initAdminUI() {
  const overlay = document.getElementById("admin-overlay");
  if (!overlay) return;

  document.getElementById("admin-close")?.addEventListener("click", closeAdmin);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeAdmin();
  });

  document.getElementById("admin-open-start")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openAdmin();
  });

  document.getElementById("admin-login-btn")?.addEventListener("click", async () => {
    const errEl = document.getElementById("admin-error");
    const btn = document.getElementById("admin-login-btn");
    if (isLockedOut()) {
      const left = Math.ceil((getLockState().until - Date.now()) / 1000);
      errEl.hidden = false;
      errEl.textContent = `Too many attempts. Try again in ${left}s.`;
      return;
    }
    const pass = document.getElementById("admin-password").value;
    if (!pass) {
      errEl.hidden = false;
      errEl.textContent = "Enter your password.";
      return;
    }
    btn.disabled = true;
    try {
      const ok = await verifyAdminPassword(pass);
      if (ok) {
        clearLoginFails();
        sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
        document.getElementById("admin-login").hidden = true;
        document.getElementById("admin-editor").hidden = false;
        errEl.hidden = true;
        populateAdminEditor();
        if (await isUsingDefaultPassword(pass)) {
          const st = document.getElementById("admin-status");
          st.className = "admin-status err";
          st.textContent = "You are using the default password. Set a new password (8+ characters) below.";
        }
      } else {
        const { locked, fails } = recordFailedLogin();
        errEl.hidden = false;
        errEl.textContent = locked
          ? "Too many attempts. Locked for 1 minute."
          : `Wrong password. ${MAX_LOGIN_ATTEMPTS - fails} attempt(s) left.`;
      }
    } finally {
      btn.disabled = false;
    }
  });

  document.getElementById("admin-password")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("admin-login-btn")?.click();
  });

  document.getElementById("admin-section")?.addEventListener("change", (e) => {
    loadAdminSection(e.target.value);
  });

  document.getElementById("admin-save")?.addEventListener("click", () => {
    const key = applyAdminEditorToContent();
    if (!key) return;
    saveContentOverrides();
    const mobileBody = document.getElementById(`content-${key}`);
    if (mobileBody) {
      delete mobileBody.dataset.loaded;
      mobileBody.innerHTML = "";
    }
    refreshOpenWindow(key);
    const st = document.getElementById("admin-status");
    st.className = "admin-status";
    st.textContent = "Saved in this browser only. Use “Save to files” for a permanent project update.";
  });

  document.getElementById("admin-save-files")?.addEventListener("click", () => {
    const key = applyAdminEditorToContent();
    if (!key) return;
    saveContentOverrides();
    const mobileBody = document.getElementById(`content-${key}`);
    if (mobileBody) {
      delete mobileBody.dataset.loaded;
      mobileBody.innerHTML = "";
    }
    refreshOpenWindow(key);
    // Download current section first, then offer all sections
    const only = confirm(
      "OK = download ALL content sections as content-*.json files.\n" +
      "Cancel = download only the current section (" + key + ")."
    );
    const count = downloadContentFiles(only ? null : [key]);
    const st = document.getElementById("admin-status");
    st.className = "admin-status";
    st.textContent =
      "Downloaded " +
      count +
      " file(s). Rename to content/<name>.json, replace in your project, commit, and deploy.";
  });

  document.getElementById("admin-export")?.addEventListener("click", () => {
    const data = {};
    EDITABLE_SECTIONS.forEach(key => {
      if (CONTENT[key]) data[key] = { title: CONTENT[key].title, html: CONTENT[key].html, iconClass: CONTENT[key].iconClass };
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(a.href);
    document.getElementById("admin-status").textContent = "Exported portfolio-content.json (full backup). For deploy files use Save to files.";
  });

  document.getElementById("admin-reset")?.addEventListener("click", () => {
    if (!confirm("Clear saved edits for ALL sections and reload the page?")) return;
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    location.reload();
  });

  document.getElementById("admin-logout")?.addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    document.getElementById("admin-login").hidden = false;
    document.getElementById("admin-editor").hidden = true;
  });

  document.getElementById("admin-change-pass")?.addEventListener("click", async () => {
    const next = document.getElementById("admin-new-password").value;
    const st = document.getElementById("admin-status");
    if (!next || next.length < MIN_PASS_LEN) {
      st.className = "admin-status err";
      st.textContent = `Password must be at least ${MIN_PASS_LEN} characters.`;
      return;
    }
    if (await isUsingDefaultPassword(next)) {
      st.className = "admin-status err";
      st.textContent = "Choose something other than the default password.";
      return;
    }
    const weak = /^(.)\1+$/.test(next) || next.toLowerCase() === "password" || next === "12345678";
    if (weak) {
      st.className = "admin-status err";
      st.textContent = "Password is too weak. Use a longer mix of characters.";
      return;
    }
    try {
      const record = await hashPasswordPbkdf2(next);
      localStorage.setItem(ADMIN_PASS_HASH_KEY, record);
      document.getElementById("admin-new-password").value = "";
      // Permanent deploy snippet for script.js
      const snippet =
        "/* Paste into script.js — replaces DEFAULT_ADMIN_RECORD */\n" +
        "const DEFAULT_ADMIN_RECORD =\n  \"" +
        record +
        "\";\n";
      downloadTextFile("admin-password-record.txt", snippet, "text/plain;charset=utf-8");
      st.className = "admin-status";
      st.textContent =
        "Password updated in this browser. Downloaded admin-password-record.txt — paste DEFAULT_ADMIN_RECORD into script.js and deploy to make it permanent for everyone.";
    } catch (err) {
      st.className = "admin-status err";
      st.textContent = "Could not update password: " + (err && err.message ? err.message : err);
    }
  });

  // URL hash #admin or ?admin=1
  if (location.hash === "#admin" || /[?&]admin=1\b/.test(location.search)) {
    setTimeout(openAdmin, 300);
  }

  // Ctrl+Shift+A
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      openAdmin();
    }
  });
}

initAdminUI();

