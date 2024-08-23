import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import { vars } from "../styles/light.css";

export const ThemedIcon = ({
  faIcon,
  size = "16px",
  color,
}: {
  faIcon: IconDefinition;
  size?: string;
  color?: string;
}): ReactElement => {
  return (
    <FontAwesomeIcon
      icon={faIcon}
      style={{ width: size, height: size }}
      color={color ? color : undefined}
    />
  );
};
