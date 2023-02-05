import React from "react";
import portada from "../../assets/img/placeholder/ayudar.png";

const HelpYouContent = () => {
  return (
    <div id="about" className="block">
      <h3>
        Los servicios y la forma en la que puedo{" "}
        <span className="line">acompañarte</span>.
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
          <h4>En qué puedo ayudarte</h4>
          <p>
            Como psicóloga pretendo acompañarte y ayudarte en este proceso,
            desde el respeto, la honestidad y la calma. Mi recomendación (y el
            humilde consejo que doy a todas las personas a las que quiero) es
            que pruebes a encontrar un profesional con el que sientas conexión,
            seguridad y confianza para poder trabajar y abordar de forma
            adecuada lo que necesites en cada momento. Si crees y sientes que
            puedo ser yo quien te acompañe y ayude en algún aspecto de tu vida,
            estaré encantada de emprender este proceso juntos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpYouContent;
