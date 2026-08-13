import { logos } from "@/data/mockData";
import { Marquee } from "@/components/shared/Marquee";

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-card/50 py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by forward-thinking teams worldwide
        </p>
        <div className="relative mt-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          />
          <Marquee speed={30}>
            {logos.map((logo) => (
              <span
                key={logo}
                className="mx-8 font-display text-xl font-bold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground sm:mx-12 sm:text-2xl"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
