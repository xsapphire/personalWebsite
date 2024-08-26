import type { MetaFunction } from "@remix-run/cloudflare";
import { ReactElement } from "react";
import { ThemedIcon } from "../components/ThemedIcon";
import {
  IconDefinition,
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  cardHeaderIcon,
  cardTitleEmphasize,
  introduction,
  locationLabel,
  nameLabel,
} from "../styles/_index.css";
import { NavLink } from "@remix-run/react";
import { sprinkles } from "../styles/sprinkles.css";
import { Card } from "../components/Card";
import { link, mainContent, cardTitle } from "../styles/styles.css";
import { devotionData } from "~/contents";
import { themeColors } from "~/styles/theme.css";

const DevotionCard = ({
  faIcon,
  title,
  description,
}: {
  faIcon: IconDefinition;
  title: string;
  description: string;
}): ReactElement => {
  const titleArr = title.split(" ");

  return (
    <Card
      title={
        <div style={{ position: "relative" }}>
          <div className={cardHeaderIcon}>
            <ThemedIcon
              faIcon={faIcon}
              className={sprinkles({
                width: {
                  mobile: "large",
                  tablet: "large",
                  desktop: "large",
                },
                height: {
                  mobile: "large",
                  tablet: "large",
                  desktop: "large",
                },
              })}
              color={themeColors.font.h1}
            />
          </div>

          <h3 className={cardTitle} style={{ fontWeight: "400" }}>
            {titleArr[0]}
            <br />
            <span className={cardTitleEmphasize}>{titleArr[1]}</span>
            <br />
            {titleArr[2]}
          </h3>
        </div>
      }
    >
      {description}
    </Card>
  );
};

const ReadMoreLink = ({
  route,
  text,
}: {
  route: string;
  text: string;
}): ReactElement => {
  return (
    <div
      className={sprinkles({
        display: {
          mobile: "flex",
          tablet: "flex",
          desktop: "flex",
        },
        gap: {
          mobile: "small",
          tablet: "small",
          desktop: "medium",
        },
        alignItems: {
          mobile: "center",
          tablet: "center",
          desktop: "center",
        },
      })}
    >
      <ThemedIcon faIcon={faArrowRight} color={themeColors.font.link} />
      <NavLink to={route} className={link}>
        {text}
      </NavLink>
    </div>
  );
};

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan" },
    {
      name: "description",
      content: "Welcome to Jinglin Shan's personal website",
    },
  ];
};

export default function Index() {
  return (
    <div className={mainContent}>
      <p className={nameLabel}>Hi, I am Jinglin!</p>
      <div className={locationLabel}>
        <ThemedIcon faIcon={faLocationDot} />
        Los Angeles &#x2022; Open to Work &#x2022;{" "}
        <NavLink
          to="https://www.linkedin.com/in/jinglin-shan/"
          className={link}
        >
          LinkedIn
        </NavLink>
      </div>

      <p className={introduction}>
        I am a Frontend Developer with 5 years of experience with React /
        Typescript / GraphQL, <br />
        and an UI designer with passion of creating technology solutions for any
        fields.
      </p>

      <p className={introduction}>I devote to ...</p>

      <div
        className={sprinkles({
          display: {
            mobile: "flex",
            tablet: "flex",
            desktop: "grid",
          },
          gap: {
            mobile: "medium",
            tablet: "medium",
            desktop: "medium",
          },
        })}
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          flexDirection: "column",
          margin: "40px 0",
        }}
      >
        {devotionData.map((d) => {
          return (
            <DevotionCard
              key={d.title}
              title={d.title}
              description={d.description}
              faIcon={d.faIcon}
            />
          );
        })}
      </div>
      <div
        className={sprinkles({
          flexDirection: {
            tablet: "column",
            desktop: "column",
          },
          display: {
            tablet: "flex",
            desktop: "flex",
          },
          gap: {
            mobile: "medium",
            tablet: "medium",
          },
          paddingBottom: {
            mobile: "large",
            tablet: "large",
          },
        })}
      >
        <ReadMoreLink route="experience" text="Read about my work experience" />
        <ReadMoreLink
          route="code"
          text="See the libraries I have experience with"
        />
      </div>
    </div>
  );
}
