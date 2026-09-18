import { logos } from "@/data/mockData";
import { Marquee } from "@/components/shared/Marquee";

/**
 * Fictional client wordmarks rendered as monogram-in-shape SVG marks
 * (simple geometric glyphs, one per brand) + display type wordmark.
 * Inherit currentColor so they render correctly in light and dark mode.
 */
const markShapes: Record<string, "circle" | "square" | "diamond"> = {
  Verity: "circle",
  Nexora: "diamond",
  Payflow: "circle",
  Lumen: "square",
  Bondly: "circle",
  Harbor: "diamond",
  Zenith: "square",
  Quotient: "circle",
};

function MonogramMark({ name }: { name: string }) {
  const initial = name[0];
  const shape = markShapes[name] ?? "circle";
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      {shape === "circle" && (
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
      )}
      {shape === "square" && (
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      {shape === "diamond" && (
        <rect
          x="4.2"
          y="4.2"
          width="15.6"
          height="15.6"
          rx="3"
          transform="rotate(45 12 12)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      <text
        x="12"
        y="15.6"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="var(--font-display-grotesk), sans-serif"
      >
        {initial}
      </text>
    </svg>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-card/50 py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
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
                className="mx-8 inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground sm:mx-12 sm:text-2xl"
              >
                <MonogramMark name={logo} />
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
