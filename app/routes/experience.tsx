import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { experienceData } from "../contents";
import { sprinkles } from "../styles/sprinkles.css";
import { mainContent } from "~/styles/layout.css";
import { experienceCard } from "~/components/experience/experience.css";
import { RoadMap } from "~/components/experience/RoadMap";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={mainContent}>
      <PageHeader title="Work Experience" />

      <p
        className={sprinkles({
          marginBottom: {
            portable: "medium",
            desktop: "large",
          },
        })}
      >
        Since my graduation from Stanford University, I worked at a startup
        called Square 8 for about six years.
      </p>

      <div className={experienceCard}>
        <RoadMap activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={sprinkles({
            padding: {
              portable: "medium",
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
