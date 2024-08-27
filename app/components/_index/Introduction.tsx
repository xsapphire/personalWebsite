import { ReactElement } from "react";
import { introduction } from "./_index.css";

export const Introduction = (): ReactElement => {
  return (
    <>
      <p className={introduction}>
        I am a Frontend Developer with 5 years of experience with React /
        Typescript / GraphQL, <br />
        and an UI designer with passion of creating technology solutions for any
        fields.
      </p>

      <p className={introduction}>I devote to ...</p>
    </>
  );
};
