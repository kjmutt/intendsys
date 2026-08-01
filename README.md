# intendsys

Corporate website for **IntendSys Technologies Private Limited** — the parent company behind [Trakolo](https://trakolo.com). Static HTML/CSS/JS, no build step, hosted on GitHub Pages.

## Pages

- `index.html` — home: hero, products, why IntendSys, industries, technology, vision
- `trakolo.html` — Trakolo product detail
- `about.html` — company, vision, careers, partners, investors, news
- `contact.html` — contact form (not wired to a backend yet — see the note on the page) and direct emails

All pages share `styles.css` and `nav.js`.

## Brand

- Logo mark: "The Node" — four independent arcs in radial balance around a solid center block. Full rationale and specimen sheet were designed separately; the mark here is the production SVG (inline, `currentColor`, no external asset).
- Palette: Deep Navy `#0F172A` (ink), Electric Blue `#2563EB` (primary accent), Emerald `#10B981` (secondary accent), light/dark themes via CSS custom properties.
- Type: General Sans (display) + Inter (body), loaded via Fontshare/Google Fonts — real font requests, since this is a deployed site rather than a sandboxed artifact.
- Dark mode: follows OS preference by default (`prefers-color-scheme`), overridable per-visitor via the header toggle (persisted in `localStorage`).

## Enabling the preview

Settings → Pages → **Source**: Deploy from a branch → `main` / `(root)` → Save. Requires the repo to be public for free-tier Pages.

## Content notes

- "Coming soon" products (AI Operations Platform, Enterprise Analytics, Automation Suite) are placeholders — no pages exist for them yet by design.
- Careers/Partners/Investors/News sections on `about.html` are real sections with real copy, but no live postings/documents yet — update them as those become real.
