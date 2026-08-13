"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

type PortfolioCardProps = {
  study: CaseStudy;
  priority?: boolean;
};

export function PortfolioCard({ study, priority = false }: PortfolioCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      /* autoplay may be blocked — poster stays */
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Top row */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <Badge
            variant="outline"
            className="border-white/20 bg-black/40 text-[0.65rem] font-semibold tracking-wider text-white uppercase backdrop-blur-sm"
          >
            {study.category}
          </Badge>
          <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[0.65rem] font-medium text-white/90 backdrop-blur-sm">
            {study.year}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="font-display text-lg font-bold text-white sm:text-xl">
            {study.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/75 sm:text-sm">
            {study.short}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">
              {study.results[0].prefix}
              {study.results[0].value}
              {study.results[0].suffix} {study.results[0].label}
            </span>
            <span className="grid size-8 translate-y-1 place-items-center rounded-full bg-white text-slate-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
