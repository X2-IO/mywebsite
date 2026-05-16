"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  "aria-labelledby"?: string;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  id,
  "aria-labelledby": ariaLabelledby,
}: SectionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id={id} className={className} aria-labelledby={ariaLabelledby}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {children}
    </motion.section>
  );
}
