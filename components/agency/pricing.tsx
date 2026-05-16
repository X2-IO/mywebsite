"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function Pricing() {
  const { t } = useLocale();

  return (
    <SectionReveal
      id="pricing"
      className="border-b border-white/[0.06] py-24 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-lg">
          <h2
            id="pricing-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-zinc-500">{t.pricing.subtitle}</p>
          <p className="mt-1 text-xs text-zinc-600">{t.pricing.vat}</p>
        </div>

        <ul className="mt-14 grid list-none gap-4 p-0 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, i) => {
            const featured = "featured" in tier && tier.featured;
            return (
              <motion.li
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  featured
                    ? "border-white/20 bg-white/[0.04]"
                    : "border-white/[0.06] bg-transparent"
                }`}
              >
                {featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                    {t.pricing.popular}
                  </span>
                )}
                <h3 className="text-base font-medium text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-zinc-500">{tier.desc}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  {tier.price !== "Custom" && (
                    <span className="text-sm text-zinc-600">€</span>
                  )}
                  <span className="text-3xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-xs text-zinc-600">{t.pricing.from}</span>
                  )}
                </p>
                <ul className="mt-8 flex flex-1 list-none flex-col gap-2.5 p-0 text-sm text-zinc-400">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-zinc-600" aria-hidden>
                        —
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-8 inline-flex h-10 min-h-[40px] items-center justify-center rounded-full text-sm font-medium ${
                    featured
                      ? "bg-white text-zinc-950"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </SectionReveal>
  );
}
