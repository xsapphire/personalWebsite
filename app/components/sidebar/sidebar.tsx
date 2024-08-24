import { ReactElement, useContext } from "react";
import { modeButton, sidebarContainer } from "../../styles/styles.css";
import {
  IconDefinition,
  faCode,
  faFile,
  faMoon,
  faPenRuler,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "./sidebarItem";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemedIcon } from "../ThemedIcon";
import NameLogo from "./NameLogo";
import { NavLink } from "@remix-run/react";

export type SidebarItemType = {
  icon: IconDefinition;
  route: string;
  title: string;
};

const navigation: SidebarItemType[] = [
  { icon: faUser, route: "about", title: "Who am I" },
  { icon: faFile, route: "experience", title: "Work Experience" },
  { icon: faCode, route: "code", title: "Code" },
  { icon: faPenRuler, route: "hobby", title: "Hobby" },
];

const ChangeThemeButton = (): ReactElement => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={modeButton}
      onClick={() => {
        toggleTheme ? toggleTheme(theme === "light" ? "dark" : "light") : null;
      }}
    >
      <ThemedIcon faIcon={theme === "light" ? faSun : faMoon} />
      {theme === "light" ? <div>Light Mode</div> : <div>Dark Mode</div>}
    </button>
  );
};

export const Sidebar = (): ReactElement => {
  return (
    <div className={sidebarContainer}>
      <NavLink to="">
        <NameLogo width={80} height={80} fill="white" />
      </NavLink>

      <div
        className={sprinkles({
          display: {
            mobile: "flex",
            tablet: "flex",
            desktop: "flex",
          },
          gap: {
            mobile: "exLarge",
            tablet: "exLarge",
            desktop: "small",
          },
          flexDirection: {
            mobile: "column",
            tablet: "column",
            desktop: "column",
          },
        })}
      >
        {navigation.map((n) => (
          <SidebarItem key={n.title} {...n} />
        ))}
      </div>
      <ChangeThemeButton />
    </div>
  );
};
