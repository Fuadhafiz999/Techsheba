"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/data/mockData";

type PortfolioCardProps = {
  study: CaseStudy;
  priority?: boolean;
};

function resultLabel(study: CaseStudy) {
  const r = study.results[0];
  return `${r.prefix ?? ""}${r.value}${r.suffix ?? ""} ${r.label}`;
}

export function PortfolioCard({ study, priority = false }: PortfolioCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.muted = true;
    v.play().catch(() => {
      /* autoplay may be blocked - poster stays */
    });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={study.cover}
          alt={study.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {study.video && (
          <video
            ref={videoRef}
            src={study.video}
            poster={study.cover}
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xs font-medium text-white/60">
            {study.category} · {study.year} · {resultLabel(study)}
          </p>
          <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
            {study.title}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="line-clamp-2 text-xs text-white/75 sm:text-sm">
              {study.short}
            </p>
            <span className="grid size-9 shrink-0 translate-y-1 place-items-center rounded-full bg-white text-slate-900 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
