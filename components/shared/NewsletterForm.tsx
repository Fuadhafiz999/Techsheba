"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={cn("mt-4", className)}
    >
      {done ? (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
          <Check className="size-4" /> You&apos;re on the list — talk soon!
        </p>
      ) : (
        <div className="flex h-11 w-full max-w-sm items-center gap-1 rounded-full border border-border bg-white/5 p-1 pl-4 focus-within:border-brand-500/50">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            aria-label="Email address"
            className="h-full w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      )}
    </form>
  );
}
