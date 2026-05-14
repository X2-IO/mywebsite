import Link from "next/link";

const tiers = [
  {
    name: "Käynnistys",
    price: "2 490",
    desc: "Yksi selkeä laskeutumissivu tai kevyt sivusto.",
    features: [
      "Responsiivinen toteutus",
      "Perus SEO",
      "Yksi kierros muutoksia",
      "Julkaisu + opastus",
    ],
    cta: "Kysy tarjous",
    featured: false,
  },
  {
    name: "Kasvu",
    price: "5 900",
    desc: "Monisivuinen sivusto, CMS ja analytiikka.",
    features: [
      "Suunnittelu + toteutus",
      "Sisältömoduulit",
      "Laajennettu SEO",
      "Kaksi kierrosta muutoksia",
      "30 pv tuki",
    ],
    cta: "Varaa kartoitus",
    featured: true,
  },
  {
    name: "Tuote",
    price: "Custom",
    desc: "Sovellusmaiset kokonaisuudet ja integraatiot.",
    features: [
      "Design system",
      "Auth / maksut (tarvittaessa)",
      "Suorituskyvyn budjetointi",
      "Dedikoitu tiimi",
    ],
    cta: "Jutellaan",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-white/[0.06] py-20 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Hinnoittelu, joka skaalautuu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Läpinäkyvät paketit. Lopullinen hinta vahvistetaan kartoituksen
            jälkeen — ei yllätyksiä.
          </p>
          <p className="mt-2 text-sm text-zinc-500">Hinnat sis. alv.</p>
        </div>

        <ul className="mt-14 grid list-none gap-6 p-0 lg:grid-cols-3">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-0.5 ${
                tier.featured
                  ? "border-sky-500/40 bg-gradient-to-b from-sky-500/10 to-zinc-950/80 shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_24px_80px_-24px_rgba(56,189,248,0.25)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14]"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-950">
                  Suosituin
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{tier.desc}</p>
              <p className="mt-6 flex items-baseline gap-1">
                {tier.price !== "Custom" && (
                  <span className="text-sm font-medium text-zinc-500">€</span>
                )}
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-sm text-zinc-500">alkaen</span>
                )}
              </p>
              <ul className="mt-8 flex flex-1 list-none flex-col gap-3 p-0 text-sm text-zinc-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[10px] text-sky-300"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`mt-8 inline-flex h-11 min-h-[44px] items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  tier.featured
                    ? "bg-white text-zinc-950 hover:scale-[1.02] active:scale-[0.98]"
                    : "border border-white/15 bg-transparent text-white hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
