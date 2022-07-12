import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
} from "../../baseComponents/ColoredText";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { ModalContainer } from "../../baseComponents/ModalContainer";
import { ScrollContainer } from "../../baseComponents/ScrollContainer";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";

const ITEMS = [
  {
    name: "Branded T-Shirts",
    quantity: "Quantity: 10 x $32",
    img: "./assets/images/product.png",
    price: "$320",
  },
  {
    name: "Branded T-Shirts",
    quantity: "Quantity: 10 x $32",
    img: "./assets/images/product.png",
    price: "$320",
  },
  {
    name: "Branded T-Shirts",
    quantity: "Quantity: 10 x $32",
    img: "./assets/images/product.png",
    price: "$320",
  },
  {
    name: "Branded T-Shirts",
    quantity: "Quantity: 10 x $32",
    img: "./assets/images/product.png",
    price: "$320",
  },
  {
    name: "Branded T-Shirts",
    quantity: "Quantity: 10 x $32",
    img: "./assets/images/product.png",
    price: "$320",
  },
];

export const Cart = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container relative>
      <Button
        onClick={() => toggleModal(!modalShown)}
        variant={BUTTON_VARIANTS.icon}
        iconName="bx:shopping-bag"
        counter={5}
      ></Button>
      <ModalContainer active={modalShown} width={420}>
        <Container
          flex
          spaceBetween
          variant={CONTAINER_VARIANTS.default}
          borderDashed
        >
          <Title
            variant={TITLE_VARIANTS.secondary}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.bold}
          >
            My cart
          </Title>
          <ColoredText color={COLORED_TEXT_COLORS.info}>5 items</ColoredText>
        </Container>
        <ScrollContainer maxHeight={300}>
          {ITEMS.map((item, index) => (
            <Container
              flex
              alignCenter
              spaceBetween
              variant={CONTAINER_VARIANTS.secondary}
              hover
              key={item.name + index}
            >
              <Container flex flex1>
                <Img
                  src={item.img}
                  alt="Cart product"
                  variant={IMG_VARIANTS.rounded}
                />
                <Container flex1>
                  <Button variant={BUTTON_VARIANTS.link}>{item.name}</Button>
                  <Text variant={TEXT_VARIANTS.small}>{item.quantity}</Text>
                </Container>
              </Container>
              <Title
                variant={TITLE_VARIANTS.middle}
                weight={TITLE_WEIGHTS.normal}
                color={TITLE_COLORS.primary}
              >
                {item.price}
              </Title>
              <Container paddingLeft={10}>
                <Button variant={BUTTON_VARIANTS.iconSquare}>
                  <Icon
                    variant={ICON_VARIANTS.italic}
                    name={ICON_NAMES.close}
                  />
                </Button>
              </Container>
            </Container>
          ))}
        </ScrollContainer>
        <Container variant={CONTAINER_VARIANTS.default}>
          <Container flex column>
            <Container spaceBetween flex alignCenter paddingBottom={10}>
              <Title
                variant={TITLE_VARIANTS.middle}
                weight={TITLE_WEIGHTS.heavy}
                color={TITLE_COLORS.neutral}
              >
                Total:
              </Title>
              <Text variant={TEXT_VARIANTS.medium}>$3399.00</Text>
            </Container>
            <Button variant={BUTTON_VARIANTS.primaryDark}>Checkout</Button>
          </Container>
        </Container>
      </ModalContainer>
    </Container>
  );
};
