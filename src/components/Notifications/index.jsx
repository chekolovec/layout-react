import React from "react";
import { useState } from "react";
import { BackgroundWrapper, BACKGROUND_VARIANTS } from "../BackgroundWrapper";
import {
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  COUNTER_VARIANTS,
} from "../Button";
import { Checkbox } from "../Checkbox";
import { ColoredText, COLORED_TEXT_COLORS } from "../ColoredText";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Icon, ICON_BACKGROUND } from "../Icon";
import { Img, IMG_VARIANTS } from "../Img";
import { ModalContainer } from "../ModalContainer";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";

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
              <Button>
                <Container
                  variant={CONTAINER_VARIANTS.secondary}
                  flex
                  paddingRight={30}
                >
                  <Container paddingRight={16}>
                    <Icon background={ICON_BACKGROUND.reward}>
                      <i className="bx bx-badge-check"></i>
                    </Icon>
                  </Container>

                  <Container paddingRight={10}>
                    <Title
                      variant={TITLE_VARIANTS.primary}
                      weight={TITLE_WEIGHTS.heavy}
                      color={TITLE_COLORS.primary}
                      textAlign="left"
                    >
                      Your <b>Elite</b> author Graphic Optimization
                      <span className="reward"> reward </span>
                      is ready!
                    </Title>
                    <Text variant={TEXT_VARIANTS.secondary}>
                      <i className="mdi mdi-clock-outline"></i> Just 30 sec ago
                    </Text>
                  </Container>
                  <Checkbox />
                </Container>
              </Button>
              <Button>
                <Container
                  variant={CONTAINER_VARIANTS.secondary}
                  flex
                  paddingRight={30}
                >
                  <Container paddingRight={16}>
                    <Img
                      src="./assets/images/avatar-2.jpeg"
                      alt="Item"
                      variant={IMG_VARIANTS.primary}
                    />
                  </Container>

                  <Container paddingRight={10}>
                    <Title
                      variant={TITLE_VARIANTS.primary}
                      weight={TITLE_WEIGHTS.heavy}
                      color={TITLE_COLORS.primary}
                      textAlign="left"
                    >
                      Angela Bernier
                    </Title>
                    <Text variant={TEXT_VARIANTS.secondary}>
                      Answered to your comment on the cash flow forecast's graph
                      🔔.
                    </Text>

                    <Text variant={TEXT_VARIANTS.secondary}>
                      <i className="mdi mdi-clock-outline"></i> 48 min ago
                    </Text>
                  </Container>
                  <Checkbox />
                </Container>
              </Button>
              <Button>
                <Container
                  variant={CONTAINER_VARIANTS.secondary}
                  flex
                  paddingRight={30}
                >
                  <Container paddingRight={16}>
                    <Icon background={ICON_BACKGROUND.success}>
                      <i className="bx bx-message-square-dots"></i>
                    </Icon>
                  </Container>
                  <Container paddingRight={10}>
                    <Title
                      variant={TITLE_VARIANTS.primary}
                      weight={TITLE_WEIGHTS.heavy}
                      color={TITLE_COLORS.primary}
                      textAlign="left"
                    >
                      You have received
                      <span className="success"> 20</span> new messages in the
                      conversation
                    </Title>
                    <Text variant={TEXT_VARIANTS.secondary}>
                      <i className="mdi mdi-clock-outline"></i> 2 hrs ago
                    </Text>
                  </Container>
                  <Checkbox />
                </Container>
              </Button>
              <Button>
                <Container
                  variant={CONTAINER_VARIANTS.secondary}
                  flex
                  paddingRight={30}
                >
                  <Container paddingRight={16}>
                    <Img
                      src="./assets/images/avatar-2.jpeg"
                      alt="Item"
                      variant={IMG_VARIANTS.primary}
                    />
                  </Container>
                  <Container paddingRight={16}>
                    <Title
                      variant={TITLE_VARIANTS.primary}
                      weight={TITLE_WEIGHTS.heavy}
                      color={TITLE_COLORS.primary}
                      textAlign="left"
                    >
                      Angela Bernier
                    </Title>

                    <Text variant={TEXT_VARIANTS.secondary}>
                      Answered to your comment on the cash flow forecast's graph
                      🔔.
                    </Text>
                    <Text variant={TEXT_VARIANTS.secondary}>
                      <i className="mdi mdi-clock-outline"></i> 48 min ago
                    </Text>
                  </Container>
                  <Checkbox />
                </Container>
              </Button>
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
                  <i className="ri-arrow-right-line align-middle"></i>
                </Button>
              </Container>
            </Container>
          </BackgroundWrapper>
        </Container>
      </ModalContainer>
    </Container>
  );
};
