import React, { Fragment } from "react";
import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import PageTitleHowTo from "../blocks/page-title/PageTitleHowTo";
import HowToContent from "../blocks/howTo/HowToContent";
import PageSeo from "../seo/PageSeo";
import { pageSeo } from "../seo/site";

const HowTo = () => {
  document.body.classList.add("page");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <PageSeo seo={pageSeo.howTo} />

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleHowTo />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <HowToContent />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default HowTo;
