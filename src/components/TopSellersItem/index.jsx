import React from "react";
import "./styles.scss";

export const TopSellersItem = ({
  img,
  name,
  author,
  field,
  number,
  price,
  percent,
}) => {
  return (
    <li className="sellers-item">
      <div className="sellers-name">
        <div className="sellers-img-container">
          <img src={img} alt="Selers" className="sellers-img" />
        </div>
        <div className="sellers-info-container">
          <a href="/" className="sellers-info-link">
            {name}
          </a>
          <p className="sellers-info-name">{author}</p>
        </div>
      </div>
      <div className="sellers-info-container">
        <p className="sellers-info-name">{field}</p>
      </div>
      <div className="sellers-info-container">
        <p className="sellers-info-value">{number}</p>
        <p className="sellers-info-name">Stock</p>
      </div>
      <div className="sellers-info-container">
        <p className="sellers-info-name">{price}</p>
      </div>
      <div className="sellers-info-container">
        <h5 className="sellers-info-percent">{percent}</h5>
      </div>
      <div className="sellers-info-container">
        <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
      </div>
    </li>
  );
};
