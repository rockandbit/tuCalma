import React from "react";
import Copyright from "../footer/Copyright";

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrapper no-space">
        <div className="row justify-content-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
