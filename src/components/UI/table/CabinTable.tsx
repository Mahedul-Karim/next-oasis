"use client";

import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../button/Button";
import DotMenu from "../DotMenu";
import { formatCurrency } from "@/util/helpers";
import FormModal from "@/components/modal/FormModal";
//image! ==> ! to tell typescript the value wont be null and as string to set the image as string
const CabinTable = function ({
  _id,
  name,
  maxCapacity,
  regularPrice,
  image,
  description,
  discount,
}: Cabins) {
  const [openDot, setOpenDot] = useState(false);
  const [editForm, setEditForm] = useState(false);

  return (
    <>
      {editForm && (
        <FormModal
          cabinData={{
            _id,
            name,
            maxCapacity,
            regularPrice,
            image,
            description,
            discount,
          }}
          onClick={()=>setEditForm(prev=>!prev)}
          submitType="edit"
        />
      )}
      <img
        src={image! as string}
        alt="cabin"
        className="w-[64px] aspect-[3/2] block object-cover !scale-[1.5]"
      />

      <div className="flex flex-col gap-1">
        <h4 className="text-[16px] font-[600] capitalize">{name}</h4>
      </div>
      <div className="flex flex-col gap-1">
        <p className="!text-sm font-[500]">Fits up to {maxCapacity} guests</p>
      </div>

      <div className="font-[500]">{formatCurrency(regularPrice)}</div>

      <div className="font-[500]">{discount ? formatCurrency(discount) : '-'}</div>
      <div className="relative">
        <Button onClick={() => setOpenDot((prev) => !prev)}>
          <BsThreeDotsVertical size={20} />
        </Button>
        {openDot && (
          <DotMenu>
            <div className="w-[80px] flex flex-col items-center" id="dot">
              <button
                className="block w-full p-1 hover:bg-grey-100"
                onClick={() => setEditForm((prev) => !prev)}
              >
                Edit
              </button>
              <button className="block w-full p-1 hover:bg-grey-100">
                Delete
              </button>
            </div>
          </DotMenu>
        )}
      </div>
    </>
  );
};
export default CabinTable;
