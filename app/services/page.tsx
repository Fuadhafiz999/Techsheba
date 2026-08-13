import type { Metadata } from "next";
import { ArrowRight, Layers } from "lucide-react";

import { serviceCategories, services } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, UI/UX design, branding, digital marketing and motion graphics — full-stack services from one accountable team.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[140px]" />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <Reveal>
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase">
              Our services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Everything your brand needs to{" "}
              <span className="text-gradient">grow online</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Six core capabilities, one accountable team. Pick a single
              service or let us run the whole growth engine — strategy,
              design, code and marketing working as one.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <CTAButton href="/contact" size="lg">
                Get a free proposal
                <ArrowRight className="size-4" />
              </CTAButton>
              <CTAButton href="/portfolio" variant="outline" size="lg">
                See our work
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category pillars */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={0.06 * i}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                    <Layers className="size-5" />
                  </span>
                  <h2 className="font-display text-lg font-bold">{cat.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cat.short}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {services
                      .filter((s) => s.category === cat.slug)
                      .map((s) => (
                        <li
                          key={s.slug}
                          className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {s.title}
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What's included"
            title="Pick a service — or bundle them all"
            description="Every engagement starts with a free discovery call and a fixed, line-item quote. No hidden fees, ever."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.05 * i}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
