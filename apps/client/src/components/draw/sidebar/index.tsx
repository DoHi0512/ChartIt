"use client";
import SideItem from "./item";
import { GRAPH_ICONS } from "@/constants/graph";
import { usePathname } from "next/navigation";
const SideBar = () => {
  const pathname = usePathname().split("/");
  const SideList = Object.keys(GRAPH_ICONS).map((key, idx) => (
    <SideItem
      active={key == pathname[pathname.length - 1]}
      key={idx}
      type={key}
    >
      {GRAPH_ICONS[key]}
    </SideItem>
  ));
  return (
    <div className="flex h-full flex-col items-center gap-4 p-2 shadow-md">
      {SideList}
    </div>
  );
};

export default SideBar;
