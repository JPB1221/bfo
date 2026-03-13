# City of Holladay Demo — Design Ideas

<response>
<idea>
**Design Movement:** Institutional Modernism — clean civic authority with warm accessibility

**Core Principles:**
- Trust through structure: rigid grid, clear hierarchy, no ambiguity
- Warmth within formality: navy + amber accent avoids cold sterility
- Information density done right: data-rich without feeling cluttered
- Civic pride: subtle city branding woven throughout

**Color Philosophy:**
- Primary: Deep Navy `#1B2A4A` — authority, stability, government trust
- Accent: Amber Gold `#D4A017` — warmth, Utah desert, civic optimism
- Surface: Off-white `#F7F8FA` — clean, readable, professional
- Success: Sage green `#4A7C59` for approved/completed states
- Emotional intent: Feels like a well-run city hall, not a startup

**Layout Paradigm:**
- Left sidebar navigation (persistent, collapsible) for staff views
- Top banner with city seal area + page title for citizen portal
- Card-based content areas with clear section headers
- Asymmetric two-column layouts: narrow action panel + wide content

**Signature Elements:**
- Thin amber left-border accent on active sidebar items
- Subtle diagonal stripe pattern in hero areas (civic texture)
- Status badges with color-coded pill shapes

**Interaction Philosophy:**
- Hover states: gentle background shift, no dramatic transforms
- Active states: amber left border + slight background tint
- Form interactions: clear focus rings, inline validation

**Animation:**
- Fade-in on page load (200ms)
- Workflow timeline: steps animate in sequentially on scroll
- Dashboard counters: count-up animation on mount

**Typography System:**
- Display: `Merriweather` (serif) — institutional authority for headings
- Body: `Source Sans 3` — highly readable for government content
- Mono: system-ui for status codes/IDs
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Swiss International Style meets Digital Government

**Core Principles:**
- Grid discipline: everything on a strict 8px baseline grid
- Typography as UI: large, confident type does the visual work
- Functional color: color only carries meaning, never decoration
- Radical clarity: if it doesn't help the user, remove it

**Color Philosophy:**
- Primary: Steel Blue `#2563EB` — digital trust, clarity
- Neutral: Slate grays for all surfaces
- Accent: Coral `#E55B4D` — urgent actions only
- Emotional intent: Feels like a well-designed government app from a forward-thinking city

**Layout Paradigm:**
- Strict column grid with visible structure
- Sidebar + main content split at 240px / remaining
- Dense information tables with generous row height

**Signature Elements:**
- Bold rule lines as section dividers
- Uppercase tracking labels for all metadata
- Monospaced permit IDs and case numbers

**Interaction Philosophy:**
- No decorative hover — only functional state changes
- Keyboard-first navigation patterns

**Animation:**
- Minimal: only opacity transitions, 150ms max
- Workflow: instant step highlights, no scroll animation

**Typography System:**
- Display: `DM Sans` bold for headings
- Body: `DM Sans` regular
- Labels: uppercase with letter-spacing
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Warm Civic Modernism — approachable government tech

**Core Principles:**
- Human-centered: designed for residents, not bureaucrats
- Layered depth: cards with soft shadows create spatial hierarchy
- Color as wayfinding: each section has a distinct accent hue
- Confidence without intimidation: professional but not cold

**Color Philosophy:**
- Primary: Slate Blue `#1E3A5F` — deep, trustworthy navy
- Accent: Warm Amber `#F59E0B` — Utah warmth, action states
- Background: Warm gray `#F5F4F2` — feels like quality paper
- Card surfaces: Pure white with soft drop shadows
- Emotional intent: A city that cares about its residents' experience

**Layout Paradigm:**
- Citizen portal: centered content with max-width 900px, card-based service grid
- Staff dashboard: left sidebar 260px + main content area, widget grid
- Workflow: full-width vertical timeline with alternating content

**Signature Elements:**
- City seal/logo lockup in top-left on all pages
- Amber horizontal rule under page titles
- Status pills with icon + text (not just color)

**Interaction Philosophy:**
- Cards lift on hover (shadow deepens, 2px translate-y)
- Buttons have clear pressed states
- Timeline steps pulse when active

**Animation:**
- Page transitions: slide-in from right (200ms ease-out)
- Dashboard widgets: staggered fade-up on mount
- Timeline: draw-down animation for the connecting line

**Typography System:**
- Display: `Playfair Display` for portal hero title only
- Navigation/UI: `IBM Plex Sans` — technical clarity
- Body: `IBM Plex Sans` regular 16px
- Hierarchy: 32px title → 20px section → 16px body → 12px label
</idea>
<probability>0.09</probability>
</response>

## Selected Approach: Warm Civic Modernism

Chosen for its balance of approachability (citizen-facing) and authority (staff-facing). The slate blue + amber palette reads as professional government without being intimidating. IBM Plex Sans gives a technical, trustworthy feel appropriate for a municipal platform.
