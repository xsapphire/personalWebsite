import { style } from "@vanilla-extract/css";
import { baseButton, card } from "./styles.css";
import { sprinkles } from "./sprinkles.css";
import { themeColors } from "./theme.css";

export const experienceCard = style([
  card,
  {
    minHeight: "290px",
    display: "flex",
  },
]);

export const tabButton = style([
  baseButton,
  sprinkles({
    padding: {
      mobile: "small",
      tablet: "small",
      desktop: "small",
    },
    gap: {
      mobile: "small",
      tablet: "small",
      desktop: "small",
    },
  }),
  {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    color: themeColors.font.h3,
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
    padding: {
      mobile: "medium",
      tablet: "medium",
      desktop: "medium",
    },
  }),
  {
    borderRight: `1px solid ${themeColors.background.body}`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
]);

export const dotConnection = style({
  width: 1,
  height: "calc(100% - 72px)",
  background: themeColors.font.h3,
  position: "absolute",
  left: "27.5px",
  top: "37px",
});
