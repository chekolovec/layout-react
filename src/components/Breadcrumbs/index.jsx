import React from "react";
import { Button } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
} from "../../baseComponents/Title";
import "./styles.scss";

export const Breadcrumbs = ({ mainRoute, secondaryRoutes = [] }) => {
  return (
    <Container
      flex
      spaceBetween
      flex1
      variant={CONTAINER_VARIANTS.large}
      alignCenter
      className="breadcrumbs-container"
    >
      <Title
        variant={TITLE_VARIANTS.secondary}
        color={TITLE_COLORS.primary}
        className="page-title"
      >
        {mainRoute}
      </Title>
      <Container flex alignCenter>
        <Button className="breadcrumbs-main">{mainRoute}</Button>
        {secondaryRoutes.map((route) => (
          <Container flex key={route}>
            <Icon
              variant={ICON_VARIANTS.italic}
              name={ICON_NAMES.arrowRight}
              className="breadcrumbs-arrow"
            />
            <Text variant={TEXT_VARIANTS.small} className="breadcrumbs-second">
              {route}
            </Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
