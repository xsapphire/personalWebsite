import { CSSProperties, ReactElement, ReactNode } from "react";
import { cardHolder } from "./card.css";

export const CardHolder = ({
  itemCount = 3,
  style,
  children,
}: {
  itemCount?: number;
  style?: CSSProperties;
  children: ReactNode;
}): ReactElement => {
  return (
    <div
      className={cardHolder}
      style={{
        ...style,
        gridTemplateColumns: `repeat(${itemCount}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};
