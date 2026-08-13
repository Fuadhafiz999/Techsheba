"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { caseStudies } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

const filters = ["All", "Web", "App", "Design", "Marketing"] as const;
type Filter = (typeof filters)[number];

export function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter case studies"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === filter
                ? "border-brand-500/50 bg-brand-500 text-white shadow-[0_4px_20px_rgba(124,92,255,0.35)]"
                : "border-border bg-white/5 text-muted-foreground hover:border-brand-500/40 hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
