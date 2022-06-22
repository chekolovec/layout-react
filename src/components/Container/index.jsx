import React from "react";
import styles from "./styles.module.scss";

export const CONTAINER_VARIANTS = {
  default: "default",
  secondary: "secondary",
  flex: "flex",
  flex1: "flex1",
  small: "small",
  medium: "medium",
  big: "big",
  column: "column",
  alignCenter: "alignCenter",
  relative: "relative",
};

export const Container = ({
  children,
  variant = CONTAINER_VARIANTS.default,
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
}) => (
  <div
    className={styles[variant]}
    style={{ paddingRight, paddingTop, paddingBottom, paddingLeft }}
  >
    {children}
  </div>
);
