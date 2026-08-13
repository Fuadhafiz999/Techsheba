import { processSteps } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process that removes{" "}
              <span className="text-gradient">all the guesswork</span>
            </>
          }
          description="Five steps, weekly demos, and a fixed quote before we start. You always know what's happening, what's next, and what it costs."
        />

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand-500/60 via-border to-accent-cyan/60 lg:block"
          />
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={0.08 * i}>
                <div className="group relative flex flex-col gap-4">
                  <div className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="relative z-10 grid size-14 place-items-center rounded-2xl border border-brand-accent/30 bg-card text-brand-accent shadow-[0_0_30px_rgba(124,92,255,0.15)] transition-all duration-300 group-hover:border-brand-500/60 group-hover:text-brand-accent">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-gradient font-display text-sm font-bold tracking-widest lg:mt-3 lg:text-lg">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
