import { ReactElement } from "react";
import { boxWithIcon, link } from "~/styles/base.css";
import { ThemedIcon } from "../ThemedIcon";
import {
  faLocationDot,
  faMagnifyingGlassArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
import { statusLine } from "./_index.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Status = (): ReactElement => {
  return (
    <div className={statusLine}>
      <div className={boxWithIcon}>
        <ThemedIcon faIcon={faLocationDot} />
        Los Angeles
      </div>

      <div className={boxWithIcon}>
        <ThemedIcon faIcon={faMagnifyingGlassArrowRight} />
        Cynch Inc.
      </div>

      <div className={boxWithIcon}>
        <ThemedIcon faIcon={faLinkedin} />
        <NavLink
          to="https://www.linkedin.com/in/jinglin-shan/"
          className={link}
        >
          LinkedIn
        </NavLink>
      </div>
    </div>
  );
};
