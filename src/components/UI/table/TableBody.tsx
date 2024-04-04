"use client";

import Pagination from "../action/Pagination";
import BookingTable from "./BookingTable";
import CabinTable from "./CabinTable";

type Props = {
  type: string;
  cabin?: Cabins;
  booking?:Bookings;
};

const TableBody: React.FC<Props> = function ({ type, cabin,booking }) {
  return (
    <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] bg-grey-50 py-[1.2rem] px-[2.4rem] gap-x-[2.4rem] min-w-[938px] items-center !grid-rows-[35px]">
      {type === "booking" && <BookingTable data={booking as Bookings}/>}
      {type === "cabin" && (
        <>
          <CabinTable
            _id={cabin?._id}
            name={cabin?.name}
            image={cabin?.image}
            regularPrice={cabin?.regularPrice}
            maxCapacity={cabin?.maxCapacity}
            description={cabin?.description}
            discount={cabin?.discount}
          />
        </>
      )}
    </div>
  );
};

export default TableBody;
