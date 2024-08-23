import React, { ReactNode } from "react";
import { sprinkles } from "../styles/sprinkles.css";
import { card, cardTitle } from "../styles/styles.css";
import { ThemedIcon } from "./ThemedIcon";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { vars } from "../styles/light.css";

export const Card = ({
  title,
  children,
}: {
  title: ReactNode | string;
  children: ReactNode;
}) => {
  return (
    <div class={card}>
      <div class={sprinkles({ padding: "medium" })}>
        {typeof title === "string" ? <h3 class={cardTitle}>{title}</h3> : title}
      </div>
      <div class={sprinkles({ padding: "medium" })}>{children}</div>
    </div>
  );
};
