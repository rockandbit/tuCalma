import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt="Logo"
          className="logo primary-logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
