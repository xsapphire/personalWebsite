import { createTheme } from "@vanilla-extract/css";
import { vars } from "./light.css";
import { baseColors } from "./colors";

const colors = {
  brand: baseColors.green["green-700"],
  hover: baseColors.green["green-500"],
  font: {
    body: "#fff",
    h1: baseColors.green["green-100"],
    h3: baseColors.green["green-300"],
    subtitle: baseColors.neutral["gray-300"],
    link: baseColors.red["red-100"],
    linkHover: baseColors.red["red-150"],
  },
  background: {
    body: "#111411",
    card: baseColors.neutral["gray-800"],
  },
};

export const darkTheme = createTheme(vars, {
  colors,
});
