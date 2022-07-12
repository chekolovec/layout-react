import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const ICON_VARIANTS = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  italic: "italic",
};

export const ICON_BACKGROUND = {
  reward: "reward",
  success: "success",
  earning: "earning",
  orders: "orders",
  customers: "customers",
  balance: "balance",
  offer: "offer",
  report: "report",
};

export const ICON_NAMES = {
  badgeCheck: "bx bx-badge-check",
  clock: "mdi mdi-clock-outline",
  quote: "bx bx-message-square-dots",
  account: "mdi mdi-account-circle text-muted fs-16 align-middle me-1",
  message: "mdi mdi-message-text-outline text-muted fs-16 align-middle me-1",
  calendarCheck:
    "mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1",
  lifebuoy: "mdi mdi-lifebuoy text-muted fs-16 align-middle me-1",
  wallet: "mdi mdi-wallet text-muted fs-16 align-middle me-1",
  cog: "mdi mdi-cog-outline text-muted fs-16 align-middle me-1",
  lock: "mdi mdi-lock text-muted fs-16 align-middle me-1",
  logout: "mdi mdi-logout text-muted fs-16 align-middle me-1",
  chevronDown: "mdi mdi-chevron-down ms-1",
  arrowRight: "ri-arrow-right-s-line",
  arrowRightBig: "ri-arrow-right-line",
  calendar: "ri-calendar-2-line icon",
  close: "ri-close-fill fs-16",
  dashboard: "ri-dashboard-2-line",
  apps: "ri-apps-line",
  layout: "ri-layout-line",
  accountMenu: "ri-account-circle-line",
  pages: "ri-pages-line",
  rocket: "ri-rocket-line",
  pencil: "ri-pencil-ruler-2-line",
  stack: "ri-stack-line",
  honour: "ri-honour-line",
  fileList: "ri-file-list-3-line",
  layourGrid: "ri-layout-grid-line",
  pieChart: "ri-pie-chart-line",
  compasses: "ri-compasses-2-line",
  mapPin: "ri-map-pin-line",
  share: "ri-share-line",
  arrowDown: "ri-arrow-down-s-line",
  starFill: "ri-star-fill",
  starHalfFill: "ri-star-half-fill",
  star: "ri-star-line",
  file: "ri-file-list-3-line align-middle",
  shopping: "ri-shopping-cart-2-line",
  stackFill: "ri-stack-fill",
  sale: "mdi mdi-sale fs-14",
  bookmark: "ri-bookmark-fill",
  chart: "ri-line-chart-line",
  mailFill: "ri-mail-fill fs-16 me-2",
  search: "mdi mdi-magnify search-widget-icon search-icon",
  barChart:
    "ri-bar-chart-fill text-success fs-16 align-middle ms-2 sellers-info-icon",

  scope: "ri-add-circle-line align-middle me-1",
  pulse: "ri-pulse-line",
  arrowPositive: "ri-arrow-right-up-line fs-13",
  arrowNegative: "ri-arrow-right-down-line fs-13",
};

export const Icon = ({
  variant = ICON_VARIANTS.default,
  children,
  background,
  name,
  className,
}) => (
  <>
    {variant === ICON_VARIANTS.italic ? (
      <i className={classNames(className, name)}></i>
    ) : (
      <div className={classNames(styles[variant], styles[background])}>
        {variant === ICON_VARIANTS.default && children}
        {variant === ICON_VARIANTS.primary && (
          <span className="iconify " data-icon={children}></span>
        )}
        {variant === ICON_VARIANTS.secondary && children}
      </div>
    )}
  </>
);
