import { NavLink } from "@remix-run/react";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemedIcon } from "../ThemedIcon";
import { useState } from "react";
import { activeSidebarItem, sidebarItem } from "./sidebar.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { desktopVisibleText } from "~/styles/base.css";

export type SidebarItemType = {
  icon: IconDefinition;
  route: string;
  title: string;
};

export const SidebarItem = ({ icon, route, title }: SidebarItemType) => {
  const [itemIsActive, setItemIsActive] = useState<boolean>(false);

  return (
    <NavLink
      to={route}
      style={({ isActive }) => {
        setItemIsActive(isActive);
        return {
          textDecoration: "none",
        };
      }}
    >
      <div className={itemIsActive ? activeSidebarItem : sidebarItem}>
        <ThemedIcon
          faIcon={icon}
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
        />

        <p className={desktopVisibleText}>{title}</p>
      </div>
    </NavLink>
  );
};
