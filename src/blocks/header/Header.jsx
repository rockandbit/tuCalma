import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/Logo";
import LogoTuCalma from "../../assets/img/logo/logo.png";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="align-self-center">
          <a href="/" aria-label="Ir a la página de inicio">
            <Logo
              image={LogoTuCalma}
              alt="tuCalma Psicología - Psicoterapia y bienestar emocional"
            />
          </a>
        </div>

        {/* Iconos en fila */}
        <nav
          className="d-flex flex-row align-items-center"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <div className="px-3">
            <a
              href="tel:+34689187970"
              aria-label="Llamar al teléfono 689 18 79 70"
              title="Llamar al 689 18 79 70"
            >
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#5da7ac" />
            </a>
          </div>

          <div className="px-3">
            <a
              href="https://www.google.com/maps/search/Plaza+Biteri+1,+20001,+Donostia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver ubicación de tuCalma Psicología en Google Maps"
              title="Ver ubicación en Google Maps"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                color="#5da7ac"
              />
            </a>
          </div>

          <div className="px-3">
            <a
              href="https://instagram.com/tucalma.psicologia"
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
              href="mailto:tucalma.psicologia@gmail.com"
              aria-label="Enviar un correo a tucalma.psicologia@gmail.com"
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
