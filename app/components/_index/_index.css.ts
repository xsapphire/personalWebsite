import { style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/theme.css";
import { sprinkles } from "~/styles/sprinkles.css";

export const nameLabel = style({
  fontSize: "3em",
  lineHeight: "60px",
  fontWeight: "800",
  background:
    "-webkit-linear-gradient(45deg, rgb(230 160 160) 0%, rgb(101 175 143) 42%, rgb(127 176 233) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "16px",
});

export const statusLine = style([
  {
    display: "flex",
    color: themeColors.font.subtitle,
  },
  sprinkles({
    flexDirection: {
      portable: "column",
      desktop: "row",
    },
    gap: {
      portable: "small",
      desktop: "medium",
    },
    marginBottom: {
      portable: "exLarge",
      desktop: "exLarge",
    },
  }),
]);

export const introduction = style({
  color: themeColors.font.subtitle,
  fontSize: "1.2em",
});
