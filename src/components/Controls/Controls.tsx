import React, { ReactNode } from "react";

interface ControlsProps {
  children: ReactNode;
};

const Controls:React.FC<ControlsProps> = props => {
  const { children } = props;
  return <div>{children}</div>;
}

export default Controls