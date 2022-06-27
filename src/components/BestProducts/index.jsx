import React from "react";
import { BestProductsItem } from "../BestProductsItem";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Pagination } from "../Pagination";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import "./styles.scss";

const PRODUCTS = [
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    amount: "$1,798",
    outOfStock: true,
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    amount: "$1,798",
    outOfStock: true,
  },
  {
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: "$29.00",
    stock: "510",
    amount: "$1,798",
  },
];

export const BestProducts = () => {
  return (
    <Container
      className="best-products"
      variant={CONTAINER_VARIANTS.contentSection}
      flex1
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
          Best Selling Products
        </Title>
        <Button variant={BUTTON_VARIANTS.transparent}>
          <Text variant={TEXT_VARIANTS.small} className="sort-text sort-label">
            SORT BY:{" "}
          </Text>
          <Text variant={TEXT_VARIANTS.small} className="sort-text">
            Today
            <i className="mdi mdi-chevron-down ms-1"></i>
          </Text>
        </Button>
      </Container>
      <Container>
        {PRODUCTS.map(
          ({ name, price, amount, outOfStock, date, stock }, index) => (
            <BestProductsItem
              name={name}
              price={price}
              amount={amount}
              outOfStock={outOfStock}
              date={date}
              key={index}
              stock={stock}
            />
          )
        )}
      </Container>
      <Pagination itemsNumber={5} totalNumber={25} current={2} last={5} />
    </Container>
  );
};
