import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const ogImage = "/pohjola-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Web design & development, Finland`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "design",
  keywords: [
    "web design",
    "web-toimisto",
    "Suomi",
    "Finland",
    "Next.js",
    "UI design",
    "verkkosivut",
    "digitaalinen design",
    siteName,
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      fi: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName,
    title: `${siteName} — Web design & development`,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        alt: `${siteName} — logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Web design & development`,
    description: defaultDescription,
    images: [ogImage],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030306" },
    { media: "(prefers-color-scheme: light)", color: "#030306" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <body className="min-h-full bg-[#030306] text-zinc-100">
        <a
          href="#main-content"
          className="skip-link focus:bg-white focus:text-zinc-950"
        >
          Siirry sisältöön
        </a>
        {children}
      </body>
    </html>
  );
}
