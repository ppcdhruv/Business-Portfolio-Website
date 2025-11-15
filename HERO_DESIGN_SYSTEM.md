# Hero Section Design System & Golden Rules

This document codifies the design principles, layout, and aesthetic of the ViziGrowth Hero section. It serves as the "golden standard" for optimizing all other sections of the website to ensure a consistent, premium, and high-converting user experience.

---

### 1. Core Philosophy: "Above the Fold, Above All Else"

The hero is the most valuable real estate on the page. Its design must be relentlessly focused on three goals, in order:

- **Clarity:** Instantly communicate the core value proposition.
- **Credibility:** Immediately build trust with tangible, data-backed proof.
- **Engagement:** Draw the user in with subtle, polished micro-interactions.

---

### 2. Layout & Spacing

- **Structure:** The section must be full-width with significant vertical padding (e.g., `pt-28 sm:pt-40`, `pb-20 sm:pb-28`) to create an airy, focused feel.
- **Alignment:** All content is strictly center-aligned within a `max-w-4xl` container to maintain focus.
- **Whitespace:** Generous whitespace is a feature, not empty space. It must be used to guide the eye and prevent cognitive overload.

---

### 3. Background Treatment

- **Pattern:** Use the subtle, non-distracting 1px grid pattern created with `linear-gradient`. This adds texture without competing with the content.
- **Focal Point:** Apply a `mask-image` with a `radial-gradient` to create a vignette effect. This fades the grid pattern out towards the edges, naturally drawing the user's eye to the central headline.
- **Subtlety:** The pattern's opacity must be low (`opacity-30 dark:opacity-40`) to keep it secondary to the text.

---

### 4. Typography Hierarchy

- **Primary Headline:**
  - **Weight & Tracking:** `font-black` with tight `tracking-tighter` for maximum impact.
  - **Sizing:** Large and responsive (e.g., `text-4xl` to `text-6xl`).
  - **Animation:** Must feature the dynamic typing animation. It's a core brand element that communicates multiple pain points efficiently.
- **Sub-headline:**
  - **Style:** `text-lg` with a standard font-weight and relaxed tracking.
  - **Color:** Use a secondary text color (`text-neutral-600 dark:text-neutral-400`) to ensure it supports, but doesn't compete with, the main headline.
  - **Content:** Must be a single, concise sentence that logically follows the headline.

---

### 5. Interactive Elements & Components

- **CTA Buttons:**
  - **Standard:** Always provide a clear visual distinction between the `primary` (solid fill) and `secondary` (outline) buttons.
- **Urgency Badge:**
  - **Usage:** A small, pill-shaped badge can be used sparingly to communicate scarcity (e.g., "3 spots remaining").
  - **Animation:** It must include a subtle, non-distracting animation like the "ping" effect to draw attention without being annoying.
- **Metrics "Pill" (The New Standard for Social Proof):**
  - **Container:** Consolidate key metrics into a single, `rounded-full` "pill" element. This is the official replacement for any larger, multi-card trust bars.
  - **Styling:** The pill must use a semi-transparent background (`bg-white/70 dark:bg-neutral-900/50`) with a `backdrop-blur-sm` filter. This integrates it seamlessly with the background, making it feel sophisticated and modern.
  - **Content:** Display no more than 3 highly believable, data-backed metrics. Each metric must use the `AnimatedNumber` component with a smooth easing function (`easeOutCubic`) for a premium count-up effect.
  - **Interactivity:** The entire pill must have a subtle `hover:scale-[1.02]` and `active:scale-[0.98]` transform to provide tactile feedback and invite interaction.
  - **Separation:** Use `divide-x` for clean, minimal separation between metrics.

---

### 6. Golden Rules for Page-Wide Consistency

Apply these principles when refactoring other sections:

1.  **Consolidate & Simplify:** If a section feels cluttered, ask: "Can this be a single, elegant component like the Metrics Pill?"
2.  **Integrate, Don't Stack:** Use transparency and blur to make elements feel part of the same canvas, not stacked on top of it.
3.  **Animate with Purpose:** Animations should be smooth, fast, and subtle. Use easing functions. Every interaction should feel polished and responsive.
4.  **Whitespace is Sacred:** When in doubt, add more space. Let the content breathe.