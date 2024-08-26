import { PageHeader } from "../components/pageHeader";
import { cardTitle, link, mainContent } from "../styles/styles.css";
import { NavLink } from "@remix-run/react";
import { sprinkles } from "../styles/sprinkles.css";
import { Card } from "../components/Card";
import { cardHeaderIcon, cardTitleEmphasize } from "../styles/_index.css";
import { ThemedIcon } from "../components/ThemedIcon";
import { codeData } from "~/contents";
import { themeColors } from "~/styles/theme.css";

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
        {codeData.map((d) => {
          return (
            <Card
              key={d.title}
              title={
                <div style={{ position: "relative" }}>
                  {d.faIcon && (
                    <div className={cardHeaderIcon}>
                      <ThemedIcon
                        faIcon={d.faIcon}
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
                  )}

                  <h3 className={cardTitle} style={{ fontWeight: "400" }}>
                    {d.subtitle}
                    <br />
                    <span className={cardTitleEmphasize}>{d.title}</span>
                  </h3>
                </div>
              }
            >
              {d.description}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
