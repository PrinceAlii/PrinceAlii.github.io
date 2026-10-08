# Implementation Plan: Resume Alignment

## Overview

This plan brings the Ali Bonagdaran portfolio into faithful agreement with the authoritative resume at `public/resume.pdf`. It is a content and data alignment effort on the existing Astro 6 + TypeScript static site — not a redesign. Tasks reuse the existing component model, typed content collections (`src/content.config.ts`), and the CSS vocabulary in `src/styles/global.css`.

Work order: author the three typed data modules first, then edit the five experience Markdown records, then wire the new surfaces into `experience.astro`, then reconcile the contact and home-page copy, then maintain the Alignment_Checklist, and finally verify with the typed build and example-based content checks. Property-based testing is intentionally omitted (static content alignment); the test strategy is the typed build plus example-based content-presence/absence assertions.

## Tasks

- [x] 1. Create the Education typed data module
  - Create `src/data/education.ts` exporting the `Education` type and a typed `education` object (fields: degree, institution, wam, gpa, classification, major, subMajor, startYear, endYear) per the Data Models section
  - Use verbatim resume values: "Bachelor of Information Technology", "University of Technology Sydney", "82.58%", "6.21", "Distinction", "Enterprise Systems Development", "Networking and Cybersecurity", "2023", "2025"
  - _Requirements: 7.2, 7.3, 7.4, 7.5_

- [x] 2. Create the Skills typed data module
  - Create `src/data/skills.ts` exporting the `SkillCategory` type and a `readonly` ordered `skillCategories` array marked `as const`
  - Encode exactly six categories in order (Operating Systems, Languages, Cloud & DevOps, Containers & Orchestration, Tooling, Home lab) with exactly the entries enumerated in R8 and nothing beyond them
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9_

- [x] 3. Create the Achievements typed data module
  - Create `src/data/achievements.ts` exporting the `Achievement` discriminated union (`award` variant and `certification` variant) and a typed `achievements` array
  - Give the `certification` variant a literal `status: "in progress"` field so the certification cannot be represented as completed; populate the award ("2nd in NSW", "Information Processes & Technology", "2022 HSC") and the AWS certification entries
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 4. Align the Graduate DevOps Engineer experience record
  - In `src/content/experience/abs-graduate-devops.md`, fix the frontmatter title from "Graduate - DevOps Engineer" to "Graduate DevOps Engineer" (D1); confirm company, startDate `2026-02-01`, and `endDate: "Present"`
  - Rewrite the body to name: Coder on AWS with 250 daily active users across ECS/EC2 workspace instances/RDS PostgreSQL/Application Load Balancer; Artifactory on EKS with Helm chart upgrades + Kubernetes cluster maintenance + container troubleshooting; GitHub Copilot PoC within Coder coordinated with internal and external stakeholders; Jira Data Centre→Cloud migration with environment planning + data validation + stakeholder coordination; org-wide support with GitLab CI/CD queries + pipeline debugging + general DevOps troubleshooting
  - Reconcile the `skills` array to resume-vocabulary terms only (remove invented tags) (D9)
  - _Requirements: 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 10.1, 12.1, 12.2, 12.3_

- [x] 5. Align the Cadet DevOps experience record
  - In `src/content/experience/abs-cadet-devops.md`, fix the frontmatter title from "Cadet - DevOps" to "Cadet DevOps" (D2); confirm startDate `2025-03-01` and endDate `2026-02-01`
  - Rewrite/extend the body to name: RHEL in production on-prem with patching + configuration management + routine maintenance; on-prem→AWS and Azure migration with environment setup + post-migration validation; version upgrades/maintenance on self-managed GitLab and Artifactory; GitLab CI/CD pipeline design/maintenance for org-wide deployment; collaboration with the DevOps team on improvements to Jira and Sparx EA (D5)
  - Reconcile the `skills` array to resume-vocabulary terms only (D9)
  - _Requirements: 1.2, 1.3, 3.1, 3.2, 3.3, 3.4, 3.5, 12.1, 12.2, 12.3_

- [x] 6. Align the Business Banking Associate experience record
  - In `src/content/experience/commonwealth-bank-associate.md`, confirm/correct title "Business Banking Associate", company "Commonwealth Bank of Australia", location "Redfern, NSW", startDate Nov 2024, endDate Jun 2025
  - Rewrite the body to convey, in one locatable sentence, explaining complex banking products to customers with low-to-high financial literacy; state the customer-experience outcome with the resume values exactly — Net Promoter Score above +70 and a "high" survey completion rate — with NO invented numeric percentage; state resolution of escalated complaints and complex queries with both actions: routing to the correct specialist teams and reducing incorrect call transfers
  - Reconcile the `skills` array to resume-vocabulary terms only (D9)
  - _Requirements: 1.2, 1.3, 4.1, 4.2, 4.3, 4.4, 4.5, 12.1, 12.2, 12.3, 13.4_

- [x] 7. Align the Service NSW experience record
  - In `src/content/experience/service-nsw-representative.md`, confirm/correct title "Customer & Digital Service Representative", company "Service NSW", location "Ryde, NSW", startDate Mar 2023, endDate Nov 2024
  - Rewrite the body to state: accurate advice across complex multi-agency transactions; strict compliance with privacy legislation; handling escalated complaints involving licensing and registration; documenting and resolving them through appropriate channels
  - Reconcile the `skills` array to resume-vocabulary terms only (D9)
  - _Requirements: 1.2, 1.3, 5.1, 5.2, 5.3, 5.4, 12.1, 12.2, 12.3_

- [x] 8. Align the McDonald's Crew Member experience record
  - In `src/content/experience/mcdonalds-crew-member.md`, confirm/correct title/company and dates (Aug 2019 – Mar 2023); reconcile the location "Mount Colah, NSW" against the resume (D3) — retain only if resume-supported, otherwise remove — and record the reconciliation decision in the Alignment_Checklist
  - Rewrite the body to state: customer service including resolution of customer complaints and concerns; drive-thru flow managed to a total experience time under 140 seconds; collaboration with fellow crew members for smooth operation of the restaurant
  - Reconcile the `skills` array to resume-vocabulary terms only (D9)
  - _Requirements: 1.2, 1.3, 6.1, 6.2, 6.3, 12.1, 12.2, 12.3, 13.4, 13.5_

- [x] 9. Verify experience set, ordering, and date semantics
  - Confirm `src/pages/experience.astro` renders exactly the five records with no additions/omissions, sorted reverse-chronologically by start date (Graduate, Cadet, Banking, Service NSW, McDonald's)
  - Confirm `ExperienceItem.astro` renders dates at month+year granularity and the literal "Present" for the Graduate role; make a data/display fix only if a gap is found
  - _Requirements: 1.1, 1.5, 1.6, 1.3, 1.4_

- [x] 10. Checkpoint — experience alignment
  - Run `pnpm build` and confirm the content-collection schema validates with zero errors after the experience edits. Ensure all checks pass, ask the user if questions arise.
  - _Requirements: 14.6, 14.7_

- [x] 11. Render the Education, Skills, and Achievements sections on the experience page
  - In `src/pages/experience.astro`, import the three data modules (`education`, `skillCategories`, `achievements`) and append three new `<section>` blocks below the existing `experience-list`, each with its own labelled `section-header` heading
  - Render Education fields, the six skill categories with their entries, and the achievements — rendering the certification `status` adjacent to the certification name so the two are visually associated. Reuse existing `section` / `section-header` / list CSS classes; add minimal CSS to `src/styles/global.css` only if existing classes do not cover list/grid needs. Do NOT add new routes or `SiteHeader` nav entries
  - _Requirements: 7.1, 8.1, 9.1, 9.3, 13.2_

- [x] 12. Add the personal site to the contact page
  - In `src/pages/contact.astro`, add a `contact-entry` for www.alibo.dev using the existing external-link pattern (`target="_blank" rel="noopener noreferrer"` and the `external-mark` glyph), re-sequencing the `contact-index` numbers so Email / Website / LinkedIn / GitHub / Resume read in order
  - Confirm the email mailto link, LinkedIn, GitHub, and resume PDF link remain and that no non-Ali-owned channel is present; update the page deck copy if it enumerates channels
  - _Requirements: 11.1, 11.2, 11.3, 11.5_

- [x] 13. Review home-page headline and identity copy
  - In `src/pages/index.astro`, confirm the hero shows "Ali Bonagdaran" and the current role text exactly as "Graduate DevOps Engineer at the Australian Bureau of Statistics", and that the standfirst/role copy contains no role title, employer, or tenure absent from the resume; correct any divergence
  - Confirm name "Ali Bonagdaran" and location "Sydney, NSW" wherever identity/location copy appears across pages
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 14. Create and maintain the Alignment_Checklist artifact
  - Create `.kiro/specs/resume-alignment/alignment-checklist.md` as a Markdown table with columns: Resume Fact | Requirement | Target Location | Status | Note
  - Add one row for every required Resume_Fact across R1–R13, mapping each to its target location; set Status from {Matched, Mismatched, Pending}; record reconciliation decisions in Note (D3 McDonald's location, D11 personal-site inclusion, R11.4, R10.4 home-page review, Resume_Only_Material review gates for Education/Skills/Achievements/personal site)
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 7.6, 7.7, 9.5, 10.4, 11.4, 13.3, 13.5_

- [x]* 15. Add a lightweight content-verification script (recommended enhancement)
  - Create `scripts/verify-content.mjs` that reads built `dist/` HTML (or source Markdown/data modules) and asserts presence of key machine-checkable strings ("250", "ECS", "ALB", "Sparx EA", "+70", "140 seconds", "82.58%", "6.21", "Distinction", the six skill-category names and entries, "2nd in NSW", "in progress", "alibo.dev", "alibonagdaran@gmail.com"); exit non-zero on any missing string
  - Add absence assertions for removed invented content (e.g., "Incident Triage", "Problem Solving") and any invented survey percentage; wire a `"verify"` script into `package.json`
  - _Requirements: 12.1, 12.2, 13.4, 13.5, 4.2, 4.3_

- [x] 16. Final checkpoint — typed build, lint, and checklist completion
  - Run `pnpm build` (`astro check && astro build`) and confirm zero build and zero content-collection schema validation errors; run `pnpm lint` (Biome) and resolve formatting/lint issues; if the optional verify script exists, run it
  - Walk the Alignment_Checklist row by row, confirm each fact at its target location, and set every Status to Matched (or record Mismatched and correct before publication); confirm no personal photograph/portrait asset and that Writing is not added to nav or surfaced as a current home section
  - If the build reports errors, surface them without discarding the applied alignment changes. Ensure all checks pass, ask the user if questions arise.
  - _Requirements: 14.6, 14.7, 13.1, 13.2, 13.4, 13.5, 14.2, 14.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster path; task 15 is a recommended enhancement, not mandatory per the design.
- Each task references specific requirement sub-clauses for traceability.
- Property-based testing is intentionally omitted: this is static content/data alignment with no large input space. The test strategy is the typed build (schema + type validation), example-based content-presence/absence checks, and checklist-driven review of qualitative criteria.
- Checkpoints (tasks 10 and 16) ensure incremental validation against the Astro build.
- The resume at `public/resume.pdf` is the single source of truth; where current content differs, the resume wins and the change is recorded in the Alignment_Checklist.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2", "3", "4", "5", "6", "7", "8", "12", "13", "14"] },
    { "id": 1, "tasks": ["9"] },
    { "id": 2, "tasks": ["11"] },
    { "id": 3, "tasks": ["15"] },
    { "id": 4, "tasks": ["16"] }
  ]
}
```
