const faqs = [
  {
    q: "Kuinka nopeasti projekti käynnistyy?",
    a: "Tyypillisesti 1–2 viikon sisällä sopimuksen allekirjoituksesta. Kiireellisissä tapauksissa voidaan sopia nopeammasta startista.",
  },
  {
    q: "Teettekö myös sisällön ja kuvituksen?",
    a: "Kyllä — joko omalla verkostollamme tai yhdessä teidän kumppaneidenne kanssa. Tekstisisältö voidaan myös iteroida yhdessä workshopsprinteissä.",
  },
  {
    q: "Mikä teknologiapino teillä on?",
    a: "Pääasiassa Next.js ja TypeScript, Tailwind CSS tyylittelyyn. Tämä takaa nopeat sivut, hyvän kehittäjäkokemuksen ja pitkän elinkaaren.",
  },
  {
    q: "Toimitteko vain Suomessa?",
    a: "Pääkonttori on Suomessa, mutta työskentelemme myös Pohjoismaissa ja englanniksi EU:n sisällä — aikavyöhykkeet ja prosessit on rakennettu etätyöhön.",
  },
  {
    q: "Miten tuki toimii julkaisun jälkeen?",
    a: "Tarjoamme ylläpitopaketteja (SLA-valinnainen) sekä kehityssprinttejä uusille ominaisuuksille. Hinnoittelu sidotaan tavoitteisiinne, ei tunteihin sokkona.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Usein kysyttyä
        </h2>
        <p className="mt-4 text-center text-lg text-zinc-400">
          Lyhyet vastaukset — laajemmin kartoituksessa.
        </p>
        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors open:border-white/[0.14] open:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white sm:text-base">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/[0.06] px-5 pb-4 pt-2 text-sm leading-relaxed text-zinc-400">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
