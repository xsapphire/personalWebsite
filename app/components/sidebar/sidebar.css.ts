import { style } from "@vanilla-extract/css";
import { baseButton, box, boxWithIcon } from "~/styles/base.css";
import { baseColors } from "~/styles/colors";
import { sprinkles } from "~/styles/sprinkles.css";
import { themeColors } from "~/styles/theme.css";

export const sidebarMenu = style([
  box,
  sprinkles({
    gap: {
      portable: "exLarge",
      desktop: "small",
    },
  }),
]);

export const sidebarItem = style([
  boxWithIcon,
  sprinkles({
    padding: {
      portable: "medium",
      desktop: "medium",
    },
    borderRadius: "rounded",
  }),
  {
    color: baseColors.neutral.white,
    selectors: {
      "&:hover": {
        background: themeColors.hover,
      },
    },
  },
]);

export const activeSidebarItem = style([
  sidebarItem,
  {
    background: themeColors.hover,
  },
]);

export const nameIcon = style({
  width: 50,
  height: 50,
  padding: 18,
  borderRadius: 10,
  border: "5px solid white",
  fontSize: 18,
  color: "white",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const modeButton = style([
  baseButton,
  sprinkles({
    padding: {
      portable: "medium",
      desktop: "small",
    },
    display: "flex",
    gap: "medium",
    borderRadius: "rounded",
  }),
  {
    color: baseColors.green["green-700"],
    selectors: {
      "&:hover": {
        boxShadow: `0 0 5px ${themeColors.hover}`,
      },
    },
  },
]);
