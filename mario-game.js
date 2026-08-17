/**
 * Super Mario–style platformer — sound + fixed physics + mobile compatibility
 * Keyboard: arrows / WASD + Space | Mobile: D-pad + A
 */
(function (global) {
  "use strict";

  function buildMario() {
    const TILE = 32;
    const GRAVITY = 0.52;
    const MOVE_ACC = 0.55;
    const MAX_RUN = 4.0;
    const JUMP_V = -10.8;
    const FRICTION = 0.8;
    const COYOTE_MAX = 6;
    const JUMP_BUFFER_MAX = 8;

    const root = document.createElement("div");
    root.className = "mario-app";
    root.tabIndex = 0;
    root.innerHTML =
      '<div class="mario-hud">' +
      '  <span>MARIO <b data-m-score>0</b></span>' +
      '  <span>COINS <b data-m-coins>0</b></span>' +
      '  <span>WORLD <b>1-1</b></span>' +
      '  <span>TIME <b data-m-time>400</b></span>' +
      '  <span>LIVES <b data-m-lives>3</b></span>' +
      '  <button type="button" class="mario-mute" data-m-mute title="Mute">♪</button>' +
      "</div>" +
      '<div class="mario-stage">' +
      '  <canvas class="mario-canvas" width="480" height="320" aria-label="Super Mario game"></canvas>' +
      '  <div class="mario-overlay" data-m-overlay>' +
      '    <div class="mario-overlay-title">SUPER MARIO</div>' +
      '    <div class="mario-overlay-sub">Arrows / WASD · Space jump · A on phone</div>' +
      '    <button type="button" class="mario-btn" data-m-start>Start Game</button>' +
      "  </div>" +
      "</div>" +
      '<div class="mario-pad" aria-label="Controls">' +
      '  <div class="mario-pad-left">' +
      '    <button type="button" class="mario-dir" data-dir="left" aria-label="Left">◀</button>' +
      '    <button type="button" class="mario-dir" data-dir="right" aria-label="Right">▶</button>' +
      "  </div>" +
      '  <button type="button" class="mario-jump" data-dir="jump" aria-label="Jump">A</button>' +
      "</div>";

    const canvas = root.querySelector(".mario-canvas");
    const ctx = canvas.getContext("2d");
    const overlay = root.querySelector("[data-m-overlay]");
    const startBtn = root.querySelector("[data-m-start]");
    const muteBtn = root.querySelector("[data-m-mute]");
    const elScore = root.querySelector("[data-m-score]");
    const elCoins = root.querySelector("[data-m-coins]");
    const elTime = root.querySelector("[data-m-time]");
    const elLives = root.querySelector("[data-m-lives]");

    const LEVEL_ROWS = [
      "................................................................................",
      "................................................................................",
      "................................................................................",
      "..........................C.....................................................",
      ".....................?..........................................................",
      "..............C.............##..................................................",
      "................C...............................................................",
      "............##......##..........................................................",
      "....................................C.....C.....................................",
      ".........................E......................E...............................",
      "............E.......P...............####....................E...................",
      "##############################...#######################...#####################",
      "##############################...#######################...#####################",
      "##############################FFF#######################...#####################",
    ];

    const rows = LEVEL_ROWS.length;
    const cols = LEVEL_ROWS[0].length;
    const mapW = cols * TILE;
    const mapH = rows * TILE;

    let keys = { left: false, right: false, jump: false };
    let jumpBuffer = 0;
    let coyote = 0;
    let player, enemies, coins, blocks, particles;
    let cameraX = 0;
    let score = 0;
    let coinCount = 0;
    let lives = 3;
    let timeLeft = 400;
    let timeAcc = 0;
    let running = false;
    let won = false;
    let dead = false;
    let raf = 0;
    let lastTs = 0;
    let invuln = 0;
    let flagX = mapW - TILE * 4;
    let logicalW = 480;
    let logicalH = 320;
    let soundOn = true;
    let audioCtx = null;

    try {
      soundOn = localStorage.getItem("portfolio-sounds") !== "off";
    } catch (_) {}

    function ensureAudio() {
      if (!audioCtx) {
        try {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (_) {
          return null;
        }
      }
      if (audioCtx.state === "suspended") {
        try {
          audioCtx.resume();
        } catch (_) {}
      }
      return audioCtx;
    }

    function beep(freq, dur, type, vol, slide) {
      if (!soundOn) return;
      const ac = ensureAudio();
      if (!ac) return;
      try {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = type || "square";
        o.frequency.setValueAtTime(freq, ac.currentTime);
        if (slide) {
          o.frequency.exponentialRampToValueAtTime(Math.max(40, slide), ac.currentTime + (dur || 0.1));
        }
        g.gain.setValueAtTime(vol != null ? vol : 0.06, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + (dur || 0.1));
        o.connect(g);
        g.connect(ac.destination);
        o.start();
        o.stop(ac.currentTime + (dur || 0.1) + 0.02);
      } catch (_) {}
    }

    function sfx(name) {
      if (name === "jump") beep(520, 0.12, "square", 0.05, 280);
      else if (name === "coin") {
        beep(980, 0.06, "square", 0.05);
        setTimeout(function () {
          beep(1320, 0.1, "square", 0.045);
        }, 60);
      } else if (name === "stomp") beep(180, 0.12, "triangle", 0.07, 80);
      else if (name === "bump") beep(140, 0.08, "square", 0.05);
      else if (name === "die") beep(300, 0.35, "sawtooth", 0.06, 60);
      else if (name === "win") {
        beep(523, 0.12, "square", 0.05);
        setTimeout(function () {
          beep(659, 0.12, "square", 0.05);
        }, 120);
        setTimeout(function () {
          beep(784, 0.2, "square", 0.05);
        }, 240);
      } else if (name === "kick") beep(200, 0.08, "triangle", 0.05, 400);
    }

    function solidAt(tx, ty) {
      if (ty < 0) return false;
      if (tx < 0 || tx >= cols || ty >= rows) return true;
      const ch = LEVEL_ROWS[ty][tx];
      return ch === "#" || ch === "=" || ch === "P" || ch === "F";
    }

    function rectHitsSolid(x, y, w, h) {
      const x0 = Math.floor(x / TILE);
      const x1 = Math.floor((x + w - 0.001) / TILE);
      const y0 = Math.floor(y / TILE);
      const y1 = Math.floor((y + h - 0.001) / TILE);
      for (let ty = y0; ty <= y1; ty++) {
        for (let tx = x0; tx <= x1; tx++) {
          if (solidAt(tx, ty)) return true;
        }
      }
      return false;
    }

    function groundAhead(e) {
      const footX = e.vx >= 0 ? e.x + e.w + 1 : e.x - 1;
      const footY = e.y + e.h + 2;
      const tx = Math.floor(footX / TILE);
      const ty = Math.floor(footY / TILE);
      return solidAt(tx, ty);
    }

    function updateHud() {
      elScore.textContent = String(Math.floor(score)).padStart(6, "0");
      elCoins.textContent = "×" + String(coinCount).padStart(2, "0");
      elTime.textContent = String(Math.max(0, Math.floor(timeLeft)));
      elLives.textContent = String(lives);
      muteBtn.textContent = soundOn ? "♪" : "🔇";
      muteBtn.classList.toggle("off", !soundOn);
    }

    function spawnParticles(x, y, color, n) {
      for (let i = 0; i < n; i++) {
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          life: 24 + Math.random() * 16,
          color: color,
        });
      }
    }

    function resetLevel(fullReset) {
      if (fullReset) {
        score = 0;
        coinCount = 0;
        lives = 3;
      }
      timeLeft = 400;
      timeAcc = 0;
      dead = false;
      won = false;
      invuln = 0;
      jumpBuffer = 0;
      coyote = 0;
      particles = [];
      enemies = [];
      coins = [];
      blocks = [];
      let sx = TILE * 2;
      let sy = TILE * 9;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const ch = LEVEL_ROWS[y][x];
          const px = x * TILE;
          const py = y * TILE;
          if (ch === "S") {
            sx = px;
            sy = py;
          } else if (ch === "E") {
            enemies.push({
              x: px + 2,
              y: py + 4,
              w: 28,
              h: 28,
              vx: -0.7,
              dead: false,
              squish: 0,
            });
          } else if (ch === "C") {
            coins.push({
              x: px + 8,
              y: py + 8,
              w: 16,
              h: 16,
              taken: false,
              phase: Math.random() * 6,
            });
          } else if (ch === "?") {
            blocks.push({ x: px, y: py, used: false, bounce: 0 });
          } else if (ch === "F") {
            flagX = px;
          }
        }
      }

      player = {
        x: sx,
        y: sy,
        w: 24,
        h: 28,
        vx: 0,
        vy: 0,
        onGround: false,
        facing: 1,
      };
      cameraX = 0;
      updateHud();
      draw();
    }

    function killPlayer() {
      if (invuln > 0 || dead || won) return;
      sfx("die");
      lives--;
      updateHud();
      if (lives <= 0) {
        dead = true;
        running = false;
        overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "GAME OVER";
        overlay.querySelector(".mario-overlay-sub").textContent = "Score " + Math.floor(score);
        startBtn.textContent = "Try Again";
      } else {
        invuln = 100;
        player.x = TILE * 2;
        player.y = TILE * 9;
        player.vx = 0;
        player.vy = 0;
        cameraX = 0;
      }
    }

    function stompEnemy(e) {
      e.dead = true;
      e.squish = 18;
      player.vy = JUMP_V * 0.5;
      score += 100;
      sfx("stomp");
      spawnParticles(e.x + 14, e.y + 14, "#8B4513", 6);
      updateHud();
    }

    function bumpBlock(b) {
      if (b.used) return;
      b.used = true;
      b.bounce = 8;
      coinCount++;
      score += 200;
      sfx("coin");
      sfx("bump");
      spawnParticles(b.x + 16, b.y, "#fbbf24", 8);
      updateHud();
    }

    function tryJump() {
      if (coyote > 0 || player.onGround) {
        player.vy = JUMP_V;
        player.onGround = false;
        coyote = 0;
        jumpBuffer = 0;
        sfx("jump");
        return true;
      }
      return false;
    }

    function step(dt) {
      if (!running || dead || won) return;
      const f = Math.min(2.2, dt / 16.67);

      timeAcc += dt;
      while (timeAcc >= 1000) {
        timeAcc -= 1000;
        timeLeft--;
        if (timeLeft <= 0) {
          timeLeft = 0;
          killPlayer();
        }
        updateHud();
      }

      if (invuln > 0) invuln--;
      if (jumpBuffer > 0) jumpBuffer--;
      if (coyote > 0) coyote--;

      if (keys.left) {
        player.vx -= MOVE_ACC * f;
        player.facing = -1;
      } else if (keys.right) {
        player.vx += MOVE_ACC * f;
        player.facing = 1;
      } else {
        player.vx *= Math.pow(FRICTION, f);
      }
      if (player.vx > MAX_RUN) player.vx = MAX_RUN;
      if (player.vx < -MAX_RUN) player.vx = -MAX_RUN;
      if (Math.abs(player.vx) < 0.05) player.vx = 0;

      if (jumpBuffer > 0) tryJump();

      if (!keys.jump && player.vy < -3.5) {
        player.vy *= 0.82;
      }

      player.vy += GRAVITY * f;
      if (player.vy > 11) player.vy = 11;

      // Horizontal
      player.x += player.vx * f;
      if (rectHitsSolid(player.x, player.y, player.w, player.h)) {
        if (player.vx > 0) {
          player.x = Math.floor((player.x + player.w) / TILE) * TILE - player.w - 0.01;
        } else if (player.vx < 0) {
          player.x = Math.floor(player.x / TILE + 1) * TILE + 0.01;
        }
        player.vx = 0;
      }
      if (player.x < 0) {
        player.x = 0;
        player.vx = 0;
      }

      // Vertical
      player.y += player.vy * f;
      const wasOnGround = player.onGround;
      player.onGround = false;
      if (rectHitsSolid(player.x, player.y, player.w, player.h)) {
        if (player.vy >= 0) {
          player.y = Math.floor((player.y + player.h) / TILE) * TILE - player.h - 0.01;
          player.vy = 0;
          player.onGround = true;
          coyote = COYOTE_MAX;
          if (jumpBuffer > 0) tryJump();
        } else {
          player.y = Math.floor(player.y / TILE + 1) * TILE + 0.01;
          player.vy = 0;
          blocks.forEach(function (b) {
            if (
              !b.used &&
              player.x + player.w > b.x + 2 &&
              player.x < b.x + TILE - 2 &&
              player.y <= b.y + TILE &&
              player.y + 8 >= b.y
            ) {
              bumpBlock(b);
            }
          });
        }
      } else if (wasOnGround) {
        coyote = COYOTE_MAX;
      }

      if (player.y > mapH + 48) killPlayer();

      if (player.x + player.w >= flagX) {
        won = true;
        running = false;
        score += Math.floor(timeLeft) * 10;
        sfx("win");
        updateHud();
        overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "COURSE CLEAR!";
        overlay.querySelector(".mario-overlay-sub").textContent = "Score " + Math.floor(score);
        startBtn.textContent = "Play Again";
      }

      enemies.forEach(function (e) {
        if (e.dead) {
          if (e.squish > 0) e.squish--;
          return;
        }
        e.x += e.vx * f;
        if (rectHitsSolid(e.x, e.y, e.w, e.h)) {
          e.x -= e.vx * f;
          e.vx *= -1;
        } else if (!groundAhead(e)) {
          e.vx *= -1;
        }
        if (
          invuln <= 0 &&
          player.x < e.x + e.w &&
          player.x + player.w > e.x &&
          player.y < e.y + e.h &&
          player.y + player.h > e.y
        ) {
          if (player.vy > 0.5 && player.y + player.h - e.y < 14) {
            stompEnemy(e);
          } else {
            killPlayer();
          }
        }
      });

      coins.forEach(function (c) {
        if (c.taken) return;
        c.phase += 0.15 * f;
        if (
          player.x < c.x + c.w &&
          player.x + player.w > c.x &&
          player.y < c.y + c.h &&
          player.y + player.h > c.y
        ) {
          c.taken = true;
          coinCount++;
          score += 100;
          sfx("coin");
          spawnParticles(c.x + 8, c.y + 8, "#fbbf24", 5);
          updateHud();
        }
      });

      blocks.forEach(function (b) {
        if (b.bounce > 0) b.bounce -= f;
      });
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.life--;
      });
      particles = particles.filter(function (p) {
        return p.life > 0;
      });

      cameraX = player.x - logicalW * 0.38;
      if (cameraX < 0) cameraX = 0;
      const maxCam = Math.max(0, mapW - logicalW);
      if (cameraX > maxCam) cameraX = maxCam;
    }

    function drawSky(w, h) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#5c94fc");
      g.addColorStop(1, "#b0d0ff");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      for (let i = 0; i < 6; i++) {
        const cx = ((i * 180 - cameraX * 0.25) % (w + 120)) - 40;
        const cy = 28 + (i % 3) * 26;
        ctx.beginPath();
        ctx.arc(cx, cy, 16, 0, Math.PI * 2);
        ctx.arc(cx + 20, cy + 3, 12, 0, Math.PI * 2);
        ctx.arc(cx - 16, cy + 5, 11, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawTile(ch, x, y) {
      if (ch === "#" || ch === "=") {
        ctx.fillStyle = "#c84c0c";
        ctx.fillRect(x, y, TILE, TILE);
        ctx.fillStyle = "#fc9838";
        ctx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4);
        ctx.strokeStyle = "#8b3a0a";
        ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
      } else if (ch === "P") {
        ctx.fillStyle = "#00a800";
        ctx.fillRect(x, y + 8, TILE, TILE - 8);
        ctx.fillStyle = "#00d800";
        ctx.fillRect(x - 4, y, TILE + 8, 12);
        ctx.fillStyle = "#007000";
        ctx.fillRect(x + 4, y + 12, TILE - 8, TILE - 12);
      } else if (ch === "F") {
        ctx.fillStyle = "#00a800";
        ctx.fillRect(x + 14, y - TILE * 3, 4, TILE * 4);
        ctx.fillStyle = "#fc9838";
        ctx.beginPath();
        ctx.moveTo(x + 18, y - TILE * 3);
        ctx.lineTo(x + 40, y - TILE * 3 + 12);
        ctx.lineTo(x + 18, y - TILE * 3 + 24);
        ctx.fill();
      }
    }

    function drawPlayer() {
      const x = player.x - cameraX;
      const y = player.y;
      if (invuln > 0 && Math.floor(invuln / 3) % 2 === 0) return;
      ctx.fillStyle = "#e52521";
      ctx.fillRect(x + 4, y + 10, 16, 12);
      ctx.fillStyle = "#0000f8";
      ctx.fillRect(x + 4, y + 18, 16, 10);
      ctx.fillStyle = "#f8c8a0";
      ctx.fillRect(x + 6, y + 2, 14, 12);
      ctx.fillStyle = "#e52521";
      ctx.fillRect(x + 4, y, 18, 6);
      ctx.fillStyle = "#000";
      const eyeX = player.facing > 0 ? x + 14 : x + 8;
      ctx.fillRect(eyeX, y + 6, 3, 3);
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(x + 4, y + 26, 7, 4);
      ctx.fillRect(x + 13, y + 26, 7, 4);
    }

    function resizeCanvas() {
      const stage = root.querySelector(".mario-stage");
      const cssW = Math.min(640, Math.max(280, (stage && stage.clientWidth) || 480));
      const cssH = Math.min(400, Math.max(200, cssW * 0.62));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      logicalW = cssW;
      logicalH = cssH;
    }

    function draw() {
      resizeCanvas();
      const w = logicalW;
      const h = logicalH;
      drawSky(w, h);

      const t0 = Math.max(0, Math.floor(cameraX / TILE) - 1);
      const t1 = Math.min(cols, Math.ceil((cameraX + w) / TILE) + 1);
      for (let y = 0; y < rows; y++) {
        for (let x = t0; x < t1; x++) {
          const ch = LEVEL_ROWS[y][x];
          if (ch === "." || ch === "C" || ch === "E" || ch === "S" || ch === "?") continue;
          drawTile(ch, x * TILE - cameraX, y * TILE);
        }
      }

      blocks.forEach(function (b) {
        const bx = b.x - cameraX;
        const by = b.y - (b.bounce > 0 ? b.bounce : 0);
        ctx.fillStyle = b.used ? "#a0a0a0" : "#fc9838";
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.strokeStyle = "#8b3a0a";
        ctx.strokeRect(bx + 0.5, by + 0.5, TILE - 1, TILE - 1);
        if (!b.used) {
          ctx.fillStyle = "#fff";
          ctx.font = "bold 16px Tahoma,sans-serif";
          ctx.fillText("?", bx + 10, by + 22);
        }
      });

      coins.forEach(function (c) {
        if (c.taken) return;
        const cx = c.x - cameraX;
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.ellipse(cx + 8, c.y + 8 + Math.sin(c.phase) * 1.5, 6, 8, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      enemies.forEach(function (e) {
        if (e.dead && e.squish <= 0) return;
        const ex = e.x - cameraX;
        const hh = e.dead ? 10 : e.h;
        const ey = e.y + (e.dead ? e.h - hh : 0);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(ex, ey, e.w, hh);
        if (!e.dead) {
          ctx.fillStyle = "#fff";
          ctx.fillRect(ex + 6, ey + 6, 5, 5);
          ctx.fillRect(ex + 17, ey + 6, 5, 5);
          ctx.fillStyle = "#000";
          ctx.fillRect(ex + 8, ey + 8, 2, 2);
          ctx.fillRect(ex + 19, ey + 8, 2, 2);
        }
      });

      drawPlayer();

      particles.forEach(function (p) {
        ctx.globalAlpha = Math.max(0, p.life / 36);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - cameraX, p.y, 3, 3);
        ctx.globalAlpha = 1;
      });
    }

    function loop(ts) {
      raf = requestAnimationFrame(loop);
      if (!lastTs) lastTs = ts;
      const dt = Math.min(40, ts - lastTs);
      lastTs = ts;
      step(dt);
      draw();
    }

    function startGame() {
      ensureAudio();
      const restart = lives <= 0 || startBtn.textContent.indexOf("Try") >= 0 || startBtn.textContent.indexOf("Again") >= 0;
      if (restart && lives <= 0) {
        resetLevel(true);
      } else if (!running && !dead && !won && lives === 3 && score === 0) {
        resetLevel(true);
      } else if (won || dead) {
        resetLevel(true);
      } else {
        resetLevel(false);
      }
      running = true;
      dead = false;
      won = false;
      overlay.hidden = true;
      lastTs = 0;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
      try {
        root.focus({ preventScroll: true });
      } catch (_) {}
      updateHud();
    }

    startBtn.addEventListener("click", function () {
      startGame();
    });

    muteBtn.addEventListener("click", function () {
      soundOn = !soundOn;
      try {
        localStorage.setItem("portfolio-sounds", soundOn ? "on" : "off");
      } catch (_) {}
      if (soundOn) ensureAudio();
      updateHud();
    });

    function onKey(e) {
      if (!root.isConnected) return;
      const down = e.type === "keydown";
      const k = e.key;
      if (k === "ArrowLeft" || k === "a" || k === "A") {
        keys.left = down;
        e.preventDefault();
      } else if (k === "ArrowRight" || k === "d" || k === "D") {
        keys.right = down;
        e.preventDefault();
      } else if (k === " " || k === "ArrowUp" || k === "w" || k === "W") {
        keys.jump = down;
        if (down && !e.repeat) {
          jumpBuffer = JUMP_BUFFER_MAX;
          if (running) tryJump();
        }
        e.preventDefault();
      } else if (down && (k === "Enter" || k === "m" || k === "M") && k === "Enter" && !running) {
        startGame();
        e.preventDefault();
      } else if (down && (k === "m" || k === "M") && !e.ctrlKey && !e.metaKey) {
        muteBtn.click();
      }
    }
    window.addEventListener("keydown", onKey, { passive: false });
    window.addEventListener("keyup", onKey, { passive: false });

    function bindPad(btn, dir) {
      var held = false;
      function set(v) {
        held = v;
        if (dir === "left") keys.left = v;
        if (dir === "right") keys.right = v;
        if (dir === "jump") {
          keys.jump = v;
          if (v) {
            jumpBuffer = JUMP_BUFFER_MAX;
            if (running) tryJump();
          }
        }
      }
      function down(e) {
        e.preventDefault();
        e.stopPropagation();
        ensureAudio();
        if (!running) startGame();
        set(true);
        try {
          btn.setPointerCapture(e.pointerId);
        } catch (_) {}
      }
      function up(e) {
        e.preventDefault();
        set(false);
      }
      btn.addEventListener("pointerdown", down);
      btn.addEventListener("pointerup", up);
      btn.addEventListener("pointercancel", up);
      btn.addEventListener("lostpointercapture", function () {
        set(false);
      });
    }
    root.querySelectorAll(".mario-dir, .mario-jump").forEach(function (btn) {
      bindPad(btn, btn.getAttribute("data-dir"));
    });

    var ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(function () {
            draw();
          })
        : null;
    if (ro) ro.observe(root);

    var mo = new MutationObserver(function () {
      if (!root.isConnected) {
        mo.disconnect();
        if (ro) ro.disconnect();
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("keyup", onKey);
        if (raf) cancelAnimationFrame(raf);
        try {
          if (audioCtx) audioCtx.close();
        } catch (_) {}
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    resetLevel(true);
    setTimeout(draw, 30);
    return root;
  }

  global.buildMario = buildMario;
})(typeof window !== "undefined" ? window : globalThis);
