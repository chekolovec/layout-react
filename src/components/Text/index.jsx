import React from "react";
import styles from "./styles.module.scss";

export const TEXT_VARIANTS = {
  default: "default",
  small: "small",
  medium: "medium",
  secondary: "secondary",
  noWrap: "noWrap",
};

export const Text = ({ children, variant = TEXT_VARIANTS.default }) => {
  return <p className={styles[variant]}>{children}</p>;
};
