import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { themeColors } from "./theme.css";

const space = {
  none: 0,
  small: "8px",
  medium: "16px",
  large: "24px",
  exLarge: "48px",
};

const iconDimension = {
  small: "8px",
  regular: "16px",
  large: "32px",
  exLarge: "48px",
};

const height = {
  portableFull: "calc(100vh - 32px)",
  desktopFull: "calc(100vh - 48px)",
};

const radius = {
  sidebar: "0 30px 30px 0",
  rounded: "999px",
  card: "8px",
};

const border = {
  bgColor: `1px solid ${themeColors.background.body}`,
};

const nonResponsiveProperties = defineProperties({
  properties: {
    borderRadius: radius,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    portable: { "@media": "screen and (max-width: 1024px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "desktop",
  properties: {
    display: ["none", "grid", "flex", "block", "inline"],
    gap: space,
    flexDirection: ["row", "column"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    width: iconDimension,
    height: { ...height, ...iconDimension },
    borderRight: border,
    borderBottom: border,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const sprinkles = createSprinkles(
  nonResponsiveProperties,
  responsiveProperties
);
