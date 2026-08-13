import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import {
  getCasesByService,
  getService,
  services,
  siteConfig,
} from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { ProblemSolution } from "@/components/services/ProblemSolution";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { CTASection } from "@/components/home/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getCasesByService(service.slug);
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Techsheba! I'm interested in your ${service.title} service.`
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-brand-accent uppercase"
                >
                  {service.category.replace("-", " & ")}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  From discovery to launch, one team
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg font-medium text-brand-accent">
                {service.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <CTAButton href="/contact" size="lg">
                  Get a free quote
                  <ArrowRight className="size-4" />
                </CTAButton>
                <CTAButton
                  href={whatsappHref}
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 text-[#25D366]" />
                  Ask on WhatsApp
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={service.image}
                alt={`${service.title} — Techsheba`}
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <ProblemSolution
            problem={service.problem}
            solution={service.solution}
          />
        </div>
      </section>

      {/* Deliverables + outcomes */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold">
                What&apos;s included
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-accent/15 text-brand-accent">
                      <Check className="size-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CTAButton href="/contact" size="md">
                  Get a detailed scope
                  <ArrowRight className="size-4" />
                </CTAButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-brand-700/20 to-accent-cyan/5 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold">
                Results clients see
              </h2>
              <div className="grid gap-5">
                {service.outcomes.map((o) => (
                  <div
                    key={o.label}
                    className="flex items-baseline gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-display text-3xl font-bold text-gradient">
                      {o.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {o.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-10 lg:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                {service.title} in action
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Real projects, real numbers.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((study, i) => (
                <Reveal key={study.slug} delay={0.06 * i}>
                  <PortfolioCard study={study} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
