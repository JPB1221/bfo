# Bare Force One LLC — Website

Hugo-powered website for [bareforceone.com](https://bareforceone.com).

---

## ⚡ Is the site live right now?

**Not yet** — the changes are currently in a pull request (PR) and have not been merged to `main`. Once merged, the site deploys automatically within ~1 minute.

### How to go live — 3 steps, done once

**Step 1 — Enable GitHub Pages (one time, ~30 seconds)**
1. In this repo, go to **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Click **Save**

**Step 2 — Merge this PR**
Merge the open pull request into `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Install Hugo
- Build the site
- Deploy it to GitHub Pages

**Step 3 — (Optional) Add your custom domain**
In **Settings → Pages → Custom domain**, enter `bareforceone.com`.
Make sure your DNS has a CNAME record pointing `bareforceone.com` → `jpb1221.github.io`.

After the initial setup, **every future push to `main` deploys the site automatically** — no manual steps needed.

---

## Deployment

Once GitHub Pages is enabled and this PR is merged, every push to `main` automatically builds and deploys the site via `.github/workflows/deploy.yml`. No further configuration needed.

## Local Development

```bash
# Install Hugo (extended)
# https://gohugo.io/installation/

# Start local dev server
hugo server

# Open http://localhost:1313
```

## Content

All content is in the `content/` directory as Markdown files:

| Page | File |
|------|------|
| Home | `content/_index.md` |
| Capabilities | `content/capabilities/_index.md` |
| Government | `content/government/_index.md` |
| Commercial | `content/commercial/_index.md` |
| About | `content/about/_index.md` |
| Contact | `content/contact/_index.md` |
| Capability Statement | `content/capability-statement/_index.md` |

## Structure

```
.
├── config.toml           # Site configuration
├── content/              # Markdown content
├── layouts/              # Site-level template overrides
│   ├── _default/
│   ├── partials/
│   └── index.html        # Home page template
├── static/
│   ├── css/custom.css    # Custom styles
│   └── CNAME             # Custom domain
└── themes/ananke/        # Base theme (Tachyons CSS)
```

