import React from "react";
import { ProductReview } from "../ProductReview";
import { IMG_BACKGROUND_ENUM, RecentActivityItem } from "../RecentActivityItem";
import "./styles.scss";

const CUSTOMER_REVIEW_COLORS = {
  success: "success",
  pending: "pending",
  failure: "failure",
};

const RECENT_ACTIVITY_DATA = [
  {
    title: "Purchase by James Price",
    content: <p className="activity-text">Product noise evolve smartwatch</p>,
    date: "02:14 PM Today",
    img: <i className="ri-shopping-cart-2-line"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.success,
  },
  {
    title: "Added new style collection",
    content: (
      <>
        <p className="activity-text">By Nesta Technologies</p>
        <div className="activity-pictures-wrapper">
          <button className="activity-picture-button">
            <img
              src="./assets/images/clothes.png"
              alt="Activity"
              className="activity-picture"
            />
          </button>
          <button className="activity-picture-button">
            <img
              src="./assets/images/clothes.png"
              alt="Activity"
              className="activity-picture"
            />
          </button>
          <button className="activity-picture-button">
            <img
              src="./assets/images/clothes.png"
              alt="Activity"
              className="activity-picture"
            />
          </button>
        </div>
      </>
    ),
    date: "9:47 PM Yesterday",
    img: <i className="ri-stack-fill"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.failure,
  },
  {
    title: "Natasha Carey have liked the products",
    content: (
      <p className="activity-text">
        Allow users to like products in your WooCommerce store.
      </p>
    ),
    img: (
      <img
        src="./assets/images/avatar-2.jpeg"
        alt="Activity avatar"
        className="activity-avatar"
      />
    ),
    date: "25 Dec, 2021",
  },
  {
    title: (
      <>
        Today offers by
        <a href="/" className="activity-link">
          {" "}
          Digitech Galaxy{" "}
        </a>
      </>
    ),
    content: (
      <p className="activity-text">
        Offer is valid on orders of Rs.500 Or above for selected products only.
      </p>
    ),
    date: "12 Dec, 2021",
    img: <i className="mdi mdi-sale fs-14"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.offer,
  },
  {
    title: "Favoried Product",
    content: (
      <p className="activity-text">Esther James have favorited product.</p>
    ),
    date: "25 Nov, 2021",
    img: <i className="ri-bookmark-fill"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.failure,
  },
  {
    title: "Flash sale starting Tomorrow.",
    content: (
      <p className="activity-text">
        Flash sale by
        <a href="/" className="activity-link">
          {" "}
          Zoetic Fashion
        </a>
      </p>
    ),
    date: "22 Oct, 2021",
    img: <i className="mdi mdi-sale fs-14"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.offer,
  },
  {
    title: "Monthly sales report",
    content: (
      <p className="activity-text">
        <span className="activity-warning">2 days left</span>
        notification to submit the monthly sales report.
        <a href="/" className="activity-link-warning">
          Reports Builder
        </a>
      </p>
    ),
    date: "15 Oct",
    img: <i className="ri-line-chart-line"></i>,
    imgBackground: IMG_BACKGROUND_ENUM.report,
  },
  {
    title: "Frank Hook Commented",
    content: (
      <p className="activity-text comment">
        {
          '" A product that has reviews is more likable to be sold than a product. " >'
        }
      </p>
    ),
    date: "26 Aug, 2021",
    img: (
      <img
        src="./assets/images/avatar-3.jpeg"
        alt="Activity avatar"
        className="activity-avatar"
      />
    ),
    imgBackground: IMG_BACKGROUND_ENUM.report,
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Mobile & Accessories",
    amount: "10,294",
  },
  {
    title: "Desktop",
    amount: "6,256",
  },
  {
    title: "Electronics",
    amount: "3,479",
  },
  {
    title: "Home & Furniture",
    amount: "2,275",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
];

const PRODUCT_REVIEWS = [
  {
    name: "Nancy Martino",
    text: '" The product is very beautiful. I like it. "',
    score: 9,
    img: "./assets/images/avatar-2.jpeg",
  },
  {
    name: "Nancy Martino",
    text: '" Great product and looks great, lots of features. "',
    score: 8,
    img: "./assets/images/seller.png",
  },
];

const CUSTOMER_REVIEWS = [
  {
    name: "5 star ",
    percent: 60,
    amount: 2758,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "4 star ",
    percent: 50,
    amount: 1063,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "3 star ",
    percent: 40,
    amount: 997,
    color: CUSTOMER_REVIEW_COLORS.pending,
  },
  {
    name: "2 star ",
    percent: 4,
    amount: 227,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "1 star ",
    percent: 10,
    amount: 408,
    color: CUSTOMER_REVIEW_COLORS.failure,
  },
];

export const RightBar = () => {
  const renderCategoryItem = ({ title, amount, index }) => (
    <li className="categories-item" key={index}>
      <a href="/" className="categories-link">
        {title} <span>({amount})</span>
      </a>
    </li>
  );

  const renderCustomerReview = ({ name, percent, amount, color, index }) => (
    <div className="customer-progress-line" key={index}>
      <span className="line-name">{name}</span>
      <div className="line-visual">
        <div
          className={`line-visual-bar ${color}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className="line-score">{amount}</span>
    </div>
  );
  return (
    <div className="rightbar">
      <section className="recent-activity">
        <h6 className="rightbar-title">RECENT ACTIVITY</h6>
        <div className="activity-list">
          {RECENT_ACTIVITY_DATA.map(
            ({ title, content, date, img, imgBackground }, index, array) => (
              <RecentActivityItem
                title={title}
                content={content}
                date={date}
                img={img}
                imgBackground={imgBackground}
                key={index}
                last={index === array.length - 1}
              />
            )
          )}
        </div>
      </section>
      <section className="categories">
        <h6 className="rightbar-title">TOP 10 CATEGORIES</h6>
        <ol className="categories-list">
          {CATEGORY_ITEMS.map(({ title, amount }, index) =>
            renderCategoryItem({ title, amount, index })
          )}
        </ol>
        <div className="categories-all-container">
          <a href="/" className="categories-all">
            View all Categories
          </a>
        </div>
      </section>
      <section className="reviews">
        <h6 className="rightbar-title">PRODUCTS REVIEWS</h6>
        {PRODUCT_REVIEWS.map(({ name, text, img, score }, index) => (
          <ProductReview
            name={name}
            text={text}
            img={img}
            score={score}
            key={index}
          />
        ))}
      </section>
      <section className="customer">
        <h6 className="rightbar-title">CUSTOMER REVIEWS</h6>
        <div className="customer-total">
          <div className="stars-container">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <span className="stars-total">4.5 out of 5</span>
        </div>
        <p className="customer-total-text">Total 5.50k reviews</p>
        <div className="customer-progress-container">
          {CUSTOMER_REVIEWS.map(({ name, percent, amount, color }, index) =>
            renderCustomerReview({ name, percent, amount, color, index })
          )}
        </div>
      </section>
      <section className="invite-container">
        <img
          src="./assets/images/giftbox.png"
          alt="Invite"
          className="invite-img"
        />
        <h6 className="invite-title">Invite New Seller</h6>
        <p className="invite-text">
          Refer a new seller to us and earn $100 per refer.
        </p>
        <button className="invite-button">
          <div className="invite-icon-container">
            <i className="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2"></i>
          </div>
          <p className="invite-button-text">Invite now</p>
        </button>
      </section>
    </div>
  );
};
