"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/i18n/translations";

export function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <motion.div
      className="flex rounded-full border border-white/[0.08] bg-white/[0.03] p-0.5 text-[11px] font-medium tracking-wide"
      role="group"
      aria-label="Language"
    >
      {(["fi", "en"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`min-h-[32px] min-w-[40px] rounded-full px-2.5 transition-colors ${
            locale === code
              ? "bg-white text-zinc-950"
              : "text-zinc-500 hover:text-zinc-200"
          }`}
          aria-pressed={locale === code}
        >
          {t.lang[code]}
        </button>
      ))}
    </motion.div>
  );
}
