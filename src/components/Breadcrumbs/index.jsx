import React from "react";
import { Button } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS } from "../Title";
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
            <i className="ri-arrow-right-s-line breadcrumbs-arrow"></i>
            <Text variant={TEXT_VARIANTS.small} className="breadcrumbs-second">
              {route}
            </Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
