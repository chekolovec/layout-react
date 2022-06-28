import React from "react";
import { Button, BUTTON_VARIANTS } from "../Button";
import { Container, CONTAINER_VARIANTS } from "../Container";
import { Text, TEXT_VARIANTS } from "../Text";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import "./styles.scss";
import { Img } from "../Img";

export const RevenueGraph = () => {
  return (
    <Container
      variant={CONTAINER_VARIANTS.contentSection}
      flex1
      className="revenue-graph"
    >
      <Container
        variant={CONTAINER_VARIANTS.default}
        flex
        flex1
        spaceBetween
        alignCenter
      >
        <Title
          variant={TITLE_VARIANTS.secondary}
          weight={TITLE_WEIGHTS.heavy}
          color={TITLE_COLORS.primary}
        >
          Revenue
        </Title>
        <Container flex>
          <Container paddingLeft={3} paddingRight={3}>
            <Button variant={BUTTON_VARIANTS.selector} uppercase>
              All
            </Button>
          </Container>
          <Container paddingLeft={3} paddingRight={3}>
            <Button variant={BUTTON_VARIANTS.selector} uppercase>
              1M
            </Button>
          </Container>
          <Container paddingLeft={3} paddingRight={3}>
            <Button variant={BUTTON_VARIANTS.selector} uppercase>
              6M
            </Button>
          </Container>
          <Container paddingLeft={3} paddingRight={3}>
            <Button variant={BUTTON_VARIANTS.selector} inactive uppercase>
              1Y
            </Button>
          </Container>
        </Container>
      </Container>
      <Container flex>
        <Container
          className="revenue-graph-section"
          variant={CONTAINER_VARIANTS.default}
          flex
          column
          justifyCenter
          alignCenter
          flex1
        >
          <Title
            variant={TITLE_VARIANTS.middle}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.heavy}
          >
            7,585
          </Title>
          <Text variant={TEXT_VARIANTS.small}>Orders</Text>
        </Container>
        <Container
          className="revenue-graph-section"
          variant={CONTAINER_VARIANTS.default}
          flex
          column
          justifyCenter
          alignCenter
          flex1
        >
          <Title
            variant={TITLE_VARIANTS.middle}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.heavy}
          >
            $22.89k
          </Title>
          <Text variant={TEXT_VARIANTS.small}>Earnings</Text>
        </Container>
        <Container
          className="revenue-graph-section"
          variant={CONTAINER_VARIANTS.default}
          flex
          column
          justifyCenter
          alignCenter
          flex1
        >
          <Title
            variant={TITLE_VARIANTS.middle}
            color={TITLE_COLORS.primary}
            weight={TITLE_WEIGHTS.heavy}
          >
            367
          </Title>
          <Text variant={TEXT_VARIANTS.small}>Refunds</Text>
        </Container>
        <Container
          className="revenue-graph-section"
          variant={CONTAINER_VARIANTS.default}
          flex
          column
          justifyCenter
          alignCenter
          flex1
        >
          <Title
            variant={TITLE_VARIANTS.middle}
            color={TITLE_COLORS.success}
            weight={TITLE_WEIGHTS.heavy}
          >
            18.92%
          </Title>
          <Text variant={TEXT_VARIANTS.small}>Conversation Ratio</Text>
        </Container>
      </Container>
      <Img
        className="revenue-graph-picture"
        src="./assets/images/graph.png"
        alt="Graph"
      />
    </Container>
  );
};
