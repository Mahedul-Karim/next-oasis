"use client";

import Filter from "@/components/UI/Filter";
import Heading from "@/components/UI/Heading";

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
  return (
    <section>
      <Heading title="Dashboard">
        <Filter queryValue={"days"} options={options} />
      </Heading>
    </section>
  );
};

export default Dashboard;
