import React from "react";
import "./styles.scss";
import { TopSellersItem } from "../TopSellersItem";
import { Pagination } from "../Pagination";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Text, TEXT_VARIANTS } from "../Text";

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
            <i className="mdi mdi-chevron-down ms-1"></i>
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
