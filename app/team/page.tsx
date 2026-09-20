import type { Metadata } from "next";

import { Reveal } from "@/components/shared/Reveal";
import { TeamGrid } from "@/components/team/TeamGrid";
import { CTASection } from "@/components/home/CTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Meet Our Team",
  description:
    "The full Techsheba team: the designers, engineers, editors, marketers and support specialists behind every project.",
  path: "/team",
});

export default function TeamPage() {
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
              Meet our team
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              The people behind{" "}
              <span className="text-brand-accent">Techsheba</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Browse the full team by department, or meet everyone at once.
              These are the designers, engineers, editors and strategists
              you&apos;ll actually work with.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <TeamGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}