import React, { ReactElement, ReactNode } from "react";

type TabsProps = {
  activeIndex: number;
  onActive: () => void;
  children?: ReactNode;
};

export const Tabs = ({
  activeIndex,
  onActive,
  children,
}: TabsProps): ReactElement => {
  return <div>{children}</div>;
};
