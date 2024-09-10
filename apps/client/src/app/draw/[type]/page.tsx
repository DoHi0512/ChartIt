"use client";
import GraphSection from "@/components/draw/graph";
import OptionBar from "@/components/draw/optionbar";
import { GRAPH_OPTIONS, OPTIONS_INIT } from "@/constants/options";
import { useOptionState } from "@/store/options";
import { useEffect } from "react";

const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const { type } = params;
  const [option, setOption] = useOptionState();
  console.log(option);
  useEffect(() => {
    setOption(OPTIONS_INIT[type]);
  }, []);
  const { description, options } = GRAPH_OPTIONS[type];
  return (
    <div className="flex w-full">
      <div className="w-[40rem] flex-shrink-0 overflow-auto border-r border-gray-300">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{description}</div>
        <OptionBar option={option} setOption={setOption} data={options} />
      </div>
      <GraphSection />
    </div>
  );
};

export default DrawPage;
