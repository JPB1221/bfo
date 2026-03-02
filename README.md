# Bare Force One LLC

Mission-ready software development and digital transformation for government, enterprise, and growth-focused businesses.

**[bareforceone.com](https://bareforceone.com)**

---

## Overview

Bare Force One LLC delivers custom software, mobile applications, cloud architecture, and AI-powered automation solutions. We serve public sector agencies, enterprise organizations, and local businesses that require secure, scalable, and high-performance systems.

- **UEI:** FJRRJ6JNJ375
- **Location:** Fort Lauderdale, Florida
- **Contact:** [contracts@bareforceone.com](mailto:contracts@bareforceone.com)

## Technology

This site is built with [Hugo](https://gohugo.io), a high-performance static site generator. It uses the Ananke base theme with a fully custom design system layered on top.

- Static HTML — fast, secure, zero runtime dependencies
- Custom CSS design tokens and component system
- Mobile-first responsive layout
- GitHub Actions CI/CD pipeline for automated deployment

## Local Development

```bash
# Requires Hugo (extended edition)
# https://gohugo.io/installation/

git clone https://github.com/JPB1221/bfo.git
cd bfo
hugo server
# Open http://localhost:1313
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

**Initial setup (one time):**

1. Go to **Settings → Pages** in this repository
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Merge to `main` — the workflow handles the rest

**Custom domain (optional):**

Set `bareforceone.com` in **Settings → Pages → Custom domain** and configure a DNS CNAME record pointing to `jpb1221.github.io`.

## Project Structure

```
├── config.toml              # Site configuration
├── content/                 # Markdown content pages
│   ├── _index.md            # Home
│   ├── government/          # Government sector
│   ├── enterprise/          # Enterprise sector
│   ├── local-business/      # Local business sector
│   ├── capabilities/        # Core capabilities
│   ├── capability-statement/ # Capability statement
│   ├── case-studies/        # Case studies
│   ├── about/               # About
│   └── contact/             # Contact
├── layouts/                 # Hugo templates
│   ├── _default/            # Base and list templates
│   ├── partials/            # Reusable components
│   └── index.html           # Home page layout
├── static/
│   ├── css/custom.css       # Design system and styles
│   └── images/              # Logo and assets
└── themes/ananke/           # Base theme
```

## Logo

Place your logo file in `static/images/`:

| Format | File |
|--------|------|
| PNG | `static/images/logo.png` |
| SVG | `static/images/logo.svg` |

The site detects the format automatically. PNG takes priority if both exist. Square or near-square logos at transparent backgrounds work best against the dark theme.

## License

© Bare Force One LLC. All rights reserved.

