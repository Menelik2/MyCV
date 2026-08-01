# Menelik OS — Feature pack (18+)

All of these ship in `features-extra.js`, `manifest.webmanifest`, and `sw.js`.

## Portfolio / career
1. **Contact form** — Formspree-ready; until configured, Send uses mailto. Optional: `localStorage.setItem('menelik-formspree-id','xxxx')`.
2. **Project case studies** — Problem / approach / stack / outcome under Projects.
3. **Blog / My Computer** — Desktop icon + Start menu; posts, network links, download pack.
4. **Resume timeline** — Year slider filters career milestones in Resume.
5. **Download pack** — Resume PDF, vCard, content JSON export from My Computer → Shared Downloads.

## XP authenticity
6. **Internet Explorer** — Address bar browses `menelik://` sections and external demos.
7. **Windows Media Player** — Synthetic XP-style startup / theme tones (Web Audio).
8. **Solitaire** — Playable Klondike-style game.
9. **Easter egg dialogs** — Double-click empty Recycle Bin.
10. **Startup sound** — Synthesized chime on boot (`playXpStartupSound` in `script.js`).
11. **Desktop gadgets** — Clock, language toggle, high-contrast toggle.

## Technical polish
12. **PWA** — `manifest.webmanifest` + `sw.js` (installable / offline shell).
13. **Help & Support (F1)** — Keyboard shortcuts and tips.
14. **Persistent desktop** — Theme, language, and open window geometry in `localStorage`.
15. **Accessibility** — Skip link, high contrast, reduced-motion respect for project SVGs.
16. **i18n** — English / Amharic desktop icon labels (gadget button).

## Content growth
17. **Testimonials** — Message-style cards window.
18. **Certifications gallery** — Clickable cert tiles + dialog.
19. **Skills radar** — SVG radar chart above skill bars.
20. **GitHub Activity** — Live public events when online; cached highlights offline.

## How to try
```bash
python3 -m http.server 3000
# open http://localhost:3000 — click through boot, then Start menu apps
```
