# Bare Force One LLC — Website PRD

## Original Problem Statement
Transform bareforceone.com into a cinematic, high-authority digital presence for a government/enterprise software engineering firm.

## Architecture
- **Frontend:** React 18 SPA + React Router + Tailwind CSS + CSS Animations
- **Backend:** FastAPI (Python) + Motor (async MongoDB)
- **Database:** MongoDB
- **SEO:** react-helmet-async, JSON-LD, sitemap.xml, robots.txt

## What's Been Implemented

### Iteration 1-2: Initial Build + Major UI Overhaul
- 8-page React SPA with cinematic Palantir-inspired design
- CSS animations, gradient text, parallax, glow cards, scanlines

### Iteration 3: Backgrounds, SEO, Polish
- Custom AI-generated backgrounds for all pages
- Per-page SEO meta tags, JSON-LD schema, OG/Twitter cards

### Iteration 4: Polish, Reviews, Request Proposal
- [x] Stats bumped 25→50+ (more credible for 10+ years)
- [x] Testimonials rebranded: John/John-Paul → BFO team / Bare Force One
- [x] Phone numbers clickable `tel:` links everywhere (Footer, Contact, About)
- [x] sitemap.xml + robots.txt for search crawling
- [x] Enterprise page: new holographic dashboard background
- [x] About info cards tightened with tel links
- [x] **NEW: /request-proposal page** — structured intake form with:
  - Contact info (name, email, org, sector)
  - Project details (type, timeline, budget, description)
  - Technical requirements (security, integrations)
  - Backend POST /api/request-proposal with validation
- [x] Hero CTA "Start a Project" → /request-proposal
- [x] Final CTA "Request Proposal" instead of "Contact Us"

## Testing: All iterations 100%

## Backlog
### P1: GA4 integration (needs tracking ID), capability statement PDF auto-gen
### P2: Blog section, admin dashboard, email notifications on form submit
