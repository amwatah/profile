import React, { ReactNode } from "react";
import BottomNav from "../BottomNav";
import ThemeSwap from "../ThemeSwap";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className=" overflow-x-hidden">
      <ThemeSwap />
      <div className=" body w-full pb-[10vh] overflow-x-hidden">{children}</div>

      <BottomNav />
    </div>
  );
};

export default AppLayout;
