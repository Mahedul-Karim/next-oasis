"use client";

import React, { useState } from "react";
import LargeNav from "./screen/LargeNav";
import { BsThreeDotsVertical } from "react-icons/bs";
import MobileNav from "./screen/MobileNav";

export default function HeaderNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <LargeNav />

      <div className="relative sm:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <BsThreeDotsVertical size={30} />
        </button>
        {navOpen && <MobileNav />}
      </div>
    </>
  );
}
