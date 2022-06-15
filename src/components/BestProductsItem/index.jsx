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
    <li class="product">
      <div class="product-name">
        <div class="product-img-container">
          <img
            src="./assets/images/product.png"
            alt="Product"
            class="product-img"
          />
        </div>
        <div class="product-info-container">
          <p class="product-info-value">{name}</p>
          <p class="product-info-name">{date}</p>
        </div>
      </div>
      <div class="product-info-container">
        <p class="product-info-value">{price}</p>
        <p class="product-info-name">Price</p>
      </div>
      <div class="product-info-container">
        {outOfStock ? (
          <span class="product-info-out">Out of stock</span>
        ) : (
          <p class="product-info-value">{stock}</p>
        )}
        <p class="product-info-name">Stock</p>
      </div>
      <div class="product-info-container">
        <p class="product-info-value">{amount}</p>
        <p class="product-info-name">Amount</p>
      </div>
    </li>
  );
};
