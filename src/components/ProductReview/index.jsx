import React from "react";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import { Stars } from "../Stars";
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
          <Stars score={score} />
        </Container>
        <Text variant={TEXT_VARIANTS.secondary} className="item-author">
          - by <i>{name}</i>
        </Text>
      </Container>
    </Container>
  );
};
