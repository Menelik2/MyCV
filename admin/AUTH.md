# Configure GitHub OAuth secrets (Decap CMS admin)

Admin login at **https://menelikcv.vercel.app/admin/** uses GitHub OAuth.

You need **two secrets** in Vercel:

| Secret | Where it comes from |
|--------|---------------------|
| `GITHUB_CLIENT_ID` | GitHub OAuth App → Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App → Client secret |

Optional:

| Secret | Purpose |
|--------|---------|
| `OAUTH_REDIRECT_URI` | Override callback (default: `https://<your-domain>/api/callback`) |

---

## Step 1 — Create a GitHub OAuth App

1. Sign in to GitHub as the owner of **Menelik2/MyCV** (or an account with push access).
2. Open: [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)  
   (or org: `https://github.com/organizations/YOUR_ORG/settings/applications`)
3. Click **New OAuth App**.
4. Fill in:

   | Field | Value |
   |-------|--------|
   | **Application name** | Menelik Portfolio CMS |
   | **Homepage URL** | `https://menelikcv.vercel.app` |
   | **Application description** | (optional) Portfolio content admin |
   | **Authorization callback URL** | `https://menelikcv.vercel.app/api/callback` |

5. Click **Register application**.
6. Copy the **Client ID**.
7. Click **Generate a new client secret** → copy the **Client secret** once (GitHub will not show it again).

> Callback URL must match exactly:  
> `https://menelikcv.vercel.app/api/callback`  
> (no trailing slash, `https` only)

---

## Step 2 — Add secrets in Vercel

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your portfolio project.
2. Go to **Settings → Environment Variables**.
3. Add:

   | Name | Value | Environments |
   |------|--------|----------------|
   | `GITHUB_CLIENT_ID` | *(paste Client ID)* | Production (and Preview if you test previews) |
   | `GITHUB_CLIENT_SECRET` | *(paste Client secret)* | Production (and Preview if needed) |

4. **Save**.
5. **Redeploy** the project (Deployments → … → Redeploy).  
   Env vars apply only after a new deployment.

---

## Step 3 — Confirm admin login

1. Open **https://menelikcv.vercel.app/admin/**
2. Click **Open CMS login** (or use the Decap “Login with GitHub” button).
3. Authorize the OAuth app on GitHub.
4. You should return to the CMS and see **Portfolio sections** / content files.

### Quick API checks

- `https://menelikcv.vercel.app/api/auth`  
  → should **redirect** to GitHub (not an HTML error about missing `GITHUB_CLIENT_ID`).
- If you see **OAuth not configured**, the Vercel env vars are missing or the site was not redeployed.

---

## Repo access

- `admin/config.yml` uses repo: **`Menelik2/MyCV`**, branch **`main`**.
- The GitHub user who logs in must be able to **push** to that repo (so Decap can commit content changes).
- OAuth scope requested by the app: `repo` + `user:email`.

---

## Local development (no OAuth secrets)

1. In `admin/config.yml` set: `local_backend: true`
2. Terminal 1: `npx decap-server`
3. Terminal 2: `npx serve . -p 3000`
4. Open http://localhost:3000/admin/  
   (no GitHub login; writes to local `content/` files)

Remember to set `local_backend: false` again before production deploys.

---

## Security notes

- Never commit `GITHUB_CLIENT_SECRET` to the repo.
- Only store it in Vercel Environment Variables.
- If a secret is leaked: **GitHub OAuth App → Generate a new client secret**, update Vercel, revoke the old secret, redeploy.
