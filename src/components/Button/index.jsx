import classNames from "classnames";
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
  linkUnderlined: "linkUnderlined",
  primary: "primary",
  primaryDark: "primaryDark",
  tab: "tab",
  menuTitle: "menuTitle",
  menuItem: "menuItem",
  selector: "selector",
  transparent: "transparent",
  productLink: "productLink",
  pagination: "pagination",
};

export const COUNTER_VARIANTS = {
  defaultCounter: "defaultCounter",
  notificationCounter: "noticiationCounter",
};

export const BUTTON_COLORS = {
  success: "success",
  cian: "cian",
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
  inactive,
  uppercase,
  className,
}) => {
  return (
    <button
      className={classNames(className, styles[variant], styles[color], {
        [styles.flex]: flex,
        [styles.flex1]: flex1,
        [styles.height100]: height100,
        [styles.active]: active,
        [styles.inactive]: inactive,
        [styles.uppercase]: uppercase,
      })}
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
      {variant === BUTTON_VARIANTS.menuTitle && (
        <div className={styles.menuTitleWrapper}>
          {iconLeft}
          <div className={styles.menuTitleDesktop}>
            <h3>{children}</h3>
            {iconRight}
          </div>
        </div>
      )}
      {variant === BUTTON_VARIANTS.menuItem && children}
      {variant === BUTTON_VARIANTS.link && <span>{children}</span>}
      {variant === BUTTON_VARIANTS.linkUnderlined && children}
      {variant === BUTTON_VARIANTS.default && children}
      {variant === BUTTON_VARIANTS.primary && children}
      {variant === BUTTON_VARIANTS.primaryDark && children}
      {variant === BUTTON_VARIANTS.tab && children}
      {variant === BUTTON_VARIANTS.selector && children}
      {variant === BUTTON_VARIANTS.transparent && children}
      {variant === BUTTON_VARIANTS.productLink && children}
      {variant === BUTTON_VARIANTS.pagination && children}
    </button>
  );
};
