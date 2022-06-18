import React from "react";
import { OrdersItem } from "../OrdersItem";
import "./styles.scss";

const DATA = [
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Pending",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Unpaid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
];

export const Orders = () => {
  return (
    <section className="orders">
      <div className="content-title-container flex-container">
        <h6 className="title">Recent Orders</h6>
        <button className="generate">
          <i className="ri-file-list-3-line align-middle"></i>
          <span className="generate-text">Generate Report</span>
        </button>
      </div>
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map(
              (
                {
                  id,
                  name,
                  img,
                  product,
                  price,
                  vendor,
                  status,
                  rating,
                  votes,
                },
                index
              ) => (
                <OrdersItem
                  id={id}
                  name={name}
                  img={img}
                  product={product}
                  price={price}
                  vendor={vendor}
                  status={status}
                  rating={rating}
                  votes={votes}
                  key={index}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
