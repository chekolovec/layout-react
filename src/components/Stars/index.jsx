import React from "react";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";

export const Stars = ({ score }) => {
  return (
    <>
      {Array(5)
        .fill()
        .map((_, index) => {
          if (score - index * 2 > 1) {
            return (
              <Icon
                variant={ICON_VARIANTS.italic}
                name={ICON_NAMES.starFill}
                key={index}
              />
            );
          }
          if (score - index * 2 === 1) {
            return (
              <Icon
                variant={ICON_VARIANTS.italic}
                name={ICON_NAMES.starHalfFill}
                key={index}
              />
            );
          }
          return (
            <Icon
              variant={ICON_VARIANTS.italic}
              name={ICON_NAMES.star}
              key={index}
            />
          );
        })}
    </>
  );
};
