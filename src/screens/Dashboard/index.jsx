import React from "react";
import { BestProducts } from "../../components/BestProducts";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "../../components/Header";
import { Locations } from "../../components/Locations";
import { Menu } from "../../components/Menu";
import { Orders } from "../../components/Orders";
import { Revenue } from "../../components/Revenue";
import { TopSellers } from "../../components/TopSellers";
import { Total } from "../../components/Total";
import { Visits } from "../../components/Visits";

export const Dashboard = () => {
  return (
    <div className="main-container">
      <Menu />

      <div className="content-container">
        <Header />

        <div className="content-scroll">
          <Breadcrumbs />

          <div className="content-wrapper-main">
            <div className="content-wrapper">
              <Total />

              <div class="flex-container graph">
                <Revenue />
                <Locations />
              </div>

              <div class="selling flex-container">
                <BestProducts />
                <TopSellers />
              </div>

              <div class="flex-container recent">
                <Visits />
                <Orders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
