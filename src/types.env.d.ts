type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

type Guests = {
  _id: string;
  fullName: string;
  email: string;
  nationality: string;
  countryFlag: string;
  password: string;
};

type Cabins = {
  _id?: string;
  name?: string;
  maxCapacity?: number;
  discount?: number;
  image?: string | ArrayBuffer | null;
  description?: string;
  regularPrice?: number;
  [index: number]: number;
};

type Bookings = {
  _id: string;
  startDate: string;
  endDate: string;
  cabinId: {
    _id: string;
    name: string;
    regularPrice: number;
  };
  guestId: {
    _id: string;
    fullName: string;
    email: string;
    country: string;
    countryFlag: string;
  };
  status: string;
  hasBreakfast: boolean;
  observations: string;
  isPaid: boolean;
  numGuests: number;
  createdAt: string;
  updatedAt: string;
  [index: number]: number;
};
