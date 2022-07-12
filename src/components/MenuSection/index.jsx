import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
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
            <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.arrowDown} />
          ) : (
            <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.arrowRight} />
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
