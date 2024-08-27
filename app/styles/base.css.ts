import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { themeColors } from "./theme.css";

/**
 * A basic `div` element with
 * - display: 'flex'
 * - direction: 'column'
 */
export const box = style({
  display: "flex",
  flexDirection: "column",
});

/**
 * For `div` element with `flex` display
 * Apply `align-items: center`
 */
export const flexAlignCenter = style({
  alignItems: "center",
});

/**
 * For `div` element with `flex` display
 * Apply `justify-content: center`
 */
export const flexJustifyCenter = style({
  justifyContent: "center",
});

/**
 * A basic `div` element with
 * - display: 'flex'
 * - direction: 'row'
 * - alignItems: 'center'
 * - gap: 'medium' (in sprinkles)
 */
export const boxWithIcon = style([
  {
    display: "flex",
    flexDirection: "row",
  },
  flexAlignCenter,
  sprinkles({
    gap: {
      portable: "medium",
      desktop: "medium",
    },
  }),
]);

export const boxList = style([
  box,
  sprinkles({
    gap: {
      portable: "medium",
      desktop: "medium",
    },
  }),
]);

const noMarginText = style({
  margin: 0,
});

export const desktopVisibleText = style([
  noMarginText,
  sprinkles({
    display: {
      portable: "none",
      desktop: "inline",
    },
  }),
]);

export const baseButton = style({
  background: themeColors.background.button,
  border: "none",
  cursor: "pointer",
});

export const link = style({
  textDecoration: "none",
  color: themeColors.font.link,
  selectors: {
    "&:hover": {
      color: themeColors.font.linkHover,
    },
  },
});
