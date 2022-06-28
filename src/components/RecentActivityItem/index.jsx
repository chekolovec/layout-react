import React from "react";
import { Container } from "../Container";
import { Title, TITLE_COLORS, TITLE_VARIANTS, TITLE_WEIGHTS } from "../Title";
import { Span, SPAN_VARIANTS } from "../Span";
import "./styles.scss";

export const RecentActivityItem = ({ title, content, date, img, last }) => {
  return (
    <Container
      flex
      className={`recent-activity-item ${last ? "last" : ""}`}
      paddingBottom={15}
    >
      <Container className="activity-left" relative>
        <Container className="activity-line"></Container>
        {img}
      </Container>
      <Container className="activity-right">
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.primary}
          weight={TITLE_WEIGHTS.heavy}
          className="activity-title"
        >
          {title}
        </Title>
        {content}
        <Span variant={SPAN_VARIANTS.primary}>{date}</Span>
      </Container>
    </Container>
  );
};
