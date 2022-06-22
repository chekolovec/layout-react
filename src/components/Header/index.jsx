import React, { useState } from "react";
import { Apps } from "../Apps";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Cart } from "../Cart";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../ColoredText";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Img, IMG_VARIANTS } from "../Img";
import { Language } from "../Language";
import { ModalContainer } from "../ModalContainer";
import { Notifications } from "../Notifications";
import { SearchBar } from "../SearchBar";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_VARIANTS } from "../Title";
import "./styles.scss";

export const Header = () => {
  const [profileModalShown, toggleProfileModal] = useState(false);
  return (
    <header className="header">
      <Container
        variant={CONTAINER_VARIANTS.alignCenter}
        paddingTop={16}
        paddingRight={28}
        paddingBottom={16}
        paddingLeft={10}
      >
        <SearchBar />
      </Container>
      <Container variant={CONTAINER_VARIANTS.alignCenter}>
        <Container variant={CONTAINER_VARIANTS.alignCenter} paddingRight={16}>
          <Language />
          <Apps />
          <Cart />
          <Container variant={CONTAINER_VARIANTS.relative}>
            <Button
              variant={BUTTON_VARIANTS.icon}
              iconName="bytesize:fullscreen"
            />
          </Container>
          <Container variant={CONTAINER_VARIANTS.relative}>
            <Button variant={BUTTON_VARIANTS.icon} iconName="bytesize:moon" />
          </Container>
          <Notifications />
        </Container>
        <div className="header-profile-container">
          <div className="header-profile-wrapper">
            <Button onClick={() => toggleProfileModal(!profileModalShown)}>
              <Container>
                <Img
                  variant={IMG_VARIANTS.primary}
                  src="../assets/images/avatar.jpeg"
                  alt="profile"
                />
                <Container variant={CONTAINER_VARIANTS.column} paddingLeft={10}>
                  <Title
                    variant={TITLE_VARIANTS.primary}
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
          </div>
          <ModalContainer active={profileModalShown}>
            <Container variant={CONTAINER_VARIANTS.secondary}>
              <Title variant={TITLE_VARIANTS.neutral}>Welcome Anna!</Title>
            </Container>
            <div className="menu-list">
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
            </div>
            <div className="menu-list-bottom">
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
            </div>
          </ModalContainer>
        </div>
      </Container>
    </header>
  );
};
