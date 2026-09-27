import parse from "html-react-parser";
import React from "react";
import portada from "../../assets/img/portadaPaula.jpeg";
import content from "../../data/content/home.json";

const PageTitleHome = () => {
  return (
    <section id="page-title" className="block">
      <div className="wrapper">
        <div className="row">
          <div className="col col-1 position-relative">
            <div className="title">
              <h1 className="h">
                {content.pageTitle}<span className="dot">.</span>
              </h1>

              <div className="title-clone">{content.titleClone}</div>
            </div>

            <div className="spacer p-top-lg d-flex">
              <p className="p-large w-75 text-justify">
                {parse(content.introHtml)}
              </p>
            </div>
            <blockquote className="mt-5">
              {content.quote}
            </blockquote>
          </div>

          <div className="col col-2 d-none d-sm-block">
            <div className="d-flex">
              <div className="align-self-start w-100">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src={content.heroImage || portada}
                      className="img-fluid"
                      alt={content.heroImageAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleHome;
