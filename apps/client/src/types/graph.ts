export interface GraphType {
  id: number;
  description: string;
  name: string;
  graph_category?: GraphCategoryType[];
}

export interface GraphCategoryType {
  category: "base" | "style";
  id?: number;
  graph_options: GraphOptionType[];
}

export interface GraphOptionType {
  name: string;
  optional?: boolean;
  defaultValue?: string | number;
  desc: string;
}
