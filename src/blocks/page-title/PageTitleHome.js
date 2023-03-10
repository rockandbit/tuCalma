import React from "react";
import portada from "../../assets/img/portadaPaula.jpeg";

const PageTitleHome = () => {
  return (
    <section id="page-title" className="block">
      <div className="wrapper">
        <div className="row">
          <div className="col col-1 position-relative">
            <div className="title">
              <h2 className="h">
                tu Calma<span className="dot">.</span>
              </h2>

              <div className="title-clone">tu Calma</div>
            </div>

            <div className="spacer p-top-lg d-flex">
              <p className="p-large w-75 text-justify">
                Soy <b>psicoterapeuta</b>, con 10 años de formación y desde una
                mirada integrativa y holística, procuro ayudar a las personas a
                sentir <b>bienestar</b> en los diferentes momentos de su vida.
                En ocasiones las mareas nos pueden abrumar, mi propósito es
                acompañarte a encontrar <b>tu calma</b>.
              </p>
            </div>
            <blockquote className="mt-5">
              “y no te falte vela ni corriente al navegar” - A.S.
            </blockquote>
          </div>

          <div className="col col-2 d-none d-sm-block">
            <div className="d-flex">
              <div className="align-self-start w-100">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img
                      src={portada}
                      className="img-fluid"
                      alt="Paula Pedival de Paz"
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
