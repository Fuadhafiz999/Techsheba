"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChartLine,
  Play,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import { px } from "@/data/mockData";
import { CTAButton } from "@/components/shared/CTAButton";
import { ShowreelModal } from "@/components/home/ShowreelModal";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const avatars = [
  { initials: "SM", from: "from-brand-500", to: "to-brand-700" },
  { initials: "RH", from: "from-accent-cyan", to: "to-cyan-700" },
  { initials: "EC", from: "from-amber-400", to: "to-orange-600" },
  { initials: "DO", from: "from-emerald-400", to: "to-teal-600" },
];

export function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 animate-aurora rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="absolute top-40 -left-32 h-80 w-80 animate-aurora rounded-full bg-accent-cyan/15 blur-[120px] [animation-delay:4s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
        >
          {/* Copy */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 py-1.5 pr-4 pl-2 text-xs font-medium text-brand-accent"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-2 py-0.5 text-[0.65rem] font-bold text-white">
                <Sparkles className="size-3" /> NEW
              </span>
              Full-service digital agency — Dhaka &amp; worldwide
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[2.6rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]"
            >
              We turn clicks into{" "}
              <span className="text-gradient">customers.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Techsheba builds high-performance websites, mobile apps, brands
              and marketing campaigns for ambitious companies in Bangladesh
              and beyond — engineered around one thing: your revenue.
            </motion.p>

            <motion.div
              variants={item}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <CTAButton href="/contact" size="lg">
                Get a free proposal
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </CTAButton>
              <CTAButton
                size="lg"
                variant="outline"
                onClick={() => setShowreelOpen(true)}
              >
                <span className="grid size-7 place-items-center rounded-full bg-brand-accent/20 text-brand-accent">
                  <Play className="size-3.5" fill="currentColor" />
                </span>
                Watch showreel
              </CTAButton>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={item}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2.5">
                  {avatars.map((a) => (
                    <span
                      key={a.initials}
                      className={`grid size-9 place-items-center rounded-full bg-gradient-to-br ${a.from} ${a.to} text-[0.6rem] font-bold text-white ring-2 ring-background`}
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9/5</span>{" "}
                    from 80+ clients in 12 countries
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              {/* Main showreel card */}
              <div className="group relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src={px(3184292, 1600)}
                  alt="Techsheba team collaborating on a digital product in our Dhaka studio"
                  width={1200}
                  height={900}
                  priority
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  aria-label="Play showreel"
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:size-20">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-500 shadow-[0_0_40px_rgba(124,92,255,0.7)] sm:size-14">
                      <Play
                        className="ml-0.5 size-5 text-white sm:size-6"
                        fill="currentColor"
                      />
                    </span>
                  </span>
                </button>
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.65rem] font-medium text-white backdrop-blur-sm">
                  60-sec showreel · 2026
                </span>
              </div>

              {/* Floating: ROI card */}
              <div className="absolute -top-5 -right-3 animate-float sm:-right-6">
                <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
                  <span className="grid size-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-400">
                    <TrendingUp className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">
                      +212% ROI
                    </p>
                    <p className="text-[0.65rem] text-muted-foreground">
                      e-commerce rebuild
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating: SEO card */}
              <div className="absolute -bottom-5 -left-3 animate-float-delayed sm:-left-6">
                <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-accent/20 text-brand-accent">
                    <ChartLine className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">
                      #1 on Google
                    </p>
                    <p className="text-[0.65rem] text-muted-foreground">
                      3.4× organic traffic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ShowreelModal
        open={showreelOpen}
        onOpenChange={setShowreelOpen}
      />
    </section>
  );
}
