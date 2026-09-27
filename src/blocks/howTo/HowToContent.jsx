import parse from "html-react-parser";
import React from "react";
import portada from "../../assets/img/placeholder/comopodemos.png";
import content from "../../data/content/how-to.json";

const HowToContent = () => {
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
          <p className="text-justify">
            {parse(content.introHtml)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToContent;
