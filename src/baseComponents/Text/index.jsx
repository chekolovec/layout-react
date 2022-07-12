import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const TEXT_VARIANTS = {
  default: "defaultText",
  small: "smallText",
  medium: "mediumText",
  secondary: "secondaryText",
  noWrap: "noWrapText",
};

export const TEXT_COLORS = {
  primary: "primaryTextColor",
  success: "successTextColor",
};

export const Text = ({
  children,
  variant = TEXT_VARIANTS.default,
  align,
  fontWeight,
  className,
  color,
}) => {
  return (
    <p
      className={classNames("Text", className, variant, color)}
      style={{ textAlign: align, fontWeight }}
    >
      {children}
    </p>
  );
};
