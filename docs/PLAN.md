# Roadmap — alibo.dev

## Done (scaffold)

- Void theme imported; **npm** + lockfile; `site` set to `https://alibo.dev/`.
- Projects list driven by **`src/content/projects/`** collection + `getCollection`; section title still from i18n.
- Cursor rules + this plan for agents.

## Next

1. **Copy** — Tune remaining i18n strings anytime; only `i18n/en.json` now (`npm run check-sync` is a no-op with one locale but still runs in `build`).
2. **Images** — Swap remaining local `<img>` usage for `astro:assets` `Image` where it helps CLS.
3. **Blog (optional)** — Add a `blog` content collection and a `[lang]` route if you want posts.
4. **Deploy** — GitHub Pages (this repo is `*.github.io`); DNS / `CNAME` for **alibo.dev** to GitHub.

## Content strategy

- **Collections** hold structured repeatables (projects, later blog).
- **i18n JSON** holds chrome strings (nav, section headings, hero paragraphs) until you move more into MDX or per-locale frontmatter.

## Transitions

Void already enables the Astro client router. Revisit only if you want to standardize on `astro:transitions` instead—pick one, not both.
