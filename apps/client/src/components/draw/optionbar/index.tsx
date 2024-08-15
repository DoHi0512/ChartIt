import { GraphOptionType } from "@/types/graph";
import DrawOption from "./option";
import { ComponentMap } from "../settings";

interface OptionBarProps {
  data?: GraphOptionType[];
  option: any;
  setOption: (v: any) => void;
}
const OptionBar = ({ data, option, setOption }: OptionBarProps) => {
  const renderOptions = (category: string) => {
    const filterOptions = data
      ?.filter((item) => item.category.category === category)
      .map((props, idx) => {
        const Component = ComponentMap[props.type];
        const handleChange = (v: any) => {
          setOption({ ...option, [props.name]: v });
        };
        return (
          <DrawOption {...props} key={idx}>
            <Component
              value={option[props.name]}
              setValue={handleChange}
              {...props}
            />
          </DrawOption>
        );
      });
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
