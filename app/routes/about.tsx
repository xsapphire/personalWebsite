import { PageHeader } from "../components/pageHeader";
import { mainContent } from "../styles/styles.css";
import { Card } from "../components/Card";
import { aboutData } from "~/contents";

export default function About() {
  return (
    <div className={mainContent}>
      <PageHeader title="About" />
      <div
        style={{
          marginTop: "medium",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {aboutData.map((d) => {
          return (
            <Card key={d.title} title={d.title}>
              {d.description}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
