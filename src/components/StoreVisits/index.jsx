import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Img } from "../../baseComponents/Img";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
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
            <Icon
              variant={ICON_VARIANTS.italic}
              name={ICON_NAMES.chevronDown}
            />
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
