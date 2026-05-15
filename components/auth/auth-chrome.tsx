"use client";

import { LocaleToggle } from "@/components/locale-toggle";

export function AuthChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute right-4 top-4 z-10 md:right-8 md:top-6">
        <LocaleToggle />
      </div>
      {children}
    </div>
  );
}
