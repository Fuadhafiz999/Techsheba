import { stats } from "@/data/mockData";
import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";

export function StatsBand() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.07 * i}
              className="flex flex-col items-center gap-2 text-center"
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl"
              />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
