"use client";

import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/button/Button";
import { useRouter } from "next/navigation";
import { HiOutlineHomeModern } from "react-icons/hi2";
import ButtonForm from "../UI/button/ButtonForm";
import useBooking, { useBookingMutate } from "@/app/hooks/useBooking";
import Spinner from "../UI/Spinner";
import { format, isToday } from "date-fns";
import { formatCurrency, getDateDistanceFromToday } from "@/util/helpers";

type Props = {
  bookingId: string;
};

type BookingDetail = {
  bookingDetail: Bookings;
  isDetailLoading: boolean;
};

const BookingDetails: React.FC<Props> = ({ bookingId }) => {
  const router = useRouter();
  const { bookingDetail, isDetailLoading }: BookingDetail =
    useBooking(bookingId);
  const { updateBooking, isMutatingBooking } = useBookingMutate();

  const status: string = bookingDetail?.status;

  const isPaid: boolean = bookingDetail?.isPaid;

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

  const handleBooking = (id: string) => {
    if (status === "unconfirmed") {
      updateBooking({ id, method: "PATCH" });
      return;
    }
    updateBooking({ id, method: "PUT" });
  };

  if (isDetailLoading) {
    return <Spinner />;
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
            <span>Cabin {bookingDetail?.cabinId.name}</span>
          </div>
          <div className="text-[14px] md:text-lg font-[600]">
            <span className="hidden sm:block">
              {format(new Date(bookingDetail?.startDate), "EEE,MMM dd yyyy")} (
              {isToday(new Date(bookingDetail?.startDate))
                ? "Today"
                : getDateDistanceFromToday(bookingDetail?.startDate)}
              ) — {format(new Date(bookingDetail?.endDate), "EEE,MMM dd yyyy")}
            </span>
            <span className="block sm:hidden">
              Start date:{" "}
              {format(new Date(bookingDetail?.startDate), "EEE,MMM dd yyyy")}
            </span>
            <span className="block sm:hidden">
              End date:{" "}
              {format(new Date(bookingDetail?.endDate), "EEE,MMM dd yyyy")}
            </span>
          </div>
        </div>
        <div className="py-4 sm:py-8 px-6">
          <div className="flex sm:items-center gap-2 flex-col sm:flex-row mb-6">
            <span>
              <img
                src={bookingDetail?.guestId.countryFlag}
                alt="flag"
                className="max-w-[20px] block border-[1px] border-solid border-grey-100"
              />
            </span>
            <p className="font-[600]">{`${bookingDetail?.guestId.fullName} + ${bookingDetail?.numGuests} guests`}</p>
            <p className="text-grey-500">{bookingDetail?.guestId.email}</p>
            <p className="text-grey-500">National ID: 64GD5FGE4TF</p>
          </div>
          <div
            className={`${
              isPaid
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            } py-6 px-8 flex flex-col 400px:flex-row 400px:items-center justify-between rounded-md text-[16px] font-[600]`}
          >
            <p>
              Total price:{" "}
              {formatCurrency(
                bookingDetail?.cabinId.regularPrice * bookingDetail?.numGuests
              )}
            </p>
            <span>{isPaid ? "(Paid)" : "(WILL PAY AT PROPERTY)"}</span>
          </div>
        </div>
        <div className="flex justify-end py-4 sm:py-6 px-6 text-[10px]">
          <p>
            Booked{" "}
            {format(new Date(bookingDetail?.createdAt), "EEE,MMM dd yyyy")}
          </p>
        </div>
      </div>
      <div className="mt-4 mb-6 flex justify-end">
        <ButtonForm onClick={() => handleBooking(bookingDetail?._id)} disabled={isMutatingBooking}>
          {status === "unconfirmed" ? "Check in" : "Check out"}
        </ButtonForm>
      </div>
    </>
  );
};

export default BookingDetails;
