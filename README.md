# sammucyo.com

Personal site, built with [Astro](https://astro.build) and deployed to GitHub
Pages by `.github/workflows/node.js.yml` on every push to `main`. Pull requests
get a build check but don't deploy.

## Getting Started

Requires Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
npm run check    # type-check .astro and .ts files
```

## Pages

| URL | Source | What it is |
|---|---|---|
| `/` | `src/pages/index.astro` | Full site: experience, projects, skills, contact |
| `/contacts/` | `src/pages/contacts.astro` | Short contact card with scheduling, linked from the full site |

Both pages share `src/layouts/Base.astro` (head, SEO tags, navbar, theme) and
`src/styles/global.css` (design tokens, buttons, chips, cards).

## Editing content

Content lives in `src/data/`, not in the components:

- `site.ts`: name, role, contact links, nav, hero and card text. Shared by both
  pages, so a link changed here changes everywhere.
- `experience.ts`, `projects.ts`, `skills.ts`: the sections of the full site.

Images in `src/assets/` are optimised at build time. Favicons and other files
served as-is live in `public/`.
