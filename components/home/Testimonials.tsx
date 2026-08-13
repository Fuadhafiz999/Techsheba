import { Quote, Star } from "lucide-react";

import { testimonials } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const avatarGradients = [
  "from-brand-500 to-brand-700",
  "from-accent-cyan to-cyan-700",
  "from-amber-400 to-orange-600",
  "from-emerald-400 to-teal-600",
  "from-pink-400 to-rose-600",
  "from-violet-400 to-purple-700",
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client love"
          title={
            <>
              Don&apos;t take our word for it —{" "}
              <span className="text-gradient">take theirs</span>
            </>
          }
          description="4.9/5 average rating across 80+ client reviews on Google, Clutch and Upwork."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <Reveal key={t.name} delay={0.05 * i}>
                <figure className="relative flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 sm:p-7">
                  <Quote
                    aria-hidden="true"
                    className="absolute top-5 right-5 size-8 text-brand-500/20"
                  />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${avatarGradients[i % avatarGradients.length]}`}
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}, {t.company} · {t.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
