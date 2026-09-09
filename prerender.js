/**
 * Renders the app to static HTML at build time and injects it into dist/index.html.
 *
 * The site is a client-rendered SPA, which means crawlers that don't execute
 * JavaScript (most social/link previewers and several search and AI crawlers)
 * would otherwise see an empty <div id="root">. React hydrates over this markup
 * on load, so behaviour is unchanged for visitors.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dist = resolve(root, "dist");

const { renderToString } = await import("react-dom/server");
const { createElement } = await import("react");
const { default: App, faqs } = await import("./dist-ssr/App.js");

const html = readFileSync(resolve(dist, "index.html"), "utf8");
const markup = renderToString(createElement(App));

/* Structured data is generated from the same source as the page, so the rich
   result can never describe something the page doesn't say. */
const SITE = "https://bsocial.ma";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BSocial",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Social Media Management Software",
    operatingSystem: "Web",
    url: SITE,
    description:
      "Logiciel de gestion pour agences social media : validation des publications par le client, calendrier éditorial et tournages, suivi des prestations et du chiffre d'affaires, statistiques Meta et rapports clients.",
    inLanguage: "fr",
    audience: {
      "@type": "BusinessAudience",
      name: "Agences de communication et social media",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "MAD",
      price: "0",
      description: "Tarification sur devis après démonstration.",
    },
    featureList: [
      "Validation des publications par le client",
      "Calendrier éditorial multi-clients",
      "Calendrier de tournage",
      "Suivi des prestations livrées",
      "Suivi du chiffre d'affaires par client",
      "Statistiques Instagram et Facebook via l'API Meta",
      "Rapports clients PDF",
      "Journal d'audit",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BSocial",
    url: SITE,
    logo: `${SITE}/logo.png`,
    description:
      "Éditeur de BSocial, logiciel de gestion pour agences social media.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@bsocial.ma",
        availableLanguage: ["fr"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: "contact@bsocial.ma",
        availableLanguage: ["fr"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BSocial",
    url: SITE,
    inLanguage: "fr",
  },
];

if (Array.isArray(faqs) && faqs.length) {
  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });
}

const ld = schemas
  .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
  .join("\n    ");

const out = html
  .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  .replace("</head>", `  ${ld}\n  </head>`);

writeFileSync(resolve(dist, "index.html"), out);

const kb = (Buffer.byteLength(markup) / 1024).toFixed(1);
console.log(`prerender: injected ${kb} kB of static markup into dist/index.html`);
