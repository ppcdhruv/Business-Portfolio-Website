# ViziGrowth Website AI Development & Maintenance Prompt

**Objective:** This document serves as the primary and definitive input prompt for any AI agent tasked with building, updating, or maintaining the ViziGrowth website. Strict adherence to the principles, components, and structures outlined below is mandatory to ensure a consistent, high-quality, and on-brand final product.

---

## Section 1: Core Project Directives

- **Primary Service:** ViziGrowth is a conversion funnel optimization service.
- **Target Audience:** The website's design, copy, and functionality must be tailored for B2B/SaaS founders with businesses in the $100K-$2M ARR range. These founders have existing website traffic but suffer from poor conversion rates.
- **Primary Conversion Goal:** The absolute priority for all development and design work is to drive signups for the free 10-minute funnel audit. Every element must contribute to this goal.
- **Core Value Proposition:** The website must clearly communicate the key differentiators:
    - Fixed-price project model.
    - 7-day delivery timeline.
    - Data-driven, measurable results.

---

## Section 2: Design System & Visual Philosophy

- **Core Aesthetic:** The design must be a synthesis of a clean, text-editor-like interface (e.g., Notion, Bear, Linear) and a bento box grid layout. It should feel professional, structured, and data-focused.
- **Visual Principles:**
  - **Separation:** **Do not use shadows.** All container separation must be achieved with `1px` solid borders with subtle opacity (e.g., `zinc-200/80` in light mode, `zinc-800/80` in dark mode).
  - **Color Palette:** Employ a subtle, low-saturation color palette. The primary action color is amber (`amber-500`/`amber-400`), used for CTAs and key highlights.
  - **Whitespace:** Implement generous whitespace around all elements to ensure content is breathable and easy to parse.
  - **Layout:** Use asymmetric CSS Grid layouts (e.g., combining `col-span-4` and `col-span-3` within a grid) to create visual interest and guide the user's eye.
  - **Typography:** Maintain clean typography with tight letter-spacing for headings and a relaxed line-height for body text.

---

## Section 3: Typography & Text Hierarchy

- **Font Stack:** Use 'Poppins' as the primary font for all text.
- **Headings (h1, h2, h3, etc.):**
  - **Style:** Bold font-weight.
  - **Tracking:** Apply tight letter-spacing (e.g., `tracking-tighter`).
- **Body Text (p, li, etc.):**
  - **Line Height:** Use a relaxed line-height (e.g., `leading-relaxed`).
- **Sizing Scale:**
  - **Base:** Set the base body text size to `16px`.
  - **Headings:** Use a clear, descending scale for headings (e.g., 60px, 48px, 36px, 24px).

---

## Section 4: Component Library

- **Bento Cards (`.bento-card`):**
  - **Structure:** Must have a `1px` border, rounded corners (`rounded-2xl`), and generous padding.
  - **Constraint:** **Must not have any box-shadow.** A subtle background color change on hover is permitted.
- **Buttons:**
  - **Primary:** Solid amber background color.
  - **Secondary:** Outlined style with a transparent or neutral background and a `1px` border.
  - **Hover States:** Implement minimal hover states, primarily a slight color shift or subtle transform (`-translate-y-0.5`).
- **Badges:** Design badges to be small, subtle, and low-contrast to avoid distracting from primary content.

---

## Section 5: Landing Page Structure

Construct the main landing page by assembling the following sections in this **exact order**:

1.  **Header:** Sticky navigation with links to key sections and theme toggle.
2.  **Hero:** Rotating headlines for pain points, a central visualization of the 'before vs. after' transformation, and clear CTAs.
3.  **Wedge Comparison:** A two-column layout comparing a standard website ("Your site today") to a conversion system ("What we build").
4.  **Case Studies:** An interactive, horizontally-scrolling gallery showcasing real-world results, filterable by industry.
5.  **Problem & Solution:** A three-pillar breakdown of performance issues (Experience, Targeting, Data).
6.  **About:** An introduction to the founder, Dhruv, highlighting his experience.
7.  **Service Modules:** A horizontal carousel detailing the core capabilities (Traffic, Leads, Nurture, AI).
8.  **Investment:** A three-column pricing section outlining the packages.
9.  **Fit Check:** A two-column layout defining "Good Fit" vs. "Bad Fit" to pre-qualify leads.
10. **Final CTA:** A prominent final section with a lead capture form.
11. **Footer:** Contains links to FAQ, Privacy Policy, and social media.

---

## Section 6: Interaction & Animation

- **Accessibility:** All animations must respect `prefers-reduced-motion` settings.
- **Scroll Animations:** Use subtle fade-in-on-scroll effects combining `opacity` and a slight `transform: translateY()`.
- **Hover States:** Keep hover interactions minimal and polished (e.g., slight color shifts, minor transforms). Avoid large scaling or shadow effects.
- **Staggered Animations:** When animating lists or grid items into view, apply a staggered delay to create a smooth, cascading effect.

---

## Section 7: Technical & Content Requirements

- **Framework:** React 18+ with TypeScript.
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion.
- **Responsiveness:** All components and layouts must be mobile-first and fully responsive.
- **Accessibility:** Adhere to WCAG 2.1 AA standards. Ensure proper use of ARIA labels, full keyboard navigation, and semantic HTML.
- **Content Tone:** The tone must be direct, confident, and empathetic, as if a founder is speaking directly to another founder. Prioritize data, metrics, and concrete results over marketing fluff.

---

## Validation Checklist

Upon completion of any build or update, the AI agent must verify the following:

- [ ] **Design System Adherence:** All components, spacing, and typography strictly follow Sections 2, 3, and 4.
- [ ] **Conversion Focus:** The primary conversion path (funnel audit signup) is clear, frictionless, and accessible from multiple points on the page.
- [ ] **Accessibility Compliance:** The site is fully navigable via keyboard, all images have `alt` text, and ARIA attributes are used correctly.
- [ ] **Mobile-First Responsiveness:** All sections render perfectly across devices from 375px to 1920px wide.
- [ ] **Performance:** The site achieves a Google PageSpeed score of 90+ on both mobile and desktop.
