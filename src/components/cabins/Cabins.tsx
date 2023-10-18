'use client';

import Filter from "../UI/action/Filter";
import Sort from "../UI/action/Sort";
import Heading from "../UI/Heading";
import Table from "../UI/table/Table";
import TableBody from "../UI/table/TableBody";
import TableHead from "../UI/table/TableHead";
import { cabinFilter, cabinSort } from "@/util/base";
import Pagination from "../UI/action/Pagination";
import MobileFilter from "../UI/action/MobileFilter";
import ButtonForm from "../UI/button/ButtonForm";
import Modal from "../modal/Modal";
import Form from "../UI/form/Form";
import FormLabel from "../UI/form/FormLabel";
import FormBody from "../UI/form/FormBody";
import Input from "../UI/form/Input";
import { useState } from "react";
import FormModal from "../modal/FormModal";

const Cabins = function () {


  const [openForm,setOpenForm]=useState(false);

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
        <TableBody type={"cabin"} />
        <TableBody type={"cabin"} />
        <Pagination />
      </Table>
      <div className="mb-5">
        <ButtonForm onClick={()=>setOpenForm(true)}>Add new cabin</ButtonForm>
      </div>
      {openForm && <FormModal onClick={()=>setOpenForm(false)}/>}
    </>
  );
};
export default Cabins;
