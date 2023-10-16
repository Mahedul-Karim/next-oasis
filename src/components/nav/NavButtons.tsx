"use client";
import { AiOutlineUser } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useCtx } from "@/context/ContextProvider";
import Button from "../UI/button/Button";

const NavButtons = function () {
  const { isDarkMode, setIsDarkMode } = useCtx();
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row">
      <Button nav={true}>
        <AiOutlineUser className="w-[20px] h-[20px]" />
      </Button>
      <Button
        nav={true}
        onClick={() => setIsDarkMode((prev: boolean) => !prev)}
      >
        {!isDarkMode ? (
          <BsMoon className="w-[20px] h-[20px]" />
        ) : (
          <BsSun className="w-[20px] h-[20px]" />
        )}
      </Button>
      <Button nav={true}>
        <BiLogIn className="w-[20px] h-[20px]" />
      </Button>
    </div>
  );
};
export default NavButtons;
