import React from "react";
import "./styles.scss";

export const Locations = () => {
  return (
    <section className="map">
      <div className="map-top-container">
        <h6 className="map-title">Sales by Locations</h6>
        <button className="map-button">Export Report</button>
      </div>
      <div className="map-picture-wrapper">
        <img src="./assets/images/map.png" alt="Map" className="map-picture" />
      </div>
    </section>
  );
};
