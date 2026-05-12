import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): {
  ok: true;
  data: { name: string; email: string; message: string; company: string | null };
} | { ok: false; errors: Record<string, string> } {
  if (body === null || typeof body !== "object") {
    return { ok: false, errors: { _form: "Virheellinen pyyntö." } };
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";
  const companyRaw = typeof o.company === "string" ? o.company.trim() : "";
  const company = companyRaw.length > 0 ? companyRaw : null;

  const errors: Record<string, string> = {};

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
  if (company !== null && company.length > 200) {
    errors.company = "Yrityksen nimi on liian pitkä.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, message, company },
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Virheellinen JSON.", errors: { _form: "Pyyntöä ei voitu lukea." } },
      { status: 400 },
    );
  }

  const parsed = validatePayload(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { error: "Validointi epäonnistui.", errors: parsed.errors },
      { status: 400 },
    );
  }

  const { name, email, message, company } = parsed.data;

  const messageToStore =
    company !== null ? `Yritys: ${company}\n\n${message}` : message;

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message: messageToStore }]);

    if (error) {
      return NextResponse.json(
        {
          error:
            "Tallennus epäonnistui. Yritä myöhemmin uudelleen tai ota yhteyttä sähköpostitse.",
          details: process.env.NODE_ENV === "development" ? error.message : undefined,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Palvelinvirhe. Yritä myöhemmin uudelleen." },
      { status: 500 },
    );
  }
}
