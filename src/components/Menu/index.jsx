import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Img } from "../Img";
import { MenuSection } from "../MenuSection";
import { Title, TITLE_VARIANTS } from "../Title";
import "./styles.scss";

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
        <Title variant={TITLE_VARIANTS.menu}>Menu</Title>
        <MenuSection
          active
          open
          name="Dashboard"
          iconLeft={<i className="ri-dashboard-2-line"></i>}
          items={[
            { title: "Analytics" },
            { title: "CRM" },
            { title: "Ecommerce" },
            { title: "Crypto" },
            { title: "Projects" },
          ]}
        />
        <MenuSection
          name="Apps"
          iconLeft={<i className="ri-apps-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Layouts"
          iconLeft={<i className="ri-layout-line"></i>}
          items={[]}
        />
        <Title variant={TITLE_VARIANTS.menu}>Pages</Title>
        <MenuSection
          name="Authentication"
          iconLeft={<i className="ri-account-circle-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Pages"
          iconLeft={<i className="ri-pages-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Landing"
          iconLeft={<i className="ri-rocket-line"></i>}
          items={[]}
        />
        <Title variant={TITLE_VARIANTS.menu}>Components</Title>
        <MenuSection
          name="Base UI"
          iconLeft={<i className="ri-pencil-ruler-2-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Advance UI"
          iconLeft={<i className="ri-stack-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Widgets"
          iconLeft={<i className="ri-honour-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Forms"
          iconLeft={<i className="ri-file-list-3-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Tables"
          iconLeft={<i className="ri-layout-grid-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Charts"
          iconLeft={<i className="ri-pie-chart-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Icons"
          iconLeft={<i className="ri-compasses-2-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Maps"
          iconLeft={<i className="ri-map-pin-line"></i>}
          items={[]}
        />
        <MenuSection
          name="Multi level"
          iconLeft={<i className="ri-share-line"></i>}
          items={[]}
        />
      </Container>
    </Container>
  );
};
