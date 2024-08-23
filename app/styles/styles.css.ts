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
    display: "grid",
  }),
]);

export const sidebarContainer = style([
  sprinkles({
    padding: "large",
    borderRadius: "sidebar",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  }),
  {
    background: vars.colors.brand,
    gridArea: "sidebar",
    height: "calc(100vh - 48px)",
  },
]);
export const sidebarItem = style([
  sprinkles({
    padding: "medium",
    display: "flex",
    gap: "medium",
    alignItems: "center",
    color: "white",
    borderRadius: "rounded",
  }),
  {
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
    borderRadius: "card",
  }),
]);

export const cardTitle = style({
  color: vars.colors.font.h1,
  margin: 0,
});

export const baseButton = style([
  sprinkles({
    background: "green-50",
  }),
  {
    border: "none",
    cursor: "pointer",
  },
]);

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
    color: "green-500",
    padding: "small",
    display: "flex",
    gap: "medium",
    borderRadius: "rounded",
  }),
  {
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
