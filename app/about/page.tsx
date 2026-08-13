import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Gem, HeartHandshake, Timer } from "lucide-react";

import { px, siteConfig, stats } from "@/data/mockData";
import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";
import { StatsBand } from "@/components/home/StatsBand";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Techsheba is a full-service digital agency from Dhaka, Bangladesh — building websites, apps, brands and campaigns for ambitious companies worldwide since 2017.",
};

const values = [
  {
    icon: Gem,
    title: "Craft over shortcuts",
    description:
      "We sweat the details others skip — performance budgets, accessibility, and code we'd be proud to open a year later.",
  },
  {
    icon: HeartHandshake,
    title: "Honesty over hype",
    description:
      "If an idea won't work, we'll tell you before you spend on it. Our reputation is worth more than a single invoice.",
  },
  {
    icon: Timer,
    title: "Speed with quality",
    description:
      "Fast doesn't mean sloppy. We've built a process that ships MVPs in weeks without compromising on standards.",
  },
  {
    icon: Compass,
    title: "Partnership, not projects",
    description:
      "We stay for the results. Most of our clients started with one project — and are still with us years later.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[140px]" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase">
                About Techsheba
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                A Dhaka-born agency with{" "}
                <span className="text-gradient">global ambitions</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Techsheba started in {siteConfig.founded} with three people,
                  one laptop and a simple belief: Bangladeshi talent can
                  compete with the best agencies in the world.
                </p>
                <p>
                  Today we&apos;re a full-service team of designers,
                  engineers and marketers shipping products and campaigns for
                  clients across 12 countries — from our studio in Dhaka to
                  teams in London, Singapore, Dubai and beyond.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="grid grid-cols-3 gap-6 pt-2">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <dd className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </dd>
                    <dt className="text-xs text-muted-foreground">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src={px(3184465, 1600)}
                  alt="Techsheba team working together in the Dhaka studio"
                  width={1200}
                  height={900}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl">
                <span className="font-display text-3xl font-bold text-gradient">
                  {new Date().getFullYear() - siteConfig.founded}+
                </span>
                <span className="text-xs leading-tight text-muted-foreground">
                  years of<br />
                  shipping work
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-brand-700/20 to-accent-cyan/5 p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Our mission
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To make world-class digital products and marketing accessible
                to ambitious businesses everywhere — by pairing global
                standards with honest pricing and relentless accountability.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Our vision
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To be the agency that proves great work isn&apos;t a function
                of geography — and to put Bangladesh firmly on the global map
                of digital excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we <span className="text-gradient">stand for</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
