import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { caseStudies, getCaseStudy } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";
import { CTASection } from "@/components/home/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.short,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All case studies
            </Link>
          </Reveal>

          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-full border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-brand-accent uppercase"
                  >
                    {study.category}
                  </Badge>
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-[0.65rem] font-medium text-muted-foreground">
                    {study.year}
                  </span>
                </div>
                <h1 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                  {study.title}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {study.short}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6">
                {[
                  ["Client", study.client],
                  ["Industry", study.industry],
                  ["Year", study.year],
                  [
                    "Services",
                    study.services
                      .map(
                        (s) =>
                          s
                            .split("-")
                            .map((w) => w[0].toUpperCase() + w.slice(1))
                            .join(" ")
                      )
                      .join(", "),
                  ],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1">
                    <dt className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Cover */}
          <Reveal delay={0.12} className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={study.cover}
                alt={study.title}
                width={1920}
                height={1080}
                priority
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                The challenge
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {study.challenge}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                What we did
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {study.solution}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-border bg-card/40 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              The <span className="text-gradient">results</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {study.results.map((r, i) => (
              <Reveal key={r.label} delay={0.07 * i}>
                <div className="flex flex-col gap-2">
                  <CountUp
                    value={r.value}
                    prefix={r.prefix ?? ""}
                    suffix={r.suffix ?? ""}
                    decimals={Number.isInteger(r.value) ? 0 : 1}
                    className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl"
                  />
                  <p className="text-sm text-muted-foreground">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Inside the project
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {study.gallery.map((img, i) => (
              <Reveal key={img} delay={0.06 * i}>
                <div className="relative overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={img}
                    alt={`${study.title} — project gallery ${i + 1}`}
                    width={900}
                    height={675}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-500/40 sm:p-12"
          >
            <div className="relative h-40 overflow-hidden rounded-2xl sm:h-56">
              <Image
                src={next.cover}
                alt={next.title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Next case study
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  {next.title}
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                View project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
