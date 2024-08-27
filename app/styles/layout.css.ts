import { style } from "@vanilla-extract/css";
import { themeColors } from "./theme.css";
import { sprinkles } from "./sprinkles.css";
import { box, flexAlignCenter, flexJustifyCenter } from "./base.css";

export const bodyContainer = style([
  {
    gridTemplateAreas: '"sidebar mainContent"',
    gridTemplateColumns: "max-content auto",
    margin: 0,
    background: themeColors.background.body,
    fontFamily: "sans-serif",
    lineHeight: "24px",
    color: themeColors.font.body,
  },
  sprinkles({
    display: {
      portable: "flex",
      desktop: "grid",
    },
  }),
]);

export const sidebarContainer = style([
  box,
  flexAlignCenter,
  sprinkles({
    borderRadius: "sidebar",
    justifyContent: "space-between",
    padding: {
      portable: "medium",
      desktop: "large",
    },
    height: {
      portable: "portableFull",
      desktop: "desktopFull",
    },
  }),
  {
    background: themeColors.brand,
    gridArea: "sidebar",
  },
]);

export const mainContentContainer = style([
  box,
  flexAlignCenter,
  flexJustifyCenter,
  sprinkles({
    padding: {
      portable: "large",
      desktop: "large",
    },
    height: {
      portable: "portableFull",
      desktop: "desktopFull",
    },
  }),
  {
    gridArea: "mainContent",
    overflow: "auto",
  },
]);

export const mainContent = style({
  maxWidth: "1024px",
  maxHeight: "100vh",
});
