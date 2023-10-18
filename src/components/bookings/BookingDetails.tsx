"use client";

import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/button/Button";
import { useRouter } from "next/navigation";
import { HiOutlineHomeModern } from "react-icons/hi2";
import ButtonForm from "../UI/button/ButtonForm";

type Props = {
  bookingId: string;
};

const BookingDetails: React.FC<Props> = ({ bookingId }) => {
  const router = useRouter();

  const status: string = "checked-out";

  const isPaid: boolean = false;

  let bookingStatus;

  if (status === "unconfirmed") {
    bookingStatus = (
      <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-blue-100 text-blue-700 rounded-[100px] flex justify-center items-center">
        unconfirmed
      </span>
    );
  }
  if (status === "checked-in") {
    bookingStatus = (
      <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-green-100 text-green-700 rounded-[100px] flex justify-center items-center">
        checked in
      </span>
    );
  }
  if (status === "checked-out") {
    bookingStatus = (
      <span className="uppercase text-[11px] font-[600] py-[0.4rem] px-[1rem]  bg-silver-100 text-silver-700 rounded-[100px] flex justify-center items-center">
        checked out
      </span>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center gap-3 flex-wrap">
          <Heading title={`Booking#${bookingId}`} />
          <div className="pb-3">{bookingStatus}</div>
        </div>
        <div className="pb-3 self-end">
          <button
            className="flex items-center text-indigo-700"
            onClick={() => router.back()}
          >
            &larr; Back
          </button>
        </div>
      </div>
      <div className="bg-grey-0 w-full rounded-md overflow-hidden">
        <div className="bg-primary-500 flex flex-col sm:flex-row justify-between sm:items-center py-4 sm:py-6 px-6 text-color-text gap-2 sm:gap-0">
          <div className="flex items-center gap-2 text-[14px] md:text-lg font-[600]">
            <span>
              <HiOutlineHomeModern size={25} />
            </span>
            <span>Cabin 007</span>
          </div>
          <div className="text-[14px] md:text-lg font-[600]">
            <span className="hidden sm:block">
              Thu, Nov 09 2023 (In 21 days) — Sun, Nov 19 2023
            </span>
            <span className="block sm:hidden">
              Start date: Thu, Nov 09 2023
            </span>
            <span className="block sm:hidden">End date: Thu, Nov 09 2023</span>
          </div>
        </div>
        <div className="py-4 sm:py-8 px-6">
          <div className="flex sm:items-center gap-2 flex-col sm:flex-row mb-6">
            <span>🏳</span>
            <p className="font-[600]">Nina Williams + 6 guests</p>
            <p className="text-grey-500">nina@hotmail.com</p>
            <p className="text-grey-500">National ID: 64GD5FGE4TF</p>
          </div>
          <div
            className={`${
              isPaid
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            } py-6 px-8 flex flex-col 400px:flex-row 400px:items-center justify-between rounded-md text-[16px] font-[600]`}
          >
            <p>Total price: $1,603.00</p>
            <span>{isPaid ? "(Paid)" : "(WILL PAY AT PROPERTY)"}</span>
          </div>
        </div>
        <div className="flex justify-end py-4 sm:py-6 px-6 text-[10px]">
          <p>Booked Sat, Sep 30 2023, 6:04 PM</p>
        </div>
      </div>
      <div className="mt-4 mb-6 flex justify-end">
        <ButtonForm>Check Out</ButtonForm>
      </div>
    </>
  );
};

export default BookingDetails;
