import { ReactElement } from "react";
import { SidebarItem } from "./SidebarItem";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { HomeLink } from "./HomeLink";
import { sidebarContainer } from "../../styles/layout.css";
import { navigation } from "../../contents";
import { sidebarMenu } from "./sidebar.css";

export const Sidebar = (): ReactElement => {
  return (
    <div className={sidebarContainer}>
      <HomeLink />

      <div className={sidebarMenu}>
        {navigation.map((n) => (
          <SidebarItem key={n.title} {...n} />
        ))}
      </div>

      <ChangeThemeButton />
    </div>
  );
};
