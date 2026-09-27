import { mkdir, readFile, writeFile } from "node:fs/promises";

const SITE_URL = "https://tucalmapsicologia.com";
const DEFAULT_IMAGE = "/og-tucalma.jpg";

const readJson = async (path) =>
  JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));

const [home, about, helpYou, howTo, aboutMe, services, homeCards, site] =
  await Promise.all([
    readJson("../src/data/content/home.json"),
    readJson("../src/data/content/about.json"),
    readJson("../src/data/content/help-you.json"),
    readJson("../src/data/content/how-to.json"),
    readJson("../src/data/aboutMe/aboutMe.json"),
    readJson("../src/data/helpYou/helpYou.json"),
    readJson("../src/data/services/services.json"),
    readJson("../src/data/content/site.json"),
  ]);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const absoluteUrl = (path = DEFAULT_IMAGE) =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

const itemMarkup = (items) =>
  items
    .map(
      (item) =>
        `<article><h2>${escapeHtml(item.title)}</h2><div>${item.description}</div></article>`
    )
    .join("\n");

const pages = [
  {
    path: "/",
    title: home.seoTitle,
    description: home.seoDescription,
    image: home.ogImage,
    imageAlt: home.ogImageAlt,
    markup: `<main id="main" class="site-main"><header><h1>${escapeHtml(home.pageTitle)}.</h1></header><section><div>${home.introHtml}</div></section><section><h2>${escapeHtml(home.servicesHeading)}</h2>${homeCards.items
      .map(
        (item) =>
          `<article><h3><a href="${escapeHtml(item.link)}">${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.categoryTitle)}</p></article>`
      )
      .join("")}</section></main>`,
  },
  {
    path: "/quien-soy",
    title: about.seoTitle,
    description: about.seoDescription,
    image: about.ogImage,
    imageAlt: about.ogImageAlt,
    markup: `<main id="main" class="site-main"><header><h1>${escapeHtml(about.pageTitle)}.</h1></header><section><h2>${about.headingHtml}</h2><h3>${escapeHtml(about.introTitle)}</h3><div>${about.introHtml}</div></section><section>${itemMarkup(aboutMe.items)}</section></main>`,
  },
  {
    path: "/puedo-ayudar",
    title: helpYou.seoTitle,
    description: helpYou.seoDescription,
    image: helpYou.ogImage,
    imageAlt: helpYou.ogImageAlt,
    markup: `<main id="main" class="site-main"><header><h1>${escapeHtml(helpYou.pageTitle)}.</h1></header><section><h2>${helpYou.headingHtml}</h2><div>${helpYou.introHtml}</div></section><section>${itemMarkup(services.items)}</section></main>`,
  },
  {
    path: "/como-lo-hacemos",
    title: howTo.seoTitle,
    description: howTo.seoDescription,
    image: howTo.ogImage,
    imageAlt: howTo.ogImageAlt,
    markup: `<main id="main" class="site-main"><header><h1>${escapeHtml(howTo.pageTitle)}.</h1></header><section><h2>${howTo.headingHtml}</h2><h3>${escapeHtml(howTo.introTitle)}</h3><div>${howTo.introHtml}</div></section></main>`,
  },
];

const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "tuCalma Psicología",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-tucalma.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  telephone: site.phoneHref,
  email: site.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneHref,
    contactType: "customer service",
    email: site.email,
    availableLanguage: "Spanish",
  },
  sameAs: [site.instagramUrl],
};

const websiteLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "tuCalma Psicología",
  inLanguage: "es-ES",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

function replaceMeta(html, attribute, name, value) {
  const expression = new RegExp(
    `(<meta\\s+${attribute}="${name}"\\s+content=")[^"]*("\\s*/?>)`,
    "i"
  );
  return html.replace(expression, `$1${escapeHtml(value)}$2`);
}

function renderPage(template, page) {
  const url = `${SITE_URL}${page.path}`;
  const image = absoluteUrl(page.image || DEFAULT_IMAGE);
  const pageLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "es-ES",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      ...(page.path === "/" ? [organizationLd, websiteLd] : []),
    ],
  };

  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "property", "og:title", page.title);
  html = replaceMeta(html, "property", "og:description", page.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:image", image);
  html = replaceMeta(html, "property", "og:image:alt", page.imageAlt || "tuCalma Psicología");
  html = replaceMeta(html, "name", "twitter:title", page.title);
  html = replaceMeta(html, "name", "twitter:description", page.description);
  html = replaceMeta(html, "name", "twitter:image", image);
  html = replaceMeta(html, "name", "twitter:image:alt", page.imageAlt || "tuCalma Psicología");
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/i,
    `<link rel="canonical" href="${url}" />`
  );
  html = html.replace(
    "<div id=\"root\"></div>",
    `<div id="root">${page.markup}</div>`
  );
  html = html.replace(
    "</head>",
    `<script type="application/ld+json">${JSON.stringify(pageLd).replaceAll("</", "<\\/")}</script></head>`
  );
  return html;
}

const template = await readFile("dist/index.html", "utf8");

for (const page of pages) {
  const target =
    page.path === "/"
      ? "dist/index.html"
      : `dist${page.path}/index.html`;
  await mkdir(new URL(`../${target.substring(0, target.lastIndexOf("/") + 1)}`, import.meta.url), {
    recursive: true,
  });
  await writeFile(target, renderPage(template, page));
}
