import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const space = {
  none: 0,
  small: "8px",
  medium: "16px",
  large: "24px",
  // etc.
};

const width = {
  sidebar: "200px",
  icon: "16px",
};

const height = {
  full: "100vh",
  icon: "16px",
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
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colors = {
  "green-10": "#E6E8E6",
  "green-50": "#9FB8AD",
  "green-100": "#68815F",
  "green-300": "#475841",
  "green-500": "#394634",
  "gray-100": "#CED0CE",
  "gray-800": "#3F403F",
  white: "#FFFFFF",
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
    width: width,
    height: height,
    borderRadius: radius,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
