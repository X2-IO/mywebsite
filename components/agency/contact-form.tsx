"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "sending" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<"name" | "email" | "message" | "company" | "_form", string>>;

function validateClient(fd: FormData): { ok: true; payload: object } | { ok: false; errors: FieldErrors } {
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  const company = String(fd.get("company") ?? "").trim();

  const errors: FieldErrors = {};

  if (name.length < 2) {
    errors.name = "Nimen tulee olla vähintään 2 merkkiä.";
  }
  if (name.length > 120) {
    errors.name = "Nimi on liian pitkä.";
  }
  if (!email) {
    errors.email = "Sähköposti on pakollinen.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Anna kelvollinen sähköpostiosoite.";
  }
  if (message.length < 10) {
    errors.message = "Viestin tulee olla vähintään 10 merkkiä.";
  }
  if (message.length > 8000) {
    errors.message = "Viesti on liian pitkä.";
  }
  if (company.length > 200) {
    errors.company = "Yrityksen nimi on liian pitkä.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    payload: {
      name,
      email,
      message,
      ...(company ? { company } : {}),
    },
  };
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-sky-500/40 transition placeholder:text-zinc-600 focus:ring-2",
    hasError
      ? "border-red-500/50 focus:border-red-500/60"
      : "border-white/10 focus:border-sky-500/50",
  ].join(" ");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const resetForNewMessage = useCallback(() => {
    setStatus("idle");
    setFieldErrors({});
    setServerMessage(null);
  }, []);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setServerMessage(null);
    setFieldErrors({});

    const local = validateClient(fd);
    if (!local.ok) {
      setFieldErrors(local.errors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(local.payload),
      });

      let data: { error?: string; errors?: FieldErrors; details?: string } = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        /* empty */
      }

      if (!res.ok) {
        setStatus("idle");
        if (data.errors && typeof data.errors === "object") {
          setFieldErrors(data.errors);
        }
        setServerMessage(
          data.error ?? "Lähetys epäonnistui. Yritä uudelleen.",
        );
        return;
      }

      setStatus("success");
      form.reset();
      setFieldErrors({});
    } catch {
      setStatus("idle");
      setServerMessage(
        "Yhteyttä ei saatu. Tarkista verkko ja yritä uudelleen.",
      );
    }
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
            noValidate
          >
            {serverMessage && status !== "success" && (
              <div
                className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {serverMessage}
              </div>
            )}

            {fieldErrors._form && (
              <div
                className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {fieldErrors._form}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Nimi
                </span>
                <input
                  name="name"
                  autoComplete="name"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.name))}
                  placeholder="Matti Meikäläinen"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "err-name" : undefined}
                />
                {fieldErrors.name && (
                  <p id="err-name" className="mt-1.5 text-xs text-red-400">
                    {fieldErrors.name}
                  </p>
                )}
              </label>
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Sähköposti
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.email))}
                  placeholder="matti@yritys.fi"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "err-email" : undefined}
                />
                {fieldErrors.email && (
                  <p id="err-email" className="mt-1.5 text-xs text-red-400">
                    {fieldErrors.email}
                  </p>
                )}
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Yritys (valinnainen)
                </span>
                <input
                  name="company"
                  autoComplete="organization"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.company))}
                  placeholder="Yritys Oy"
                  aria-invalid={Boolean(fieldErrors.company)}
                  aria-describedby={
                    fieldErrors.company ? "err-company" : undefined
                  }
                />
                {fieldErrors.company && (
                  <p id="err-company" className="mt-1.5 text-xs text-red-400">
                    {fieldErrors.company}
                  </p>
                )}
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Viesti
                </span>
                <textarea
                  name="message"
                  rows={5}
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.message))}
                  placeholder="Kerro lyhyesti: tavoite, aikataulu, budjettikarkea."
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? "err-message" : undefined
                  }
                />
                {fieldErrors.message && (
                  <p id="err-message" className="mt-1.5 text-xs text-red-400">
                    {fieldErrors.message}
                  </p>
                )}
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {status === "success" ? (
                <>
                  <p
                    className="text-sm font-medium text-sky-400"
                    role="status"
                  >
                    Kiitos — viesti vastaanotettu. Otamme yhteyttä pian.
                  </p>
                  <button
                    type="button"
                    onClick={resetForNewMessage}
                    className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
                  >
                    Lähetä uusi viesti
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition-all enabled:hover:scale-[1.02] enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-950"
                          aria-hidden
                        />
                        Lähetetään…
                      </span>
                    ) : (
                      "Lähetä viesti"
                    )}
                  </button>
                </>
              )}
            </div>
            <p className="mt-4 text-xs text-zinc-600">
              Tiedot tallennetaan turvallisesti. Käsittelemme niitä vain
              yhteydenottoasi varten.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
