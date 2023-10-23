"use client";

import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../button/Button";
import DotMenu from "../DotMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency, getDateDistanceFromToday } from "@/util/helpers";

import { format, isToday } from "date-fns";

type BookingData = {
  data: Bookings;
};

const BookingTable = function ({ data }: BookingData) {
  const [openDot, setOpenDot] = useState(false);

  const router = useRouter();

  const status: string = data.status;

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
      <div className="text-sm font-[600]">{data?.cabinId.name}</div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-[600] capitalize">
          {data?.guestId?.fullName}
        </h4>
        <p className="!text-[13px]">{data?.guestId?.email}</p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-sm font-[600] capitalize">
          {isToday(new Date(data?.startDate))
            ? "Today"
            : getDateDistanceFromToday(data?.startDate)}
        </h4>
        <p className="!text-[13px]">
          {format(new Date(data.startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(data.endDate), "MMM dd yyyy")}
        </p>
      </div>

      {setStatus()}

      <div className="font-[500]">
        {formatCurrency(data.cabinId.regularPrice)}
      </div>
      <div className="relative">
        <Button onClick={() => setOpenDot((prev) => !prev)}>
          <BsThreeDotsVertical size={20} />
        </Button>
        {openDot && (
          <DotMenu>
            <div className="w-max flex flex-col items-center" id="dot">
              {status !== "checked-out" && (
                <button
                  className="block w-full p-2 hover:bg-grey-100"
                  onClick={() => router.push(`/bookings/${data._id}`)}
                >
                  See details
                </button>
              )}
              <button className="block w-full p-2 hover:bg-grey-100">
                Delete
              </button>
            </div>
          </DotMenu>
        )}
      </div>
    </>
  );
};
export default BookingTable;
