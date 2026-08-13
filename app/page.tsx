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

export default function HomePage() {
  return (
    <>
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
