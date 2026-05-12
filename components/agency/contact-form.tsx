"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 900);
  }, []);

  return (
    <section id="contact" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Kerro lyhyesti tavoitteistanne
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Vastaamme arkipäivisin 24 tunnin sisällä. Jos projekti on
              kiireellinen, mainitse se viestissä — sovitamme aikataulun.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-zinc-400">
              <li className="flex gap-2">
                <span className="text-sky-400">→</span>
                Kartoitus 30 min — veloitukseton aloituskeskustelu
              </li>
              <li className="flex gap-2">
                <span className="text-sky-400">→</span>
                Helsinki & etä — sama laatu, missä tahansa
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Nimi
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-sky-500/40 transition placeholder:text-zinc-600 focus:border-sky-500/50 focus:ring-2"
                  placeholder="Matti Meikäläinen"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Sähköposti
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-sky-500/40 transition placeholder:text-zinc-600 focus:border-sky-500/50 focus:ring-2"
                  placeholder="matti@yritys.fi"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Yritys (valinnainen)
                </span>
                <input
                  name="company"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-sky-500/40 transition placeholder:text-zinc-600 focus:border-sky-500/50 focus:ring-2"
                  placeholder="Yritys Oy"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Viesti
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-sky-500/40 transition placeholder:text-zinc-600 focus:border-sky-500/50 focus:ring-2"
                  placeholder="Kerro lyhyesti: tavoite, aikataulu, budjettikarkea."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition-all enabled:hover:scale-[1.02] enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Lähetetään…"
                  : status === "success"
                    ? "Lähetetty"
                    : "Lähetä viesti"}
              </button>
              {status === "success" && (
                <p className="text-sm text-sky-400 animate-fade-in">
                  Kiitos — otamme yhteyttä pian.
                </p>
              )}
            </div>
            <p className="mt-4 text-xs text-zinc-600">
              Lomake on demo: viestejä ei lähetetä palvelimelle. Liitä oma
              API-reitti tai palvelu tarvittaessa.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
