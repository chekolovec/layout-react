import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const TITLE_VARIANTS = {
  primary: "primaryTitle",
  secondary: "secondaryTitle",
  small: "smallTitle",
  middle: "middleTitle",
  large: "largeTitle",
  menu: "menu",
};

export const TITLE_WEIGHTS = {
  light: "lightWeight",
  normal: "normalWeight",
  heavy: "heavyWeight",
  bold: "boldWeight",
};

export const TITLE_COLORS = {
  white: "whiteColor",
  primary: "primaryColor",
  secondary: "secondaryColor",
  neutral: "neutralColor",
  success: "successColor",
};

export const Title = ({
  variant,
  children,
  color,
  textAlign,
  className,
  weight,
  uppercase,
}) => (
  <h3
    className={classNames(className, "Title", variant, color, weight, {
      uppercase,
    })}
    style={{ textAlign }}
  >
    {children}
  </h3>
);
