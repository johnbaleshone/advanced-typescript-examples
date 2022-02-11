import React from "react";

type MyGenericButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const MyGenericButton: React.FC<MyGenericButtonProps> = ({
  onClick,
  children,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export const Page: React.VFC = () => {
  return <MyGenericButton onClick={() => {}}>Click Me!</MyGenericButton>;
};
