# Implementation Brief — Discipline & Signal

This file is the implementation handoff for the portfolio redesign. Read it with `PRODUCT.md`, `.impeccable.md`, and `DESIGN-PLAN.md`; together they outrank the current UI implementation and any former visual rules.

## Build objective

Replace the portfolio's visual world across every public route while preserving verified content, static Astro architecture, semantic HTML, and the absence of a personal photo. The work must establish professional status through composition, typography, and specific evidence.

## System to build

- **Mode:** Experience.
- **World:** contemporary technical exhibition catalogue, not a dashboard or developer template.
- **Color:** inky warm green-black base; calcium-white primary type; stone secondary type; one low-saturation oxidised-red signal. Use perceptual CSS color tokens and never use pure black/white, bright blue, cyan, purple, gradients, glow, or glass.
- **Type:** self-host or otherwise responsibly load Schibsted Grotesk for display/UI and Source Serif 4 for reading. Use metric-compatible fallbacks and avoid monospace as a decorative device.
- **Form:** broad asymmetric desktop composition with architectural display type; mobile must recompose the hierarchy as a deliberate vertical reading order. Use rules, alignment, and voids—not boxes—to group information.
- **Motion:** optional and singular. A restrained entrance sequence may use opacity/transform only, must work without JavaScript, and must disappear under `prefers-reduced-motion`.

## Page outcomes

| Surface | Required outcome |
| --- | --- |
| Home | Name-led exhibition composition; current role and concise proposition visible immediately; Resume/contact route; one dominant Reward Seat Finder feature; abbreviated current work and experience proof; strong contact close. |
| Projects | A numbered typographic inventory, not project cards. Make external/live links clear and preserve the different evidence each project actually has. |
| Project detail | A readable case-study sequence with distinct problem, approach, technical decisions, and outcome passages. No invented screenshots or metrics. |
| Experience | Chronological professional record with the ABS graduate role visually prioritised, while earlier service experience remains respectfully legible. |
| Contact | Four direct, large-enough pathways: email, LinkedIn, GitHub, resume. No form is needed. |
| 404 | Brief, navigable interruption that belongs to the same world. |
| Writing | Remove from public navigation; retain content capability only if it remains technically harmless. |

## Content and proof

- Existing collection content is approved to retain.
- Resume-only factual material may be added selectively: UTS Bachelor of IT, approved academic achievements, and verified certifications/status. Check every statement against `public/resume.pdf`; do not promote sensitive or stale material by inference.
- The Coder environment's around-250-daily-user figure is valid. Do not extrapolate it into a broader claim.
- There are only two projects and no approved project imagery. This is a structural fact: design for selectivity and depth, never visual-gallery volume.

## Non-negotiables

- Never introduce a portrait, profile image, stock photo, generated image, synthetic illustration, or fake diagram.
- Never build terminal cosplay, code-rain effects, mock monitoring views, skills bars, logo clouds, decorative stat blocks, blue-neon dark mode, rounded-card grids, gradient decoration, glassmorphism, or generic hiring calls to action.
- Do not add analytics, a UI library, an unnecessary client framework, or non-essential client JavaScript.
- Keep outbound links explicit and keyboard-accessible; preserve reduced motion, visible focus, contrast, zoom, and responsive reading quality.

## Required implementation sequence

1. Read `PRODUCT.md`, `.impeccable.md`, `DESIGN-PLAN.md`, this file, and the skill references below. Inspect the incumbent source, but treat it as content/function evidence only.
2. Establish global tokens, web-font loading, shared layout, header/footer, and responsive grid. Do not retain the old blue-accent/standard-shell language.
3. Build the home page first as the visual proof, then carry the system through every route and identity/metadata asset.
4. Run lint, build, desktop/mobile visual inspection, accessibility checks, and the Impeccable detector. Fix findings in one bounded batch.
5. Use the Impeccable finish-reviewer/documenter flow after the build. `DESIGN.md` must be generated from the finished implementation, not written in advance.

## Definition of done

The site feels unmistakably authored and professionally credible without an image, effect, or fabricated proof point. A recruiter can understand Ali's current position, technical focus, real work, and contact path within one viewport, then navigate every page naturally on desktop and mobile.
