import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className='"services__title'>
                Video <br /> Editor
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => {
                setToggleState(1);
              }}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => {
                    setToggleState(0);
                  }}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Video Editor</h3>
                <p className="services__modal-description">
                  I specialize in crafting videos that boast exceptional user
                  interfaces.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I edit short videos.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I edit ads videos.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I edit youtube videos.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className='"services__title'>
                Web <br /> Developer
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => {
                setToggleState(3);
              }}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => {
                    setToggleState(0);
                  }}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Web Developer</h3>
                <p className="services__modal-description">
                  As a web developer, I specialize in crafting web pages that
                  boast exceptional user interfaces.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create user friendly interfaces.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Fast and clear design of website.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className='"services__title'>
                UI/UX <br /> Designer
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => {
                setToggleState(2);
              }}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => {
                    setToggleState(0);
                  }}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">UI/UX Designer</h3>
                <p className="services__modal-description">
                Crafting User-Centric Digital Experiences with Creative Flair
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I design attractive and eye catching designs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create user friendly interfaces.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Fast and clear design of webpages.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
