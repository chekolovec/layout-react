import React from "react";
import "./styles.scss";

export const SearchBar = () => {
  return (
    <>
      <div className="burger-wrapper">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className="search-wrapper">
        <i className="mdi mdi-magnify search-widget-icon search-icon"></i>
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
    </>
  );
};
