export const API_URL = "https://server-oasis.vercel.app/api/v1";

export const cabinFilter = [
  {
    id: 1,
    label: "All",
    value: "all",
  },
  {
    id: 2,
    label: "With discount",
    value: "with-discount",
  },
  {
    id: 3,
    label: "No discount",
    value: "no-discount",
  },
];

export const cabinSort = [
  {
    id: 1,
    value: "name-asc",
    label: "Sort by name(A-Z)",
  },
  {
    id: 2,
    value: "name-desc",
    label: "Sort by name(Z-A)",
  },
  {
    id: 3,
    value: "regularPrice-asc",
    label: "Sort by price(low first)",
  },
  {
    id: 4,
    value: "regularPrice-desc",
    label: "Sort by price(high first)",
  },
];

export const bookingFilter = [
  {
    id: 0,
    value: "all",
    label: "All",
  },
  {
    id: 1,
    value: "unconfirmed",
    label: "Unconfirmed",
  },
  {
    id: 2,
    value: "checked-in",
    label: "Checked-in",
  },
  {
    id: 3,
    value: "checked-out",
    label: "Checked-out",
  },
];
