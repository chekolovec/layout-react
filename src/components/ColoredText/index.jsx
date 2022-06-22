import React from "react";
import styles from "./styles.module.scss";

export const COLORED_TEXT_VARIANTS = {
  default: "default",
  small: "small",
};

export const COLORED_TEXT_COLORS = {
  info: "info",
  success: "success",
  failure: "failure",
};

export const ColoredText = ({
  children,
  variant = COLORED_TEXT_VARIANTS.default,
  color = COLORED_TEXT_COLORS.info,
}) => <span className={`${styles[variant]} ${styles[color]}`}>{children}</span>;
