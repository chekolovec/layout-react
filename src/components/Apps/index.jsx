import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { GridContainer } from "../GridContainer";
import { ModalContainer } from "../ModalContainer";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";

export const Apps = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container relative>
      <Button
        variant={BUTTON_VARIANTS.icon}
        iconName="bx:category-alt"
        onClick={() => toggleModal(!modalShown)}
      />
      <ModalContainer active={modalShown} width={320}>
        <Container
          variant={CONTAINER_VARIANTS.default}
          spaceBetween
          borderDashed
          flex
        >
          <Title
            variant={TITLE_VARIANTS.secondary}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.bold}
          >
            Web Apps
          </Title>
          <Button
            variant={BUTTON_VARIANTS.secondary}
            iconRight={<i className="ri-arrow-right-s-line"></i>}
          >
            View All Apps
          </Button>
        </Container>
        <GridContainer>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/github.png"
          >
            Github
          </Button>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/bitbucket.png"
          >
            Bitbucket
          </Button>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/dribbble.png"
          >
            Dribble
          </Button>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/dropbox.png"
          >
            Dropbox
          </Button>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/mail_chimp.png"
          >
            Mail Chimp
          </Button>
          <Button
            variant={BUTTON_VARIANTS.grid}
            iconSrc="./assets/images/slack.png"
          >
            Slack
          </Button>
        </GridContainer>
      </ModalContainer>
    </Container>
  );
};
