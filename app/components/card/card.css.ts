import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/styles/sprinkles.css";
import { themeColors } from "~/styles/theme.css";

export const cardHolder = style([
  sprinkles({
    display: {
      portable: "flex",
      desktop: "grid",
    },
    gap: {
      portable: "medium",
      desktop: "medium",
    },
  }),
  {
    flexDirection: "column",
  },
]);

export const card = style([
  {
    background: themeColors.background.card,
  },
  sprinkles({
    borderRadius: {
      portable: "card",
      desktop: "card",
    },
  }),
]);

export const cardTitle = style({
  color: themeColors.font.h1,
  margin: 0,
});

export const cardHeaderIcon = style({
  position: "absolute",
  top: 0,
  right: 0,
});

export const cardTitleEmphasize = style({
  fontSize: "24px",
  fontWeight: 800,
});
