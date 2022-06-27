import React from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { OrdersItem } from "../OrdersItem";
import { Table } from "../Table";
import { Tbody } from "../Tbody";
import { Th } from "../Th";
import { Thead } from "../Thead";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import { Tr } from "../Tr";
import "./styles.scss";

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
    <Container
      variant={CONTAINER_VARIANTS.contentSection}
      className="recent-orders"
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
          Recent Orders
        </Title>
        <Button
          variant={BUTTON_VARIANTS.secondary}
          iconLeft={<i className="ri-file-list-3-line align-middle"></i>}
        >
          Generate Report
        </Button>
      </Container>
      <Container width100 flex1 className="table-container">
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
