import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/theme.css";

const THEME_PREF_KEY = "themePref";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export const themeTypes = {
  light: "light",
  dark: "dark",
} as const;

export type ThemeType = keyof typeof themeTypes;

const revertThemeType = (prevTheme: ThemeType) => {
  return prevTheme === themeTypes.light ? themeTypes.dark : themeTypes.light;
};

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(
    themeTypes.light
  );

  // Fetch theme preference from localStorage if there is any
  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_PREF_KEY);
    if (localTheme) {
      setSelectedTheme(localTheme as ThemeType);
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem(THEME_PREF_KEY, revertThemeType(selectedTheme));

    setSelectedTheme((prevValue) => revertThemeType(prevValue));
  };

  const colorMode = selectedTheme === themeTypes.light ? lightTheme : darkTheme;

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
