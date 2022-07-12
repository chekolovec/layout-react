import classNames from "classnames";
import React from "react";
import {
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
} from "../../baseComponents/Button";
import { Calendar } from "../Calendar";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Text } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import "./styles.scss";

const TOTAL_TABS = [
  {
    title: "TOTAL EARNINGS",
    trend: "positive",
    change: "+16.24 %",
    price: "$559.25k",
    linkText: "View net earnings",
    icon: "bx:dollar-circle",
    iconColor: "earning",
  },
  {
    title: "ORDERS",
    trend: "negative",
    change: "-3.57 %",
    price: "36,894",
    linkText: "View all orders",
    icon: "clarity:shopping-bag-line",
    iconColor: "orders",
  },
  {
    title: "CUSTOMERS",
    trend: "positive",
    change: "+29.08 %",
    price: "183.35M",
    linkText: "See details",
    icon: "carbon:user-avatar",
    iconColor: "customers",
  },
  {
    title: "MY BALANCE",
    change: "+0.00 %",
    price: "$165.89k",
    linkText: "Withdraw money",
    icon: "bx:wallet",
    iconColor: "balance",
  },
];

export const Total = () => {
  return (
    <Container className="total" flex1>
      <Container
        flex
        spaceBetween
        variant={CONTAINER_VARIANTS.vertical12}
        paddingBottom={20}
      >
        <Container>
          <Title
            variant={TITLE_VARIANTS.middle}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.heavy}
            className="total-title"
          >
            Good Morning, Anna!
          </Title>
          <Text className="total-subtitle">
            Here's what's happening with your store today.
          </Text>
        </Container>
        <Container flex>
          <Container flex>
            <Calendar />
          </Container>
          <Container alignCenter flex paddingLeft={10}>
            <Button
              variant={BUTTON_VARIANTS.primary}
              color={BUTTON_COLORS.success}
              alignItems="center"
              flex
            >
              <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.scope} />
              Add product
            </Button>
          </Container>
          <Container
            flex
            alignCenter
            className="total-recent-wrapper"
            paddingLeft={10}
          >
            <Button
              variant={BUTTON_VARIANTS.primary}
              color={BUTTON_COLORS.cian}
            >
              <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.pulse} />
            </Button>
          </Container>
        </Container>
      </Container>
      <Container>
        <Container flexWrap flex>
          {TOTAL_TABS.map((tab) => (
            <Container
              variant={CONTAINER_VARIANTS.default}
              flex1
              className="total-box"
              key={tab.title}
            >
              <Container flex spaceBetween paddingBottom={20}>
                <Title
                  variant={TITLE_VARIANTS.primary}
                  weight={TITLE_WEIGHTS.heavy}
                  color={TITLE_COLORS.neutral}
                  className="box-title"
                >
                  {tab.title}
                </Title>

                <Container
                  flex
                  alignCenter
                  className={classNames("price-change-container", {
                    success: tab.trend === "positive",
                    failure: tab.trend === "negative",
                  })}
                >
                  {tab.trend === "positive" && (
                    <Icon
                      variant={ICON_VARIANTS.italic}
                      name={ICON_NAMES.arrowPositive}
                    />
                  )}
                  {tab.trend === "negative" && (
                    <Icon
                      variant={ICON_VARIANTS.italic}
                      name={ICON_NAMES.arrowNegative}
                    />
                  )}
                  <Text className="price-change-text">{tab.change}</Text>
                </Container>
              </Container>
              <Container spaceBetween flex alignEnd>
                <Container>
                  <Container paddingBottom={25}>
                    <Title
                      variant={TITLE_VARIANTS.large}
                      weight={TITLE_WEIGHTS.bold}
                      color={TITLE_COLORS.primary}
                    >
                      {tab.price}
                    </Title>
                  </Container>

                  <Button variant={BUTTON_VARIANTS.linkUnderlined}>
                    {tab.linkText}
                  </Button>
                </Container>
                <Icon
                  variant={ICON_VARIANTS.primary}
                  background={tab.iconColor}
                >
                  {tab.icon}
                </Icon>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};
