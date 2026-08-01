# Menelik Admasu — Portfolio

Interactive personal portfolio styled as **Windows XP** (desktop) and **iPhone Pro Max** (mobile).

**Live site:** [https://menelikcv.vercel.app](https://menelikcv.vercel.app)

---

## Project files

| `CSS_STYLING.md` | CSS variables, themes, component class guide |

| Path | Purpose |
|------|---------|
| `index.html` | Desktop + mobile shells |
| `styles.css` | XP / iOS styling |
| `script.js` | Windows, apps, content |
| `profile.jpg` / `profile.webp` | Avatar (root fallbacks) |
| `static/images/` | Optimized avatars + Decap media |
| `content/*.json` | Editable section content (Decap) |
| `admin/` | Decap CMS UI + config |
| `api/` | GitHub OAuth for Decap on Vercel |
| `vercel.json` | Headers, `/admin` routing |
| `scripts/optimize-images.mjs` | Sharp image optimization |

---

## Local preview

```bash
npx serve .
# or: npm run serve
```

Open **http://localhost:3000**  
Keep all files in the same folder so images and `content/` load correctly.

---

## Deploy to Vercel (recommended)

**Full guide:** [DEPLOY.md](DEPLOY.md)


Your production URL: **https://menelikcv.vercel.app**

### 1. Push the code to GitHub

```bash
git init
git add .
git commit -m "Menelik XP portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

### 2. Import the project in Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**
2. **Add New… → Project** → import your repo
3. Configure:

| Setting | Value |
|---------|--------|
| Framework Preset | **Other** |
| Root Directory | `.` (default) |
| Build Command | *empty* (or use `vercel.json` skip) |
| Output Directory | `.` |
| Install Command | *empty* |

`vercel.json` already skips install/build and sets cache headers. Deploys should finish in a few seconds.

4. Click **Deploy**

### 3. Confirm the domain

- Default: `https://your-project.vercel.app`
- Yours: **https://menelikcv.vercel.app**
- Optional custom domain: Project → **Settings → Domains**

### 4. Automatic deploys (Git integration)

After the first import:

- Every **push to `main`** → production deploy  
- Other branches / PRs → preview URLs  

Check **Deployments** in the Vercel dashboard after each push.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### 5. Environment variables (only if using Decap CMS)

Project → **Settings → Environment Variables**:

| Name | Value |
|------|--------|
| `GITHUB_CLIENT_ID` | From GitHub OAuth App |
| `GITHUB_CLIENT_SECRET` | From GitHub OAuth App |

Then **Redeploy** once.

---

## Decap CMS (edit content in the browser)

| Mode | URL | Notes |
|------|-----|--------|
| **Local** | http://localhost:3000/admin/ | `npx decap-server` + `npx serve .` |
| **Production** | https://menelikcv.vercel.app/admin/ | GitHub login required |

### Local CMS

```bash
# Terminal 1
npx decap-server

# Terminal 2
npx serve .
```

Open `/admin/` → edit → Publish (writes `content/*.json` on disk).

### Production CMS (Vercel + GitHub)

1. **GitHub OAuth App** → [Developer settings](https://github.com/settings/developers)  
   - Homepage: `https://menelikcv.vercel.app`  
   - Callback: `https://menelikcv.vercel.app/api/callback`
2. Set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in Vercel
3. In `admin/config.yml`:
   - `local_backend: false`
   - `repo: YOUR_USER/YOUR_REPO`
4. Open **https://menelikcv.vercel.app/admin/** → Login with GitHub → Publish

Full guide: [README-DECAP.md](README-DECAP.md)

---

## Optional: GitHub Pages

Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

1. Repo **Settings → Pages → Source: GitHub Actions**
2. Push to `main` (or run the workflow manually)

Note: Decap GitHub OAuth API routes (`/api/*`) are built for **Vercel**, not GitHub Pages.

---

## Edge Middleware

`middleware.js` runs on Vercel Edge for:

- `/admin` → `/admin/` redirect
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, …)
- Cache rules for `/admin`, `/content`, `/api`

No extra dashboard setup is required; deploy includes it automatically.

## Image optimization

```bash
npm install sharp --save-dev
npm run optimize:images
# or: node scripts/optimize-images.mjs path/to/photo.jpg
```

Outputs size variants (32–320px) as JPEG, WebP, and AVIF under `static/images/`.

---

## Features

- XP windows (drag, resize, snap, cascade/tile), taskbar, Start menu, virtual desktops  
- Notepad, Paint, Terminal, VS Code, Minesweeper  
- Right-click desktop menu · Log Off / Shut Down  
- About, Education, Experience, Certifications, Projects, Skills, Contact, Resume  
- Light / dark theme (**Ctrl+Shift+L**)  
- iPhone-style layout under ~900px  
- Decap CMS + optimized profile images  

---

## Quick checklist

- [ ] Code on GitHub  
- [ ] Vercel project imported (Framework: Other)  
- [ ] Site loads at https://menelikcv.vercel.app  
- [ ] (Optional) OAuth app + env vars for `/admin/`  
- [ ] Push to `main` to update the live site  

© Menelik Admasu
