import { ReactElement } from "react";
import {
  activeTabButton,
  dotConnection,
  experienceMenu,
  tabButton,
} from "./experience.css";
import { experienceData } from "~/contents";
import { sprinkles } from "~/styles/sprinkles.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { ThemedIcon } from "../ThemedIcon";

export const RoadMap = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}): ReactElement => {
  return (
    <div className={experienceMenu}>
      <div className={dotConnection} />
      {experienceData.map((d, i) => {
        return (
          <button
            key={d.title}
            className={i === activeIndex ? activeTabButton : tabButton}
            onClick={() => {
              setActiveIndex(i);
            }}
          >
            <ThemedIcon
              faIcon={faCircle}
              className={sprinkles({
                width: {
                  portable: "small",
                  desktop: "small",
                },
                height: {
                  portable: "small",
                  desktop: "small",
                },
                zIndex: "front",
              })}
            />
            {d.title}
          </button>
        );
      })}
    </div>
  );
};
