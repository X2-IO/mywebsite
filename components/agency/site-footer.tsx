"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5 text-sm font-medium text-white">
          <Image
            src="/pohjola-logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            loading="lazy"
            sizes="28px"
          />
          {t.brand}
        </div>
        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
        </p>
        <nav aria-label={t.footer.navLabel}>
          <ul className="flex list-none gap-6 p-0 text-xs text-zinc-500">
            <li>
              <Link href="#pricing" className="hover:text-white">
                {t.nav.pricing}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
