import { NavLink } from "@remix-run/react";
import { activeSidebarItem, sidebarItem } from "../../styles/styles.css";
import { SidebarItemType } from "./sidebar";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemedIcon } from "../ThemedIcon";
import { useState } from "react";

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
        />
        <p
          className={sprinkles({
            display: {
              mobile: "none",
              tablet: "none",
              desktop: "inline",
            },
          })}
          style={{ margin: 0 }}
        >
          {title}
        </p>
      </div>
    </NavLink>
  );
};
