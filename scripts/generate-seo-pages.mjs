import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { seoPages } from "../src/data/seo.js";

const distDir = path.resolve("dist");
const rootHtmlPath = path.join(distDir, "index.html");

const staticRoutes = [
  {
    page: seoPages.emdrInfantil,
    outputPath: path.join(distDir, "emdr-infantil", "index.html"),
  },
];

function escapeAttribute(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html, attribute, key, content) {
  const escapedContent = escapeAttribute(content);
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/?>`,
  );

  if (pattern.test(html)) {
    return html.replace(
      pattern,
      `<meta ${attribute}="${key}" content="${escapedContent}" />`,
    );
  }

  return html.replace(
    "</head>",
    `    <meta ${attribute}="${key}" content="${escapedContent}" />\n  </head>`,
  );
}

function replaceCanonical(html, canonical) {
  const escapedCanonical = escapeAttribute(canonical);

  return html
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapedCanonical}" />`,
    )
    .replace(
      /<link\s+rel="alternate"\s+hreflang="pt-BR"\s+href="[^"]*"\s*\/?>/,
      `<link rel="alternate" hreflang="pt-BR" href="${escapedCanonical}" />`,
    );
}

function replaceStructuredData(html, schema) {
  const json = JSON.stringify(schema, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");

  return html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="structured-data" type="application/ld+json">\n${json}\n    </script>`,
  );
}

function buildHtmlForPage(html, page) {
  let nextHtml = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);

  nextHtml = replaceCanonical(nextHtml, page.canonical);
  nextHtml = replaceMeta(nextHtml, "name", "description", page.description);
  nextHtml = replaceMeta(nextHtml, "name", "keywords", page.keywords.join(", "));
  nextHtml = replaceMeta(nextHtml, "property", "og:title", page.title);
  nextHtml = replaceMeta(nextHtml, "property", "og:description", page.description);
  nextHtml = replaceMeta(nextHtml, "property", "og:url", page.canonical);
  nextHtml = replaceMeta(nextHtml, "property", "og:image", page.image);
  nextHtml = replaceMeta(nextHtml, "property", "og:image:alt", page.imageAlt);
  nextHtml = replaceMeta(nextHtml, "name", "twitter:title", page.title);
  nextHtml = replaceMeta(nextHtml, "name", "twitter:description", page.description);
  nextHtml = replaceMeta(nextHtml, "name", "twitter:image", page.image);
  nextHtml = replaceMeta(nextHtml, "name", "twitter:image:alt", page.imageAlt);
  nextHtml = replaceStructuredData(nextHtml, page.schema);

  return nextHtml;
}

const rootHtml = await readFile(rootHtmlPath, "utf8");

await Promise.all(
  staticRoutes.map(async ({ page, outputPath }) => {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, buildHtmlForPage(rootHtml, page));
  }),
);
