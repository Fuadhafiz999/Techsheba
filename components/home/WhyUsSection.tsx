import Image from "next/image";

import { px, whyUs } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { GlowCard } from "@/components/shared/GlowCard";

export function WhyUsSection() {
  const [featured, ...rest] = whyUs;

  return (
    <section className="border-y border-border bg-card/40 py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Techsheba"
          title={
            <>
              The agency you can{" "}
              <span className="text-gradient">actually count on</span>
            </>
          }
          description="Anyone can promise a website. We're built to deliver results, communicate honestly, and stay accountable long after launch."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured card with image */}
          <Reveal className="md:col-span-2">
            <GlowCard className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-1 flex-col gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                  <featured.icon className="size-6" />
                </span>
                <h3 className="font-display text-xl font-bold">
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
              </div>
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-56">
                <Image
                  src={px(3183150, 900)}
                  alt="Techsheba team in a strategy session"
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  className="object-cover"
                />
              </div>
            </GlowCard>
          </Reveal>

          {rest.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05 * i}>
              <GlowCard className="flex h-full flex-col gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                  <feature.icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
