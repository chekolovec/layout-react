import React, { useState } from "react";
import "./styles.scss";

export const Apps = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <div className="header-button-container">
      <button
        className="header-button-wrapper"
        onClick={() => toggleModal(!modalShown)}
      >
        <span
          className="iconify header-button"
          data-icon="bx:category-alt"
        ></span>
      </button>
      <div className={`apps-container ${modalShown ? "active" : ""}`}>
        <div className="apps-top">
          <h6 className="apps-title">Web Apps</h6>
          <button className="apps-all-button">
            <span className="apps-all-text">View All Apps</span>
            <i className="ri-arrow-right-s-line align-middle"></i>
          </button>
        </div>
        <div className="apps-list">
          <button className="apps-item">
            <img
              src="./assets/images/github.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Github</span>
          </button>
          <button className="apps-item">
            <img
              src="./assets/images/bitbucket.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Bitbucket</span>
          </button>
          <button className="apps-item">
            <img
              src="./assets/images/dribbble.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Dribble</span>
          </button>
          <button className="apps-item">
            <img
              src="./assets/images/dropbox.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Dropbox</span>
          </button>
          <button className="apps-item">
            <img
              src="./assets/images/mail_chimp.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Mail Chimp</span>
          </button>
          <button className="apps-item">
            <img
              src="./assets/images/slack.png"
              alt="App"
              className="apps-item-img"
            />
            <span className="apps-item-name">Slack</span>
          </button>
        </div>
      </div>
    </div>
  );
};
