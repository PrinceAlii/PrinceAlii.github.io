# Ali Bonagdaran Portfolio

Modern React + TypeScript portfolio built with a skills-first structure and an "Editorial Engineer" design direction.

## Stack

- `React 19` + `Vite 5`
- `TypeScript` (strict mode)
- `Tailwind CSS` with design tokens via CSS variables
- `Framer Motion` for subtle section animation
- `React Router` (hash routing for static hosting compatibility)

## Project Structure

```text
src/
  components/
    layout/         # Shell primitives (Nav, Footer, Container)
    sections/       # Home page sections (Hero, Skills, Agents, etc.)
    ui/             # Reusable design-system components
  data/             # Typed content models (projects, skills, experience)
  hooks/            # Reusable hooks (theme management)
  lib/              # Utilities (class merging)
  pages/            # Route pages
  styles/           # Global styles and token definitions
  types/            # TypeScript interfaces
```

## Run Locally

```bash
npm install
npm run dev
```

Additional checks:

```bash
npm run typecheck
npm run build
npm run preview
```

## Content Model

### Add or Update Projects

Edit `src/data/projects.ts`. Each project should include:

- `slug`: URL-safe identifier used for `/projects/:slug`
- `title`, `summary`, `description`, `outcome`
- `status`: `Live | Internal | Concept`
- `featured`: controls home-page "Selected Work"
- `skills`: array of `skill.id` values from `src/data/skills.ts`
- `agents`: array of `agent.id` values from `src/data/agents.ts`
- `highlights`: concise bullets for detail page
- `links` (optional): `live`, `github`

### Update Skills

Edit `src/data/skills.ts`:

- Keep IDs stable to preserve project mappings.
- Categories drive interactive filtering in the Skills section.

### Update Agent Workflow

Edit `src/data/agents.ts`:

- Keep IDs stable to preserve project mappings.
- Agent data powers the interactive "Agents" section and project role mapping.

## Theme and Accessibility

- Supports `light` and `dark` themes with a manual toggle.
- Persists preference with `localStorage`.
- Includes keyboard-visible focus states and a skip link.
- Respects `prefers-reduced-motion`.

## Performance Notes

- Uses route-level code splitting for project pages.
- Uses locally bundled Latin font subsets to reduce payload.
- Lighthouse verification is documented from local preview runs.
