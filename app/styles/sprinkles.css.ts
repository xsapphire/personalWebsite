import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

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

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "desktop",
  properties: {
    display: ["none", "grid", "flex", "block", "inline"],
    position: ["relative", "absolute"],
    gap: space,
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    width: iconDimension,
    height: { ...height, ...iconDimension },
    borderRadius: radius,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
