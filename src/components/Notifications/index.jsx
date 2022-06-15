import React, { useState } from "react";
import "./styles.scss";

export const Notifications = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <div className="header-button-container">
      <button
        className="header-button-wrapper"
        onClick={() => toggleModal(!modalShown)}
      >
        <span
          className="iconify header-button"
          data-icon="akar-icons:bell"
        ></span>
        <div className="notification counter-wrapper">
          <span className="notification counter">3</span>
        </div>
      </button>
      <div className={`notifications ${modalShown ? "active" : ""} `}>
        <div className="notifications-top">
          <h6 className="notifications-title">Notifications</h6>
          <span className="notifications-counter">4 New</span>
        </div>
        <div className="tabs-container">
          <div className="tabs-selector-container">
            <button className="tabs-selector active">All(4)</button>
            <button className="tabs-selector">Messages</button>
            <button className="tabs-selector">Alerts</button>
          </div>
          <div className="tab-content">
            <div className="tab-content-item">
              <div className="item-img-container reward">
                <i className="bx bx-badge-check"></i>
              </div>
              <div className="item-info">
                <p className="item-info-title">
                  Your <b>Elite</b> author Graphic Optimization
                  <span className="reward"> reward</span>
                  is ready!
                </p>
                <span className="item-info-date">
                  <i className="mdi mdi-clock-outline"></i> Just 30 sec ago
                </span>
              </div>
              <input type="checkbox" className="item-value" />
            </div>
            <div className="tab-content-item">
              <div className="item-img-container">
                <img
                  src="./assets/images/avatar-2.jpeg"
                  alt="Item"
                  className="item-img"
                />
              </div>
              <div className="item-info">
                <p className="item-info-title">Angela Bernier</p>
                <p className="item-info-text">
                  Answered to your comment on the cash flow forecast's graph 🔔.
                </p>
                <span className="item-info-date">
                  <i className="mdi mdi-clock-outline"></i> 48 min ago
                </span>
              </div>
              <input type="checkbox" className="item-value" />
            </div>
            <div className="tab-content-item">
              <div className="item-img-container success">
                <i className="bx bx-message-square-dots"></i>
              </div>
              <div className="item-info">
                <p className="item-info-title">
                  You have received
                  <span className="success"> 20</span> new messages in the
                  conversation
                </p>
                <span className="item-info-date">
                  <i className="mdi mdi-clock-outline"></i> 2 hrs ago
                </span>
              </div>
              <input type="checkbox" className="item-value" />
            </div>
            <div className="tab-content-item">
              <div className="item-img-container">
                <img
                  src="./assets/images/avatar-2.jpeg"
                  alt="Item"
                  className="item-img"
                />
              </div>
              <div className="item-info">
                <p className="item-info-title">Angela Bernier</p>
                <p className="item-info-text">
                  Answered to your comment on the cash flow forecast's graph 🔔.
                </p>
                <span className="item-info-date">
                  <i className="mdi mdi-clock-outline"></i> 48 min ago
                </span>
              </div>
              <input type="checkbox" className="item-value" />
            </div>
            <div className="tab-content-bottom">
              <button className="tab-content-button">
                View All Notifications
                <i className="ri-arrow-right-line align-middle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
