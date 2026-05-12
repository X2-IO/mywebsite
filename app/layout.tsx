import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PohjolaWeb — Web design & development, Finland",
    template: "%s | PohjolaWeb",
  },
  description:
    "Premium websites and digital products for ambitious teams. PohjolaWeb is a Finnish web design agency focused on clarity, performance, and craft.",
  keywords: [
    "web design",
    "Finland",
    "agency",
    "Next.js",
    "UI design",
    "PohjolaWeb",
  ],
  openGraph: {
    title: "PohjolaWeb — Web design & development",
    description:
      "Premium websites for ambitious teams. Based in Finland.",
    type: "website",
    locale: "fi_FI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#030306] text-zinc-100">{children}</body>
    </html>
  );
}
