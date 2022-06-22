import React from "react";
import styles from "./styles.module.scss";

export const TITLE_VARIANTS = {
  primary: "primary",
  secondary: "secondary",
  small: "small",
  middle: "middle",
  neutral: "neutral",
};

export const Title = ({ variant, children }) => (
  <>
    {variant === TITLE_VARIANTS.secondary && (
      <h3 className={styles.secondary}>{children}</h3>
    )}
    {variant === TITLE_VARIANTS.small ||
      (variant === TITLE_VARIANTS.neutral && (
        <h6 className={styles[variant]}>{children}</h6>
      ))}
    {variant === TITLE_VARIANTS.middle && (
      <h5 className={styles[variant]}>{children}</h5>
    )}
    {variant === TITLE_VARIANTS.primary && (
      <h4 className={styles[variant]}>{children}</h4>
    )}
  </>
);
