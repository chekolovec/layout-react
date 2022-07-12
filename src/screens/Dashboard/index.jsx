import React from "react";
import { Apps } from "../../components/Apps";
import { BestProducts } from "../../components/BestProducts";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Cart } from "../../components/Cart";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LanguageSelector } from "../../components/LanguageSelector";
import { SalesLocations } from "../../components/SalesLocations";
import { Menu } from "../../components/Menu";
import { Notifications } from "../../components/Notifications";
import { RecentOrders } from "../../components/RecentOrders";
import { Profile } from "../../components/Profile";
import { RevenueGraph } from "../../components/RevenueGraph";
import { RightBar } from "../../components/RightBar";
import { SearchBar } from "../../components/SearchBar";
import { TopSellers } from "../../components/TopSellers";
import { Total } from "../../components/Total";
import { StoreVisits } from "../../components/StoreVisits";
import {
  BackgroundWrapper,
  BACKGROUND_VARIANTS,
} from "../../baseComponents/BackgroundWrapper";

export const Dashboard = () => {
  return (
    <Container flex className="main-container">
      <Menu />

      <Container maxHeight="100%" flex flex1 column>
        <Header>
          <SearchBar />

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

        <Container scroll>
          <Breadcrumbs mainRoute="Dashboard" secondaryRoutes={["Dashboard"]} />

          <Container flex flex1>
            <BackgroundWrapper variant={BACKGROUND_VARIANTS.content} flex1>
              <Container flex1 variant={CONTAINER_VARIANTS.defaultSmall}>
                <Total />
                <Container flex flexWrap>
                  <RevenueGraph />
                  <SalesLocations />
                </Container>

                <Container flex>
                  <BestProducts />
                  <TopSellers />
                </Container>

                <Container flex>
                  <StoreVisits />
                  <RecentOrders />
                </Container>
              </Container>
            </BackgroundWrapper>
            <RightBar />
          </Container>
          <Footer />
        </Container>
      </Container>
    </Container>
  );
};
