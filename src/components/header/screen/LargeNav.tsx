"use client";

import HeaderImage from "@/components/UI/HeaderImage";
import NavButtons from "@/components/nav/NavButtons";

const LargeNav = function () {
  return (
    <nav className="hidden sm:flex items-center gap-4">
      <HeaderImage />
      <NavButtons />
    </nav>
  );
};

export default LargeNav;
