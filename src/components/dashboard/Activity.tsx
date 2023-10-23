import React from "react";
import ActivityTag from "./ActivityTag";

type Props = {
  activity: Bookings;
};

const Activity: React.FC<Props> = ({ activity }) => {
  const { _id, status, guestId } = activity;


  
  return (
    <>
    {guestId && <div className="grid grid-cols-3 gap-[12px] text-[14px] py-[8px] border-b-[1px] border-solid border-grey-100 items-center">
      {status === "unconfirmed" && <ActivityTag color="green" title="Arriving"/>}
      {status === "checked-in" && <ActivityTag color="green" title="Departing"/>}
      <img
        src={guestId?.countryFlag}
        alt=""
        className="max-w-[20px] block border-[1px] border-solid border-grey-100"
      />
      <div className="font-[500]">{guestId?.fullName}</div>
    </div>}
    </>
  );
};

export default Activity;
