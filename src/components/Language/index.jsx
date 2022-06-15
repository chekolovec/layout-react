import React, { useState } from "react";
import "./styles.scss";

export const Language = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <div className="header-button-container">
      <button
        className="header-button-wrapper"
        onClick={() => toggleModal(!modalShown)}
      >
        <img
          width="20"
          height="20"
          src="../assets/images/flag.svg"
          alt="country"
          className="header-button-language"
        />
      </button>
      <div className={`language-popup-container ${modalShown ? "active" : ""}`}>
        <button className="language-popup-item">
          <img
            src="./assets/images/flag.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">English</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/spain.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">Española</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/germany.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">Deutsche</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/italy.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">Italiana</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/russia.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">русский</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/china.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">中国人</span>
        </button>
        <button className="language-popup-item">
          <img
            src="./assets/images/french.svg"
            alt="Flag"
            className="language-popup-flag"
          />
          <span className="language-name">français</span>
        </button>
      </div>
    </div>
  );
};
