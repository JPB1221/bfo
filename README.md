# Bare Force One LLC — Website

Hugo-powered website for [bareforceone.com](https://bareforceone.com).

---

## 👀 How to Preview the Site

**All changes are pushed** and ready to review. Here's how to see them:

### Option 1 — Review the code on GitHub (right now)
- **View the PR:** [Pull Request #2](https://github.com/JPB1221/bfo/pull/2)
- **Browse the files:** Click the **Files changed** tab in the PR to see every change

### Option 2 — Go live on GitHub Pages (recommended)
Merge the PR and the site deploys automatically — see **"How to go live"** below.

### Option 3 — Run locally on your computer
```bash
# 1. Install Hugo: https://gohugo.io/installation/
# 2. Clone and run:
git clone https://github.com/JPB1221/bfo.git
cd bfo
git checkout copilot/ensure-site-functionality
hugo server
# 3. Open http://localhost:1313
```

---

## 🖼️ How to Upload Your Custom Logo

Drop your logo file into the `static/images/` folder. The site auto-detects the format:

| Format | What to do |
|--------|-----------|
| **PNG** (recommended) | Save your file as **`static/images/logo.png`** — the site will use it automatically |
| **SVG** | Replace **`static/images/logo.svg`** with your SVG file |

**How to upload via GitHub (no code needed):**
1. Go to the [`static/images/`](static/images/) folder in this repo
2. Click **Add file → Upload files**
3. Drag in your logo file named **`logo.png`** (or replace `logo.svg`)
4. Click **Commit changes**

The logo appears in the **top-left navigation bar** and the **footer**. It is displayed at 36x36px in the nav and 28x28px in the footer — a square or near-square logo works best. Transparent PNG backgrounds are ideal for the dark site theme.

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
| Enterprise | `content/enterprise/_index.md` |
| Local Business | `content/local-business/_index.md` |
| Case Studies | `content/case-studies/_index.md` |
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
│   ├── images/
│   │   └── logo.png      # ← YOUR LOGO GOES HERE (or logo.svg)
│   └── CNAME             # Custom domain
└── themes/ananke/        # Base theme (Tachyons CSS)
```

