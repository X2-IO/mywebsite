import { ContactForm } from "@/components/agency/contact-form";
import { FAQ } from "@/components/agency/faq";
import { Hero } from "@/components/agency/hero";
import { Pricing } from "@/components/agency/pricing";
import { Services } from "@/components/agency/services";
import { SiteFooter } from "@/components/agency/site-footer";
import { SiteHeader } from "@/components/agency/site-header";
import { Testimonials } from "@/components/agency/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14 sm:pt-16">
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
