import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/Logo";
import LogoTuCalma from "../../assets/img/logo/logo.png";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import site from "../../data/content/site.json";

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between align-items-center">
        <div className="align-self-center">
          <a href="/" aria-label="Ir a la página de inicio">
            <Logo
              image={LogoTuCalma}
              alt="tuCalma Psicología - Psicoterapia y bienestar emocional"
            />
          </a>
        </div>

        <nav
          className="d-flex flex-row align-items-center"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <div className="px-3">
            <a
              href={`tel:${site.phoneHref}`}
              aria-label={`Llamar al teléfono ${site.phoneDisplay}`}
              title={`Llamar al ${site.phoneDisplay}`}
            >
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#5da7ac" />
            </a>
          </div>

          <div className="px-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Instagram de tuCalma Psicología"
              title="Instagram tuCalma Psicología"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#5da7ac" />
            </a>
          </div>

          <div className="px-3">
            <a
              href={`mailto:${site.email}`}
              aria-label={`Enviar un correo a ${site.email}`}
              title="Enviar correo"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#5da7ac" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
