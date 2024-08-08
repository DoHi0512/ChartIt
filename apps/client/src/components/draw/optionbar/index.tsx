import { OptionProps } from "@/types/option";
import DrawOption from "./option";

interface OptionBarProps {
  data: {
    base: OptionProps[];
    style: OptionProps[];
  };
}
const OptionBar = ({ data }: OptionBarProps) => {
  const { base, style } = data;
  const BaseOptions = base.map((props, idx) => (
    <DrawOption {...props} key={idx}>
      옵션
    </DrawOption>
  ));
  return (
    <div className="w-full">
      <div className="bg-primary px-8 py-4 font-semibold text-white">BASE</div>
      {BaseOptions}
    </div>
  );
};
export default OptionBar;
