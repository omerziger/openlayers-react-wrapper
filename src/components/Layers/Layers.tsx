import { ReactNode } from "react";

interface LayersProps {
  children: ReactNode;
};

const Layers: React.FC<LayersProps> = props => {
  const { children } = props;
  return <div>{children}</div>;
}

export default Layers