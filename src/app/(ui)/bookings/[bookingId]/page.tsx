import BookingDetails from "@/components/bookings/BookingDetails";
import React from "react";

type Props = {
  params: {
    bookingId: string;
  };
};

const BookingDetailsPage: React.FC<Props> = ({ params: { bookingId } }) => {
  return <BookingDetails bookingId={bookingId} />;
};

export default BookingDetailsPage;
