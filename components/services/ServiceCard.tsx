import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import type { Service } from "@/data/mockData";
import { GlowCard } from "@/components/shared/GlowCard";
import { Badge } from "@/components/ui/badge";

const categoryLabel: Record<string, string> = {
  tech: "Tech & Engineering",
  creative: "Creative & Design",
  "digital-marketing": "Digital Marketing",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <GlowCard className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-accent-cyan/20 text-brand-accent ring-1 ring-brand-accent/30">
          <Icon className="size-6" />
        </span>
        <Badge
          variant="outline"
          className="rounded-full border-border text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase"
        >
          {categoryLabel[service.category]}
        </Badge>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.tagline}
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {service.deliverables.slice(0, 4).map((d) => (
          <li
            key={d}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-brand-accent" />
            {d}
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent"
      >
        Explore {service.title.toLowerCase()}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    </GlowCard>
  );
}
