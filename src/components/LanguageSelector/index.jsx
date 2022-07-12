import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container } from "../../baseComponents/Container";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { ModalContainer } from "../../baseComponents/ModalContainer";

const LANGUAGES = [
  {
    title: "English",
    img: "./assets/images/flag.svg",
  },
  {
    title: "Española",
    img: "./assets/images/spain.svg",
  },
  {
    title: "Deutsche",
    img: "./assets/images/germany.svg",
  },
  {
    title: "Italiana",
    img: "./assets/images/italy.svg",
  },
  {
    title: "русский",
    img: "./assets/images/russia.svg",
  },
  {
    title: "中国人",
    img: "./assets/images/china.svg",
  },
  {
    title: "français",
    img: "./assets/images/french.svg",
  },
];

export const LanguageSelector = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container relative>
      <Button
        variant={BUTTON_VARIANTS.icon}
        onClick={() => toggleModal(!modalShown)}
      >
        <Img
          width="20"
          height="20"
          src="../assets/images/flag.svg"
          alt="country"
          variant={IMG_VARIANTS.small}
        />
      </Button>
      <ModalContainer active={modalShown} width={160}>
        {LANGUAGES.map((language) => (
          <Button
            key={language.title}
            imgSrc={language.img}
            variant={BUTTON_VARIANTS.list}
          >
            {language.title}
          </Button>
        ))}
      </ModalContainer>
    </Container>
  );
};
