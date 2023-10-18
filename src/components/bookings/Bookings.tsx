import Filter from "../UI/action/Filter";
import MobileFilter from "../UI/action/MobileFilter";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";
import { bookingFilter } from "@/util/base";

const Bookings = function () {
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
        <TableBody type={"booking"} />
        <TableBody type={"booking"} />
        <TableBody type={"booking"} />
      </Table>
    </>
  );
};

export default Bookings;
