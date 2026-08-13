import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlowCard({ children, className, glow = true }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8",
        glow &&
          "hover:border-brand-500/40 hover:shadow-[0_24px_80px_rgba(124,92,255,0.16)]",
        className
      )}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-56 w-3/4 -translate-x-1/2 rounded-full bg-brand-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      {children}
    </div>
  );
}
