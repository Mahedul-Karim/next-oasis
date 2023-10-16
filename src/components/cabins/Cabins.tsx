import Filter from "../UI/Filter";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";

const options = [
  {
    id: 1,
    label: "All",
    value: "all",
  },
  {
    id: 2,
    label: "With discount",
    value: "with-discount",
  },
  {
    id: 3,
    label: "No discount",
    value: "no-discount",
  },
];

const Cabins = function () {
  return (
    <>
      <Heading title={"All Cabins"}>
        <div>
          <Filter queryValue={"discount"} options={options} />
        </div>
      </Heading>
      <Table>
        <TableHead>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </TableHead>
        <TableBody type={"cabin"} />
        <TableBody type={"cabin"} />
      </Table>
    </>
  );
};
export default Cabins;