import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme } from "./styles/light.css";
import { darkTheme } from "./styles/dark.css";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export type ThemeNames = "light" | "dark";

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeNames>("light");

  const toggleTheme = () => {
    setSelectedTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  const colorMode = selectedTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme,
      }}
    >
      <div className={colorMode}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
