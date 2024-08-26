import { ReactElement } from "react";
import { sidebarContainer } from "../../styles/styles.css";
import {
  IconDefinition,
  faCode,
  faFile,
  faPenRuler,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "./sidebarItem";
import { sprinkles } from "../../styles/sprinkles.css";
import { NavLink } from "@remix-run/react";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { Name } from "./Name";

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

export const Sidebar = (): ReactElement => {
  return (
    <div className={sidebarContainer}>
      <NavLink style={{ textDecoration: "none" }} to="">
        <Name />
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
