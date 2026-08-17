/**
 * Super Mario–style platformer (original canvas art / physics)
 * Keyboard: arrows / WASD + Space jump | Mobile: D-pad + A
 */
(function (global) {
  "use strict";

  function buildMario() {
    const TILE = 32;
    const GRAVITY = 0.55;
    const MOVE = 0.35;
    const MAX_RUN = 4.2;
    const JUMP = -11.2;
    const FRICTION = 0.82;

    const root = document.createElement("div");
    root.className = "mario-app";
    root.innerHTML =
      '<div class="mario-hud">' +
      '  <span>MARIO <b data-m-score>0</b></span>' +
      '  <span>COINS <b data-m-coins>0</b></span>' +
      '  <span>WORLD <b>1-1</b></span>' +
      '  <span>TIME <b data-m-time>400</b></span>' +
      '  <span>LIVES <b data-m-lives>3</b></span>' +
      "</div>" +
      '<div class="mario-stage">' +
      '  <canvas class="mario-canvas" width="480" height="320" aria-label="Super Mario game"></canvas>' +
      '  <div class="mario-overlay" data-m-overlay>' +
      '    <div class="mario-overlay-title">SUPER MARIO</div>' +
      '    <div class="mario-overlay-sub">Arrow keys / WASD · Space to jump</div>' +
      '    <button type="button" class="mario-btn" data-m-start>Start Game</button>' +
      "  </div>" +
      "</div>" +
      '<div class="mario-pad" aria-label="Controls">' +
      '  <div class="mario-pad-left">' +
      '    <button type="button" class="mario-dir" data-dir="left">◀</button>' +
      '    <button type="button" class="mario-dir" data-dir="right">▶</button>' +
      "  </div>" +
      '  <button type="button" class="mario-jump" data-dir="jump">A</button>' +
      "</div>";

    const canvas = root.querySelector(".mario-canvas");
    const ctx = canvas.getContext("2d");
    const overlay = root.querySelector("[data-m-overlay]");
    const startBtn = root.querySelector("[data-m-start]");
    const elScore = root.querySelector("[data-m-score]");
    const elCoins = root.querySelector("[data-m-coins]");
    const elTime = root.querySelector("[data-m-time]");
    const elLives = root.querySelector("[data-m-lives]");

    // Level map: # ground  = brick  ? coin block  P pipe  F flag  C coin  E enemy  . empty  S start
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

    let keys = { left: false, right: false, jump: false, jumpPressed: false };
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

    function solidAt(tx, ty) {
      if (ty < 0 || tx < 0 || tx >= cols || ty >= rows) return true;
      const ch = LEVEL_ROWS[ty][tx];
      return ch === "#" || ch === "=" || ch === "P" || ch === "F";
    }

    function rectHitsSolid(x, y, w, h) {
      const x0 = Math.floor(x / TILE);
      const x1 = Math.floor((x + w - 0.01) / TILE);
      const y0 = Math.floor(y / TILE);
      const y1 = Math.floor((y + h - 0.01) / TILE);
      for (let ty = y0; ty <= y1; ty++) {
        for (let tx = x0; tx <= x1; tx++) {
          if (solidAt(tx, ty)) return true;
        }
      }
      return false;
    }

    function resetLevel(full) {
      if (full) {
        score = 0;
        coinCount = 0;
        lives = 3;
      }
      timeLeft = 400;
      timeAcc = 0;
      dead = false;
      won = false;
      invuln = 0;
      particles = [];
      enemies = [];
      coins = [];
      blocks = [];
      let sx = TILE * 2;
      let sy = TILE * 8;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const ch = LEVEL_ROWS[y][x];
          const px = x * TILE;
          const py = y * TILE;
          if (ch === "S") {
            sx = px;
            sy = py;
          } else if (ch === "E") {
            enemies.push({ x: px, y: py, w: 28, h: 28, vx: -0.8, dead: false, squish: 0 });
          } else if (ch === "C") {
            coins.push({ x: px + 8, y: py + 8, w: 16, h: 16, taken: false, phase: Math.random() * 6 });
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
        anim: 0,
      };
      cameraX = 0;
      updateHud();
      draw(0);
    }

    function updateHud() {
      elScore.textContent = String(score).padStart(6, "0");
      elCoins.textContent = "×" + String(coinCount).padStart(2, "0");
      elTime.textContent = String(Math.max(0, Math.floor(timeLeft)));
      elLives.textContent = String(lives);
    }

    function killPlayer() {
      if (invuln > 0 || dead || won) return;
      lives--;
      updateHud();
      if (lives <= 0) {
        dead = true;
        running = false;
        overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "GAME OVER";
        overlay.querySelector(".mario-overlay-sub").textContent = "Score " + score;
        startBtn.textContent = "Try Again";
      } else {
        invuln = 90;
        player.x = TILE * 2;
        player.y = TILE * 8;
        player.vx = 0;
        player.vy = 0;
        cameraX = 0;
      }
    }

    function stompEnemy(e) {
      e.dead = true;
      e.squish = 20;
      player.vy = JUMP * 0.55;
      score += 100;
      spawnParticles(e.x + 14, e.y + 14, "#8B4513", 6);
      updateHud();
    }

    function spawnParticles(x, y, color, n) {
      for (let i = 0; i < n; i++) {
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4 - 2,
          life: 30 + Math.random() * 20,
          color: color,
        });
      }
    }

    function bumpBlock(b) {
      if (b.used) return;
      b.used = true;
      b.bounce = 8;
      coinCount++;
      score += 200;
      spawnParticles(b.x + 16, b.y, "#fbbf24", 8);
      updateHud();
    }

    function step(dt) {
      if (!running || dead || won) return;
      const frames = Math.min(2.5, dt / 16.67);

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

      // Input
      if (keys.left) {
        player.vx -= MOVE * frames * 2;
        player.facing = -1;
      }
      if (keys.right) {
        player.vx += MOVE * frames * 2;
        player.facing = 1;
      }
      player.vx *= Math.pow(FRICTION, frames);
      if (player.vx > MAX_RUN) player.vx = MAX_RUN;
      if (player.vx < -MAX_RUN) player.vx = -MAX_RUN;

      if (keys.jumpPressed && player.onGround) {
        player.vy = JUMP;
        player.onGround = false;
        keys.jumpPressed = false;
      }
      if (!keys.jump && player.vy < -4) {
        player.vy *= 0.85;
      }

      player.vy += GRAVITY * frames;
      if (player.vy > 12) player.vy = 12;

      // Horizontal move + collide
      player.x += player.vx * frames;
      if (rectHitsSolid(player.x, player.y, player.w, player.h)) {
        if (player.vx > 0) {
          player.x = Math.floor((player.x + player.w) / TILE) * TILE - player.w - 0.01;
        } else if (player.vx < 0) {
          player.x = Math.floor(player.x / TILE + 1) * TILE + 0.01;
        }
        player.vx = 0;
      }

      // Vertical
      player.y += player.vy * frames;
      player.onGround = false;
      if (rectHitsSolid(player.x, player.y, player.w, player.h)) {
        if (player.vy > 0) {
          player.y = Math.floor((player.y + player.h) / TILE) * TILE - player.h - 0.01;
          player.vy = 0;
          player.onGround = true;
        } else if (player.vy < 0) {
          player.y = Math.floor(player.y / TILE + 1) * TILE + 0.01;
          player.vy = 0;
          // bump ? blocks above
          const tx = Math.floor((player.x + player.w / 2) / TILE);
          const ty = Math.floor(player.y / TILE) - 0;
          blocks.forEach((b) => {
            if (!b.used && Math.floor(b.x / TILE) === tx && Math.floor(b.y / TILE) === ty) {
              bumpBlock(b);
            }
          });
          // also check head tile
          blocks.forEach((b) => {
            const bx = Math.floor(b.x / TILE);
            const by = Math.floor(b.y / TILE);
            if (
              !b.used &&
              player.x + player.w > b.x &&
              player.x < b.x + TILE &&
              player.y <= b.y + TILE &&
              player.y + 4 >= b.y
            ) {
              bumpBlock(b);
            }
          });
        }
      }

      if (player.y > mapH + 40) killPlayer();
      if (player.x < 0) player.x = 0;

      // Goal
      if (player.x + player.w >= flagX) {
        won = true;
        running = false;
        score += Math.floor(timeLeft) * 10;
        updateHud();
        overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "COURSE CLEAR!";
        overlay.querySelector(".mario-overlay-sub").textContent = "Score " + score;
        startBtn.textContent = "Play Again";
      }

      // Enemies
      enemies.forEach((e) => {
        if (e.dead) {
          if (e.squish > 0) e.squish--;
          return;
        }
        e.x += e.vx * frames;
        if (rectHitsSolid(e.x, e.y, e.w, e.h) || !rectHitsSolid(e.x + (e.vx > 0 ? e.w : -2), e.y + e.h + 2, 4, 4)) {
          // turn at wall or edge
          if (rectHitsSolid(e.x, e.y, e.w, e.h)) {
            e.x -= e.vx * frames;
            e.vx *= -1;
          } else if (!rectHitsSolid(e.x + e.w / 2, e.y + e.h + 2, 2, 4)) {
            e.vx *= -1;
          }
        }
        // collide player
        if (
          invuln <= 0 &&
          player.x < e.x + e.w &&
          player.x + player.w > e.x &&
          player.y < e.y + e.h &&
          player.y + player.h > e.y
        ) {
          if (player.vy > 0 && player.y + player.h - e.y < 16) {
            stompEnemy(e);
          } else {
            killPlayer();
          }
        }
      });

      // Coins
      coins.forEach((c) => {
        if (c.taken) return;
        c.phase += 0.15 * frames;
        if (
          player.x < c.x + c.w &&
          player.x + player.w > c.x &&
          player.y < c.y + c.h &&
          player.y + player.h > c.y
        ) {
          c.taken = true;
          coinCount++;
          score += 100;
          spawnParticles(c.x + 8, c.y + 8, "#fbbf24", 5);
          updateHud();
        }
      });

      blocks.forEach((b) => {
        if (b.bounce > 0) b.bounce -= frames;
      });

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.life--;
      });
      particles = particles.filter((p) => p.life > 0);

      // Camera
      const viewW = canvas.width / (window.devicePixelRatio > 1 ? Math.min(window.devicePixelRatio, 2) : 1);
      // canvas is CSS-scaled; use logical width stored
      const logicalW = canvas._lw || 480;
      cameraX = player.x - logicalW * 0.35;
      if (cameraX < 0) cameraX = 0;
      if (cameraX > mapW - logicalW) cameraX = Math.max(0, mapW - logicalW);

      player.anim += Math.abs(player.vx) * 0.15 * frames;
    }

    function drawSky(w, h) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#5c94fc");
      g.addColorStop(1, "#b0d0ff");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      // clouds
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      for (let i = 0; i < 6; i++) {
        const cx = ((i * 180 - cameraX * 0.3) % (w + 120)) - 40;
        const cy = 30 + (i % 3) * 28;
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.arc(cx + 22, cy + 4, 14, 0, Math.PI * 2);
        ctx.arc(cx - 18, cy + 6, 12, 0, Math.PI * 2);
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
        ctx.beginPath();
        ctx.moveTo(x, y + TILE / 2);
        ctx.lineTo(x + TILE, y + TILE / 2);
        ctx.moveTo(x + TILE / 2, y);
        ctx.lineTo(x + TILE / 2, y + TILE / 2);
        ctx.stroke();
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
      const blink = invuln > 0 && Math.floor(invuln / 3) % 2 === 0;
      if (blink) return;
      // body
      ctx.fillStyle = "#e52521";
      ctx.fillRect(x + 4, y + 10, 16, 12);
      // overalls
      ctx.fillStyle = "#0000f8";
      ctx.fillRect(x + 4, y + 18, 16, 10);
      // head
      ctx.fillStyle = "#f8c8a0";
      ctx.fillRect(x + 6, y + 2, 14, 12);
      // hat
      ctx.fillStyle = "#e52521";
      ctx.fillRect(x + 4, y, 18, 6);
      // eyes
      ctx.fillStyle = "#000";
      const eyeX = player.facing > 0 ? x + 14 : x + 8;
      ctx.fillRect(eyeX, y + 6, 3, 3);
      // feet
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(x + 4, y + 26, 7, 4);
      ctx.fillRect(x + 13, y + 26, 7, 4);
    }

    function draw(dt) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const stage = root.querySelector(".mario-stage");
      const cssW = Math.min(640, (stage && stage.clientWidth) || 480);
      const cssH = Math.min(400, Math.max(240, cssW * 0.66));
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas._lw = cssW;
      canvas._lh = cssH;

      drawSky(cssW, cssH);

      const t0 = Math.floor(cameraX / TILE);
      const t1 = Math.min(cols, t0 + Math.ceil(cssW / TILE) + 2);

      for (let y = 0; y < rows; y++) {
        for (let x = t0; x < t1; x++) {
          if (x < 0) continue;
          const ch = LEVEL_ROWS[y][x];
          if (ch === "." || ch === "C" || ch === "E" || ch === "S" || ch === "?") continue;
          drawTile(ch, x * TILE - cameraX, y * TILE);
        }
      }

      // ? blocks
      blocks.forEach((b) => {
        const bx = b.x - cameraX;
        const by = b.y - (b.bounce > 0 ? b.bounce : 0);
        ctx.fillStyle = b.used ? "#a0a0a0" : "#fc9838";
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.strokeStyle = "#8b3a0a";
        ctx.strokeRect(bx + 0.5, by + 0.5, TILE - 1, TILE - 1);
        if (!b.used) {
          ctx.fillStyle = "#fff";
          ctx.font = "bold 18px Tahoma,sans-serif";
          ctx.fillText("?", bx + 10, by + 22);
        }
      });

      coins.forEach((c) => {
        if (c.taken) return;
        const cx = c.x - cameraX + Math.sin(c.phase) * 0.5;
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.ellipse(cx + 8, c.y + 8, 6, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#f59e0b";
        ctx.fillRect(cx + 6, c.y + 4, 4, 10);
      });

      enemies.forEach((e) => {
        if (e.dead && e.squish <= 0) return;
        const ex = e.x - cameraX;
        const h = e.dead ? 12 : e.h;
        const ey = e.y + (e.dead ? e.h - h : 0);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(ex, ey, e.w, h);
        ctx.fillStyle = "#5a2d0c";
        ctx.fillRect(ex + 4, ey + 4, 8, 6);
        ctx.fillRect(ex + 16, ey + 4, 8, 6);
        if (!e.dead) {
          ctx.fillStyle = "#fff";
          ctx.fillRect(ex + 6, ey + 6, 4, 4);
          ctx.fillRect(ex + 18, ey + 6, 4, 4);
          ctx.fillStyle = "#000";
          ctx.fillRect(ex + 8, ey + 8, 2, 2);
          ctx.fillRect(ex + 20, ey + 8, 2, 2);
        }
      });

      drawPlayer();

      particles.forEach((p) => {
        ctx.globalAlpha = Math.max(0, p.life / 40);
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
      draw(dt);
    }

    function startGame() {
      resetLevel(startBtn.textContent.indexOf("Try") >= 0 || lives <= 0);
      if (lives <= 0) {
        lives = 3;
        score = 0;
        coinCount = 0;
      }
      running = true;
      dead = false;
      won = false;
      overlay.hidden = true;
      lastTs = 0;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
      updateHud();
    }

    startBtn.addEventListener("click", startGame);

    function onKey(e) {
      if (!root.isConnected) return;
      const k = e.key;
      if (k === "ArrowLeft" || k === "a" || k === "A") {
        keys.left = e.type === "keydown";
        e.preventDefault();
      } else if (k === "ArrowRight" || k === "d" || k === "D") {
        keys.right = e.type === "keydown";
        e.preventDefault();
      } else if (k === " " || k === "ArrowUp" || k === "w" || k === "W") {
        if (e.type === "keydown" && !e.repeat) keys.jumpPressed = true;
        keys.jump = e.type === "keydown";
        e.preventDefault();
      } else if (k === "Enter" && !running) {
        startGame();
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);

    root.querySelectorAll(".mario-dir, .mario-jump").forEach((btn) => {
      const dir = btn.getAttribute("data-dir");
      const set = (v) => {
        if (dir === "left") keys.left = v;
        if (dir === "right") keys.right = v;
        if (dir === "jump") {
          keys.jump = v;
          if (v) keys.jumpPressed = true;
        }
      };
      btn.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        if (!running) startGame();
        set(true);
      });
      btn.addEventListener("pointerup", () => set(false));
      btn.addEventListener("pointerleave", () => set(false));
      btn.addEventListener("pointercancel", () => set(false));
    });

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            if (!running) draw(0);
          })
        : null;
    if (ro) ro.observe(root);

    const mo = new MutationObserver(() => {
      if (!root.isConnected) {
        mo.disconnect();
        if (ro) ro.disconnect();
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("keyup", onKey);
        if (raf) cancelAnimationFrame(raf);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    resetLevel(true);
    setTimeout(() => draw(0), 40);
    return root;
  }

  global.buildMario = buildMario;
})(typeof window !== "undefined" ? window : globalThis);
