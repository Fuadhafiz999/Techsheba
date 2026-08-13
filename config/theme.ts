/**
 * Techsheba — Central Design Token Hub
 * ------------------------------------------------------------------
 * Single source of truth for brand tokens used in TS/TSX (metadata,
 * Framer Motion values, inline gradients, shadows).
 *
 * The Tailwind utilities (bg-brand-500, text-accent-cyan, ...) are
 * wired from the CSS custom properties defined in app/globals.css
 * (@theme inline + :root/.dark). Keep the two files in sync:
 *  - hex/color values live in globals.css  -> Tailwind classes
 *  - semantic constants live here          -> TSX / motion / metadata
 */

export const colors = {
  background: "#06070C",
  foreground: "#F2F3F7",
  card: "#0C0E16",
  cardHover: "#131726",
  border: "rgba(255, 255, 255, 0.08)",
  muted: "#98A2B3",
  brand: {
    DEFAULT: "#7C5CFF",
    light: "#9B8AFF",
    lighter: "#BDB0FF",
    dark: "#5540C7",
  },
  accent: {
    cyan: "#38E1FF",
    violet: "#7C5CFF",
  },
  success: "#34D399",
  warning: "#FBBF24",
  danger: "#F87171",
} as const;

export const fonts = {
  display: "var(--font-display)",
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const spacing = {
  section: "py-20 md:py-28 lg:py-32",
  container: "mx-auto w-full max-w-7xl px-5 sm:px-8",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const gradients = {
  brand: "linear-gradient(135deg, #7C5CFF 0%, #38E1FF 100%)",
  text: "linear-gradient(90deg, #9B8AFF 0%, #38E1FF 100%)",
  glow:
    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 92, 255, 0.35), transparent)",
} as const;

export const shadows = {
  brand: "0 8px 40px rgba(124, 92, 255, 0.35)",
  brandHover: "0 12px 48px rgba(124, 92, 255, 0.5)",
  card: "0 20px 60px rgba(0, 0, 0, 0.45)",
} as const;

export const motion = {
  duration: { fast: 0.2, base: 0.35, slow: 0.6 },
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

export const theme = {
  colors,
  fonts,
  radius,
  spacing,
  breakpoints,
  gradients,
  shadows,
  motion,
} as const;

export default theme;
