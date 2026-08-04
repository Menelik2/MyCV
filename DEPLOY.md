# Deploy to Vercel — Menelik Portfolio

**Reference live site:** https://menelikcv.vercel.app

This is a **static site** (`index.html` + assets). `vercel.json` already sets install/build/output so deploys are fast.

---

## Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (sign in with GitHub)
- The portfolio files (unzip `menelik-portfolio-full.zip` if needed)

---

## Method A — Dashboard (recommended, ~10 minutes)

### 1. Push code to GitHub

```bash
cd menelik-portfolio   # folder that contains index.html

git init
git add .
git commit -m "Menelik XP portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USER/YOUR_REPO` with your real path (example: `Menelik2/xp-portfolio`).

### 2. Import in Vercel

1. Open [vercel.com](https://vercel.com) → sign in with **GitHub**
2. **Add New… → Project**
3. **Import** the repo from step 1
4. Configure:

| Setting | Value |
|---------|--------|
| **Framework Preset** | **Other** |
| **Root Directory** | `.` (project root — where `index.html` is) |
| **Build Command** | leave empty / default (`vercel.json` overrides) |
| **Output Directory** | `.` |
| **Install Command** | default is fine (`npm install` for `@vercel/edge`) |

5. Click **Deploy**
6. Wait until status is **Ready**
7. Open the URL shown (e.g. `https://your-project.vercel.app`)

### 3. Update later

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel redeploys automatically on every push to `main`. Check **Deployments** in the dashboard.

---

## Method B — Vercel CLI

```bash
npm i -g vercel
cd menelik-portfolio
vercel login
vercel          # first deploy (preview)
vercel --prod   # production
```

Link the project when prompted. Env vars for CMS (below) can be set with `vercel env add`.

Optional GitHub Action: `.github/workflows/deploy-vercel.yml` (needs secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`). Prefer Method A unless you need CLI/Actions.

---

## Custom domain

1. Vercel project → **Settings → Domains**
2. Add your domain and follow DNS instructions
3. Optional: set the same domain in Decap OAuth callback URLs if you use `/admin/`

| URL | Use |
|-----|-----|
| `https://*.vercel.app` | Default production URL |
| Custom domain | Settings → Domains |

---

## Optional — Decap CMS (`/admin/`)

Only needed if you want to edit content in the browser on production.

### A. GitHub OAuth App

1. [GitHub → Settings → Developer settings → OAuth Apps → New](https://github.com/settings/developers)
2. Fields:

| Field | Value |
|-------|--------|
| Application name | Menelik Portfolio CMS |
| Homepage URL | `https://YOUR_VERCEL_URL` |
| Authorization callback URL | `https://YOUR_VERCEL_URL/api/callback` |

3. Copy **Client ID** and generate **Client Secret**



## Vercel environment variables (checklist)

Set these in **Vercel → your project → Settings → Environment Variables**.

| Name | Required? | Purpose |
|------|-----------|---------|
| `GITHUB_CLIENT_ID` | Yes (for `/admin/`) | GitHub OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | Yes (for `/admin/`) | GitHub OAuth App client secret |
| `OAUTH_REDIRECT_URI` | No | Override callback URL if it is not `https://<host>/api/callback` |
| `CSP_REPORT_WEBHOOK` | No | Optional webhook for CSP reports |

### Dashboard steps

1. Open [vercel.com/dashboard](https://vercel.com/dashboard) → select this project  
2. **Settings → Environment Variables**  
3. Add each variable:

| Key | Value | Environments |
|-----|--------|----------------|
| `GITHUB_CLIENT_ID` | from GitHub OAuth App | Production, Preview |
| `GITHUB_CLIENT_SECRET` | from GitHub OAuth App | Production, Preview |

4. **Save**  
5. **Deployments → … on latest → Redeploy** (env vars apply to new deployments)

### CLI alternative

```bash
vercel env add GITHUB_CLIENT_ID production
vercel env add GITHUB_CLIENT_SECRET production
vercel env add GITHUB_CLIENT_ID preview
vercel env add GITHUB_CLIENT_SECRET preview
vercel --prod
```

### GitHub OAuth App URLs

Use your real production host (example: `menelikcv.vercel.app`):

- **Homepage URL:** `https://menelikcv.vercel.app`  
- **Authorization callback URL:** `https://menelikcv.vercel.app/api/callback`  

If the callback URL does not match exactly, `/admin/` login will fail.

See also `.env.example` in the repo root.


### B. Vercel environment variables

Project → **Settings → Environment Variables** (Production):

| Name | Value |
|------|--------|
| `GITHUB_CLIENT_ID` | from OAuth app |
| `GITHUB_CLIENT_SECRET` | from OAuth app |

Optional:

| Name | Value |
|------|--------|
| `OAUTH_REDIRECT_URI` | only if callback is not on the same domain |
| `CSP_REPORT_WEBHOOK` | Discord/Slack webhook for CSP reports |

**Save → Redeploy** the latest deployment.

### C. Admin config

In `admin/config.yml`:

```yaml
local_backend: false

backend:
  name: github
  repo: YOUR_USER/YOUR_REPO
  branch: main
  base_url: https://YOUR_VERCEL_URL
  auth_endpoint: /api/auth
```

Commit, push, open `https://YOUR_VERCEL_URL/admin/` → **Login with GitHub**.

Your GitHub user needs **push** access to the repo.

---

## Local test (before deploy)

```bash
python3 -m http.server 3000
# or: npx serve .
# open http://localhost:3000
```

CMS local:

```bash
npx decap-server   # terminal 1
npx serve .        # terminal 2
# open http://localhost:3000/admin/
```

---

## What Vercel runs for this project

| Piece | Purpose |
|-------|---------|
| `vercel.json` | No real build; static output `.`; security headers; `/admin` rewrite |
| `middleware.js` | Edge: `/admin` redirect, CSP report-only, cache headers |
| `api/auth.js` | Decap → GitHub OAuth start |
| `api/callback.js` | OAuth token handshake for Decap |
| `api/csp-report.js` | CSP violation collector |
| `sw.js` + `manifest.webmanifest` | PWA offline shell (works on Vercel HTTPS) |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on site | Root must contain `index.html`; Framework = **Other**; Output = `.` |
| Deploy fails on npm | Ensure `package.json` is valid; allow install for `@vercel/edge` |
| Site looks old after push | Hard refresh (Ctrl+Shift+R); confirm latest Deployment is **Ready** |
| `/admin/` login fails | Callback URL must match OAuth app exactly; env vars set; redeploy |
| Images missing | Keep `profile.jpg`, `static/images/`, relative paths |
| PWA not installing | Site must be **HTTPS** (Vercel provides this); open once online so SW installs |
| Contact form does nothing useful | Replace `YOUR_FORM_ID` in `content/contact.json` with a Formspree id |

---

## Cache busting (so visitors see updates)

Asset URLs include a `?v=` query (see `index.html` → `window.__MENELIK_V__`).

**On every public deploy**, change the version string in **all** of these places to the same new value (e.g. `20260803d` or `6`):

1. `index.html` — `window.__MENELIK_V__ = "…"`
2. `index.html` — `styles.css?v=…`, `manifest…?v=…`, `script.js?v=…`, `features-extra.js?v=…`
3. Optional: bump `CACHE` in `sw.js` (`menelik-os-vN`) if the service worker itself changed

Content JSON is fetched as `content/*.json?v=<same>` from `script.js`.

## Checklist

- [ ] Folder has `index.html`, `styles.css`, `script.js`, `features-extra.js`
- [ ] Bumped `__MENELIK_V__` / `?v=` if you changed CSS, JS, or content
- [ ] Pushed to GitHub `main`
- [ ] Vercel project imported (Framework: **Other**)
- [ ] Deploy status = **Ready**
- [ ] Production URL opens the XP desktop
- [ ] (Optional) OAuth + env vars for `/admin/`
- [ ] (Optional) Custom domain
- [ ] (Optional) Formspree form id for Contact

© Menelik Admasu

---

## Build performance

This project is optimized for **near-instant Vercel deploys**:

| Setting | Effect |
|---------|--------|
| `framework: null` | No framework detection / toolchain |
| `installCommand: ":"` | Shell no-op — skips `npm install` entirely |
| `buildCommand: ":"` | Shell no-op — no compile step (static files only) |
| `outputDirectory: "."` | Publish project root as-is |
| `ignoreCommand` | Skips redeploy when only Markdown/docs change (≤256 chars) |
| `.vercelignore` | Omits docs, scripts, locks, zips, `.github` from upload |
| `middleware.js` | Zero-dependency Edge (no `@vercel/edge` package) |
| API functions | 128 MB memory, short `maxDuration` (3–8s) |

**Dashboard checklist (must match):**

| Field | Value |
|-------|--------|
| Framework Preset | **Other** |
| Root Directory | `.` |
| Install Command | `:` (or leave blank if overridden by `vercel.json`) |
| Build Command | `:` |
| Output Directory | `.` |

Expected deploy time is typically **a few seconds** after the git push is received.
