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

export const Text = ({
  children,
  variant = TEXT_VARIANTS.default,
  align,
  fontWeight,
  className,
}) => {
  return (
    <p
      className={classNames(className, variant)}
      style={{ textAlign: align, fontWeight }}
    >
      {children}
    </p>
  );
};
