import React from "react";
import "./styles.scss";

export const Revenue = () => {
  return (
    <section class="graph-container">
      <div class="graph-top-container">
        <h6 class="graph-title">Revenue</h6>
        <div class="graph-buttons-container">
          <button class="graph-button">All</button>
          <button class="graph-button">1M</button>
          <button class="graph-button">6M</button>
          <button class="graph-button inactive">1Y</button>
        </div>
      </div>
      <div class="graph-sections-container flex-container">
        <div class="graph-section">
          <p class="graph-section-value">7,585</p>
          <p class="graph-section-name">Orders</p>
        </div>
        <div class="graph-section">
          <p class="graph-section-value">$22.89k</p>
          <p class="graph-section-name">Earnings</p>
        </div>
        <div class="graph-section">
          <p class="graph-section-value">367</p>
          <p class="graph-section-name">Refunds</p>
        </div>
        <div class="graph-section">
          <p class="graph-section-value colored">18.92%</p>
          <p class="graph-section-name">Conversation Ratio</p>
        </div>
      </div>
      <img class="graph-picture" src="./assets/images/graph.png" alt="Graph" />
    </section>
  );
};
