import { NavLink } from "@remix-run/react";
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
      <div className={sidebarItem}>
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
