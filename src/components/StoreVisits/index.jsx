import React from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img } from "../Img";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import "./styles.scss";

export const StoreVisits = () => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.contentSection}
      className="store-visits"
    >
      <Container
        variant={CONTAINER_VARIANTS.default}
        flex
        spaceBetween
        alignCenter
        borderSolid
      >
        <Title
          variant={TITLE_VARIANTS.secondary}
          weight={TITLE_WEIGHTS.heavy}
          color={TITLE_COLORS.primary}
        >
          Store Visits by Source
        </Title>

        <Button variant={BUTTON_VARIANTS.transparent}>
          <Text variant={TEXT_VARIANTS.small} className="sort-text">
            Report
            <i className="mdi mdi-chevron-down ms-1"></i>
          </Text>
        </Button>
      </Container>
      <Container>
        <Img
          src="./assets/images/visits.png"
          alt="Visits graph"
          className="visits-img"
        />
      </Container>
    </Container>
  );
};
