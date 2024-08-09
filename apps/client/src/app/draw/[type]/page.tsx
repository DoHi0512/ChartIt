"use client";
import OptionBar from "@/components/draw/optionbar";
import { useGraphDetail } from "@/service/graph/queries";

const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const { type } = params;
  const { data, isLoading } = useGraphDetail(type);
  return (
    <div className="flex">
      <div className="w-[40rem]">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{data?.description}</div>
        <OptionBar data={data?.graph_category} />
      </div>
    </div>
  );
};

export default DrawPage;
