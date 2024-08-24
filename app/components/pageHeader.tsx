import { ReactElement } from "react";
import { vars } from "../styles/light.css";
import { pageHeaderDecor } from "../styles/styles.css";

export const PageHeader = ({ title }: { title: string }): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div className={pageHeaderDecor} />
      <h1 style={{ color: vars.colors.font.h1 }}>{title}</h1>
    </div>
  );
};
