import React from "react";
import { Text, TEXT_VARIANTS } from "../Text";
import styles from "./styles.module.scss";

export const BUTTON_VARIANTS = {
  default: "default",
  icon: "icon",
  iconSquare: "iconSquare",
  list: "list",
  secondary: "secondary",
  grid: "grid",
  link: "link",
  primary: "primary",
  tab: "tab",
};

export const COUNTER_VARIANTS = {
  defaultCounter: "defaultCounter",
  notificationCounter: "noticiationCounter",
};

export const BUTTON_COLORS = {
  success: "success",
};

export const Button = ({
  variant = BUTTON_VARIANTS.default,
  children,
  onClick,
  iconName,
  counter,
  counterVariant = COUNTER_VARIANTS.defaultCounter,
  iconSrc,
  imgSrc,
  iconLeft,
  iconRight,
  flex,
  flex1,
  height100,
  active,
  color,
  alignItems,
}) => {
  return (
    <button
      className={`${styles[variant]} ${flex ? styles.flex : ""} ${
        flex1 ? styles.flex1 : ""
      } ${height100 ? styles.height100 : ""} ${active ? styles.active : ""} ${
        color ? styles[color] : ""
      }`}
      onClick={onClick}
      style={{ alignItems }}
    >
      {(variant === BUTTON_VARIANTS.icon ||
        variant === BUTTON_VARIANTS.iconSquare) && (
        <>
          {iconName ? (
            <span
              className={`iconify ${styles.iconInner}`}
              data-icon={iconName}
            ></span>
          ) : (
            children
          )}
          {counter && (
            <div
              className={`${styles.counterWrapper} ${styles[counterVariant]}`}
            >
              <span className={styles.counter}>{counter}</span>
            </div>
          )}
        </>
      )}
      {variant === BUTTON_VARIANTS.list && (
        <>
          {imgSrc && (
            <img src={imgSrc} alt="List item" className={styles.listImg} />
          )}
          {iconName && <i className={`${styles.listIcon} ${iconName}`}></i>}
          <Text variant={TEXT_VARIANTS.noWrap}>{children}</Text>
        </>
      )}
      {variant === BUTTON_VARIANTS.secondary && (
        <>
          {iconLeft}
          <span className={styles.secondaryText}>{children}</span>
          {iconRight}
        </>
      )}
      {variant === BUTTON_VARIANTS.grid && (
        <>
          <img src={iconSrc} alt="Button icon" />
          <span className={styles.gridTitle}>{children}</span>
        </>
      )}
      {variant === BUTTON_VARIANTS.link && <span>{children}</span>}
      {variant === BUTTON_VARIANTS.default && children}
      {variant === BUTTON_VARIANTS.primary && children}
      {variant === BUTTON_VARIANTS.tab && children}
    </button>
  );
};
