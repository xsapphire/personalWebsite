import { MetaFunction } from "@remix-run/react";
import { PageHeader } from "../components/PageHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Jinglin Shan | Hobby" },
    {
      name: "description",
      content: "Hobbies for my leisure time. ",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function Hobby() {
  return (
    <>
      <PageHeader title="Hobby" />
      <p>
        Like many people, I enjoy drawing and playing games. Three years ago, I
        added creating game wikis to my list of hobbies, which now occupies most
        of my leisure time.
        <br />A friend who played <i>Legends of the Three Kingdoms</i> invited
        me to develop a wiki for the game using the <i>Bilibili Game</i>{" "}
        platform, as there was no existing wiki that effectively covered all
        aspects of the game, including characters, skins, items, and strategies.
        This experience provided a valuable learning opportunity as I navigated
        the MediaWiki and Semantic MediaWiki documentation for creating and
        querying data on this platform, while also drawing inspiration from the
        source code and design of other game BiliWikis. <br />
        With the experience gained from building this first wiki, I went on to
        create wikis for more games I play and assisted with enhancing the user
        interfaces of three other game wikis.
        <br /> I am currently focused on the Arknights wiki. I particularly
        enjoy structuring data and creating templates for other contributors. In
        2023, I was awarded a second-tier prize in the annual BiliWiki
        Contributors Award for my significant contributions to the game wiki.
      </p>
    </>
  );
}
