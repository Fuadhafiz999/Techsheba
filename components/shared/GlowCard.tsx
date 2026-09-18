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
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 sm:p-8",
        glow &&
          "hover:border-border focus-within:border-border hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}