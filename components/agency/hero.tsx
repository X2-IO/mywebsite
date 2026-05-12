import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-36">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[100px] animate-float-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-[360px] w-[360px] animate-float-blob rounded-full bg-violet-600/15 blur-[90px]"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="animate-fade-up mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-sky-400/90 sm:text-left">
          Suomalainen web-toimisto
        </p>
        <h1 className="animate-fade-up animation-delay-100 mx-auto max-w-4xl text-center text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-left sm:text-5xl lg:text-6xl">
          Verkkosivut, jotka{" "}
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            tuntuvat oikeilta
          </span>
          .
        </h1>
        <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-zinc-400 sm:text-left sm:text-xl">
          PohjolaWeb suunnittelee ja toteuttaa nopeita, selkeitä ja
          brändiä kunnioittavia kokemuksia — samalla tavalla kuin maailman
          parhaat tuotetiimit.
        </p>
        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start">
          <Link
            href="#contact"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.35)] active:scale-[0.98]"
          >
            Aloita projekti
          </Link>
          <Link
            href="#pricing"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
          >
            Katso paketit
          </Link>
        </div>

        <dl className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-10 sm:grid-cols-4">
          {[
            { k: "Toimitusaika", v: "4–8 vk" },
            { k: "Teknologia", v: "Next.js" },
            { k: "Sijainti", v: "Suomi" },
            { k: "Tyytyväisyys", v: "100 %" },
          ].map((row) => (
            <div key={row.k}>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {row.k}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-zinc-100">
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
