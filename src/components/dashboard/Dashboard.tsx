"use client";

import Filter from "@/components/UI/action/Filter";
import Heading from "@/components/UI/Heading";
import MobileFilter from "../UI/action/MobileFilter";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stats from "./Stats";
import { useSearchParams } from "next/navigation";
import { differenceInDays, parseISO, subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { readApi } from "@/util/api";
import Spinner from "../UI/Spinner";
import { useCabins } from "@/app/hooks/useCabins";
import { formatCurrency } from "@/util/helpers";
import Activity from "./Activity";
import { useBookings } from "@/app/hooks/useBookings";
import DurationChart from "./PieChart";
import SalesChart from "./SalesChart";

const options = [
  {
    id: 1,
    value: "7",
    label: "Last 7 days",
  },
  {
    id: 2,
    value: "30",
    label: "Last 30 days",
  },
  {
    id: 3,
    value: "90",
    label: "Last 90 days",
  },
];

const Dashboard = function () {
  const searchParams = useSearchParams();

  const recent = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const recentDays = subDays(new Date(), recent).toISOString();

  const { cabinData, isCabinLoading } = useCabins();
  const { bookingData, isBookingLoading } = useBookings();

  const { data: booking, isLoading: isBookLoading } = useQuery({
    queryFn: () => readApi({ endpoint: `booking/recent/${recentDays}` }),
    queryKey: ["booking-recent", `recent-${recent}`],
  });
  const { data: staying, isLoading: isStaysLoading } = useQuery({
    queryFn: () => readApi({ endpoint: `booking/stays/${recentDays}` }),
    queryKey: ["stays-recent", `recent-${recent}`],
  });

  const stayinFilter = staying?.recentStays?.filter(
    (stay: any) => stay.status !== "unconfirmed"
  );

  const numBooking = booking?.recentBooking?.length;

  const totalSales = booking?.recentBooking?.reduce(
    (acc: any, cur: any) => acc + cur.cabinId.regularPrice,
    0
  );

  const numCheckins = stayinFilter?.length;

  const numNights: any[] = [];

  stayinFilter?.forEach((book: any) => {
    numNights.push(
      differenceInDays(parseISO(book.endDate), parseISO(book.startDate))
    );
  });

  const occupencyRate =
    numNights.reduce((acc, curr) => acc + curr, 0) /
    (recent * cabinData?.length);

  const activityAll = bookingData?.filter(
    (book: any) => book.status !== "checked-out"
  );

  if (isBookLoading || isStaysLoading || isCabinLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <Heading title="Dashboard">
        <div className="hidden md:flex items-center gap-2">
          <Filter queryValue={"last"} options={options} />
        </div>
        <MobileFilter>
          <Filter queryValue={"last"} options={options} />
        </MobileFilter>
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2">
        <Stats
          title="Bookings"
          color="blue"
          icon={HiOutlineBriefcase}
          text={numBooking}
        />
        <Stats
          title="Sales"
          color="green"
          icon={HiOutlineBanknotes}
          text={formatCurrency(totalSales)}
        />
        <Stats
          title="Check ins"
          color="indigo"
          icon={HiOutlineCalendarDays}
          text={numCheckins}
        />
        <Stats
          title="Occupency rate"
          color="yellow"
          icon={HiOutlineChartBar}
          text={Math.round(occupencyRate * 100) + "%"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-rows-[340px] my-6">
        <div className="bg-grey-0 border-[1px] border-solid border-grey-100 p-[32px] flex flex-col gap-[24px] rounded-md">
          <div className="overflow-scroll overflow-x-hidden" id="activity">
            {!isBookingLoading ? (
              activityAll.map((activity: any) => (
                <Activity key={activity._id} activity={activity} />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <DurationChart />
      </div>
      <SalesChart />
    </section>
  );
};

export default Dashboard;
