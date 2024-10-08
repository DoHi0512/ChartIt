import { ReactNode } from "react";
import { FiBarChart } from "react-icons/fi";
import { IoPieChartOutline } from "react-icons/io5";
export const GRAPH_ICONS: { [name: string]: ReactNode } = {
  bar: <FiBarChart />,
  pie: <IoPieChartOutline />,
};
