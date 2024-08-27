import { ThemedIcon } from "../ThemedIcon";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { sprinkles } from "~/styles/sprinkles.css";
import { NavLink } from "@remix-run/react";
import { nameIcon } from "./sidebar.css";

export const HomeLink = () => {
  return (
    <NavLink className={nameIcon} to="">
      <ThemedIcon
        faIcon={faHouseChimney}
        className={sprinkles({
          width: {
            portable: "exLarge",
            desktop: "exLarge",
          },
          height: {
            portable: "exLarge",
            desktop: "exLarge",
          },
        })}
      />
    </NavLink>
  );
};
