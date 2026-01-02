import React, { Fragment } from "react";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleHome from "../blocks/page-title/PageTitleHome";
import ContactForm from "../components/form/ContactForm";
import Location from "../blocks/location/location";

// import Contacts from "../blocks/contacts/Contacts";
import Services from "../blocks/services/Services";
import Loading from "../blocks/loading/Loading";

const Home = () => {
  document.body.classList.add("home");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
  

      <Loading />

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
