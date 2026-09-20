"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  activeTeamMembers,
  departments,
} from "@/data/mockData";
import type { DepartmentSlug } from "@/data/mockData";
import { Reveal } from "@/components/shared/Reveal";

type Tab = "all" | DepartmentSlug;

export function TeamGrid() {
  const [active, setActive] = useState<Tab>("all");

  const members =
    active === "all"
      ? activeTeamMembers
      : activeTeamMembers.filter((m) => m.departments.includes(active));

  const tabs: { slug: Tab; title: string }[] = [
    { slug: "all", title: "All" },
    ...departments,
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            type="button"
            onClick={() => setActive(tab.slug)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-semibold transition duration-300",
              active === tab.slug
                ? "border-brand-accent bg-brand-accent text-brand-accent-foreground shadow-md"
                : "border-border bg-card text-muted-foreground hover:border-brand-500/40 hover:text-foreground"
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        key={active}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {members.map((member, i) => (
          <Reveal key={member.name} delay={0.06 * (i % 4)}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Techsheba`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h3 className="font-display text-lg font-bold">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand-accent">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}