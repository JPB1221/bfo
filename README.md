# Bare Force One LLC — Website

Hugo-powered website for [bareforceone.com](https://bareforceone.com).

## Deployment

This site is automatically deployed to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To enable GitHub Pages for your repository:
1. Go to **Settings → Pages** in the GitHub repository
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will build and deploy the site automatically

For a custom domain (`bareforceone.com`), add your domain in **Settings → Pages → Custom domain**.

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

