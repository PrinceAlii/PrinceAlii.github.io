# Ali Bonagdaran Portfolio

This site now runs on Hugo and is written to read like a normal personal resume site: clear summary, experience, education, projects, and contact details.

## Stack

- Hugo (static site generator)
- Hugo templates + data files
- Plain CSS (no frontend framework)

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

Generated files are written to `public/`.

## Site Structure

```text
assets/css/             # Site styles
content/                # Page and project content
data/                   # Profile, experience, and education data
layouts/                # Hugo templates
static/                 # CNAME, robots, favicon, resume PDF
```

## Editing Content

- Profile and contact: `data/profile.yaml`
- Experience timeline: `data/experience.yaml`
- Education: `data/education.yaml`
- Projects:
  - List page: `content/projects/_index.md`
  - Individual project pages: `content/projects/*.md`

## Deployment

GitHub Actions builds with Hugo and publishes `public/` to the `gh-pages` branch.
