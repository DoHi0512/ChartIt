import { GraphType } from "@/types/graph";
import supabase from "@/utils/supabase/client";

export const saveGraph = async (data: GraphType) => {
  await supabase.from("graph").insert(data);
};

export const getGraphList = async (id: string) => {
  const { data } = await supabase.from("graph").select("*").eq("owner", id);

  return data;
};
