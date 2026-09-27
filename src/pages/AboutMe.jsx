import { Fragment } from "react";

import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header";
import Loading from "../blocks/loading/Loading";

import AboutContent from "../blocks/about/AboutContent";
import MyBackground from "../blocks/about/MyBackground";
import PageTitleAbout from "../blocks/page-title/PageTitleAbout";
import PageSeo from "../seo/PageSeo";
import content from "../data/content/about.json";

const AboutMe = () => {
  document.body.classList.add("page");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <PageSeo
        seo={{ path: "/quien-soy", title: content.seoTitle, description: content.seoDescription }}
        image={content.ogImage}
        imageAlt={content.ogImageAlt}
      />

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleAbout />

        <section id="page-content" className="spacer p-top-xl">
          <div className="wrapper">
            <AboutContent />

            <MyBackground />

          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default AboutMe;
