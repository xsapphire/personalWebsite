import { style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/theme.css";
import { boxWithIcon } from "~/styles/base.css";
import { sprinkles } from "~/styles/sprinkles.css";

export const nameLabel = style({
  fontSize: "50px",
  lineHeight: "60px",
  fontWeight: "800",
  background:
    "-webkit-linear-gradient(45deg, rgb(230 160 160) 0%, rgb(101 175 143) 42%, rgb(127 176 233) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "16px",
});

export const statusLine = style([
  boxWithIcon,
  {
    color: themeColors.font.subtitle,
  },
  sprinkles({
    marginBottom: {
      portable: "large",
      desktop: "exLarge",
    },
  }),
]);

export const introduction = style({
  color: themeColors.font.subtitle,
  fontSize: "20px",
  lineHeight: "24px",
});
