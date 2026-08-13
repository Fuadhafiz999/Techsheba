import type { BlogBlock } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display mt-6 text-2xl font-bold tracking-tight sm:text-[1.7rem]"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-foreground/85 sm:text-lg sm:leading-8">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-base leading-relaxed text-foreground/85 sm:text-lg sm:leading-8"
                  >
                    <span className="mt-[0.55em] grid size-2 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan">
                      <span className="size-1 rounded-full bg-background" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-2 rounded-2xl border-l-4 border-brand-500 bg-brand-accent/10 p-6 sm:p-7"
              >
                <p className="font-display text-lg leading-relaxed font-medium text-balance sm:text-xl">
                  “{block.text}”
                </p>
              </blockquote>
            );
          case "tip":
            return (
              <div
                key={i}
                className={cn(
                  "my-2 rounded-2xl border border-accent-cyan/30 bg-accent-cyan/5 p-6 sm:p-7"
                )}
              >
                <p className="text-xs font-bold tracking-widest text-accent-cyan uppercase">
                  Pro tip
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/85 sm:text-lg">
                  {block.text}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
