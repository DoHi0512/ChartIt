import { BsBarChart } from "react-icons/bs";
import { IoPieChartOutline } from "react-icons/io5";
import SideItem from "./item";
const SideBar = () => {
  return (
    <div className="flex h-full flex-col items-center gap-4 p-2 shadow-md">
      <SideItem type="bar">
        <BsBarChart />
      </SideItem>
      <SideItem type="pie">
        <IoPieChartOutline />
      </SideItem>
    </div>
  );
};

export default SideBar;
