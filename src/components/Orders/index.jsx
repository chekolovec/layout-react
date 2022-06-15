import React from "react";
import "./styles.scss";

export const Orders = () => {
  return (
    <section class="orders">
      <div class="content-title-container flex-container">
        <h6 class="title">Recent Orders</h6>
        <button class="generate">
          <i class="ri-file-list-3-line align-middle"></i>
          <span class="generate-text">Generate Report</span>
        </button>
      </div>
      <div class="orders-table-container">
        <table class="orders-table">
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
            <tr>
              <td>
                <a href="/" class="order-id">
                  {" "}
                  #VZ2112{" "}
                </a>
              </td>
              <td>
                <div class="order-customer">
                  <img
                    src="./assets/images/avatar.jpeg"
                    alt="Customer avatar"
                    class="order-customer-img"
                  />
                  <span class="order-customer-name">Alex Smith</span>
                </div>
              </td>
              <td>
                <span class="order-product">Clothes</span>
              </td>
              <td>
                <span class="order-amount">$109.00</span>
              </td>
              <td>
                <span class="order-vendor">Zoetic Fashion</span>
              </td>
              <td>
                <span class="order-status success">Paid</span>
              </td>
              <td>
                <div class="order-rating-container">
                  <span class="order-rating">5.0</span>
                  <span class="order-votes">(61 votes)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/" class="order-id">
                  {" "}
                  #VZ2112{" "}
                </a>
              </td>
              <td>
                <div class="order-customer">
                  <img
                    src="./assets/images/avatar.jpeg"
                    alt="Customer avatar"
                    class="order-customer-img"
                  />
                  <span class="order-customer-name">Alex Smith</span>
                </div>
              </td>
              <td>
                <span class="order-product">Clothes</span>
              </td>
              <td>
                <span class="order-amount">$109.00</span>
              </td>
              <td>
                <span class="order-vendor">Zoetic Fashion</span>
              </td>
              <td>
                <span class="order-status pending">Pending</span>
              </td>
              <td>
                <div class="order-rating-container">
                  <span class="order-rating">5.0</span>
                  <span class="order-votes">(61 votes)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/" class="order-id">
                  {" "}
                  #VZ2112{" "}
                </a>
              </td>
              <td>
                <div class="order-customer">
                  <img
                    src="./assets/images/avatar.jpeg"
                    alt="Customer avatar"
                    class="order-customer-img"
                  />
                  <span class="order-customer-name">Alex Smith</span>
                </div>
              </td>
              <td>
                <span class="order-product">Clothes</span>
              </td>
              <td>
                <span class="order-amount">$109.00</span>
              </td>
              <td>
                <span class="order-vendor">Zoetic Fashion</span>
              </td>
              <td>
                <span class="order-status success">Paid</span>
              </td>
              <td>
                <div class="order-rating-container">
                  <span class="order-rating">5.0</span>
                  <span class="order-votes">(61 votes)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/" class="order-id">
                  {" "}
                  #VZ2112{" "}
                </a>
              </td>
              <td>
                <div class="order-customer">
                  <img
                    src="./assets/images/avatar.jpeg"
                    alt="Customer avatar"
                    class="order-customer-img"
                  />
                  <span class="order-customer-name">Alex Smith</span>
                </div>
              </td>
              <td>
                <span class="order-product">Clothes</span>
              </td>
              <td>
                <span class="order-amount">$109.00</span>
              </td>
              <td>
                <span class="order-vendor">Zoetic Fashion</span>
              </td>
              <td>
                <span class="order-status unpaid">Unpaid</span>
              </td>
              <td>
                <div class="order-rating-container">
                  <span class="order-rating">5.0</span>
                  <span class="order-votes">(61 votes)</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/" class="order-id">
                  {" "}
                  #VZ2112{" "}
                </a>
              </td>
              <td>
                <div class="order-customer">
                  <img
                    src="./assets/images/avatar.jpeg"
                    alt="Customer avatar"
                    class="order-customer-img"
                  />
                  <span class="order-customer-name">Alex Smith</span>
                </div>
              </td>
              <td>
                <span class="order-product">Clothes</span>
              </td>
              <td>
                <span class="order-amount">$109.00</span>
              </td>
              <td>
                <span class="order-vendor">Zoetic Fashion</span>
              </td>
              <td>
                <span class="order-status success">Paid</span>
              </td>
              <td>
                <div class="order-rating-container">
                  <span class="order-rating">5.0</span>
                  <span class="order-votes">(61 votes)</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
