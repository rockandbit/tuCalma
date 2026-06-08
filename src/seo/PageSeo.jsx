import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, canonicalUrl } from "./site";

export default function PageSeo({ seo, type = "website", image = DEFAULT_OG_IMAGE }) {
  const url = canonicalUrl(seo.path);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
