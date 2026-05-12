const quotes = [
  {
    quote:
      "Tiimi otti sekavan brändin ja teki siitä verkkoversion, jota meidän sijoittajatkin kehuvat. Nopeus ja huolenpito näkyvät.",
    name: "Ella Virtanen",
    role: "CMO, Nordic SaaS",
  },
  {
    quote:
      "Tekninen laatu oli meille kriittinen. Lighthouse-pisteet ja Core Web Vitals paranivat heti julkaisun jälkeen.",
    name: "Mikael Lindström",
    role: "CTO, Logistiikkayhtiö",
  },
  {
    quote:
      "Yhteistyö tuntui yhdeltä tuotetiimiltä — ei perinteiseltä toimistolta. Suosittelen lämpimästi.",
    name: "Sofia Nieminen",
    role: "Perustaja, D2C-brändi",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Asiakkaiden ääni
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-lg text-zinc-400">
          Työskentelemme pitkäjänteisesti — näin kokemus näyttäytyy käytännössä.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02] hover:border-white/[0.12]"
              style={{
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${0.08 * i}s`,
                opacity: 0,
              }}
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold text-zinc-200"
                  aria-hidden
                >
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
