"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { createClient } from "@/lib/supabase/client";

export type ContactRow = {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean | null;
  created_at: string;
};

export function ContactsDashboard() {
  const { t } = useLocale();
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t.admin.forbidden);
        setContacts([]);
        return;
      }
      setContacts(data.contacts ?? []);
    } catch {
      setError(t.contact.errors.network);
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      void load();
    }, 0);

    return () => window.clearTimeout(id);
  }, [load]);

  async function markRead(id: string) {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: true }),
    });
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, read: true } : c)),
    );
  }

  async function remove(id: string) {
    if (!confirm(t.admin.deleteConfirm)) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {t.admin.title}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">{t.admin.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <LocaleToggle />
          <button
            type="button"
            onClick={load}
            className="min-h-[40px] rounded-full border border-white/10 px-4 text-sm text-zinc-300 hover:bg-white/5"
          >
            {t.admin.refresh}
          </button>
          <button
            type="button"
            onClick={signOut}
            className="min-h-[40px] rounded-full bg-white px-4 text-sm font-medium text-zinc-950"
          >
            {t.auth.logout}
          </button>
        </div>
      </motion.div>

      {loading && (
        <p className="mt-10 text-sm text-zinc-500">{t.admin.loading}</p>
      )}
      {error && (
        <p className="mt-10 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && contacts.length === 0 && (
        <p className="mt-10 text-sm text-zinc-500">{t.admin.empty}</p>
      )}

      {!loading && contacts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.06]"
        >
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-white/[0.06] text-xs uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">{t.admin.name}</th>
                <th className="px-4 py-3 font-medium">{t.admin.email}</th>
                <th className="px-4 py-3 font-medium">{t.admin.message}</th>
                <th className="px-4 py-3 font-medium">{t.admin.date}</th>
                <th className="px-4 py-3 font-medium">{t.admin.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {contacts.map((row) => (
                <tr
                  key={row.id}
                  className={row.read ? "text-zinc-500" : "text-zinc-200"}
                >
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${row.email}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {row.email}
                    </a>
                  </td>
                  <td className="max-w-xs truncate px-4 py-3" title={row.message}>
                    {row.message}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-zinc-500">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {!row.read && (
                        <button
                          type="button"
                          onClick={() => markRead(row.id)}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs hover:bg-white/5"
                        >
                          {t.admin.markRead}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => remove(row.id)}
                        className="rounded-full border border-red-500/30 px-3 py-1 text-xs text-red-300 hover:bg-red-500/10"
                      >
                        {t.admin.delete}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
}
