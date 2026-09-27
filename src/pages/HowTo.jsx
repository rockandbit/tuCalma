import React, { Fragment } from "react";
import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import PageTitleHowTo from "../blocks/page-title/PageTitleHowTo";
import HowToContent from "../blocks/howTo/HowToContent";
import PageSeo from "../seo/PageSeo";
import content from "../data/content/how-to.json";

const HowTo = () => {
  document.body.classList.add("page");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <PageSeo
        seo={{ path: "/como-lo-hacemos", title: content.seoTitle, description: content.seoDescription }}
        image={content.ogImage}
        imageAlt={content.ogImageAlt}
      />

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
