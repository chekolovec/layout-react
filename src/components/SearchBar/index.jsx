import React from "react";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Input } from "../../baseComponents/Input";
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
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.search} />
        <Input type="text" placeholder="Search..." />
      </Container>
    </Container>
  );
};
