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
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="" />
              </a>
            </div>
            <div className="px-3">
              <p>
                <a
                  href="https://goo.gl/maps/eAmQxNNSaeBnqJYX8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                </a>
              </p>
            </div>
            <div className="px-3">
              <a
                href="https://instagram.com/tucalma.psicologia"
                target={`_blank`}
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
            <div className="px-3">
              <p>
                <a href="mailto:tucalma.psicologia@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <FontAwesomeIcon icon={faPhoneAlt} size="sm" className="mr-2" />
            <span>+34 689 18 79 70 |</span>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="sm"
              className="mr-2 ml-2"
            />
            <div className="pb-1">tucalma.psicologia@gmail.com |</div>
            <a
              href="https://instagram.com/tucalma.psicologia"
              target={`_blank`}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="sm"
                className="mr-2 ml-2"
              />
            </a>
          </div>
        )}

        {/* <SearchModal /> */}

        {/* <MenuModal /> */}
      </div>
    </header>
  );
};

export default Header;
