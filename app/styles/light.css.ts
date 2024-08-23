import { createTheme } from "@vanilla-extract/css";
import { baseColors } from "./colors";

const colors = {
  brand: baseColors.green["green-500"],
  hover: baseColors.green["green-700"],
  font: {
    body: "#111212",
    h1: baseColors.green["green-700"],
    h3: baseColors.green["green-800"],
    subtitle: baseColors.neutral["gray-700"],
    link: baseColors.red["red-800"],
    linkHover: baseColors.red["red-850"],
  },
  background: {
    body: "#E6E8E6",
    card: baseColors.green["green-50"],
  },
};

export const [lightTheme, vars] = createTheme({
  colors,
});
