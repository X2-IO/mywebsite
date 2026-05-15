"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <SectionReveal
      id="testimonials"
      className="border-b border-white/[0.06] py-24 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="testimonials-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {t.testimonials.title}
        </h2>
        <p className="mt-3 text-zinc-500">{t.testimonials.subtitle}</p>
        <ul className="mt-14 grid list-none gap-4 p-0 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-white/[0.06] p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-zinc-400">
                  <span className="sr-only">{t.testimonials.quoteLabel}</span>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/[0.06] pt-5">
                  <div className="text-sm font-medium text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-600">{item.role}</div>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
