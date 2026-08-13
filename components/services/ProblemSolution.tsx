import { Lightbulb, TriangleAlert } from "lucide-react";

import { Reveal } from "@/components/shared/Reveal";

type ProblemSolutionProps = {
  problem: string;
  solution: string;
};

export function ProblemSolution({ problem, solution }: ProblemSolutionProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Reveal>
        <div className="flex h-full flex-col gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-7">
          <span className="grid size-11 place-items-center rounded-xl bg-destructive/15 text-destructive">
            <TriangleAlert className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold">The problem</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex h-full flex-col gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-7">
          <span className="grid size-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-400">
            <Lightbulb className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold">How we fix it</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {solution}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
