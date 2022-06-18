import React from "react";
import "./styles.scss";

export const Revenue = () => {
  return (
    <section className="graph-container">
      <div className="graph-top-container">
        <h6 className="graph-title">Revenue</h6>
        <div className="graph-buttons-container">
          <button className="graph-button">All</button>
          <button className="graph-button">1M</button>
          <button className="graph-button">6M</button>
          <button className="graph-button inactive">1Y</button>
        </div>
      </div>
      <div className="graph-sections-container flex-container">
        <div className="graph-section">
          <p className="graph-section-value">7,585</p>
          <p className="graph-section-name">Orders</p>
        </div>
        <div className="graph-section">
          <p className="graph-section-value">$22.89k</p>
          <p className="graph-section-name">Earnings</p>
        </div>
        <div className="graph-section">
          <p className="graph-section-value">367</p>
          <p className="graph-section-name">Refunds</p>
        </div>
        <div className="graph-section">
          <p className="graph-section-value colored">18.92%</p>
          <p className="graph-section-name">Conversation Ratio</p>
        </div>
      </div>
      <img
        className="graph-picture"
        src="./assets/images/graph.png"
        alt="Graph"
      />
    </section>
  );
};
