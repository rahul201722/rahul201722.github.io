# Rahul Ranjan — Homepage (Vite + React + npm)

A single-page personal site built with React and Vite. Content is data-driven from one file (`src/content.js`) for quick edits (hero, updates, publications, case studies, projects, experience, and contact). Static assets live in `public/`.

## Requirements
- Node.js + npm

## Scripts
- `npm run dev` — start dev server (defaults to port 5173; use `-- --host --port 4173` if needed).
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview the built site locally.

## Deploy (GitHub Pages)

The site automatically deploys via GitHub Actions when you push to the `main` branch:

1. Make changes to `src/content.js` or other source files
2. Commit and push changes to `main`
3. The workflow `.github/workflows/vite.yml` automatically builds and deploys the site to GitHub Pages
4. Your site will be live at `https://rahul201722.github.io` within a few minutes

**Note**: GitHub Pages must be configured to deploy from "GitHub Actions" (not from a branch). This is set in repository Settings → Pages → Source.

## Structure
- `src/content.js` — primary content source (hero, publications, case studies, projects, experience, and contact).
- `src/App.jsx` — page composition and section rendering.
- `src/index.css` — global styling and motion utilities.
- `src/components/` — section components (`Hero`, `About`, `Research`, `Projects`, `Experience`, etc.).
- `public/` — static assets served as-is (`profile.avif`, `profile-og.jpg`, `paper_1_architecture.avif`, `paper_2_architecture.avif`, SEO files).
- `dist/` — build output (generated).
- `.github/workflows/vite.yml` — CI/CD for Pages.

## Notes
- Projects use in-page expanders; edit summary/details in `src/content.js`.
- Architecture figures display from `public/paper_1_architecture.avif` and `public/paper_2_architecture.avif`; update paths/captions in `src/content.js`.
- If the dev server fails to write temp files (sandboxed environments), run with elevated permissions or set `TMPDIR` to a writable location.
