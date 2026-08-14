# Decap CMS on Vercel + GitHub

Edit portfolio content at **`/admin/`**. Saves commit to your GitHub repo.

| Mode | Auth | When |
|------|------|------|
| **Local** | `decap-server` (no login) | Development |
| **Vercel** | GitHub OAuth (`/api/auth`) | Production |

---

## 1. Local editing

`admin/config.yml` already has `local_backend: true`.

```bash
npx decap-server    # terminal 1 — writes content/*.json on disk
npx serve .         # terminal 2
```

Open **http://localhost:3000/admin/** → edit → Publish.

---

## 2. Vercel production setup

### A. GitHub OAuth App

1. Open [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers)
2. **New OAuth App**
   - **Application name:** Menelik Portfolio CMS
   - **Homepage URL:** `https://menelik.webhop.me`
   - **Authorization callback URL:** `https://menelik.webhop.me/api/callback`
3. Create → copy **Client ID** → generate **Client Secret**

### B. Vercel project

1. Import the GitHub repo in [vercel.com](https://vercel.com)
2. Framework preset: **Other**
3. Root directory: project root (where `index.html` is)
4. **Settings → Environment Variables** add:

| Name | Value |
|------|--------|
| `GITHUB_CLIENT_ID` | from OAuth app |
| `GITHUB_CLIENT_SECRET` | from OAuth app |

5. Deploy (or redeploy after adding env vars)

### C. Config for production

In `admin/config.yml`:

```yaml
local_backend: false   # important on Vercel

backend:
  name: github
  repo: YOUR_USER/YOUR_REPO   # e.g. Menelik2/MyCV
  branch: main
  base_url: https://menelik.webhop.me
  auth_endpoint: /api/auth
```

Commit, push, wait for deploy.

### D. Edit content

1. Open `https://menelik.webhop.me/admin/`
2. **Login with GitHub**
3. Edit section → **Publish** (commits to the repo)
4. Vercel redeploys → hard-refresh the site

Your GitHub user needs **push access** to the repo.

---

## Files (Vercel)

```text
api/auth.js         → redirects to GitHub login
api/callback.js     → returns token to Decap
admin/index.html    → CMS UI
admin/config.yml    → backend + collections
content/*.json      → editable content
vercel.json         → headers / admin URL
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Login popup errors | Callback URL must match OAuth app exactly |
| 500 on `/api/auth` | Set `GITHUB_CLIENT_ID` in Vercel env |
| Token error | Check `GITHUB_CLIENT_SECRET`; redeploy |
| Can’t publish | Repo name wrong, or no write access on GitHub |
| Local publish fails | Run `npx decap-server` and use localhost |
| Old content | Hard refresh; confirm commit on GitHub |

---

## Note on Netlify

This project targets **Vercel**. Netlify Identity / Git Gateway is not required.
