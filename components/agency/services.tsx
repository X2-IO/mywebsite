"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function Services() {
  const { t } = useLocale();

  return (
    <SectionReveal
      id="work"
      className="border-b border-white/[0.06] py-24 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="services-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {t.services.title}
        </h2>
        <p className="mt-3 max-w-lg text-zinc-500">{t.services.subtitle}</p>
        <ul className="mt-14 grid list-none gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] p-px sm:grid-cols-3">
          {t.services.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#030306] p-6 sm:p-7"
            >
              <span className="text-[11px] tabular-nums text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
