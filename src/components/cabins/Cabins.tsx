"use client";

import Filter from "../UI/action/Filter";
import Sort from "../UI/action/Sort";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";
import { DATA_PER_PAGE, cabinFilter, cabinSort } from "@/util/base";
import Pagination from "../UI/action/Pagination";
import MobileFilter from "../UI/action/MobileFilter";
import ButtonForm from "../UI/button/ButtonForm";
import { useState } from "react";
import FormModal from "../modal/FormModal";
import Spinner from "../UI/Spinner";
import { useCabins } from "@/app/hooks/useCabins";
import { useSearchParams } from "next/navigation";

type CabinsType = {
  cabinData: Cabins[];
  isCabinLoading: boolean;
};

const Cabins = function () {
  const [openForm, setOpenForm] = useState(false);

  const { cabinData, isCabinLoading }: CabinsType = useCabins();

  const searchParams = useSearchParams();

  const activeParams = searchParams.get("discount") || "all";
  const sortedParams = searchParams.get("sortBy") || "name-asc";
  const paginate = Number(searchParams.get("page")) || 1;

  const [sortValue, direction]: Array<any> = sortedParams.split("-");

  let filteredData:Array<Cabins>=[];

  if (activeParams === "all") {
    filteredData = cabinData;
  }

  if (activeParams === "with-discount") {
    filteredData = cabinData?.filter(
      (data) => data.discount && data?.discount > 0
    );
  }
  if (activeParams === "no-discount") {
    filteredData = cabinData?.filter((data) => data.discount === 0);
  }

  const modifier = direction === "asc" ? 1 : -1;

  const totalPage = Math.ceil(filteredData?.length / 10);

  const nextPage = (paginate - 1) * 10;
  const prevPage = paginate === totalPage ? filteredData?.length : paginate * 10;

  const sortedData = filteredData
    ?.sort((a, b) => (a[sortValue] - b[sortValue]) * modifier)
    .slice(nextPage, prevPage);

  if (isCabinLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading title={"All Cabins"}>
        <div className="hidden md:flex items-center gap-2">
          <Filter queryValue={"discount"} options={cabinFilter} />
          <Sort queryValue="sortBy" options={cabinSort} />
        </div>
        <MobileFilter>
          <Filter queryValue={"discount"} options={cabinFilter} />
          <Sort queryValue="sortBy" options={cabinSort} />
        </MobileFilter>
      </Heading>
      <Table>
        <TableHead>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </TableHead>
        {sortedData?.map((cabin) => (
          <TableBody type={"cabin"} cabin={cabin} key={cabin._id} />
        ))}
        <Pagination data={filteredData as Cabins[]} />
      </Table>
      <div className="mb-5">
        <ButtonForm onClick={() => setOpenForm(true)}>Add new cabin</ButtonForm>
      </div>
      {openForm && <FormModal onClick={() => setOpenForm(false)} />}
    </>
  );
};
export default Cabins;
