const items = [
  {
    title: "Tuotemuotoilu",
    body: "Informaatioarkkitehtuuri, wireframet ja hiottu UI — ennen kuin koodi alkaa puhua.",
  },
  {
    title: "Toteutus",
    body: "Next.js, suorituskyky ja saavutettavuus. Sivut, jotka kestävät kasvun ja hakukoneet.",
  },
  {
    title: "Jatkuva kehitys",
    body: "Mittarit, A/B ja iterointi. Olemme kumppani julkaisun jälkeen, kun haluatte skaalata.",
  },
];

export function Services() {
  return (
    <section id="work" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Kokonaisuus, ei palasia
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Autamme brändejä ja kasvuyrityksiä viestimään selkeämmin verkossa.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_60px_-30px_rgba(0,0,0,0.5)]"
              style={{
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${0.1 * i}s`,
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative text-xs font-medium uppercase tracking-wider text-sky-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
