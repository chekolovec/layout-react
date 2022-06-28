import React from "react";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { Text, TEXT_VARIANTS } from "../Text";
import "./styles.scss";

export const ProductReview = ({ name, text, score, img, index }) => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.default}
      className="product-review-item"
      flex
      key={index}
    >
      <Img variant={IMG_VARIANTS.big} src={img} alt="avatar" />
      <Container className="item-info">
        <Text variant={TEXT_VARIANTS.secondary} className="item-text">
          {text}
        </Text>
        <Container flex className="item-rating">
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
        </Container>
        <Text variant={TEXT_VARIANTS.secondary} className="item-author">
          - by <i>{name}</i>
        </Text>
      </Container>
    </Container>
  );
};
