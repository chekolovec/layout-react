import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.scss";

export const MenuSection = ({ active, open, items, name, iconLeft }) => {
  const [menuOpen, toggleMenu] = useState(open || false);
  return (
    <>
      <Button
        className={styles.default}
        iconLeft={iconLeft}
        active={active}
        iconRight={
          menuOpen ? (
            <i className="ri-arrow-down-s-line"></i>
          ) : (
            <i className="ri-arrow-right-s-line"></i>
          )
        }
        variant={BUTTON_VARIANTS.menuTitle}
        onClick={() => toggleMenu(!menuOpen)}
      >
        {name}
      </Button>
      {menuOpen && (
        <Container className={styles.menuItemsWrapper} paddingLeft={28}>
          {items.map((item) => (
            <Button key={item.title} variant={BUTTON_VARIANTS.menuItem}>
              {item.title}
            </Button>
          ))}
        </Container>
      )}
    </>
  );
};
