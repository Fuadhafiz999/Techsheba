import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Practical guides on web performance, e-commerce conversion, digital marketing and pricing — from the Techsheba team in Dhaka.",
};

export default function BlogPage() {
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
              Insights & resources
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Ideas that help you{" "}
              <span className="text-gradient">grow faster</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Everything we learn shipping websites, apps and campaigns for
              clients in 12 countries — distilled into practical guides you
              can act on this week.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <BlogGrid />
        </div>
      </section>

      {/* Newsletter band */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-brand-700/25 to-accent-cyan/10 px-6 py-14 text-center sm:px-12">
              <div
                aria-hidden="true"
                className="absolute -top-20 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[110px]"
              />
              <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-5">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-accent/15 text-brand-accent ring-1 ring-brand-accent/30">
                  <Mail className="size-6" />
                </span>
                <h2 className="font-display text-2xl font-bold text-balance sm:text-3xl">
                  One useful email a month — no spam, ever
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Join 2,000+ founders and marketers getting our best growth
                  tactics, straight to their inbox.
                </p>
                <NewsletterForm className="mt-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
