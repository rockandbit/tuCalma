import React, { Fragment, useEffect } from "react";

import ContactForm from "../components/form/ContactForm";
import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header";
import Loading from "../blocks/loading/Loading";
import LocalBusinessLD from "../seo/LocalBusinessLD.jsx";
import PageSeo from "../seo/PageSeo";
import PageTitleHome from "../blocks/page-title/PageTitleHome";
import Services from "../blocks/services/Services";
import content from "../data/content/home.json";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home", "bg-fixed", "bg-line");
    return () => {
      document.body.classList.remove("home", "bg-fixed", "bg-line");
    };
  }, []);

  return (
    <Fragment>
      <PageSeo seo={{ path: "/", title: content.seoTitle, description: content.seoDescription }} />

      <Loading />
      <LocalBusinessLD />
      <Header />

      <main id="main" className="site-main">
        <PageTitleHome />

        <Services />
        <div className="wrapper">
          <div className="row gutter-width-lg with-pb-lg">
            <div className="col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
