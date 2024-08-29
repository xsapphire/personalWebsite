import { PropsWithChildren, useEffect, useState } from "react";
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
}: PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(
    themeTypes.light
  );

  // Fetch theme preference from localStorage if there is any
  useEffect(() => {
    // Saved theme preference takes priority
    const localTheme = localStorage.getItem(THEME_PREF_KEY);
    if (localTheme) {
      setSelectedTheme(localTheme as ThemeType);
      return;
    }

    // Detect OS's preferred color scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setSelectedTheme(themeTypes.dark);
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
