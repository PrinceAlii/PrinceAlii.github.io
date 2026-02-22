# Ali Bonagdaran Portfolio

This is my Hugo-based portfolio site.

## Stack

- Hugo
- Hugo templates + data files
- Plain CSS
- GitHub Actions for GitHub Pages deploys

## Run Locally

If Hugo is installed:

```bash
hugo server -D
```

Without a global Hugo install:

```bash
npx hugo-bin server -D
```

Build output:

```bash
npx hugo-bin --minify
```

Build artefacts are written to `public/`.

## Site Structure

```text
assets/css/             # Site styles
content/                # Page and project content
data/                   # Profile, experience, and education data
layouts/                # Hugo templates
static/                 # CNAME, robots, favicon, resume PDF
```

## Branding + Metadata

- Icons and manifest live in `static/` (`favicon.ico`, `favicon.svg`, PNG sizes, `apple-touch-icon.png`, `site.webmanifest`)
- Social preview image: `static/og-image.png`
- Meta tags are defined in `layouts/_default/baseof.html`

## Editing Content

- Profile and contact: `data/profile.yaml`
- Experience timeline: `data/experience.yaml`
- Education: `data/education.yaml`
- Projects:
  - List page: `content/projects/_index.html`
  - Individual project pages: `content/projects/*.html`

## Deployment

GitHub Actions builds with Hugo and publishes `public/` to the `gh-pages` branch.
