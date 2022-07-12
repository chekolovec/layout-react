import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import "./styles.scss";

export const SalesLocations = () => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.contentSection}
      width={350}
      className="sales-locations"
    >
      <Container
        flex
        variant={CONTAINER_VARIANTS.default}
        spaceBetween
        alignCenter
        borderSolid
      >
        <Title
          variant={TITLE_VARIANTS.secondary}
          weight={TITLE_WEIGHTS.heavy}
          color={TITLE_COLORS.primary}
        >
          Sales by Locations
        </Title>
        <Button variant={BUTTON_VARIANTS.selector} inactive>
          Export Report
        </Button>
      </Container>
      <Container>
        <img
          src="./assets/images/map.png"
          alt="Map"
          className="sales-locations-picture"
        />
      </Container>
    </Container>
  );
};
