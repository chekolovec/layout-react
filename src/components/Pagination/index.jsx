import React from "react";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";

export const Pagination = ({ itemsNumber, totalNumber, current, last }) => {
  return (
    <Container
      flex
      variant={CONTAINER_VARIANTS.defaultSmall}
      alignCenter
      spaceBetween
      className="pagination"
    >
      <Text variant={TEXT_VARIANTS.small}>
        Showing <b>{itemsNumber}</b> of <b>{totalNumber}</b> Results
      </Text>
      <Container>
        {current - 1 && (
          <>
            <Button variant={BUTTON_VARIANTS.pagination}>←</Button>
            <Button variant={BUTTON_VARIANTS.pagination}>1</Button>
          </>
        )}
        <Button variant={BUTTON_VARIANTS.pagination} active>
          {current}
        </Button>
        {current < last && (
          <>
            <Button variant={BUTTON_VARIANTS.pagination}>3</Button>
            <Button variant={BUTTON_VARIANTS.pagination}>→</Button>
          </>
        )}
      </Container>
    </Container>
  );
};
