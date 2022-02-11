import React from "react";

type MyGenericButtonProps = {
  onClick?: (event: MouseEvent) => void;
  children: React.ReactNode;
};

export const MyGenericButton: React.FC<MyGenericButtonProps> = ({
  onClick,
  children,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export const Page: React.VFC = () => {
  return <MyGenericButton onClick={() => {}}>Click Me!</MyGenericButton>;
};
