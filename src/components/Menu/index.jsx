import React from "react";
import "./styles.scss";

export const Menu = () => {
  return (
    <section className="menu-main-container">
      <div className="flex column align-center">
        <a href=".">
          <img
            className="menu-logo"
            src="../assets/images/logo.png"
            alt="Menu logo"
          />
          <img
            className="menu-logo-mobile"
            src="../assets/images/logo-menu.png"
            alt="Menu mobile logo"
          />
        </a>
      </div>
      <div className="menu-scroll-wrapper">
        <p className="menu-section-name">Menu</p>
        <div className="menu-section">
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-dashboard-2-line active"></i>
            <h3 className="menu-section-title active">Dashboard</h3>
            <i className="ri-arrow-down-s-line active arrow"></i>
          </div>
          <div className="menu-section-items-wrapper">
            <button
              type="button"
              className="menu-section-item flex align-center"
            >
              Analytics
            </button>
            <button
              type="button"
              className="menu-section-item flex align-center"
            >
              CRM
            </button>
            <button
              type="button"
              className="menu-section-item active flex align-center"
            >
              Ecommerce
            </button>
            <button
              type="button"
              className="menu-section-item flex align-center"
            >
              Crypto
            </button>
            <button
              type="button"
              className="menu-section-item flex align-center"
            >
              Projects
            </button>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-apps-line"></i>
            <h3 className="menu-section-title">Apps</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-layout-line"></i>
            <h3 className="menu-section-title">Layouts</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <p className="menu-section-name">Pages</p>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-account-circle-line"></i>
            <h3 className="menu-section-title">Authentication</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-pages-line"></i>
            <h3 className="menu-section-title">Pages</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-rocket-line"></i>
            <h3 className="menu-section-title">Landing</h3>
            <div className="menu-new">New</div>
          </div>
          <p className="menu-section-name">Components</p>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-pencil-ruler-2-line"></i>
            <h3 className="menu-section-title">Base UI</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-stack-line"></i>
            <h3 className="menu-section-title">Advance UI</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-honour-line"></i>
            <h3 className="menu-section-title">Widgets</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-file-list-3-line"></i>
            <h3 className="menu-section-title">Forms</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-layout-grid-line"></i>
            <h3 className="menu-section-title">Tables</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-pie-chart-line"></i>
            <h3 className="menu-section-title">Charts</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-compasses-2-line"></i>
            <h3 className="menu-section-title">Icons</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-map-pin-line"></i>
            <h3 className="menu-section-title">Maps</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
          <div className="menu-section-wrapper flex align-center">
            <i className="ri-share-line"></i>
            <h3 className="menu-section-title">Multi level</h3>
            <i className="ri-arrow-right-s-line arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
