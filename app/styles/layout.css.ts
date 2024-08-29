import { style } from "@vanilla-extract/css";
import { themeColors } from "./theme.css";
import { sprinkles } from "./sprinkles.css";
import { box, flexAlignCenter, flexJustifyCenter } from "./base.css";

export const bodyContainer = style([
  {
    gridTemplateAreas: '"sidebar mainContent"',
    gridTemplateColumns: "max-content auto",
    margin: 0,
    fontFamily: "sans-serif",
    lineHeight: "24px",
    background: themeColors.background.body,
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
    borderRadius: {
      desktop: "sidebar",
    },
    justifyContent: "space-between",
    padding: {
      portable: "medium",
      desktop: "large",
    },
    height: {
      portable: "portableFull",
      desktop: "desktopFull",
    },
    position: {
      portable: "fixed",
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
      portable: "medium",
      desktop: "large",
    },
    height: {
      portable: "portableFull",
      desktop: "desktopFull",
    },
    position: {
      portable: "fixed",
    },
    marginLeft: {
      portable: "mainContent",
    },
  }),
  {
    gridArea: "mainContent",
    overflow: "auto",
    background: themeColors.background.body,
  },
]);

export const mainContent = style({
  maxWidth: "1024px",
  maxHeight: "100vh",
});

export const contentWrapper = sprinkles({
  paddingY: {
    portable: "large",
  },
});
