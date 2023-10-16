import Filter from "../UI/Filter";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";

const options = [
  {
    id: 0,
    value: "all",
    label: "All",
  },
  {
    id: 1,
    value: "unconfirmed",
    label: "Unconfirmed",
  },
  {
    id: 2,
    value: "checked-in",
    label: "Checked-in",
  },
  {
    id: 3,
    value: "checked-out",
    label: "Checked-out",
  },
];

const Bookings = function () {
  return (
    <>
      <Heading title={"All bookings"}>
        <div>
          <Filter queryValue={"status"} options={options} />
        </div>
      </Heading>
      <Table>
        <TableHead>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
        </TableHead>
        <TableBody type={'booking'}/>
        <TableBody type={'booking'}/>
        <TableBody type={'booking'}/>
      </Table>
    </>
  );
};

export default Bookings;
