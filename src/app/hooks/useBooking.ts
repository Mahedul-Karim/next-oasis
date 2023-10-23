import { mutateApi, readApi } from "@/util/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const useBooking = (id: string) => {
  const { data, isLoading: isDetailLoading } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => readApi({ endpoint: `booking/${id}` }),
  });

  return { bookingDetail: data?.booking, isDetailLoading };
};

export const useBookingMutate = () => {
  const queryClient = useQueryClient();

  const { mutate: updateBooking, isLoading: isMutatingBooking } = useMutation({
    mutationFn: ({ id, method }: { id: string; method: string }) =>
      mutateApi({ endpoint: `booking/${id}`, method }),
    onSuccess: () => {
      toast.success("Booking updated!");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
  return { updateBooking, isMutatingBooking };
};

export default useBooking;
