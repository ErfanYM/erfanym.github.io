# Personal Portfolio — Design Spec

Date: 2026-08-24
Repo: erfanym.github.io (deploys to GitHub Pages at that URL)

## Purpose

Personal portfolio site for Erfan YousefMoumji, separate from the resume-generator
repo (which stays scoped to job-application PDFs). Content sourced from
`bird_view.md` and `portfolio_inspiration/examples.md` in the resume-generator
repo (read-only reference, not copied in as a live dependency).

## Structure & Navigation

Single-page app, anchor-scrolled sections, slim persistent top nav (not a
full-viewport hero-only landing). Section order:

1. Home (hero)
2. About
3. Education
4. Experience
5. Projects
6. Contact

Skills are folded into the hero/about area as the tech-stack logo row, not a
standalone nav section.

## Visual System

**Palette** (Warm Editorial, toned down — not the "gradient blob showcase" energy
of a demo page):
- `--bg`: `#FAF6F1` (warm cream)
- `--ink`: `#241C16` (near-black warm)
- `--accent`: `#C4622D` (terracotta) — used sparingly: small marks, underlines,
  section labels, hover states. Not a dominant background element.
- `--muted`: `#8a7a6c`
- `--line`: `#e8ded2`

**Type**
- Display/headings: Fraunces (serif), restrained sizing — not oversized hero type
- Body/UI: Inter
- Dark mode: invert to near-black bg / warm cream ink, same accent, tuned for
  contrast — full token-based light/dark support (see impeccable skill audit
  pass before ship).

## Hero (Home)

Real headshot photo (not a decorative circle-blob). Landing feels confident and
intentional (Orlando-reference influence: a real "front door", not just a name
and title) but stays personal-portfolio in tone, not product-sales.

**Hover-swap interaction** (from inspiration #1 / Diya Shah): headshot has two
stacked `<img>` — real photo on top, the provided memoji-style cartoon avatar
absolutely positioned beneath — cross-fade on hover (`:hover` desktop, tap-toggle
via `useState` fallback on mobile/touch), soft glow container so the swap reads
as integrated, not a jump-cut.

## Tech Stack Display

Shown as actual recognizable logo icons in a row/grid (simple-icons or similar
SVG icon set), not text pills — direct pull from Orlando reference. Pruned to
genuinely strong skills from `bird_view.md`: Python, Java, JavaScript/TypeScript,
React, Spring Boot, PostgreSQL/MySQL, Docker, PySpark, SQL.

## Experience Section

Clean, minimal — Orlando-style restraint, not dense cards. Per entry: job title
bold (line 1), company italic (line 2) — matches the convention already
established in the resume repo's CLAUDE.md. 2–3 line impact bullets per role,
generous whitespace, no icons/clutter.

Roles (from bird_view.md):
- Robotics Software Engineer — MapleMind Academy (Aug 2025 – Feb 2026)
- Data Engineer Intern — PopIn (Jan 2025 – May 2025)

## Projects Section

Curated top 5–6 (not all 15 from bird_view.md), card grid with tags + GitHub
link per project:
1. Auction E-Commerce Platform
2. Amazon Co-Purchase Link Prediction
3. Databricks Medallion Data Platform
4. SQL Data Warehouse & Analytics Platform
5. Coverage-Driven Test Automation Framework
6. Turbo Detailing Booking API & Square Integration

Each card: title, one-line summary, tech tags, link out. No "view all 15" list —
GitHub profile link at the bottom covers the rest.

## Education

York University — Honours BSc Computer Science. Simple, not over-designed
(single entry, no need for a heavy section treatment).

## Contact

Email, LinkedIn, GitHub — simple, no contact form (avoids needing a backend).

## Stack & Deploy

- React + Vite + Tailwind CSS
- Deploy: GitHub Pages, repo `erfanym.github.io` (user site, deploys to root
  domain) via GitHub Actions (Vite build → Pages)
- Repo is fully separate from `resume-generator-main` — no shared branch, no
  cross-dependency at build time. `bird_view.md` / `portfolio_inspiration/`
  content is transcribed into this repo's own content files, not imported live.

## Out of Scope

- Skills-as-nav-section (folded into hero/about instead)
- Contact form / backend
- Blog / CMS
- Full 15-project listing (curated 6 only, rest via GitHub link)
- Live2D/mascot widget (rejected — too loud per inspiration #2 discussion)

## Open Items for Implementation Plan

- Exact SVG icon source for tech-stack logos (simple-icons via CDN vs bundled)
- Real headshot photo file — user to provide final asset before deploy
- GitHub Actions workflow for Pages deploy
