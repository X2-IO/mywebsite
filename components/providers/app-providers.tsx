"use client";

import { LocaleProvider } from "@/components/providers/locale-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
