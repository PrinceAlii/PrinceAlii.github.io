# Alignment Checklist: Resume Alignment

Source of truth: `public/resume.pdf`, extracted with `python3 -c "from pdfminer.high_level import extract_text; print(extract_text('public/resume.pdf'))"` and compared fact by fact. Status values: Matched, Mismatched, Pending. Every row below was Mismatched or Pending at the start of alignment where the Note says so, and is now Matched after reconciliation.

Target shorthand: `grad` = `src/content/experience/abs-graduate-devops.md`, `cadet` = `abs-cadet-devops.md`, `cba` = `commonwealth-bank-associate.md`, `snsw` = `service-nsw-representative.md`, `mcd` = `mcdonalds-crew-member.md`, `exp` = `src/pages/experience.astro` (rendered at `/experience`).

## Typography and design decisions

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Zero em dashes (U+2014) site-wide | User directive, design.md typography rule | `src/**`, `public/**`, `astro.config.mjs`, `dist/**` | Matched | Was Mismatched: `ExperienceItem.astro` date separator, `BaseLayout.astro` home title and `og:image:alt`, `index.astro` year ranges, `social-card.svg` aria-label. All rewritten. `pnpm verify` scan: 0 occurrences in src, public, astro.config.mjs, dist. Entities `&mdash;`, `&#8212;`, `&#x2014;` and `\u2014` escapes also 0. |
| Zero en dashes (U+2013) site-wide | User directive update, design.md typography rule | `src/**`, `public/**`, `astro.config.mjs`, `dist/**` | Matched | Date and year ranges use the word "to" everywhere ("Feb 2026 to Present", "2019 to Present", "2023 to 2025"). `&ndash;`, `&#8211;`, `&#x2013;`, `\u2013` also scanned: 0. |
| Markdown cannot generate dashes | Design.md typography rule | `astro.config.mjs` | Matched | `markdown.smartypants` set to `{ dashes: false }`; smart quotes and ellipses keep working. No `--`/`---` sequences in md/mdx prose (only frontmatter fences). |
| Home page title | Typography rule | `BaseLayout.astro` | Matched | "Ali Bonagdaran \| DevOps Engineer", matching the existing "Title \| Ali Bonagdaran" pipe pattern. `og:image:alt` and the social card aria-label read "Ali Bonagdaran, DevOps Engineer". |
| D1: Graduate title on resume is "Graduate (en dash) DevOps Engineer" | R1.2, R10.1 | `grad` frontmatter | Matched | Deliberate design decision (design.md D1): rendered "Graduate DevOps Engineer" with no dash. Overrides R1.2 character-for-character match; also matches R10.1 home role wording. Was Mismatched ("Graduate - DevOps Engineer"). |
| D2: Cadet title "Cadet - DevOps" on resume | R1.2 | `cadet` frontmatter | Matched | Deliberate design decision (design.md D2): rendered "Cadet DevOps" with no dash. Was Mismatched ("Cadet - DevOps"). |
| Certification on resume is "AWS Certified Solutions Architect (en dash) Associate" | R9.3 | `src/data/achievements.ts`, `exp` Achievements | Matched | Deliberate deviation from the resume: rendered "AWS Certified Solutions Architect - Associate" with a plain hyphen per the no en dash rule. |
| Resume typo "Teraform" | R8.4 | `src/data/skills.ts` | Matched | Rendered "Terraform" (design R8.4). `pnpm verify` asserts "Teraform" is absent from dist. |
| June abbreviation | R1.3 | `ExperienceItem.astro` | Matched | Existing `en-AU` formatter renders June as "June" (other months "Feb", "Mar", "Nov", "Aug"). Month and year granularity holds, so no display change was made. |

## R1: Experience identity, dates, order

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Exactly five roles, no extras | R1.1 | `src/content/experience/` (5 files), `exp` | Matched | Five records render; none added or removed. |
| Graduate DevOps Engineer, Australian Bureau of Statistics, Sydney, NSW | R1.2 | `grad` | Matched | Title per D1. |
| Cadet DevOps, Australian Bureau of Statistics, Sydney, NSW | R1.2 | `cadet` | Matched | Title per D2. |
| Business Banking Associate, Commonwealth Bank of Australia, Redfern, NSW | R1.2 | `cba` | Matched | Already correct. |
| Customer & Digital Service Representative, Service NSW, Ryde, NSW | R1.2 | `snsw` | Matched | Already correct. |
| Crew Member, McDonald's, Mount Colah, NSW | R1.2, R13.5 | `mcd` | Matched | D3 reconciliation: "Mount Colah, NSW" appears on the resume ("McDonald's, Mount Colah, NSW"), so it is retained. |
| Graduate Feb 2026 to Present | R1.3, R1.4 | `grad`, `ExperienceItem.astro` | Matched | Renders "Feb 2026 to Present"; literal "Present". |
| Cadet Mar 2025 to Feb 2026 | R1.3 | `cadet` | Matched | Renders "Mar 2025 to Feb 2026". |
| Banking Nov 2024 to Jun 2025 | R1.3 | `cba` | Matched | Renders "Nov 2024 to June 2025". |
| Service NSW Mar 2023 to Nov 2024 | R1.3 | `snsw` | Matched | Renders "Mar 2023 to Nov 2024". |
| McDonald's Aug 2019 to Mar 2023 | R1.3 | `mcd` | Matched | Renders "Aug 2019 to Mar 2023". |
| Reverse-chronological order | R1.5 | `exp` sort by `startDate` desc | Matched | Graduate, Cadet, Banking, Service NSW, McDonald's (confirmed in screenshots). |
| No contradicting field values | R1.6 | all records | Matched | Only D1/D2 differ from the resume, by design decision. |

## R2: Graduate body

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Own day-to-day operation and ongoing development of Coder CDE on AWS, ~250 daily active users, ECS, EC2 workspace instances, RDS PostgreSQL, Application Load Balancer | R2.1 | `grad` para 1 | Matched | "~250" written as "around 250". |
| Administer and upgrade self-managed Artifactory on EKS: Helm chart upgrades, Kubernetes cluster maintenance, container troubleshooting | R2.2 | `grad` para 2 | Matched | |
| Liaised with internal and external stakeholders to design and run a Proof-of-Concept trial of GitHub Copilot within Coder, translating technical constraints into a workable pilot | R2.3 | `grad` para 3 | Matched | Was Mismatched (missing, D4). |
| Jira Data Centre to Jira Cloud migration: environment planning, data validation, stakeholder coordination | R2.4 | `grad` para 4 | Matched | Was Mismatched (areas not named, D4). |
| Support developers org-wide: GitLab CI/CD queries, pipeline debugging, general DevOps troubleshooting | R2.5 | `grad` para 5 | Matched | |

## R3: Cadet body

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Administered RHEL in production on-premises: patching, configuration management, routine maintenance | R3.1 | `cadet` para 1 | Matched | |
| Migration of on-premises workloads to AWS and Azure: environment setup, post-migration validation | R3.2 | `cadet` para 2 | Matched | |
| Version upgrades and ongoing maintenance on self-managed GitLab and Artifactory | R3.3 | `cadet` para 3 | Matched | |
| Assisted design and maintenance of GitLab CI/CD pipelines for application deployment across the organisation | R3.4 | `cadet` para 4 | Matched | |
| Collaborated with the DevOps team on improvements to business-critical tools including Jira and Sparx EA | R3.5 | `cadet` para 5 | Matched | Was Mismatched (missing, D5). |

## R4: Business Banking body

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Explained complex banking products clearly to customers with varying levels of financial literacy | R4.1 | `cba` para 1 (one sentence) | Matched | Was Mismatched (generic body, D6). |
| NPS above +70 and a high post-call survey completion rate | R4.2, R4.3 | `cba` para 2 | Matched | Qualitative "high" kept; no invented percentage (asserted by `pnpm verify`). |
| Resolved escalated complaints and complex queries, routing to the right specialist teams, reducing incorrect call transfers | R4.4 | `cba` para 3 | Matched | |
| All three achievement areas present | R4.5 | `cba` | Matched | |

## R5: Service NSW body

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Accurate advice across complex multi-agency transactions | R5.1 | `snsw` para 1 | Matched | Was Mismatched (generic, D7). |
| Strict compliance with privacy legislation | R5.2 | `snsw` para 1 | Matched | |
| Handled escalated complaints involving licensing and registration | R5.3 | `snsw` para 2 | Matched | |
| Documented and resolved through appropriate channels | R5.4 | `snsw` para 2 | Matched | |

## R6: McDonald's body

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Customer service, resolving customer complaints and concerns | R6.1 | `mcd` para 1 | Matched | Was Mismatched (generic, D8). |
| Drive-thru flow, total experience time less than 140 seconds | R6.2 | `mcd` para 2 | Matched | |
| Collaborated with fellow crew members for smooth restaurant operation | R6.3 | `mcd` para 3 | Matched | |

## R7: Education (Resume_Only_Material, reviewed against the PDF before publishing)

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Bachelor of Information Technology, University of Technology Sydney | R7.1, R7.2, R7.7 | `src/data/education.ts`, `exp` Education | Matched | Was Pending (absent, D10). Reviewed against PDF. |
| 82.58% WAM, 6.21 GPA, Distinction average | R7.3, R7.7 | same | Matched | Rows labelled WAM, GPA; Result "Distinction average". |
| Major Enterprise Systems Development; Sub-Major Networking and Cybersecurity | R7.4, R7.7 | same | Matched | |
| 2023 to 2025 | R7.5, R7.7 | same | Matched | |
| No mismatched education fact shown | R7.6 | same | Matched | All values verbatim. |

## R8: Technical skills (Resume_Only_Material, reviewed)

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Six categories in resume order | R8.1 | `src/data/skills.ts`, `exp` Technical skills | Matched | Was Pending (absent, D10). |
| Operating Systems: RHEL, Amazon Linux, Windows Server, Linux administration | R8.2 | same | Matched | |
| Languages: Python, Bash, JavaScript / Node.js, HTML/CSS, Java | R8.3 | same | Matched | |
| Cloud & DevOps: AWS ECS, EKS, EC2, RDS, ALB, Lambda, IAM, Terraform, AWS CDK (TypeScript) | R8.4 | same | Matched | "Teraform" typo corrected. |
| Containers & Orchestration: Kubernetes, Helm, Docker, production experience on EKS, self-study on OpenShift | R8.5 | same | Matched | |
| Tooling: GitLab administration, Artifactory, Jira | R8.6 | same | Matched | Resume reads "GitLab Administration Artifactory" (missing comma); split per R8.6 enumeration. |
| Home lab: Linux VMs, RAID storage, Cisco Meraki networking | R8.7 | same | Matched | |
| Nothing beyond the enumerated entries | R8.8, R8.9 | same | Matched | |

## R9: Achievements (Resume_Only_Material, reviewed)

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Every resume achievement, nothing added | R9.1, R9.5 | `src/data/achievements.ts`, `exp` Achievements | Matched | Was Pending (absent, D10). Two items. |
| 2nd in NSW, Information Processes & Technology, 2022 HSC together | R9.2 | same | Matched | One row: label "2022 HSC", value "2nd in NSW for Information Processes & Technology". |
| AWS Certified Solutions Architect - Associate with "in progress" adjacent | R9.3, R9.4 | same | Matched | Status label in the same row; the literal type `status: "in progress"` makes a completed state unrepresentable. Hyphen per typography decision above. |

## R10: Headline and identity

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| "Graduate DevOps Engineer at the Australian Bureau of Statistics" | R10.1 | `src/pages/index.astro` hero | Matched | Already correct. |
| Name "Ali Bonagdaran"; location "Sydney, NSW" | R10.2 | experience records, `BaseLayout.astro` description, `public/social-card.svg` | Matched | Was Mismatched: meta description said "Sydney-based", social card said "SYDNEY / AUSTRALIA". Now "in Sydney, NSW" and "SYDNEY, NSW". |
| Home headline, standfirst, role copy reviewed | R10.3, R10.4 | `index.astro` | Matched | Reviewed: no title, employer, or tenure absent from the resume. Work history index derives from the five records. |

## R11: Contact

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| alibonagdaran@gmail.com as mailto link | R11.1 | `src/pages/contact.astro` 01 | Matched | |
| Resume PDF link | R11.2 | `contact.astro` 05 | Matched | `/resume.pdf`. |
| www.alibo.dev labelled with its destination | R11.3, R11.4 | `contact.astro` 02 | Matched | D11 user-confirmed: "Website / alibo.dev", `href="https://www.alibo.dev"`, external pattern. Indices re-sequenced Email/Website/LinkedIn/GitHub/Resume (asserted by `pnpm verify`). Deck updated. Not omitted, so no R11.4 omission record needed. |
| Only Ali-owned channels | R11.5 | `contact.astro` | Matched | Email, alibo.dev, LinkedIn, GitHub, resume. |

## R12: Skill tags

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Graduate tags from role content | R12.1 to R12.4 | `grad` | Matched | Was Mismatched (D9). Removed "Platform Engineering", "CI/CD". Now Coder, AWS, Artifactory, EKS, Kubernetes, Helm, GitHub Copilot, Jira, GitLab CI/CD. |
| Cadet tags from role content | R12.1 to R12.4 | `cadet` | Matched | Removed "DevOps", "Kubernetes" (not in cadet content), "CI/CD", "Developer Tooling". Now RHEL, AWS, Azure, GitLab, Artifactory, GitLab CI/CD, Jira, Sparx EA. |
| Banking tags from role content | R12.1 to R12.4 | `cba` | Matched | Removed "Customer Support", "Banking Operations", "Incident Triage", "Communication". Now Banking Products, Customer Experience, Complaint Resolution, Specialist Routing. |
| Service NSW tags from role content | R12.1 to R12.4 | `snsw` | Matched | Removed "Digital Service", "Public Sector", "Customer Support", "Problem Solving". Now Multi-Agency Transactions, Privacy Compliance, Complaint Resolution. |
| McDonald's tags from role content | R12.1 to R12.4 | `mcd` | Matched | Removed "Teamwork", "Operations", "Reliability". Now Customer Service, Complaint Resolution, Drive-Thru Flow, Collaboration. |

## R13: Product constraints

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| No photograph or portrait | R13.1 | `public/`, `dist/` | Matched | No image assets besides favicon.svg and social-card.svg (typographic). |
| Writing not elevated | R13.2 | `SiteHeader.astro`, `index.astro` | Matched | Nav unchanged (Home, Projects, Experience, Contact); `pnpm verify` asserts no `/writing` link in primary nav. No new routes. |
| Resume-only material reviewed before publishing | R13.3 | R7, R8, R9, R11 rows | Matched | Each confirmed against the PDF text. |
| No invented metric, role, employer, credential, date | R13.4, R13.5 | all surfaces | Matched | Generic invented body claims and tags removed (D6 to D9). Corrections recorded above. |

## R14: Build

| Resume Fact | Requirement | Target Location | Status | Note |
| --- | --- | --- | --- | --- |
| Zero build and schema errors | R14.6, R14.7 | `pnpm build` | Matched | See evidence. |

## Verification evidence

All commands run from the repo root on the final working tree.

| Command | Result |
| --- | --- |
| `pnpm build` (`astro check && astro build`) | Pass. astro check: 0 errors, 0 warnings, 0 hints (21 files). 8 pages built. Existing notice that the `writing` collection is empty is unchanged and not an error. |
| `pnpm lint` (`biome check .`) | Pass. 11 files checked, no fixes. `biome.json` now excludes the untracked agent tooling folders `.kiro`, `.impeccable`, `.playwright-cli`, which previously failed lint and are not site code. `lint:fix` was run only on files touched in this change. |
| `pnpm verify` (`node scripts/verify-content.mjs`) | Pass. Dash scan: dist 12 files 0 occurrences; src 27 files 0; public 3 files 0; astro.config.mjs 0 (covers U+2014, U+2013, `&mdash;`, `&ndash;`, `&#8212;`, `&#8211;`, hex entities, `\u` escapes). All required resume strings present in `/experience`, `/contact`, `/`; contact order correct; forbidden tags, old titles, "Teraform", "SYDNEY / AUSTRALIA", and survey percentages absent; certification row carries "in progress". |
| Negative test of `pnpm verify` | Injected an em dash, en dash, `&ndash;`, "Incident Triage", and "45% survey completion" into `dist/experience/index.html`: script exited 1 and reported all five. Rebuilt afterwards. |

Em dash / en dash scan outcome: zero in `src/`, `public/`, `astro.config.mjs`, and `dist/`. (`src/_imp_probe.css` is user-owned and excluded from the scan by instruction.)

Screenshots (Playwright 1.60 Chromium against `astro preview`, reduced motion, webfonts confirmed loaded, 0px horizontal overflow on every capture):

- `.kiro/specs/resume-alignment/screenshots/experience-desktop-1440.png`
- `.kiro/specs/resume-alignment/screenshots/experience-mobile-390.png`
- `.kiro/specs/resume-alignment/screenshots/experience-records-tablet-834.png` (Education, Skills, Achievements detail, 2x)
- `.kiro/specs/resume-alignment/screenshots/experience-records-mobile-390.png` (same, 2x)
- `.kiro/specs/resume-alignment/screenshots/contact-desktop-1440.png`
- `.kiro/specs/resume-alignment/screenshots/contact-mobile-390.png`
- `.kiro/specs/resume-alignment/screenshots/home-desktop-1440.png`
- `.kiro/specs/resume-alignment/screenshots/home-mobile-390.png`

Visual fixes made after inspecting the screenshots: removed a grid gap that was being applied between Skills and Achievements rows (uneven row spacing), dropped the bottom rule on each section's last row so it no longer doubled up with the next section's top rule, and top-aligned stacked rows on mobile. The preview server was started by the screenshot script and stopped when it finished.
