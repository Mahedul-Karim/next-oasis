"use client";

import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../button/Button";

const BookingTable = function () {
  const status: string = "checked-out";

  const setStatus = function () {
    if (status === "unconfirmed") {
      return (
        <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-blue-100 text-blue-700 rounded-[100px] flex justify-center items-center">
          unconfirmed
        </span>
      );
    }
    if (status === "checked-in") {
      return (
        <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-green-100 text-green-700 rounded-[100px] flex justify-center items-center">
          checked in
        </span>
      );
    }
    if (status === "checked-out") {
      return (
        <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-silver-100 text-silver-700 rounded-[100px] flex justify-center items-center">
          checked out
        </span>
      );
    }
  };

  return (
    <>
      <div className="text-sm font-[600]">007</div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-[600] capitalize">Nina Williams</h4>
        <p className="!text-[13px]">nina@gmail.con</p>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-[600] capitalize">
          3 months ago → 10 night stay
        </h4>
        <p className="!text-[13px]">Jul 10 2023 — Jul 20 2023</p>
      </div>

      {setStatus()}

      <div className="font-[500]">$6,050.00</div>
      <div>
        <Button>
          <BsThreeDotsVertical size={20} />
        </Button>
      </div>
    </>
  );
};
export default BookingTable;
