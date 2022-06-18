import React from "react";
import "./styles.scss";

export const ProductReview = ({ name, text, score, img, index }) => {
  return (
    <div className="reviews-item" key={index}>
      <img src={img} alt="avatar" className="reviews-item-img" />
      <div className="reviews-info">
        <p className="reviews-text">{text}</p>
        <div className="reviews-rating">
          {Array(5)
            .fill()
            .map((_, index) => {
              if (score - index * 2 > 1) {
                return <i className="ri-star-fill" key={index}></i>;
              }
              if (score - index * 2 === 1) {
                return <i className="ri-star-half-fill" key={index}></i>;
              }
              return <i className="ri-star-line" key={index}></i>;
            })}
        </div>
        <p className="reviews-author">
          - by <i>{name}</i>
        </p>
      </div>
    </div>
  );
};
