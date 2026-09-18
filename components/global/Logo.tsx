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
      aria-label="Techsheba - home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-brand-500 text-white transition-transform duration-300 group-hover:scale-[1.03]">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
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
