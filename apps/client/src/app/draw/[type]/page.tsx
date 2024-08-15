"use client";
import GraphSection from "@/components/draw/graph";
import OptionBar from "@/components/draw/optionbar";
import { useGraphDetail } from "@/service/graph/queries";
import { useEffect, useState } from "react";

const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const [option, setOption] = useState({});
  const { type } = params;
  const { data, isLoading } = useGraphDetail(type);
  console.log(data);
  useEffect(() => {
    if (data?.graph_options) {
      data.graph_options.forEach(({ name, defaultValue }) => {
        setOption((prevOptions) => ({
          ...prevOptions,
          [name]: defaultValue,
        }));
      });
    }
  }, [data, isLoading]);
  return (
    <div className="flex w-full">
      <div className="w-[40rem] flex-shrink-0 overflow-auto border-r border-gray-300">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{data?.description}</div>
        <OptionBar
          option={option}
          setOption={setOption}
          data={data?.graph_options}
        />
      </div>
      <GraphSection option={option} />
    </div>
  );
};

export default DrawPage;
