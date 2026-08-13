import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowCard } from "@/components/shared/GlowCard";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Badge } from "@/components/ui/badge";

const categoryLabel: Record<string, string> = {
  tech: "Tech",
  creative: "Creative",
  "digital-marketing": "Marketing",
};

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Full-stack services,{" "}
              <span className="text-gradient">one accountable team</span>
            </>
          }
          description="Strategy, design, engineering and marketing under one roof — so nothing gets lost between agencies, freelancers or handoffs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "digital-marketing",
            "social-media-marketing",
            "branding",
            "lead-generation",
            "website-design-development",
            "motion-graphics-video",
          ]
            .map((slug) => services.find((s) => s.slug === slug))
            .filter((s): s is (typeof services)[number] => Boolean(s))
            .map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={0.05 * i}>
                <GlowCard className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                      <Icon className="size-6" />
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-full border-border text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase"
                    >
                      {categoryLabel[service.category]}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent"
                  >
                    Explore service
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <CTAButton href="/services" variant="outline" size="lg">
            See all services
            <ArrowRight className="size-4" />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
