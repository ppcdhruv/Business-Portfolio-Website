# ViziGrowth Website AI Design & Development Brief

This document serves as the primary input prompt for any AI agent tasked with building or maintaining the ViziGrowth website. Adhere strictly to the principles, components, and structures outlined below to ensure a consistent, high-quality, and on-brand final product.

---

## Section A: Project Overview & Business Context

- **Service Offering:** Build a website for a conversion funnel optimization service targeting B2B/SaaS founders.
- **Target Audience:** The design and copy must resonate with businesses in the $100K-$2M ARR range that have existing traffic but suffer from poor conversion rates.
- **Primary Conversion Goal:** All design and user flow decisions must prioritize driving signups for a 10-minute funnel audit.
- **Value Proposition:** Emphasize a fixed-price model, a 7-day delivery timeline, and data-driven, measurable results.

---

## Section B: Design System Philosophy

- **Core Aesthetic:** Implement a design system inspired by clean, text-editor-like interfaces (e.g., Notion, Bear, Linear) combined with a bento box grid layout.
- **Visual Principles:**
  - **Separation:** Do not use shadows. Use 1px solid borders with subtle opacity for all container separation.
  - **Color:** Employ a subtle, low-saturation color palette.
  - **Whitespace:** Ensure generous whitespace and breathing room around all elements.
  - **Layout:** Utilize asymmetric grid layouts to create visual interest and guide the user's eye.
  - **Typography:** Maintain clean typography with tight letter-spacing for headings and relaxed line-height for body text.
- **Color Strategy:**
  - **Primary:** Use desaturated blues as the primary action color.
  - **Accents:** Use accent colors minimally and only for critical status indicators or highlights.
- **Border Treatment:** All borders must be `1px solid` with a subtle opacity (e.g., `slate-200/80`).
- **Spacing System:**
  - **Base Unit:** Use a 4px base unit for all spacing and sizing.
  - **Padding:** Apply generous padding to cards and containers, typically 24px to 32px.

---

## Section C: Typography & Text Hierarchy

- **Headings:**
  - **Style:** Bold font-weight.
  - **Tracking:** Apply `-0.02em` letter-spacing.
  - **Hierarchy:** Ensure a clear and consistent visual hierarchy between h1, h2, h3, etc.
- **Body Text:**
  - **Tracking:** Apply `-0.01em` letter-spacing.
  - **Line Height:** Use a relaxed line-height between `1.6` and `1.7`.
- **Font Stack:**
  - **Sans-Serif:** Use 'Inter' or 'Geist' for all primary text.
  - **Monospace:** Reserve a monospace font for any code snippets or technical callouts.
- **Sizing Scale:**
  - **Base:** Set the base body text size to 15px.
  - **Headings:** Use a clear scale, such as 24px, 32px, 48px, and 64px for headings.
- **Utility Classes:** Create and apply `.editor-text` and `.editor-heading` for consistent text styling.

---

## Section D: Component System

- **Bento Cards (`.bento-card`):**
  - **Style:** Must have a `1px` border, rounded corners, and generous padding.
  - **Constraint:** Must not have any box-shadow.
- **Icon Treatment:**
  - **Style:** Design icons to appear within small, border-based boxes.
  - **Constraint:** Avoid filled circles or heavy background shapes for icons.
- **Buttons:**
  - **Primary:** Solid background color.
  - **Secondary:** Outlined style with a transparent background and a `1px` border.
  - **Hover States:** Implement minimal hover states, primarily a slight color shift. Avoid scaling or shadow effects on hover.
- **Badges:** Design badges to be small, subtle, and low-contrast to avoid distracting from primary content.
- **Grid Layouts:** Use CSS Grid for page layouts. Implement asymmetric spanning (e.g., `col-span-4`, `col-span-3`) to create dynamic compositions.

---

## Section E: Page Structure & Sections

Construct the main landing page by assembling the following sections in this precise order:

1.  **Hero:** Left-aligned text with rotating headlines for dynamic messaging.
2.  **Trust Bar:** A borderless component displaying key metrics (e.g., avg. conversion lift, turnaround time).
3.  **Problem Section:** An asymmetric bento grid layout (e.g., one 4-col card + two 3-col cards).
4.  **Wedge Comparison:** A comparison table housed within a single, wide bento card.
5.  **Case Studies:** A 3-column, equal-width grid of case study cards.
6.  **Guarantee Section:** A centered-text section with a 3-column feature list below it.
7.  **Fit Comparison:** A 2-column layout comparing "Good Fit" vs. "Bad Fit" criteria.
8.  **Pricing:** A 2-column layout for pricing plans.
9.  **Process:** A vertical timeline component illustrating the workflow.
10. **Final CTA:** A final, highlighted call-to-action card to capture conversions.

---

## Section F: Interaction & Animation Principles

- **Accessibility:** Respect `prefers-reduced-motion` settings in all animations.
- **Scroll Animations:** Implement a subtle fade-in-on-scroll effect using `opacity` and a slight `transform: translateY()`.
- **Hover States:** Keep hover interactions minimal. A slight color shift is preferred. Do not use scaling or shadow transitions.
- **Staggered Animations:** When animating grid items into view, apply a staggered delay (e.g., 0.1s increments) to create a smooth, cascading effect.

---

## Section G: Conversion Optimization Strategy

- **CTAs:** Place multiple Call-to-Action elements throughout the page. The primary CTA must be for the audit signup.
- **Social Proof:** Integrate social proof strategically through metrics, case studies, and testimonials.
- **Risk Reversal:** Clearly feature the 30-day guarantee and refund policy to build trust.
- **Lead Qualification:** Use the "Is this for you?" section to filter out unqualified leads and improve lead quality.
- **Calculator:** Build an interactive ROI projection tool to demonstrate value tangibly.

---

## Section H: Technical Stack & Requirements

- **Framework:** Next.js 14+ with the App Router.
- **Language/Library:** React 18+ with TypeScript.
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion.
- **Component Base:** Use shadcn/ui components as a starting point where applicable, customized to fit the design system.
- **Responsiveness:** Implement a mobile-first responsive design that works flawlessly on all screen sizes.
- **Accessibility:** Adhere to WCAG 2.1 AA standards. Ensure proper use of ARIA labels, full keyboard navigation, and semantic HTML.

---

## Section I: Content Tone & Messaging

- **Tone:** Adopt a direct, no-BS tone, as if a founder is speaking directly to another founder.
- **Data-Driven:** Lead with numbers, metrics, and concrete results (e.g., conversion percentages, timelines).
- **Empathy:** Use problem-aware messaging that acknowledges and validates the target audience's pain points.
- **Credibility:** Prioritize proof over promises by highlighting case studies, data, and guarantees.
- **Clarity:** Write concise copy. Avoid marketing jargon, fluff, and vague statements.

---

## Section J: Key Design Differentiators

- **Layout:** The primary differentiator is the use of asymmetric bento grids, not standard equal-column layouts.
- **Aesthetic:** The site must feel like a clean, well-designed text editor, not a typical, flashy SaaS landing page.
- **Interactions:** Prefer inline elements (like the ROI calculator) over modals or pop-ups wherever possible to reduce friction.
- **Focus:** Keep data and key metrics front and center in the design.
- **Simplicity:** The design must be characterized by minimal decoration and maximum clarity.

---

## Validation Checklist

Upon completion of any build or update, verify the following:

- [ ] **Design Consistency:** All components, spacing, and typography adhere to the design system outlined in Section B, C, and D.
- [ ] **Conversion Flow:** The primary conversion path (funnel audit signup) is clear, frictionless, and accessible from multiple points.
- [ ] **Accessibility:** The site is fully navigable via keyboard, all images have alt text, and ARIA attributes are used correctly.
- [ ] **Mobile Responsiveness:** All sections render perfectly across a range of devices, from small mobile screens to large desktops.
- [ ] **Performance:** The site achieves a Google PageSpeed score of 90+ on both mobile and desktop.