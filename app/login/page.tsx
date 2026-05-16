import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { AuthChrome } from "@/components/auth/auth-chrome";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <AuthChrome>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#030306] px-4">
        <Link href="/" className="mb-10 flex items-center gap-2">
          <Image
            src="/pohjola-logo.png"
            alt="PohjolaWeb"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm font-semibold text-white">PohjolaWeb</span>
        </Link>
        <Suspense
          fallback={
            <div className="h-64 w-full max-w-sm animate-pulse rounded-2xl bg-white/5" />
          }
        >
          <AuthForm mode="login" />
        </Suspense>
      </div>
    </AuthChrome>
  );
}
