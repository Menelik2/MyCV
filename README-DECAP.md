# Decap CMS setup

Git-based content editing for this portfolio. Edit at **`/admin/`** after deploy.

## What was added

| Path | Role |
|------|------|
| `admin/index.html` | Decap CMS UI |
| `admin/config.yml` | Collections → `content/*.json` |
| `content/*.json` | About, Education, Experience, etc. |
| `content/sticky-note.json` | Desktop sticky note text |
| `static/images/` | Media uploads folder |

The site **loads JSON at runtime** (with fallback to built-in `CONTENT` in `script.js`).

## 1. Point config at your repo

Edit `admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USER/YOUR_REPO
  branch: main
```

## 2. Authentication (pick one)

### A) Netlify (easiest)

1. Deploy the site to Netlify  
2. **Site settings → Identity → Enable**  
3. **Identity → Services → Git Gateway → Enable**  
4. Invite yourself under Identity  
5. Optional: switch backend to `git-gateway` in `config.yml` (Netlify docs)

### B) GitHub backend + OAuth proxy

GitHub OAuth needs a small backend (Netlify Function, Cloudflare Worker, or [decap-cms-github-backend](https://github.com/njfamirm/decap-cms-github-backend)).

Without it, login at `/admin/` will fail on a plain static host.

### C) Local editing only

```yaml
# admin/config.yml
local_backend: true
backend:
  name: git-gateway
```

```bash
# terminal 1
npx decap-server

# terminal 2 — serve the site (any static server)
npx serve .
# open http://localhost:3000/admin/
```

## 3. Use the editor

1. Open `https://YOUR_SITE/admin/`  
2. Log in  
3. Edit a section → **Publish**  
4. Decap commits JSON to GitHub  
5. Refresh the live site (or wait for CI deploy)

## 4. Client-side admin still works

`#admin` / **Start → Admin Login** still edits via `localStorage` on this browser only.  
**Decap** is for **real Git-backed public updates**.

## Security note

Anyone who can open `/admin/` sees the CMS login. Protect the repo (private or trusted collaborators only). Do not put secrets in `config.yml`.
