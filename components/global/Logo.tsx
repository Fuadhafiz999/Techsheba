import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded-lg",
        className
      )}
      aria-label="Techsheba — home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-cyan shadow-[0_4px_20px_rgba(124,92,255,0.4)] transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7l7 9 7-9" />
          <path d="M12 16v-4" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Techsheba
      </span>
    </Link>
  );
}
