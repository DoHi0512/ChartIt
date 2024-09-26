import { GraphType } from "@/types/graph";
import supabase from "@/utils/supabase/client";

export const saveGraph = async (data: GraphType) => {
  await supabase.from("graph").insert(data);
};

export const getGraphList = async (id: number) => {
  const data = await supabase.from("graph").select("*");

  return data.data;
};
