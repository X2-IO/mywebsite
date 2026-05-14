import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Image
            src="/pohjola-logo.png"
            alt="PohjolaWeb"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          PohjolaWeb
        </div>
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {new Date().getFullYear()} PohjolaWeb. Kaikki oikeudet pidätetään.
        </p>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="#pricing" className="hover:text-white">
            Hinnoittelu
          </Link>
          <Link href="#contact" className="hover:text-white">
            Yhteys
          </Link>
        </div>
      </div>
    </footer>
  );
}
