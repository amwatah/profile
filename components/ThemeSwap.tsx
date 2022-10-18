import { useAtom } from "jotai";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { activeThemeAtom } from "../store";

const ThemeSwap = () => {
    const [activeTheme, setActiveTheme] = useAtom( activeThemeAtom)
  return (
    <div className=" text-2xl text-accent p-2 fixed top-0 right-0">
      <label className="swap swap-rotate">
        <input  onChange={()=> setActiveTheme( activeTheme==="light"?"dark":"light" )} type="checkbox" />

        <BsFillMoonFill className=" swap-off" />
        <BsFillSunFill className=" swap-on" />
      </label>
    </div>
  );
};

export default ThemeSwap;
