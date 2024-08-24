import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

export const ThemedIcon = ({
  faIcon,
  color,
  className,
}: {
  faIcon: IconDefinition;
  color?: string;
  className?: string;
}): ReactElement => {
  return (
    <FontAwesomeIcon
      icon={faIcon}
      color={color ? color : undefined}
      className={className}
      style={className ? undefined : { width: "16px", height: "16px" }}
    />
  );
};
