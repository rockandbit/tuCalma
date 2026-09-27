import React from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site";
import site from "../data/content/site.json";

export default function LocalBusinessLD() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon-tucalma.png`,
        image: DEFAULT_OG_IMAGE,
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
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "es-ES",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
