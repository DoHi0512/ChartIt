import supabase from "@/utils/supabase/client";

export const getAllGraph = async () => {
  const { data } = await supabase.from("graph_types").select(`
    id,
    name,
    description
    `);
  return data;
};

export const getGraphDetail = async (type: string) => {
  const { data } = await supabase
    .from("graph_types")
    .select(
      `
        description,
        graph_options (
            *,
            id,
            category:category_id (category)
        )
    `,
    )
    .eq("name", type)
    .order("id", { foreignTable: "graph_options" });

  return data;
};
