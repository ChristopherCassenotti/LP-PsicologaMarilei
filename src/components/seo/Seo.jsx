import { useEffect } from "react";

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href, extraAttributes = {}) {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);

  Object.entries(extraAttributes).forEach(([attribute, value]) => {
    element.setAttribute(attribute, value);
  });
}

function upsertJsonLd(id, schema) {
  if (!schema) return;

  let element = document.head.querySelector(`#${id}`);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
}

export function Seo({
  title,
  description,
  canonical,
  keywords = [],
  image,
  imageAlt,
  type = "website",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
}) {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("name", "keywords", keywords.join(", "));

    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Marilei Krauss Psicóloga");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    upsertLink("canonical", canonical);
    upsertLink("alternate", canonical, { hreflang: "pt-BR" });
    upsertJsonLd("structured-data", schema);
  }, [
    canonical,
    description,
    image,
    imageAlt,
    keywords,
    robots,
    schema,
    title,
    type,
  ]);

  return null;
}
