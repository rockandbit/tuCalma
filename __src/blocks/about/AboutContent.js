import React from "react";
import portada from "../../assets/img/portadaPaula.jpeg";

const AboutContent = () => {
  return (
    <div id="about" className="block">
      <h3>
        Una breve presentación
        <br /> <span className="line">sobre mí</span>.
      </h3>

      <div className="row bg-half-ring-left gutter-width-lg">
        <div className="col align-self-top pl-0">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src={portada}
                alt="Paula Pedival de Paz"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="col align-self-center description">
          <h4>Mi nombre es Paula</h4>
          <p className="text-justify">
            Soy de La Rioja. Vine a estudiar <b>psicología</b> a Donostia - San
            Sebastián y me enamoré de la ciudad, su gente, su paisaje y su mar.
          </p>
          <p className="text-justify">
            Siempre supe que quería dedicarme a algo relacionado con el cuidado,
            el servicio y la ayuda. Tras algún proceso personal, decidí
            convertir mi vocación en mi profesión brindando{" "}
            <b>atención y apoyo</b> a personas en el área de la psicología.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
