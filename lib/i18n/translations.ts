export type Locale = "fi" | "en";

export const locales: Locale[] = ["fi", "en"];
export const defaultLocale: Locale = "fi";

const shared = {
  brand: "PohjolaWeb",
  stats: [
    { k: "delivery", v: "4–8 wk" },
    { k: "tech", v: "Next.js" },
    { k: "location", v: "Finland" },
    { k: "satisfaction", v: "100%" },
  ] as const,
};

export const translations = {
  fi: {
    ...shared,
    stats: [
      { k: "Toimitusaika", v: "4–8 vk" },
      { k: "Teknologia", v: "Next.js" },
      { k: "Sijainti", v: "Suomi" },
      { k: "Tyytyväisyys", v: "100 %" },
    ],
    nav: {
      work: "Työt",
      pricing: "Hinnoittelu",
      faq: "UKK",
      contact: "Yhteys",
      cta: "Varaa keskustelu",
      home: "PohjolaWeb — etusivu",
      main: "Päävalikko",
      mobile: "Mobiilivalikko",
      openMenu: "Avaa valikko",
      closeMenu: "Sulje valikko",
    },
    hero: {
      eyebrow: "Suomalainen web-toimisto",
      title: "Verkkosivut, jotka",
      titleHighlight: "tuntuvat oikeilta",
      subtitle:
        "PohjolaWeb suunnittelee ja toteuttaa nopeita, selkeitä kokemuksia — samalla tarkkuudella kuin maailman parhaat tuotetiimit.",
      ctaPrimary: "Aloita projekti",
      ctaSecondary: "Katso paketit",
      statsLabel: "Keskeiset tiedot",
    },
    services: {
      title: "Kokonaisuus, ei palasia",
      subtitle: "Autamme brändejä viestimään selkeämmin verkossa.",
      items: [
        {
          title: "Tuotemuotoilu",
          body: "Informaatioarkkitehtuuri, wireframet ja hiottu UI ennen toteutusta.",
        },
        {
          title: "Toteutus",
          body: "Next.js, suorituskyky ja saavutettavuus — kasvuun ja hakukoneisiin.",
        },
        {
          title: "Jatkuva kehitys",
          body: "Mittarit ja iterointi julkaisun jälkeen, kun haluatte skaalata.",
        },
      ],
    },
    pricing: {
      title: "Hinnoittelu, joka skaalautuu",
      subtitle:
        "Läpinäkyvät paketit. Lopullinen hinta vahvistetaan kartoituksen jälkeen.",
      vat: "Hinnat sis. alv.",
      popular: "Suosituin",
      from: "alkaen",
      tiers: [
        {
          name: "Käynnistys",
          price: "2 490",
          desc: "Yksi selkeä laskeutumissivu tai kevyt sivusto.",
          features: [
            "Responsiivinen toteutus",
            "Perus SEO",
            "Yksi kierros muutoksia",
            "Julkaisu + opastus",
          ],
          cta: "Kysy tarjous",
        },
        {
          name: "Kasvu",
          price: "5 900",
          desc: "Monisivuinen sivusto, CMS ja analytiikka.",
          features: [
            "Suunnittelu + toteutus",
            "Sisältömoduulit",
            "Laajennettu SEO",
            "Kaksi kierrosta muutoksia",
            "30 pv tuki",
          ],
          cta: "Varaa kartoitus",
          featured: true,
        },
        {
          name: "Tuote",
          price: "Custom",
          desc: "Sovellusmaiset kokonaisuudet ja integraatiot.",
          features: [
            "Design system",
            "Auth / maksut",
            "Suorituskyvyn budjetointi",
            "Dedikoitu tiimi",
          ],
          cta: "Jutellaan",
        },
      ],
    },
    testimonials: {
      title: "Asiakkaiden ääni",
      subtitle: "Pitkäjänteistä työtä — näin se näkyy käytännössä.",
      quoteLabel: "Asiakaslausunto: ",
      items: [
        {
          quote:
            "Tiimi teki verkkoversion, jota sijoittajatkin kehuvat. Nopeus ja huolenpito näkyvät.",
          name: "Ella Virtanen",
          role: "CMO, Nordic SaaS",
        },
        {
          quote:
            "Core Web Vitals paranivat heti julkaisun jälkeen. Tekninen laatu oli kriittinen.",
          name: "Mikael Lindström",
          role: "CTO, Logistiikkayhtiö",
        },
        {
          quote:
            "Yhteistyö tuntui tuotetiimiltä — ei perinteiseltä toimistolta.",
          name: "Sofia Nieminen",
          role: "Perustaja, D2C-brändi",
        },
      ],
    },
    faq: {
      title: "Usein kysyttyä",
      subtitle: "Lyhyet vastaukset — laajemmin kartoituksessa.",
      items: [
        {
          q: "Kuinka nopeasti projekti käynnistyy?",
          a: "Tyypillisesti 1–2 viikon sisällä sopimuksesta. Kiireellisissä tapauksissa nopeammin.",
        },
        {
          q: "Teettekö sisällön ja kuvituksen?",
          a: "Kyllä — omalla verkostolla tai yhdessä kumppaneidenne kanssa.",
        },
        {
          q: "Mikä teknologiapino teillä on?",
          a: "Next.js, TypeScript ja Tailwind CSS — nopeat sivut ja pitkä elinkaari.",
        },
        {
          q: "Toimitteko vain Suomessa?",
          a: "Pääkonttori Suomessa, työskentely myös Pohjoismaissa ja EU:ssa.",
        },
        {
          q: "Miten tuki toimii julkaisun jälkeen?",
          a: "Ylläpitopaketit ja kehityssprintit tavoitteidenne mukaan.",
        },
      ],
    },
    contact: {
      title: "Kerro lyhyesti tavoitteistanne",
      subtitle:
        "Vastaamme arkipäivisin 24 tunnin sisällä. Kiireellisestä projektista mainitkaa viestissä.",
      bullets: [
        "Kartoitus 30 min — veloitukseton aloituskeskustelu",
        "Helsinki & etä — sama laatu",
      ],
      name: "Nimi",
      email: "Sähköposti",
      company: "Yritys (valinnainen)",
      message: "Viesti",
      submit: "Lähetä viesti",
      sending: "Lähetetään…",
      sent: "Lähetetty",
      success: "Kiitos — viesti vastaanotettu. Otamme yhteyttä pian.",
      newMessage: "Lähetä uusi viesti",
      privacy: "Tiedot käsitellään vain yhteydenottoa varten.",
      placeholders: {
        name: "Matti Meikäläinen",
        email: "matti@yritys.fi",
        company: "Yritys Oy",
        message: "Tavoite, aikataulu, budjetti…",
      },
      errors: {
        nameMin: "Nimen tulee olla vähintään 2 merkkiä.",
        nameMax: "Nimi on liian pitkä.",
        emailRequired: "Sähköposti on pakollinen.",
        emailInvalid: "Anna kelvollinen sähköpostiosoite.",
        messageMin: "Viestin tulee olla vähintään 10 merkkiä.",
        messageMax: "Viesti on liian pitkä.",
        companyMax: "Yrityksen nimi on liian pitkä.",
        network: "Yhteyttä ei saatu. Tarkista verkko ja yritä uudelleen.",
        submit: "Lähetys epäonnistui. Yritä uudelleen.",
      },
    },
    footer: {
      rights: "Kaikki oikeudet pidätetään.",
      navLabel: "Alatunnisteen linkit",
    },
    auth: {
      loginTitle: "Kirjaudu",
      signupTitle: "Luo tili",
      email: "Sähköposti",
      password: "Salasana",
      login: "Kirjaudu sisään",
      signup: "Rekisteröidy",
      noAccount: "Ei tiliä?",
      hasAccount: "Onko sinulla jo tili?",
      goSignup: "Rekisteröidy",
      goLogin: "Kirjaudu",
      logout: "Kirjaudu ulos",
      loading: "Odota…",
      signupSuccess:
        "Tili luotu. Jos sähköpostivahvistus on käytössä, tarkista postilaatikkosi — muuten voit kirjautua sisään.",
      authFailed: "Kirjautuminen epäonnistui. Yritä uudelleen.",
      adminOnly:
        "Vain valtuutetut ylläpitäjät voivat kirjautua. Ota yhteyttä, jos tarvitset pääsyn.",
    },
    admin: {
      title: "Yhteydenotot",
      subtitle: "Hallitse lomakkeella tulleita viestejä.",
      empty: "Ei viestejä vielä.",
      name: "Nimi",
      email: "Sähköposti",
      message: "Viesti",
      date: "Päivämäärä",
      actions: "Toiminnot",
      delete: "Poista",
      refresh: "Päivitä",
      unread: "Uusi",
      read: "Luettu",
      markRead: "Merkitse luetuksi",
      forbidden: "Ei oikeuksia tähän näkymään.",
      loading: "Ladataan…",
      deleteConfirm: "Poistetaanko tämä viesti pysyvästi?",
    },
    skip: "Siirry sisältöön",
    lang: { fi: "FIN", en: "ENG" },
  },
  en: {
    ...shared,
    stats: [
      { k: "Delivery", v: "4–8 wk" },
      { k: "Technology", v: "Next.js" },
      { k: "Location", v: "Finland" },
      { k: "Satisfaction", v: "100%" },
    ],
    nav: {
      work: "Work",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a call",
      home: "PohjolaWeb — home",
      main: "Main navigation",
      mobile: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Finnish web studio",
      title: "Websites that",
      titleHighlight: "feel right",
      subtitle:
        "PohjolaWeb designs and builds fast, clear digital experiences — with the precision of world-class product teams.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View packages",
      statsLabel: "Key facts",
    },
    services: {
      title: "One cohesive whole",
      subtitle: "We help brands communicate more clearly online.",
      items: [
        {
          title: "Product design",
          body: "Information architecture, wireframes, and refined UI before build.",
        },
        {
          title: "Engineering",
          body: "Next.js, performance, and accessibility built for growth and SEO.",
        },
        {
          title: "Ongoing growth",
          body: "Metrics and iteration after launch when you're ready to scale.",
        },
      ],
    },
    pricing: {
      title: "Pricing that scales",
      subtitle: "Transparent packages. Final price confirmed after discovery.",
      vat: "Prices excl. VAT where applicable.",
      popular: "Most popular",
      from: "from",
      tiers: [
        {
          name: "Launch",
          price: "2,490",
          desc: "A focused landing page or lightweight site.",
          features: [
            "Responsive build",
            "Basic SEO",
            "One revision round",
            "Launch + handover",
          ],
          cta: "Get a quote",
        },
        {
          name: "Growth",
          price: "5,900",
          desc: "Multi-page site, CMS, and analytics.",
          features: [
            "Design + development",
            "Content modules",
            "Extended SEO",
            "Two revision rounds",
            "30-day support",
          ],
          cta: "Book discovery",
          featured: true,
        },
        {
          name: "Product",
          price: "Custom",
          desc: "App-like experiences and integrations.",
          features: [
            "Design system",
            "Auth / payments",
            "Performance budget",
            "Dedicated team",
          ],
          cta: "Let's talk",
        },
      ],
    },
    testimonials: {
      title: "Client voices",
      subtitle: "Long-term partnerships — here's how it shows up.",
      quoteLabel: "Testimonial: ",
      items: [
        {
          quote:
            "They turned our brand into a site investors praise. Speed and care show.",
          name: "Ella Virtanen",
          role: "CMO, Nordic SaaS",
        },
        {
          quote:
            "Core Web Vitals improved right after launch. Technical quality was critical.",
          name: "Mikael Lindström",
          role: "CTO, Logistics company",
        },
        {
          quote:
            "Felt like a product team — not a traditional agency.",
          name: "Sofia Nieminen",
          role: "Founder, D2C brand",
        },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Short answers — we go deeper on a discovery call.",
      items: [
        {
          q: "How fast can a project start?",
          a: "Typically within 1–2 weeks of signing. Faster for urgent cases.",
        },
        {
          q: "Do you handle content and visuals?",
          a: "Yes — with our network or alongside your partners.",
        },
        {
          q: "What's your tech stack?",
          a: "Next.js, TypeScript, and Tailwind CSS for speed and longevity.",
        },
        {
          q: "Do you work only in Finland?",
          a: "Based in Finland; we also work across the Nordics and EU remotely.",
        },
        {
          q: "What about post-launch support?",
          a: "Maintenance packages and dev sprints aligned to your goals.",
        },
      ],
    },
    contact: {
      title: "Tell us about your goals",
      subtitle:
        "We reply on business days within 24 hours. Mention urgency if needed.",
      bullets: [
        "30-min discovery — free intro call",
        "Helsinki & remote — same quality",
      ],
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      sent: "Sent",
      success: "Thanks — message received. We'll be in touch soon.",
      newMessage: "Send another message",
      privacy: "Your data is used only to respond to this inquiry.",
      placeholders: {
        name: "Alex Example",
        email: "alex@company.com",
        company: "Company Ltd",
        message: "Goals, timeline, budget…",
      },
      errors: {
        nameMin: "Name must be at least 2 characters.",
        nameMax: "Name is too long.",
        emailRequired: "Email is required.",
        emailInvalid: "Enter a valid email address.",
        messageMin: "Message must be at least 10 characters.",
        messageMax: "Message is too long.",
        companyMax: "Company name is too long.",
        network: "Could not connect. Check your network and try again.",
        submit: "Submission failed. Please try again.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      navLabel: "Footer links",
    },
    auth: {
      loginTitle: "Sign in",
      signupTitle: "Create account",
      email: "Email",
      password: "Password",
      login: "Sign in",
      signup: "Sign up",
      noAccount: "No account?",
      hasAccount: "Already have an account?",
      goSignup: "Sign up",
      goLogin: "Sign in",
      logout: "Sign out",
      loading: "Please wait…",
      signupSuccess:
        "Account created. If email confirmation is enabled, check your inbox — otherwise you can sign in.",
      authFailed: "Sign-in failed. Please try again.",
      adminOnly:
        "Only authorized admins can sign in. Contact us if you need access.",
    },
    admin: {
      title: "Contact submissions",
      subtitle: "Manage messages from the contact form.",
      empty: "No messages yet.",
      name: "Name",
      email: "Email",
      message: "Message",
      date: "Date",
      actions: "Actions",
      delete: "Delete",
      refresh: "Refresh",
      unread: "New",
      read: "Read",
      markRead: "Mark read",
      forbidden: "You don't have access to this view.",
      loading: "Loading…",
      deleteConfirm: "Permanently delete this message?",
    },
    skip: "Skip to content",
    lang: { fi: "FIN", en: "ENG" },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
