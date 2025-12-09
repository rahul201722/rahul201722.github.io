# Rahul Ranjan — Homepage (Vite + React + Bun)

A single-page personal site built with React 19, Vite 5, and Bun. Includes a hero/CTA, experience & projects driven by in-file data, skills, and publication highlights. Assets (profile + CVs) live in `public/`.

## Requirements
- Bun ≥ 1.3 (tested with 1.3.4)

## Scripts
- `bun run dev` — start dev server (defaults to port 5173; use `-- --host --port 4173` if needed).
- `bun run build` — production build to `dist/`.
- `bun run preview` — preview the built site locally.

## Deploy (GitHub Pages)
Push to `main`. The workflow `.github/workflows/vite.yml` installs with Bun, builds, and publishes `dist` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. Set the GitHub Pages source to `gh-pages`.

## Structure
- `src/` — React components and styles.
- `public/` — static assets served as-is (`profile.jpg`, `cv_ml.pdf`, `cv_phd_research.pdf`).
- `dist/` — build output (generated).
- `.github/workflows/vite.yml` — CI/CD for Pages.

## Notes
- If the dev server fails to write temp files (sandboxed environments), run with elevated permissions or point `TMPDIR` to a writable location.
