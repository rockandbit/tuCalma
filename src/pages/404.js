import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitle404 from "../blocks/page-title/PageTitle404";
import BackToHome from "../components/button/BackToHome";

const page404 = () => {
  document.body.classList.add("error404");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>404 | tuCalma - Página no encontrada</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main bg-half-ring-up">
        <PageTitle404 />

        <div id="page-content" className="block">
          <div className="wrapper">
            <p className="spacer p-top-lg w-50 m-0 mb-4">
              No se ha podido encontrar la página que buscabas. Es posible que
              haya sido eliminada.
            </p>
            <div>
              <BackToHome />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default page404;
