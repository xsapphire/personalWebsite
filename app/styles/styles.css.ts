import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { themeColors } from "./theme.css";
import { baseColors } from "./colors";

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
      mobile: "flex",
      tablet: "flex",
      desktop: "grid",
    },
  }),
]);

export const sidebarContainer = style([
  sprinkles({
    padding: {
      mobile: "medium",
      tablet: "medium",
      desktop: "large",
    },
    borderRadius: {
      mobile: "sidebar",
      tablet: "sidebar",
      desktop: "sidebar",
    },
    display: {
      mobile: "flex",
      tablet: "flex",
      desktop: "flex",
    },
    justifyContent: {
      mobile: "space-between",
      tablet: "space-between",
      desktop: "space-between",
    },
    alignItems: {
      mobile: "center",
      tablet: "center",
      desktop: "center",
    },
    flexDirection: {
      mobile: "column",
      tablet: "column",
      desktop: "column",
    },
    height: {
      mobile: "portableFull",
      tablet: "portableFull",
      desktop: "desktopFull",
    },
  }),
  {
    background: themeColors.brand,
    gridArea: "sidebar",
  },
]);

export const sidebarItem = style([
  sprinkles({
    padding: {
      mobile: "medium",
      tablet: "medium",
      desktop: "medium",
    },
    display: "flex",
    gap: "medium",
    alignItems: "center",
    borderRadius: {
      mobile: "rounded",
      tablet: "rounded",
      desktop: "rounded",
    },
  }),
  {
    color: "white",
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
    borderRadius: "999px",
  },
]);

export const mainContentContainer = style({
  gridArea: "mainContent",
  padding: 36,
  height: "calc(100vh - 72px)",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const mainContent = style({
  maxWidth: "1024px",
  maxHeight: "100vh",
});

export const pageHeaderDecor = style({
  width: "8px",
  height: "30px",
  background: themeColors.font.h1,
  transform: "skew(-20deg)",
});

export const sectionHeading = style([
  sprinkles({
    paddingTop: "medium",
  }),
  {
    color: themeColors.font.h3,
  },
]);

export const card = style([
  {
    background: themeColors.background.card,
  },
  sprinkles({
    borderRadius: {
      mobile: "card",
      tablet: "card",
      desktop: "card",
    },
  }),
]);

export const cardTitle = style({
  color: themeColors.font.h1,
  margin: 0,
});

export const baseButton = style({
  background: themeColors.background.button,
  border: "none",
  cursor: "pointer",
});

export const tabContainer = style([
  sprinkles({
    display: "grid",
    padding: "small",
  }),
  {
    gridTemplateColumns: "repeat(5, minmax(100px, auto))",
    borderBottom: "1px solid #bbbebb",
  },
]);

export const modeButton = style([
  baseButton,
  sprinkles({
    padding: {
      mobile: "medium",
      tablet: "medium",
      desktop: "small",
    },
    display: "flex",
    gap: "medium",
    borderRadius: {
      mobile: "rounded",
      tablet: "rounded",
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

export const link = style({
  textDecoration: "none",
  color: themeColors.font.link,
  selectors: {
    "&:hover": {
      color: themeColors.font.linkHover,
    },
  },
});
