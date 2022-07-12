import React from "react";
import { useState } from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../../baseComponents/ColoredText";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { ICON_NAMES } from "../../baseComponents/Icon";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { ModalContainer } from "../../baseComponents/ModalContainer";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";

const TOP_ITEMS = [
  {
    label: "Profile",
    iconName: ICON_NAMES.account,
  },
  {
    label: "Messages",
    iconName: ICON_NAMES.message,
  },
  {
    label: "Taskboard",
    iconName: ICON_NAMES.calendarCheck,
  },
  {
    label: "Help",
    iconName: ICON_NAMES.lifebuoy,
  },
];

const BOTTOM_ITEMS = [
  {
    label: (
      <>
        Balance: <b>$5971.67</b>
      </>
    ),
    iconName: ICON_NAMES.wallet,
  },
  {
    label: "Settings",
    iconName: ICON_NAMES.cog,
    new: true,
  },
  {
    label: "Lock Screen",
    iconName: ICON_NAMES.lock,
  },
  {
    label: "Logout",
    iconName: ICON_NAMES.logout,
  },
];

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
          {TOP_ITEMS.map((item) => (
            <Button
              key={item.label}
              variant={BUTTON_VARIANTS.list}
              iconName={item.iconName}
            >
              {item.label}
            </Button>
          ))}
        </Container>
        <Container width100 paddingTop={10}>
          {BOTTOM_ITEMS.map((item) => (
            <Button
              key={item.label}
              variant={BUTTON_VARIANTS.list}
              iconName={item.iconName}
            >
              {item.label}
              {item.new && (
                <ColoredText
                  color={COLORED_TEXT_COLORS.success}
                  variant={COLORED_TEXT_VARIANTS.small}
                >
                  New
                </ColoredText>
              )}
            </Button>
          ))}
        </Container>
      </ModalContainer>
    </Container>
  );
};
