import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { themeColors } from "./theme.css";

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

export const nameIcon = style({
  width: 50,
  height: 50,
  padding: 18,
  borderRadius: 10,
  border: "5px solid white",
  fontSize: 18,
  color: "white",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const locationLabel = style([
  {
    color: themeColors.font.subtitle,
  },
  sprinkles({
    display: {
      tablet: "flex",
      desktop: "flex",
    },
    gap: {
      tablet: "small",
      desktop: "small",
    },
    alignItems: {
      tablet: "center",
      desktop: "center",
    },
  }),
]);

export const introduction = style({
  color: themeColors.font.subtitle,
  fontSize: "20px",
  lineHeight: "24px",
});

export const cardHeaderIcon = style({
  position: "absolute",
  top: 0,
  right: 0,
});

export const cardTitleEmphasize = style({
  fontSize: "24px",
  fontWeight: 800,
});
