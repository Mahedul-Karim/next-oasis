import { formatDistance,parseISO } from "date-fns";

type Options = {
  end?: string;
};

export const formatCurrency = (value: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
export const getToday = function (options: Options = {}) {
  const today = new Date();

  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }
  return today.toISOString();
};

export const getDateDistanceFromToday=(date:string)=>{
  const distance = formatDistance(parseISO(date),new Date(),{
    addSuffix:true
  }).replace('about','');
  return distance;
}