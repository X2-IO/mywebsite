"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#work", label: "Työt" },
  { href: "#pricing", label: "Hinnoittelu" },
  { href: "#faq", label: "UKK" },
  { href: "#contact", label: "Yhteys" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030306]/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <Image
            src="/pohjola-logo.png"
            alt="PohjolaWeb"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="hidden sm:inline">PohjolaWeb</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
          >
            Varaa keskustelu
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-zinc-200 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-zinc-200 transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-zinc-200 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`border-t border-white/[0.06] bg-[#030306]/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 overflow-hidden border-t-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-white py-2.5 text-center text-sm font-medium text-zinc-950"
          >
            Varaa keskustelu
          </Link>
        </nav>
      </div>
    </header>
  );
}
