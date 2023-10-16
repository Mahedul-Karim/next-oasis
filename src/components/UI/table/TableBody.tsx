import BookingTable from "./BookingTable";
import CabinTable from "./CabinTable";

type Props = {
  type: string;
};

const TableBody: React.FC<Props> = function ({ type }) {
  return (
    <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] bg-grey-50 py-[1.2rem] px-[2.4rem] gap-x-[2.4rem] w-[938px] items-center !grid-rows-[35px]">
      {type === "booking" && <BookingTable />}
      {type === "cabin" && <CabinTable /> }
      
    </div>
  );
};

export default TableBody;