"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.8,
  delay = 0,
  yOffset = 64,
  inView = true,
  inViewMargin = "0px 0px -80px 0px",
  blur = "12px",
}: BlurFadeProps) => {
  const ref = useRef(null);

  // `margin` was previously dropped, so inViewMargin had no effect.
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as never,
  });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    // Resolves to translate-y-0 — the old `-yOffset` left every element
    // permanently offset above its own layout position.
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: [0.32, 0.72, 0, 1],
      }}
      style={{ willChange: "transform, opacity, filter" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
