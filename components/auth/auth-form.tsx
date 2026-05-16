"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const { t } = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedNext = searchParams.get("next");
  const next =
    requestedNext &&
    (requestedNext === "/admin" || requestedNext.startsWith("/admin/"))
      ? requestedNext
      : "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();

    if (isLogin) {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (authError) {
        setError(authError.message);
        return;
      }
      router.replace(next);
      router.refresh();
      return;
    }

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    router.replace("/login?signup=success");
    router.refresh();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="w-full max-w-sm"
    >
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        {isLogin ? t.auth.loginTitle : t.auth.signupTitle}
      </h1>
      <p className="mt-2 text-sm text-zinc-500">{t.auth.adminOnly}</p>

      {searchParams.get("error") === "auth" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {t.auth.authFailed}
        </p>
      )}

      {searchParams.get("error") === "forbidden" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {t.admin.forbidden}
        </p>
      )}

      {searchParams.get("signup") === "success" && (
        <p className="mt-4 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
          {t.auth.signupSuccess}
        </p>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
            {t.auth.email}
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
            {t.auth.password}
          </span>
          <input
            type="password"
            required
            minLength={8}
            autoComplete={isLogin ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10"
          />
        </label>

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex h-11 w-full min-h-[44px] items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-950 disabled:opacity-60"
        >
          {loading ? t.auth.loading : isLogin ? t.auth.login : t.auth.signup}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        {isLogin ? t.auth.noAccount : t.auth.hasAccount}{" "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="text-white underline-offset-4 hover:underline"
        >
          {isLogin ? t.auth.goSignup : t.auth.goLogin}
        </Link>
      </p>
    </motion.div>
  );
}
