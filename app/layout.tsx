import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/data/mockData";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import { ThemeScript } from "@/components/global/ThemeScript";
import { SmoothScroll } from "@/components/global/SmoothScroll";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { WhatsAppButton } from "@/components/global/WhatsAppButton";
import { StickyMobileBar } from "@/components/global/StickyMobileBar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-grotesk",
  display: "swap",
});

const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Techsheba | Digital Agency in Dhaka | Web, App, Design & Marketing",
    template: "%s | Techsheba",
  },
  description: siteConfig.description,
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "UI UX design",
    "digital marketing",
    "branding",
    "motion graphics",
    "Techsheba",
    "Bangladesh agency",
    "Dhaka web agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Techsheba | We turn clicks into customers",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Techsheba | We turn clicks into customers",
    description: siteConfig.description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070C" },
    { media: "(prefers-color-scheme: light)", color: "#F6F7F9" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: String(siteConfig.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactType: "sales",
  },
  sameAs: Object.values(siteConfig.socials),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning: the pre-paint theme script adds the `dark`
  // class to <html> before hydration, so React skips attribute diffing on
  // this element (same pattern used by next-themes).
  return (
    <html
      lang="en"
      className={`${geist.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main id="main-content" className="flex min-h-screen flex-col">{children}</main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileBar />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
