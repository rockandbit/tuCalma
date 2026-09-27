import React from "react";
import site from "../../data/content/site.json";

const Copyright = () => {
  return (
    <div className="copyright">
      <p>{site.copyright}</p>
    </div>
  );
};

export default Copyright;
