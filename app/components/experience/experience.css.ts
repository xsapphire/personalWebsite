import { style } from "@vanilla-extract/css";
import { card } from "~/components/card/card.css";
import { baseButton, box, boxWithIcon } from "~/styles/base.css";
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
        color: themeColors.font.link,
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
  box,
  sprinkles({
    padding: {
      portable: "medium",
      desktop: "medium",
    },
    gap: {
      portable: "medium",
    },
    borderRight: {
      desktop: "bgColor",
    },
    borderBottom: {
      portable: "bgColor",
    },
  }),
  {
    position: "relative",
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
