import { stats } from "@/data/mockData";
import { CountUp } from "@/components/shared/CountUp";
import { Reveal } from "@/components/shared/Reveal";

export function StatsBand() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.07 * i}
              className="flex flex-col items-center gap-2 text-center md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-bold tracking-tight tabular-nums sm:text-5xl"
              />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}