import type { MetaFunction } from "@remix-run/cloudflare";
import { devotionData } from "~/contents";
import { boxList } from "~/styles/base.css";
import { DevotionCard } from "~/components/card/DevotionCard";
import { CardHolder } from "~/components/card/CardHolder";
import { nameLabel } from "~/components/_index/_index.css";
import { Introduction, Status, ReadMoreLink } from "~/components/_index";

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan" },
    {
      name: "description",
      content: "Welcome to Jinglin Shan's personal website",
    },
  ];
};

export default function Index() {
  return (
    <>
      <p className={nameLabel}>Hi, I am Jinglin!</p>

      <Status />
      <Introduction />

      <CardHolder style={{ margin: "40px 0" }}>
        {devotionData.map((d) => {
          return (
            <DevotionCard
              key={d.title}
              title={d.title}
              description={d.description}
              faIcon={d.faIcon}
            />
          );
        })}
      </CardHolder>

      <div className={boxList}>
        <ReadMoreLink route="experience" text="Read about my work experience" />
        <ReadMoreLink
          route="code"
          text="See the libraries I have experience with"
        />
      </div>
    </>
  );
}
