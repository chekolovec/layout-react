import React from "react";
import { Container, CONTAINER_VARIANTS } from "../../baseComponents/Container";
import { ProductReview } from "../ProductReview";
import { RecentActivityItem } from "../RecentActivityItem";
import {
  Title,
  TITLE_COLORS,
  TITLE_VARIANTS,
  TITLE_WEIGHTS,
} from "../../baseComponents/Title";
import { Text, TEXT_VARIANTS } from "../../baseComponents/Text";
import "./styles.scss";
import {
  Icon,
  ICON_BACKGROUND,
  ICON_NAMES,
  ICON_VARIANTS,
} from "../../baseComponents/Icon";
import { Img, IMG_VARIANTS } from "../../baseComponents/Img";
import { Button, BUTTON_VARIANTS } from "../../baseComponents/Button";
import { Span } from "../../baseComponents/Span";
import { Ol } from "../../baseComponents/Ol";
import { Li } from "../../baseComponents/Li";
import { Stars } from "../Stars";

const CUSTOMER_REVIEW_COLORS = {
  success: "success",
  pending: "pending",
  failure: "failure",
};

const RECENT_ACTIVITY_DATA = [
  {
    title: "Purchase by James Price",
    content: (
      <Text variant={TEXT_VARIANTS.small}>Product noise evolve smartwatch</Text>
    ),
    date: "02:14 PM Today",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.earning}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.shopping} />
      </Icon>
    ),
  },
  {
    title: "Added new style collection",
    content: (
      <>
        <Text variant={TEXT_VARIANTS.small}>By Nesta Technologies</Text>
        <Container
          variant={CONTAINER_VARIANTS.middle}
          flex
          alignCenter
          className="activity-pictures-wrapper"
        >
          <Button className="activity-picture-button">
            <Img
              variant={IMG_VARIANTS.secondary}
              src="./assets/images/clothes.png"
              alt="Activity"
              width={47}
              height={47}
            />
          </Button>
          <Button className="activity-picture-button">
            <Img
              variant={IMG_VARIANTS.secondary}
              src="./assets/images/clothes.png"
              alt="Activity"
              width={47}
              height={47}
            />
          </Button>
          <Button className="activity-picture-button">
            <Img
              variant={IMG_VARIANTS.secondary}
              src="./assets/images/clothes.png"
              alt="Activity"
              width={47}
              height={47}
            />
          </Button>
        </Container>
      </>
    ),
    date: "9:47 PM Yesterday",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.success}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.stackFill} />
      </Icon>
    ),
  },
  {
    title: "Natasha Carey have liked the products",
    content: (
      <Text variant={TEXT_VARIANTS.small}>
        Allow users to like products in your WooCommerce store.
      </Text>
    ),
    img: (
      <Img
        src="./assets/images/avatar-2.jpeg"
        alt="Activity avatar"
        variant={IMG_VARIANTS.icon}
        className="activity-img"
      />
    ),
    date: "25 Dec, 2021",
  },
  {
    title: (
      <>
        Today offers by{" "}
        <Button variant={BUTTON_VARIANTS.link} className="activity-link">
          {" "}
          Digitech Galaxy{" "}
        </Button>
      </>
    ),
    content: (
      <Text variant={TEXT_VARIANTS.small}>
        Offer is valid on orders of Rs.500 Or above for selected products only.
      </Text>
    ),
    date: "12 Dec, 2021",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.offer}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.sale} />
      </Icon>
    ),
  },
  {
    title: "Favoried Product",
    content: (
      <Text variant={TEXT_VARIANTS.small}>
        Esther James have favorited product.
      </Text>
    ),
    date: "25 Nov, 2021",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.success}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.bookmark} />
      </Icon>
    ),
  },
  {
    title: "Flash sale starting Tomorrow.",
    content: (
      <Text variant={TEXT_VARIANTS.small}>
        Flash sale by{" "}
        <Button variant={BUTTON_VARIANTS.link} className="activity-link">
          Zoetic Fashion
        </Button>
      </Text>
    ),
    date: "22 Oct, 2021",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.offer}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.sale} />
      </Icon>
    ),
  },
  {
    title: "Monthly sales report",
    content: (
      <Text variant={TEXT_VARIANTS.small}>
        <Span className="activity-warning">2 days left </Span>
        notification to submit the monthly sales report.
        <Button
          variant={BUTTON_VARIANTS.linkUnderlined}
          className="activity-link-warning"
        >
          Reports Builder
        </Button>
      </Text>
    ),
    date: "15 Oct",
    img: (
      <Icon
        variant={ICON_VARIANTS.secondary}
        background={ICON_BACKGROUND.report}
      >
        <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.chart} />
      </Icon>
    ),
  },
  {
    title: "Frank Hook Commented",
    content: (
      <Text variant={TEXT_VARIANTS.small} className="comment">
        {
          '" A product that has reviews is more likable to be sold than a product. " >'
        }
      </Text>
    ),
    date: "26 Aug, 2021",
    img: (
      <Img
        variant={IMG_VARIANTS.icon}
        className="activity-img"
        src="./assets/images/avatar-3.jpeg"
        alt="Activity avatar"
      />
    ),
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Mobile & Accessories",
    amount: "10,294",
  },
  {
    title: "Desktop",
    amount: "6,256",
  },
  {
    title: "Electronics",
    amount: "3,479",
  },
  {
    title: "Home & Furniture",
    amount: "2,275",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
  {
    title: "Grocery",
    amount: "1,950",
  },
];

const PRODUCT_REVIEWS = [
  {
    name: "Nancy Martino",
    text: '" The product is very beautiful. I like it. "',
    score: 9,
    img: "./assets/images/avatar-2.jpeg",
  },
  {
    name: "Nancy Martino",
    text: '" Great product and looks great, lots of features. "',
    score: 8,
    img: "./assets/images/seller.png",
  },
];

const CUSTOMER_REVIEWS = [
  {
    name: "5 star ",
    percent: 60,
    amount: 2758,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "4 star ",
    percent: 50,
    amount: 1063,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "3 star ",
    percent: 40,
    amount: 997,
    color: CUSTOMER_REVIEW_COLORS.pending,
  },
  {
    name: "2 star ",
    percent: 4,
    amount: 227,
    color: CUSTOMER_REVIEW_COLORS.success,
  },
  {
    name: "1 star ",
    percent: 10,
    amount: 408,
    color: CUSTOMER_REVIEW_COLORS.failure,
  },
];

export const RightBar = () => {
  const renderCategoryItem = ({ title, amount, index }) => (
    <Li className="categories-item" key={index}>
      <Button className="categories-link">
        {title} <Span className="categories-link-inner">({amount})</Span>
      </Button>
    </Li>
  );

  const renderCustomerReview = ({ name, percent, amount, color, index }) => (
    <Container
      flex
      spaceBetween
      alignCenter
      className="customer-progress-line"
      key={index}
    >
      <Span>{name}</Span>
      <Container className="line-visual">
        <Container
          width={`${percent}%`}
          color
          className={`line-visual-bar ${color}`}
        />
      </Container>
      <Span className="line-score">{amount}</Span>
    </Container>
  );

  return (
    <Container width={280} paddingRight={0} className="rightbar">
      <Container
        variant={CONTAINER_VARIANTS.default}
        className="recent-activity"
      >
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.secondary}
          weight={TITLE_WEIGHTS.bold}
          className="rightbar-title"
        >
          RECENT ACTIVITY
        </Title>
        <Container className="activity-list">
          {RECENT_ACTIVITY_DATA.map(
            ({ title, content, date, img, imgBackground }, index, array) => (
              <RecentActivityItem
                title={title}
                content={content}
                date={date}
                img={img}
                imgBackground={imgBackground}
                key={index}
                last={index === array.length - 1}
              />
            )
          )}
        </Container>
      </Container>
      <Container variant={CONTAINER_VARIANTS.default}>
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.secondary}
          weight={TITLE_WEIGHTS.bold}
          className="rightbar-title"
        >
          TOP 10 CATEGORIES
        </Title>
        <Ol className="categories-list">
          {CATEGORY_ITEMS.map(({ title, amount }, index) =>
            renderCategoryItem({ title, amount, index })
          )}
        </Ol>
        <Container className="categories-all-container">
          <Button
            variant={BUTTON_VARIANTS.linkUnderlined}
            className="categories-all"
          >
            View all Categories
          </Button>
        </Container>
      </Container>
      <Container variant={CONTAINER_VARIANTS.default}>
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.secondary}
          weight={TITLE_WEIGHTS.bold}
          className="rightbar-title"
        >
          PRODUCTS REVIEWS
        </Title>
        {PRODUCT_REVIEWS.map(({ name, text, img, score }, index) => (
          <ProductReview
            name={name}
            text={text}
            img={img}
            score={score}
            key={index}
          />
        ))}
      </Container>
      <Container variant={CONTAINER_VARIANTS.default} className="customer">
        <Title
          variant={TITLE_VARIANTS.primary}
          color={TITLE_COLORS.secondary}
          weight={TITLE_WEIGHTS.bold}
          className="rightbar-title"
        >
          CUSTOMER REVIEWS
        </Title>
        <Container
          flex
          variant={CONTAINER_VARIANTS.secondary}
          className="customer-total"
          alignCenter
          spaceBetween
        >
          <Container flex alignCenter className="stars-container">
            <Stars score={9} />
          </Container>
          <Span className="stars-total">4.5 out of 5</Span>
        </Container>
        <Text
          align="center"
          variant={TEXT_VARIANTS.small}
          className="customer-total-text"
        >
          Total 5.50k reviews
        </Text>
        <Container>
          {CUSTOMER_REVIEWS.map(({ name, percent, amount, color }, index) =>
            renderCustomerReview({ name, percent, amount, color, index })
          )}
        </Container>
      </Container>
      <Container variant={CONTAINER_VARIANTS.default}>
        <Container
          variant={CONTAINER_VARIANTS.default}
          flex
          alignCenter
          justifyCenter
          column
          className="invite-container"
        >
          <Img
            src="./assets/images/giftbox.png"
            alt="Invite"
            width={94}
            height={65}
          />
          <Title
            variant={TITLE_VARIANTS.middle}
            weight={TITLE_WEIGHTS.heavy}
            color={TITLE_COLORS.primary}
            className="invite-title"
          >
            Invite New Seller
          </Title>

          <Text
            variant={TEXT_VARIANTS.secondary}
            align="center"
            className="invite-text"
          >
            Refer a new seller to us and earn $100 per refer.
          </Text>
          <Button className="invite-button">
            <Container
              flex
              alignCenter
              justifyCenter
              height100
              className="invite-icon-container"
            >
              <Icon variant={ICON_VARIANTS.italic} name={ICON_NAMES.mailFill} />
            </Container>
            <Text className="invite-button-text">Invite now</Text>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
