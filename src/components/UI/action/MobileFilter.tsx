"use client";

import { useState } from "react";
import Button from "../button/Button";
import { BiFilterAlt } from "react-icons/bi";
import DotMenu from "../DotMenu";

type Props = {
  children: React.ReactNode;
};

const MobileFilter: React.FC<Props> = function ({ children }) {
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <div className="md:hidden relative">
      <Button onClick={() => setMobileFilter((prev) => !prev)}>
        <BiFilterAlt size={25} />
      </Button>
      {mobileFilter && <DotMenu>{children}</DotMenu>}
    </div>
  );
};

export default MobileFilter;
