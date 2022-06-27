import React from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import "./styles.scss";

export const TopSellersItem = ({
  img,
  name,
  author,
  field,
  number,
  price,
  percent,
}) => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.defaultSmall}
      spaceBetween
      alignCenter
      borderSolid
      className="top-sellers-item"
    >
      <Container flex alignCenter>
        <Container className="img-container">
          <Img
            src={img}
            alt="Sellers"
            variant={IMG_VARIANTS.secondaryTransparent}
            width={40}
            height={40}
          />
        </Container>
        <Container column justifyCenter flex>
          <Button
            variant={BUTTON_VARIANTS.productLink}
            className="sellers-info-link"
          >
            {name}
          </Button>
          <Text variant={TEXT_VARIANTS.small}>{author}</Text>
        </Container>
      </Container>
      <Container>
        <Text variant={TEXT_VARIANTS.small}>{field}</Text>
      </Container>
      <Container>
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.primary}
          weight={TITLE_WEIGHTS.normal}
        >
          {number}
        </Title>
        <Text variant={TEXT_VARIANTS.small}>Stock</Text>
      </Container>
      <Container>
        <Text variant={TEXT_VARIANTS.small}>{price}</Text>
      </Container>
      <Container>
        <Title
          variant={TITLE_VARIANTS.secondary}
          color={TITLE_COLORS.primary}
          weight={TITLE_WEIGHTS.heavy}
        >
          {percent}
        </Title>
      </Container>
      <Container className="rating-container" flex justifyCenter alignCenter>
        <i className="ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon"></i>
      </Container>
    </Container>
  );
};
