"use client";
import { useBookings } from "@/app/hooks/useBookings";
import Filter from "../UI/action/Filter";
import MobileFilter from "../UI/action/MobileFilter";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";
import { DATA_PER_PAGE, bookingFilter } from "@/util/base";
import Spinner from "../UI/Spinner";
import { useSearchParams } from "next/navigation";
import Pagination from "../UI/action/Pagination";

type BookData = {
  bookingData: Bookings[];
  isBookingLoading: boolean;
};

const Bookings = function () {
  const searchParams=useSearchParams();
  const { bookingData, isBookingLoading }: BookData = useBookings();

  const query = searchParams.get('status') || 'all';
  const pagination = Number(searchParams.get('page')) || 1;

  let filteredData:Array<Bookings>=[];

  if(query === 'all'){
    filteredData = bookingData;
  }
  if(query === 'unconfirmed'){
  filteredData = bookingData?.filter(data=>data.status === 'unconfirmed')
  }
  if(query === 'checked-in'){
  filteredData = bookingData?.filter(data=>data.status === 'checked-in')
  }
  if(query === 'checked-out'){
  filteredData = bookingData?.filter(data=>data.status === 'checked-out')
  }

  const totalPage = Math.ceil(filteredData?.length / DATA_PER_PAGE);

  const next = (pagination - 1) * DATA_PER_PAGE;
  const prev = totalPage === pagination ? filteredData?.length : pagination * 10

  const paginateData = filteredData?.slice(next,prev);

  if (isBookingLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Heading title={"All bookings"}>
        <div className="hidden md:flex items-center gap-2">
          <Filter queryValue={"status"} options={bookingFilter} />
        </div>
        <MobileFilter>
          <Filter queryValue={"status"} options={bookingFilter} />
        </MobileFilter>
      </Heading>
      <Table>
        <TableHead>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
        </TableHead>
        {paginateData &&
          paginateData.map((book) => (
            <TableBody type={"booking"} booking={book} key={book._id} />
          ))}
         <Pagination data={filteredData}/> 
      </Table>
    </>
  );
};

export default Bookings;
