import { style } from "@vanilla-extract/css";
import { vars } from "./light.css";
import { sprinkles } from "./sprinkles.css";

export const nameLabel = style({
  fontSize: "50px",
  lineHeight: "60px",
  fontWeight: "800",
  background:
    "-webkit-linear-gradient(45deg, rgb(230 160 160) 0%, rgb(101 175 143) 42%, rgb(127 176 233) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "20px 0 10px 0",
});

export const locationLabel = style([
  {
    color: vars.colors.font.subtitle,
  },
  sprinkles({
    display: "flex",
    gap: "small",
    alignItems: "center",
  }),
]);

export const introduction = style({
  color: vars.colors.font.subtitle,
  fontSize: "20px",
  lineHeight: "24px",
  padding: "40px 0 20px 0",
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
