import React, { Fragment, useEffect } from "react";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import { Helmet } from "react-helmet-async";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import ContactForm from "../components/form/ContactForm";
import Location from "../blocks/location/location";

import Services from "../blocks/services/Services";
import Loading from "../blocks/loading/Loading";

import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";

const SITE_URL = "https://tucalmapsicologia.com";
const PAGE_URL = `${SITE_URL}/`;

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("home", "bg-fixed", "bg-line");
    };
  }, []);

  const seoTitle = "tuCalma Psicología | Psicoterapia y bienestar emocional";
  const seoDescription =
    "Psicoterapia para ansiedad, estrés y bienestar emocional. Acompañamiento cercano y profesional en tuCalma Psicología. Terapia online.";
  const seoKeywords =
    "psicoterapia, psicología, ansiedad, estrés, bienestar emocional, terapia online, regulación emocional";
  const ogImage = `${SITE_URL}/assets/img/og/home-og.jpg`;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={PAGE_URL} />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Loading />
      <LocalBusinessLD />
      <Header />

      <main id="main" className="site-main">
        <PageTitleHome />

        <Services />
        <div className="wrapper">
          <div className="row gutter-width-lg with-pb-lg">
            <div className="col-md-6 col-sm-12">
              <ContactForm />
            </div>
            <div className="col-md-6 col-sm-12">
              <Location />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
