import { ReactElement } from "react";
import { pageHeaderDecor } from "../styles/styles.css";
import { themeColors } from "~/styles/theme.css";

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
      <h1 style={{ color: themeColors.font.h1 }}>{title}</h1>
    </div>
  );
};
