import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
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
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.barChart} />
      </Container>
    </Container>
  );
};
