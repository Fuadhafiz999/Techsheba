import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";

const featuredSlugs = [
  "digital-marketing",
  "social-media-marketing",
  "branding",
  "lead-generation",
  "website-design-development",
  "motion-graphics-video",
];

export function ServicesPreview() {
  const featured = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title={
            <>
              Full-stack services,{" "}
              <span className="text-brand-accent">one accountable team</span>
            </>
          }
          description="Strategy, design, engineering and marketing under one roof, so nothing gets lost between agencies, freelancers or handoffs."
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {featured.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={0.04 * i}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-5 outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-brand-500/60"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-accent ring-1 ring-brand-500/15 transition-colors duration-300 group-hover:bg-brand-500/20">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-brand-accent">
                      {service.title}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent opacity-0 transition duration-300 group-hover:opacity-100">
                      Explore this service
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center" delay={0.1}>
          <CTAButton href="/services" variant="outline" size="lg">
            See all services
            <ArrowRight className="size-4" />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}