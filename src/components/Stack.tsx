import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  direction: "row" | "row-reverse" | "col" | "col-reverse";
  gap?: number;
}

const Stack: FC<Props> = ({ children, direction, gap = 0 }) => {
  const cls: string = `flex flex-${direction} gap-${gap}`;

  return <div className={cls}>{children}</div>;
};

export default Stack;
