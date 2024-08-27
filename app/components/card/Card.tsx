import { ReactNode } from "react";
import { sprinkles } from "../../styles/sprinkles.css";
import { card, cardTitle } from "./card.css";

const cardPadding = sprinkles({
  padding: {
    portable: "medium",
    desktop: "medium",
  },
});

export const Card = ({
  title,
  children,
}: {
  title: ReactNode | string;
  children: ReactNode;
}) => {
  return (
    <div className={card}>
      <div className={cardPadding}>
        {typeof title === "string" ? (
          <h3 className={cardTitle}>{title}</h3>
        ) : (
          title
        )}
      </div>
      <div className={cardPadding}>{children}</div>
    </div>
  );
};
