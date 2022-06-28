import React from "react";
import "./styles.scss";
import { Container } from "../Container";
import { Span } from "../Span";

export const Calendar = () => {
  return (
    <Container flex alignCenter className="calendar">
      <Container flex flex1 alignCenter className="calendar-text-wrapper">
        <Span className="calendar-text">01 Jan 2022 to 31 Jan 2022</Span>
      </Container>
      <Container flex alignCenter className="calendar-icon-wrapper">
        <i className="ri-calendar-2-line icon"></i>
      </Container>
    </Container>
  );
};
