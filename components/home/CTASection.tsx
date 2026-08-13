import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/data/mockData";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";

const trustPoints = [
  "Free discovery call",
  "Fixed quote within 24h",
  "No lock-in contracts",
];

export function CTASection() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-brand-700/30 via-card to-accent-cyan/10 px-6 py-16 text-center sm:px-12 lg:py-24">
            {/* Background */}
            <div aria-hidden="true" className="absolute inset-0 -z-0">
              <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
              <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 animate-aurora rounded-full bg-brand-500/30 blur-[120px]" />
              <div className="absolute -bottom-24 right-0 h-64 w-64 animate-aurora rounded-full bg-accent-cyan/20 blur-[110px] [animation-delay:5s]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase backdrop-blur-sm">
                Limited onboarding slots each month
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.12]">
                Have a project in mind?{" "}
                <span className="text-gradient">Let&apos;s build it.</span>
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us what you&apos;re building and we&apos;ll send a free,
                fixed proposal within 24 hours — no pressure, no jargon, no
                hidden fees.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/contact" size="lg">
                  Start your project
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </CTAButton>
                <CTAButton
                  href={whatsappHref}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 text-[#25D366]" />
                  Chat on WhatsApp
                </CTAButton>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    {point}
                  </span>
                ))}
              </div>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-brand-accent" />
                Prefer to talk? {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
