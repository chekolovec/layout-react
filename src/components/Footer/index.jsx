import React from "react";
import { Container } from "../../baseComponents/Container";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import "./styles.scss";

export const Footer = () => {
  return (
    <Container flex spaceBetween className="footer">
      <Text variant={TEXT_VARIANTS.small} className="footer-text">
        2022 © Velzon.
      </Text>
      <Text className="footer-text">Design & Develop by Themesbrand</Text>
    </Container>
  );
};
