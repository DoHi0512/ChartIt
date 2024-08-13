"use client";
import GraphSection from "@/components/draw/graph";
import OptionBar from "@/components/draw/optionbar";
import { useGraphDetail } from "@/service/graph/queries";

const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const { type } = params;
  const { data, isLoading } = useGraphDetail(type);
  console.log(data);
  return (
    <div className="flex w-full">
      <div className="w-[40rem] flex-shrink-0">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{data?.description}</div>
        <OptionBar data={data?.graph_options} />
      </div>
      <GraphSection />
    </div>
  );
};

export default DrawPage;
