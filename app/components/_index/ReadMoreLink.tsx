import { ReactElement } from "react";
import { boxWithIcon, link } from "~/styles/base.css";
import { ThemedIcon } from "../ThemedIcon";
import { NavLink } from "@remix-run/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { themeColors } from "~/styles/theme.css";

export const ReadMoreLink = ({
  route,
  text,
}: {
  route: string;
  text: string;
}): ReactElement => {
  return (
    <div className={boxWithIcon}>
      <ThemedIcon faIcon={faArrowRight} color={themeColors.font.link} />
      <NavLink to={route} className={link}>
        {text}
      </NavLink>
    </div>
  );
};
