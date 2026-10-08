---
name: Ali Bonagdaran Portfolio
description: A dark, typographic record of platform engineering work, experience, and direct contact.
colors:
  field: "oklch(14.8% 0.018 155)"
  field-raised: "oklch(18.2% 0.018 155)"
  ink: "oklch(93.5% 0.014 102)"
  copy: "oklch(79% 0.018 102)"
  stone: "oklch(62% 0.018 115)"
  line: "oklch(33% 0.018 155)"
  line-strong: "oklch(47% 0.022 155)"
  signal: "oklch(58% 0.105 28)"
  signal-light: "oklch(75% 0.075 32)"
typography:
  scale:
    label: "0.7rem"
    compact: "0.72rem"
    micro: "0.75rem"
    meta: "0.78rem"
    nav: "0.8rem"
    back-link: "0.82rem"
    context: "0.84rem"
    action: "0.88rem"
    small: "0.9rem"
    mobile: "0.95rem"
    base: "1rem"
    body: "1.0625rem"
    reading: "1.1rem"
    role: "clamp(1.35rem, 2.6vw, 2rem)"
    standfirst: "clamp(1.05rem, 1.6vw, 1.2rem)"
    deck: "clamp(1.1rem, 1.8vw, 1.35rem)"
    role-summary: "clamp(1.2rem, 2vw, 1.45rem)"
    contact-value: "clamp(1.15rem, 2.5vw, 1.8rem)"
    project-title: "clamp(1.8rem, 4vw, 3.25rem)"
    prose-heading: "clamp(1.55rem, 3vw, 2.2rem)"
    experience-title: "clamp(1.65rem, 3vw, 2.6rem)"
    closing-title: "clamp(2.8rem, 6vw, 5rem)"
    not-found: "clamp(4rem, 12vw, 6rem)"
  home-role:
    fontSize: "clamp(1.35rem, 2.6vw, 2rem)"
  home-standfirst:
    fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)"
  section-deck:
    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)"
  role-summary:
    fontSize: "clamp(1.2rem, 2vw, 1.45rem)"
  closing-title:
    fontSize: "clamp(2.8rem, 6vw, 5rem)"
  project-title:
    fontSize: "clamp(1.8rem, 4vw, 3.25rem)"
  prose-heading:
    fontSize: "clamp(1.55rem, 3vw, 2.2rem)"
  experience-title:
    fontSize: "clamp(1.65rem, 3vw, 2.6rem)"
  not-found-title:
    fontSize: "clamp(4rem, 12vw, 6rem)"
  display:
    fontFamily: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(3.2rem, 9.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1.15rem, 2vw, 1.45rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Source Serif 4, Georgia, "Times New Roman", serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "0.7rem"
    fontWeight: 650
    letterSpacing: "0.12em"
spacing:
  page-inline: "clamp(1.25rem, 4vw, 4rem)"
components:
  primary-navigation:
    textColor: "{colors.stone}"
    typography: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif / 0.8rem / 600 / 0.04em'
    height: "44px"
  text-link:
    textColor: "{colors.ink}"
    typography: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif / 0.88rem / 650 / 1.25'
    height: "44px"
  home-contact-close:
    textColor: "{colors.ink}"
    layout: "asymmetric two-column contact close with stacked mobile groups"
    padding: "clamp(4rem, 8vw, 7rem)"
  project-entry:
    textColor: "{colors.copy}"
    padding: "clamp(2rem, 5vw, 4rem) 0"
  current-experience-entry:
    backgroundColor: "{colors.field-raised}"
    textColor: "{colors.copy}"
  contact-directory-entry:
    textColor: "{colors.ink}"
    typography: 'Schibsted Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif / clamp(1.15rem, 2.5vw, 1.8rem) / 550 / -0.025em'
    height: "6.5rem"
---

# Design System: Ali Bonagdaran Portfolio

## Overview

**Creative North Star: "Discipline & Signal"**

This is a contemporary technical exhibition catalogue for a platform engineer. It is authorial, exact, self-possessed, and materially technical: specific work and verified professional context make the credibility case, while the interface stays quiet enough for that evidence to lead. The root layout's direction contract is a warm green-black graphite field, calcium-white type, Source Serif 4 as the reading voice, Schibsted Grotesk as the display and UI voice, exact rules, and one oxidised-red signal.

The system is static, semantic Astro composition rather than a product UI. Desktop layouts use asymmetric columns, oversized type, long quiet fields, and thin rules; mobile deliberately recomposes those relationships into a readable single-column record. There is no image-led identity: the square AB favicon and typographic social card extend the same flat palette and rule language. Writing exists as an intentionally unlisted, empty route until there are real notes worth publishing.

**Key Characteristics:**

- Technical exhibition-catalogue pacing with proof close to the surface.
- Warm graphite, calcium type, weathered stone, and one restrained red signal.
- Typographic hierarchy and fine rules carry personality; imagery and effects do not.
- Semantic lists, links, headings, and content collections keep the record durable.
- Responsive recomposition, visible focus, and removable motion are part of the system.

## Colors

The palette stays in a subtly warm green-black range: the field and raised field create tonal separation, ink and copy establish hierarchy, stone handles quiet metadata, rules structure the page, and the signal is deliberately rare.

### Primary

- **Oxidised Red Signal** (`signal`): Reserved for semantic punctuation and attention—the active-navigation underline, focus treatment, selection, skipped-content affordance, list markers, external-link marks, and the occasional signal label. Its light companion is used where the signal needs readable contrast on the dark field.

### Neutral

- **Warm Graphite Field** (`field`): The page and document canvas.
- **Raised Graphite** (`field-raised`): A tonal surface for the featured-work band, the current experience entry, and inline code; it is never a floating card.
- **Calcium Ink** (`ink`): Primary headings, strong links, and high-priority facts.
- **Weathered Copy** (`copy`): Default reading text on the dark field.
- **Weathered Stone** (`stone`): Supporting metadata, labels, dates, stacks, and subdued navigation.
- **Fine Rule** (`line`): The default one-pixel divider and structural line.
- **Strong Rule** (`line-strong`): Higher-contrast edges around the raised featured and current-role surfaces.

### Named Rules

**The One Signal Rule.** The oxidised-red signal is sparse semantic punctuation, not a general decoration or a fill color for whole sections.

**The Tonal Field Rule.** Use `field-raised` only when a bounded reading band or current-role emphasis needs separation; do not turn tonal layering into a card system.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Helvetica, Arial, sans-serif)

**Body Font:** Source Serif 4 (with Georgia, Times New Roman, serif)

**Label/Mono Font:** Schibsted Grotesk also carries labels and metadata; there is no mono voice in this system.

**Character:** Schibsted Grotesk supplies a firm, programmer-native display and interface voice without terminal cosplay. Source Serif 4 slows the reading surfaces down and gives project case studies and experience evidence a human, editorial cadence.

### Hierarchy

- **Display** (700, `clamp(3.2rem, 9.5vw, 6rem)`, 1, `-0.04em`): Architectural page and home titles, led by the name on the first viewport.
- **Headline** (650, `clamp(1.8rem, 3.5vw, 3.2rem)`, 1, `-0.025em`): Section headings and the primary structural voice.
- **Title** (650, `clamp(1.15rem, 2vw, 1.45rem)`, 1, `-0.025em`): Smaller semantic headings; route-specific entries may scale upward while retaining the same display family.
- **Body** (400, `1.0625rem`, 1.65): Default reading copy, with long-form prose widened only to the readable `68ch` measure.
- **Label** (650, `0.7rem`, `0.12em`, uppercase): Metadata, dates, navigation support, index labels, and status signals in the UI voice.

### Named Rules

**The Two Voices Rule.** Use Schibsted Grotesk for display, navigation, metadata, context registers, and links; use Source Serif 4 for ordinary reading copy and case-study prose. Do not add a mono fallback to manufacture a technical mood.

## Layout

The shared shell is centered at a maximum measure of `84rem` and uses `--page-inline: clamp(1.25rem, 4vw, 4rem)` for both inline padding and the full-bleed featured band's negative margin. The body enforces an `18rem` minimum width, while the content measure and reading measure remain separate: the former gives the catalogue room to breathe, the latter keeps prose close to `68ch`.

Desktop composition is intentionally asymmetric. The home hero uses a single-column reading path with a minimum height of `min(48rem, calc(100svh - 5rem))`; section headers, current-role records, page intros, project details, experience records, and the contact close use unequal fractional columns with generous responsive gaps. Lists are ruled rows rather than cards. Project details keep their evidence and direct links close to the work; they do not introduce a global card surface.

At `60rem` and below, major two-column compositions collapse to one column, sticky project metadata becomes static two-column support, and the current experience row receives an inset inline boundary. At `44rem` and below, the current-role record, contact close, project records, experience records, writing rows, and contact rows all stack to one column; the header becomes a compact two-row grid; project stacks become left-aligned; the current role becomes a full-bleed raised band. The contact close keeps the email first, then social links, then practical contact/resume actions. This is deliberate recomposition, not a scaled-down desktop grid.

The recurring rhythm is generous block padding expressed with clamps (`4.5rem–8rem` for sections, `5rem–9rem` for page introductions, `4rem–7rem` for the home contact close, and smaller spacing before the copyright footer) plus one-pixel rules. Semantic `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<dl>`, `<ul>`, and anchor patterns carry the information architecture; Astro renders the routes statically without a client-side interaction layer.

### Named Rules

**The Recomposition Rule.** Preserve hierarchy and reading order across breakpoints, but recompute columns, alignment, and emphasis for the available width.

## Elevation & Depth

This is a flat-by-default system. Depth comes from the contrast between `field` and `field-raised`, one-pixel rules, generous negative space, and typographic scale—not from floating cards, ambient shadows, gradients, glass, or blur. The only shadow declaration is the current-role treatment: two one-pixel inset rules using `line-strong`, which behaves as a structural boundary rather than elevation.

### Shadow Vocabulary

- **Current-role inset boundary** (`inset 0 1px 0 var(--color-line-strong), inset 0 -1px 0 var(--color-line-strong)`): A flat structural emphasis for the present ABS role; it does not lift the row off the page.

### Named Rules

**The Flat Field Rule.** Surfaces remain flat at rest. Tonal separation and rules should explain hierarchy before any shadow is considered.

## Shapes

The form language is square-edged and editorial. The implementation defines no border-radius tokens and uses no rounded card, pill, chip, or input silhouette. Structural boundaries are one-pixel rules; the raised feature band and current-role band are full-width tonal fields; inline code is a small square-edged field with a one-pixel rule. Links use underlines, not filled button geometry.

### Named Rules

**The Square Edge Rule.** Keep recurring surfaces and interactive affordances rectangular, quiet, and governed by rules; do not soften the catalogue into rounded-card UI.

## Components

There is no button or input system in the shipped site. Calls to action are semantic anchors with a 44px minimum hit target, underlines, text color changes, and the shared focus treatment. There are no chips, badges, logos, or card grids.

### Navigation

The shared header pairs the `AB` initials mark and Ali Bonagdaran wordmark on the left with four primary links—Home, Projects, Experience, and Contact—on the right. Navigation uses Schibsted Grotesk at `0.8rem`, weight `600`, `0.04em` tracking, subdued stone at rest, and calcium ink on hover or the current route. The current route is an underlined state using the signal color. All navigation items are at least `44px` high; at `44rem` and below the header becomes a two-row grid and the links align to the left. Writing is intentionally absent from primary navigation.

### Footer

The shared footer closes every route with a top rule and a single copyright line: `© [year] Ali Bonagdaran`. It does not add a location, a call-to-action, or a second layer of site commentary.

### Text Links

Text links are the action primitive: calcium ink, Schibsted Grotesk, `0.88rem`, weight `650`, and a minimum `44px` inline hit target. The default underline uses the signal color; hover shifts the text to the light signal. External destinations append a small `↗` mark, and the same pattern is used for resume, project, case-study, live-tool, source, back, and contact actions.

### Project Entries

`ProjectSummary` renders each selected project as a ruled, asymmetric record: a two-digit index, title link, right-aligned technology stack, description, and inline case-study/live/source links. The project list contains the two shipped entries—Reward Seat Finder and This Portfolio Website—sorted with featured work first. Desktop uses a narrow index column and a wider record column; mobile stacks the index, title, stack, description, and links.

### Experience Entries

`ExperienceItem` renders a chronological record with dates and location in the supporting column, title and company in the main column, reading prose, and a slash-separated list of areas of work. The current Graduate DevOps Engineer role at the Australian Bureau of Statistics is marked `Current role` and receives the raised graphite treatment; earlier ABS, Service NSW, Commonwealth Bank, and McDonald's records remain ruled, flat entries. Date ranges read "Feb 2026 to Present". Desktop preserves the asymmetric two-column relationship; mobile stacks dates before evidence.

### Record Sections

Below the experience list, Education, Technical skills, and Achievements render as `record-section` blocks: the section heading sits in the same supporting column as the experience dates, and the facts sit in the main column as ruled `record-row` lines (a small uppercase stone label, then a calcium UI-voice value). Skill entries use the same slash separators as the experience areas of work. The in-progress certification uses the `entry-status` signal label. At `60rem` the heading stacks above the rows; at `44rem` each row stacks label above value. Data lives in typed modules under `src/data/`.

### Home Contact Close

The home page closes with a direct contact section rather than another project pitch. `Contact` leads on the left; the email occupies the first row on the right, followed by the LinkedIn and GitHub links, then the all-details and resume actions. Desktop keeps the heading and contact group in an asymmetric two-column composition; mobile stacks the same reading order. The shared copyright footer follows with a reduced spacer and one top rule.

### Contact Directory

The contact route is a five-row semantic navigation directory: `01` Email, `02` Website, `03` LinkedIn, `04` GitHub, and `05` Resume. Each row is a full-width ruled anchor with a small type label and a large value. Hover changes the value to the light signal; external rows use `↗`; values can wrap anywhere for narrow screens. On mobile the three-column directory becomes a stacked single-column record with `1.4rem` vertical padding.

### Focus, Motion, and Reduced Motion

All visible anchors and buttons share a `2px` signal-light `outline` with a `4px` offset on `:focus-visible`. The skip link enters from above on focus, while `main` is keyboard-targetable with `tabindex="-1"`. The home hero and page introductions use the `enter-up` animation with a `1rem` vertical offset, `700ms` for the home hero and `650ms` for page introductions, both using the exponential-out easing token. Link color and underline transitions use `180ms` with the same easing. `prefers-reduced-motion: reduce` disables the entrance animations, changes smooth scrolling to auto, and reduces link transition duration to `0.01ms`.

## Do's and Don'ts

Concrete guardrails for extending the shipped system:

### Do:

- **Do** use the normative graphite, calcium, stone, rule, and signal tokens from the frontmatter; keep the oxidised red rare and meaningful.
- **Do** pair Schibsted Grotesk display/UI text with Source Serif 4 reading text, preserving the existing weight and tracking hierarchy.
- **Do** use semantic, server-rendered Astro structures—headings, lists, definitions, navigation, articles, and direct anchors—when adding records or routes.
- **Do** preserve the centered `84rem` shell, `clamp(1.25rem, 4vw, 4rem)` inline measure, ruled rows, readable `68ch` prose measure, and the `60rem` / `44rem` responsive recomposition behavior.
- **Do** make focus visible, keep interactive links at least `44px` high, and ensure a state is not communicated by color or hover alone.
- **Do** keep depth flat: use tonal fields, fine rules, quiet space, and the single current-role inset boundary to explain hierarchy.
- **Do** keep the contact directory direct and the featured-work treatment evidence-led; only publish verified claims.
- **Do** use sentence case for labels, statuses, metadata, and contact types. Reserve uppercase for genuine acronyms, not as a default eyebrow treatment.
- **Do** write direct, human copy that describes the work or next action.

### Don't:

- **Don't** add portraits, stock imagery, generative imagery, synthetic visual assets, decorative diagrams, logo clouds, dashboards, skills bars, or faux-terminal treatments.
- **Don't** introduce gradients, glass, blur, glow, blue-neon, cyan, purple, pure black/white, or a second accent color.
- **Don't** turn sections or records into rounded cards, pills, chips, elevated panels, or generic button grids.
- **Don't** invent a button, form, input, testimonial, client proof, metric, or public-writing breadth that the implementation does not contain.
- **Don't** use mono typography as a shortcut for technical credibility; the display/UI voice is Schibsted Grotesk.
- **Don't** make navigation or meaning depend on hover, animation, or the oxidised-red signal alone; keep semantic labels, underlines, and focus states intact.
- **Don't** promote route-specific composition—such as the home feature band's exact grid—into a new global token or reusable card pattern.
- **Don't** use prompt-spec copy such as "Selected work", "Reward Seat Finder and this portfolio", or other labels that sound like an instruction or inventory generated for a brief. Prefer plain, visitor-facing language.
