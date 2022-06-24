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
}) => (
  <div
    className={`${variant ? styles[variant] : ""} ${flex ? styles.flex : ""} ${
      flex1 ? styles.flex1 : ""
    } ${spaceBetween ? styles.spaceBetween : ""} ${
      column ? styles.column : ""
    } ${borderDashed ? styles.borderDashed : ""} ${
      borderSolid ? styles.borderSolid : ""
    } ${alignCenter ? styles.alignCenter : ""} ${
      relative ? styles.relative : ""
    } ${height100 ? styles.height100 : ""} ${
      backgroundSecondary ? styles.backgroundSecondary : ""
    } ${width100 ? styles.width100 : ""} ${scroll ? styles.scroll : ""} ${
      hover ? styles.hover : ""
    }`}
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
