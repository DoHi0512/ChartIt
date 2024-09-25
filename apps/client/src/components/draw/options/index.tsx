import { GraphSettingType } from "@/types/graph";
import Choise from "./choise";
import DataSetting from "./data";
import Toggle from "./toggle";
import Slide from "./slide";
import Select from "./select";

export const ComponentMap: { [key: string]: React.FC<GraphSettingType> } = {
  toggle: Toggle,
  data: DataSetting,
  choise: Choise,
  slide: Slide,
  select: Select,
};
