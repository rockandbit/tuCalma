import React from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site";

const TELEPHONE = "+34689187970";
const EMAIL = "mailto:tucalma.psicologia@gmail.com";

export default function LocalBusinessLD() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: TELEPHONE,
    email: EMAIL,
    image: DEFAULT_OG_IMAGE,
    areaServed: [
      {
        "@type": "Place",
        name: "Online",
      },
    ],
    sameAs: ["https://instagram.com/tucalma.psicologia"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
