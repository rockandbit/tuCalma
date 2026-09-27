import parse from "html-react-parser";

import React from "react";
import helpYou from "../../data/helpYou/helpYou.json";

const MyServices = () => {
  return (
    <div id="my-aboutMe" className="block spacer p-top-xl">
      <div className="row gutter-width-lg with-pb-lg">
        {helpYou.items.map((item) => {
            return (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <div className="card border-0">
                  <div className="card-body p-0">
                    {/* <h4>{ item.title }</h4> */}
                    <p className="text-justify">{parse(item.description)}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyServices;
