# Decap CMS authentication (GitHub OAuth)

## Production URL
- Admin UI: https://menelikcv.vercel.app/admin/
- Auth start: https://menelikcv.vercel.app/api/auth
- Auth callback: https://menelikcv.vercel.app/api/callback

## One-time setup

### 1. GitHub OAuth App
1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
2. **Homepage URL:** `https://menelikcv.vercel.app`
3. **Authorization callback URL:** `https://menelikcv.vercel.app/api/callback`
4. Create → copy **Client ID** → generate **Client Secret**

### 2. Vercel environment variables
| Name | Value |
|------|--------|
| `GITHUB_CLIENT_ID` | OAuth Client ID |
| `GITHUB_CLIENT_SECRET` | OAuth Client Secret |

Environments: **Production** and **Preview**. Then **Redeploy**.

### 3. Repo access
- `admin/config.yml` → `repo: Menelik2/xp-portfolio` (branch `main`)
- Your GitHub user must be able to push to that repo (scope `repo`)
- The repo must exist on GitHub and contain the portfolio files

### 4. Login
1. Open https://menelikcv.vercel.app/admin/
2. Click **Login with GitHub**
3. Authorize the app
4. Edit content → **Publish** (commits to GitHub → Vercel redeploys)

## Local development (optional)
1. In `admin/config.yml` set `local_backend: true`
2. Terminal A: `npx decap-server`
3. Terminal B: `npx serve .`
4. Open http://localhost:3000/admin/

## Troubleshooting
| Symptom | Fix |
|---------|-----|
| “OAuth not configured” | Env vars missing → set + redeploy |
| Login popup errors | Callback URL must match OAuth App **exactly** |
| 404 on /api/auth | Deploy includes `api/auth.js` on Vercel |
| Can’t publish | GitHub token needs `repo` scope; check repo name in config.yml |
| Still on local_backend | Production config must have `local_backend: false` |
