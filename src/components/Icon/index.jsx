import React from "react";
import styles from "./styles.module.scss";

export const ICON_VARIANTS = {
  default: "default",
};

export const ICON_BACKGROUND = {
  reward: "reward",
  success: "success",
};

export const Icon = ({
  variant = ICON_VARIANTS.default,
  children,
  background,
}) => (
  <div className={`${styles[variant]} ${styles[background]}`}>{children}</div>
);
