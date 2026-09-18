"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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

export function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pb-20">
      {/* Background: quiet static brand veil, no blobs, no grids */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-500/[0.08] to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          {/* Copy */}
          <div className="flex flex-col items-start gap-6 lg:order-2">
            <motion.p
              variants={item}
              className="text-sm font-medium text-brand-accent"
            >
              Full-service digital agency in Dhaka and worldwide
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[2.6rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              We turn clicks into{" "}
              <span className="text-brand-accent">customers.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Websites, mobile apps, brands and marketing campaigns for
              ambitious companies, built around one thing: your revenue.
            </motion.p>

            <motion.div
              variants={item}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <CTAButton href="/contact" size="lg">
                Start a project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </CTAButton>
              <CTAButton
                size="lg"
                variant="outline"
                onClick={() => setShowreelOpen(true)}
              >
                <Play className="size-4" fill="currentColor" />
                Watch showreel
              </CTAButton>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-lg lg:order-1 lg:max-w-none"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-border">
              <Image
                src={px(3184292, 1600)}
                alt="Techsheba team collaborating on a digital product in our Dhaka studio"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                aria-label="Play showreel"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid size-16 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:size-20">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-500 sm:size-14">
                    <Play
                      className="ml-0.5 size-5 text-white sm:size-6"
                      fill="currentColor"
                    />
                  </span>
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ShowreelModal open={showreelOpen} onOpenChange={setShowreelOpen} />
    </section>
  );
}