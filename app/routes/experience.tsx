import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { experienceData } from "../contents";
import { sprinkles } from "../styles/sprinkles.css";
import { experienceCard } from "~/components/experience/experience.css";
import { RoadMap } from "~/components/experience/RoadMap";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan | Experience" },
    {
      name: "description",
      content: "My work experience in the past five years. ",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    divRef.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <div ref={divRef}>
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
    </div>
  );
}
