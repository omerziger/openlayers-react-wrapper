import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MyControls(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}
