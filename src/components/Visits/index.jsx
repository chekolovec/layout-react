import React from "react";
import "./styles.scss";

export const Visits = () => {
  return (
    <section class="visits">
      <div class="content-title-container flex-container">
        <h6 class="title">Store Visits by Source</h6>
        <button class="sort">
          <span class="sort-text">SORT BY: </span>
          <span class="sort-value">Today</span>
          <i class="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>
      <div class="visits-content">
        <img
          src="./assets/images/visits.png"
          alt="Visits graph"
          class="visits-img"
        />
      </div>
    </section>
  );
};
