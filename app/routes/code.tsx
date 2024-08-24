import { PageHeader } from "../components/pageHeader";
import { cardTitle, link, mainContent } from "../styles/styles.css";
import { NavLink } from "@remix-run/react";
import { sprinkles } from "../styles/sprinkles.css";
import { Card } from "../components/Card";
import { cardHeaderIcon, cardTitleEmphasize } from "../styles/_index.css";
import { ThemedIcon } from "../components/ThemedIcon";
import {
  IconDefinition,
  faLayerGroup,
  faList,
  faVialCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { vars } from "../styles/light.css";

const libraries: {
  category: string;
  name: string;
  desc: string;
  faIcon: IconDefinition;
}[] = [
  {
    category: "API",
    name: "Apollo GraphQL",
    desc: "Apollo GraphQL is a modern API platform. It has many advantages over older API platforms which you can find on their website, but the reason I am very fond of GraphQL is how much boilerplate code it can reduce. With GraphQL I just query what I want with very little syntax that I need to follow. I helped set up the middle tier on the first year, and I have worked on the front-end side with GraphQL for over 4 years.",
    faIcon: faLayerGroup,
  },
  {
    category: "Testing",
    name: "Playwright",
    desc: "Because Square 8 was a small team, I had written quite a few tests for automate testing. We started with Cypress as testing tool, but as we were constantly improving our codebase, we the front-end team, refactored the testing files from Cypress to Playwright. We looked at the Playwright documents and played with it for a week, and we all prefer Playwright. I liked Playwright a lot because it has a much better readability and eaiser tracing. ",
    faIcon: faVialCircleCheck,
  },
  {
    category: "UI Component",
    name: "react-hook-form",
    desc: "I had experience with many react component libraries that helped the company build the management platform quicker and easier. We dealt with forms and tables for most of the time, and therefore I had extensive experience in react-hook-form. We picked react-hook-form because it is performant, flexible and extensible. We had been using their validation for about 2~3 years, but in the end we switched to zod schema as we have defined more custom types on our backend side.",
    faIcon: faList,
  },
];

export default function Code() {
  return (
    <div className={mainContent}>
      <PageHeader title="Code" />
      <p>
        Ths website is a little showcase of my Frontend code with React and
        Typescript. It is built with Remix and Vanilla Extract CSS. You can view
        the code in my{" "}
        <NavLink
          to="https://github.com/xsapphire/personalWebsite/tree/master"
          className={link}
        >
          Github Repo
        </NavLink>
        .
      </p>
      <p style={{ marginBottom: "24px" }}>
        I have experience with many other libraries as well ...
      </p>

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
        {libraries.map((l) => {
          return (
            <Card
              key={l.name}
              title={
                <div style={{ position: "relative" }}>
                  <div className={cardHeaderIcon}>
                    <ThemedIcon
                      faIcon={l.faIcon}
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
                      color={vars.colors.font.h1}
                    />
                  </div>

                  <h3 className={cardTitle} style={{ fontWeight: "400" }}>
                    {l.category}
                    <br />
                    <span className={cardTitleEmphasize}>{l.name}</span>
                  </h3>
                </div>
              }
            >
              {l.desc}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
