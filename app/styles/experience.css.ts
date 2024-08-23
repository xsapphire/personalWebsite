import { style } from "@vanilla-extract/css";
import { baseButton, card } from "./styles.css";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./light.css";

export const experienceCard = style([
  card,
  sprinkles({ display: "flex" }),
  {
    minHeight: "290px",
  },
]);

export const tabButton = style([
  baseButton,
  sprinkles({
    padding: "small",
    display: "flex",
    gap: "small",
    alignItems: "center",
  }),
  {
    background: "transparent",
    color: vars.colors.font.h3,
    fontSize: "16px",
    width: "max-content",
    selectors: {
      "&:hover": {
        fontWeight: "600",
      },
    },
  },
]);

export const experienceMenu = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "medium",
  }),
  {
    borderRight: `1px solid ${vars.colors.background.body}`,
    position: "relative",
  },
]);

export const dotConnection = style({
  width: 1,
  height: "calc(100% - 72px)",
  background: vars.colors.font.h3,
  position: "absolute",
  left: "27.5px",
  top: "37px",
});
