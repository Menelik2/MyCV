/**
 * Super Mario–style platformer — fully coded (no external site).
 * Arrows/WASD + Space | Mobile: ◀ ▶ + A | M mute
 */
(function (global) {
  "use strict";

  function buildMario() {
    var TILE = 32;
    var GRAVITY = 0.5;
    var ACC = 0.5;
    var MAX_RUN = 4.2;
    var JUMP = -11;
    var FRICTION = 0.78;
    var COYOTE = 7;
    var JBUF = 9;

    var LEVELS = [
      [
        "................................................................",
        "................................................................",
        "................C...............................................",
        "..........?.....................................................",
        "........C.......##..............................................",
        "......................C....C....................................",
        "......##...##......................E............................",
        "................E.........P..............E......................",
        "####################...#########...#############################",
        "####################...#########...#############################",
        "####################FFF#########...#############################",
      ],
      [
        "........................................................................",
        "........................................................................",
        ".............C...........C..............................................",
        ".......?...........##........?..........................................",
        "........................C...............................................",
        "....##......E.................##......E.................................",
        "..............P........####.................P...........................",
        "........E..........................................E....................",
        "#################...##########...######...##############################",
        "#################...##########...######...##############################",
        "#################FFF##########...######...##############################",
      ],
      [
        "................................................................................",
        "................C...............C...............................................",
        "........?...............?...............?.......................................",
        "..............##...............##...............................................",
        "....C................E................C........E................................",
        "........##................P................##...................................",
        "................E...............####................E...........................",
        "......E................E......................E.................................",
        "##############...##############...########...###################################",
        "##############...##############...########...###################################",
        "##############FFF##############...########...###################################",
      ],
    ];

    var root = document.createElement("div");
    root.className = "mario-app";
    root.tabIndex = 0;
    root.innerHTML =
      '<div class="mario-hud">' +
      '<span>MARIO <b data-score>0</b></span>' +
      '<span>COINS <b data-coins>0</b></span>' +
      '<span>WORLD <b data-world>1-1</b></span>' +
      '<span>TIME <b data-time>300</b></span>' +
      '<span>LIVES <b data-lives>5</b></span>' +
      '<button type="button" class="mario-mute" data-mute title="Mute">♪</button>' +
      "</div>" +
      '<div class="mario-stage">' +
      '<canvas class="mario-canvas" aria-label="Mario game"></canvas>' +
      '<div class="mario-overlay" data-overlay>' +
      '<div class="mario-overlay-title">SUPER MARIO</div>' +
      '<div class="mario-overlay-sub">Arrow keys or WASD to move · Space to jump · Shift to run</div>' +
      '<button type="button" class="mario-btn" data-start>Start Game</button>' +
      "</div></div>" +
      '<div class="mario-pad">' +
      '<div class="mario-pad-left">' +
      '<button type="button" class="mario-dir" data-dir="left">◀</button>' +
      '<button type="button" class="mario-dir" data-dir="right">▶</button>' +
      "</div>" +
      '<button type="button" class="mario-jump" data-dir="jump">A</button>' +
      "</div>";

    var canvas = root.querySelector(".mario-canvas");
    var ctx = canvas.getContext("2d");
    var overlay = root.querySelector("[data-overlay]");
    var startBtn = root.querySelector("[data-start]");
    var muteBtn = root.querySelector("[data-mute]");
    var elScore = root.querySelector("[data-score]");
    var elCoins = root.querySelector("[data-coins]");
    var elWorld = root.querySelector("[data-world]");
    var elTime = root.querySelector("[data-time]");
    var elLives = root.querySelector("[data-lives]");

    var keys = { left: false, right: false, jump: false, run: false };
    var jBuf = 0, coyote = 0;
    var levelIdx = 0, rows, cols, map, mapW, mapH, flagX;
    var player, enemies, coins, blocks, particles;
    var cameraX = 0, score = 0, coinN = 0, lives = 5, timeLeft = 300, timeAcc = 0;
    var running = false, won = false, dead = false, invuln = 0;
    var raf = 0, lastTs = 0, viewW = 480, viewH = 352;
    var soundOn = true, audioCtx = null;

    try {
      soundOn = localStorage.getItem("portfolio-sounds") !== "off";
    } catch (e) {}

    function audio() {
      if (!audioCtx) {
        try {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
          return null;
        }
      }
      if (audioCtx.state === "suspended") try { audioCtx.resume(); } catch (e) {}
      return audioCtx;
    }
    function beep(freq, dur, type, vol, slide) {
      if (!soundOn) return;
      var ac = audio();
      if (!ac) return;
      try {
        var o = ac.createOscillator();
        var g = ac.createGain();
        o.type = type || "square";
        o.frequency.setValueAtTime(freq, ac.currentTime);
        if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, slide), ac.currentTime + dur);
        g.gain.setValueAtTime(vol || 0.05, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
        o.connect(g); g.connect(ac.destination);
        o.start(); o.stop(ac.currentTime + dur + 0.02);
      } catch (e) {}
    }
    function sfx(n) {
      if (n === "jump") beep(520, 0.1, "square", 0.045, 260);
      else if (n === "coin") { beep(980, 0.05, "square", 0.05); setTimeout(function () { beep(1320, 0.09, "square", 0.04); }, 55); }
      else if (n === "stomp") beep(160, 0.1, "triangle", 0.06, 70);
      else if (n === "bump") beep(130, 0.07, "square", 0.045);
      else if (n === "die") beep(280, 0.32, "sawtooth", 0.05, 55);
      else if (n === "win") {
        beep(523, 0.1, "square", 0.05);
        setTimeout(function () { beep(659, 0.1, "square", 0.05); }, 110);
        setTimeout(function () { beep(784, 0.18, "square", 0.05); }, 220);
      }
      else if (n === "pipe") beep(200, 0.15, "triangle", 0.04, 100);
    }

    function solid(tx, ty) {
      if (ty < 0) return false;
      if (tx < 0 || tx >= cols || ty >= rows) return true;
      var ch = map[ty][tx];
      return ch === "#" || ch === "P" || ch === "F";
    }
    function hits(x, y, w, h) {
      var x0 = Math.floor(x / TILE), x1 = Math.floor((x + w - 0.001) / TILE);
      var y0 = Math.floor(y / TILE), y1 = Math.floor((y + h - 0.001) / TILE);
      for (var ty = y0; ty <= y1; ty++)
        for (var tx = x0; tx <= x1; tx++)
          if (solid(tx, ty)) return true;
      return false;
    }
    function groundAhead(e) {
      var fx = e.vx >= 0 ? e.x + e.w + 1 : e.x - 1;
      return solid(Math.floor(fx / TILE), Math.floor((e.y + e.h + 2) / TILE));
    }

    function hud() {
      elScore.textContent = String(Math.floor(score)).padStart(6, "0");
      elCoins.textContent = "×" + String(coinN).padStart(2, "0");
      elWorld.textContent = "1-" + (levelIdx + 1);
      elTime.textContent = String(Math.max(0, Math.floor(timeLeft)));
      elLives.textContent = String(lives);
      muteBtn.textContent = soundOn ? "♪" : "🔇";
    }

    function particles(x, y, color, n) {
      for (var i = 0; i < n; i++)
        particles.push({
          x: x, y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          life: 20 + Math.random() * 18,
          color: color,
        });
    }

    function loadLevel(idx, keepScore) {
      levelIdx = Math.max(0, Math.min(LEVELS.length - 1, idx));
      map = LEVELS[levelIdx];
      rows = map.length;
      cols = map[0].length;
      mapW = cols * TILE;
      mapH = rows * TILE;
      viewH = mapH;
      if (!keepScore) { score = 0; coinN = 0; lives = 5; }
      timeLeft = 300;
      timeAcc = 0;
      dead = false;
      won = false;
      invuln = 0;
      jBuf = 0;
      coyote = 0;
      particles = [];
      enemies = [];
      coins = [];
      blocks = [];
      flagX = mapW - TILE * 3;
      var sx = TILE * 2, sy = TILE * (rows - 4);
      for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
          var ch = map[y][x], px = x * TILE, py = y * TILE;
          if (ch === "E") enemies.push({ x: px + 2, y: py + 4, w: 28, h: 28, vx: -0.75, dead: false, squish: 0 });
          else if (ch === "C") coins.push({ x: px + 8, y: py + 8, w: 16, h: 16, taken: false, ph: Math.random() * 6 });
          else if (ch === "?") blocks.push({ x: px, y: py, used: false, bounce: 0 });
          else if (ch === "F") flagX = px;
        }
      }
      player = { x: sx, y: sy, w: 24, h: 28, vx: 0, vy: 0, onGround: false, facing: 1 };
      cameraX = 0;
      hud();
      draw();
    }

    function kill() {
      if (invuln > 0 || dead || won) return;
      sfx("die");
      lives--;
      hud();
      if (lives <= 0) {
        dead = true;
        running = false;
        overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "GAME OVER";
        overlay.querySelector(".mario-overlay-sub").textContent = "Score " + Math.floor(score);
        startBtn.textContent = "Try Again";
      } else {
        invuln = 90;
        player.x = TILE * 2;
        player.y = TILE * (rows - 4);
        player.vx = player.vy = 0;
        cameraX = 0;
      }
    }

    function tryJump() {
      if (coyote > 0 || player.onGround) {
        player.vy = JUMP * (keys.run ? 1.05 : 1);
        player.onGround = false;
        coyote = 0;
        jBuf = 0;
        sfx("jump");
        return true;
      }
      return false;
    }

    function step(dt) {
      if (!running || dead || won) return;
      var f = Math.min(2.2, dt / 16.67);
      timeAcc += dt;
      while (timeAcc >= 1000) {
        timeAcc -= 1000;
        timeLeft--;
        if (timeLeft <= 0) { timeLeft = 0; kill(); }
        hud();
      }
      if (invuln > 0) invuln--;
      if (jBuf > 0) jBuf--;
      if (coyote > 0) coyote--;

      var maxV = keys.run ? MAX_RUN * 1.25 : MAX_RUN;
      if (keys.left) { player.vx -= ACC * f; player.facing = -1; }
      else if (keys.right) { player.vx += ACC * f; player.facing = 1; }
      else player.vx *= Math.pow(FRICTION, f);
      if (player.vx > maxV) player.vx = maxV;
      if (player.vx < -maxV) player.vx = -maxV;
      if (Math.abs(player.vx) < 0.04) player.vx = 0;

      if (jBuf > 0) tryJump();
      if (!keys.jump && player.vy < -3.2) player.vy *= 0.8;

      player.vy += GRAVITY * f;
      if (player.vy > 12) player.vy = 12;

      player.x += player.vx * f;
      if (hits(player.x, player.y, player.w, player.h)) {
        if (player.vx > 0) player.x = Math.floor((player.x + player.w) / TILE) * TILE - player.w - 0.01;
        else if (player.vx < 0) player.x = Math.floor(player.x / TILE + 1) * TILE + 0.01;
        player.vx = 0;
      }
      if (player.x < 0) { player.x = 0; player.vx = 0; }

      var wasGround = player.onGround;
      player.y += player.vy * f;
      player.onGround = false;
      if (hits(player.x, player.y, player.w, player.h)) {
        if (player.vy >= 0) {
          player.y = Math.floor((player.y + player.h) / TILE) * TILE - player.h - 0.01;
          player.vy = 0;
          player.onGround = true;
          coyote = COYOTE;
          if (jBuf > 0) tryJump();
        } else {
          player.y = Math.floor(player.y / TILE + 1) * TILE + 0.01;
          player.vy = 0;
          blocks.forEach(function (b) {
            if (!b.used && player.x + player.w > b.x + 2 && player.x < b.x + TILE - 2 &&
                player.y <= b.y + TILE && player.y + 10 >= b.y) {
              b.used = true; b.bounce = 8; coinN++; score += 200; sfx("coin"); sfx("bump");
              particles(b.x + 16, b.y, "#fbbf24", 7); hud();
            }
          });
        }
      } else if (wasGround) coyote = COYOTE;

      if (player.y > mapH + 40) kill();

      if (player.x + player.w >= flagX) {
        sfx("win");
        score += Math.floor(timeLeft) * 10 + 500;
        hud();
        if (levelIdx < LEVELS.length - 1) {
          running = false;
          overlay.hidden = false;
          overlay.querySelector(".mario-overlay-title").textContent = "WORLD 1-" + (levelIdx + 1) + " CLEAR!";
          overlay.querySelector(".mario-overlay-sub").textContent = "Score " + Math.floor(score);
          startBtn.textContent = "Next Level";
          levelIdx++;
        } else {
          won = true; running = false;
          overlay.hidden = false;
          overlay.querySelector(".mario-overlay-title").textContent = "YOU WIN!";
          overlay.querySelector(".mario-overlay-sub").textContent = "Final score " + Math.floor(score);
          startBtn.textContent = "Play Again";
          levelIdx = 0;
        }
      }

      enemies.forEach(function (e) {
        if (e.dead) { if (e.squish > 0) e.squish--; return; }
        e.x += e.vx * f;
        if (hits(e.x, e.y, e.w, e.h)) { e.x -= e.vx * f; e.vx *= -1; }
        else if (!groundAhead(e)) e.vx *= -1;
        if (invuln <= 0 && player.x < e.x + e.w && player.x + player.w > e.x &&
            player.y < e.y + e.h && player.y + player.h > e.y) {
          if (player.vy > 0.45 && player.y + player.h - e.y < 14) {
            e.dead = true; e.squish = 16; player.vy = JUMP * 0.48;
            score += 100; sfx("stomp"); particles(e.x + 14, e.y + 14, "#8B4513", 5); hud();
          } else kill();
        }
      });

      coins.forEach(function (c) {
        if (c.taken) return;
        c.ph += 0.14 * f;
        if (player.x < c.x + c.w && player.x + player.w > c.x && player.y < c.y + c.h && player.y + player.h > c.y) {
          c.taken = true; coinN++; score += 100; sfx("coin"); particles(c.x + 8, c.y + 8, "#fbbf24", 5); hud();
        }
      });

      blocks.forEach(function (b) { if (b.bounce > 0) b.bounce -= f; });
      particles = particles.filter(function (p) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.18; p.life--;
        return p.life > 0;
      });

      cameraX = player.x - viewW * 0.38;
      if (cameraX < 0) cameraX = 0;
      var maxC = Math.max(0, mapW - viewW);
      if (cameraX > maxC) cameraX = maxC;
    }

    function resize() {
      var stage = root.querySelector(".mario-stage");
      var sw = Math.max(1, (stage && stage.clientWidth) || 480);
      var sh = Math.max(1, (stage && stage.clientHeight) || 300);
      viewH = mapH;
      viewW = Math.round(viewH * (sw / sh));
      if (viewW < 300) viewW = 300;
      if (viewW > 960) viewW = 960;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(viewW * dpr);
      canvas.height = Math.floor(viewH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var scale = Math.min(sw / viewW, sh / viewH);
      canvas.style.width = Math.floor(viewW * scale) + "px";
      canvas.style.height = Math.floor(viewH * scale) + "px";
    }

    function draw() {
      if (!map) return;
      resize();
      var g = ctx.createLinearGradient(0, 0, 0, viewH);
      g.addColorStop(0, "#5c94fc");
      g.addColorStop(1, "#b0d0ff");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, viewW, viewH);

      ctx.fillStyle = "rgba(255,255,255,0.85)";
      for (var i = 0; i < 5; i++) {
        var cx = ((i * 160 - cameraX * 0.2) % (viewW + 100)) - 30;
        var cy = 24 + (i % 3) * 22;
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.arc(cx + 18, cy + 2, 11, 0, Math.PI * 2);
        ctx.arc(cx - 14, cy + 4, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      var t0 = Math.max(0, Math.floor(cameraX / TILE) - 1);
      var t1 = Math.min(cols, Math.ceil((cameraX + viewW) / TILE) + 1);
      for (var y = 0; y < rows; y++) {
        for (var x = t0; x < t1; x++) {
          var ch = map[y][x];
          var dx = x * TILE - cameraX, dy = y * TILE;
          if (ch === "#") {
            ctx.fillStyle = "#c84c0c";
            ctx.fillRect(dx, dy, TILE, TILE);
            ctx.fillStyle = "#fc9838";
            ctx.fillRect(dx + 2, dy + 2, TILE - 4, TILE - 4);
            ctx.strokeStyle = "#8b3a0a";
            ctx.strokeRect(dx + 0.5, dy + 0.5, TILE - 1, TILE - 1);
          } else if (ch === "P") {
            ctx.fillStyle = "#00a800";
            ctx.fillRect(dx, dy + 8, TILE, TILE - 8);
            ctx.fillStyle = "#00d800";
            ctx.fillRect(dx - 4, dy, TILE + 8, 12);
            ctx.fillStyle = "#007000";
            ctx.fillRect(dx + 4, dy + 12, TILE - 8, TILE - 12);
          } else if (ch === "F") {
            ctx.fillStyle = "#00a800";
            ctx.fillRect(dx + 14, dy - TILE * 2.5, 4, TILE * 3.5);
            ctx.fillStyle = "#fc9838";
            ctx.beginPath();
            ctx.moveTo(dx + 18, dy - TILE * 2.5);
            ctx.lineTo(dx + 38, dy - TILE * 2.5 + 12);
            ctx.lineTo(dx + 18, dy - TILE * 2.5 + 24);
            ctx.fill();
          }
        }
      }

      blocks.forEach(function (b) {
        var bx = b.x - cameraX, by = b.y - (b.bounce > 0 ? b.bounce : 0);
        ctx.fillStyle = b.used ? "#9ca3af" : "#fc9838";
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
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.ellipse(c.x - cameraX + 8, c.y + 8 + Math.sin(c.ph), 6, 8, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      enemies.forEach(function (e) {
        if (e.dead && e.squish <= 0) return;
        var hh = e.dead ? 10 : e.h;
        var ey = e.y + (e.dead ? e.h - hh : 0);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(e.x - cameraX, ey, e.w, hh);
        if (!e.dead) {
          ctx.fillStyle = "#fff";
          ctx.fillRect(e.x - cameraX + 6, ey + 6, 5, 5);
          ctx.fillRect(e.x - cameraX + 17, ey + 6, 5, 5);
          ctx.fillStyle = "#000";
          ctx.fillRect(e.x - cameraX + 8, ey + 8, 2, 2);
          ctx.fillRect(e.x - cameraX + 19, ey + 8, 2, 2);
        }
      });

      if (!(invuln > 0 && Math.floor(invuln / 3) % 2 === 0)) {
        var px = player.x - cameraX, py = player.y;
        ctx.fillStyle = "#e52521";
        ctx.fillRect(px + 4, py + 10, 16, 12);
        ctx.fillStyle = "#0000f8";
        ctx.fillRect(px + 4, py + 18, 16, 10);
        ctx.fillStyle = "#f8c8a0";
        ctx.fillRect(px + 6, py + 2, 14, 12);
        ctx.fillStyle = "#e52521";
        ctx.fillRect(px + 4, py, 18, 6);
        ctx.fillStyle = "#000";
        ctx.fillRect(player.facing > 0 ? px + 14 : px + 8, py + 6, 3, 3);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(px + 4, py + 26, 7, 4);
        ctx.fillRect(px + 13, py + 26, 7, 4);
      }

      particles.forEach(function (p) {
        ctx.globalAlpha = Math.max(0, p.life / 32);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - cameraX, p.y, 3, 3);
        ctx.globalAlpha = 1;
      });
    }

    function loop(ts) {
      raf = requestAnimationFrame(loop);
      if (!lastTs) lastTs = ts;
      var dt = Math.min(40, ts - lastTs);
      lastTs = ts;
      step(dt);
      draw();
    }

    function startGame() {
      audio();
      var label = startBtn.textContent || "";
      if (label.indexOf("Next") >= 0) {
        loadLevel(levelIdx, true);
      } else if (label.indexOf("Try") >= 0 || label.indexOf("Again") >= 0 || lives <= 0 || won) {
        loadLevel(0, false);
      } else {
        loadLevel(levelIdx, score > 0);
      }
      running = true;
      dead = false;
      won = false;
      overlay.hidden = true;
      lastTs = 0;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
      try { root.focus({ preventScroll: true }); } catch (e) {}
      hud();
    }

    startBtn.addEventListener("click", startGame);
    muteBtn.addEventListener("click", function () {
      soundOn = !soundOn;
      try { localStorage.setItem("portfolio-sounds", soundOn ? "on" : "off"); } catch (e) {}
      if (soundOn) audio();
      hud();
    });

    function onKey(e) {
      if (!root.isConnected) return;
      var down = e.type === "keydown";
      var k = e.key;
      if (k === "ArrowLeft" || k === "a" || k === "A") { keys.left = down; e.preventDefault(); }
      else if (k === "ArrowRight" || k === "d" || k === "D") { keys.right = down; e.preventDefault(); }
      else if (k === "Shift") keys.run = down;
      else if (k === " " || k === "ArrowUp" || k === "w" || k === "W") {
        keys.jump = down;
        if (down && !e.repeat) { jBuf = JBUF; if (running) tryJump(); }
        e.preventDefault();
      } else if (down && k === "Enter" && !running) startGame();
      else if (down && (k === "m" || k === "M") && !e.ctrlKey) muteBtn.click();
    }
    window.addEventListener("keydown", onKey, { passive: false });
    window.addEventListener("keyup", onKey, { passive: false });

    root.querySelectorAll("[data-dir]").forEach(function (btn) {
      var dir = btn.getAttribute("data-dir");
      function set(v) {
        if (dir === "left") keys.left = v;
        if (dir === "right") keys.right = v;
        if (dir === "jump") {
          keys.jump = v;
          if (v) { jBuf = JBUF; if (running) tryJump(); }
        }
      }
      btn.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        audio();
        if (!running) startGame();
        set(true);
        try { btn.setPointerCapture(e.pointerId); } catch (err) {}
      });
      btn.addEventListener("pointerup", function () { set(false); });
      btn.addEventListener("pointercancel", function () { set(false); });
      btn.addEventListener("lostpointercapture", function () { set(false); });
    });

    var ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(function () { draw(); }) : null;
    if (ro) ro.observe(root);

    var mo = new MutationObserver(function () {
      if (!root.isConnected) {
        mo.disconnect();
        if (ro) ro.disconnect();
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("keyup", onKey);
        if (raf) cancelAnimationFrame(raf);
        try { if (audioCtx) audioCtx.close(); } catch (e) {}
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    loadLevel(0, false);
    setTimeout(draw, 40);
    return root;
  }

  global.buildMario = buildMario;
})(typeof window !== "undefined" ? window : globalThis);
