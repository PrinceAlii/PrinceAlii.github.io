# Portfolio Remediation Plan

## Status: Draft
**Date:** 2026-02-10
**Objective:** Refactor and polish the portfolio to professional engineering standards, eliminating "AI smell," improving performance, and fixing architectural flaws.

---

## 1. Architectural Improvements

### 1.1 Move from `fetch` to `import`
**Current State:** `content.js` fetches JSON/MD files at runtime.
**Problem:**
- Adds unnecessary network requests (waterfall).
- If a request fails, sections break.
- "Flashes" of empty content while loading.
- Harder for search engines to index (content isn't in initial HTML, though Google is okay with it, it's not optimal).
**Solution:**
- Import `experience.json`, `education.json`, and `projects.json` directly into `content.js`. Vite bundles these automatically.
- Import `about.md?raw` (using Vite's raw import feature) to get the markdown text at build time.
- **Benefit:** Instant loading, no network errors, better offline support.

### 1.2 Fix Theme Flash (FOUC)
**Current State:** Theme logic resides in `main.js`, which runs after the HTML parser.
**Problem:** Users on light mode will see a dark flash before the script runs.
**Solution:**
- Move the critical theme check logic into a small, inline `<script>` tag inside `<head>` in `index.html`.

### 1.3 Deployment Workflow
**Current State:** `deploy.yml` manually copies `CNAME`.
**Problem:** Fragile and non-standard.
**Solution:**
- Move `CNAME` to the `public/` directory. Vite automatically copies everything from `public/` to `dist/`.
- Remove the `cp` step from `deploy.yml`.

---

## 2. Code Quality & Performance

### 2.1 Sanitize & Optimize DOM Manipulation
**Current State:** Uses `innerHTML` with template literals.
**Problem:** Minor security risk (XSS) if data sources are compromised; sloppy practice.
**Solution:**
- Ensure no user input can enter these files.
- Since we are switching to `import` (trusted data), `innerHTML` is acceptable for Markdown, but we will verify `marked` configuration.
- For lists, we will stick to template literals for readability but review for any obvious injection points.

### 2.2 Optimize Scroll Listeners
**Current State:** `scroll` event in `ui.js` fires on every pixel.
**Problem:** Can cause jank (stuttering) on mobile/lower-end devices.
**Solution:**
- Wrap `initParallax` logic in `requestAnimationFrame` to sync with the browser's repaint cycle.

### 2.3 Professionalizing Content
**Current State:**
- `projects.json` contains "Example Project", "summary", and "test" fields.
- `education.json` contains `"test": "test"`.
- Comments in code are generic/AI-generated (e.g., `// hero image change`).
**Solution:**
- Remove dummy fields.
- Replace generic comments with concise, engineer-focused comments (or remove them if the code is self-explanatory).
- Ensure specific terminology is accurate (e.g., "DevOps Cadet" is good, keep it).

---

## 3. Visual & UX Polish

### 3.1 Accessibility
**Current State:**
- `tabindex="-1"` on `<main>` (standard for skip links, but good to verify).
- Color contrast on "neutral-400" text needs verification.
**Solution:**
- Verify `aria-label` usage.
- Ensure focus rings are visible and consistent.

---

## Execution Steps

1.  **Refactor Data Loading:** Switch `content.js` to use ES modules `import`.
2.  **Fix Theme:** Extract theme script to `index.html`.
3.  **Cleanup & Polish:**
    - Move `CNAME`.
    - Clean JSON data.
    - Rewrite/Remove comments.
    - Optimize `ui.js`.
4.  **Final Review:** Build and verify.
