import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./styles/light.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  background: vars.colors.background.body,
  fontFamily: "sans-serif",
  lineHeight: "24px",
  color: vars.colors.font.body,
});

globalStyle("button", {
  border: "none",
  cursor: "pointer",
});

globalStyle("p", {
  margin: "0",
});
