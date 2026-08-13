import type { Metadata } from "next";
import {
  CalendarClock,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/data/mockData";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free, fixed proposal within 24 hours. Talk to Techsheba on WhatsApp, email or a Calendly call — no pressure, no jargon.",
};

const channels = [
  {
    icon: Mail,
    title: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    title: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Fastest response",
    href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      siteConfig.whatsappMessage
    )}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: siteConfig.address,
    href: undefined,
  },
];

const nextSteps = [
  {
    n: "1",
    title: "We reply within 24h",
    description: "A real human reads your brief — not a bot, not a sales script.",
  },
  {
    n: "2",
    title: "Free strategy call",
    description: "30 minutes to dig into your goals, audience and roadmap.",
  },
  {
    n: "3",
    title: "Fixed proposal in 24h",
    description: "Clear scope, timeline and line-item pricing. No surprises.",
  },
];

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[140px]" />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <Reveal>
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great together</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us about your project and get a free, fixed proposal within
              24 hours — whether you&apos;re around the corner in Dhaka or on
              the other side of the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="py-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold">{c.title}</h2>
                    <p className="mt-1 text-sm break-words text-muted-foreground group-hover:text-foreground">
                      {c.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold">{c.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.value}
                    </p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + steps */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display text-lg font-bold">
                  What happens next
                </h2>
                <ol className="flex flex-col gap-5">
                  {nextSteps.map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-accent/15 text-sm font-bold text-brand-accent ring-1 ring-brand-accent/30">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{step.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                  <Clock className="size-3.5 text-brand-accent" />
                  {siteConfig.hours}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/5 p-6 sm:p-8">
                <h2 className="font-display text-lg font-bold">
                  In a hurry? Message us on WhatsApp
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We typically respond within a couple of hours during
                  business time — and yes, we work with international clients
                  across time zones.
                </p>
                <CTAButton
                  href={whatsappHref}
                  size="md"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="border-t border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col items-start gap-5">
              <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-accent uppercase">
                Book a call
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Prefer to talk it through?{" "}
                <span className="text-gradient">Book a free strategy call</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                30 minutes, zero pressure. We&apos;ll map your goals, answer
                your questions, and leave you with a clear next step — whether
                or not we work together.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarClock className="size-4 text-brand-accent" />
                  Pick a slot that suits your time zone
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-brand-accent" />
                  Get a recap + fixed quote within 24h
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <iframe
                src={siteConfig.calendlyUrl}
                title="Book a discovery call with Techsheba"
                className="h-[560px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
