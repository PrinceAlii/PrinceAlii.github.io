# Portfolio Redesign — Shape Brief

## Job and audience

This is an **Experience** surface for recruiters, engineering peers, and collaborators who need to establish Ali Bonagdaran's professional credibility quickly, then find enough real detail to start a conversation. The portfolio must make specific platform work—not personality content, a portrait, or a decorative project gallery—the first proof.

## Selected direction: Discipline & Signal

Use the selected sketch only for its broad composition: a dark field, large name, deliberate asymmetry, and a disciplined reading order. Do **not** carry over its placeholder diagrams, blue accent, generic project tiles, or wireframe language.

- **World:** a contemporary technical exhibition catalogue: imposing grotesk typography, exact alignment, generous dark negative space, and occasional fine rules. It borrows the confidence of Dasein, the dark physical depth of Aaron James, and the developer-native clarity of Zaggonaut without imitating any of them.
- **Material:** an inky, subtly warm charcoal—not black—with calcium-white type and one low-saturation mineral or oxidised-red signal reserved for active states and the occasional structural mark. No gradients, glow, glass, faux-device framing, terminal simulation, dashboards, or decorative data graphics.
- **Typography:** Schibsted Grotesk leads as the open-source display voice; Source Serif 4 serves long-form reading and occasional considered emphasis. Monospace is not a visual theme. Size, weight, location, and silence create hierarchy.
- **Signature moment:** the home page reads like a well-composed exhibition title wall. Ali's name is architectural; the factual professional line, location, and current work are staged as precise supporting evidence rather than a biography block.
- **Honest risk:** the system is intentionally spare. Its authority depends on exceptionally edited copy, type, spacing, and responsive composition—not an accumulation of visual effects.

## Information architecture and route plan

- **Home:** a compact masthead; the large title composition; an immediately visible professional proposition and resume/contact path; a focused current-work passage; one dominant Reward Seat Finder feature; a compressed experience index; a decisive contact close. No profile image and no generic “skills” wall.
- **Projects index:** a numbered typographic inventory rather than matching cards. Each entry gives problem, medium-length outcome statement, stack in a supporting register, and a clear live/repository route where available.
- **Project detail:** a case-study reading surface that uses pacing and type, not hero screenshots. Problem, approach, technical decisions, and outcome are reshaped into an easy-to-scan long-form sequence, retaining only verified claims.
- **Experience:** a chronological working record with dates, institution, role, and a concise contextual summary. The current ABS role receives visual priority without reducing earlier customer-facing work to an afterthought.
- **Contact:** an intentionally short directory of email, LinkedIn, GitHub, and resume, designed as the final action rather than a form.
- **404:** a terse, useful directional interruption inside the same typographic system.
- **Writing:** remove it from public navigation and treat it as deliberately deferred, rather than presenting an empty publication destination.

## Interaction, layout, and responsive behaviour

- Navigation stays quiet and permanent; direct links read as links and external destinations are clearly signalled.
- Project and experience rows are real semantic links/articles, not clickable divs; hover and focus use a single precise shift in color and rule position, with no animation that obscures content.
- Desktop uses a wide asymmetric grid with controlled oversize type. Mobile recomposes the same hierarchy into a vertical sequence—nothing important is hidden or merely shrunk.
- If motion remains after implementation, use one restrained entrance choreography and honor `prefers-reduced-motion`; it is never required to understand the page.
- Preserve semantic landmarks, visible keyboard focus, robust contrast, touch targets, zoom, and readable measures.

## Explicit anti-goals

- No portrait or profile picture.
- No image generation or synthetic visual assets for this redesign.
- No terminal cosplay, code rain, engineering icon clouds, skills bars, fake statistics, faux dashboards, rounded-card grids, gradient fills, blue neon, glassmorphism, or “available for work” posturing.
- No invented achievements, customer proof, project metrics, or project imagery.

## Delivery plan (implementation begins only after approval)

1. Establish the approved type, color, spacing, layout, and interaction primitives in the shared shell; replace inherited visual rules completely.
2. Build the home page as the system's compositional proof, then validate it at desktop and mobile sizes.
3. Apply the system to project index/detail, experience, contact, 404, metadata, favicon, and social share art; retire the public writing route from navigation.
4. Review copy against the approved source material and publish only verified evidence.
5. Run accessibility, lint/build, responsive visual QA, and the Impeccable finish review before recording the final durable `DESIGN.md` from the implemented result.

## Open decisions

- Exact selection and phrasing of education, certification, and achievement material from the resume; every addition must be checked against the source before publishing.
