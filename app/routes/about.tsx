import { PageHeader } from "../components/PageHeader";
import { Card } from "../components/card/Card";
import { aboutData } from "../contents";
import { boxList } from "~/styles/base.css";

export default function About() {
  return (
    <>
      <PageHeader title="About" />

      <div className={boxList}>
        {aboutData.map((d) => {
          return (
            <Card key={d.title} title={d.title}>
              {d.description}
            </Card>
          );
        })}
      </div>
    </>
  );
}
