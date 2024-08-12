import { GraphCategoryType, GraphOptionType } from "@/types/graph";
import DrawOption from "./option";

interface OptionBarProps {
  data?: GraphCategoryType[];
}
const OptionBar = ({ data }: OptionBarProps) => {
  console.log(data);
  const Options = data?.map(({ category, graph_options }) => {
    const Items = graph_options?.map((props, idx) => (
      <DrawOption {...props} key={idx}>
        옵션
      </DrawOption>
    ));
    return (
      <>
        <div className="bg-primary px-8 py-3 font-semibold text-white">
          {category.toUpperCase()}
        </div>
        {Items}
      </>
    );
  });
  return <div className="w-full">{Options}</div>;
};
export default OptionBar;
