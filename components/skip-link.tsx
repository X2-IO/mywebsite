"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { usePathname } from "next/navigation";

const hideSkipPaths = new Set(["/login", "/signup"]);

export function SkipLink() {
  const { t } = useLocale();
  const pathname = usePathname();

  if (pathname && hideSkipPaths.has(pathname)) {
    return null;
  }

  return (
    <a
      href="#main-content"
      className="skip-link focus:bg-white focus:text-zinc-950"
    >
      {t.skip}
    </a>
  );
}
