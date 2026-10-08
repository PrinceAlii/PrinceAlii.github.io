# Resume alignment of experience, education, skills, achievements, and contact

The five experience records have been rewritten from generic prose to the resume's bullets, and the invented skill tags have been removed. Education, Technical skills, and Achievements are new sections on `/experience`, driven by three typed data modules. The contact page gains a `www.alibo.dev` entry. Em dashes and en dashes are gone from `src/`, `public/`, and `dist/`, and smartypants dash conversion is disabled so Markdown can't bring them back. The work builds on the user's uncommitted redesign without reverting it. Build, lint, and verify evidence plus eight screenshots are recorded.

Watch for: the brief says to keep the en dash in the AWS certification name. design.md says to use a hyphen, and the implementer followed design.md (**confirmed**, `src/data/achievements.ts:13`). The user only banned em dashes, so this needs a user call, not a fix. Two small copy inconsistencies don't block: the social card says "SYDNEY, NSW" in caps (**confirmed**) and the home index says "now" instead of "Present" (**confirmed**).

**Verdict**: APPROVED

## High-level view

The experience records match the resume field for field, with two recorded exceptions. D1 renders "Graduate DevOps Engineer" and D2 renders "Cadet DevOps", both with no dash, and the checklist Note column records both as deliberate decisions. Each body paragraph is a near-verbatim resume bullet. The only rewordings are "~250" becoming "around 250" and NPS being spelled out, and neither adds a fact. The survey metric stays qualitative ("high").

Education, Skills, and Achievements carry exactly the resume values. They render on `/experience` with no new route or nav entry. There are two recorded corrections to the resume: the "Teraform" typo becomes "Terraform", and the unpunctuated "GitLab Administration Artifactory" is split into separate entries. The certification's status field only accepts "in progress", so the code can't show it as earned.

On the dash rule, the implementer's scanner and my own grep both find zero em dashes in any form across source, public assets, and build output. The one judgement call is the certification name. Its en dash became a hyphen, which follows design.md and contradicts the gating brief.

The new sections reuse the existing row-and-rule vocabulary and look native at desktop, tablet, and mobile.

<details>
<summary>Issues (4)</summary>

1. **Certification en dash vs. brief** (non-blocking, user decision): the brief wants the U+2013 in "AWS Certified Solutions Architect – Associate" kept, but design.md mandates a hyphen. Ask the user which rule wins. If the en dash comes back, update `achievements.ts`, the required string in `verify-content.mjs`, and remove U+2013 from its `dashPatterns`.
2. **Social card location casing** (non-blocking): `public/social-card.svg` hard-codes "SYDNEY, NSW", but R10.2 asks for "Sydney, NSW" exactly. Accept it as display styling, or change the text to "Sydney, NSW".
3. **"now" vs "Present" on home index** (non-blocking): `index.astro` `formatYearRange` renders "2026 to now", while the same section's header and `/experience` say "Present". Switch to "Present".
4. **Stale scanner exclusion** (non-blocking): `verify-content.mjs` skips `src/_imp_probe.css`, which no longer exists. Drop the exclusion so a future file with that name gets scanned.

</details>

<details><summary>Details</summary>

### Experience records against the resume (check 1: R1 to R6, R12)

I checked the built `/experience` text against the extracted resume. It shows five roles in start-date order, with the resume's locations, including McDonald's "Mount Colah, NSW", which the resume states. Every R2 to R6 element is present. The banking paragraph has no percentage, and `pnpm verify` asserts none appears near "survey completion". "Nov 2024 to June 2025" is the only date with a full month name. That comes from the existing `en-AU` short-month formatter and stays at month and year granularity.

The invented tags ("Incident Triage", "Problem Solving", "Platform Engineering", and others) are gone from source and `dist` (**confirmed**). Replacement tags like "Specialist Routing" and "Drive-Thru Flow" condense each role's own bullets, which R12.1 allows as a "direct category grouping".

### Contact and home identity (check 1: R10, R11)

The contact page reads Email, Website (`https://www.alibo.dev`, labelled "alibo.dev"), LinkedIn, GitHub, Resume, indexed 01 to 05. The home hero carries the R10.1 wording verbatim, and its standfirst adds no title, employer, or tenure. The home work-history index is derived from the records. Its current role renders as "2026 to now" while its header says "2019 to Present" (**confirmed**, `index.astro` `formatYearRange`). The social card's "SYDNEY, NSW" is literal uppercase text, not CSS (**confirmed**, `public/social-card.svg`). That breaks R10.2's case-sensitive "exactly" wording if the card counts as identity copy.

### Dash rule and the certification name (checks 2 and 3)

My grep over `src`, `public`, `dist`, and `astro.config.mjs` found no U+2014, `&mdash;`, `&#8212;`, `&#x2014;`, `\u2014`, or CSS `\2014`, and no U+2013 forms either. Titles, meta, OG, and aria-labels all use commas or pipes. The only `--` sequences in md/mdx are frontmatter fences. `dist` was built at 21:25, after the last source edit at 21:15, so it reflects current source.

The brief expected the certification's en dash to survive. It was replaced with a hyphen (**confirmed**). design.md's typography section is labelled "user directive, overrides everything above" and explicitly specifies "AWS Certified Solutions Architect - Associate", and the checklist records the deviation. The user's verbatim instruction bans only em dashes, so both outcomes respect the user. The conflict is between the spec and the brief, and the implementer followed the spec, so I'm not blocking on it. Restoring the en dash would take three coordinated edits. The verify scanner currently bans U+2013, so it would fail on the restored name if only the data string changed.

The D1 and D2 titles have no dash, and the checklist Note column records both as deliberate decisions.

### Visual fit (check 4)

All required screenshots exist: `/experience`, `/contact`, and `/` at 1440 and 390 px, plus close-ups of the records sections at 834 and 390 px. The new sections use the experience list's `minmax(11rem, 0.33fr) / 1fr` grid, uppercase stone labels, hairline rules, and the `/` separators from `.experience-skills`. "In progress" reuses the `entry-status` signal colour instead of a badge. There are no cards or gradients. On mobile the rows stack and the skill entries wrap cleanly, and the checklist reports zero horizontal overflow.

### Evidence and preservation of user work (checks 5 and 6)

The checklist records `pnpm build` passing (astro check 0 errors, 8 pages), `pnpm lint` passing, and `pnpm verify` passing. It also records a negative test where injected dashes, a forbidden tag, and a survey percentage made the script exit 1. I did not re-run the suites. `git stash list` is empty and the reflog has no reset or checkout entries. The redesign files (`global.css`, `SiteHeader`, `SocialLinks`, and the `BaseLayout` fonts) are intact underneath the alignment edits. `biome.json` was changed to exclude `.kiro`, `.impeccable`, and `.playwright-cli` from lint. That's outside the listed surface but only touches tooling folders.

</details>

<details>
<summary>File map</summary>

- `src/content/experience/*.md`: titles (D1, D2), bodies rewritten to resume bullets, skill tags reconciled.
- `src/data/education.ts`, `skills.ts`, `achievements.ts`: new typed resume data.
- `src/pages/experience.astro`: Education, Technical skills, Achievements sections.
- `src/pages/contact.astro`: Website entry, re-indexed directory.
- `src/pages/index.astro`: role copy, work-history index, year ranges with "to".
- `src/components/ExperienceItem.astro`: "to" date separator.
- `src/layouts/BaseLayout.astro`: home title and og:image:alt without em dash, "Sydney, NSW" description.
- `public/social-card.svg`: aria-label without em dash, "SYDNEY, NSW".
- `astro.config.mjs`: smartypants dashes disabled.
- `scripts/verify-content.mjs`, `package.json`: `pnpm verify` content and dash assertions.
- `biome.json`: excludes agent tooling folders from lint.

Full diff: `git diff` on the working tree against `main`.

</details>
