import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props {
  url: string;
  text: string;
}

const LinkBtn: React.FC<PropsWithChildren<Props>> = ({
  url,
  text,
  children,
}) => {
  const innerHtml = children ? children : text;
  return <Link href={url}>{innerHtml}</Link>;
};

export default LinkBtn;
