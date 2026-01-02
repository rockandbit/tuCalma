import React from "react";
import portada from "../../assets/img/placeholder/comopodemos.png";

const HowToContent = () => {
  return (
    <div id="about" className="block">
      <h3>
        Posibilidad de sesiones <span className="line">presenciales</span> y{" "}
        <span className="line">online</span>.
      </h3>

      <div className="row bg-half-ring-left gutter-width-lg">
        <div className="col align-self-top pl-0">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src={portada}
                alt="Cómo podemos hacerlo?"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col align-self-center description">
          <h4>¿Cómo podemos hacerlo?</h4>
          <p className="text-justify">
            Trabajo de forma <b>presencial</b> en el gabinete y también{" "}
            <b>online</b>, mediante videollamadas. En función de tu necesidad,
            preferencia, horarios y del formato más adecuado para tí, buscaremos
            cuál es la mejor opción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToContent;
