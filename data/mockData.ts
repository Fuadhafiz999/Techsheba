/**
 * Techsheba — Structured site content.
 * Single source of truth for services, case studies, testimonials,
 * stats, process steps, FAQs and global contact configuration.
 * Replace placeholder contact details before going live.
 */

import type { LucideIcon } from "lucide-react";
import {
  Clapperboard,
  CodeXml,
  Eye,
  Globe,
  Layers,
  LayoutTemplate,
  Magnet,
  Megaphone,
  MousePointerClick,
  Paintbrush,
  Palette,
  PenTool,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Contextual, high-res imagery from Pexels (official image CDN). */
export const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Compressed MP4 assets from Pexels (verified working file URLs). */
export const videos = {
  showreel:
    "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
  teamA:
    "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
  creative:
    "https://videos.pexels.com/video-files/852363/852363-hd_1280_720_24fps.mp4",
  studio:
    "https://videos.pexels.com/video-files/4507858/4507858-hd_1920_1080_30fps.mp4",
} as const;

/* ------------------------------------------------------------------ */
/* Site configuration (replace with real details before launch)        */
/* ------------------------------------------------------------------ */

export const siteConfig = {
  name: "Techsheba",
  legalName: "Techsheba Ltd.",
  domain: "techsheba.com",
  tagline: "Full-service digital agency",
  description:
    "Techsheba is a full-service digital agency from Dhaka, Bangladesh — building high-performance websites, mobile apps, brands and marketing campaigns for ambitious companies worldwide.",
  email: "hello@techsheba.com",
  phone: "+880 1712-345678",
  phoneHref: "+8801712345678",
  whatsappNumber: "8801712345678",
  whatsappMessage:
    "Hi Techsheba! I'd like to discuss a project with your team.",
  address: "Level 4, House 12, Road 5, Banani, Dhaka 1213, Bangladesh",
  hours: "Sat – Thu · 10:00 – 19:00 (GMT+6)",
  founded: 2017,
  /** Replace with your real Calendly link. */
  calendlyUrl: "https://calendly.com/techsheba/discovery-call",
  socials: {
    facebook: "https://facebook.com/techsheba",
    instagram: "https://instagram.com/techsheba",
    linkedin: "https://linkedin.com/company/techsheba",
    behance: "https://behance.net/techsheba",
    dribbble: "https://dribbble.com/techsheba",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 96, suffix: "%", label: "Client retention" },
  { value: 8, suffix: "+", label: "Years of craft" },
  { value: 12, suffix: "", label: "Countries served" },
] as const;

export const logos = [
  "Verity",
  "Nexora",
  "Payflow",
  "Lumen",
  "Bondly",
  "Harbor",
  "Zenith",
  "Quotient",
] as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceCategorySlug = "tech" | "creative" | "digital-marketing";

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  title: string;
  short: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "tech",
    title: "Tech & Web",
    short:
      "Websites, landing pages and business pages — designed, built and launched for you.",
  },
  {
    slug: "creative",
    title: "Creative & Design",
    short:
      "Brands, logos, graphics and motion content that make people stop, feel and remember you.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "SEO, SEM, social media and lead generation — campaigns engineered for measurable ROI.",
  },
];

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategorySlug;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  deliverables: string[];
  problem: string;
  solution: string;
  outcomes: { value: string; label: string }[];
}

export const services: Service[] = [
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "creative",
    tagline: "A mark your customers will remember",
    description:
      "Distinctive logo concepts, refined with you — delivered in every format your brand will ever need.",
    icon: PenTool,
    image: px(887751),
    deliverables: [
      "3 unique logo concepts",
      "Icon & monogram variations",
      "Color & typography pairing",
      "Usage guidelines",
      "All file formats (AI, PNG, SVG)",
      "Brand presentation deck",
    ],
    problem:
      "A forgettable logo makes a forgettable brand — and 11 million logos are launched every year competing for the same attention.",
    solution:
      "We design with strategy, not templates: research your market, sketch 50+ directions, and refine the winner to perfection.",
    outcomes: [
      { value: "3", label: "unique concepts to choose from" },
      { value: "1-week", label: "typical delivery" },
      { value: "4.9/5", label: "client satisfaction" },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "digital-marketing",
    tagline: "Paid & organic social that builds your audience",
    description:
      "Scroll-stopping content plus laser-targeted ads — we grow your following and turn it into customers across every major platform.",
    icon: Share2,
    image: px(3861969),
    deliverables: [
      "Platform strategy & positioning",
      "Content calendars & creative",
      "Paid social campaigns (Meta, TikTok, LinkedIn)",
      "Influencer & partnership outreach",
      "Community growth tactics",
      "Analytics & A/B testing",
    ],
    problem:
      "Posting without a strategy is shouting into the void — most brands gain followers who never become buyers.",
    solution:
      "We pair content people actually want to share with paid amplification aimed at your exact buyer — so reach converts, not just entertains.",
    outcomes: [
      { value: "3.2×", label: "average engagement growth" },
      { value: "+58%", label: "follower growth" },
      { value: "-30%", label: "cost per lead" },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    category: "creative",
    tagline: "Complete brand identities that make you unforgettable",
    description:
      "Strategy, visual identity and guidelines — a full brand platform that makes you look established from day one.",
    icon: Palette,
    image: px(1779487),
    deliverables: [
      "Brand strategy & positioning",
      "Messaging & voice guidelines",
      "Visual identity system",
      "Brand guidelines document",
      "Collateral & launch kit",
    ],
    problem:
      "A generic, DIY brand makes customers and investors hesitate — you lose trust (and deals) before you even get a meeting.",
    solution:
      "We build a distinctive, disciplined identity system rooted in strategy — so every touchpoint looks intentional and premium.",
    outcomes: [
      { value: "3×", label: "social engagement after rebrand" },
      { value: "+27%", label: "brand recall in testing" },
      { value: "$2.4M", label: "seed round closed by a client" },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    category: "digital-marketing",
    tagline: "A pipeline that never runs dry",
    description:
      "Funnels, landing pages and paid campaigns built to deliver a steady stream of qualified leads to your sales team.",
    icon: Magnet,
    image: px(919734),
    deliverables: [
      "Lead magnets & funnels",
      "Lead capture landing pages",
      "Paid lead campaigns",
      "Email nurturing sequences",
      "CRM integration & lead scoring",
      "Conversion reporting",
    ],
    problem:
      "A business without leads is a business on pause — but most lead spend leaks through weak funnels and untracked forms.",
    solution:
      "We build trackable funnels end-to-end: the right offer, the right page, the right follow-up — so every taka earns its place.",
    outcomes: [
      { value: "3.4×", label: "qualified leads" },
      { value: "-38%", label: "cost per lead" },
      { value: "+27%", label: "lead-to-call rate" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "digital-marketing",
    tagline: "Campaigns engineered for measurable ROI",
    description:
      "SEO, Google & Meta ads, social media and email automation — a full-funnel growth engine with transparent reporting on every taka and dollar.",
    icon: Megaphone,
    image: px(590016),
    deliverables: [
      "SEO & content strategy",
      "Google & Meta advertising",
      "Social media management",
      "Email marketing & automation",
      "Conversion-rate optimization",
      "Weekly analytics reporting",
    ],
    problem:
      "Most marketing budgets leak: untracked spend, generic content and no attribution make it impossible to know what actually works.",
    solution:
      "We build measurement-first funnels — every campaign tied to a target metric, tested relentlessly, and reported in plain language.",
    outcomes: [
      { value: "3.4×", label: "organic traffic growth" },
      { value: "+212%", label: "average ROAS across clients" },
      { value: "-31%", label: "customer acquisition cost" },
    ],
  },
  {
    slug: "motion-graphics-video",
    title: "Motion Graphics & Video",
    category: "creative",
    tagline: "Scroll-stopping motion content",
    description:
      "Explainer films, product demos, social reels and brand showreels — motion content engineered to be watched, shared and remembered.",
    icon: Clapperboard,
    image: px(1493112),
    deliverables: [
      "Explainer & brand films",
      "Promo & ad videos",
      "Social reels & shorts",
      "2D/3D animation",
      "Video editing & VFX",
      "Captions & subtitles",
    ],
    problem:
      "Attention is the scarcest resource online — 80% of people skip video ads, and static content can't hold a modern audience.",
    solution:
      "We craft story-first motion with sound design, pacing and hooks proven to hold attention in the first 3 seconds.",
    outcomes: [
      { value: "8.4M", label: "views on a launch campaign" },
      { value: "+190%", label: "watch-time vs. industry avg" },
      { value: "+64%", label: "bookings from a video series" },
    ],
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    category: "creative",
    tagline: "Visuals that stop the scroll and sell the story",
    description:
      "Social creatives, ad banners, decks and print — on-brand graphics delivered fast, in any volume.",
    icon: Paintbrush,
    image: px(106344),
    deliverables: [
      "Social media creatives",
      "Ad banners & campaign kits",
      "Business cards & stationery",
      "Presentation decks",
      "Print & packaging design",
      "Brand kit maintenance",
    ],
    problem:
      "Inconsistent, off-brand visuals erode trust — and generic templates make your business look like everyone else.",
    solution:
      "We build a reusable creative system from your brand, then produce assets that look sharp everywhere they appear.",
    outcomes: [
      { value: "500+", label: "assets delivered per brand" },
      { value: "48h", label: "typical turnaround" },
      { value: "4.9/5", label: "client satisfaction" },
    ],
  },
  {
    slug: "business-page-setup",
    title: "Business Page Setup",
    category: "tech",
    tagline: "Your business, found and trusted everywhere",
    description:
      "Facebook, Instagram, Google Business Profile and WhatsApp Business — set up, optimized and ready to bring customers in.",
    icon: Store,
    image: px(190819),
    deliverables: [
      "Facebook & Instagram page setup",
      "Google Business Profile optimization",
      "WhatsApp Business setup",
      "Profile & cover design",
      "Contact, booking & catalog setup",
      "30-day launch management",
    ],
    problem:
      "An incomplete or unverified business profile makes customers doubt you — and sends them to competitors who look ready.",
    solution:
      "We set up and fully optimize every profile that matters, with consistent branding and messaging across all of them.",
    outcomes: [
      { value: "3 days", label: "to go live" },
      { value: "100%", label: "profile completion" },
      { value: "4.9★", label: "average profile rating" },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "digital-marketing",
    tagline: "Your accounts, handled end-to-end",
    description:
      "Daily posting, community replies and monthly reporting — we run your social presence so you can run your business.",
    icon: Users,
    image: px(3182773),
    deliverables: [
      "Profile optimization",
      "Daily content scheduling",
      "Community management & replies",
      "Stories & reels",
      "Monthly performance reports",
    ],
    problem:
      "Posting inconsistently or ignoring comments quietly kills your reach — and customers notice when nobody answers.",
    solution:
      "A consistent content rhythm with fast community response — the two habits that keep algorithms and customers happy.",
    outcomes: [
      { value: "5+", label: "posts every week" },
      { value: "2×", label: "engagement growth" },
      { value: "100%", label: "message response rate" },
    ],
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    category: "digital-marketing",
    tagline: "Rank on Google for searches that matter",
    description:
      "Technical, on-page and content SEO that moves you up the rankings — and keeps you there.",
    icon: Search,
    image: px(933054),
    deliverables: [
      "Keyword research & mapping",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy & briefs",
      "Authority & link building",
      "Ranking & traffic reports",
    ],
    problem:
      "Invisible on Google means invisible to buyers — 75% of searchers never scroll past the first page.",
    solution:
      "We fix what's blocking you (speed, structure, content) and build the assets Google rewards, month after month.",
    outcomes: [
      { value: "3.4×", label: "organic traffic growth" },
      { value: "40+", label: "keywords in top 3" },
      { value: "#1", label: "page-one rankings for core terms" },
    ],
  },
  {
    slug: "search-engine-marketing",
    title: "Search Engine Marketing",
    category: "digital-marketing",
    tagline: "Google & Bing ads that convert, not just click",
    description:
      "Paid search campaigns structured, measured and optimized for one thing — profitable customers.",
    icon: MousePointerClick,
    image: px(265667),
    deliverables: [
      "Account structure & setup",
      "Keyword & bid strategy",
      "Ad copy & extensions",
      "Landing page pairing",
      "Conversion tracking",
      "Monthly optimization",
    ],
    problem:
      "Badly structured ad accounts burn budget on clicks that never become customers — with no way to see the leak.",
    solution:
      "We build tight account structures with conversion tracking from day one, then optimize toward ROAS every week.",
    outcomes: [
      { value: "+212%", label: "return on ad spend" },
      { value: "2.1×", label: "click-through rate" },
      { value: "-31%", label: "cost per acquisition" },
    ],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    category: "creative",
    tagline: "High-converting pages for campaigns & launches",
    description:
      "Focused, distraction-free landing pages designed to turn paid and organic traffic into leads and sales.",
    icon: LayoutTemplate,
    image: px(887751),
    deliverables: [
      "Conversion copy structure",
      "Hero & section design",
      "Mobile-first layouts",
      "A/B test variants",
      "Form & CTA design",
      "Pixel & analytics setup",
    ],
    problem:
      "Sending campaign traffic to your homepage is like inviting buyers to a warehouse — they can't find the checkout.",
    solution:
      "One page, one message, one action — designed around your ad promise so every click lands on a purpose-built offer.",
    outcomes: [
      { value: "+38%", label: "conversion rate" },
      { value: "1.2s", label: "average load time" },
      { value: "3×", label: "more leads per campaign" },
    ],
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    category: "tech",
    tagline: "Websites that look world-class and sell on every device",
    description:
      "Custom design and development — fast, responsive and SEO-ready, from a single landing page to a full platform.",
    icon: CodeXml,
    image: px(574071),
    deliverables: [
      "Custom responsive design",
      "Development (React / Next.js)",
      "CMS setup & training",
      "Speed & Core Web Vitals",
      "SEO foundation",
      "Hosting, domain & SSL setup",
      "Ongoing support & maintenance",
    ],
    problem:
      "Slow, outdated websites quietly cost you sales — 53% of visitors leave a page that takes over 3 seconds to load.",
    solution:
      "We build conversion-first websites: sub-second loads, airtight UX and search-ready architecture that turns traffic into revenue.",
    outcomes: [
      { value: "3×", label: "average speed improvement" },
      { value: "+212%", label: "conversion lift on rebuilds" },
      { value: "90+", label: "Lighthouse performance score" },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export type CaseCategory = "Web" | "App" | "Design" | "Marketing";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: CaseCategory;
  services: string[];
  year: string;
  cover: string;
  video?: string;
  short: string;
  challenge: string;
  solution: string;
  results: { value: number; prefix?: string; suffix?: string; label: string }[];
  tags: string[];
  gallery: string[];
  accent: "violet" | "cyan" | "amber" | "emerald";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "finsolve",
    title: "FinSolve — Banking Dashboard Redesign",
    client: "FinSolve",
    industry: "Fintech & Banking",
    category: "Design",
    services: ["website-design-development", "graphics-design"],
    year: "2025",
    cover: px(4348401),
    video: videos.showreel,
    short:
      "A complex banking dashboard reimagined — 3.2× faster onboarding and 42% fewer support tickets.",
    challenge:
      "FinSolve's legacy dashboard buried key actions behind a 14-step onboarding flow. 62% of new users dropped off before making their first transfer, and support was drowning in 'where is this button?' tickets.",
    solution:
      "We ran discovery with 40+ users, rebuilt the information architecture, and shipped a design system with a Next.js front end. Onboarding dropped to 4 steps, and the interface scored 96/100 on WCAG accessibility.",
    results: [
      { value: 3.2, prefix: "×", suffix: "", label: "faster onboarding" },
      { value: 42, prefix: "-", suffix: "%", label: "support tickets" },
      { value: 38, prefix: "+", suffix: "%", label: "account activation" },
    ],
    tags: ["UX Research", "Design System", "Next.js", "Fintech"],
    gallery: [px(590016), px(933054), px(106344)],
    accent: "violet",
  },
  {
    slug: "lumiere",
    title: "Lumière — Fashion E-commerce That Sells",
    client: "Lumière",
    industry: "Fashion Retail",
    category: "Web",
    services: ["website-design-development", "digital-marketing"],
    year: "2025",
    cover: px(1478442),
    short:
      "A headless storefront that loads in 1.2s — and lifted conversion rate by 212%.",
    challenge:
      "Lumière's WordPress store took 7+ seconds to load and 74% of mobile visitors bounced. Every flash sale crashed the server, and abandoned carts were piling up.",
    solution:
      "We migrated to a headless Shopify + Next.js stack, added personalized product recommendations and one-click checkout, and hardened the pages for Core Web Vitals. Load time fell to 1.2s and mobile revenue doubled.",
    results: [
      { value: 212, prefix: "+", suffix: "%", label: "conversion rate" },
      { value: 1.2, prefix: "", suffix: "s", label: "page load time" },
      { value: 86, prefix: "+", suffix: "%", label: "mobile revenue" },
    ],
    tags: ["Headless Commerce", "Next.js", "CRO", "Fashion"],
    gallery: [px(853427), px(291762), px(996329)],
    accent: "amber",
  },
  {
    slug: "pathly",
    title: "Pathly — Logistics App for 50K Drivers",
    client: "Pathly",
    industry: "Logistics",
    category: "App",
    services: ["website-design-development", "landing-page-design"],
    year: "2024",
    cover: px(268131),
    short:
      "A route-optimization app that cut delivery times 18% and earned a 4.8★ store rating.",
    challenge:
      "Pathly's dispatchers ran everything on spreadsheets — drivers took inefficient routes, updates arrived late, and the company was bleeding margins on fuel and failed deliveries.",
    solution:
      "We designed and shipped a React Native app with a smart routing engine, real-time GPS tracking and offline mode. Drivers onboarded in minutes, and dispatch time dropped from hours to seconds.",
    results: [
      { value: 18, prefix: "-", suffix: "%", label: "average delivery time" },
      { value: 50, prefix: "", suffix: "K+", label: "drivers onboarded" },
      { value: 4.8, prefix: "", suffix: "★", label: "app store rating" },
    ],
    tags: ["React Native", "Maps & Routing", "Realtime", "Logistics"],
    gallery: [px(262353), px(106344), px(1181244)],
    accent: "cyan",
  },
  {
    slug: "halo",
    title: "Halo — SaaS Marketing Site & Funnel",
    client: "Halo Analytics",
    industry: "B2B SaaS",
    category: "Marketing",
    services: ["search-engine-optimization", "search-engine-marketing"],
    year: "2025",
    cover: px(590016),
    video: videos.teamA,
    short:
      "A full-funnel rebuild: 3.4× organic traffic, +212% ROAS and a 31% lower CAC.",
    challenge:
      "Halo was invisible on Google, and their paid ads were burning budget with no attribution. The site talked features, not outcomes — and it showed in the pipeline.",
    solution:
      "We rebuilt the site around customer pain points, shipped a content engine that owns 200+ search terms, and took over paid media with strict ROAS targets. Cost per lead fell 31% in one quarter.",
    results: [
      { value: 3.4, prefix: "×", suffix: "", label: "organic traffic" },
      { value: 212, prefix: "+", suffix: "%", label: "ROAS" },
      { value: 31, prefix: "-", suffix: "%", label: "customer acquisition cost" },
    ],
    tags: ["SEO", "Paid Media", "CRO", "B2B SaaS"],
    gallery: [px(933054), px(919734), px(3861969)],
    accent: "emerald",
  },
  {
    slug: "bondly",
    title: "Bondly — Startup Brand Identity",
    client: "Bondly",
    industry: "Fintech SaaS",
    category: "Design",
    services: ["branding", "logo-design"],
    year: "2024",
    cover: px(1779487),
    short:
      "A complete identity system that helped Bondly close a $2.4M seed round.",
    challenge:
      "Bondly had a working product but a throwaway look. Investors kept asking 'who are you again?' and the team knew the brand was costing them credibility.",
    solution:
      "We delivered brand strategy, a full identity system, guidelines, pitch deck and launch site — then rolled the new brand across social. Three months later Bondly announced their seed round.",
    results: [
      { value: 2.4, prefix: "$", suffix: "M", label: "seed round raised" },
      { value: 3, prefix: "×", suffix: "", label: "social engagement" },
      { value: 27, prefix: "+", suffix: "%", label: "brand recall" },
    ],
    tags: ["Brand Strategy", "Identity System", "Pitch Deck", "Fintech"],
    gallery: [px(887751), px(106344), px(3183150)],
    accent: "violet",
  },
  {
    slug: "nordica",
    title: "Nordica — Motion Campaign, 8M+ Views",
    client: "Nordica Travel",
    industry: "Travel",
    category: "Marketing",
    services: ["motion-graphics-video", "social-media-marketing"],
    year: "2025",
    cover: px(257904),
    video: videos.creative,
    short:
      "A launch film plus 60 reels — 8.4M views and 64% more bookings in 90 days.",
    challenge:
      "Nordica's ads were being skipped into oblivion. Brand awareness was near zero outside their home market, and bookings were flat despite heavy spend.",
    solution:
      "We produced a 30-second brand film and a systematic short-form reel engine — 5 formats, one hook structure — then amplified the winners with paid media. Three of the reels passed 1M organic views.",
    results: [
      { value: 8.4, prefix: "", suffix: "M", label: "campaign views" },
      { value: 190, prefix: "+", suffix: "%", label: "watch time" },
      { value: 64, prefix: "+", suffix: "%", label: "bookings" },
    ],
    tags: ["Brand Film", "Short-Form", "Paid Amplification", "Travel"],
    gallery: [px(1493112), px(777001), px(262978)],
    accent: "cyan",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getCasesByService = (serviceSlug: string) =>
  caseStudies.filter((c) => c.services.includes(serviceSlug));

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Techsheba rebuilt our storefront and conversions jumped 212% within a single quarter. They think about revenue, not just pixels.",
    name: "Sarah Mitchell",
    role: "CMO",
    company: "Lumière",
    location: "London, UK",
    rating: 5,
  },
  {
    quote:
      "From first call to app-store launch in nine weeks. Our drivers genuinely love the app — it's holding a 4.8-star rating.",
    name: "Rajib Hasan",
    role: "CEO",
    company: "Pathly",
    location: "Dhaka, BD",
    rating: 5,
  },
  {
    quote:
      "The most research-driven design team we've worked with. Every screen was tested against real users before a single line of code.",
    name: "Emma Carter",
    role: "Product Lead",
    company: "FinSolve",
    location: "Singapore",
    rating: 5,
  },
  {
    quote:
      "The identity they built gave us the confidence — and the credibility — to close our seed round. Worth every dollar.",
    name: "Daniel Okafor",
    role: "Founder",
    company: "Bondly",
    location: "Lagos, NG",
    rating: 5,
  },
  {
    quote:
      "3.4× organic traffic in six months. They're relentless about data and refreshingly honest about what will and won't work.",
    name: "Priya Sharma",
    role: "Growth Lead",
    company: "Halo Analytics",
    location: "Dubai, AE",
    rating: 5,
  },
  {
    quote:
      "8.4 million views on our launch film. The motion team just gets it — story, pacing, sound, all of it.",
    name: "Jonas Weber",
    role: "Marketing Director",
    company: "Nordica Travel",
    location: "Berlin, DE",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Discover",
    description:
      "We dig into your business, audience and competitors to find the fastest path to growth — then agree on a clear scope and budget.",
    icon: Search,
  },
  {
    n: "02",
    title: "Design",
    description:
      "Wireframes become clickable prototypes, validated with real users before a line of code is written.",
    icon: PenTool,
  },
  {
    n: "03",
    title: "Develop",
    description:
      "Clean, scalable code shipped in weekly sprints — you see progress every single week, not at the end.",
    icon: CodeXml,
  },
  {
    n: "04",
    title: "Launch",
    description:
      "Zero-drama deployments with QA, analytics and SEO hardening baked in from day one.",
    icon: Rocket,
  },
  {
    n: "05",
    title: "Grow",
    description:
      "We measure, iterate and optimize after launch so your results keep compounding — not stalling.",
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------------ */
/* Why Techsheba (bento features)                                      */
/* ------------------------------------------------------------------ */

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyUs: Feature[] = [
  {
    title: "One team, every skill",
    description:
      "Strategy, design, engineering and marketing under one roof — no handoffs, no blame games, no lost context.",
    icon: Layers,
  },
  {
    title: "Obsessed with ROI",
    description:
      "Every decision is tied to a business metric. If it doesn't move revenue, it doesn't ship.",
    icon: Target,
  },
  {
    title: "Radically transparent",
    description:
      "Weekly demos, open costs, shared dashboards and no lock-in contracts. You own everything we build.",
    icon: Eye,
  },
  {
    title: "Fast by default",
    description:
      "MVPs in weeks, full launches in months — because speed is a competitive advantage you can feel.",
    icon: Zap,
  },
  {
    title: "Global quality, smart rates",
    description:
      "A Dhaka HQ with world-class output and pricing that makes sense for startups and enterprises alike.",
    icon: Globe,
  },
  {
    title: "Support that lasts",
    description:
      "Twelve months of post-launch care included on every project — we don't disappear after delivery.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Blog posts                                                          */
/* ------------------------------------------------------------------ */

export interface BlogAuthor {
  name: string;
  role: string;
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "tip"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  date: string; // ISO date
  readingTime: number; // minutes
  cover: string;
  content: BlogBlock[];
}

export const blogCategories = ["Web", "Marketing", "Mobile", "Business"] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals: The Complete 2026 Guide to a Faster Website",
    excerpt:
      "Google uses Core Web Vitals to rank every site on the internet. Here's what the three metrics mean, how to measure them, and exactly how to fix a failing score.",
    category: "Web",
    tags: ["Core Web Vitals", "SEO", "Performance", "Next.js"],
    author: { name: "Tanvir Ahmed", role: "Head of Engineering" },
    date: "2026-08-04",
    readingTime: 11,
    cover: px(265667),
    content: [
      {
        type: "p",
        text: "Since 2021, Google has used Core Web Vitals as an official ranking factor. Five years later, they matter more than ever — a slow site doesn't just annoy visitors, it quietly pushes you down the search results while faster competitors take your clicks.",
      },
      { type: "h2", text: "The three metrics that matter" },
      {
        type: "p",
        text: "Core Web Vitals measures three things about the real experience of your visitors: how fast content appears, how quickly it becomes usable, and how much the layout jumps around while loading.",
      },
      {
        type: "list",
        items: [
          "LCP (Largest Contentful Paint) — under 2.5s. How fast the main content of the page appears.",
          "INP (Interaction to Next Paint) — under 200ms. How responsive the page feels when clicked or tapped.",
          "CLS (Cumulative Layout Shift) — under 0.1. How much the page jumps as elements load in.",
        ],
      },
      { type: "h2", text: "Why this matters for your business" },
      {
        type: "p",
        text: "The data is brutal: 53% of mobile visitors leave a page that takes more than three seconds to load. And the effects compound — a slow page means lower rankings, lower conversions, and higher ad costs on the same traffic.",
      },
      {
        type: "quote",
        text: "We rebuilt a fashion storefront and cut load time from 7 seconds to 1.2. Conversion rate went up 212% in one quarter. Speed is not a technical nicety — it is a revenue lever.",
      },
      { type: "h2", text: "How to fix a failing score" },
      {
        type: "list",
        items: [
          "Switch to server-side rendering or static generation — never ship a site that renders entirely in the browser.",
          "Compress and resize images, and serve them in modern formats like WebP or AVIF.",
          "Reserve space for images and embeds so the page doesn't jump while loading.",
          "Minimize third-party scripts — every tag manager, chat widget and tracker adds weight.",
          "Use a CDN and cache aggressively so repeat visits are nearly instant.",
        ],
      },
      {
        type: "tip",
        text: "Measure with real-user data (CrUX in Google Search Console), not just lab tests. A perfect lab score means nothing if real phones on 4G are struggling.",
      },
      {
        type: "p",
        text: "At Techsheba, every build ships with a Core Web Vitals budget — we treat a failing score like a failing test. If your site is slow, the fix is usually faster and cheaper than you think.",
      },
    ],
  },
  {
    slug: "website-cost-bangladesh",
    title: "How Much Does a Website Really Cost in Bangladesh? (2026 Pricing Guide)",
    excerpt:
      "Website prices in Bangladesh range from ৳15,000 to ৳8,00,000+ — and the difference is real. Here's exactly what each price tier buys you, and how to avoid overpaying.",
    category: "Business",
    tags: ["Pricing", "Bangladesh", "Web Development", "Buying Guide"],
    author: { name: "Nusrat Jahan", role: "Content & Strategy Lead" },
    date: "2026-07-21",
    readingTime: 9,
    cover: px(933054),
    content: [
      {
        type: "p",
        text: "Ask five agencies in Dhaka how much a website costs and you'll get five different answers — anywhere from ৳15,000 to ৳8,00,000. Both quotes can be perfectly honest. The difference is what you're actually buying.",
      },
      { type: "h2", text: "The three price tiers, explained" },
      {
        type: "list",
        items: [
          "৳15,000 – ৳50,000 (template sites): A pre-built theme with your logo and content dropped in. Fine as a digital business card, not much more.",
          "৳50,000 – ৳2,00,000 (custom marketing sites): Custom design, fast load times, SEO-ready structure, CMS so you can edit content yourself.",
          "৳2,00,000 – ৳8,00,000+ (custom web apps & e-commerce): Multi-vendor stores, dashboards, payments, integrations, and ongoing development.",
        ],
      },
      { type: "h2", text: "What separates a cheap site from a good one" },
      {
        type: "p",
        text: "The hidden cost of a cheap website isn't the build — it's what the site doesn't do. A slow, un-optimized site that ranks nowhere and converts nobody is more expensive than any agency quote.",
      },
      {
        type: "list",
        items: [
          "Performance: a 3-second page costs you roughly half your mobile visitors.",
          "SEO foundation: clean structure, metadata and speed are what get you found on Google.",
          "Ownership: you should own the code, the domain and the content — no hostage situations.",
          "Support: who fixes it when something breaks in six months?",
        ],
      },
      {
        type: "tip",
        text: "Aim for the custom marketing tier if you sell anything online. The extra ৳50,000 – ৳1,00,000 almost always pays for itself in a few months of extra traffic and conversions.",
      },
      {
        type: "quote",
        text: "The cheapest website is the one that brings in customers. Judge every quote by what it returns, not what it costs.",
      },
      {
        type: "p",
        text: "At Techsheba we quote fixed, line-item prices after a free discovery call — so you know exactly what you're paying for before a single taka changes hands.",
      },
    ],
  },
  {
    slug: "ecommerce-conversion-tactics",
    title: "12 Conversion Rate Tactics That Actually Work for E-commerce",
    excerpt:
      "Most stores leak 95%+ of their traffic. These are the twelve tactics we deploy on real client stores — from one-click checkout to social-proof engineering.",
    category: "Marketing",
    tags: ["CRO", "E-commerce", "Growth", "UX"],
    author: { name: "Farhana Islam", role: "Growth Strategist" },
    date: "2026-06-17",
    readingTime: 8,
    cover: px(590016),
    content: [
      {
        type: "p",
        text: "The average e-commerce store converts under 2.5% of its visitors. That means 97 out of every 100 people who visit — people you paid to bring there — leave without buying. Conversion optimization is the fastest ROI play in digital marketing.",
      },
      { type: "h2", text: "The tactics that move the needle" },
      {
        type: "list",
        items: [
          "1. One-click checkout — every extra field costs you buyers; save cards and addresses.",
          "2. Speed above everything — a 1-second delay can cut conversions by 7%.",
          "3. Show reviews at the point of decision, not on a separate tab.",
          "4. Free shipping messaging — free over $X lifts average order value and conversions.",
          "5. Clear returns policy — it removes the biggest objection to buying online.",
          "6. Trust badges near the payment button, not buried in the footer.",
          "7. Product videos — a 60-second demo can out-convert three paragraphs of copy.",
          "8. Scarcity done honestly — real stock levels beat fake countdown timers.",
          "9. Abandoned-cart emails — 60% of carts are abandoned; recovering 10% is pure profit.",
          "10. Exit-intent offers for first-time buyers.",
          "11. Search that actually works — a broken search box kills 30% of intent.",
          "12. A/B test everything — opinions are cheap; data is what pays.",
        ],
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "Don't try all twelve at once. Pick the two where your store is weakest — usually speed and checkout friction — fix them, measure for a month, then move to the next pair.",
      },
      {
        type: "tip",
        text: "Install analytics with real funnel tracking before you change anything. If you can't measure the funnel, you can't improve it.",
      },
      {
        type: "p",
        text: "Our e-commerce rebuilds average a 212% conversion lift — not because we're magicians, but because most stores have never systematically applied these basics.",
      },
    ],
  },
  {
    slug: "choose-digital-agency-dhaka",
    title: "How to Choose a Digital Agency in Dhaka: A Founder's Checklist",
    excerpt:
      "A bad agency relationship costs months and money. Use this 10-point checklist to vet agencies in Dhaka before you sign anything.",
    category: "Business",
    tags: ["Agency", "Dhaka", "Buying Guide", "Partnership"],
    author: { name: "Nusrat Jahan", role: "Content & Strategy Lead" },
    date: "2026-05-29",
    readingTime: 7,
    cover: px(3183150),
    content: [
      {
        type: "p",
        text: "Dhaka's agency scene has grown dramatically — which is great for choice and terrible for decision fatigue. Here's the checklist we wish every client used before interviewing agencies, including us.",
      },
      { type: "h2", text: "The 10-point vetting checklist" },
      {
        type: "list",
        items: [
          "1. Ask for case studies with numbers — not just screenshots. What moved for past clients?",
          "2. Meet the actual team. Who designs, who codes, who manages?",
          "3. Demand a fixed, line-item quote. Hourly open-ended billing is a red flag.",
          "4. Check communication rhythm — weekly demos beat monthly email updates.",
          "5. Verify ownership — you should own code, design files and accounts.",
          "6. Ask who supports the project after launch, and for how long.",
          "7. Look for a process you can follow — discovery, design, build, launch, grow.",
          "8. Ask how they handle feedback and revisions before you sign.",
          "9. Talk to a past client directly. Agencies that hesitate are hiding something.",
          "10. Trust your gut on transparency — if the sales call felt evasive, the project will be worse.",
        ],
      },
      {
        type: "quote",
        text: "The right agency feels like a co-founder: they challenge your bad ideas, celebrate your wins, and never disappear after the invoice is paid.",
      },
      { type: "h2", text: "Local vs. international" },
      {
        type: "p",
        text: "A Dhaka agency offers global-standard output at a fraction of Western rates — but only if they run international-grade processes: async-friendly workflows, recorded standups, and clean documentation.",
      },
      {
        type: "p",
        text: "Whatever you decide, run the checklist. The five minutes it takes can save you from a six-month detour.",
      },
    ],
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads: Where to Spend Your First $1,000",
    excerpt:
      "Organic or paid? The answer depends on your timeline, your margins and your competition. Here's the framework we use to decide for clients.",
    category: "Marketing",
    tags: ["SEO", "Google Ads", "Budgeting", "ROI"],
    author: { name: "Farhana Islam", role: "Growth Strategist" },
    date: "2026-07-08",
    readingTime: 6,
    cover: px(919734),
    content: [
      {
        type: "p",
        text: "SEO is the tortoise, ads are the hare — and the right answer for your business depends entirely on how fast you need results and how much margin you have.",
      },
      { type: "h2", text: "When to spend on Google Ads first" },
      {
        type: "list",
        items: [
          "You need sales this month, not in six.",
          "Your product has high margins — you can afford 20–30% customer acquisition costs.",
          "You're in a market where buyers search with intent (services, products, urgent needs).",
          "You can measure conversions properly — ads without tracking are gambling.",
        ],
      },
      { type: "h2", text: "When to invest in SEO first" },
      {
        type: "list",
        items: [
          "You can wait 3–6 months for compounding results.",
          "You sell anything content-driven: education, SaaS, consulting, local services.",
          "Your competitors are already ranking — the traffic is proven to exist.",
          "You want sustainable acquisition costs instead of rent paid to Google every month.",
        ],
      },
      { type: "h2", text: "The winning move? Both — sequenced" },
      {
        type: "p",
        text: "The smartest play for most businesses: start ads to validate demand and fund the business, while building SEO assets in parallel. Six months in, organic traffic takes over the heavy lifting and ad spend drops to top-up levels.",
      },
      {
        type: "tip",
        text: "Whatever you choose, set a target metric first. For ads, ROAS; for SEO, organic conversions. If you can't name the number, don't start the spend.",
      },
      {
        type: "p",
        text: "This is exactly the sequence we ran for Halo Analytics — ads kept the pipeline full while SEO compounded to 3.4× organic traffic in six months.",
      },
    ],
  },
  {
    slug: "mobile-app-cost-timeline",
    title: "Mobile App Development in 2026: Realistic Costs & Timelines",
    excerpt:
      "From $8,000 MVPs to $100,000+ platforms — what actually drives app cost, and how to ship an MVP in 8–12 weeks without cutting corners.",
    category: "Mobile",
    tags: ["Mobile Apps", "Pricing", "React Native", "MVP"],
    author: { name: "Tanvir Ahmed", role: "Head of Engineering" },
    date: "2026-08-11",
    readingTime: 9,
    cover: px(1181244),
    content: [
      {
        type: "p",
        text: "App development is where estimates go to die. The same idea can cost $8,000 or $80,000 depending on scope, platform and how much you actually need for launch.",
      },
      { type: "h2", text: "What drives the cost" },
      {
        type: "list",
        items: [
          "Platform: React Native or Flutter (one codebase, both stores) is dramatically cheaper than two native apps.",
          "Backend: a simple API is cheap; realtime features, payments and complex data models are not.",
          "Design: polished, tested UX costs more than wireframe-level screens — and converts better.",
          "Integrations: every third-party service (payments, maps, SMS, analytics) adds engineering time.",
          "Ongoing costs: apps need updates with every OS release — budget 15–20% of build cost yearly.",
        ],
      },
      { type: "h2", text: "Realistic ranges for 2026" },
      {
        type: "list",
        items: [
          "MVP (1 platform, core feature): $8,000 – $20,000 · 8–12 weeks.",
          "Full app (both platforms, backend, design system): $20,000 – $60,000 · 3–6 months.",
          "Complex platform (marketplace, realtime, integrations): $60,000 – $150,000+ · 6–12 months.",
        ],
      },
      {
        type: "tip",
        text: "Ship the smallest version that proves your core value. Every feature you add before launch is a feature you can't measure demand for.",
      },
      {
        type: "quote",
        text: "We built Pathly's logistics app from a spreadsheet operation to 50,000 drivers in nine weeks — by cutting the scope to what actually mattered: routes, tracking and reliability.",
      },
      {
        type: "p",
        text: "Get a fixed quote by starting with a free discovery call — scope, platform and budget agreed before a line of code.",
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const faqs = [
  {
    q: "How much does a website or app cost?",
    a: "Most website projects land between $1,500 and $15,000 depending on scope; mobile apps typically start around $8,000. After a free discovery call we'll send you a fixed, line-item quote — no surprises, no hidden fees.",
  },
  {
    q: "How long does a typical project take?",
    a: "Marketing sites ship in 2–4 weeks, custom web applications in 6–12 weeks, and mobile apps in 8–16 weeks. You'll see working progress every week through our sprint demos.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely — around 60% of our clients are outside Bangladesh. We run async-friendly workflows across time zones, with recorded standups and shared dashboards so you always know where things stand.",
  },
  {
    q: "What does your process look like?",
    a: "Discover → Design → Develop → Launch → Grow. You'll get a fixed proposal after discovery, weekly demo videos during development, and a 30-day post-launch hardening window included in every project.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes 12 months of post-launch support — bug fixes, security updates and a monthly performance review. Optional retainers add growth work like SEO, ads and new features.",
  },
  {
    q: "How do payments work?",
    a: "Simple milestones: 30% to start, 40% at design approval, 30% at launch. We accept bank transfer, Wise, Stripe and Payoneer, and we work with international clients daily.",
  },
] as const;
