"use client";

import NavActions from "./NavActions";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
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

const BottomNav = function () {
  return (
    <div className="flex 400px:hidden justify-center w-full fixed bottom-[12px] z-[9999]">
      <div className="bg-grey-0 h-[40px] rounded-lg flex backdrop-blur-md bg-opacity-10 shadow-lg">
        {sideNav.map((side) => (
          <NavActions
            to={side.to}
            icon={side.icon}
            text={side.text}
            key={side.text}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
