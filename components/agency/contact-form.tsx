"use client";

import { SectionReveal } from "@/components/motion/section-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import type { Dictionary } from "@/lib/i18n/translations";
import { useCallback, useState } from "react";

type Status = "idle" | "sending" | "success";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "company" | "_form", string>
>;

function validateClient(
  fd: FormData,
  e: Dictionary["contact"]["errors"],
): { ok: true; payload: object } | { ok: false; errors: FieldErrors } {
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  const company = String(fd.get("company") ?? "").trim();
  const errors: FieldErrors = {};

  if (name.length < 2) errors.name = e.nameMin;
  if (name.length > 120) errors.name = e.nameMax;
  if (!email) errors.email = e.emailRequired;
  else if (!EMAIL_RE.test(email)) errors.email = e.emailInvalid;
  if (message.length < 10) errors.message = e.messageMin;
  if (message.length > 8000) errors.message = e.messageMax;
  if (company.length > 200) errors.company = e.companyMax;

  if (Object.keys(errors).length > 0) return { ok: false, errors };

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
    "w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1",
    hasError
      ? "border-red-500/40 focus:border-red-500/50 focus:ring-red-500/20"
      : "border-white/[0.08] focus:border-white/20 focus:ring-white/10",
  ].join(" ");
}

export function ContactForm() {
  const { t } = useLocale();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const resetForNewMessage = useCallback(() => {
    setStatus("idle");
    setFieldErrors({});
    setServerMessage(null);
  }, []);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fd = new FormData(form);
      setServerMessage(null);
      setFieldErrors({});

      const local = validateClient(fd, c.errors);
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
        let data: { error?: string; errors?: FieldErrors } = {};
        try {
          data = (await res.json()) as typeof data;
        } catch {
          /* empty */
        }
        if (!res.ok) {
          setStatus("idle");
          if (data.errors) setFieldErrors(data.errors);
          setServerMessage(data.error ?? c.errors.submit);
          return;
        }
        setStatus("success");
        form.reset();
        setFieldErrors({});
      } catch {
        setStatus("idle");
        setServerMessage(c.errors.network);
      }
    },
    [c.errors],
  );

  return (
    <SectionReveal
      id="contact"
      className="py-24 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {c.title}
            </h2>
            <p className="mt-3 text-zinc-500">{c.subtitle}</p>
            <ul className="mt-8 space-y-2 text-sm text-zinc-500">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/[0.06] p-6 sm:p-8"
            noValidate
            aria-busy={status === "sending"}
          >
            {serverMessage && status !== "success" && (
              <p className="mb-4 text-sm text-red-400" role="alert">
                {serverMessage}
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1" htmlFor="contact-name">
                <span className="mb-1 block text-xs text-zinc-600">{c.name}</span>
                <input
                  id="contact-name"
                  name="name"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.name))}
                  placeholder={c.placeholders.name}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-required
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>
                )}
              </label>
              <label className="sm:col-span-1" htmlFor="contact-email">
                <span className="mb-1 block text-xs text-zinc-600">{c.email}</span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.email))}
                  placeholder={c.placeholders.email}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-required
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>
                )}
              </label>
              <label className="sm:col-span-2" htmlFor="contact-company">
                <span className="mb-1 block text-xs text-zinc-600">{c.company}</span>
                <input
                  id="contact-company"
                  name="company"
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.company))}
                  placeholder={c.placeholders.company}
                />
              </label>
              <label className="sm:col-span-2" htmlFor="contact-message">
                <span className="mb-1 block text-xs text-zinc-600">{c.message}</span>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  disabled={status === "sending"}
                  className={inputClass(Boolean(fieldErrors.message))}
                  placeholder={c.placeholders.message}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-required
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.message}</p>
                )}
              </label>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {status === "success" ? (
                <>
                  <p className="text-sm text-zinc-300" role="status">
                    {c.success}
                  </p>
                  <button
                    type="button"
                    onClick={resetForNewMessage}
                    className="rounded-full border border-white/10 px-5 py-2 text-sm text-white hover:bg-white/5"
                  >
                    {c.newMessage}
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex h-10 min-h-[40px] items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 disabled:opacity-50"
                >
                  {status === "sending" ? c.sending : c.submit}
                </button>
              )}
            </div>
            <p className="mt-4 text-xs text-zinc-600">{c.privacy}</p>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
