import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { Card } from "./Card";
import { ThemedIcon } from "../ThemedIcon";
import { sprinkles } from "../../styles/sprinkles.css";
import { themeColors } from "../../styles/theme.css";
import { cardHeaderIcon, cardTitle, cardTitleEmphasize } from "./card.css";

export const DevotionCard = ({
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
