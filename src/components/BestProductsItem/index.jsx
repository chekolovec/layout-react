import React from "react";
import "./styles.scss";

export const BestProductsItem = ({
  name,
  date,
  price,
  stock,
  amount,
  outOfStock,
}) => {
  return (
    <li className="product">
      <div className="product-name">
        <div className="product-img-container">
          <img
            src="./assets/images/product.png"
            alt="Product"
            className="product-img"
          />
        </div>
        <div className="product-info-container">
          <p className="product-info-value">{name}</p>
          <p className="product-info-name">{date}</p>
        </div>
      </div>
      <div className="product-info-container">
        <p className="product-info-value">{price}</p>
        <p className="product-info-name">Price</p>
      </div>
      <div className="product-info-container">
        {outOfStock ? (
          <span className="product-info-out">Out of stock</span>
        ) : (
          <p className="product-info-value">{stock}</p>
        )}
        <p className="product-info-name">Stock</p>
      </div>
      <div className="product-info-container">
        <p className="product-info-value">{amount}</p>
        <p className="product-info-name">Amount</p>
      </div>
    </li>
  );
};
