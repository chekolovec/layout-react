import React from "react";
import { Calendar } from "../Calendar";
import "./styles.scss";

const TOTAL_TABS = [
  {
    title: "TOTAL EARNINGS",
    trend: "positive",
    change: "+16.24 %",
    price: "$559.25k",
    linkText: "View net earnings",
    icon: "bx:dollar-circle",
    iconColor: "earning",
  },
  {
    title: "ORDERS",
    trend: "negative",
    change: "-3.57 %",
    price: "36,894",
    linkText: "View all orders",
    icon: "clarity:shopping-bag-line",
    iconColor: "orders",
  },
  {
    title: "CUSTOMERS",
    trend: "positive",
    change: "+29.08 %",
    price: "183.35M",
    linkText: "See details",
    icon: "carbon:user-avatar",
    iconColor: "customers",
  },
  {
    title: "MY BALANCE",
    change: "+0.00 %",
    price: "$165.89k",
    linkText: "Withdraw money",
    icon: "bx:wallet",
    iconColor: "balance",
  },
];

export const Total = () => {
  return (
    <section className="total">
      <div className="total-top-wrapper">
        <div className="total-title-wrapper">
          <h4 className="total-title">Good Morning, Anna!</h4>
          <p className="total-subtitle">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="total-extra-wrapper">
          <div className="total-calendar-container">
            <Calendar />
          </div>
          <div className="total-add-wrapper">
            <button className="total-add-container">
              <i className="ri-add-circle-line align-middle me-1"></i>
              <span className="total-add-text">Add Product</span>
            </button>
          </div>
          <div className="total-recent-wrapper">
            <button className="total-recent-container">
              <i className="ri-pulse-line"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="total-bottom-wrapper">
        <ul className="total-boxes-container">
          {TOTAL_TABS.map((tab) => (
            <li className="total-box" key={tab.title}>
              <div className="box-title-container">
                <h5 className="box-title">{tab.title}</h5>
                <div
                  className={`price-change-container ${
                    tab.trend === "positive" ? "success" : ""
                  } ${tab.trend === "negative" ? "failure" : ""}`}
                >
                  {tab.trend === "positive" && (
                    <i className="ri-arrow-right-up-line fs-13 align-middle"></i>
                  )}
                  {tab.trend === "negative" && (
                    <i className="ri-arrow-right-down-line fs-13 align-middle"></i>
                  )}
                  <p className="price-change-text">{tab.change}</p>
                </div>
              </div>
              <div className="box-info-container">
                <div className="info-price-container">
                  <p className="info-price">{tab.price}</p>
                  <a href="/" className="info-link">
                    {tab.linkText}
                  </a>
                </div>
                <div className={"info-icon-container " + tab.iconColor}>
                  <span
                    className="iconify info-icon"
                    data-icon={tab.icon}
                  ></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
