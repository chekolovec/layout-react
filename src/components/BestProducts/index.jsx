import React from "react";
import { BestProductsItem } from "../BestProductsItem";
import { Pagination } from "../Pagination";
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
    <section className="selling-products">
      <div className="content-title-container flex-container">
        <h6 className="title">Best Selling Products</h6>
        <button className="sort">
          <span className="sort-text">SORT BY: </span>
          <span className="sort-value">Today</span>
          <i className="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>
      <ul className="selling-products-content">
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
      <Pagination itemsNumber={5} totalNumber={25} current={2} last={5} />
    </section>
  );
};
