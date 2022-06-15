import React from "react";
import { Apps } from "../Apps";
import { Cart } from "../Cart";
import { Language } from "../Language";
import { Notifications } from "../Notifications";
import { SearchBar } from "../SearchBar";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper-left">
        <SearchBar />
      </div>
      <div className="header-wrapper-right">
        <div className="header-buttons-wrapper">
          <Language />
          <Apps />
          <Cart />
          <div className="header-button-container">
            <button className="header-button-wrapper">
              <span
                className="iconify header-button"
                data-icon="bytesize:fullscreen"
              ></span>
            </button>
          </div>
          <div className="header-button-container">
            <button className="header-button-wrapper">
              <span
                className="iconify header-button"
                data-icon="bytesize:moon"
              ></span>
            </button>
          </div>
          <Notifications />
        </div>
        <div className="header-profile-container">
          <button className="header-profile-wrapper">
            <img
              src="../assets/images/avatar.jpeg"
              alt="profile"
              className="header-profile-image"
            />
            <div className="header-profile-info">
              <h4 className="header-profile-name">Anna Adame</h4>
              <p className="header-profile-position">Founder</p>
            </div>
          </button>
          <div className="profile-modal">
            <div className="profile-modal-top">
              <h6 className="profile-modal-title">Welcome Anna!</h6>
              <div className="menu-list">
                <a className="menu-item" href="/">
                  <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                  <span className="menu-item-text"> Profile</span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>

                  <span className="menu-item-text"> Messages</span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>

                  <span className="menu-item-text"> Taskboard</span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>

                  <span className="menu-item-text"> Help</span>
                </a>
              </div>
              <div className="menu-list-bottom">
                <a className="menu-item" href="/">
                  <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>
                  <span className="menu-item-text">
                    Balance: <b>$5971.67</b>
                  </span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
                  <span className="menu-item-text">Settings</span>
                  <span className="menu-item-button">New</span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>
                  <span className="menu-item-text">Lock Screen</span>
                </a>
                <a className="menu-item" href="/">
                  <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                  <span className="menu-item-text">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
