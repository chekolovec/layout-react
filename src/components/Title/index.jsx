import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const TITLE_VARIANTS = {
  primary: "primaryTitle",
  secondary: "secondaryTitle",
  small: "smallTitle",
  middle: "middleTitle",
  neutral: "neutralTitle",
  subtitle: "subTitle",
  menu: "menu",
};

export const TITLE_COLORS = {
  WHITE: "whiteTitle",
};

export const Title = ({ variant, children, color, textAlign }) => (
  <h3 className={classNames("Title", variant, { color })} style={{ textAlign }}>
    {children}
  </h3>
);
