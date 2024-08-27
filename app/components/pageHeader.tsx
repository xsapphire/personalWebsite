import { ReactElement } from "react";
import { themeColors } from "~/styles/theme.css";
import { boxWithIcon } from "~/styles/base.css";

export const PageHeader = ({ title }: { title: string }): ReactElement => {
  return (
    <div className={boxWithIcon}>
      <div
        style={{
          width: "8px",
          height: "30px",
          background: themeColors.font.h1,
          transform: "skew(-20deg)",
        }}
      />
      <h1 style={{ color: themeColors.font.h1 }}>{title}</h1>
    </div>
  );
};
