"use client";

import React from "react";
import HeaderNav from "./HeaderNav";
import { useCtx } from "@/context/ContextProvider";

export default function Header() {
  const { isDarkMode } = useCtx();

  return (
    <header className="bg-grey-0 px-4 sm:px-6 py-6 flex justify-between items-center border-b-grey-200 border-b-[1px] border-solid h-[105px]">
      <div>
        <img
          src={
            !isDarkMode
              ? "assets/img/logo-light.png"
              : "assets/img/logo-dark.png"
          }
          alt="Logo"
          className="w-[120px] h-[80px] object-contain"
        />
      </div>
      <HeaderNav />
    </header>
  );
}
