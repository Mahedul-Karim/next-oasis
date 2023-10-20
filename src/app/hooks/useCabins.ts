"use client";

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mutateApi, readApi } from "@/util/api";
import { toast } from "react-hot-toast";


type Params={
  data:Cabins;
  method:string;
}

export const useCabins = () => {
  const { data: cabinData, isLoading: isCabinLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: () => readApi({ endpoint: "cabins" }),
  });

  return { cabinData: cabinData?.cabins, isCabinLoading };
};

export const useMutateCabin = (closeModal: () => void, reset: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: cabinMutate, isLoading: isMutating } = useMutation({
    mutationFn: ({ data, method }:Params) =>
      mutateApi({ endpoint: "cabins", data, method }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin added successfully!");
      closeModal();
      reset();
    },
    onError: (err: any) => toast.error(err),
  });

  return { cabinMutate, isMutating };
};
