import React, { useState } from "react";
import { BackgroundWrapper } from "../BackgroundWrapper";
import { Button, BUTTON_VARIANTS } from "../Button";
import { ColoredText } from "../ColoredText";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { ModalContainer } from "../ModalContainer";
import { ScrollContainer } from "../ScrollContainer";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_VARIANTS } from "../Title";

export const Cart = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container variant={CONTAINER_VARIANTS.relative}>
      <Button
        onClick={() => toggleModal(!modalShown)}
        variant={BUTTON_VARIANTS.icon}
        iconName="bx:shopping-bag"
        counter={5}
      ></Button>
      <ModalContainer active={modalShown} width={420}>
        <Container>
          <Title variant={TITLE_VARIANTS.secondary}>My cart</Title>
          <BackgroundWrapper>
            <Container variant={CONTAINER_VARIANTS.medium}>
              <ColoredText>5 items</ColoredText>
            </Container>
          </BackgroundWrapper>
        </Container>
        <ScrollContainer maxHeight={300}>
          <Container variant={CONTAINER_VARIANTS.secondary}>
            <Container variant={CONTAINER_VARIANTS.flex}>
              <Img
                src="./assets/images/product.png"
                alt="Cart product"
                variant={IMG_VARIANTS.rounded}
              />
              <Container variant={CONTAINER_VARIANTS.flex1}>
                <Button variant={BUTTON_VARIANTS.link}>Branded T-Shirts</Button>
                <Text variant={TEXT_VARIANTS.small}>Quantity: 10 x $32</Text>
              </Container>
            </Container>
            <Title variant={TITLE_VARIANTS.small}>$320</Title>
            <Button variant={BUTTON_VARIANTS.icon}>
              <i className="ri-close-fill fs-16"></i>
            </Button>
          </Container>
          <Container variant={CONTAINER_VARIANTS.secondary}>
            <Container variant={CONTAINER_VARIANTS.flex}>
              <Img
                src="./assets/images/product.png"
                alt="Cart product"
                variant={IMG_VARIANTS.rounded}
              />
              <Container variant={CONTAINER_VARIANTS.flex1}>
                <Button variant={BUTTON_VARIANTS.link}>Branded T-Shirts</Button>
                <Text variant={TEXT_VARIANTS.small}>Quantity: 10 x $32</Text>
              </Container>
            </Container>
            <Title variant={TITLE_VARIANTS.small}>$320</Title>
            <Button variant={BUTTON_VARIANTS.icon}>
              <i className="ri-close-fill fs-16"></i>
            </Button>
          </Container>
          <Container variant={CONTAINER_VARIANTS.secondary}>
            <Container variant={CONTAINER_VARIANTS.flex}>
              <Img
                src="./assets/images/product.png"
                alt="Cart product"
                variant={IMG_VARIANTS.rounded}
              />
              <Container variant={CONTAINER_VARIANTS.flex1}>
                <Button variant={BUTTON_VARIANTS.link}>Branded T-Shirts</Button>
                <Text variant={TEXT_VARIANTS.small}>Quantity: 10 x $32</Text>
              </Container>
            </Container>
            <Title variant={TITLE_VARIANTS.small}>$320</Title>
            <Button variant={BUTTON_VARIANTS.icon}>
              <i className="ri-close-fill fs-16"></i>
            </Button>
          </Container>
          <Container variant={CONTAINER_VARIANTS.secondary}>
            <Container variant={CONTAINER_VARIANTS.flex}>
              <Img
                src="./assets/images/product.png"
                alt="Cart product"
                variant={IMG_VARIANTS.rounded}
              />
              <Container variant={CONTAINER_VARIANTS.flex1}>
                <Button variant={BUTTON_VARIANTS.link}>Branded T-Shirts</Button>
                <Text variant={TEXT_VARIANTS.small}>Quantity: 10 x $32</Text>
              </Container>
            </Container>
            <Title variant={TITLE_VARIANTS.small}>$320</Title>
            <Button variant={BUTTON_VARIANTS.icon}>
              <i className="ri-close-fill fs-16"></i>
            </Button>
          </Container>
          <Container variant={CONTAINER_VARIANTS.secondary}>
            <Container variant={CONTAINER_VARIANTS.flex}>
              <Img
                src="./assets/images/product.png"
                alt="Cart product"
                variant={IMG_VARIANTS.rounded}
              />
              <Container variant={CONTAINER_VARIANTS.flex1}>
                <Button variant={BUTTON_VARIANTS.link}>Branded T-Shirts</Button>
                <Text variant={TEXT_VARIANTS.small}>Quantity: 10 x $32</Text>
              </Container>
            </Container>
            <Title variant={TITLE_VARIANTS.small}>$320</Title>
            <Button variant={BUTTON_VARIANTS.icon}>
              <i className="ri-close-fill fs-16"></i>
            </Button>
          </Container>
        </ScrollContainer>
        <Container variant={CONTAINER_VARIANTS.big}>
          <Container variant={CONTAINER_VARIANTS.column}>
            <Container
              variant={CONTAINER_VARIANTS.alignCenter}
              paddingBottom={10}
            >
              <Title variant={TITLE_VARIANTS.middle}>Total:</Title>
              <Text variant={TEXT_VARIANTS.medium}>$3399.00</Text>
            </Container>
            <Button variant={BUTTON_VARIANTS.primary}>Checkout</Button>
          </Container>
        </Container>
      </ModalContainer>
    </Container>
  );
};
