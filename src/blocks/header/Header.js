import React from "react";
import Logo from "../../blocks/logo/Logo";
import LogoTuCalma from "../../assets/img/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

const Header = () => {
  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between">
        <div className="align-self-center">
          <Logo image={LogoTuCalma} />
        </div>
        {isMobile ? (
          <div className="row align-items-center">
            <div className="px-3">
              <a href="tel:+34689187970 ">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="lg"
                  className=""
                  color="#5da7ac"
                />
              </a>
            </div>
            <div className="px-3">
              <p>
                <a
                  href="https://goo.gl/maps/eAmQxNNSaeBnqJYX8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="lg"
                    color="#5da7ac"
                  />
                </a>
              </p>
            </div>
            <div className="px-3">
              <a
                href="https://instagram.com/tucalma.psicologia"
                target={`_blank`}
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" color="#5da7ac" />
              </a>
            </div>
            <div className="px-3">
              <p>
                <a href="mailto:tucalma.psicologia@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    color="#5da7ac"
                  />
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <a href="tel:+34689187970">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="sm"
                className="mr-2"
                color="#5da7ac"
              />
              <span>+34 689 18 79 70 |</span>
            </a>
            <a
              href="https://goo.gl/maps/eAmQxNNSaeBnqJYX8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                className="mx-2"
                color="#5da7ac"
              />
              <span className="pb-1">
                Plaza Biteri 1, Entresuelo D, 20001, Donostia |
              </span>
            </a>
            <a href="mailto:tucalma.psicologia@gmail.com" className="">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="sm"
                className="mx-2"
                color="#5da7ac"
              />
            </a>
            <a
              href="https://instagram.com/tucalma.psicologia"
              target={`_blank`}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="sm"
                className="mr-2 ml-2"
                color="#5da7ac"
              />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
