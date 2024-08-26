import { ReactElement, useContext } from "react";
import { modeButton } from "../../styles/styles.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemedIcon } from "../ThemedIcon";
import { themeTypes } from "../../ThemeProvider";

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
            mobile: "large",
            tablet: "large",
            desktop: "regular",
          },
          height: {
            mobile: "large",
            tablet: "large",
            desktop: "regular",
          },
        })}
        faIcon={theme === themeTypes.light ? faSun : faMoon}
      />
      <div
        className={sprinkles({
          display: {
            mobile: "none",
            tablet: "none",
            desktop: "block",
          },
        })}
      >
        {`${CapFirstLetter(theme)} Mode`}
      </div>
    </button>
  );
};
