# Website Improvement Plan

## Overview
This plan outlines the steps to modernize and polish the personal portfolio website for Ali Bonagdaran. The focus is on enhancing the visual design, improving user experience (UX), and refining the content presentation.

## Phase 1: Visual Design & UI Polish

### 1.1 Enhanced Theme Toggle
- **Current State:** A simple text button toggles between "Dark" and "Light".
- **Goal:** Replace with a sleek icon-based toggle (Sun/Moon).
- **Action Items:**
  - Import or create SVG icons for Sun and Moon.
  - Update `index.html` to house the icon container.
  - Update `src/main.js` to toggle the icon state along with the theme.
  - animate the transition between icons.

### 1.2 Hero Section Refinement
- **Current State:** Pixel art background with text overlay. Contrast could be better. Two buttons (Learn More, Download Resume).
- **Goal:** Improve legibility and clarify the call-to-action (CTA).
- **Action Items:**
  - **Contrast:** Adjust the gradient overlay in `src/styles.css` to ensure text pops against the animated background.
  - **CTAs:**
    - Primary Button: "View Projects" (solid brand color).
    - Secondary Button: "Contact Me" or "Download Resume" (outline style).
  - **Typography:** Increase the weight of the main heading slightly for better impact.

### 1.3 Card Styling & Interactivity
- **Current State:** Simple cards with a slight lift on hover.
- **Goal:** Make cards feel more tactile and modern.
- **Action Items:**
  - **Hover Effects:** Add a subtle glow (box-shadow) or border color change on hover using the brand color.
  - **Layout:** Ensure consistent padding and alignment within cards (Experience, Education, Projects).
  - **Tags:** Style project tags to be more distinct (e.g., pill shape with subtle background).

### 1.4 Navigation & Footer
- **Current State:** Sticky header, simple footer.
- **Goal:** Ensure smooth navigation and a polished footer.
- **Action Items:**
  - **Active State:** Verify scroll-spy logic highlights the correct link.
  - **Mobile Menu:** Ensure navigation is responsive (hamburger menu for mobile if needed, or scrollable horizontal list).
  - **Footer:** Add social icons to the footer as well for easy access at the bottom of the page.

## Phase 2: Content & Copy Enhancements

### 2.1 Project Showcase
- **Current State:** Basic project cards with title, summary, and tags.
- **Goal:** Provide more context and impact.
- **Action Items:**
  - **Detail:** If data allows, add a "Key Achievement" bullet or a more descriptive summary.
  - **Links:** Ensure "GitHub" and "Live Demo" (if available) links are distinct icons/buttons.
  - **Images:** Ensure project screenshots have a consistent aspect ratio (cover/contain).

### 2.2 Experience Section
- **Current State:** List of roles with bullets.
- **Goal:** Improve readability and visual hierarchy.
- **Action Items:**
  - **Timeline:** Consider a visual timeline connector (vertical line) to show progression.
  - **Role vs. Company:** Make the Role title bold and prominent, Company secondary.

### 2.3 About Section
- **Current State:** Markdown rendered text.
- **Goal:** Break up large text blocks.
- **Action Items:**
  - **Formatting:** Ensure headers, lists, and paragraphs in `about.md` are styled with `prose` classes (Tailwind Typography) for readability.
  - **Personal Touch:** Consider adding a profile photo next to the text if not already present.

## Phase 3: Technical & Performance

### 3.1 Code Quality
- **Refactoring:**
  - `src/content.js`: Break down large template literal functions into smaller components if they grow.
  - `src/styles.css`: Organize custom CSS and use Tailwind `@apply` consistently.

### 3.2 Accessibility (A11y)
- **Goal:** Ensure the site is usable by everyone.
- **Action Items:**
  - **Contrast:** Verify color contrast ratios (especially text on images).
  - **Focus States:** Ensure all interactive elements (buttons, links) have visible focus indicators.
  - **ARIA:** Check `aria-label` on icon-only buttons (like social links).

### 3.3 Performance
- **Goal:** Fast load times.
- **Action Items:**
  - **Images:** Optimize the `koi-pond.gif` and `cityscape.gif`. Consider converting to modern video formats (WebM/MP4) or optimized GIF if size is an issue.
  - **Lazy Loading:** Ensure images below the fold are lazy-loaded.

## Execution Order
1.  **UI/Theme:** Fix the toggle and hero styles.
2.  **Cards:** Upgrade the look of Experience and Project cards.
3.  **Content:** Refine the copy and layout of text sections.
4.  **Review:** Final polish and accessibility check.
