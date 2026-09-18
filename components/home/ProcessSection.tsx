import { processSteps } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title={
            <>
              A process that removes{" "}
              <span className="text-brand-accent">all the guesswork</span>
            </>
          }
          description="Five steps, weekly demos, and a fixed quote before we start. You always know what is happening, what is next, and what it costs."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={0.08 * i}>
                <div className="group relative flex flex-col gap-4 lg:gap-5 lg:pt-5 lg:border-t lg:border-border">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-500/10 text-brand-accent ring-1 ring-brand-500/15 transition-colors duration-300 group-hover:bg-brand-500/20">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-muted-foreground/50 transition-colors duration-300 group-hover:text-brand-accent">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
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