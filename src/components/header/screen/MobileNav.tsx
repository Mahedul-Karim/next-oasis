"use client";

import DotMenu from "@/components/UI/DotMenu";
import HeaderImage from "@/components/UI/HeaderImage";
import NavButtons from "@/components/nav/NavButtons";

const MobileNav = function () {
  return (
    <DotMenu>
      <div>
        <HeaderImage />
      </div>
      <NavButtons />
    </DotMenu>
  );
};

export default MobileNav;
