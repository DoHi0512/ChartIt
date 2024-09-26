import { GraphType } from "@/types/graph";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getGraphList, saveGraph } from "./api";
import { toast } from "react-toastify";

export const useSaveMutation = () => {
  const client = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: (data: GraphType) => saveGraph(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["graphList"] });
      toast.success("저장 성공!");
    },
    onError: () => {
      toast.error("저장 실패!");
    },
  });

  return { saveMutate: mutate, ...restMutate };
};

export const useGraphList = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["graphList", id],
    queryFn: () => getGraphList(id),
  });
  console.log("data", data);
  return { data, ...restQuery };
};
