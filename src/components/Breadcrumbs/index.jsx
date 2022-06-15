import React from "react";
import "./styles.scss";

export const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs-container">
      <h2 className="page-title">Dashboard</h2>
      <div className="breadcrumbs-wrapper">
        <a href="/" className="breadcrumbs-main">
          Dashboard
        </a>
        <i className="ri-arrow-right-s-line breadcrumbs-arrow"></i>
        <span className="breadcrumbs-second">Dashboard</span>
      </div>
    </section>
  );
};
