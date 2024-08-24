import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./light.css";

export const bodyContainer = style([
  {
    gridTemplateAreas: '"sidebar mainContent"',
    gridTemplateColumns: "max-content auto",
    margin: 0,
    background: vars.colors.background.body,
    fontFamily: "sans-serif",
    lineHeight: "24px",
    color: vars.colors.font.body,
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
    background: vars.colors.brand,
    gridArea: "sidebar",
  },
]);
export const sidebarItem = style([
  sprinkles({
    padding: "medium",
    display: "flex",
    gap: "medium",
    alignItems: "center",
    borderRadius: "rounded",
  }),
  {
    color: "white",
    selectors: {
      "&:hover": {
        background: vars.colors.hover,
      },
    },
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
  background: vars.colors.font.h1,
  transform: "skew(-20deg)",
});

export const sectionHeading = style([
  sprinkles({
    paddingTop: "medium",
  }),
  {
    color: vars.colors.font.h3,
  },
]);

export const card = style([
  {
    background: vars.colors.background.card,
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
  color: vars.colors.font.h1,
  margin: 0,
});

export const baseButton = style({
  background: vars.colors.background.button,
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
    padding: "small",
    display: "flex",
    gap: "medium",
    borderRadius: "rounded",
  }),
  {
    color: vars.colors.font.h1,
    selectors: {
      "&:hover": {
        boxShadow: `0 0 5px ${vars.colors.hover}`,
      },
    },
  },
]);

export const link = style({
  textDecoration: "none",
  color: vars.colors.font.link,
  selectors: {
    "&:hover": {
      color: vars.colors.font.linkHover,
    },
  },
});
