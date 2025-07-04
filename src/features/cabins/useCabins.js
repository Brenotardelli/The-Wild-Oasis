import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabins } from "../../services/apiCabins";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
