# Bare Force One LLC

Secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.

**[bareforceone.com](https://bareforceone.com)**

---

## Overview

Bare Force One LLC delivers custom software, mobile applications, cloud architecture, and AI-powered automation solutions. We serve public sector agencies, enterprise organizations, and local businesses that require high-performance, security-first engineering.

- **UEI:** FJRRJ6JNJ375
- **Location:** Fort Lauderdale, Florida
- **Contact:** [contracts@bareforceone.com](mailto:contracts@bareforceone.com)

## Architecture

This site is a React single-page application with a FastAPI backend and MongoDB data layer.

- **Frontend:** React 18, React Router, Tailwind CSS, Framer Motion
- **Backend:** FastAPI (Python), Motor (async MongoDB driver)
- **Database:** MongoDB
- **Typography:** Barlow Condensed (headings), IBM Plex Sans (body), JetBrains Mono (data)
- **Design System:** Custom CSS design tokens, dark cinematic theme, scroll-reveal animations

## Project Structure

```
/app/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment configuration
├── frontend/
│   ├── public/                # Static assets (logo, favicon)
│   ├── src/
│   │   ├── components/        # Shared components (Navbar, Footer, Reveal, etc.)
│   │   ├── pages/             # Route pages (Home, Government, Enterprise, etc.)
│   │   ├── App.js             # Router configuration
│   │   ├── index.js           # Entry point
│   │   └── index.css          # Global styles + Tailwind
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── package.json           # Node dependencies
│   └── .env                   # Frontend environment
└── README.md
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — immersive hero, trust bar, audience cards, capabilities, case studies |
| `/government` | Public sector — security-first engineering, NIST-informed practices |
| `/enterprise` | Enterprise — digital transformation, automation, systems integration |
| `/local-business` | Local business — ROI-focused tools, mobile apps, automation |
| `/capabilities` | Full capabilities listing with differentiators |
| `/case-studies` | Structured case studies with quantified outcomes |
| `/about` | Company positioning and identity |
| `/contact` | Functional contact form with backend integration |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Service health check |
| POST | `/api/contact` | Submit contact form (validated) |
| GET | `/api/contacts` | Retrieve submitted contacts |

## License

© Bare Force One LLC. All rights reserved.
