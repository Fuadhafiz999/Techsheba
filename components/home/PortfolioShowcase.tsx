import { ArrowRight } from "lucide-react";

import { caseStudies } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

export function PortfolioShowcase() {
  const featured = caseStudies.slice(0, 4);

  return (
    <section className="border-y border-border bg-card/40 py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Results our clients{" "}
                <span className="text-brand-accent">brag about</span>
              </>
            }
            description="Real projects, real numbers. Hover a card to see the work in motion."
          />
          <Reveal delay={0.15} className="shrink-0">
            <CTAButton href="/portfolio" variant="outline">
              View all case studies
              <ArrowRight className="size-4" />
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {featured.map((study, i) => (
            <Reveal
              key={study.slug}
              delay={0.06 * i}
              className={cn(
                i === 0 && "lg:col-span-7",
                i === 1 && "lg:col-span-5",
                i === 2 && "lg:col-span-5",
                i === 3 && "lg:col-span-7"
              )}
            >
              <PortfolioCard study={study} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
