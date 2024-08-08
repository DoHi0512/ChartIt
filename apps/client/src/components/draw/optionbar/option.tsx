import { OptionProps } from "@/types/option";
import { ReactNode } from "react";

interface DrawOptionProps extends OptionProps {
  children: ReactNode;
}
const DrawOption = ({
  children,
  name,
  optional = true,
  desc,
  defaultValue,
}: DrawOptionProps) => {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-400 px-8 py-2">
      <div className="flex items-center gap-4">
        <span className="font-semibold">{name}</span>
        <span className="font-light text-gray-400">
          {optional ? "optional" : "required"}
        </span>
        <span className="font-light">
          {!!defaultValue ? "default : " + defaultValue : ""}
        </span>
      </div>
      {children}
      <span className="text-sm font-light text-gray-400">{desc}</span>
    </div>
  );
};

export default DrawOption;
