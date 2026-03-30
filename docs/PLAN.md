# Roadmap — alibo.dev

## Done (scaffold)

- Void theme imported; **npm** + lockfile; `site` set to `https://alibo.dev/`.
- Projects list driven by **`src/content/projects/`** collection + `getCollection`; section title still from i18n.
- Cursor rules + this plan for agents.

## Next

1. **Copy** — Replace template i18n strings (hero, experience, contact) with real info; keep locales in sync (`npm run check-sync`).
2. **Images** — Swap remaining local `<img>` usage for `astro:assets` `Image` where it helps CLS.
3. **Blog (optional)** — Add a `blog` content collection and a `[lang]` route if you want posts.
4. **Deploy** — GitHub Pages (this repo is `*.github.io`); DNS / `CNAME` for **alibo.dev** to GitHub.

## Content strategy

- **Collections** hold structured repeatables (projects, later blog).
- **i18n JSON** holds chrome strings (nav, section headings, hero paragraphs) until you move more into MDX or per-locale frontmatter.

## Transitions

Void already enables the Astro client router. Revisit only if you want to standardize on `astro:transitions` instead—pick one, not both.
