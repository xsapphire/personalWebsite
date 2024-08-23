import { PageHeader } from "../components/pageHeader";
import { mainContent } from "../styles/styles.css";
import { Card } from "../components/Card";
import { sprinkles } from "../styles/sprinkles.css";

export default function About() {
  return (
    <div className={mainContent}>
      <PageHeader title="About" />
      <div
        className={sprinkles({
          marginTop: "medium",
          display: "flex",
          flexDirection: "column",
          gap: "medium",
        })}
      >
        <Card title="How Did I Enter CS?">
          I have a life goal of making some valuable change on the society, and
          it is not specific to any area. Because of that I picked some
          Environmental Science project in senior high school. After graduating
          from the senior high school, I came to the United States for higher
          education. When I talked to the Environmental Science professor for
          future path, the professor genuinely suggested me to try learning
          Computer Science as a tool, and that is how I got into Computer
          Science.
        </Card>

        <Card title="My CS Education">
          Over the four-year course of learning at Stanford University, I
          learned basics of programming language and UI/UX design, and I saw the
          opportunities in the real world which convinced me that I can change
          something with computer science. Seeing Computer Science as a tool
          like wrench that helps me build stuff, I would like to help bring
          technology to any fields that could enjoy more convenience with tech.
        </Card>

        <Card title="Precious Take-aways from Work">
          After about five years of working at a start-up that works on a
          technology solution for traditional drayage industry, I gained more
          professionality in the frontend skill, but more importantly, I am
          fully aware that the tech industry is constantly changing and there
          are always something new and great emerging which can be applied to
          make the products better.
        </Card>

        <Card title="My Goal for Future">
          I would like to work with some challenges and problems that give me
          chances to research and discover cool new stuff. I am also very
          thankful to my work experiece that got me into good coding habits, and
          if possible I would like to pass what I have learned down to any new
          comers to this industry. At the same time, I want to gain more
          professionality from more senior engineers and senior designers.
        </Card>
      </div>
    </div>
  );
}
