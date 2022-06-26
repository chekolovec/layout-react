import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../ColoredText";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { ModalContainer } from "../ModalContainer";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";

export const Profile = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container height100 relative>
      <Container backgroundSecondary height100>
        <Button height100 onClick={() => toggleModal(!modalShown)}>
          <Container
            variant={CONTAINER_VARIANTS.secondary}
            flex
            alignCenter
            flex1
          >
            <Img
              variant={IMG_VARIANTS.primary}
              src="../assets/images/avatar.jpeg"
              alt="profile"
            />
            <Container column flex paddingLeft={10}>
              <Title
                variant={TITLE_VARIANTS.primary}
                weight={TITLE_WEIGHTS.heavy}
                color={TITLE_COLORS.primary}
                className="header-profile-name"
              >
                Anna Adame
              </Title>
              <Text
                variant={TEXT_VARIANTS.secondary}
                className="header-profile-position"
              >
                Founder
              </Text>
            </Container>
          </Container>
        </Button>
      </Container>
      <ModalContainer active={modalShown}>
        <Container variant={CONTAINER_VARIANTS.secondary}>
          <Title
            variant={TITLE_VARIANTS.small}
            weight={TITLE_WEIGHTS.bold}
            color={TITLE_COLORS.secondary}
          >
            Welcome Anna!
          </Title>
        </Container>
        <Container width100 paddingBottom={10} borderSolid>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-account-circle text-muted fs-16 align-middle me-1"
          >
            Profile
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"
          >
            Messages
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"
          >
            Taskboard
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"
          >
            Help
          </Button>
        </Container>
        <Container width100 paddingTop={10}>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-wallet text-muted fs-16 align-middle me-1"
          >
            Balance: <b>$5971.67</b>
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"
          >
            Settings
            <ColoredText
              color={COLORED_TEXT_COLORS.success}
              variant={COLORED_TEXT_VARIANTS.small}
              colo
            >
              New
            </ColoredText>
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-lock text-muted fs-16 align-middle me-1"
          >
            Lock Screen
          </Button>
          <Button
            variant={BUTTON_VARIANTS.list}
            iconName="mdi mdi-logout text-muted fs-16 align-middle me-1"
          >
            Logout
          </Button>
        </Container>
      </ModalContainer>
    </Container>
  );
};
