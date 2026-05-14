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
    <section
      id="faq"
      className="border-t border-white/[0.06] py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Usein kysyttyä
        </h2>
        <p className="mt-4 text-center text-lg text-zinc-400">
          Lyhyet vastaukset — laajemmin kartoituksessa.
        </p>
        <ul className="mt-12 list-none space-y-3 p-0">
          {faqs.map((item, index) => (
            <li key={item.q}>
              <details className="group rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors open:border-white/[0.14] open:bg-white/[0.04]">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-5"
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    id={`faq-q-${index}`}
                    className="flex-1 text-sm font-medium leading-snug text-white sm:text-base"
                  >
                    {item.q}
                  </h3>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-white/[0.06] px-5 pb-4 pt-2 text-sm leading-relaxed text-zinc-400 sm:px-5"
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                >
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
