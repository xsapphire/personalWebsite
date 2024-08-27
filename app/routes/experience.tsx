import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { experienceData } from "../contents";
import { sprinkles } from "../styles/sprinkles.css";
import { experienceCard } from "~/components/experience/experience.css";
import { RoadMap } from "~/components/experience/RoadMap";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <PageHeader title="Experience" />

      <p
        className={sprinkles({
          marginBottom: {
            portable: "medium",
            desktop: "large",
          },
        })}
      >
        Since my graduation from <strong>Stanford University</strong>, I worked
        at a startup called <strong>Square 8</strong> for about six years.
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
    </>
  );
}
