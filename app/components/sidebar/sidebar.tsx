import React, { ReactElement, useContext } from "react";
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
      class={modeButton}
      onClick={() => {
        toggleTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
      }}
    >
      <ThemedIcon faIcon={theme === "light" ? faSun : faMoon} />
      {theme === "light" ? <div>Light Mode</div> : <div>Dark Mode</div>}
    </button>
  );
};

export const Sidebar = (): ReactElement => {
  return (
    <div class={sidebarContainer}>
      <NavLink to="">
        <NameLogo width={80} height={80} fill="white" />
      </NavLink>

      <div
        class={sprinkles({
          display: "flex",
          gap: "small",
          flexDirection: "column",
        })}
      >
        {navigation.map((n) => (
          <SidebarItem {...n} />
        ))}
      </div>
      <ChangeThemeButton />
    </div>
  );
};
