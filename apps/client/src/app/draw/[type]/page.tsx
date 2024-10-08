"use client";
import GraphSection from "@/components/draw/graph";
import OptionBar from "@/components/draw/optionbar";
import { GRAPH_OPTIONS, OPTIONS_INIT } from "@/constants/options";
import { useOptionState } from "@/store/options";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Menu from "@/components/draw/graph/menu";
const DrawPage = ({ params }: { params: { type: string } }) => {
  const searchParam = useSearchParams();
  const paramOptions = searchParam.get("options");
  const { type } = params;
  const [option, setOption] = useOptionState();
  const ref = useRef<HTMLDivElement>(null);
  const { description, options } = GRAPH_OPTIONS[type];

  useEffect(() => {
    if (paramOptions) {
      setOption(JSON.parse(paramOptions));
    } else setOption(OPTIONS_INIT[type]);
  }, [type]);

  return (
    <div className="flex w-full">
      <div className="w-[35rem] flex-shrink-0 overflow-auto border-r border-gray-300">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{description}</div>
        <OptionBar option={option} setOption={setOption} data={options} />
      </div>
      <div className="flex flex-1 flex-col">
        <Menu refContainer={ref} options={option} type={type} />
        <GraphSection ref={ref} type={type} />
      </div>
    </div>
  );
};

export default DrawPage;
