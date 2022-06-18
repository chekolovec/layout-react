import React from "react";
import "./styles.scss";
import { TopSellersItem } from "../TopSellersItem";
import { Pagination } from "../Pagination";

const DATA = [
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
];

export const TopSellers = () => {
  return (
    <section className="sellers">
      <div className="content-title-container flex-container">
        <h6 className="title">Top Sellers</h6>
        <button className="sort">
          <span>Report</span>
          <i className="mdi mdi-chevron-down ms-1"></i>
        </button>
      </div>

      <ul className="sellers-content">
        {DATA.map(
          ({ img, name, author, field, number, price, percent }, index) => (
            <TopSellersItem
              img={img}
              name={name}
              author={author}
              field={field}
              number={number}
              price={price}
              percent={percent}
              key={name + index}
            />
          )
        )}
      </ul>
      <Pagination itemsNumber={5} totalNumber={25} current={2} last={5} />
    </section>
  );
};
