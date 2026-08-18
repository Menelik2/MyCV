/**
 * Super Mario — launches the full game from https://supermarioplay.com/
 * (Site blocks iframes with X-Frame-Options: SAMEORIGIN, so we open it in Microsoft Edge.)
 * Includes optional offline mini level as a fallback.
 */
(function (global) {
  "use strict";

  var MARIO_URL = "https://supermarioplay.com/";
  var MARIO_FULLSCREEN = "https://supermarioplay.com/fullscreen";

  function openMarioSite(preferFullscreen) {
    var url = preferFullscreen ? MARIO_FULLSCREEN : MARIO_URL;
    try {
      if (typeof global.openInEdge === "function") {
        global.openInEdge(url);
        return true;
      }
    } catch (_) {}
    try {
      global.open(url, "_blank", "noopener,noreferrer");
      return true;
    } catch (_) {}
    return false;
  }

  function buildMiniMario() {
    /* Compact offline fallback — full vertical view */
    var TILE = 32;
    var GRAVITY = 0.52;
    var MOVE_ACC = 0.55;
    var MAX_RUN = 4.0;
    var JUMP_V = -10.8;
    var FRICTION = 0.8;

    var root = document.createElement("div");
    root.className = "mario-app mario-mini";
    root.innerHTML =
      '<div class="mario-hud"><span>MINI <b data-m-score>0</b></span><span>LIVES <b data-m-lives>3</b></span>' +
      '<button type="button" class="mario-btn-sm" data-m-full>Full game ↗</button></div>' +
      '<div class="mario-stage"><canvas class="mario-canvas" width="480" height="448"></canvas>' +
      '<div class="mario-overlay" data-m-overlay><div class="mario-overlay-title">MINI MARIO</div>' +
      '<button type="button" class="mario-btn" data-m-start>Start</button></div></div>' +
      '<div class="mario-pad"><div class="mario-pad-left">' +
      '<button type="button" class="mario-dir" data-dir="left">◀</button>' +
      '<button type="button" class="mario-dir" data-dir="right">▶</button></div>' +
      '<button type="button" class="mario-jump" data-dir="jump">A</button></div>';

    var canvas = root.querySelector(".mario-canvas");
    var ctx = canvas.getContext("2d");
    var overlay = root.querySelector("[data-m-overlay]");
    var startBtn = root.querySelector("[data-m-start]");
    var elScore = root.querySelector("[data-m-score]");
    var elLives = root.querySelector("[data-m-lives]");
    root.querySelector("[data-m-full]").addEventListener("click", function () {
      openMarioSite(true);
    });

    var LEVEL = [
      "........................................",
      "........................................",
      "..............C.........................",
      ".........?..............................",
      "....##......##..........................",
      "................E...........E...........",
      "######...P....######...####.....########",
      "######........######...####.....########",
      "######FFF.....######...####.....########",
    ];
    var rows = LEVEL.length;
    var cols = LEVEL[0].length;
    var mapW = cols * TILE;
    var mapH = rows * TILE;
    var keys = { left: false, right: false, jump: false };
    var player, enemies, coins, blocks, cameraX = 0, score = 0, lives = 3, running = false, raf = 0, lastTs = 0, invuln = 0, flagX = mapW - 64;
    var logicalW = 480, logicalH = mapH;

    function solidAt(tx, ty) {
      if (ty < 0) return false;
      if (tx < 0 || tx >= cols || ty >= rows) return true;
      var ch = LEVEL[ty][tx];
      return ch === "#" || ch === "P" || ch === "F";
    }
    function hits(x, y, w, h) {
      var x0 = Math.floor(x / TILE), x1 = Math.floor((x + w - 0.01) / TILE);
      var y0 = Math.floor(y / TILE), y1 = Math.floor((y + h - 0.01) / TILE);
      for (var ty = y0; ty <= y1; ty++) for (var tx = x0; tx <= x1; tx++) if (solidAt(tx, ty)) return true;
      return false;
    }
    function reset() {
      enemies = []; coins = []; blocks = [];
      var sx = 32, sy = 32;
      for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
        var ch = LEVEL[y][x], px = x * TILE, py = y * TILE;
        if (ch === "E") enemies.push({ x: px, y: py + 4, w: 28, h: 28, vx: -0.7, dead: false });
        if (ch === "C") coins.push({ x: px + 8, y: py + 8, w: 16, h: 16, taken: false });
        if (ch === "?") blocks.push({ x: px, y: py, used: false });
        if (ch === "F") flagX = px;
      }
      player = { x: sx, y: sy, w: 24, h: 28, vx: 0, vy: 0, onGround: false, facing: 1 };
      cameraX = 0; invuln = 0;
      elScore.textContent = String(score); elLives.textContent = String(lives);
      draw();
    }
    function resize() {
      var stage = root.querySelector(".mario-stage");
      var sw = Math.max(1, stage.clientWidth || 480), sh = Math.max(1, stage.clientHeight || 300);
      logicalH = mapH;
      logicalW = Math.max(320, Math.min(720, Math.round(mapH * (sw / sh))));
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(logicalW * dpr);
      canvas.height = Math.floor(logicalH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var scale = Math.min(sw / logicalW, sh / logicalH);
      canvas.style.width = Math.floor(logicalW * scale) + "px";
      canvas.style.height = Math.floor(logicalH * scale) + "px";
    }
    function step(dt) {
      if (!running) return;
      var f = Math.min(2.2, dt / 16.67);
      if (invuln > 0) invuln--;
      if (keys.left) { player.vx -= MOVE_ACC * f; player.facing = -1; }
      else if (keys.right) { player.vx += MOVE_ACC * f; player.facing = 1; }
      else player.vx *= Math.pow(FRICTION, f);
      player.vx = Math.max(-MAX_RUN, Math.min(MAX_RUN, player.vx));
      if (keys.jump && player.onGround) { player.vy = JUMP_V; player.onGround = false; keys.jump = false; }
      player.vy += GRAVITY * f;
      if (player.vy > 11) player.vy = 11;
      player.x += player.vx * f;
      if (hits(player.x, player.y, player.w, player.h)) {
        if (player.vx > 0) player.x = Math.floor((player.x + player.w) / TILE) * TILE - player.w - 0.01;
        else player.x = Math.floor(player.x / TILE + 1) * TILE + 0.01;
        player.vx = 0;
      }
      player.y += player.vy * f; player.onGround = false;
      if (hits(player.x, player.y, player.w, player.h)) {
        if (player.vy >= 0) {
          player.y = Math.floor((player.y + player.h) / TILE) * TILE - player.h - 0.01;
          player.vy = 0; player.onGround = true;
        } else {
          player.y = Math.floor(player.y / TILE + 1) * TILE + 0.01; player.vy = 0;
          blocks.forEach(function (b) {
            if (!b.used && player.x < b.x + TILE && player.x + player.w > b.x && player.y <= b.y + TILE) {
              b.used = true; score += 200; elScore.textContent = String(score);
            }
          });
        }
      }
      if (player.y > mapH + 40) {
        lives--; elLives.textContent = String(lives);
        if (lives <= 0) { running = false; overlay.hidden = false; }
        else { player.x = 32; player.y = 32; player.vx = player.vy = 0; invuln = 60; }
      }
      if (player.x + player.w >= flagX) {
        running = false; overlay.hidden = false;
        overlay.querySelector(".mario-overlay-title").textContent = "CLEAR!";
        startBtn.textContent = "Again";
      }
      enemies.forEach(function (e) {
        if (e.dead) return;
        e.x += e.vx * f;
        if (hits(e.x, e.y, e.w, e.h)) { e.x -= e.vx * f; e.vx *= -1; }
        if (invuln <= 0 && player.x < e.x + e.w && player.x + player.w > e.x && player.y < e.y + e.h && player.y + player.h > e.y) {
          if (player.vy > 0.4) { e.dead = true; player.vy = JUMP_V * 0.5; score += 100; elScore.textContent = String(score); }
          else {
            lives--; elLives.textContent = String(lives); invuln = 80;
            if (lives <= 0) { running = false; overlay.hidden = false; }
          }
        }
      });
      coins.forEach(function (c) {
        if (c.taken) return;
        if (player.x < c.x + c.w && player.x + player.w > c.x && player.y < c.y + c.h && player.y + player.h > c.y) {
          c.taken = true; score += 100; elScore.textContent = String(score);
        }
      });
      cameraX = Math.max(0, Math.min(mapW - logicalW, player.x - logicalW * 0.35));
    }
    function draw() {
      resize();
      var g = ctx.createLinearGradient(0, 0, 0, logicalH);
      g.addColorStop(0, "#5c94fc"); g.addColorStop(1, "#b0d0ff");
      ctx.fillStyle = g; ctx.fillRect(0, 0, logicalW, logicalH);
      for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
        var ch = LEVEL[y][x], dx = x * TILE - cameraX, dy = y * TILE;
        if (ch === "#" ) { ctx.fillStyle = "#c84c0c"; ctx.fillRect(dx, dy, TILE, TILE); ctx.fillStyle = "#fc9838"; ctx.fillRect(dx+2, dy+2, TILE-4, TILE-4); }
        if (ch === "P") { ctx.fillStyle = "#00a800"; ctx.fillRect(dx, dy+8, TILE, TILE-8); ctx.fillStyle = "#00d800"; ctx.fillRect(dx-4, dy, TILE+8, 12); }
        if (ch === "F") { ctx.fillStyle = "#00a800"; ctx.fillRect(dx+14, dy-TILE*2, 4, TILE*3); }
      }
      blocks.forEach(function (b) {
        ctx.fillStyle = b.used ? "#aaa" : "#fc9838";
        ctx.fillRect(b.x - cameraX, b.y, TILE, TILE);
      });
      coins.forEach(function (c) {
        if (c.taken) return;
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath(); ctx.ellipse(c.x - cameraX + 8, c.y + 8, 6, 8, 0, 0, Math.PI * 2); ctx.fill();
      });
      enemies.forEach(function (e) {
        if (e.dead) return;
        ctx.fillStyle = "#8B4513"; ctx.fillRect(e.x - cameraX, e.y, e.w, e.h);
      });
      if (!(invuln > 0 && Math.floor(invuln / 3) % 2 === 0)) {
        var px = player.x - cameraX, py = player.y;
        ctx.fillStyle = "#e52521"; ctx.fillRect(px+4, py+10, 16, 12);
        ctx.fillStyle = "#0000f8"; ctx.fillRect(px+4, py+18, 16, 10);
        ctx.fillStyle = "#f8c8a0"; ctx.fillRect(px+6, py+2, 14, 12);
        ctx.fillStyle = "#e52521"; ctx.fillRect(px+4, py, 18, 6);
      }
    }
    function loop(ts) {
      raf = requestAnimationFrame(loop);
      if (!lastTs) lastTs = ts;
      var dt = Math.min(40, ts - lastTs); lastTs = ts;
      step(dt); draw();
    }
    startBtn.addEventListener("click", function () {
      if (lives <= 0) { lives = 3; score = 0; }
      reset(); running = true; overlay.hidden = true; lastTs = 0;
      if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
    });
    function onKey(e) {
      var d = e.type === "keydown";
      if (e.key === "ArrowLeft" || e.key === "a") keys.left = d;
      if (e.key === "ArrowRight" || e.key === "d") keys.right = d;
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w") { if (d) keys.jump = true; e.preventDefault(); }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    root.querySelectorAll("[data-dir]").forEach(function (btn) {
      var dir = btn.getAttribute("data-dir");
      btn.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        if (!running) startBtn.click();
        if (dir === "left") keys.left = true;
        if (dir === "right") keys.right = true;
        if (dir === "jump") keys.jump = true;
      });
      btn.addEventListener("pointerup", function () {
        if (dir === "left") keys.left = false;
        if (dir === "right") keys.right = false;
        if (dir === "jump") keys.jump = false;
      });
    });
    reset();
    return root;
  }

  function buildMario() {
    var root = document.createElement("div");
    root.className = "mario-app mario-launcher";
    root.innerHTML =
      '<div class="mario-launch-hero">' +
      '  <div class="mario-launch-badge">SUPER MARIO</div>' +
      '  <p class="mario-launch-desc">Full Super Mario Bros experience from <strong>supermarioplay.com</strong> — 32 levels, sound, map select.</p>' +
      '  <div class="mario-launch-actions">' +
      '    <button type="button" class="mario-btn" data-play>Play full game</button>' +
      '    <button type="button" class="mario-btn mario-btn-secondary" data-play-fs>Fullscreen site</button>' +
      '  </div>' +
      '  <p class="mario-launch-hint">Opens inside <strong>Microsoft Edge</strong> on this desktop (site cannot be embedded in an iframe).</p>' +
      '  <ul class="mario-launch-controls">' +
      '    <li><kbd>←→</kbd> / <kbd>WASD</kbd> move</li>' +
      '    <li><kbd>Space</kbd> / <kbd>↑</kbd> jump</li>' +
      '    <li><kbd>Shift</kbd> sprint / fire · <kbd>P</kbd> pause · <kbd>M</kbd> mute</li>' +
      '  </ul>' +
      '  <button type="button" class="mario-linkish" data-mini>Play offline mini level</button>' +
      "</div>" +
      '<div class="mario-mini-host" hidden></div>';

    var miniHost = root.querySelector(".mario-mini-host");
    var hero = root.querySelector(".mario-launch-hero");

    root.querySelector("[data-play]").addEventListener("click", function () {
      openMarioSite(false);
    });
    root.querySelector("[data-play-fs]").addEventListener("click", function () {
      openMarioSite(true);
    });
    root.querySelector("[data-mini]").addEventListener("click", function () {
      hero.hidden = true;
      miniHost.hidden = false;
      miniHost.innerHTML = "";
      miniHost.appendChild(buildMiniMario());
    });

    // Auto-open full game once when Mario app launches (desktop Edge)
    setTimeout(function () {
      try {
        if (typeof global.openInEdge === "function" && window.innerWidth >= 900) {
          // Don't force-auto on every rebuild; only hint via UI. User clicks Play.
        }
      } catch (_) {}
    }, 50);

    return root;
  }

  global.buildMario = buildMario;
  global.openMarioSite = openMarioSite;
})(typeof window !== "undefined" ? window : globalThis);
