import { nameIcon } from "~/styles/_index.css";
import { ThemedIcon } from "../ThemedIcon";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { sprinkles } from "~/styles/sprinkles.css";

export const Name = () => {
  return (
    <div className={nameIcon}>
      <ThemedIcon
        faIcon={faHouseChimney}
        className={sprinkles({
          width: {
            mobile: "exLarge",
            tablet: "exLarge",
            desktop: "exLarge",
          },
          height: {
            mobile: "exLarge",
            tablet: "exLarge",
            desktop: "exLarge",
          },
        })}
      />
    </div>
  );
};
