import parse from "html-react-parser";
import React from "react";
import portada from "../../assets/img/portadaPaula.jpeg";
import content from "../../data/content/about.json";

const AboutContent = () => {
  return (
    <div id="about" className="block">
      <h3>
        {parse(content.headingHtml)}
      </h3>

      <div className="row bg-half-ring-left gutter-width-lg">
        <div className="col align-self-top pl-0">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src={content.heroImage || portada}
                alt={content.heroImageAlt}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="col align-self-center description">
          <h4>{content.introTitle}</h4>
          <div className="text-justify">{parse(content.introHtml)}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
