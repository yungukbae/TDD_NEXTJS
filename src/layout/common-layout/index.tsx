import Stack from "@/components/Stack";
import { FC, ReactNode } from "react";
import Menu from "./menu";
import style from "./style.module.css";
export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-[64px] bg-slate-400"></div>
      <Stack direction="row">
        <div className={style.menu}>
          <Menu />
        </div>
        <div className={style.view}>{children}</div>
      </Stack>
    </div>
  );
};
