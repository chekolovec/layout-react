import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import {
  ColoredText,
  COLORED_TEXT_VARIANTS,
} from "../../baseComponents/ColoredText";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import "./styles.scss";

export const BestProductsItem = ({
  name,
  date,
  price,
  stock,
  amount,
  outOfStock,
}) => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.defaultSmall}
      spaceBetween
      alignCenter
      borderSolid
      className="best-products-item"
    >
      <Container alignCenter flex>
        <Container className="product-img-container">
          <Img
            src="./assets/images/product.png"
            alt="Product"
            variant={IMG_VARIANTS.secondary}
            width={40}
            height={40}
          />
        </Container>
        <Container>
          <Button
            variant={BUTTON_VARIANTS.productLink}
            className="sellers-info-link"
          >
            {name}
          </Button>
          <Text variant={TEXT_VARIANTS.small}>{date}</Text>
        </Container>
      </Container>
      <Container>
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.primary}
          weight={TITLE_WEIGHTS.normal}
        >
          {price}
        </Title>
        <Text variant={TEXT_VARIANTS.small}>Price</Text>
      </Container>
      <Container>
        {outOfStock ? (
          <ColoredText
            className="product-info-out"
            variant={COLORED_TEXT_VARIANTS.warning}
          >
            Out of stock
          </ColoredText>
        ) : (
          <Title
            variant={TITLE_VARIANTS.primary}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.normal}
          >
            {stock}
          </Title>
        )}
        <Text variant={TEXT_VARIANTS.small}>Stock</Text>
      </Container>
      <Container>
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.primary}
          weight={TITLE_WEIGHTS.normal}
        >
          {amount}
        </Title>
        <Text variant={TEXT_VARIANTS.small}>Amount</Text>
      </Container>
    </Container>
  );
};
