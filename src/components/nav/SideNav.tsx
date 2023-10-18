"use client";

import React from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import NavActions from "./NavActions";
import { HiMiniCalendarDays, HiOutlineHomeModern } from "react-icons/hi2";

const sideNav = [
  {
    to: "/dashboard",
    icon: AiOutlineHome,
    text: "Home",
  },
  {
    to: "/bookings",
    icon: HiMiniCalendarDays,
    text: "Bookings",
  },
  {
    to: "/cabins",
    icon: HiOutlineHomeModern,
    text: "Cabins",
  },
  {
    to: "/user",
    icon: AiOutlineUser,
    text: "User",
  },
];

export default function SideNav() {
  return (
    <nav className="hidden bg-grey-0 border-r-grey-200 border-r-[1px] border-solid 400px:flex flex-col gap-2 px-4 py-6">
      {sideNav.map((side) => (
        <NavActions
          to={side.to}
          icon={side.icon}
          text={side.text}
          key={side.text}
        />
      ))}
    </nav>
  );
}
