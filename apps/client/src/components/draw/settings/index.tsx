import { GraphSettingType } from "@/types/graph";
import Choise from "./choise";
import DataSetting from "./data";
import Toggle from "./toggle";

export const ComponentMap: { [key: string]: React.FC<GraphSettingType> } = {
  toggle: Toggle,
  data: DataSetting,
  choise: Choise,
};
