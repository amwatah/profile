import React from "react";
import { BiHomeAlt, BiPhoneCall } from "react-icons/bi";

import { FcTimeline } from "react-icons/fc";
import { TbApps } from "react-icons/tb";
import { ImBlog } from "react-icons/im";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  return (
    <div className=" fixed bottom-0   w-full flex items-center justify-evenly h-[10vh] text-xl text-accent border-t  ">
      <div className="tooltip" data-tip="HOME">
        <BiHomeAlt
          className="  hover:animate-wobble cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="tooltip" data-tip="RESUME">
        <FcTimeline
          className=" hover:animate-wobble cursor-pointer"
          onClick={() => router.push("/resume")}
        />
      </div>
      <div className="tooltip" data-tip="PROJECTS">
        <TbApps
          className=" hover:animate-wobble cursor-pointer"
          onClick={() => router.push("/projects")}
        />
      </div>
      <div className="tooltip" data-tip="BLOG">
        <ImBlog
          className=" hover:animate-wobble cursor-pointer"
          onClick={() => router.push("/blog")}
        />
      </div>
      <div className="tooltip" data-tip="CONTACT">
        <BiPhoneCall
          className=" hover:animate-wobble cursor-pointer"
          onClick={() => router.push("/contact")}
        />
      </div>
    </div>
  );
};

export default BottomNav;
