"use client";

import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../button/Button";
import DotMenu from "../DotMenu";

const CabinTable = function () {
  const [openDot, setOpenDot] = useState(false);

  return (
    <>
      <img
        src={"assets/cabin-001.jpg"}
        alt="cabin"
        className="w-[64px] aspect-[3/2] block object-cover !scale-[1.5]"
      />

      <div className="flex flex-col gap-1">
        <h4 className="text-[16px] font-[600] capitalize">001</h4>
      </div>
      <div className="flex flex-col gap-1">
        <p className="!text-sm font-[500]">Fits up to 2 guests</p>
      </div>

      <div className="font-[500]">$250.00</div>

      <div className="font-[500]">-</div>
      <div className="relative">
        <Button onClick={() => setOpenDot((prev) => !prev)}>
          <BsThreeDotsVertical size={20} />
        </Button>
        {openDot && (
          <DotMenu>
            <div className="w-[80px] flex flex-col items-center" id="dot">
              <button className="block w-full p-1 hover:bg-grey-100">Edit</button>
              <button className="block w-full p-1 hover:bg-grey-100">Delete</button>
            </div>
          </DotMenu>
        )}
      </div>
    </>
  );
};
export default CabinTable;
