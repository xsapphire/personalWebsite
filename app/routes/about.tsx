import { CardHolder } from "~/components/card/CardHolder";
import { PageHeader } from "../components/PageHeader";
import { Card } from "../components/card/Card";
import { aboutData } from "../contents";
import { boxList } from "~/styles/base.css";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan | About" },
    {
      name: "description",
      content: "My past, present, and future. ",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function About() {
  return (
    <>
      <PageHeader title="About" />

      <div className={boxList} style={{ marginTop: "16px" }}>
        <CardHolder itemCount={2}>
          {aboutData.slice(0, 2).map((d) => {
            return (
              <Card key={d.title} title={d.title}>
                {d.description}
              </Card>
            );
          })}
        </CardHolder>

        <CardHolder itemCount={2}>
          {aboutData.slice(-2).map((d) => {
            return (
              <Card key={d.title} title={d.title}>
                {d.description}
              </Card>
            );
          })}
        </CardHolder>
      </div>
    </>
  );
}
