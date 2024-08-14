import { GraphOptionType } from "@/types/graph";
import DrawOption from "./option";
import Choise from "../settings/choise";
import Toggle from "../settings/toggle";

interface OptionBarProps {
  data?: GraphOptionType[];
}
const OptionBar = ({ data }: OptionBarProps) => {
  const renderOptions = (category: string) => {
    const filterOptions = data
      ?.filter((item) => item.category.category === category)
      .map((props, idx) => (
        <DrawOption key={idx} {...props}>
          {props.type === "choise" ? (
            <Choise {...props} />
          ) : (
            <Toggle {...props} />
          )}
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
