import { API_URL } from "./base";

type Params = {
  endpoint: string;
  data?: Cabins | Bookings;
  method?: string;
};

export const readApi = async function ({ endpoint }: Params) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);

    const data = await res.json();

    if (!data.success || !res.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export const mutateApi = async function ({ endpoint, data, method }: Params) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const returnedData = await res.json();

    if (!returnedData.success || !res.ok) {
      throw new Error(returnedData.message || "Something went wrong!");
    }

    return returnedData;
  } catch (err) {
    throw err;
  }
};
