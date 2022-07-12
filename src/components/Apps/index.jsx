import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { GridContainer } from "../../baseComponents/GridContainer";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";
import { ModalContainer } from "../../baseComponents/ModalContainer";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";

const APPS = [
  {
    title: "Github",
    img: "./assets/images/github.png",
  },
  {
    title: "Bitbucket",
    img: "./assets/images/bitbucket.png",
  },
  {
    title: "Dribble",
    img: "./assets/images/dribbble.png",
  },
  {
    title: "Dropbox",
    img: "./assets/images/dropbox.png",
  },
  {
    title: "Mail Chimp",
    img: "./assets/images/mail_chimp.png",
  },
  {
    title: "Slack",
    img: "./assets/images/slack.png",
  },
];

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
            iconRight={
              <Icon
                variant={ICON_VARIANTS.italic}
                name={ICON_NAMES.arrowRight}
              />
            }
          >
            View All Apps
          </Button>
        </Container>
        <GridContainer>
          {APPS.map((app) => (
            <Button
              key={app.title}
              variant={BUTTON_VARIANTS.grid}
              iconSrc={app.img}
            >
              {app.title}
            </Button>
          ))}
        </GridContainer>
      </ModalContainer>
    </Container>
  );
};
