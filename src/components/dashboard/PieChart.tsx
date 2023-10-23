'use client';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useCtx } from "@/context/ContextProvider"; 


const startDataLight = [
  {
    duration: "1 night",
    value: 5,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 4,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 9,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 2,
    color: "#84cc16",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 5,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 4,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 9,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 2,
    color: "#4d7c0f",
  },
  
];

function prepareData(startData:any, stays:any) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr:any, field:any) {
    return arr.map((obj:any) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr:any, cur:any) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj:any) => obj.value > 0);

  return data;
}

function DurationChart() {
  const { isDarkMode } = useCtx();

  const data = !isDarkMode ? startDataLight : startDataDark;

  return (
    <div className="bg-grey-0 border-[1px] border-solid border-grey-100 rounded-md p-[32px]">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            cx="40%"
            cy="50%"
            // paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          
          <Legend
            verticalAlign="middle"
            align="right"
            width={'30%' as any}
            layout="vertical"
            iconSize={10}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
