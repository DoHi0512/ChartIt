export interface GraphType {
  owner: number;
  type: string;
  options: {
    [name: string]: GraphOptionType[];
  };
}

export interface GraphOptionType {
  name: string;
  optional?: boolean;
  desc: string;
  type: string;
  scale?: { min: number; max: number; step: number };
  settings?: string[];
}

export interface GraphSettingType extends GraphOptionType {
  setValue: (v: any) => void;
  value: any;
}
