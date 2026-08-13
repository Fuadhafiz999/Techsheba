# Techsheba — Agency Website

Production-grade marketing site for **Techsheba** (`techsheba.com`), built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

> **Almost everything you'll ever want to edit lives in one file: `data/mockData.ts`.** That file is the content hub — services, case studies, blog posts, testimonials, stats, FAQ and all contact details. The pages read from it and rebuild automatically.

---

## 1. Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server → http://localhost:3000
npm run build      # production build (type-checks + prerenders all pages)
npm start          # serve the production build
npm run lint       # ESLint check
```

---

## 2. Where everything lives

```
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx          # Fonts, metadata, JSON-LD, theme provider, navbar/footer
│   ├── page.tsx            # Homepage (section order lives here)
│   ├── services/           # /services + /services/[slug]
│   ├── portfolio/          # /portfolio + /portfolio/[slug]
│   ├── about/              # /about
│   ├── blog/               # /blog + /blog/[slug]
│   ├── contact/            # /contact (form + Calendly)
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   └── globals.css         # Design tokens, Tailwind theme, custom CSS
├── components/
│   ├── global/             # Navbar, Footer, theme toggle, WhatsApp button, sticky bar
│   ├── home/               # Hero, services preview, portfolio showcase, stats, FAQ, CTA…
│   ├── services/           # Service cards, problem/solution panels
│   ├── portfolio/          # IMDb-style cards, filter grid
│   ├── blog/               # Blog cards, filter grid, article body renderer
│   ├── contact/            # Contact form (React Hook Form + Zod)
│   ├── shared/             # Reusable: buttons, section headings, count-up, marquee…
│   └── ui/                 # shadcn/ui primitives (button, dialog, accordion…)
├── config/theme.ts         # Design tokens as TS constants (mirrors globals.css)
├── data/mockData.ts        # ⭐ ALL site content — edit this file
└── scripts/                # Browser-check & screenshot scripts (see §11)
```

---

## 3. Contact details & placeholders (`data/mockData.ts` → `siteConfig`)

All business details are in one object at the top of `data/mockData.ts`:

| Field | Used by | Before launch, replace with… |
|---|---|---|
| `domain` | metadata, sitemap.xml, robots.txt, JSON-LD | your real domain (e.g. `techsheba.com`) |
| `email` | footer, contact page, JSON-LD | real email |
| `phone` / `phoneHref` | footer, navbar menu, sticky bar, CTA | real phone (display / `tel:` format) |
| `whatsappNumber` | WhatsApp button, sticky bar, contact form, CTAs | real number **with country code, digits only** (e.g. `8801712345678`) |
| `whatsappMessage` | pre-filled WhatsApp texts | default intro message |
| `address` / `hours` | footer, contact page | real office details |
| `calendlyUrl` | Calendly embed on /contact | your real Calendly link |
| `socials` | footer icons + JSON-LD `sameAs` | real profile URLs |

> ℹ️ The current values are **demo placeholders** — swap them before going live. The whole site updates from this one object; nothing else needs editing.

---

## 4. Services

**File:** `data/mockData.ts` → `export const services: Service[]`

Each service = one object:

```ts
{
  slug: "search-engine-optimization",        // URL: /services/search-engine-optimization
  title: "Search Engine Optimization",       // Display name
  category: "digital-marketing",             // "tech" | "creative" | "digital-marketing"
  tagline: "Rank on Google for searches that matter",
  description: "…",                          // Short paragraph
  icon: Search,                              // Any lucide-react icon (import it at the top)
  image: px(933054),                         // Cover image (§6)
  deliverables: ["Keyword research & mapping", "…"],   // “What’s included” checklist
  problem: "…",                             // Shown in the red problem panel
  solution: "…",                            // Shown in the green solution panel
  outcomes: [{ value: "3.4×", label: "organic traffic growth" }, "…"],
}
```

- **Add / remove / reorder** services by editing the array — the `/services` index, each `/services/[slug]` detail page, the footer list, the contact-form dropdown, and the sitemap **all update automatically**.
- The homepage features a **curated** 6 services. To change which ones appear, edit `components/home/ServicesPreview.tsx` (the list of slugs).
- Category labels live in `serviceCategories` (same file).
- When adding an icon, verify the name exists in your installed lucide version: `grep "declare const IconName:" node_modules/lucide-react/dist/lucide-react.d.ts`.

---

## 5. Case studies (portfolio)

**File:** `data/mockData.ts` → `export const caseStudies: CaseStudy[]`

```ts
{
  slug: "lumiere",                 // URL: /portfolio/lumiere
  title: "Lumière — Fashion E-commerce That Sells",
  client: "Lumière",
  industry: "Fashion Retail",
  category: "Web",                 // "Web" | "App" | "Design" | "Marketing" (filter tabs)
  services: ["website-design-development", "digital-marketing"], // MUST match service slugs (drives “related” on service pages)
  year: "2025",
  cover: px(1478442),              // hero / card image
  video: videos.showreel,          // optional hover-preview video (omit to use poster only)
  short: "…",                      // card subtitle
  challenge: "…",
  solution: "…",
  results: [
    { value: 212, prefix: "+", suffix: "%", label: "conversion rate" },  // animated counters
    { value: 1.2, suffix: "s", label: "page load time" },
  ],
  tags: ["Headless Commerce", "CRO"],
  gallery: [px(853427), px(291762)],  // “Inside the project” images
  accent: "amber",                 // unused styling hint (violet | cyan | amber | emerald)
}
```

`getCasesByService(slug)` powers the “X in action” section on each service page — keep `services` entries pointing at real service slugs.

---

## 6. Blog — how to add a post

**File:** `data/mockData.ts` → `export const blogPosts: BlogPost[]`

Add one object per post. Copy this template:

```ts
{
  slug: "my-new-article",              // URL: /blog/my-new-article — unique!
  title: "Your Headline Here",
  excerpt: "One or two sentences shown on cards and used for SEO description.",
  category: "Web",                     // must be one of blogCategories (Web | Marketing | Mobile | Business)
  tags: ["SEO", "Performance"],
  author: { name: "Tanvir Ahmed", role: "Head of Engineering" },
  date: "2026-08-20",                  // ISO date — drives sitemap lastModified + display
  readingTime: 7,                      // shown on the card
  cover: px(265667),                   // card/hero image
  content: [ … ],                      // see block types below
}
```

**Content blocks** — `content` is an array of typed blocks (the `BlogBlock` type):

```ts
{ type: "p", text: "Paragraph…" }                     // body paragraph
{ type: "h2", text: "Section heading" }               // sub-heading
{ type: "list", items: ["Item 1", "Item 2"] }         // bullet list
{ type: "quote", text: "Pull quote…" }                // highlighted quote
{ type: "tip", text: "Actionable tip…" }              // “Pro tip” callout
```

**What updates automatically when you add a post:**
- `/blog` grid + category filters
- Homepage “Insights” section (shows the 3 latest by array order)
- Related posts on article pages
- `sitemap.xml`
- JSON-LD `BlogPosting` structured data + Open Graph meta

> To add a new author, just use a new `{ name, role }` object — no other setup. Dates are ISO strings (`YYYY-MM-DD`).

---

## 7. Other content in `data/mockData.ts`

| Export | Controls | Notes |
|---|---|---|
| `navLinks` | Navbar + footer “Company” links | add pages here to appear in nav |
| `stats` | Animated number band (home + about) | `{ value, suffix, label }` |
| `logos` | Client logo marquee | plain text wordmarks |
| `processSteps` | 5-step “How we work” | `{ n, title, description, icon }` |
| `whyUs` | “Why Techsheba” bento grid | `{ title, description, icon }` |
| `testimonials` | Client quotes | `{ quote, name, role, company, location, rating }` |
| `faqs` | FAQ accordion | `{ q, a }` |
| `videos` | Showreel + hover-preview MP4 URLs | verified Pexels file URLs |
| `px(id, width)` | Image helper | see §8 |

---

## 8. Images & video

**Pexels helper** (`data/mockData.ts`):

```ts
px(265667)            // → https://images.pexels.com/photos/265667/…?w=1200
px(3184292, 1600)     // different width
```

- Every image URL on the site is generated with `px()`. To use a different Pexels photo, paste its ID. To check a URL works: `curl -s -o /dev/null -w "%{http_code}" "<image-url>"` (should print `200`).
- **Context matters:** pick photos that match the topic (dashboards for marketing, code screens for web dev, studio shots for motion).
- **Local images:** drop files in `public/assets/` and reference them directly, e.g. `/assets/my-photo.jpg`. For `next/image` with a *different* external host, add it to `images.remotePatterns` in `next.config.ts`.
- **Videos:** the showreel and portfolio hover-previews use the MP4s in `videos`. Replace them with your own compressed MP4/WebM (ideally < 5 MB, 1280–1920px wide) by editing the URLs — or host files under `public/` and use `/assets/my-showreel.mp4`.

---

## 9. Theme, colors & fonts

**Two layers — keep them in sync:**

1. **`app/globals.css`** — the Tailwind v4 source of truth:
   - `:root` = light palette, `.dark` = dark palette (`--background`, `--foreground`, `--primary`, `--border`, …)
   - `@theme inline` maps tokens to utilities: `--color-brand-500`, `--color-accent-cyan`, `--color-brand-accent`, …
   - Theme-aware CSS: `.text-gradient`, `.bg-grid`, `.glass` (driven by `--grad-text-a/b`, `--grid-line`, `--glass-bg` vars)
2. **`config/theme.ts`** — the same values as TS constants (used for metadata, motion values). Update both when changing a color.

**Useful tokens:**
- `brand-500` = primary violet (`#7C5CFF` dark / `#6A4BF0` light) — buttons, glows
- `accent-cyan` (`#38E1FF`) — secondary gradient color
- `brand-accent` — the *semantic* accent that auto-adjusts per theme (use this for text/icons on tinted surfaces)

**Theme toggle:** the site follows the visitor's system preference on first visit and remembers a manual switch (stored in `localStorage` under `ts-theme`). Logic: `components/global/ThemeProvider.tsx` + `ThemeToggle.tsx` + pre-paint script in `app/layout.tsx`.

**Fonts:** `app/layout.tsx` loads **Inter** (body, `--font-inter`) and **Space Grotesk** (display, `--font-display-grotesk`) via `next/font`. Swap the imports to change fonts; headings use `font-display`.

---

## 10. SEO & analytics

Already in place (all automatic):

- **Metadata** — `app/layout.tsx` (title template, description, Open Graph, Twitter card, `themeColor`)
- **Per-page metadata** — each page exports `generateMetadata` (services, case studies, blog posts get custom titles/descriptions/images)
- **`/sitemap.xml`** — generated from the content arrays in `app/sitemap.ts`
- **`/robots.txt`** — `app/robots.ts`
- **JSON-LD** — `Organization` sitewide (layout), `BlogPosting` per article

**Analytics is intentionally not installed** (skipped per your choice). To add it later, either:

- **Simple Analytics** (recommended, cookie-free): add to `app/layout.tsx`
  ```tsx
  <script async defer src="https://scripts.simpleanalytics.com/<your-domain>.js" />
  ```
- **Google Analytics (GA4):** `npm i @next/third-parties` then
  ```tsx
  import { GoogleAnalytics } from "@next/third-parties/google";
  // inside <body>
  <GoogleAnalytics gaId="G-XXXXXXXXXX" />
  ```

---

## 11. Pages & navigation

- **Homepage section order:** `app/page.tsx` — add/remove/reorder the imported sections there.
- **New page:** create `app/whatever/page.tsx` with a default-exported component; it appears at `/whatever`. Add it to `navLinks` in `mockData.ts` to show in the navbar.
- **Dynamic pages** (services, portfolio, blog) use `generateStaticParams()` — new array entries get their own statically-prerendered pages automatically.

---

## 12. Contact form & newsletter

**Contact form** (`components/contact/ContactForm.tsx`): React Hook Form + Zod validation. There is **no backend** — on submit it opens **WhatsApp with the message pre-filled** (number from `siteConfig.whatsappNumber`) and shows a success state. To switch to email instead, change the `window.open(...)` call to a `mailto:` link, or wire it to a form service (Formspree, Resend, etc.).

**Newsletter form** (`components/shared/NewsletterForm.tsx`): UI-only success state — connect it to your ESP (Mailchimp, ConvertKit, …) when you have one.

**Calendly:** the embed on `/contact` loads `siteConfig.calendlyUrl`. Point it at your real Calendly page; until then the iframe will show Calendly's “not found” page.

---

## 13. Quality checks (browser automation)

With the production server running (`npm start`), run these from another terminal:

```bash
node scripts/check.mjs            # every route: console errors, overflow, modal/menu/filters/form interactions
node scripts/check-visuals.mjs    # images load, fonts, theme colors
node scripts/check-theme.mjs      # dark/light toggle behavior + persistence
node scripts/check-overflow.mjs   # text clipping scan (desktop + mobile)
node scripts/screenshots.mjs      # full-page screenshots → screenshots/ (gitignored)
```

Requires Chrome installed at the default location (edit `CHROME` at the top of each script if not). `puppeteer-core` is installed as a dev-only dependency (`--no-save`); run `npm i --no-save puppeteer-core` if it's missing.

---

## 14. Deployment

```bash
npm run build
npm start          # or deploy to Vercel / your host
```

**Before launch checklist:**
1. Replace `siteConfig` values in `data/mockData.ts` (§3) — especially `domain`, WhatsApp, email, Calendly.
2. Point `calendlyUrl` at your real booking page.
3. Swap demo client logos / case studies for real work.
4. Add analytics if desired (§10).
5. Rebuild and run `node scripts/check.mjs`.

---

## 15. Troubleshooting

- **`Port 3000 is in use` / site shows an old version** — a stale `npm start` process is still running. Kill it:
  ```bash
  # find the PID listening on 3000, then:
  taskkill //PID <pid> //F        # Windows
  # or
  lsof -i :3000 && kill <pid>     # macOS/Linux
  ```
  Then start the server again. This bit us during development — always verify with `curl -s localhost:3000/ | grep <something-new>` that you're seeing the current build.
- **Images missing** — the Pexels URL returned non-200 (test with curl) or the host isn't in `next.config.ts` `images.remotePatterns`.
- **New blog/service page 404s** — it's statically generated; run `npm run build` (or `npm run dev`) so the route is created.
- **Theme looks wrong after changing colors** — remember to update both `app/globals.css` **and** `config/theme.ts` (§9).
#   T e c h s h e b a  
 