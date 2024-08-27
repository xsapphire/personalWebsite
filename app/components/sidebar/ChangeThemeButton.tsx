import { ReactElement, useContext } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemedIcon } from "../ThemedIcon";
import { themeTypes } from "../../ThemeProvider";
import { modeButton } from "./sidebar.css";

const CapFirstLetter = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const ChangeThemeButton = (): ReactElement => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={modeButton}
      onClick={() => {
        toggleTheme ? toggleTheme(theme) : null;
      }}
    >
      <ThemedIcon
        className={sprinkles({
          width: {
            portable: "large",
            desktop: "regular",
          },
          height: {
            portable: "large",
            desktop: "regular",
          },
        })}
        faIcon={theme === themeTypes.light ? faSun : faMoon}
      />
      <div
        className={sprinkles({
          display: {
            portable: "none",
            desktop: "block",
          },
        })}
      >
        {`${CapFirstLetter(theme)} Mode`}
      </div>
    </button>
  );
};
