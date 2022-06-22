import React from "react";
import styles from "./styles.module.scss";

export const BACKGROUND_VARIANTS = {
  default: "default",
};

export const BackgroundWrapper = ({
  children,
  variant = BACKGROUND_VARIANTS.default,
}) => <view className={styles[variant]}>{children}</view>;
