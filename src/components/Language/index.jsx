import React, { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { ModalContainer } from "../ModalContainer";
import "./styles.scss";

export const Language = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container variant={CONTAINER_VARIANTS.relative}>
      <Button
        variant={BUTTON_VARIANTS.icon}
        onClick={() => toggleModal(!modalShown)}
      >
        <img
          width="20"
          height="20"
          src="../assets/images/flag.svg"
          alt="country"
          className="language-img"
        />
      </Button>
      <ModalContainer active={modalShown} width={160}>
        <Button
          imgSrc="./assets/images/flag.svg"
          variant={BUTTON_VARIANTS.list}
        >
          English
        </Button>
        <Button
          imgSrc="./assets/images/spain.svg"
          variant={BUTTON_VARIANTS.list}
        >
          Española
        </Button>
        <Button
          imgSrc="./assets/images/germany.svg"
          variant={BUTTON_VARIANTS.list}
        >
          Deutsche
        </Button>
        <Button
          imgSrc="./assets/images/italy.svg"
          variant={BUTTON_VARIANTS.list}
        >
          Italiana
        </Button>
        <Button
          imgSrc="./assets/images/russia.svg"
          variant={BUTTON_VARIANTS.list}
        >
          русский
        </Button>
        <Button
          imgSrc="./assets/images/china.svg"
          variant={BUTTON_VARIANTS.list}
        >
          中国人
        </Button>
        <Button
          imgSrc="./assets/images/french.svg"
          variant={BUTTON_VARIANTS.list}
        >
          français
        </Button>
      </ModalContainer>
    </Container>
  );
};
