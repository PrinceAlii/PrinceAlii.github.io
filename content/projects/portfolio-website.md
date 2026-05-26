# This Portfolio Website

**Date:** 3 April 2026
**Description:** Started from the Spectre Astro theme and rewired it into my working space for projects, experiments, and quick build notes.

**Info:**
- Stack: Astro 6 + TypeScript
- Live at: https://www.alibo.dev
- Source: https://github.com/PrinceAlii/PrinceAlii.github.io

---

## Why I built it

I wanted one place to track real work as I ship it. I started from the Spectre Astro theme, then reshaped it around projects, experiments, and short build notes.

It now works like a dashboard: quick to update, easy to skim, and ready for whatever I build next.

## How it's structured

Astro 6 + TypeScript keep the build static, but the important work was wiring up a strict MDX collection. Each entry now follows the schema for title, description, date, and info metadata, and that same data feeds the homepage cards and `/projects`.

Because everything comes from one collection, adding a note, tweaking tech tags, or changing the info panel happens in one place.

## What I optimised

I dialled in spacing and typography so the cards feel sharper and less like the stock Spectre version. The info list now shows the live build first, repo second, then stack, which matches how I talk about the project.

The layout keeps Spectre's glow components, with spacing tuned so everything stays readable on smaller windows.

## What I'd improve next

Next step is a light analytics hook so I can see which sections people actually open, and a field for outcome notes so every entry logs what shipped and why.

After that I'll keep tuning the cards and info list so this Spectre base stays sharp on phones without piling on extra decoration.

[← Back to projects](/projects)
