+++
title = "Portfolio Website"
date = 2026-02-22
summary = "A personal portfolio rebuilt on Hugo to present experience, projects, and contact details with clear structure and easy maintenance."
technologies = ["Hugo", "GitHub Actions", "HTML", "CSS"]
github = "https://github.com/PrinceAlii/PrinceAlii.github.io"
+++

This project started as a frontend framework site and was intentionally rebuilt as a Hugo static site to keep it simple, fast, and easy to maintain.

## Scope

- Rework the site around practical resume sections: About, Experience, Education, Projects, and Contact.
- Replace build complexity with a straightforward Hugo content and template structure.
- Keep updates low-friction through data files and markdown pages.

## Implementation Details

- Created reusable Hugo templates for base layout, home page, project list, and project detail pages.
- Moved profile, experience, and education details into `data/*.yaml` for easy updates.
- Added light and dark mode with a manual toggle and persisted user preference.
- Styled the site with plain CSS using design tokens and responsive layout rules.
- Updated deployment to use Hugo in GitHub Actions and publish from Hugo's `public/` output.

## Outcome

- Faster and simpler local workflow with no frontend build framework dependency.
- Content can be updated without editing template logic for standard profile changes.
- Improved readability and section hierarchy for recruiter scanning on desktop and mobile.
