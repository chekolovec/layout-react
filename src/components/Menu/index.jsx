import React from "react";
import { Button } from "../../baseComponents/Button";
import { Container } from "../../baseComponents/Container";
import { Img } from "../../baseComponents/Img";
import { MenuSection } from "../MenuSection";
import { Title, TITLE_VARIANTS } from "../../baseComponents/Title";
import "./styles.scss";
import { Icon, ICON_NAMES, ICON_VARIANTS } from "../../baseComponents/Icon";

const MENU_DATA = [
  {
    title: "Menu",
    sections: [
      {
        name: "Dashboard",
        active: true,
        open: true,
        iconName: ICON_NAMES.dashboard,
        sections: [
          {
            title: "Analytics",
          },
          {
            title: "CRM",
          },
          {
            title: "Ecommerce",
          },
          {
            title: "Crypto",
          },
          {
            title: "Projects",
          },
        ],
      },
      {
        name: "Apps",
        iconName: ICON_NAMES.apps,
        sections: [],
      },
      {
        name: "Layouts",
        iconName: ICON_NAMES.layout,
        sections: [],
      },
    ],
  },
  {
    title: "Pages",
    sections: [
      {
        name: "Authentication",
        iconName: ICON_NAMES.accountMenu,
        sections: [],
      },
      {
        name: "Pages",
        iconName: ICON_NAMES.pages,
        sections: [],
      },
      {
        name: "Landing",
        iconName: ICON_NAMES.rocket,
        sections: [],
      },
    ],
  },
  {
    title: "Components",
    sections: [
      {
        name: "Base UI",
        iconName: ICON_NAMES.pencil,
        sections: [],
      },
      {
        name: "Advance UI",
        iconName: ICON_NAMES.stack,
        sections: [],
      },
      {
        name: "Widgets",
        iconName: ICON_NAMES.honour,
        sections: [],
      },
      {
        name: "Forms",
        iconName: ICON_NAMES.fileList,
        sections: [],
      },
      {
        name: "Tables",
        iconName: ICON_NAMES.layourGrid,
        sections: [],
      },
      {
        name: "Charts",
        iconName: ICON_NAMES.pieChart,
        sections: [],
      },
      {
        name: "Icons",
        iconName: ICON_NAMES.compasses,
        sections: [],
      },
      {
        name: "Maps",
        iconName: ICON_NAMES.mapPin,
        sections: [],
      },
      {
        name: "Multi level",
        iconName: ICON_NAMES.share,
        sections: [],
      },
    ],
  },
];

export const Menu = () => {
  return (
    <Container className="menu-main-container" height100 column flex>
      <Container flex column alignCenter>
        <Button className="menu-logo-button">
          <Img
            className="menu-logo"
            src="../assets/images/logo.png"
            alt="Menu logo"
            width={100}
            height={70}
          />
          <Img
            className="menu-logo-mobile"
            src="../assets/images/logo-menu.png"
            alt="Menu mobile logo"
            width={22}
            height={22}
          />
        </Button>
      </Container>
      <Container scroll flex column paddingBottom={20}>
        {MENU_DATA.map((item) => (
          <Container flex column key={item.title}>
            <Title variant={TITLE_VARIANTS.menu}>{item.title}</Title>
            {item.sections.map((section) => (
              <MenuSection
                key={section.name}
                active={section.active}
                open={section.open}
                name={section.name}
                iconLeft={
                  <Icon
                    variant={ICON_VARIANTS.italic}
                    name={section.iconName}
                  />
                }
                items={section.sections}
              />
            ))}
          </Container>
        ))}
      </Container>
    </Container>
  );
};
