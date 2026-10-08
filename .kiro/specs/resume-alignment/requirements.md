# Requirements Document

## Introduction

This feature aligns the Ali Bonagdaran personal portfolio (Astro 6 + TypeScript, static, deployed to GitHub Pages) with the authoritative resume at `public/resume.pdf`. The resume is the single source of truth for every professional fact the site presents: experience records and their detail, education, technical skills, achievements, and headline/role copy.

The work is a content and data alignment effort, not a redesign. Implementers must bring the site's content into faithful agreement with the resume, add the missing surfaces the resume justifies (education, skills, achievements), reconcile each identified discrepancy, and leave every criterion independently verifiable against the resume. All work must respect the constraints in `PRODUCT.md`: no personal photograph, writing is not elevated as a current section, resume-only material requires factual review before publication, and the experience must stay lean, honest, and free of manufactured content breadth.

The resume facts referenced throughout this document are the authoritative content extracted from `public/resume.pdf` and recorded in the Glossary and the per-requirement criteria below.

## Glossary

- **Resume**: The authoritative source document at `public/resume.pdf`. Its content is the single source of truth for all professional facts the Portfolio presents.
- **Portfolio**: The static Astro website in this workspace, comprising all public routes (home, experience, projects, project detail, contact, 404), shared chrome, and content collections.
- **Experience_Record**: A single typed content entry under `src/content/experience/` representing one role, with frontmatter fields (title, company, location, startDate, endDate, skills) and a Markdown body.
- **Experience_Body**: The Markdown body text of an Experience_Record, rendered as prose on the experience page.
- **Skills_Array**: The `skills` frontmatter array of an Experience_Record.
- **Home_Page**: The route at `src/pages/index.astro`.
- **Experience_Page**: The route at `src/pages/experience.astro`.
- **Contact_Page**: The route at `src/pages/contact.astro`.
- **Education_Surface**: The site location (new or existing) that presents the Resume's Education section facts.
- **Skills_Surface**: The site location (new or existing) that presents the Resume's categorized Technical Skills.
- **Achievements_Surface**: The site location (new or existing) that presents the Resume's Achievements.
- **Resume_Fact**: A single discrete, verifiable statement of fact drawn from the Resume (for example, an employment date, a role bullet, a certification, a WAM figure).
- **Resume_Only_Material**: A Resume_Fact that is not yet published anywhere on the Portfolio and requires factual review before publication, per `PRODUCT.md`.
- **In_Scope_Discrepancy**: A difference between a published Portfolio fact and the corresponding Resume_Fact (a mismatch, omission, or contradiction).
- **Alignment_Checklist**: A reviewable artifact, maintained in the spec, that maps each required Resume_Fact to its target Portfolio location and its verification status.

## Requirements

### Requirement 1: Experience dates and identity match the resume

**User Story:** As a recruiter assessing Ali Bonagdaran, I want each role's title, employer, location, and dates on the site to match the resume exactly, so that I can trust the record is accurate.

#### Acceptance Criteria

1. THE Portfolio SHALL present exactly five Experience_Records, one for each role in the Resume: Graduate DevOps Engineer (Australian Bureau of Statistics), Cadet DevOps (Australian Bureau of Statistics), Business Banking Associate (Commonwealth Bank of Australia), Customer & Digital Service Representative (Service NSW), and Crew Member (McDonald's), with no additional and no missing Experience_Records.
2. THE Portfolio SHALL present each Experience_Record with a title, company, and location whose displayed text is a character-for-character, case-sensitive match of the corresponding Resume_Fact: title "Business Banking Associate" / company "Commonwealth Bank of Australia" / location "Redfern, NSW"; title "Customer & Digital Service Representative" / company "Service NSW" / location "Ryde, NSW"; and the ABS and McDonald's roles with their respective Resume titles and companies.
3. THE Portfolio SHALL present each Experience_Record with a start date and end date rendered at month-and-year granularity that match the Resume: Graduate DevOps Engineer February 2026 to Present, Cadet DevOps March 2025 to February 2026, Business Banking Associate November 2024 to June 2025, Customer & Digital Service Representative March 2023 to November 2024, and Crew Member August 2019 to March 2023.
4. WHERE an Experience_Record has no Resume end date, THE Portfolio SHALL display the end-date value as the literal text "Present".
5. THE Portfolio SHALL order the five Experience_Records in reverse-chronological order by start date, with the most recent start date first: Graduate DevOps Engineer, Cadet DevOps, Business Banking Associate, Customer & Digital Service Representative, Crew Member.
6. IF a published Experience_Record title, company, location, start date, or end date is not a character-for-character match of the corresponding Resume_Fact, THEN THE Portfolio SHALL display no value that contradicts the Resume for that field.

### Requirement 2: Graduate DevOps Engineer body matches the resume

**User Story:** As a recruiter, I want the current role's description to include every substantive point from the resume, so that I understand the full scope of Ali's platform work.

#### Acceptance Criteria

1. THE Experience_Body for the Graduate DevOps Engineer role SHALL contain text identifying ownership of day-to-day operation and ongoing development of the Coder Cloud Development Environment on AWS, naming the figure 250 as the daily active user count and naming all four infrastructure components: ECS, EC2 workspace instances, RDS PostgreSQL, and an Application Load Balancer.
2. THE Experience_Body for the Graduate DevOps Engineer role SHALL contain text identifying administration and upgrade of a self-managed Artifactory deployment on EKS, and naming all three activities: Helm chart upgrades, Kubernetes cluster maintenance, and container troubleshooting.
3. THE Experience_Body for the Graduate DevOps Engineer role SHALL contain text identifying the Proof-of-Concept trial of GitHub Copilot conducted within Coder, and naming coordination with both internal and external stakeholders.
4. THE Experience_Body for the Graduate DevOps Engineer role SHALL contain text identifying the contribution to the Jira Data Centre to Jira Cloud migration, and naming all three contribution areas: environment planning, data validation, and stakeholder coordination.
5. THE Experience_Body for the Graduate DevOps Engineer role SHALL contain text identifying org-wide developer support, and naming all three support activities: GitLab CI/CD queries, pipeline debugging, and general DevOps troubleshooting.

### Requirement 3: Cadet DevOps body matches the resume

**User Story:** As a recruiter, I want the cadet role to reflect the resume's full detail, so that early DevOps experience is represented accurately.

#### Acceptance Criteria

1. THE Experience_Body for the Cadet DevOps role SHALL contain text identifying administration of Red Hat Enterprise Linux systems in a production on-premises environment, and naming all three activities: patching, configuration management, and routine maintenance.
2. THE Experience_Body for the Cadet DevOps role SHALL contain text identifying the contribution to migration of on-premises workloads to both AWS and Azure, and naming both activities: environment setup and post-migration validation.
3. THE Experience_Body for the Cadet DevOps role SHALL contain text identifying version upgrades and ongoing maintenance performed on both self-managed GitLab and self-managed Artifactory.
4. THE Experience_Body for the Cadet DevOps role SHALL contain text identifying assistance with design and maintenance of GitLab CI/CD pipelines used for application deployment across the organisation.
5. THE Experience_Body for the Cadet DevOps role SHALL contain text identifying collaboration with the DevOps team on improvements to business-critical tools, and naming both tools: Jira and Sparx EA.

### Requirement 4: Business Banking Associate body matches the resume

**User Story:** As a recruiter, I want the banking role to carry the resume's quantified achievements, so that customer-facing impact is credible and specific.

#### Acceptance Criteria

1. THE Experience_Body for the Business Banking Associate role SHALL contain a statement that complex banking products were explained to customers whose financial literacy ranged from low to high, such that a reviewer can locate one sentence conveying both the "complex banking products" explanation and the "varying levels of financial literacy" audience.
2. THE Experience_Body for the Business Banking Associate role SHALL state the customer-experience outcome using the two Resume values exactly: a Net Promoter Score above +70 and a post-call survey completion rate described with the Resume's wording ("high") without substituting any invented numeric percentage.
3. WHERE the Resume provides no numeric value for a metric, THE Experience_Body SHALL reproduce only the Resume's qualitative wording for that metric and SHALL NOT introduce any numeric figure, percentage, or metric not present in the Resume.
4. THE Experience_Body for the Business Banking Associate role SHALL state that escalated complaints and complex queries were resolved, and SHALL state both associated actions: routing issues to the correct specialist teams and reducing incorrect call transfers.
5. IF any of the three Resume achievement areas (product explanation, customer-experience results, complaint resolution and routing) is absent from the Experience_Body, THEN THE requirement SHALL be marked as failed, identifying each missing achievement area.

### Requirement 5: Service NSW body matches the resume

**User Story:** As a recruiter, I want the Service NSW role to reflect the resume's compliance and complaint-handling specifics, so that public-sector judgment is clear.

#### Acceptance Criteria

1. THE Experience_Body for the Customer & Digital Service Representative role SHALL contain a statement that accurate advice was delivered across complex multi-agency transactions.
2. THE Experience_Body for the Customer & Digital Service Representative role SHALL contain a statement that strict compliance with privacy legislation was maintained.
3. THE Experience_Body for the Customer & Digital Service Representative role SHALL contain a statement that escalated complaints involving licensing and registration were handled.
4. THE Experience_Body for the Customer & Digital Service Representative role SHALL contain a statement that such complaints were documented and resolved through appropriate channels.

### Requirement 6: McDonald's body matches the resume

**User Story:** As a recruiter, I want the earliest role to carry the resume's concrete service details, so that the record is specific rather than generic.

#### Acceptance Criteria

1. THE Experience_Body for the Crew Member role SHALL contain a statement that customer service was provided, including resolution of customer complaints and concerns.
2. THE Experience_Body for the Crew Member role SHALL contain a statement that drive-thru flow was managed such that cars had a total experience time of less than 140 seconds.
3. THE Experience_Body for the Crew Member role SHALL contain a statement that the role involved collaboration with fellow crew members to ensure smooth operation of the restaurant.

### Requirement 7: Education surface reflects the resume

**User Story:** As a recruiter, I want to see Ali's education on the site, so that academic credentials are available without opening the PDF.

#### Acceptance Criteria

1. WHEN the Education_Surface is rendered, THE Portfolio SHALL display an Education_Surface that presents every Resume Education fact listed in criteria 2 through 5 as human-readable text within the rendered page markup.
2. THE Education_Surface SHALL state the degree as the text "Bachelor of Information Technology" together with the institution "University of Technology Sydney".
3. THE Education_Surface SHALL state the distinction average using the exact figures "82.58%" labelled as WAM and "6.21" labelled as GPA, and SHALL state the classification label "Distinction".
4. THE Education_Surface SHALL state the major as the text "Enterprise Systems Development" and the sub-major as the text "Networking and Cybersecurity".
5. THE Education_Surface SHALL state the study period as the start year "2023" and the end year "2025".
6. IF an Education fact presented on the Education_Surface differs in any character from the corresponding fact in the Resume, THEN THE Portfolio SHALL exclude that fact from the rendered Education_Surface and SHALL surface a review indication identifying the mismatched fact, while retaining the Resume value as the authoritative source.
7. WHERE a Resume_Fact presented on the Education_Surface is Resume_Only_Material, THE Portfolio SHALL publish that fact only after the fact is confirmed against the Resume and recorded as reviewed in the Alignment_Checklist.

### Requirement 8: Skills surface reflects the resume

**User Story:** As a technically curious peer, I want a categorized view of Ali's technical skills, so that I can gauge depth across platforms and tooling.

#### Acceptance Criteria

1. THE Portfolio SHALL provide a Skills_Surface that presents the Resume's Technical Skills grouped into exactly six categories in this order: Operating Systems, Languages, Cloud & DevOps, Containers & Orchestration, Tooling, and Home lab.
2. THE Skills_Surface SHALL list, under Operating Systems, exactly these four entries: Red Hat Enterprise Linux (RHEL), Amazon Linux, Windows Server, and Linux administration.
3. THE Skills_Surface SHALL list, under Languages, exactly these five entries: Python, Bash, JavaScript / Node.js, HTML/CSS, and Java.
4. THE Skills_Surface SHALL list, under Cloud & DevOps, exactly these nine entries: AWS ECS, EKS, EC2, RDS, ALB, Lambda, IAM, Terraform, and AWS CDK (TypeScript).
5. THE Skills_Surface SHALL list, under Containers & Orchestration, exactly these five entries: Kubernetes, Helm, Docker, production experience on EKS, and self-study on OpenShift.
6. THE Skills_Surface SHALL list, under Tooling, exactly these three entries: GitLab administration, Artifactory, and Jira.
7. THE Skills_Surface SHALL list, under Home lab, exactly these three entries: Linux VMs, RAID storage, and Cisco Meraki networking.
8. THE Skills_Surface SHALL present only the categories and entries enumerated in criteria 1 through 7 and SHALL present no category or entry absent from those criteria.
9. IF a candidate skill entry does not appear in the Resume's Technical Skills section, THEN THE Portfolio SHALL exclude that entry from the Skills_Surface.

### Requirement 9: Achievements surface reflects the resume

**User Story:** As a recruiter, I want to see Ali's achievements and certifications, so that distinctions and credentials are visible on the site.

#### Acceptance Criteria

1. THE Portfolio SHALL provide an Achievements_Surface that presents every Achievement listed in the Resume, with no Achievement omitted and no item added that is absent from the Resume.
2. THE Achievements_Surface SHALL state the placement as "2nd in NSW" for the subject "Information Processes & Technology" in the "2022 HSC", with all three elements (rank, subject, exam year) displayed together.
3. THE Achievements_Surface SHALL state the "AWS Certified Solutions Architect – Associate" certification together with a status label of "in progress", positioned adjacent to the certification name so the two are visually associated.
4. THE Achievements_Surface SHALL NOT display the "AWS Certified Solutions Architect – Associate" certification as completed, earned, achieved, or without a status label.
5. WHERE a Resume_Fact presented on the Achievements_Surface is Resume_Only_Material, THE Portfolio SHALL publish that fact only after the fact is confirmed against the Resume and recorded as reviewed in the Alignment_Checklist.

### Requirement 10: Headline and role copy stay consistent with the resume

**User Story:** As a visitor scanning the home page, I want the headline and role copy to match the resume's current role, so that my first impression is accurate.

#### Acceptance Criteria

1. THE Home_Page SHALL display the current role text exactly as "Graduate DevOps Engineer at the Australian Bureau of Statistics", matching the Resume's current role verbatim.
2. THE Portfolio SHALL display the name exactly as "Ali Bonagdaran" and the location exactly as "Sydney, NSW" on every page where identity or location copy appears, consistent with the Resume.
3. IF Home_Page role copy or standfirst text states any role title, employer, or tenure that differs from the Resume's current role, THEN THE Portfolio SHALL replace that text with the Resume's current role wording before publication.
4. WHEN the Home_Page is reviewed during alignment, THE Portfolio SHALL confirm that the headline, standfirst, and role copy contain no role title, employer name, or tenure absent from the Resume, and SHALL record the outcome as reviewed in the Alignment_Checklist.

### Requirement 11: Contact details reconcile with the resume

**User Story:** As a visitor who wants to reach Ali, I want the contact channels to be accurate and consistent with the resume, so that I can follow up through the right channel.

#### Acceptance Criteria

1. THE Contact_Page SHALL present the email address exactly as "alibonagdaran@gmail.com" as a selectable or mailto-labelled link, consistent with the Resume.
2. THE Contact_Page SHALL provide a labelled link to the Resume PDF that resolves to the published Resume file.
3. WHERE the personal site www.alibo.dev listed in the Resume is surfaced, THE Contact_Page SHALL present it as a link labelled with its destination.
4. IF the personal site www.alibo.dev is omitted from the Contact_Page, THEN THE Portfolio SHALL record the omission as a reconciliation decision in the Alignment_Checklist.
5. THE Contact_Page SHALL present only the following contact channels and no others: the Resume email alibonagdaran@gmail.com, and any channel whose destination resolves to an account owned by Ali Bonagdaran (personal site www.alibo.dev, LinkedIn profile linkedin.com/in/alibonagdaran, GitHub profile github.com/PrinceAlii).

### Requirement 12: Experience skill tags reconcile with the resume vocabulary

**User Story:** As a maintainer, I want each role's skill tags to be supported by the resume, so that the curated tags do not introduce claims absent from the source of truth.

#### Acceptance Criteria

1. THE Skills_Array of each Experience_Record SHALL contain only skills or categories whose wording appears in, or is a direct category grouping of, that same role's content in the Resume.
2. IF a Skills_Array entry has no supporting term in that role's Resume content, THEN THE Portfolio SHALL remove the entry or replace it with a term drawn from that role's Resume content before publication.
3. WHERE a Resume technical skill is listed under a specific role in the Resume, THE Skills_Array for that Experience_Record MAY include that skill using the exact term as it appears in the Resume.
4. WHEN each Experience_Record is reviewed during alignment, THE Portfolio SHALL confirm every Skills_Array entry against that role's Resume content and SHALL record the review outcome in the Alignment_Checklist.

### Requirement 13: Product constraints are honored during alignment

**User Story:** As the site owner, I want alignment work to respect the portfolio's established constraints, so that accuracy does not come at the cost of the site's intent.

#### Acceptance Criteria

1. THE Portfolio SHALL present no personal photograph, profile picture, or portrait-derived visual identity of Ali Bonagdaran on any surface as part of this alignment work.
2. THE Portfolio SHALL NOT add Writing to primary navigation, surface it on the Home_Page as a current section, or otherwise present it as a current destination as part of this alignment work.
3. IF Resume_Only_Material is to be published to any surface, THEN THE Portfolio SHALL publish it only after the fact is confirmed against the Resume and recorded as reviewed in the Alignment_Checklist.
4. THE Portfolio SHALL present only facts that appear in the Resume and SHALL NOT introduce any metric, role, employer, credential, or date that is absent from the Resume.
5. IF any surface is found to contain a metric, role, employer, credential, or date absent from the Resume during alignment, THEN THE Portfolio SHALL remove or correct that content before publication and record the correction in the Alignment_Checklist.

### Requirement 14: Alignment is verifiable against the resume

**User Story:** As an implementer or reviewer, I want a traceable record mapping each resume fact to its site location and status, so that I can verify alignment criterion by criterion.

#### Acceptance Criteria

1. THE Alignment_Checklist SHALL contain one entry for every required Resume_Fact in this document, and each entry SHALL identify the target Portfolio location where that fact appears.
2. THE Alignment_Checklist SHALL record, for each mapped Resume_Fact, a verification status drawn from the set {Matched, Mismatched, Pending}, where Matched means the published Portfolio content is identical to the Resume_Fact, Mismatched means it differs, and Pending means it has not yet been verified.
3. IF a required Resume_Fact has no corresponding entry in the Alignment_Checklist, THEN THE Alignment_Checklist SHALL be treated as incomplete and the fact SHALL be flagged as unmapped.
4. WHEN an In_Scope_Discrepancy is detected, THE Alignment_Checklist SHALL record the discrepancy against the affected Resume_Fact with status Mismatched.
5. WHEN an In_Scope_Discrepancy is reconciled, THE Alignment_Checklist SHALL update the affected Resume_Fact entry to record the reconciliation outcome and set its verification status to Matched.
6. WHEN alignment changes are applied, THE Portfolio SHALL complete its Astro 6 + TypeScript typed-content-collection build with zero build errors and zero content-collection schema validation errors.
7. IF the Portfolio build or its typed content collection validation reports one or more errors after alignment changes are applied, THEN THE Portfolio SHALL be treated as not successfully built and the reported errors SHALL be surfaced to the implementer without discarding the applied alignment changes.
