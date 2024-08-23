import React, { ReactElement } from "react";
import { sprinkles } from "../styles/sprinkles.css";
import { vars } from "../styles/light.css";
import { style } from "@vanilla-extract/css";
import { pageHeaderDecor } from "../styles/styles.css";

export const PageHeader = ({ title }: { title: string }): ReactElement => {
  return (
    <div
      class={`${sprinkles({
        display: "flex",
        gap: "medium",
        alignItems: "center",
      })}`}
    >
      <div class={pageHeaderDecor} />
      <h1 style={{ color: vars.colors.font.h1 }}>{title}</h1>
    </div>
  );
};
