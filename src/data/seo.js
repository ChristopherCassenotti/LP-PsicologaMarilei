export const SITE_URL = "https://.com.br";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const professionalId = `${SITE_URL}/#marilei-krauss`;
const serviceId = `${SITE_URL}/#atendimento-psicologico`;
const websiteId = `${SITE_URL}/#website`;

const baseKeywords = [
  "Marilei Krauss",
  "psicóloga clínica",
  "psicoterapia",
  "terapia EMDR",
  "atendimento psicológico",
  "psicologia baseada em evidências",
  "CRP 08/13115",
];

function absoluteUrl(path) {
  return `${SITE_URL}${path}`;
}

function buildBreadcrumb(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const professionalSchema = {
  "@type": "Person",
  "@id": professionalId,
  name: "Marilei Krauss",
  jobTitle: "Psicóloga clínica",
  identifier: "CRP 08/13115",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  knowsAbout: [
    "Psicoterapia clínica",
    "Avaliação clínica",
    "EMDR",
    "Trauma psicológico",
    "Ansiedade",
    "Depressão",
    "Psicologia infantil",
  ],
};

const serviceSchema = {
  "@type": "ProfessionalService",
  "@id": serviceId,
  name: "Marilei Krauss Psicóloga",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  availableLanguage: "pt-BR",
  founder: {
    "@id": professionalId,
  },
  serviceType: [
    "Psicoterapia clínica",
    "Atendimento psicológico para adultos",
    "Atendimento psicológico infantil",
    "Terapia EMDR",
  ],
};

function buildPageSchema({ title, description, canonical, path, breadcrumb }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      professionalSchema,
      serviceSchema,
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Marilei Krauss Psicóloga",
        url: SITE_URL,
        inLanguage: "pt-BR",
        publisher: {
          "@id": professionalId,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": serviceId,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: DEFAULT_OG_IMAGE,
        },
        inLanguage: "pt-BR",
        breadcrumb,
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name: title,
        description,
        provider: {
          "@id": professionalId,
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
      },
    ],
  };
}

const homeCanonical = absoluteUrl("/");
const emdrCanonical = absoluteUrl("/emdr-infantil");

export const seoPages = {
  home: {
    title: "Marilei Krauss | Psicóloga Clínica e Terapeuta EMDR",
    description:
      "Psicoterapia clínica para adultos e crianças com avaliação cuidadosa, tratamento individualizado, EMDR e atendimento presencial ou on-line.",
    canonical: homeCanonical,
    keywords: [
      ...baseKeywords,
      "psicóloga para adultos",
      "atendimento presencial e online",
      "tratamento de trauma",
      "transtornos de ansiedade",
      "transtornos depressivos",
    ],
    image: DEFAULT_OG_IMAGE,
    imageAlt: "Marilei Krauss, psicóloga clínica e terapeuta EMDR",
    schema: buildPageSchema({
      title: "Marilei Krauss | Psicóloga Clínica e Terapeuta EMDR",
      description:
        "Psicoterapia clínica para adultos e crianças com avaliação cuidadosa, tratamento individualizado, EMDR e atendimento presencial ou on-line.",
      canonical: homeCanonical,
      path: "/",
      breadcrumb: buildBreadcrumb([
        { name: "Início", url: homeCanonical },
      ]),
    }),
  },
  emdrInfantil: {
    title: "EMDR Infantil | Atendimento Psicológico Infantil",
    description:
      "Atendimento psicológico infantil com EMDR para ajudar crianças a processar experiências difíceis com cuidado especializado e participação dos responsáveis.",
    canonical: emdrCanonical,
    keywords: [
      ...baseKeywords,
      "EMDR infantil",
      "psicóloga infantil",
      "terapia infantil",
      "trauma infantil",
      "atendimento psicológico infantil",
    ],
    image: DEFAULT_OG_IMAGE,
    imageAlt: "Atendimento psicológico infantil com EMDR",
    schema: buildPageSchema({
      title: "EMDR Infantil | Atendimento Psicológico Infantil",
      description:
        "Atendimento psicológico infantil com EMDR para ajudar crianças a processar experiências difíceis com cuidado especializado e participação dos responsáveis.",
      canonical: emdrCanonical,
      path: "/emdr-infantil",
      breadcrumb: buildBreadcrumb([
        { name: "Início", url: homeCanonical },
        { name: "EMDR Infantil", url: emdrCanonical },
      ]),
    }),
  },
};
