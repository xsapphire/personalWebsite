import { ReactElement } from "react";
import { introduction } from "./_index.css";

export const Introduction = (): ReactElement => {
  return (
    <>
      <p className={introduction}>
        I am a Frontend Developer with five years of experience in React /
        TypeScript / GraphQL, <br />
        as well as a UI designer with a passion for creating technological
        solutions across various fields.
      </p>

      <p className={introduction}>I am dedicated to ...</p>
    </>
  );
};
