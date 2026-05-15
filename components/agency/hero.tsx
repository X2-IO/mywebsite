"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    <section
      className="relative border-b border-white/[0.06] pt-28 pb-24 sm:pt-32 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.p
          {...fade(0)}
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500"
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          id="hero-heading"
          {...fade(0.08)}
          className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
        >
          {t.hero.title}{" "}
          <span className="text-zinc-400">{t.hero.titleHighlight}</span>.
        </motion.h1>
        <motion.p
          {...fade(0.16)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          {...fade(0.24)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href="#pricing"
            className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-full border border-white/[0.1] px-7 text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.dl
          {...fade(0.32)}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-4"
          aria-label={t.hero.statsLabel}
        >
          {t.stats.map((row) => (
            <div key={row.k}>
              <dt className="text-[11px] uppercase tracking-wider text-zinc-600">
                {row.k}
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">
                {row.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
