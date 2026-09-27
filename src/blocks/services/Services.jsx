import React from "react";
import content from "../../data/content/home.json";
import services from "../../data/services/services.json";

const images = import.meta.glob(
  "../../assets/img/placeholder/*",
  { eager: true, import: "default" }
);

const Services = () => {
  return (
    <section id="services" className="block spacer p-top-xl">
      <div className="wrapper">
        <h3 className="text-right">
          <span className="line">{content.servicesHeading}</span>
        </h3>
      </div>

      <div className="bg-gray-light ptb-services">
        <div className="wrapper">
          <div className="row gutter-width-lg">
            {services.items.map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-post">
                    <div className="card-top position-relative">
                      <a
                        title={item.title}
                        href={item.link}
                      >
                        <div className="img object-fit overflow-hidden">
                          <div className="object-fit-cover transform-scale-h">
                            <img
                              className="card-top-img"
                              src={item.image || images[`../../assets/img/placeholder/${item.imgLink}`]}
                              alt={item.imgAlt}
                            />
                          </div>
                        </div>
                      </a>

                      <div className="card-category">
                        <a
                          title={item.categoryTitle}
                          className="btn btn-sm btn-light transform-scale-h border-0"
                          href={item.link}
                        >
                          {item.categoryTitle}
                        </a>
                      </div>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          title={item.title}
                          href={item.link}
                        >
                          {item.title}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
