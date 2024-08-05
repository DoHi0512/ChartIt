"use client";
import { useEffect, useState } from "react";
import GraphList from "./list";
import { BsArrow90DegDown } from "react-icons/bs";
const MainList = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => {
        const { scrollY } = window;
        setScroll(scrollY);
      };
      window.addEventListener("scroll", onScroll);
      () => window.removeEventListener("scroll", onScroll);
    }
  }, []);
  return (
    <div className="flex h-[100rem] flex-col items-center gap-8 px-16 py-12">
      <span className="flex items-center justify-between gap-4 text-xl font-medium [&>svg]:h-6 [&>svg]:w-6">
        <BsArrow90DegDown />
        그릴 수 있는 그래프
        <BsArrow90DegDown className="-scale-x-100" />
      </span>
      <div className="absolute mt-16 flex w-full flex-col items-center gap-4 overflow-hidden">
        <GraphList direction="right" scroll={scroll} />
        <GraphList direction="left" scroll={scroll} />
      </div>
    </div>
  );
};

export default MainList;
