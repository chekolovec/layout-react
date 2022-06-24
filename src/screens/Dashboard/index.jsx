import React, { useState } from "react";
import {
  BackgroundWrapper,
  BACKGROUND_VARIANTS,
} from "../../components/BackgroundWrapper";
import { BestProducts } from "../../components/BestProducts";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import {
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  COUNTER_VARIANTS,
} from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import {
  ColoredText,
  COLORED_TEXT_COLORS,
  COLORED_TEXT_VARIANTS,
} from "../../components/ColoredText";
import { Container, CONTAINER_VARIANTS } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { GridContainer } from "../../components/GridContainer";
import { Header } from "../../components/Header";
import { Icon, ICON_BACKGROUND } from "../../components/Icon";
import { Img, IMG_VARIANTS } from "../../components/Img";
import { Locations } from "../../components/Locations";
import { Menu } from "../../components/Menu";
import { ModalContainer } from "../../components/ModalContainer";
import { Orders } from "../../components/Orders";
import { Revenue } from "../../components/Revenue";
import { RightBar } from "../../components/RightBar";
import { ScrollContainer } from "../../components/ScrollContainer";
import { SearchBar } from "../../components/SearchBar";
import { Text, TEXT_VARIANTS } from "../../components/Text";
import { Title, TITLE_VARIANTS } from "../../components/Title";
import { TopSellers } from "../../components/TopSellers";
import { Total } from "../../components/Total";
import { Visits } from "../../components/Visits";

export const Dashboard = () => {
  const [profileModalShown, toggleProfileModal] = useState(false);
  const [laguageModalShown, toggleLanguageModal] = useState(false);
  const [appsModalShown, toggleAppsModal] = useState(false);
  const [cartModalShown, toggleCartModal] = useState(false);
  const [notificationsModalShown, toggleNotificationsModal] = useState(false);
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
              <Container relative>
                <Button
                  variant={BUTTON_VARIANTS.icon}
                  onClick={() => toggleLanguageModal(!laguageModalShown)}
                >
                  <Img
                    width="20"
                    height="20"
                    src="../assets/images/flag.svg"
                    alt="country"
                    variant={IMG_VARIANTS.small}
                  />
                </Button>
                <ModalContainer active={laguageModalShown} width={160}>
                  <Button
                    imgSrc="./assets/images/flag.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    English
                  </Button>
                  <Button
                    imgSrc="./assets/images/spain.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    Española
                  </Button>
                  <Button
                    imgSrc="./assets/images/germany.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    Deutsche
                  </Button>
                  <Button
                    imgSrc="./assets/images/italy.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    Italiana
                  </Button>
                  <Button
                    imgSrc="./assets/images/russia.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    русский
                  </Button>
                  <Button
                    imgSrc="./assets/images/china.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    中国人
                  </Button>
                  <Button
                    imgSrc="./assets/images/french.svg"
                    variant={BUTTON_VARIANTS.list}
                  >
                    français
                  </Button>
                </ModalContainer>
              </Container>

              <Container relative>
                <Button
                  variant={BUTTON_VARIANTS.icon}
                  iconName="bx:category-alt"
                  onClick={() => toggleAppsModal(!appsModalShown)}
                />
                <ModalContainer active={appsModalShown} width={320}>
                  <Container
                    variant={CONTAINER_VARIANTS.default}
                    spaceBetween
                    borderDashed
                    flex
                  >
                    <Title variant={TITLE_VARIANTS.secondary}>Web Apps</Title>
                    <Button
                      variant={BUTTON_VARIANTS.secondary}
                      iconRight={
                        <i className="ri-arrow-right-s-line align-middle"></i>
                      }
                    >
                      View All Apps
                    </Button>
                  </Container>
                  <GridContainer>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/github.png"
                    >
                      Github
                    </Button>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/bitbucket.png"
                    >
                      Bitbucket
                    </Button>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/dribbble.png"
                    >
                      Dribble
                    </Button>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/dropbox.png"
                    >
                      Dropbox
                    </Button>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/mail_chimp.png"
                    >
                      Mail Chimp
                    </Button>
                    <Button
                      variant={BUTTON_VARIANTS.grid}
                      iconSrc="./assets/images/slack.png"
                    >
                      Slack
                    </Button>
                  </GridContainer>
                </ModalContainer>
              </Container>

              <Container relative>
                <Button
                  onClick={() => toggleCartModal(!cartModalShown)}
                  variant={BUTTON_VARIANTS.icon}
                  iconName="bx:shopping-bag"
                  counter={5}
                ></Button>
                <ModalContainer active={cartModalShown} width={420}>
                  <Container
                    flex
                    spaceBetween
                    variant={CONTAINER_VARIANTS.default}
                    borderDashed
                  >
                    <Title variant={TITLE_VARIANTS.secondary}>My cart</Title>
                    <ColoredText>5 items</ColoredText>
                  </Container>
                  <ScrollContainer maxHeight={300}>
                    <Container
                      flex
                      alignCenter
                      spaceBetween
                      variant={CONTAINER_VARIANTS.secondary}
                      hover
                    >
                      <Container flex flex1>
                        <Img
                          src="./assets/images/product.png"
                          alt="Cart product"
                          variant={IMG_VARIANTS.rounded}
                        />
                        <Container flex1>
                          <Button variant={BUTTON_VARIANTS.link}>
                            Branded T-Shirts
                          </Button>
                          <Text variant={TEXT_VARIANTS.small}>
                            Quantity: 10 x $32
                          </Text>
                        </Container>
                      </Container>
                      <Title variant={TITLE_VARIANTS.small}>$320</Title>
                      <Container paddingLeft={10}>
                        <Button variant={BUTTON_VARIANTS.iconSquare}>
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                      </Container>
                    </Container>
                    <Container
                      flex
                      alignCenter
                      spaceBetween
                      variant={CONTAINER_VARIANTS.secondary}
                      hover
                    >
                      <Container flex flex1>
                        <Img
                          src="./assets/images/product.png"
                          alt="Cart product"
                          variant={IMG_VARIANTS.rounded}
                        />
                        <Container flex1>
                          <Button variant={BUTTON_VARIANTS.link}>
                            Branded T-Shirts
                          </Button>
                          <Text variant={TEXT_VARIANTS.small}>
                            Quantity: 10 x $32
                          </Text>
                        </Container>
                      </Container>
                      <Title variant={TITLE_VARIANTS.small}>$320</Title>
                      <Container paddingLeft={10}>
                        <Button variant={BUTTON_VARIANTS.iconSquare}>
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                      </Container>
                    </Container>
                    <Container
                      flex
                      alignCenter
                      spaceBetween
                      variant={CONTAINER_VARIANTS.secondary}
                      hover
                    >
                      <Container flex flex1>
                        <Img
                          src="./assets/images/product.png"
                          alt="Cart product"
                          variant={IMG_VARIANTS.rounded}
                        />
                        <Container flex1>
                          <Button variant={BUTTON_VARIANTS.link}>
                            Branded T-Shirts
                          </Button>
                          <Text variant={TEXT_VARIANTS.small}>
                            Quantity: 10 x $32
                          </Text>
                        </Container>
                      </Container>
                      <Title variant={TITLE_VARIANTS.small}>$320</Title>
                      <Container paddingLeft={10}>
                        <Button variant={BUTTON_VARIANTS.iconSquare}>
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                      </Container>
                    </Container>
                    <Container
                      flex
                      alignCenter
                      spaceBetween
                      variant={CONTAINER_VARIANTS.secondary}
                      hover
                    >
                      <Container flex flex1>
                        <Img
                          src="./assets/images/product.png"
                          alt="Cart product"
                          variant={IMG_VARIANTS.rounded}
                        />
                        <Container flex1>
                          <Button variant={BUTTON_VARIANTS.link}>
                            Branded T-Shirts
                          </Button>
                          <Text variant={TEXT_VARIANTS.small}>
                            Quantity: 10 x $32
                          </Text>
                        </Container>
                      </Container>
                      <Title variant={TITLE_VARIANTS.small}>$320</Title>
                      <Container paddingLeft={10}>
                        <Button variant={BUTTON_VARIANTS.iconSquare}>
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                      </Container>
                    </Container>
                    <Container
                      flex
                      alignCenter
                      spaceBetween
                      variant={CONTAINER_VARIANTS.secondary}
                      hover
                    >
                      <Container flex flex1>
                        <Img
                          src="./assets/images/product.png"
                          alt="Cart product"
                          variant={IMG_VARIANTS.rounded}
                        />
                        <Container flex1>
                          <Button variant={BUTTON_VARIANTS.link}>
                            Branded T-Shirts
                          </Button>
                          <Text variant={TEXT_VARIANTS.small}>
                            Quantity: 10 x $32
                          </Text>
                        </Container>
                      </Container>
                      <Title variant={TITLE_VARIANTS.small}>$320</Title>
                      <Container paddingLeft={10}>
                        <Button variant={BUTTON_VARIANTS.iconSquare}>
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                      </Container>
                    </Container>
                  </ScrollContainer>
                  <Container variant={CONTAINER_VARIANTS.default}>
                    <Container flex column>
                      <Container
                        spaceBetween
                        flex
                        alignCenter
                        paddingBottom={10}
                      >
                        <Title variant={TITLE_VARIANTS.middle}>Total:</Title>
                        <Text variant={TEXT_VARIANTS.medium}>$3399.00</Text>
                      </Container>
                      <Button variant={BUTTON_VARIANTS.primary}>
                        Checkout
                      </Button>
                    </Container>
                  </Container>
                </ModalContainer>
              </Container>
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

              <Container relative>
                <Button
                  variant={BUTTON_VARIANTS.icon}
                  iconName="akar-icons:bell"
                  onClick={() =>
                    toggleNotificationsModal(!notificationsModalShown)
                  }
                  counter={3}
                  counterVariant={COUNTER_VARIANTS.notificationCounter}
                />
                <ModalContainer active={notificationsModalShown} width={320}>
                  <BackgroundWrapper variant={BACKGROUND_VARIANTS.secondary}>
                    <Container
                      variant={CONTAINER_VARIANTS.default}
                      flex
                      spaceBetween
                      alignCenter
                    >
                      <Title variant={TITLE_VARIANTS.subtitle}>
                        Notifications
                      </Title>
                      <ColoredText color={COLORED_TEXT_COLORS.secondary}>
                        4 New
                      </ColoredText>
                    </Container>
                  </BackgroundWrapper>
                  <Container>
                    <BackgroundWrapper variant={BACKGROUND_VARIANTS.secondary}>
                      <Container
                        paddingLeft={8}
                        paddingTop={8}
                        paddingRight={8}
                      >
                        <Button variant={BUTTON_VARIANTS.tab} active>
                          All(4)
                        </Button>
                        <Button variant={BUTTON_VARIANTS.tab}>Messages</Button>
                        <Button variant={BUTTON_VARIANTS.tab}>Alerts</Button>
                      </Container>
                    </BackgroundWrapper>
                    <BackgroundWrapper variant={BACKGROUND_VARIANTS.white}>
                      <Container
                        variant={CONTAINER_VARIANTS.big}
                        maxHeight={320}
                        scroll
                      >
                        <Button>
                          <Container
                            variant={CONTAINER_VARIANTS.secondary}
                            flex
                            paddingRight={30}
                          >
                            <Container paddingRight={16}>
                              <Icon background={ICON_BACKGROUND.reward}>
                                <i className="bx bx-badge-check"></i>
                              </Icon>
                            </Container>

                            <Container paddingRight={10}>
                              <Title
                                variant={TITLE_VARIANTS.primary}
                                textAlign="left"
                                align="left"
                                fontWeight={500}
                              >
                                Your <b>Elite</b> author Graphic Optimization
                                <span className="reward"> reward </span>
                                is ready!
                              </Title>
                              <Text variant={TEXT_VARIANTS.secondary}>
                                <i className="mdi mdi-clock-outline"></i> Just
                                30 sec ago
                              </Text>
                            </Container>
                            <Checkbox />
                          </Container>
                        </Button>
                        <Button>
                          <Container
                            variant={CONTAINER_VARIANTS.secondary}
                            flex
                            paddingRight={30}
                          >
                            <Container paddingRight={16}>
                              <Img
                                src="./assets/images/avatar-2.jpeg"
                                alt="Item"
                                variant={IMG_VARIANTS.primary}
                              />
                            </Container>

                            <Container paddingRight={10}>
                              <Title
                                variant={TITLE_VARIANTS.primary}
                                textAlign="left"
                              >
                                Angela Bernier
                              </Title>
                              <Text variant={TEXT_VARIANTS.secondary}>
                                Answered to your comment on the cash flow
                                forecast's graph 🔔.
                              </Text>

                              <Text variant={TEXT_VARIANTS.secondary}>
                                <i className="mdi mdi-clock-outline"></i> 48 min
                                ago
                              </Text>
                            </Container>
                            <Checkbox />
                          </Container>
                        </Button>
                        <Button>
                          <Container
                            variant={CONTAINER_VARIANTS.secondary}
                            flex
                            paddingRight={30}
                          >
                            <Container paddingRight={16}>
                              <Icon background={ICON_BACKGROUND.success}>
                                <i className="bx bx-message-square-dots"></i>
                              </Icon>
                            </Container>
                            <Container paddingRight={10}>
                              <Title
                                variant={TITLE_VARIANTS.primary}
                                textAlign="left"
                              >
                                You have received
                                <span className="success"> 20</span> new
                                messages in the conversation
                              </Title>
                              <Text variant={TEXT_VARIANTS.secondary}>
                                <i className="mdi mdi-clock-outline"></i> 2 hrs
                                ago
                              </Text>
                            </Container>
                            <Checkbox />
                          </Container>
                        </Button>
                        <Button>
                          <Container
                            variant={CONTAINER_VARIANTS.secondary}
                            flex
                            paddingRight={30}
                          >
                            <Container paddingRight={16}>
                              <Img
                                src="./assets/images/avatar-2.jpeg"
                                alt="Item"
                                variant={IMG_VARIANTS.primary}
                              />
                            </Container>
                            <Container paddingRight={16}>
                              <Title
                                variant={TITLE_VARIANTS.primary}
                                textAlign="left"
                              >
                                Angela Bernier
                              </Title>

                              <Text variant={TEXT_VARIANTS.secondary}>
                                Answered to your comment on the cash flow
                                forecast's graph 🔔.
                              </Text>
                              <Text variant={TEXT_VARIANTS.secondary}>
                                <i className="mdi mdi-clock-outline"></i> 48 min
                                ago
                              </Text>
                            </Container>
                            <Checkbox />
                          </Container>
                        </Button>
                        <Container
                          paddingTop={10}
                          paddingBottom={10}
                          flex
                          alignCenter
                          column
                        >
                          <Button
                            variant={BUTTON_VARIANTS.primary}
                            color={BUTTON_COLORS.success}
                            alignItems="center"
                            flex
                          >
                            View All Notifications
                            <i className="ri-arrow-right-line align-middle"></i>
                          </Button>
                        </Container>
                      </Container>
                    </BackgroundWrapper>
                  </Container>
                </ModalContainer>
              </Container>
            </Container>
            <Container height100 relative>
              <Container backgroundSecondary height100>
                <Button
                  height100
                  onClick={() => toggleProfileModal(!profileModalShown)}
                >
                  <Container
                    variant={CONTAINER_VARIANTS.secondary}
                    flex
                    alignCenter
                    flex1
                  >
                    <Img
                      variant={IMG_VARIANTS.primary}
                      src="../assets/images/avatar.jpeg"
                      alt="profile"
                    />
                    <Container column flex paddingLeft={10}>
                      <Title
                        variant={TITLE_VARIANTS.primary}
                        className="header-profile-name"
                      >
                        Anna Adame
                      </Title>
                      <Text
                        variant={TEXT_VARIANTS.secondary}
                        className="header-profile-position"
                      >
                        Founder
                      </Text>
                    </Container>
                  </Container>
                </Button>
              </Container>
              <ModalContainer active={profileModalShown}>
                <Container variant={CONTAINER_VARIANTS.secondary}>
                  <Title variant={TITLE_VARIANTS.neutral}>Welcome Anna!</Title>
                </Container>
                <Container width100 paddingBottom={10} borderSolid>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-account-circle text-muted fs-16 align-middle me-1"
                  >
                    Profile
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"
                  >
                    Messages
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"
                  >
                    Taskboard
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"
                  >
                    Help
                  </Button>
                </Container>
                <Container width100 paddingTop={10}>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-wallet text-muted fs-16 align-middle me-1"
                  >
                    Balance: <b>$5971.67</b>
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"
                  >
                    Settings
                    <ColoredText
                      color={COLORED_TEXT_COLORS.success}
                      variant={COLORED_TEXT_VARIANTS.small}
                      colo
                    >
                      New
                    </ColoredText>
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-lock text-muted fs-16 align-middle me-1"
                  >
                    Lock Screen
                  </Button>
                  <Button
                    variant={BUTTON_VARIANTS.list}
                    iconName="mdi mdi-logout text-muted fs-16 align-middle me-1"
                  >
                    Logout
                  </Button>
                </Container>
              </ModalContainer>
            </Container>
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
