import { ReactNode } from "react";
import { sprinkles } from "../styles/sprinkles.css";
import { card, cardTitle } from "../styles/styles.css";

export const Card = ({
  title,
  children,
}: {
  title: ReactNode | string;
  children: ReactNode;
}) => {
  return (
    <div className={card}>
      <div
        className={sprinkles({
          padding: {
            mobile: "medium",
            tablet: "medium",
            desktop: "medium",
          },
        })}
      >
        {typeof title === "string" ? (
          <h3 className={cardTitle}>{title}</h3>
        ) : (
          title
        )}
      </div>
      <div
        className={sprinkles({
          padding: {
            mobile: "medium",
            tablet: "medium",
            desktop: "medium",
          },
        })}
      >
        {children}
      </div>
    </div>
  );
};
