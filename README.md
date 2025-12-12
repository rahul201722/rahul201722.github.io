# Rahul Ranjan — Homepage (Vite + React + Bun)

A single-page personal site built with React 19, Vite 5, and Bun. Content is data-driven from one file (`src/content.js`) for quick edits (tabs, highlights, updates, tech stack, education, publications, projects, contact, and architecture figures). Assets (profile + CVs + paper figures) live in `public/`.

## Requirements
- Bun ≥ 1.3 (tested with 1.3.4)

## Scripts
- `bun run dev` — start dev server (defaults to port 5173; use `-- --host --port 4173` if needed).
- `bun run build` — production build to `dist/`.
- `bun run preview` — preview the built site locally.

## Deploy (GitHub Pages)

### Current Setup (Direct Deployment)
The built site assets are committed directly to the root of the `main` branch. GitHub Pages will serve the site automatically from the root directory without requiring any configuration.

To update the site:
1. Make changes to `src/content.js` or other source files
2. Run `npm run build` (or `bun run build`)
3. Copy the contents of `dist/` to the repository root: `cp -r dist/* .`
4. Commit and push changes to `main`

### Alternative Setup (Using gh-pages Branch)
For a cleaner separation of source and built files:
1. Push to `main`. The workflow `.github/workflows/vite.yml` builds and publishes `dist` to the `gh-pages` branch
2. In your repository settings, set GitHub Pages source to deploy from the `gh-pages` branch
3. Updates will be automatically built and deployed when you push to `main`

## Structure
- `src/content.js` — the only file you edit for text/data (nav labels, highlights, updates, tech stack, education, publications, experience, projects, contact, and figure paths).
- `src/App.jsx` — renders tabs, cards, expandable projects.
- `src/styles.css` — layout/theme (sidebar + tabs, color accents, hover states).
- `public/` — static assets served as-is (`profile.jpg`, `cv_ml.pdf`, `cv_phd_research.pdf`, `paper_1_architecture.jpg`, `paper_2_architecture.jpg`).
- `dist/` — build output (generated).
- `.github/workflows/vite.yml` — CI/CD for Pages.

## Notes
- Projects use in-page “Read more” expanders; no outbound links needed—add detail bullets in `src/content.js`.
- Architecture figures display from `public/paper_1_architecture.jpg` and `public/paper_2_architecture.jpg`; update paths/captions in `src/content.js`.
- If the dev server fails to write temp files (sandboxed environments), run with elevated permissions or set `TMPDIR` to a writable location.
