import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

/**
 * In this website we deal with icon size only
 * @param faIcon {IconDefintion} the fontawesome icon
 * @param color {string} the color of the icon
 * @param className {string} a sprinkle classname. If no className provided,
 * the icon is auto set to 16px width and height
 */
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
