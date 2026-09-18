"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        wheelMultiplier: 0.95,
        smoothWheel: !reduce,
      }}
    >
      {children}
    </ReactLenis>
  );
}
