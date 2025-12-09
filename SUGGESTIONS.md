# Site Refresh Recommendations (based on rn0h.github.io)

## What the example nails
- Immediate identity and contact: name, title, concise summary, and direct links to email/CV/socials above the fold.
- Scannability: linear flow, minimal scrolling friction, no hidden tabs, and consistent typography.
- Evidence over adjectives: experience and projects listed plainly with artifacts (logos, PDFs, videos) instead of hype language.
- Lightweight: a single page with a small stylesheet loads fast and is easy to maintain.

## Issues in the current site (index.html)
- Above-the-fold bloat: gradient hero, particles, stats, and long paragraphs delay the key signal (who you are, what you do, how to contact/hire you).
- Hidden content: tabs for Experience/Projects/Education/Skills/Publications bury information behind clicks, hurting quick scan and SEO.
- Fluffy phrasing: several bullets use adjectives instead of measurable outcomes; impact is hard to parse at a glance.
- Mixed styling: large inline CSS/JS plus an unused generated `styles.css` increase maintenance and page weight.
- Weak artifact surfacing: projects and publications lack immediate links to demos/code/results; CV links are present but not emphasized.

## Actionable changes (prioritized)
1) Make the top block ruthless and skimmable: name, target role (“ML Engineer | Applied Scientist”), 2-line value prop, location/timezone, and three prominent buttons (Email, Resume PDF, LinkedIn) directly under the heading. Remove particles/stats from the first screen.
2) Drop tabs; use a single scrollable page with anchors. Recruiters skim—everything should be visible in one scroll with clear section headers.
3) Rewrite experience bullets to be outcome-first and metric-backed (e.g., “Cut inference latency 35% via TensorRT + BF16 quantization; unblocked 3 new models in prod”). Keep 3–5 bullets max per role; lead with verbs and numbers.
4) Projects: pick your top 3. For each, show title, one-sentence problem/impact, stack, and a single artifact (demo video/GitHub/report). If no artifact, deprioritize the project.
5) Publications: convert to a compact list—title, venue/year, your role/contribution, and a “PDF/DOI” link. Avoid collapsible abstracts; keep a 1–2 line takeaway instead.
6) Consolidate styling: move inline CSS into `styles.css`, remove unused Tailwind build output if you’re not using utility classes, and keep the palette/spacing consistent. Aim for a ~50–70KB CSS budget total.
7) Trim animations: keep subtle hover/focus states; remove particle background and heavy drop shadows to improve LCP and readability.
8) Accessibility/SEO: add descriptive alt text for all images, ensure headings are hierarchical (h1 for name, h2 for sections), and include meta description with your target role and domain keywords.
9) CTAs in context: add small “Email / CV / LinkedIn” links under each section header so a reader can contact you without scrolling back to top.
10) Performance hygiene: preload the profile image, compress PDFs/images, and serve only one bundled JS block (no inline event handlers). If keeping JS, prefer delegated listeners over inline `onclick` attributes.

## Quick content edits to apply first
- Rewrite the hero paragraph to one crisp positioning statement: “ML Engineer focused on medically regulated products; ships clinical-grade models and evaluation pipelines.”
- Replace the “stats” row with 2–3 proof points tied to business outcomes (e.g., “Deployed 2 FDA Class II AI workflows”, “30% faster inference on edge GPUs”, “3 peer-reviewed papers”).
- For each role, ensure every bullet answers: What did you build? How well does it work (metric)? Why did it matter (business/clinical impact)?
- Surface your best artifact links inline: CV (`cv_ml.pdf`), PhD research PDF, GitHub highlights, and paper DOI/arXiv links.
