export interface GraphType {
  id: number;
  description: string;
  name: string;
}

export interface GraphOptionType {
  name: string;
  optional?: boolean;
  defaultValue?: string | number;
  category: { category: string };
  desc: string;
}
