import { style } from "@vanilla-extract/css";
import {
  baseButton,
  box,
  boxWithIcon,
  flexAlignCenter,
  flexJustifyCenter,
} from "~/styles/base.css";
import { baseColors } from "~/styles/colors";
import { sprinkles } from "~/styles/sprinkles.css";
import { themeColors } from "~/styles/theme.css";

export const sidebarMenu = style([
  box,
  sprinkles({
    gap: {
      portable: "large",
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
    borderRadius: {
      portable: "rounded",
      desktop: "rounded",
    },
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

export const nameIcon = style([
  box,
  flexAlignCenter,
  flexJustifyCenter,
  {
    width: 40,
    height: 40,
    border: "5px solid white",
    color: "white",
  },
  sprinkles({
    padding: {
      portable: "small",
      desktop: "medium",
    },
    borderRadius: {
      portable: "card",
      desktop: "card",
    },
  }),
]);

export const modeButton = style([
  baseButton,
  sprinkles({
    padding: {
      portable: "medium",
      desktop: "small",
    },
    display: "flex",
    gap: "medium",
    borderRadius: {
      portable: "rounded",
      desktop: "rounded",
    },
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
