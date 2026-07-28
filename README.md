# Menelik Admasu — Portfolio

Interactive personal portfolio styled as **Windows XP** (desktop) and **iPhone Pro Max** (mobile).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Structure (desktop + mobile shells) |
| `styles.css` | XP / iOS styling |
| `script.js` | Windows, apps, content data |
| `profile.jpg` | Avatar (optimized JPEG, ~23 KB) |
| `profile.webp` | Avatar (WebP, ~18 KB) |

## Local preview

Open `index.html` in a browser, or:

```bash
npx serve .
```

Keep all files in the same folder so the profile photo loads.

---

## Deploy with GitHub Actions → GitHub Pages

### 1. Create / push the repo

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/xp-portfolio.git
git push -u origin main
```

### 2. Enable Pages

1. Repo **Settings → Pages**
2. **Source:** GitHub Actions  
   (not “Deploy from a branch”)

### 3. Run the workflow

- Push to `main` / `master` / `root`, **or**
- **Actions → Deploy to GitHub Pages → Run workflow**

Site URL:

```
https://YOUR_USERNAME.github.io/xp-portfolio/
```

(If the repo is named `YOUR_USERNAME.github.io`, the site is at the root domain.)

Workflow file: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

---

## Deploy to Vercel (optional)

**Easiest:** import the repo at [vercel.com/new](https://vercel.com/new) — no Action required.

**Via Actions:** add secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, then use [`.github/workflows/deploy-vercel.yml`](.github/workflows/deploy-vercel.yml).

---

## Features

- Draggable / resizable XP windows, taskbar, Start menu, virtual desktops  
- Notepad, Paint, Terminal, VS Code mock apps  
- About, Education, Experience, Certifications, Projects, Skills, Contact, Resume  
- Light / dark theme toggle  
- Responsive iPhone-style layout under ~900px  

© Menelik Admasu
