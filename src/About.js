/** @format */

import React from "react";

const About = () => {
  return (
    <div>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Hey! I am Harsh Marwah a Full Stack Web developer, I work on
                MERN. I have made so many basic templates so as to polish my
                skills. <br />I have also worked with Flutter and Dart.I have
                made some projects using flutter which are working on multiple
                OS
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                If you want to know bit more about me, you can download my
                resume by clicking below on download button. This resume had
                been made on March of 2021
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-light"
              href="https://drive.google.com/file/d/1a5WI5vTs5f4WmE8rAmeteAuEPAxwieEO/view?usp=sharing">
              <i className="fas fa-download me-2"></i>
              Download Resume!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
