import React from "react";
import "./styles.scss";

export const Visits = () => {
  return (
    <section className="visits">
      <div className="content-title-container flex-container">
        <h6 className="title">Store Visits by Source</h6>
        <button className="sort">
          <span className="sort-text">SORT BY: </span>
          <span className="sort-value">Today</span>
          <i className="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>
      <div className="visits-content">
        <img
          src="./assets/images/visits.png"
          alt="Visits graph"
          className="visits-img"
        />
      </div>
    </section>
  );
};
