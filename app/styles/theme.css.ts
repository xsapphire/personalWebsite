import { createTheme } from "@vanilla-extract/css";
import { baseColors } from "./colors";

type ThemeColorType = {
  brand: string;
  hover: string;
  font: {
    body: string;
    h1: string;
    h3: string;
    subtitle: string;
    link: string;
    linkHover: string;
  };
  background: {
    body: string;
    card: string;
    button: string;
  };
};

const defaultColors = {
  brand: "",
  hover: "",
  font: {
    body: "",
    h1: "",
    h3: "",
    subtitle: "",
    link: "",
    linkHover: "",
  },
  background: {
    body: "",
    card: "",
    button: "",
  },
};

export const [_, themeColors] = createTheme<ThemeColorType>(defaultColors);

const lightColors = {
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
    button: baseColors.green["green-50"],
  },
};

export const lightTheme = createTheme(themeColors, lightColors);

const darkColors = {
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
    button: baseColors.green["green-50"],
  },
};

export const darkTheme = createTheme(themeColors, darkColors);
