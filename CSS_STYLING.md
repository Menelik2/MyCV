# CSS Styling Guide — Menelik OS Portfolio

Styles live in **`styles.css`** (~4.6k lines). The UI is a **Windows XP desktop** on large screens and an **iPhone-style** shell under ~900px. Themes use CSS variables; most components consume `var(--…)`.

---

## 1. Architecture

| Layer | Role |
|-------|------|
| **CSS variables** (`:root` / `body.light`) | Colors, gradients, surfaces |
| **Layout shells** | `.boot-screen`, `.desktop`, `.mobile`, `.taskbar` |
| **Window chrome** | `.window`, `.title-bar`, `.window-body` |
| **Portfolio content** | `.project-card`, `.skill-bar`, `.resume-doc`, … |
| **Apps** | `.notepad-app`, `.paint-app`, `.terminal-app`, `.vscode-app`, `.sol-app`, … |
| **Extras** | Gadgets, snap previews, high contrast, PWA fullscreen |

**Font stack:** `Tahoma, "Segoe UI", sans-serif` (OS chrome). Monospace apps use `Consolas, "Courier New", monospace`.

**Box model:** universal `box-sizing: border-box`; `html, body { height: 100%; overflow: hidden; }`.

---

## 2. Design tokens (CSS variables)

### Default = dark (`:root`)

| Variable | Typical use |
|----------|-------------|
| `--xp-blue` / `--xp-blue-dark` | Accent, title bars, links |
| `--xp-green` | Start button |
| `--xp-taskbar` | Taskbar background (gradient) |
| `--xp-start` | Start button background |
| `--xp-window-bg` | Window body surface |
| `--xp-title` | Title bar gradient |
| `--desktop-bg` | Desktop / wallpaper base |
| `--text` / `--text-muted` | Body and secondary text |
| `--card-bg` / `--border` / `--shadow` | Cards, panels, elevation |
| `--start-menu-bg` | Start menu panel |
| `--icon-label` | Desktop icon captions |
| `--taskbar-btn` | Taskbar button fill |
| `--iphone-*` / `--mobile-*` | Mobile shell |
| `--accent` | Mobile highlights |

### Light mode (`body.light`)

The same variable names are overridden toward classic XP blues/greens and light gray window chrome (`#f0f0f0`, `#ece9d8`).

**Toggle in UI:** Control Panel / theme button / `Ctrl+Shift+L` (sets `body.light` and persists `portfolio-theme` in `localStorage`).

### Icon metrics (optional)

| Variable | Set by |
|----------|--------|
| `--icon-img-size` | Registry / Control Panel icon size |
| `--icon-cell-w` / `--icon-cell-h` | Icon cell box |
| `--icon-gap-x` / `--icon-gap-y` | Desktop grid spacing |

Presets: `body[data-icon-desktop="small|medium|large|xlarge|custom"]`, `body[data-icon-spacing="tight|normal|comfortable|wide"]`.

### Wallpapers

```css
body[data-wallpaper="green"] .wallpaper { /* … */ }
body[data-wallpaper="sunset"] .wallpaper { /* … */ }
body[data-wallpaper="night"] .wallpaper { /* … */ }
```

Default wallpaper is a layered gradient on `.wallpaper` (dark theme adds extra radial washes).

---

## 3. Major layout regions

### Boot screen

```text
.boot-screen → .boot-inner
  .boot-logo | .boot-title | .boot-sub
  .boot-bar → .boot-bar-fill
  .boot-status | .boot-start-btn | .boot-hint
```

- Full viewport overlay until `.boot-done`, then removed by JS.
- `.desktop.boot-hidden` / `.mobile.boot-hidden` hide the OS until boot finishes.

### Desktop (width ≥ ~900px)

```text
#desktop.desktop
  .wallpaper
  .desktop-icons → .icon → .icon-img + span
  #windows-container → .window
  .sticky-notes
  #desktop-widgets (clock / lang / HC)
  #taskbar
  #start-menu
```

### Mobile (iPhone shell)

```text
#mobile.mobile
  .iphone-frame → .iphone-screen
    .status-bar | .home-screen / .app-page | .dock
```

Breakpoint: styles under `/* ========== MOBILE */` and related media queries; JS also treats ~900px as the desktop/mobile switch.

### Fullscreen / immersive

```css
html.os-fullscreen,
body.os-fullscreen { /* full bleed, no page chrome */ }
```

Applied after boot (native Fullscreen API and/or CSS fallback).

---

## 4. Window chrome

| Class | Purpose |
|-------|---------|
| `.window` | Floating window; `display: flex; flex-direction: column` |
| `.window.active` | Focused z-index / title bar emphasis |
| `.title-bar` | Draggable header; uses `--xp-title` |
| `.title-bar-controls` | Min / max / close buttons |
| `.window-body` | Scrollable content |
| `.window-body.no-pad` | Full-bleed apps (Paint, Terminal, …) |
| `.resize-handle` + `.resize-n/e/s/w/…` | Edge/corner resize hit targets |
| `.snap-preview` | Aero-style snap ghost |
| `.snap-left`, `.snap-right`, `.snap-third-*`, … | Snapped geometry |

**Open animation:** `.win-opening` / `.win-closing` / `.win-minimizing`.

**Default sizes:** set in JS (`APP_SIZES` / `CONTENT_SIZES`); CSS sets sensible `min-width` / app-specific defaults (e.g. `.window[data-id="vscode"]`).

---

## 5. Portfolio content patterns

Use these inside window HTML (`content/*.json` or `CONTENT` in JS):

| Class | Use |
|-------|-----|
| `.profile-row` / `.profile-pic` | About header + avatar |
| `.project-card` | Card with border, padding, hover |
| `.proj-header` / `.proj-badge` / `.proj-badge.live` | Title + status chip |
| `.proj-visual` / `.proj-svg` | SVG demo frame + animations |
| `.proj-actions` / `.proj-btn` / `.proj-btn.primary` | Buttons / links |
| `.proj-snippet` / `.proj-code` | Collapsible code block |
| `.tags` / `.tag` | Skill/project chips |
| `.skill-bar-wrap` / `.skill-bar` | Skill meter |
| `.skills-radar-wrap` / `.skills-radar` | Radar chart (extra features) |
| `.contact-form` | Form layout |
| `.resume-doc` / `.resume-section` / `.resume-toolbar` | Printable resume |
| `.case-study` / `.cert-gallery` / `.cert-tile` | Case studies & certs |
| `.resume-timeline` | Year filter UI |

**Syntax highlighting tokens** (in snippets): `.c-kw`, `.c-fn`, `.c-str`, `.c-num`, `.c-cm`, `.c-type`.

Prefer **variables** for colors:

```css
.my-panel {
  background: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--border);
}
```

---

## 6. App-specific skins

| App | Root class | Notes |
|-----|------------|--------|
| Notepad | `.notepad-app` | Toolbar + textarea; dark overrides |
| Paint | `.paint-app` / `.paint-pro` | Toolbar, canvas, status |
| Terminal | `.terminal-app` | Black background, green prompt |
| VS Code | `.vscode-app` / `.vscode-pro` | Activity bar, editor, status bar |
| IE | `.ie-app` | Toolbar + address bar |
| Media Player | `.wmp-app` | Dark player chrome |
| Control Panel | `.control-app` | Form rows / sections |
| Registry | `.registry-app` | Tree + values table |
| Blog / My Computer | `.blog-app` | Sidebar + main |
| Vector | `.vector-app` | Canvas + side list |

Icons for desktop/Start use classes like `.about-icon`, `.ie-icon` (gradient tile + `::after` SVG mask).

---

## 7. Taskbar & Start menu

- `.taskbar` — fixed bottom bar; background `var(--xp-taskbar)`
- `.start-btn` — green Start control
- `.task-btn` / `.task-btn.active` — open window buttons
- `.start-menu` — two-column XP menu (`.start-menu-left` / `.start-menu-right`)
- `.sm-icon` / `.sm-icon-right` — small icons in menu rows
- `.vd-pager` / `.vd-btn` — virtual desktop pager

---

## 8. Accessibility & motion

| Mechanism | How |
|-----------|-----|
| **High contrast** | `body.high-contrast` — stronger borders, yellow links, solid surfaces |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables project SVG animations |
| **Skip link** | `.skip-link` — visible on focus |
| **Focus** | Keep visible outlines on interactive controls when editing styles |

Do not remove `prefers-reduced-motion` rules when restyling animated previews (`.anim-poster`, `.anim-metric`, …).

---

## 9. How to customize safely

### Change brand colors

Edit the `:root` and `body.light` blocks at the top of `styles.css` only. Downstream rules already use `var(--xp-blue)`, `var(--text)`, etc.

### Add a new window skin

1. Add a root class on the app container in JS (e.g. `.my-app`).
2. Scope all rules under `.my-app` so they do not leak into other windows.
3. Respect `body:not(.light)` / `body.light` if you hard-code colors.

### Add a desktop icon style

```css
.my-feature-icon {
  background: linear-gradient(135deg, #…, #…);
}
.my-feature-icon::after {
  background-image: url("data:image/svg+xml,…");
}
```

### Dark mode for a new component

```css
.my-widget { background: var(--card-bg); color: var(--text); }
body:not(.light) .my-widget { /* only if you need extra contrast */ }
```

### Avoid

- Global `div { … }` or `p { color: … }` without a scope — will break XP chrome and mobile.
- Removing `overflow: hidden` on `body` without a plan (window drag relies on the OS shell).
- Absolute font sizes on mobile without testing the iPhone frame.

---

## 10. File map (where to look)

| Topic | Search in `styles.css` for |
|-------|----------------------------|
| Tokens | `CSS Variables & Theme` |
| Boot | `Boot screen` |
| Desktop / icons | `desktop-icons`, `IconWidth` |
| Windows / snap | `Advanced Window Management`, `snap-` |
| Taskbar / Start | `taskbar`, `start-menu` |
| Mobile | `MOBILE (iPhone` |
| Apps | `Notepad`, `Paint`, `Terminal`, `VS Code`, `Sudoku` |
| Resume / print | `Professional Resume`, `@media print` |
| Gadgets / HC | `Desktop widgets`, `high-contrast` |
| Project motion | `Project SVG preview animations` |

---

## 11. Quick reference — body state classes

| Class / attribute | Effect |
|-------------------|--------|
| `body.light` | Light XP theme |
| `body.high-contrast` | Accessibility palette |
| `body.os-fullscreen` / `html.os-fullscreen` | Immersive mode |
| `body[data-wallpaper="…"]` | Wallpaper preset |
| `body[data-icon-desktop="…"]` | Icon size preset |
| `body[data-icon-spacing="…"]` | Icon spacing preset |
| `body.split-resizing` | Cursor during linked snap resize |

---

## 12. Checklist for UI changes

- [ ] Uses `var(--…)` instead of one-off hex where possible  
- [ ] Looks correct in **dark** and **light**  
- [ ] Desktop **and** mobile (or explicitly desktop-only)  
- [ ] No regression on `.title-bar` drag targets  
- [ ] `prefers-reduced-motion` still honored for animations  
- [ ] High contrast still readable  

© Menelik Admasu — Menelik OS portfolio
