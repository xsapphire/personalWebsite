import { PageHeader } from "../components/PageHeader";
import { NavLink } from "@remix-run/react";
import { sprinkles } from "../styles/sprinkles.css";
import { Card } from "../components/card/Card";
import { ThemedIcon } from "../components/ThemedIcon";
import { codeData } from "~/contents";
import { themeColors } from "~/styles/theme.css";
import { CardHolder } from "~/components/card/CardHolder";
import {
  cardHeaderIcon,
  cardTitle,
  cardTitleEmphasize,
} from "~/components/card/card.css";
import { link } from "~/styles/base.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const CodeCardTitle = ({
  title,
  subtitle,
  faIcon,
}: {
  title: string;
  subtitle?: string;
  faIcon?: IconDefinition;
}) => {
  return (
    <div style={{ position: "relative" }}>
      {faIcon && (
        <div className={cardHeaderIcon}>
          <ThemedIcon
            faIcon={faIcon}
            className={sprinkles({
              width: {
                portable: "large",
                desktop: "large",
              },
              height: {
                portable: "large",
                desktop: "large",
              },
            })}
            color={themeColors.font.h1}
          />
        </div>
      )}

      <h3 className={cardTitle} style={{ fontWeight: "400" }}>
        {subtitle}
        <br />
        <span className={cardTitleEmphasize}>{title}</span>
      </h3>
    </div>
  );
};

export default function Code() {
  return (
    <>
      <PageHeader title="Code" />

      <p>
        Ths website is a little showcase of my Frontend code with React and
        Typescript. It is built with Remix and Vanilla Extract CSS and hosted on
        Cloudflare Page. You can view the code in my{" "}
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

      <CardHolder style={{ margin: "40px 0" }}>
        {codeData.map((d) => {
          return (
            <Card
              key={d.title}
              title={
                <CodeCardTitle
                  title={d.title}
                  subtitle={d.subtitle}
                  faIcon={d.faIcon}
                />
              }
            >
              {d.description}
            </Card>
          );
        })}
      </CardHolder>
    </>
  );
}
