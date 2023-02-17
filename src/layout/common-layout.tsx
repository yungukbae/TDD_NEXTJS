import React from "react";
import { FC } from "react";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-[64px]"></div>
      <div className="w-screen flex flex-row">
        <div className="w-1/6 bg-slate-300 ">menu</div>
        <div className="w-5/6 bg-slate-400 ">{children}</div>
      </div>
    </div>
  );
};
