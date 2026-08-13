# Techsheba Agency Website - Master Development Specification (CLAUDE.md)

> **Context & Objective:** Build a production-grade, globally competitive agency website for **Techsheba** (`techsheba.com`), targeting both local (Bangladesh) and international markets. The architecture must prioritize blazing-fast speed, robust component modularity, zero-maintenance backends, and flawless mobile responsiveness.

---

## 1. Core Architecture & Tech Stack Rules
- **Framework:** Next.js (App Router, Server/Client components split correctly).
- **Styling:** Tailwind CSS (Mobile-first responsive design across all viewports: Mobile, Tablet, Desktop).
- **Language:** TypeScript strictly enforced (no raw JavaScript or untyped props).
- **Component System:** Component-driven, highly modular structure. Every section, card, and interactive widget **must** reside in separate files inside a dedicated components directory.
- **Configuration Hub:** Centralize design tokens (color palettes, typography scale, spacing) in a single configuration file (e.g., `tailwind.config.ts` or a designated `theme.config.ts`). **Never hardcode hex codes or pixel values inline.**

---

## 2. Coding & Implementation Directives
- **Zero Raw Code Anti-Pattern:** **Strictly forbid** writing custom vanilla code, manual event loops, custom state management math, or raw canvas scripts for UI interactions, animations, or layouts.
- **Mandatory Ecosystem Usage:** Utilize pre-built, production-tested libraries, plugins, and frameworks to eliminate bugs and reduce technical debt:
  - **Animations & Interactivity:** Use **Framer Motion** for declarative layout transitions (`<AnimatePresence>`), hover states, and modal popups.
  - **UI / Component Primitives:** Use **shadcn/ui**, **Magic UI**, or **Aceternity UI** for pre-styled, accessible components (bento grids, glow cards, dialogs, tabs).
  - **Smooth Scrolling:** Wrap layout in **Lenis Scroll** for weighted, high-end motion.
  - **Icons:** Use **Lucide React** or **React Icons** for scalable vector icons.
  - **Form Validation & Handling:** Use **React Hook Form** paired with **Zod** schemas.

---

## 3. Visuals, Media, & Pexels Integration
- **Context-Aware Imagery:** Do not use generic or random stock imagery. Every image or background asset must directly reflect the content context (e.g., agency workflows, digital marketing dashboards, UI/UX mockups, motion graphic design sessions).
- **External Image Source:** When placeholder or conceptual photography is required, pull contextually relevant, high-resolution imagery from **Pexels (`pexels.com`)** via official URLs or static imports.
- **Video & Showreels:** Implement IMDb-style hover video previews and modal showreels for portfolio items using compressed MP4/WebM assets.

---

## 4. Project Directory & File Structure (Component-Based)
Enforce a clean, separate-file folder hierarchy:

```text
├── app/
│   ├── layout.tsx                # Root layout (Lenis wrapper, fonts, metadata)
│   ├── page.tsx                  # Homepage orchestration
│   ├── services/                 # Services pages (Digital Marketing, Creative, Tech)
│   ├── portfolio/                # Portfolio & Case Studies index & dynamic detail pages
│   ├── about/                    # About & Why Us page
│   └── contact/                  # Contact page (WhatsApp integration, Calendly embed)
├── components/
│   ├── global/                   # Navbar, Footer, Sticky Mobile Action Bar, WhatsApp Button
│   ├── home/                     # Hero section, Feature grids, Showreel modal
│   ├── portfolio/                # IMDb-style hover cards, Filter tabs, Grid layouts
│   ├── services/                 # Service breakdown cards, Problem-solution blocks
│   └── shared/                   # Reusable buttons, CountUp stats, Interactive widgets
├── config/
│   └── theme.ts (or tailwind.config.ts) # Global tokens: Colors, Fonts, Breakpoints
├── data/
│   └── mockData.ts               # Structured JSON data for Case Studies, Services, Testimonials
└── public/
    └── assets/                   # Local media, icons, logos
```
