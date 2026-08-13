"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { blogCategories, blogPosts } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";

const filters = ["All", ...blogCategories];

export function BlogGrid() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter articles"
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

      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
