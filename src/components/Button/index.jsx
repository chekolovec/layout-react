import React from "react";
import { Text, TEXT_VARIANTS } from "../Text";
import styles from "./styles.module.scss";

export const BUTTON_VARIANTS = {
  default: "default",
  icon: "icon",
  list: "list",
  secondary: "secondary",
  grid: "grid",
  link: "link",
  primary: "primary",
};

export const COUNTER_VARIANTS = {
  defaultCounter: "defaultCounter",
  notificationCounter: "noticiationCounter",
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
}) => {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {variant === BUTTON_VARIANTS.icon && (
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
    </button>
  );
};
