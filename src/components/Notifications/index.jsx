import React from "react";
import { useState } from "react";
import {
  BackgroundWrapper,
  BACKGROUND_VARIANTS,
} from "../../baseComponents/BackgroundWrapper";
import {
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  COUNTER_VARIANTS,
} from "../../baseComponents/Button";
import { Checkbox } from "../../baseComponents/Checkbox";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
} from "../../baseComponents/ColoredText";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import {
  Icon,
  ICON_BACKGROUND,
  ICON_NAMES,
  ICON_VARIANTS,
} from "../../baseComponents/Icon";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { ModalContainer } from "../../baseComponents/ModalContainer";
import { Span } from "../../baseComponents/Span";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";

const NOTIFICATIONS = [
  {
    icon: ICON_NAMES.badgeCheck,
    iconBackground: ICON_BACKGROUND.reward,
    title: (
      <>
        Your <b>Elite</b> author Graphic Optimization
        <Span className="reward"> reward </Span>
        is ready!
      </>
    ),
    time: "Just 30 sec ago",
  },
  {
    img: "./assets/images/avatar-2.jpeg",
    title: "Angela Bernier",
    body: "Answered to your comment on the cash flow forecast's graph 🔔.",
    time: "Just 30 sec ago",
  },
  {
    icon: ICON_NAMES.quote,
    iconBackground: ICON_BACKGROUND.success,
    title: (
      <>
        You have received
        <Span className="success"> 20</Span> new messages in the conversation
      </>
    ),
    time: "2 hrs ago",
  },
  {
    img: "./assets/images/avatar-2.jpeg",
    title: "Angela Bernier",
    body: "Answered to your comment on the cash flow forecast's graph 🔔.",
    time: "48 min ago",
  },
];

export const Notifications = () => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <Container relative>
      <Button
        variant={BUTTON_VARIANTS.icon}
        iconName="akar-icons:bell"
        onClick={() => toggleModal(!modalShown)}
        counter={3}
        counterVariant={COUNTER_VARIANTS.notificationCounter}
      />
      <ModalContainer active={modalShown} width={320}>
        <BackgroundWrapper variant={BACKGROUND_VARIANTS.secondary}>
          <Container
            variant={CONTAINER_VARIANTS.default}
            flex
            spaceBetween
            alignCenter
          >
            <Title
              variant={TITLE_VARIANTS.middle}
              weight={TITLE_WEIGHTS.bold}
              color={TITLE_COLORS.white}
            >
              Notifications
            </Title>
            <ColoredText color={COLORED_TEXT_COLORS.secondary}>
              4 New
            </ColoredText>
          </Container>
        </BackgroundWrapper>
        <Container>
          <BackgroundWrapper variant={BACKGROUND_VARIANTS.secondary}>
            <Container paddingLeft={8} paddingTop={8} paddingRight={8}>
              <Button variant={BUTTON_VARIANTS.tab} active>
                All(4)
              </Button>
              <Button variant={BUTTON_VARIANTS.tab}>Messages</Button>
              <Button variant={BUTTON_VARIANTS.tab}>Alerts</Button>
            </Container>
          </BackgroundWrapper>
          <BackgroundWrapper variant={BACKGROUND_VARIANTS.white}>
            <Container variant={CONTAINER_VARIANTS.big} maxHeight={320} scroll>
              {NOTIFICATIONS.map((notification, index) => (
                <Button key={notification.title + index}>
                  <Container
                    variant={CONTAINER_VARIANTS.secondary}
                    flex
                    paddingRight={30}
                  >
                    <Container paddingRight={16}>
                      {notification.icon ? (
                        <Icon background={notification.iconBackground}>
                          <Icon
                            variant={ICON_VARIANTS.italic}
                            name={notification.icon}
                          />
                        </Icon>
                      ) : (
                        <Img
                          src={notification.img}
                          alt="Item"
                          variant={IMG_VARIANTS.primary}
                        />
                      )}
                    </Container>
                    <Container paddingRight={10}>
                      <Title
                        variant={TITLE_VARIANTS.primary}
                        weight={TITLE_WEIGHTS.heavy}
                        color={TITLE_COLORS.primary}
                        textAlign="left"
                      >
                        {notification.title}
                      </Title>
                      {notification.body && (
                        <Text variant={TEXT_VARIANTS.secondary}>
                          {notification.body}
                        </Text>
                      )}
                      <Text variant={TEXT_VARIANTS.secondary}>
                        <Icon
                          variant={ICON_VARIANTS.italic}
                          name={ICON_NAMES.clock}
                        />{" "}
                        {notification.time}
                      </Text>
                    </Container>
                    <Checkbox />
                  </Container>
                </Button>
              ))}
              <Container
                paddingTop={10}
                paddingBottom={10}
                flex
                alignCenter
                column
              >
                <Button
                  variant={BUTTON_VARIANTS.primary}
                  color={BUTTON_COLORS.success}
                  alignItems="center"
                  flex
                >
                  View All Notifications
                  <Icon
                    variant={ICON_VARIANTS.italic}
                    name={ICON_NAMES.arrowRightBig}
                  />
                </Button>
              </Container>
            </Container>
          </BackgroundWrapper>
        </Container>
      </ModalContainer>
    </Container>
  );
};
