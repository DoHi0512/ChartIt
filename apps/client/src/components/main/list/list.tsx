"use client";
import GRAPH_DATA from "@/constants/graph";
import GraphItem from "./item";

interface GraphListProps {
  direction: "right" | "left";
  scroll: number;
}

const GraphList = ({ direction, scroll }: GraphListProps) => {
  const List = GRAPH_DATA["right"].map((props, idx) => (
    <GraphItem {...props} key={idx} />
  ));
  return (
    <div
      className="flex w-[2000px] gap-8 duration-75"
      style={{
        transform: `translateX(${scroll * 0.01 * (direction == "right" ? 1 : -1)}rem)`,
      }}
    >
      {List}
    </div>
  );
};

export default GraphList;
