# Rahul Ranjan — Homepage (Astro + Tailwind)

Single-page research portfolio migrated from React/Vite to Astro for lower client-side JavaScript and better static delivery on GitHub Pages.

## Requirements
- Node.js + npm

## Scripts
- `npm run dev` — start Astro dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview built site

## Deploy (GitHub Pages)

The workflow in `.github/workflows/vite.yml` installs dependencies, builds, and deploys `dist/` to GitHub Pages on pushes to `main`.

## Structure
- `src/pages/index.astro` — main page template and lightweight client-side interactions (nav active state, progress bar, back-to-top, copy citation, project toggles)
- `src/content.js` — primary content source (hero, publications, case studies, projects, experience, contact)
- `src/index.css` — global styles, Tailwind v4 theme tokens, and animation utilities
- `astro.config.mjs` — Astro config with Tailwind v4 Vite plugin integration
- `public/` — static assets (`profile.avif`, `profile-og.jpg`, architecture figures, SEO files)

## Notes
- This migration removes React runtime for improved static performance.
- If dependencies are missing locally, run `npm install` before building.
