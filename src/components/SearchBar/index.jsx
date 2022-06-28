import React from "react";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Input } from "../Input";
import "./styles.scss";

export const SearchBar = () => {
  return (
    <Container flex alignCenter className="search-bar">
      <Container
        variant={CONTAINER_VARIANTS.default}
        className="burger-wrapper"
      >
        <Container className="burger-line" />
        <Container className="burger-line" />
        <Container className="burger-line" />
      </Container>
      <Container alignCenter flex className="search-wrapper">
        <i className="mdi mdi-magnify search-widget-icon search-icon"></i>
        <Input type="text" placeholder="Search..." />
      </Container>
    </Container>
  );
};
