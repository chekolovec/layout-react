import React from "react";
import "./styles.scss";

export const Locations = () => {
  return (
    <section class="map">
      <div class="map-top-container">
        <h6 class="map-title">Sales by Locations</h6>
        <button class="map-button">Export Report</button>
      </div>
      <div class="map-picture-wrapper">
        <img src="./assets/images/map.png" alt="Map" class="map-picture" />
      </div>
    </section>
  );
};
