import { createContext } from "react";

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme?: (theme: "light" | "dark") => void;
}>({
  theme: "light",
});
