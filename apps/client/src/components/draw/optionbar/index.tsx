import { GraphOptionType } from "@/types/graph";
import DrawOption from "./option";

interface OptionBarProps {
  data?: GraphOptionType[];
}
const OptionBar = ({ data }: OptionBarProps) => {
  const renderOptions = (category: string) => {
    const filterOptions = data
      ?.filter((item) => item.category.category === category)
      .map((props, idx) => (
        <DrawOption key={idx} {...props}>
          HI
        </DrawOption>
      ));
    return (
      <>
        <div className="bg-primary px-8 py-3 font-semibold text-white">
          {category}
        </div>
        {filterOptions}
      </>
    );
  };

  const BaseOptions = renderOptions("base");
  const StyleOptions = renderOptions("style");

  return (
    <div className="w-full">
      {BaseOptions}
      {StyleOptions}
    </div>
  );
};
export default OptionBar;
