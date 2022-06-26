import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const CONTAINER_VARIANTS = {
  default: "default",
  secondary: "secondary",
  small: "small",
  medium: "medium",
  big: "big",
};

export const Container = ({
  children,
  variant,
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  flex,
  flex1,
  spaceBetween,
  column,
  borderDashed,
  borderSolid,
  alignCenter,
  relative,
  width100,
  height100,
  backgroundSecondary,
  maxHeight,
  scroll,
  hover,
  className,
}) => (
  <div
    className={classNames(className, styles[variant], {
      [styles.flex]: flex,
      [styles.flex1]: flex1,
      [styles.spaceBetween]: spaceBetween,
      [styles.column]: column,
      [styles.borderDashed]: borderDashed,
      [styles.borderSolid]: borderSolid,
      [styles.alignCenter]: alignCenter,
      [styles.relative]: relative,
      [styles.height100]: height100,
      [styles.backgroundSecondary]: backgroundSecondary,
      [styles.width100]: width100,
      [styles.scroll]: scroll,
      [styles.hover]: hover,
    })}
    style={{
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      maxHeight,
    }}
  >
    {children}
  </div>
);
