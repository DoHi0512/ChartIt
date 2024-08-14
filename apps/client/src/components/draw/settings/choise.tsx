import { useGraphStore } from "@/store/graph";
import { GraphOptionType } from "@/types/graph";
import { useEffect, useState } from "react";

const Choise = ({ settings, defaultValue, name }: GraphOptionType) => {
  const [graph, setGraph] = useGraphStore();
  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    setGraph({ ...graph, [name]: selected });
  }, [selected]);
  const SETTING = settings?.map((value, idx) => (
    <div
      className={`${value === selected ? "bg-white" : "bg-gray-100 shadow-inner"} flex flex-1 items-center justify-center border-r border-gray-300 py-1`}
      onClick={() => setSelected(value)}
      key={idx}
    >
      {value}
    </div>
  ));
  return (
    <div className="flex cursor-pointer border border-r-0 border-gray-300">
      {SETTING}
    </div>
  );
};

export default Choise;
