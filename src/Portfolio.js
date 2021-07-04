/** @format */

import React from "react";
import PortSections from "./PortSections";
import images from "./images";

const Portfolio = () => {
  return (
    <div>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/*<!-- Portfolio Section Heading-->*/}

          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <PortSections img={images.cabin} />
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <PortSections img={images.cake} />
            </div>

            <div className="col-md-6 col-lg-4 mb-5">
              <PortSections img={images.circus} />
            </div>

            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <PortSections img={images.game} />
            </div>

            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <PortSections img={images.safe} />
            </div>

            <div className="col-md-6 col-lg-4">
              <PortSections img={images.submarine} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
