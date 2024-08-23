import { NavLink } from "@remix-run/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarItem } from "../../styles/styles.css";
import { SidebarItemType } from "./sidebar";
import { sprinkles } from "../../styles/sprinkles.css";
import { ThemedIcon } from "../ThemedIcon";
import { vars } from "../../styles/light.css";

export const SidebarItem = ({ icon, route, title }: SidebarItemType) => {
  return (
    <NavLink
      to={route}
      style={({ isActive }) => {
        return {
          background: isActive ? vars.colors.hover : "transparent",
          borderRadius: "999px",
          textDecoration: "none",
        };
      }}
    >
      <div class={sidebarItem}>
        <ThemedIcon faIcon={icon} />
        {title}
      </div>
    </NavLink>
  );
};
