import { ArrowLeft } from "lucide-react";

import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[120px]" />
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-7xl font-bold tracking-tight text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="max-w-md text-sm text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to something useful.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/">
            <ArrowLeft className="size-4" />
            Back to home
          </CTAButton>
          <CTAButton href="/contact" variant="outline">
            Start a project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
