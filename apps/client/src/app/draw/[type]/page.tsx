import OptionBar from "@/components/draw/optionbar";
import { GRAPH_TYPE } from "@/constants/graph";

const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const { type } = params;
  return (
    <div className="flex">
      <div className="w-[40rem]">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{GRAPH_TYPE[type].description}</div>
        <OptionBar data={GRAPH_TYPE[type].options} />
      </div>
    </div>
  );
};

export default DrawPage;
