import { Helmet } from "react-helmet-async";
import React from "react";

const SITE_URL = "https://tucalmapsicologia.com";
const NAME = "tuCalma Psicología";
const TELEPHONE = "+34689187970";
const EMAIL = "mailto:tucalma.psicologia@gmail.com";

export default function LocalBusinessLD() {
    const ld = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: NAME,
        url: SITE_URL,
        telephone: TELEPHONE,
        email: EMAIL,
        image: `${SITE_URL}/assets/img/og/og-default.jpg`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Plaza Biteri 1, Entresuelo D",
            addressLocality: "Donostia",
            postalCode: "20001",
            addressCountry: "ES",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 43.3232901,
            longitude: -1.9769564,
        },
        areaServed: [
            {
                "@type": "Place",
                name: "Donostia",
            },
            {
                "@type": "Place",
                name: "Online",
            },
        ],
        sameAs: [
            "https://instagram.com/tucalma.psicologia",
            "https://www.google.com/maps/search/Plaza+Biteri+1,+Entresuelo+D,+20001,+Donostia",
        ],
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(ld)}
            </script>
        </Helmet>
    );
}
