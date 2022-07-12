import React from "react";
import { TopSellersItem } from "../TopSellersItem";
import { Pagination } from "../Pagination";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";

const DATA = [
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
  {
    img: "./assets/images/seller.png",
    name: "iTest Factory",
    author: "Oliver Tyler",
    field: "Bags and Wallets",
    number: "8547",
    price: "$541200",
    percent: "32%",
  },
];

export const TopSellers = () => {
  return (
    <Container
      className="top-sellers"
      flex1
      variant={CONTAINER_VARIANTS.contentSection}
    >
      <Container
        variant={CONTAINER_VARIANTS.default}
        flex
        spaceBetween
        alignCenter
        borderSolid
      >
        <Title
          variant={TITLE_VARIANTS.secondary}
          weight={TITLE_WEIGHTS.heavy}
          color={TITLE_COLORS.primary}
        >
          Top Sellers
        </Title>

        <Button variant={BUTTON_VARIANTS.transparent}>
          <Text variant={TEXT_VARIANTS.small} className="sort-text">
            Report
            <Icon
              variant={ICON_VARIANTS.italic}
              name={ICON_NAMES.chevronDown}
            />
          </Text>
        </Button>
      </Container>

      <Container>
        {DATA.map(
          ({ img, name, author, field, number, price, percent }, index) => (
            <TopSellersItem
              img={img}
              name={name}
              author={author}
              field={field}
              number={number}
              price={price}
              percent={percent}
              key={name + index}
            />
          )
        )}
      </Container>
      <Pagination itemsNumber={5} totalNumber={25} current={2} last={5} />
    </Container>
  );
};
