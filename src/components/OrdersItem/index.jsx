import React from "react";
import "./styles.scss";

const STATUS_CLASSES = {
  Paid: "success",
  Pending: "pending",
  Unpaid: "unpaid",
};

export const OrdersItem = ({
  id,
  name,
  img,
  product,
  price,
  vendor,
  status,
  rating,
  votes,
}) => {
  return (
    <tr>
      <td>
        <a href="/" className="order-id">
          {id}
        </a>
      </td>
      <td>
        <div className="order-customer">
          <img src={img} alt="Customer avatar" className="order-customer-img" />
          <span className="order-customer-name">{name}</span>
        </div>
      </td>
      <td>
        <span className="order-product">{product}</span>
      </td>
      <td>
        <span className="order-amount">{price}</span>
      </td>
      <td>
        <span className="order-vendor">{vendor}</span>
      </td>
      <td>
        <span className={`order-status ${STATUS_CLASSES[status]}`}>
          {status}
        </span>
      </td>
      <td>
        <div className="order-rating-container">
          <span className="order-rating">{rating}</span>
          <span className="order-votes">({votes} votes)</span>
        </div>
      </td>
    </tr>
  );
};
