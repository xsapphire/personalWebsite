import { useState } from "react";
import { mainContent } from "../styles/styles.css";
import { PageHeader } from "../components/pageHeader";
import { experienceData } from "../contents";
import { sprinkles } from "../styles/sprinkles.css";
import {
  dotConnection,
  experienceCard,
  experienceMenu,
  tabButton,
} from "../styles/experience.css";
import { ThemedIcon } from "../components/ThemedIcon";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={mainContent}>
      <PageHeader title="Work Experience" />
      <p className={sprinkles({ marginTop: "small", marginBottom: "medium" })}>
        Since my graduation from Stanford University, I worked at a startup
        called Square 8 for about six years.
      </p>
      <div className={experienceCard}>
        <div className={experienceMenu}>
          <div className={dotConnection} />
          {experienceData.map((d, i) => {
            return (
              <button
                key={d.title}
                className={tabButton}
                onClick={() => {
                  setActiveIndex(i);
                }}
                style={{ fontWeight: i === activeIndex ? 800 : undefined }}
              >
                <ThemedIcon
                  faIcon={faCircle}
                  className={sprinkles({
                    width: {
                      mobile: "small",
                      tablet: "small",
                      desktop: "small",
                    },
                    height: {
                      mobile: "small",
                      tablet: "small",
                      desktop: "small",
                    },
                  })}
                />
                {d.title}
              </button>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={sprinkles({
            padding: {
              mobile: "medium",
              tablet: "medium",
              desktop: "medium",
            },
          })}
        >
          {experienceData.at(activeIndex)?.description}
        </div>
      </div>
    </div>
  );
}
