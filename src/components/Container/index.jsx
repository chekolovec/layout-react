import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const CONTAINER_VARIANTS = {
  default: "default",
  defaultSmall: "defaultSmall",
  secondary: "secondary",
  small: "small",
  medium: "medium",
  middle: "middle",
  big: "big",
  large: "large",
  contentSection: "contentSection",
  vertical12: "vertical12",
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
  justifyCenter,
  column,
  borderDashed,
  borderSolid,
  alignCenter,
  alignEnd,
  relative,
  width100,
  height100,
  backgroundSecondary,
  maxHeight,
  scroll,
  hover,
  flexWrap,
  width,
  className,
}) => (
  <div
    className={classNames(className, styles[variant], {
      [styles.flex]: flex,
      [styles.flex1]: flex1,
      [styles.spaceBetween]: spaceBetween,
      [styles.justifyCenter]: justifyCenter,
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
      [styles.flexWrap]: flexWrap,
      [styles.alignEnd]: alignEnd,
    })}
    style={{
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      maxHeight,
      width,
    }}
  >
    {children}
  </div>
);
