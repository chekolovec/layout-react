import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../../baseComponents/ColoredText";
import { Container } from "../../baseComponents/Container";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { Span, SPAN_VARIANTS } from "../../baseComponents/Span";
import { Td } from "../../baseComponents/Td";
import { Text, TEXT_COLORS } from "../../baseComponents/Text";
import { Tr } from "../../baseComponents/Tr";
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
