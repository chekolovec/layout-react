import React from "react";
import "./styles.scss";
import { Container } from "../../baseComponents/Container";
import { Span } from "../../baseComponents/Span";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";

export const Calendar = () => {
  return (
    <Container flex alignCenter className="calendar">
      <Container flex flex1 alignCenter className="calendar-text-wrapper">
        <Span className="calendar-text">01 Jan 2022 to 31 Jan 2022</Span>
      </Container>
      <Container flex alignCenter className="calendar-icon-wrapper">
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.calendar} />
      </Container>
    </Container>
  );
};
