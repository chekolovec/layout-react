import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { OrdersItem } from "../OrdersItem";
import { Table } from "../../baseComponents/Table";
import { Tbody } from "../../baseComponents/Tbody";
import { Th } from "../../baseComponents/Th";
import { Thead } from "../../baseComponents/Thead";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import { Tr } from "../../baseComponents/Tr";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";

const DATA = [
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Pending",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Unpaid",
    rating: "5.0",
    votes: "61",
  },
  {
    id: "#VZ2112",
    name: "Alex Smith",
    img: "./assets/images/avatar.jpeg",
    product: "Clothes",
    price: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61",
  },
];

export const RecentOrders = () => {
  return (
    <Container variant={CONTAINER_VARIANTS.contentSection}>
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
          Recent Orders
        </Title>
        <Button
          variant={BUTTON_VARIANTS.secondary}
          iconLeft={
            <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.file} />
          }
        >
          Generate Report
        </Button>
      </Container>
      <Container width100 flex1>
        <Table>
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer</Th>
              <Th>Product</Th>
              <Th>Amount</Th>
              <Th>Vendor</Th>
              <Th>Status</Th>
              <Th>Rating</Th>
            </Tr>
          </Thead>
          <Tbody>
            {DATA.map(
              (
                {
                  id,
                  name,
                  img,
                  product,
                  price,
                  vendor,
                  status,
                  rating,
                  votes,
                },
                index
              ) => (
                <OrdersItem
                  id={id}
                  name={name}
                  img={img}
                  product={product}
                  price={price}
                  vendor={vendor}
                  status={status}
                  rating={rating}
                  votes={votes}
                  key={index}
                />
              )
            )}
          </Tbody>
        </Table>
      </Container>
    </Container>
  );
};
