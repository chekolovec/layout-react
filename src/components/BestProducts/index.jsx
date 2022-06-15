import React from "react";
import { BestProductsItem } from "../BestProductsItem";
import "./styles.scss";

const PRODUCTS = [
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    amount: "$1,798",
    outOfStock: true,
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    amount: "$1,798",
    outOfStock: true,
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
];

export const BestProducts = () => {
  return (
    <section class="selling-products">
      <div class="content-title-container flex-container">
        <h6 class="title">Best Selling Products</h6>
        <button class="sort">
          <span class="sort-text">SORT BY: </span>
          <span class="sort-value">Today</span>
          <i class="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>
      <ul class="selling-products-content">
        {PRODUCTS.map(({ name, price, amount, outOfStock, date }, index) => (
          <BestProductsItem
            name={name}
            price={price}
            amount={amount}
            outOfStock={outOfStock}
            date={date}
            key={index}
          />
        ))}
      </ul>
      <div class="pagination">
        <span class="pagination-text">
          Showing <b>5</b> of <b>25</b> Results
        </span>
        <div class="pagination-items">
          <button class="pagination-item">←</button>
          <button class="pagination-item">1</button>
          <button class="pagination-item active">2</button>
          <button class="pagination-item">3</button>
          <button class="pagination-item">→</button>
        </div>
      </div>
    </section>
  );
};
