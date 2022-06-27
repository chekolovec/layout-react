import React from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../ColoredText";
import { Container } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { Span, SPAN_VARIANTS } from "../Span";
import { Td } from "../Td";
import { Text, TEXT_COLORS } from "../Text";
import { Tr } from "../Tr";
import "./styles.scss";

const STATUS_CLASSES = {
  Paid: "success",
  Pending: "pending",
  Unpaid: "unpaid",
};

export const OrdersItem = ({
  id,
  name,
  img,
  product,
  price,
  vendor,
  status,
  rating,
  votes,
}) => {
  return (
    <Tr className="recent-orders-item">
      <Td>
        <Button variant={BUTTON_VARIANTS.link} className="order-id">
          {id}
        </Button>
      </Td>
      <Td>
        <Container flex alignCenter>
          <Img variant={IMG_VARIANTS.primary} src={img} alt="Customer avatar" />
          <Text color={TEXT_COLORS.primary} className="customer-name">
            {name}
          </Text>
        </Container>
      </Td>
      <Td>
        <Text color={TEXT_COLORS.primary}>{product}</Text>
      </Td>
      <Td>
        <Text color={TEXT_COLORS.success}>{price}</Text>
      </Td>
      <Td>
        <Text color={TEXT_COLORS.primary}>{vendor}</Text>
      </Td>
      <Td>
        <ColoredText
          variant={COLORED_TEXT_VARIANTS.medium}
          color={COLORED_TEXT_COLORS[STATUS_CLASSES[status]]}
        >
          {status}
        </ColoredText>
      </Td>
      <Td>
        <Container>
          <Text className="rating-text">
            {rating}
            <Span variant={SPAN_VARIANTS.primary}> ({votes} votes)</Span>
          </Text>
        </Container>
      </Td>
    </Tr>
  );
};
