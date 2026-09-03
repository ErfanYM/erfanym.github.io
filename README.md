# erfanym.github.io

Personal portfolio site for **Erfan YousefMoumji** — a data engineer based in Toronto. It is a single-page React application that presents an intro, a set of work and project entries, an about section, and contact links. Live at **https://erfanym.github.io**.

## What this project is

A small, content-driven personal site with no CMS and no backend. Every piece of text on the page — jobs, projects, skills, education, bio — lives in typed TypeScript files under `src/content/`, and the components render whatever is in them. Updating the site means editing a data file, not hunting through JSX.

Design notes worth knowing if you are reading the code:

- **One row type for everything.** Jobs and projects both render through `WorkRow` from the same `WorkEntry` shape, so the Work section stays visually consistent and collapses/expands uniformly.
- **Metrics are highlighted at render time.** `src/lib/metrics.tsx` finds numeric tokens in bullet prose and wraps them, deliberately rejecting things that look numeric but aren't (`SHA256`, `MPU-6050`, `2-hop`). Content files stay free of markup.
- **Theme is a CSS-variable swap.** Light and dark palettes are defined as RGB channel triples in `src/index.css` and consumed through Tailwind's `<alpha-value>` colors. `ThemeToggle` flips a `.dark` class on the root.
- **Scroll spy without flicker.** `useActiveSection` observes a thin horizontal strip through the middle of the viewport, so exactly one section is ever "current" and the side rail never oscillates between two.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 (class-based dark mode) |
| Animation | `motion` |
| Hosting | GitHub Pages |

## Running it locally

Requires Node 20 or newer.

```bash
git clone https://github.com/ErfanYM/erfanym.github.io.git
cd erfanym.github.io
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check with `tsc -b`, then build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Project layout

```
src/
  App.tsx             Page shell: rail, main sections, footer
  main.tsx            React entry point
  index.css           Tailwind layers + light/dark CSS variables
  components/         Rail, Intro, Work, WorkRow, About, Contact,
                      HeadshotSwap, ThemeToggle, icons
  content/            All site copy as typed data
    profile.ts        Name, title, tagline, bio, contact links
    work.ts           Jobs
    projects.ts       Projects
    experience.ts     Additional experience
    education.ts      Schooling
    skills.ts         Grouped skill lists
    types.ts          WorkEntry, WorkGroup, SkillGroup
  hooks/
    useActiveSection.ts   Scroll-spy for the side rail
  lib/
    metrics.tsx       Render-time metric highlighting
  assets/             Headshot and emoji images
public/               favicon
docs/                 Design specs and implementation plans
```

## Editing the content

Most changes are one-file edits in `src/content/`:

- **Add a job or project** — append a `WorkEntry` to the relevant group in `work.ts` or `projects.ts`. Give it a stable kebab-case `id`, a `span` (or `null` for undated work), `stack` tags, and `bullets`. Write plain prose in the bullets; numbers get styled automatically.
- **Change the bio, tagline, or links** — edit `profile.ts`.
- **Change skills** — edit the groups in `skills.ts`.

Adjust colors, fonts, or spacing in `tailwind.config.js` and the CSS variables at the top of `src/index.css`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and can also be run manually via **workflow_dispatch**. The job installs with `npm ci`, runs `npm run build`, uploads `dist/` as a Pages artifact, and deploys it with `actions/deploy-pages`. Because this is a user site served from the domain root, `vite.config.ts` sets `base: '/'` — a project-site fork would need that changed to `/<repo-name>/`.

## Using this as a starting point

You're welcome to fork it. To make it yours: replace everything in `src/content/`, swap the images in `src/assets/` and `public/favicon.svg`, update the palette and fonts, and point the workflow at your own Pages target. The component layer has no hardcoded personal details — it reads from the content files.

## License

No license is currently declared, so default copyright applies. The code is here to read and learn from; ask before reusing the written content or images.
