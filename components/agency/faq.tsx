"use client";

import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function FAQ() {
  const { t } = useLocale();

  return (
    <SectionReveal
      id="faq"
      className="border-b border-white/[0.06] py-24 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2
          id="faq-heading"
          className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          {t.faq.title}
        </h2>
        <p className="mt-3 text-center text-zinc-500">{t.faq.subtitle}</p>
        <ul className="mt-12 list-none space-y-2 p-0">
          {t.faq.items.map((item, index) => (
            <li key={item.q}>
              <details className="group rounded-xl border border-white/[0.06] open:bg-white/[0.02]">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4"
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    id={`faq-q-${index}`}
                    className="text-left text-sm font-medium text-zinc-200"
                  >
                    {item.q}
                  </h3>
                  <span
                    className="text-lg text-zinc-600 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-white/[0.06] px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-500"
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                >
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
