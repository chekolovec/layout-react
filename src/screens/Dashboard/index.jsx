import React from "react";
import { Apps } from "../../components/Apps";
import { BestProducts } from "../../components/BestProducts";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Button, BUTTON_VARIANTS } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LanguageSelector } from "../../components/LanguageSelector";
import { Locations } from "../../components/Locations";
import { Menu } from "../../components/Menu";
import { Notifications } from "../../components/Notifications";
import { Orders } from "../../components/Orders";
import { Profile } from "../../components/Profile";
import { Revenue } from "../../components/Revenue";
import { RightBar } from "../../components/RightBar";
import { SearchBar } from "../../components/SearchBar";
import { TopSellers } from "../../components/TopSellers";
import { Total } from "../../components/Total";
import { Visits } from "../../components/Visits";

export const Dashboard = () => {
  return (
    <div className="main-container">
      <Menu />

      <Container maxHeight="100%" flex flex1 column>
        <Header>
          <Container
            alignCenter
            paddingTop={16}
            paddingRight={28}
            paddingBottom={16}
            paddingLeft={10}
            flex
          >
            <SearchBar />
          </Container>
          <Container alignCenter flex>
            <Container alignCenter flex paddingRight={16}>
              <LanguageSelector />
              <Apps />
              <Cart />
              <Container relative>
                <Button
                  variant={BUTTON_VARIANTS.icon}
                  iconName="bytesize:fullscreen"
                />
              </Container>
              <Container relative>
                <Button
                  variant={BUTTON_VARIANTS.icon}
                  iconName="bytesize:moon"
                />
              </Container>
              <Notifications />
            </Container>
            <Profile />
          </Container>
        </Header>

        <div className="content-scroll">
          <Breadcrumbs />

          <div className="content-wrapper-main">
            <div className="content-wrapper">
              <Total />

              <div className="flex-container graph">
                <Revenue />
                <Locations />
              </div>

              <div className="selling flex-container">
                <BestProducts />
                <TopSellers />
              </div>

              <div className="flex-container recent">
                <Visits />
                <Orders />
              </div>
            </div>
            <RightBar />
          </div>
          <Footer />
        </div>
      </Container>
    </div>
  );
};
