import React, { useState } from "react";
import "./styles.scss";

export const Cart = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <div className="header-button-container">
      <button
        className="header-button-wrapper "
        onClick={() => toggleModal(!modalShown)}
      >
        <span
          className="iconify header-button"
          data-icon="bx:shopping-bag"
        ></span>
        <div className="cart counter-wrapper">
          <span className="cart counter">5</span>
        </div>
      </button>
      <div className={`cart-popup ${modalShown ? "active" : ""} `}>
        <div className="top">
          <h6 className="top-title">My cart</h6>
          <button className="top-button">5 items</button>
        </div>
        <div className="items-container">
          <div className="item">
            <img
              src="./assets/images/product.png"
              alt="Cart product"
              className="item-img"
            />
            <div className="item-name-container">
              <a className="item-name" href="//">
                Branded T-Shirts
              </a>
              <p className="item-quantity">Quantity: 10 x $32</p>
            </div>
            <span className="item-price">$320</span>
            <button className="item-delete">
              <i className="ri-close-fill fs-16"></i>
            </button>
          </div>
          <div className="item">
            <img
              src="./assets/images/product.png"
              alt="Cart product"
              className="item-img"
            />
            <div className="item-name-container">
              <a className="item-name" href="/">
                Branded T-Shirts
              </a>
              <p className="item-quantity">Quantity: 10 x $32</p>
            </div>
            <span className="item-price">$320</span>
            <button className="item-delete">
              <i className="ri-close-fill fs-16"></i>
            </button>
          </div>
          <div className="item">
            <img
              src="./assets/images/product.png"
              alt="Cart product"
              className="item-img"
            />
            <div className="item-name-container">
              <a className="item-name" href="/">
                Branded T-Shirts
              </a>
              <p className="item-quantity">Quantity: 10 x $32</p>
            </div>
            <span className="item-price">$320</span>
            <button className="item-delete">
              <i className="ri-close-fill fs-16"></i>
            </button>
          </div>
          <div className="item">
            <img
              src="./assets/images/product.png"
              alt="Cart product"
              className="item-img"
            />
            <div className="item-name-container">
              <a className="item-name" href="/">
                Branded T-Shirts
              </a>
              <p className="item-quantity">Quantity: 10 x $32</p>
            </div>
            <span className="item-price">$320</span>
            <button className="item-delete">
              <i className="ri-close-fill fs-16"></i>
            </button>
          </div>
          <div className="item">
            <img
              src="./assets/images/product.png"
              alt="Cart product"
              className="item-img"
            />
            <div className="item-name-container">
              <a className="item-name" href="/">
                Branded T-Shirts
              </a>
              <p className="item-quantity">Quantity: 10 x $32</p>
            </div>
            <span className="item-price">$320</span>
            <button className="item-delete">
              <i className="ri-close-fill fs-16"></i>
            </button>
          </div>
        </div>
        <div className="total">
          <div className="total-top">
            <h6 className="total-text">Total:</h6>
            <span className="total-price">$3399.00</span>
          </div>
          <button className="total-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
