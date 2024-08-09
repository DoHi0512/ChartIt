import { useQuery } from "@tanstack/react-query";
import { getAllGraph, getGraphDetail } from "./api";

export const useAllGraph = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["graph", "all"],
    queryFn: getAllGraph,
  });
  return { data: data, ...restQuery };
};

export const useGraphDetail = (type: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["graph", type],
    queryFn: () => getGraphDetail(type),
  });
  return { data: data && data[0], ...restQuery };
};
