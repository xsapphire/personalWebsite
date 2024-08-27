import { style } from "@vanilla-extract/css";
import { card } from "~/components/card/card.css";
import { baseButton, boxWithIcon } from "~/styles/base.css";
import { sprinkles } from "~/styles/sprinkles.css";
import { themeColors } from "~/styles/theme.css";

export const experienceCard = style([
  card,
  {
    minHeight: "290px",
    display: "flex",
  },
  sprinkles({
    flexDirection: {
      portable: "column",
      desktop: "row",
    },
  }),
]);

export const tabButton = style([
  baseButton,
  boxWithIcon,
  sprinkles({
    padding: {
      portable: "small",
      desktop: "small",
    },
  }),
  {
    background: "transparent",
    color: themeColors.font.h3,
    fontSize: "16px",
    width: "max-content",
    selectors: {
      "&:hover": {
        color: themeColors.font.linkHover,
      },
    },
  },
]);

export const activeTabButton = style([
  tabButton,
  {
    color: themeColors.font.link,
  },
]);

export const experienceMenu = style([
  sprinkles({
    padding: {
      portable: "medium",
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
