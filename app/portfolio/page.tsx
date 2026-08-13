import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Case studies across fintech, e-commerce, logistics, SaaS and travel — with the numbers to prove it.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[140px]" />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <Reveal>
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase">
              Our work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Work that speaks in{" "}
              <span className="text-gradient">numbers</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every project below shipped on time, on budget — and moved a
              real business metric. Hover any card to see the work in motion.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <CTAButton href="/contact" size="lg">
              Start a project like these
              <ArrowRight className="size-4" />
            </CTAButton>
          </Reveal>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
