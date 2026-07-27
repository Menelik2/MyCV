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
      <p>Hello! I'm Menelik Admasu, a Computer Science at Bahir Dar University with a passion for building clean, functional software and exploring modern web technologies.</p>
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
      <div class="project-card">
        <h4>Yeni Movie</h4>
        <p><strong>What it is:</strong> A full-featured movie discovery web app for browsing films and TV series.</p>
        <p><strong>Highlights:</strong> Browse by genre and popularity, view posters and plot summaries, search titles, and explore detailed movie information in a clean cinematic interface.</p>
        <p><strong>Live:</strong> <a href="https://yeni-movie.vercel.app" target="_blank" rel="noopener">yeni-movie.vercel.app ↗</a></p>
        <div class="tags">
          <span class="tag">Web App</span>
          <span class="tag">Movies &amp; TV</span>
          <span class="tag">Search</span>
          <span class="tag">Vercel</span>
        </div>
      </div>
      <div class="project-card">
        <h4>Yeni Typing Learning</h4>
        <p><strong>What it is:</strong> An interactive typing tutor that helps users build speed and accuracy through practice sessions.</p>
        <p><strong>Highlights:</strong> Timed typing tests, real-time WPM and accuracy feedback, practice lessons for improving keyboard skills, and a simple focused UI for daily training.</p>
        <p><strong>Live:</strong> <a href="https://yenetyping.vercel.app" target="_blank" rel="noopener">yenetyping.vercel.app ↗</a></p>
        <div class="tags">
          <span class="tag">Education</span>
          <span class="tag">Typing Tutor</span>
          <span class="tag">WPM / Accuracy</span>
          <span class="tag">Vercel</span>
        </div>
      </div>
      <div class="project-card">
        <h4>Bahir Dar University Internship Management System</h4>
        <p><strong>What it is:</strong> A web-based platform built for Bahir Dar University to organize student internship programs from application to completion.</p>
        <p><strong>Highlights:</strong> Student internship applications, placement assignment, supervisor and coordinator workflows, progress and evaluation tracking, and centralized records for the university internship office.</p>
        <p><strong>Context:</strong> Developed in support of BSc Computer Science studies and real university internship processes.</p>
        <div class="tags">
          <span class="tag">University System</span>
          <span class="tag">Internship</span>
          <span class="tag">Admin &amp; Students</span>
          <span class="tag">Bahir Dar University</span>
        </div>
      </div>
      <div class="project-card">
        <h4>Windows XP Portfolio</h4>
        <p><strong>What it is:</strong> This personal portfolio — a playful but fully interactive desktop OS experience in the browser.</p>
        <p><strong>Highlights:</strong> Windows XP-style windows (drag, resize, snap, cascade/tile), virtual desktops, Notepad, Paint, Linux terminal, VS Code mock editor, plus a responsive iPhone Pro Max layout on mobile.</p>
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
      <h2>Technical Skills</h2>
      <div class="skill-bar-wrap">
        <div>HTML / CSS</div>
        <div class="skill-bar"><div style="width:90%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>JavaScript</div>
        <div class="skill-bar"><div style="width:85%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>Python</div>
        <div class="skill-bar"><div style="width:75%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>Java</div>
        <div class="skill-bar"><div style="width:70%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>Git & GitHub</div>
        <div class="skill-bar"><div style="width:80%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>SQL / Databases</div>
        <div class="skill-bar"><div style="width:65%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div>Responsive Design</div>
        <div class="skill-bar"><div style="width:88%"></div></div>
      </div>
      <h3>Soft Skills</h3>
      <ul>
        <li>Problem solving & debugging</li>
        <li>Team collaboration</li>
        <li>Clear technical communication</li>
        <li>Continuous learning</li>
      </ul>
    `
  },
  contact: {
    title: "Contact",
    iconClass: "contact-icon",
    html: `
      <h2>Get in Touch</h2>
      <p>Feel free to reach out for collaborations, internship opportunities, or just to say hello.</p>
      <div class="project-card">
        <h4>Email</h4>
        <p><a href="mailto:linuxos777@gmail.com">linuxos777@gmail.com</a></p>
      </div>
      <div class="project-card">
        <h4>GitHub</h4>
        <p><a href="https://github.com/menelik3" target="_blank" rel="noopener">github.com/menelik3</a></p>
      </div>
      <div class="project-card">
        <h4>LinkedIn</h4>
        <p><a href="https://linkedin.com" target="_blank" rel="noopener">linkedin.com/in/menelikadmasu</a></p>
      </div>
      <div class="project-card">
        <h4>Location</h4>
        <p>Bahir Dar, Ethiopia</p>
      </div>
      <p style="margin-top:12px;font-size:12px;color:#666;">(Replace the placeholder links with your real contact details.)</p>
    `
  },
  resume: {
    title: "Resume",
    iconClass: "resume-icon",
    html: `
      <h2>Resume / CV</h2>
      <div class="project-card">
        <h4>Menelik Admasu</h4>
        <p>BSc Computer Science · Bahir Dar University · 2022–2026</p>
      </div>
      <h3>Summary</h3>
      <p>Motivated Computer Science student with strong foundations in programming, web development, and problem-solving. Passionate about creating polished user interfaces and learning modern software practices.</p>
      <h3>Experience</h3>
      <p>Over 10 years of experience in IT operations, system administration, and technical training. Specialized in computer systems management, network administration, and providing technical support across various platforms.</p>
      <h3>Certifications</h3>
      <p>Holds multiple industry-recognized certifications in system administration, network management, and IT security. Committed to staying current with technological advances through ongoing certification.</p>
      <ul>
        <li><strong>Hardware &amp; Networking Level IV</strong></li>
        <li><strong>National Qualifications COC</strong></li>
        <li><strong>Best Worker Award 2010</strong></li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li><strong>Bahir Dar University</strong> — BSc Computer Science (2022–2026)</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Python, Java</li>
        <li>Git, SQL, Responsive Design</li>
      </ul>
      <h3>Projects</h3>
      <ul>
        <li><strong>Yeni Movie</strong> — Movie &amp; TV discovery web app (<a href="https://yeni-movie.vercel.app" target="_blank" rel="noopener">live </a>)</li>
        <li><strong>Yeni Typing Learning</strong> — Typing tutor with WPM/accuracy practice (<a href="https://yenityping.vercel.app" target="_blank" rel="noopener">live </a>)</li>
        <li><strong>BDU Internship Management System</strong> — University internship applications, placements &amp; tracking</li>
        <li><strong>Windows XP Portfolio</strong> — Interactive desktop OS portfolio (this site)</li>
      </ul>
      <p style="margin-top:16px;"><em>You can export or print this page, or replace this section with a downloadable PDF link.</em></p>
    `
  }
};

/* Interactive apps meta */
const APPS = {
  notepad: { title: "Untitled - Notepad", iconClass: "notepad-icon", interactive: true },
  paint: { title: "untitled - Paint", iconClass: "paint-icon", interactive: true },
  terminal: { title: "Terminal — menelik@bahirdar", iconClass: "terminal-icon", interactive: true },
  vscode: { title: "Visual Studio Code", iconClass: "vscode-icon", interactive: true }
};

/* ========== Theme ========== */
function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
}
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("light") ? "light" : "dark");
}
document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
document.getElementById("theme-toggle-mobile")?.addEventListener("click", toggleTheme);

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
  wrap.className = "paint-app";
  const colors = ["#000000", "#ffffff", "#ff0000", "#00aa00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff8800", "#8800ff"];
  wrap.innerHTML = `
    <div class="paint-toolbar">
      <div class="paint-colors">
        ${colors.map((c, i) => `<button type="button" data-color="${c}" style="background:${c}" class="${i === 0 ? "active" : ""}" title="${c}"></button>`).join("")}
      </div>
      <label>Size <input type="range" min="1" max="30" value="4" class="brush-size"></label>
      <button type="button" class="tool-btn active" data-tool="pen">Pen</button>
      <button type="button" class="tool-btn" data-tool="eraser">Eraser</button>
      <button type="button" class="tool-btn" data-action="clear">Clear</button>
    </div>
    <div class="paint-canvas-wrap">
      <canvas width="600" height="380"></canvas>
    </div>
  `;
  const canvas = wrap.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let drawing = false;
  let color = "#000000";
  let size = 4;
  let tool = "pen";

  wrap.querySelectorAll(".paint-colors button").forEach(btn => {
    btn.onclick = () => {
      wrap.querySelectorAll(".paint-colors button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      color = btn.dataset.color;
      tool = "pen";
      wrap.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"));
      wrap.querySelector('[data-tool="pen"]').classList.add("active");
    };
  });
  wrap.querySelector(".brush-size").oninput = (e) => { size = +e.target.value; };
  wrap.querySelectorAll(".tool-btn[data-tool]").forEach(btn => {
    btn.onclick = () => {
      wrap.querySelectorAll(".tool-btn[data-tool]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tool = btn.dataset.tool;
    };
  });
  wrap.querySelector('[data-action="clear"]').onclick = () => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  function pos(e) {
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (clientX - r.left) * scaleX, y: (clientY - r.top) * scaleY };
  }

  let lastX = 0, lastY = 0;
  function start(e) {
    drawing = true;
    const p = pos(e);
    lastX = p.x;
    lastY = p.y;
    ctx.beginPath();
    ctx.arc(p.x, p.y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = tool === "eraser" ? "#ffffff" : color;
    ctx.fill();
    e.preventDefault();
  }
  function move(e) {
    if (!drawing) return;
    const p = pos(e);
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
    e.preventDefault();
  }
  function end() { drawing = false; }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  canvas.addEventListener("mouseup", end);
  canvas.addEventListener("mouseleave", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  canvas.addEventListener("touchend", end);
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
    "/home/menelik/projects/README.md": "# Projects\n\n- yeni-movie — https://yeni-movie.vercel.app\n- yeni-typing — https://yenetyping.vercel.app\n- internship-mgmt — Bahir Dar University Internship Management System\n- portfolio — Windows XP + iPhone portfolio site",
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
  <title>My Page</title>
</head>
<body>
  <h1 id="title">Hello, Menelik!</h1>
  <p>Edit HTML, CSS, and JS — then press <strong>Run</strong>.</p>
  <button id="btn">Click me</button>
  <p id="out"></p>
</body>
</html>`,
  "styles.css": `body {
  font-family: system-ui, sans-serif;
  max-width: 480px;
  margin: 40px auto;
  padding: 24px;
  background: #0f172a;
  color: #e2e8f0;
}
h1 { color: #38bdf8; }
button {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}
button:hover { background: #1d4ed8; }
#out { margin-top: 12px; color: #86efac; }`,
  "script.js": `const btn = document.getElementById("btn");
const out = document.getElementById("out");
let count = 0;

btn.addEventListener("click", () => {
  count++;
  out.textContent = "Clicked " + count + " time" + (count === 1 ? "" : "s") + "!";
  console.log("Click count:", count);
});

console.log("Page script loaded.");`,
  "main.js": `// Standalone JavaScript — Run shows console output
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Menelik"));
console.log("2 + 2 =", 2 + 2);
const skills = ["HTML", "CSS", "JavaScript"];
skills.forEach((s, i) => console.log((i + 1) + ". " + s));
`
};

function buildVSCode() {
  const wrap = document.createElement("div");
  wrap.className = "vscode-app";
  const files = { ...VSCODE_FILES };
  let current = "index.html";

  wrap.innerHTML = `
    <div class="vscode-titlebar">
      <span class="logo">◈</span>
      <span>Visual Studio Code</span>
      <div class="vscode-actions">
        <button type="button" class="vc-run" title="Run (Ctrl+Enter)">▶ Run</button>
        <button type="button" class="vc-clear-out" title="Clear">Clear</button>
      </div>
    </div>
    <div class="vscode-body">
      <div class="vscode-sidebar">
        <div class="side-label">Explorer</div>
        <div class="side-label" style="margin-top:8px;">WORKSPACE</div>
        <div class="vc-file-list"></div>
        <div style="padding:8px 12px;">
          <button type="button" class="vc-new-file" style="width:100%;padding:4px;font-size:11px;cursor:pointer;border:1px solid #555;background:#3c3c3c;color:#ccc;border-radius:3px;">+ New File</button>
        </div>
      </div>
      <div class="vscode-editor-area">
        <div class="vscode-tabs">
          <div class="vscode-tab active" data-file="${current}">${current}</div>
        </div>
        <div class="vscode-code">
          <div class="vscode-linenumbers"></div>
          <textarea spellcheck="false" class="vc-editor"></textarea>
        </div>
        <div class="vscode-output-panel">
          <div class="vscode-output-header">
            <button type="button" class="vc-panel-tab active" data-panel="preview">Preview</button>
            <button type="button" class="vc-panel-tab" data-panel="output">Output</button>
            <span class="vc-out-hint">HTML/CSS → Preview · JS → Output · Ctrl+Enter Run</span>
          </div>
          <div class="vc-panel-body">
            <iframe class="vscode-preview" sandbox="allow-scripts" title="Preview"></iframe>
            <pre class="vscode-output" hidden></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="vscode-statusbar">
      <div>
        <span>Ln <span class="ln">1</span>, Col <span class="col">1</span></span>
        <span>UTF-8</span>
        <span class="lang">HTML</span>
      </div>
      <div>
        <span class="vc-status">Ready</span>
        <span>▶ Ctrl+Enter</span>
      </div>
    </div>
  `;

  const textarea = wrap.querySelector(".vc-editor");
  const lineNums = wrap.querySelector(".vscode-linenumbers");
  const output = wrap.querySelector(".vscode-output");
  const preview = wrap.querySelector(".vscode-preview");
  const status = wrap.querySelector(".vc-status");
  const langEl = wrap.querySelector(".lang");
  const fileList = wrap.querySelector(".vc-file-list");
  const tab = wrap.querySelector(".vscode-tab");
  const lnEl = wrap.querySelector(".ln");
  const colEl = wrap.querySelector(".col");
  const hint = wrap.querySelector(".vc-out-hint");

  function extOf(name) {
    const p = name.split(".").pop().toLowerCase();
    return p;
  }
  function langName(name) {
    const e = extOf(name);
    if (e === "html" || e === "htm") return "HTML";
    if (e === "css") return "CSS";
    if (e === "js" || e === "mjs") return "JavaScript";
    return "Plain Text";
  }
  function iconFor(name) {
    const e = extOf(name);
    if (e === "html" || e === "htm") return "<>";
    if (e === "css") return "#";
    if (e === "js" || e === "mjs") return "JS";
    return "·";
  }
  function formatVal(v) {
    if (v === undefined) return "undefined";
    if (v === null) return "null";
    if (typeof v === "object") {
      try { return JSON.stringify(v); } catch (_) { return String(v); }
    }
    return String(v);
  }
  function showPanel(which) {
    wrap.querySelectorAll(".vc-panel-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.panel === which);
    });
    if (which === "preview") {
      preview.hidden = false;
      output.hidden = true;
    } else {
      preview.hidden = true;
      output.hidden = false;
    }
  }

  function updateLines() {
    const n = Math.max(1, textarea.value.split("\n").length);
    lineNums.textContent = Array.from({ length: n }, (_, i) => i + 1).join("\n");
  }
  function updateCursor() {
    const pos = textarea.selectionStart;
    const text = textarea.value.slice(0, pos);
    const lines = text.split("\n");
    lnEl.textContent = lines.length;
    colEl.textContent = lines[lines.length - 1].length + 1;
  }
  function renderFileList() {
    fileList.innerHTML = Object.keys(files).map(f => `
      <div class="file-item ${f === current ? "active" : ""}" data-file="${f}">
        <span class="fi">${iconFor(f)}</span> ${f}
      </div>
    `).join("");
    fileList.querySelectorAll(".file-item").forEach(el => {
      el.addEventListener("click", () => setFile(el.dataset.file));
    });
  }
  function defaultContent(name) {
    const e = extOf(name);
    if (e === "html" || e === "htm") {
      return `<!DOCTYPE html>\n<html>\n<head><title>${name}</title></head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>\n`;
    }
    if (e === "css") return `body {\n  font-family: sans-serif;\n  margin: 20px;\n}\n`;
    return `// ${name}\nconsole.log("Hello");\n`;
  }
  function setFile(name) {
    if (current && textarea) files[current] = textarea.value;
    current = name;
    if (!files[name]) files[name] = defaultContent(name);
    textarea.value = files[name];
    tab.textContent = name;
    tab.dataset.file = name;
    langEl.textContent = langName(name);
    updateLines();
    renderFileList();
    status.textContent = "Ready";
    const e = extOf(name);
    if (e === "js" || e === "mjs") {
      hint.textContent = "JS → Output console";
      showPanel("output");
    } else {
      hint.textContent = "HTML/CSS → live Preview (uses index.html + styles.css + script.js)";
      showPanel("preview");
    }
  }

  function runJs(code) {
    const logs = [];
    const fakeConsole = {
      log: (...a) => logs.push(a.map(formatVal).join(" ")),
      info: (...a) => logs.push("[info] " + a.map(formatVal).join(" ")),
      warn: (...a) => logs.push("[warn] " + a.map(formatVal).join(" ")),
      error: (...a) => logs.push("[error] " + a.map(formatVal).join(" ")),
      clear: () => { logs.length = 0; }
    };
    try {
      const fn = new Function("console", `"use strict";\n${code}`);
      const result = fn(fakeConsole);
      if (result !== undefined) logs.push("→ " + formatVal(result));
      output.textContent = logs.length ? logs.join("\n") : "(no output — use console.log)";
      output.classList.remove("vc-err");
      status.textContent = "Done";
      showPanel("output");
    } catch (err) {
      output.textContent = (logs.length ? logs.join("\n") + "\n" : "") + "Error: " + err.message;
      output.classList.add("vc-err");
      status.textContent = "Error";
      showPanel("output");
    }
  }

  function runPreview() {
    // Combine workspace HTML + CSS + JS for live preview
    let html = files["index.html"] || files[current] || "<h1>No index.html</h1>";
    if (extOf(current) === "html" || extOf(current) === "htm") {
      html = files[current];
    }
    const css = files["styles.css"] || files["style.css"] || "";
    // Prefer script.js; if running a specific .js file that's not main, still include script.js + current if different
    let js = files["script.js"] || files["app.js"] || "";
    if ((extOf(current) === "js" || extOf(current) === "mjs") && current !== "script.js" && current !== "app.js") {
      // pure JS file — use console runner instead
      runJs(files[current]);
      return;
    }

    // Strip external stylesheet/script links so we inject workspace files
    let bodyHtml = html;
    // Inject CSS and JS before </head> or </body>
    const styleTag = css ? `<style>\n${css}\n</style>` : "";
    const scriptTag = js ? `<script>\ntry {\n${js}\n} catch(e) { console.error(e); document.body.insertAdjacentHTML('beforeend', '<pre style="color:red">'+e.message+'</pre>'); }\n<\/script>` : "";

    let doc = html;
    if (/<\/head>/i.test(doc)) {
      doc = doc.replace(/<\/head>/i, styleTag + "\n</head>");
    } else if (/<body/i.test(doc)) {
      doc = doc.replace(/<body[^>]*>/i, (m) => m + "\n" + styleTag);
    } else {
      doc = styleTag + doc;
    }
    if (/<\/body>/i.test(doc)) {
      doc = doc.replace(/<\/body>/i, scriptTag + "\n</body>");
    } else {
      doc = doc + scriptTag;
    }

    // Capture console from iframe via srcdoc + message is hard; use srcdoc simply
    preview.srcdoc = doc;
    output.textContent = "Preview updated — HTML + styles.css + script.js";
    output.classList.remove("vc-err");
    status.textContent = "Preview";
    showPanel("preview");
  }

  function runCode() {
    files[current] = textarea.value;
    status.textContent = "Running…";
    const e = extOf(current);
    if (e === "js" || e === "mjs") {
      // standalone JS (not part of page) → console
      if (current === "script.js" || current === "app.js") {
        runPreview(); // page script → full preview
      } else {
        runJs(files[current]);
      }
    } else if (e === "css") {
      runPreview();
    } else if (e === "html" || e === "htm") {
      runPreview();
    } else {
      output.textContent = "Unknown file type. Use .html, .css, or .js";
      showPanel("output");
      status.textContent = "Ready";
    }
  }

  wrap.querySelector(".vc-run").addEventListener("click", runCode);
  wrap.querySelector(".vc-clear-out").addEventListener("click", () => {
    output.textContent = "";
    output.classList.remove("vc-err");
    preview.srcdoc = "";
    status.textContent = "Ready";
  });
  wrap.querySelectorAll(".vc-panel-tab").forEach(btn => {
    btn.addEventListener("click", () => showPanel(btn.dataset.panel));
  });
  wrap.querySelector(".vc-new-file").addEventListener("click", () => {
    let name = prompt("File name (e.g. page.html, app.css, util.js):", "untitled.js");
    if (!name) return;
    name = name.trim();
    if (!/\.(html|htm|css|js|mjs)$/i.test(name)) name += ".js";
    if (files[name]) { setFile(name); return; }
    files[name] = defaultContent(name);
    setFile(name);
  });

  textarea.addEventListener("input", () => {
    updateLines();
    files[current] = textarea.value;
  });
  textarea.addEventListener("keyup", updateCursor);
  textarea.addEventListener("click", updateCursor);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.slice(0, start) + "  " + textarea.value.slice(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      updateLines();
      files[current] = textarea.value;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode();
    }
  });

  setFile(current);
  // Auto-run preview once on open
  setTimeout(runCode, 100);
  return wrap;
}

function getAppBody(id) {
  if (id === "notepad") return buildNotepad();
  if (id === "paint") return buildPaint();
  if (id === "terminal") return buildTerminal();
  if (id === "vscode") return buildVSCode();
  return null;
}

/* ========== Advanced Window Management ========== */
const SNAP_THRESHOLD = 18;
let isResizing = false;
let resizeDir = null;
let resizeStart = null;
let snapPreview = null;
let altTabOpen = false;
let altTabIndex = 0;

function ensureSnapPreview() {
  if (snapPreview) return snapPreview;
  snapPreview = document.createElement("div");
  snapPreview.className = "snap-preview";
  snapPreview.hidden = true;
  document.getElementById("desktop")?.appendChild(snapPreview);
  return snapPreview;
}

function showSnapPreview(zone) {
  const el = ensureSnapPreview();
  const taskbarH = 36;
  el.hidden = false;
  el.dataset.zone = zone;
  if (zone === "left") {
    el.style.cssText = `left:0;top:0;width:50%;height:calc(100% - ${taskbarH}px);`;
  } else if (zone === "right") {
    el.style.cssText = `left:50%;top:0;width:50%;height:calc(100% - ${taskbarH}px);`;
  } else if (zone === "top") {
    el.style.cssText = `left:0;top:0;width:100%;height:calc(100% - ${taskbarH}px);`;
  }
  el.hidden = false;
}

function hideSnapPreview() {
  if (snapPreview) snapPreview.hidden = true;
}

function applySnap(win, zone) {
  if (!win) return;
  // save restore state
  if (win.dataset.maximized !== "1" && win.dataset.snapped !== "1") {
    win.dataset.prevLeft = win.style.left || win.offsetLeft + "px";
    win.dataset.prevTop = win.style.top || win.offsetTop + "px";
    win.dataset.prevWidth = win.style.width || win.offsetWidth + "px";
    win.dataset.prevHeight = win.style.height || win.offsetHeight + "px";
  }
  const taskbarH = 36;
  win.dataset.maximized = "0";
  win.dataset.snapped = "1";
  if (zone === "left") {
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = "50%";
    win.style.height = `calc(100% - ${taskbarH}px)`;
  } else if (zone === "right") {
    win.style.left = "50%";
    win.style.top = "0";
    win.style.width = "50%";
    win.style.height = `calc(100% - ${taskbarH}px)`;
  } else if (zone === "top") {
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = "100%";
    win.style.height = `calc(100% - ${taskbarH}px)`;
    win.dataset.maximized = "1";
    win.dataset.snapped = "0";
  }
  hideSnapPreview();
}

function cascadeWindows() {
  const ids = getVisibleWindowIds();
  ids.forEach((id, i) => {
    const win = openWindows[id];
    win.dataset.maximized = "0";
    win.dataset.snapped = "0";
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

function cycleWindows(dir) {
  const ids = getVisibleWindowIds();
  if (!ids.length) return;
  let idx = ids.indexOf(activeWindowId);
  if (idx < 0) idx = 0;
  idx = (idx + dir + ids.length) % ids.length;
  focusWindow(ids[idx]);
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
  const rect = win.getBoundingClientRect();
  resizeStart = {
    x: e.clientX,
    y: e.clientY,
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };
  focusWindow(win.dataset.id);
  document.body.style.userSelect = "none";
}

function doResize(e) {
  if (!isResizing || !dragTarget || !resizeStart) return;
  const dx = e.clientX - resizeStart.x;
  const dy = e.clientY - resizeStart.y;
  const minW = 280;
  const minH = 160;
  let left = resizeStart.left;
  let top = resizeStart.top;
  let width = resizeStart.width;
  let height = resizeStart.height;
  const dir = resizeDir;

  if (dir.includes("e")) width = Math.max(minW, resizeStart.width + dx);
  if (dir.includes("s")) height = Math.max(minH, resizeStart.height + dy);
  if (dir.includes("w")) {
    width = Math.max(minW, resizeStart.width - dx);
    left = resizeStart.left + (resizeStart.width - width);
  }
  if (dir.includes("n")) {
    height = Math.max(minH, resizeStart.height - dy);
    top = resizeStart.top + (resizeStart.height - height);
  }

  // keep on screen-ish
  top = Math.max(0, top);
  left = Math.min(left, window.innerWidth - 80);

  dragTarget.style.left = left + "px";
  dragTarget.style.top = top + "px";
  dragTarget.style.width = width + "px";
  dragTarget.style.height = height + "px";
  dragTarget.dataset.snapped = "0";
}

/* ---- Open / focus / close ---- */
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
  const offset = Object.keys(openWindows).length * 28;
  win.style.left = `${Math.min(60 + offset, window.innerWidth - 200)}px`;
  win.style.top = `${Math.min(40 + offset, window.innerHeight - 120)}px`;
  win.style.zIndex = ++zIndex;

  win.querySelector(".win-title").textContent = data.title;
  win.querySelector(".win-icon").className = `win-icon ${data.iconClass}`;

  const body = win.querySelector(".window-body");
  if (isApp) {
    body.classList.add("no-pad");
    const appEl = getAppBody(id);
    if (appEl) body.appendChild(appEl);
  } else {
    body.innerHTML = data.html;
    win.style.height = "420px";
    win.style.width = "520px";
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
      win.dataset.snapped = "0";
      win.style.width = win.dataset.prevWidth || "520px";
      win.style.height = win.dataset.prevHeight || "400px";
      win.style.left = Math.max(0, e.clientX - prevW * ratio) + "px";
      win.style.top = Math.max(0, e.clientY - 14) + "px";
    }
    startDrag(e, win);
  });
  win.addEventListener("mousedown", () => focusWindow(id));

  addResizeHandles(win);

  // Open animation
  win.classList.add("win-opening");
  setTimeout(() => win.classList.remove("win-opening"), 180);

  document.getElementById("windows-container").appendChild(win);
  openWindows[id] = win;
  windowDesktop[id] = currentDesktop; // open on current virtual desktop
  focusWindow(id);
  addTaskbarButton(id, data.title);
  updateDesktopIndicators();
  closeStartMenu();
}

function focusWindow(id) {
  // Switch to window's desktop if needed
  if (windowDesktop[id] !== undefined && windowDesktop[id] !== currentDesktop) {
    switchDesktop(windowDesktop[id], true);
  }
  Object.values(openWindows).forEach(w => w.classList.remove("active"));
  const win = openWindows[id];
  if (!win) return;
  win.classList.add("active");
  win.classList.remove("on-other-desktop");
  win.style.zIndex = ++zIndex;
  if (win.dataset.minimized !== "1") win.style.display = "flex";
  activeWindowId = id;
  document.querySelectorAll(".taskbar-app").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
  updateTaskbarVisibility();
}

function closeWindow(id) {
  const win = openWindows[id];
  if (!win) return;
  win.classList.add("win-closing");
  setTimeout(() => {
    win.remove();
    delete openWindows[id];
    delete windowDesktop[id];
    document.querySelector(`.taskbar-app[data-id="${id}"]`)?.remove();
    if (activeWindowId === id) {
      activeWindowId = null;
      const remaining = getVisibleWindowIds();
      if (remaining.length) focusWindow(remaining[remaining.length - 1]);
    }
    updateDesktopIndicators();
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
    win.dataset.snapped = "0";
  } else {
    if (win.dataset.snapped !== "1") {
      win.dataset.prevLeft = win.style.left || win.offsetLeft + "px";
      win.dataset.prevTop = win.style.top || win.offsetTop + "px";
      win.dataset.prevWidth = win.style.width || win.offsetWidth + "px";
      win.dataset.prevHeight = win.style.height || win.offsetHeight + "px";
    }
    win.style.left = "0";
    win.style.top = "0";
    win.style.width = "100%";
    win.style.height = "calc(100% - 36px)";
    win.dataset.maximized = "1";
    win.dataset.snapped = "0";
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

  // Edge snap preview (Aero Snap style)
  if (e.clientX <= SNAP_THRESHOLD) showSnapPreview("left");
  else if (e.clientX >= window.innerWidth - SNAP_THRESHOLD) showSnapPreview("right");
  else if (e.clientY <= SNAP_THRESHOLD) showSnapPreview("top");
  else hideSnapPreview();
});

document.addEventListener("mouseup", (e) => {
  if (isDragging && dragTarget) {
    // Apply snap if near edge
    if (e.clientX <= SNAP_THRESHOLD) applySnap(dragTarget, "left");
    else if (e.clientX >= window.innerWidth - SNAP_THRESHOLD) applySnap(dragTarget, "right");
    else if (e.clientY <= SNAP_THRESHOLD) applySnap(dragTarget, "top");
    else hideSnapPreview();
  }
  isDragging = false;
  isResizing = false;
  resizeDir = null;
  resizeStart = null;
  dragTarget = null;
  document.body.style.userSelect = "";
  hideSnapPreview();
});

document.addEventListener("mouseleave", () => {
  isDragging = false;
  isResizing = false;
  dragTarget = null;
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

document.getElementById("log-off")?.addEventListener("click", () => {
  closeStartMenu();
  alert("Logged off (demo). Refresh to start again.");
});
document.getElementById("shut-down")?.addEventListener("click", () => {
  closeStartMenu();
  document.body.style.transition = "opacity 0.8s";
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#0f0;font-family:monospace;font-size:18px;">It's now safe to turn off your computer.</div>`;
  }, 800);
});

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

function showPage(pageId) {
  const home = document.getElementById("home-screen");
  if (home) home.hidden = true;
  document.querySelectorAll(".app-page").forEach(p => { p.hidden = true; });
  const page = document.getElementById(`page-${pageId}`);
  if (!page) return;
  page.hidden = false;
  const body = document.getElementById(`content-${pageId}`);
  if (!body) return;

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
        pic.style.backgroundImage = `url(profile.jpg)`;
        pic.style.backgroundSize = "cover";
        pic.style.backgroundPosition = "70% 25%";
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

let profilePhotoReady = false;

function applyProfilePhoto(root = document) {
  if (!profilePhotoReady) return;
  root.querySelectorAll(".profile-pic, .user-avatar, .mobile-avatar").forEach(el => {
    el.style.backgroundImage = `url(profile.jpg)`;
    el.style.backgroundSize = "cover";
    // Face is on the right side of the landscape photo — bias crop toward it
    el.style.backgroundPosition = "70% 25%";
    el.classList.add("has-photo");
  });
}

function tryLoadProfile() {
  const img = new Image();
  img.onload = () => {
    profilePhotoReady = true;
    const style = document.createElement("style");
    style.textContent = `.has-photo::after { display: none !important; }`;
    document.head.appendChild(style);
    applyProfilePhoto();
  };
  img.onerror = () => {
    console.warn("profile.jpg not found — using initials fallback");
  };
  img.src = "profile.jpg";
}
tryLoadProfile();

if (window.innerWidth >= 900) {
  setTimeout(() => openWindow("about"), 400);
}
