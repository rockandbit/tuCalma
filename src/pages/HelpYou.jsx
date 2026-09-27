import React, { Fragment } from "react";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import HelpYouContent from "../blocks/helpYou/HelpYouContent";
import MyServices from "../blocks/helpYou/MyServices";
import PageTitleHelpYou from "../blocks/page-title/PageTitleHelpYou";
import PageSeo from "../seo/PageSeo";
import content from "../data/content/help-you.json";

const HelpYou = () => {
  document.body.classList.add("page");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <PageSeo seo={{ path: "/puedo-ayudar", title: content.seoTitle, description: content.seoDescription }} />

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleHelpYou />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <HelpYouContent />

            <MyServices />

          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default HelpYou;
