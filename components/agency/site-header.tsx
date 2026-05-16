"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { LocaleToggle } from "@/components/locale-toggle";
import { useLocale } from "@/components/providers/locale-provider";

export function SiteHeader() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const mobileNavId = useId();
  const reduce = useReducedMotion();

  const nav = [
    { href: "#work", label: t.nav.work },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={reduce ? false : { y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030306]/80 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:h-[68px] sm:px-6">
        <Link
          href="/"
          className="flex min-h-[48px] items-center gap-3 text-sm font-medium tracking-tight text-white"
          aria-label={t.nav.home}
        >
          <Image
            src="/pohjola-logo.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="hidden sm:inline">{t.brand}</span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label={t.nav.main}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-zinc-500 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleToggle />
          <Link
            href="#contact"
            className="hidden min-h-[36px] items-center rounded-full bg-white px-4 text-[13px] font-medium text-zinc-950 sm:inline-flex"
          >
            {t.nav.cta}
          </Link>
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] md:hidden"
            aria-expanded={open}
            aria-controls={mobileNavId}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-4 bg-zinc-300 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              aria-hidden
            />
            <span
              className={`h-px w-4 bg-zinc-300 ${open ? "opacity-0" : ""}`}
              aria-hidden
            />
            <span
              className={`h-px w-4 bg-zinc-300 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              aria-hidden
            />
          </button>
        </div>
      </div>

      <div
        id={mobileNavId}
        className={`border-t border-white/[0.06] md:hidden ${open ? "block" : "hidden"}`}
        inert={!open}
      >
        <nav className="flex flex-col px-4 py-3" aria-label={t.nav.mobile}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="min-h-[44px] py-3 text-sm text-zinc-400 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mb-2 mt-1 min-h-[44px] rounded-full bg-white py-2.5 text-center text-sm font-medium text-zinc-950"
          >
            {t.nav.cta}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
