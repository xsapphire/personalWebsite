import { ReactElement } from "react";
import { link } from "~/styles/base.css";
import { ThemedIcon } from "../ThemedIcon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "@remix-run/react";
import { statusLine } from "./_index.css";

export const Status = (): ReactElement => {
  return (
    <div className={statusLine}>
      <ThemedIcon faIcon={faLocationDot} />
      Los Angeles &#x2022; Open to Work &#x2022;
      <NavLink to="https://www.linkedin.com/in/jinglin-shan/" className={link}>
        LinkedIn
      </NavLink>
    </div>
  );
};
