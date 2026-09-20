import type { Metadata } from "next";

import { faqs } from "@/data/mockData";
import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { StatsBand } from "@/components/home/StatsBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Digital Agency in Dhaka for Web, App, Design & Marketing",
    description:
      "Websites, mobile apps, branding and marketing campaigns from a full-service digital agency in Dhaka, Bangladesh, serving clients worldwide.",
    path: "/",
  }),
  title: { absolute: "Techsheba | Digital Agency in Dhaka for Web, App & Design" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <PortfolioShowcase />
      <StatsBand />
      <ProcessSection />
      <WhyUsSection />
      <Testimonials />
      <InsightsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
