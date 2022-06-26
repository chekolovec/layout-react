import React from "react";
import styles from "./styles.module.scss";

export const BACKGROUND_VARIANTS = {
  default: "default",
  secondary: "secondary",
  white: "white",
  content: "content",
};

export const BackgroundWrapper = ({
  children,
  variant = BACKGROUND_VARIANTS.default,
}) => <div className={styles[variant]}>{children}</div>;
