import { ContactForm } from "@/components/agency/contact-form";
import { FAQ } from "@/components/agency/faq";
import { Hero } from "@/components/agency/hero";
import { Pricing } from "@/components/agency/pricing";
import { Services } from "@/components/agency/services";
import { SiteFooter } from "@/components/agency/site-footer";
import { SiteHeader } from "@/components/agency/site-header";
import { Testimonials } from "@/components/agency/testimonials";
import { defaultDescription, siteName, siteUrl } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/pohjola-logo.png`,
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressCountry: "FI",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  publisher: { "@type": "Organization", name: siteName },
  inLanguage: "fi-FI",
  potentialAction: {
    "@type": "ContactAction",
    target: `${siteUrl}/#contact`,
    name: "Contact",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/pohjola-logo.png`,
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "Finland",
  },
  serviceType: ["Web design", "Web development", "UI/UX design"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationJsonLd,
            websiteJsonLd,
            professionalServiceJsonLd,
          ]),
        }}
      />
      <div className="flex min-h-full flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 pt-14 sm:pt-16" tabIndex={-1}>
          <Hero />
          <Services />
          <Pricing />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
