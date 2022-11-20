import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MyLayers(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}
