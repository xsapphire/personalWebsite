import type { MetaFunction } from "@remix-run/cloudflare";
import { ReactElement } from "react";
import { ThemedIcon } from "../components/ThemedIcon";
import {
  IconDefinition,
  faArrowRight,
  faBookOpenReader,
  faLocationDot,
  faMicrochip,
  faRoute,
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
import { vars } from "../styles/light.css";
import { link, mainContent, cardTitle } from "../styles/styles.css";

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
                  desktop: "regular",
                },
                height: {
                  mobile: "large",
                  tablet: "large",
                  desktop: "regular",
                },
              })}
              color={vars.colors.font.h1}
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
        display: "flex",
        gap: "small",
        alignItems: "center",
      })}
    >
      <ThemedIcon faIcon={faArrowRight} color={vars.colors.font.link} />
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
        Los Angeles
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
        <DevotionCard
          title="Write Readable Code"
          description="
            Code should not only produce expected results, but also 
            be easy for other developers to read. I have practiced and 
            emphasized on producing good quality code, including breaking 
            down complex components, extracting out duplicate codes, 
            writing detailed documentations, using descriptive variable
            names and so on. 
          "
          faIcon={faBookOpenReader}
        />
        <DevotionCard
          title="Make Reasonable Choice"
          description="
            Every choice we make shapes the outcome. The choice we make 
            might not produce the best outcome, but I want to make sure 
            that it is a reasonable one to make. We need to make decisions 
            on problems like which library to use, which user interface design 
            to adopt all through our career, and I learn reasons for each of them.
          "
          faIcon={faRoute}
        />
        <DevotionCard
          title="Apply Recent Technology"
          description="
            We have been programming with high-level programming languages that 
            are easier for us to read and write, and on top of that, people are 
            constantly developing useful libraries that produces code with better 
            readability, flexibility and client-side performance. I am in favor of
            applying the latest greatest pick of tech to the product. 
          "
          faIcon={faMicrochip}
        />
      </div>
      <div
        className={sprinkles({
          flexDirection: "column",
          display: "flex",
          gap: "small",
          paddingBottom: {
            mobile: "large",
            tablet: "large",
          },
        })}
      >
        <ReadMoreLink
          route="experience"
          text="Continue to read about my work experience"
        />
        <ReadMoreLink
          route="code"
          text="See the libraries I have experience with"
        />
      </div>
    </div>
  );
}
