export interface GraphType {
  id: number;
  description: string;
  name: string;
}

export interface GraphOptionType {
  name: string;
  optional?: boolean;
  defaultValue?: string;
  category: { category: string };
  desc: string;
  type: string;
  scale?: { min: number; max: number };
  settings?: string[];
}

export interface GraphSettingType extends GraphOptionType {
  setValue: (v: any) => void;
  value: any;
}
