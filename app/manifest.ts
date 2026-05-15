import type { MetadataRoute } from "next";
import { siteName, siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description:
      "Web design & development — premium-sivustot ja digitaaliset kokemukset Suomesta.",
    start_url: "/",
    display: "standalone",
    background_color: "#030306",
    theme_color: "#030306",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "fi",
  };
}
