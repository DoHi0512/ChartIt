"use client";
import { GraphOptionType } from "@/types/graph";
import DrawOption from "./option";
import { ComponentMap } from "../options";

interface OptionBarProps {
  data: { style: GraphOptionType[]; base: GraphOptionType[] };
  option: any;
  setOption: (v: any) => void;
}
const OptionBar = ({ data, option, setOption }: OptionBarProps) => {
  const Base = data.base.map((props, idx) => {
    const Setting = ComponentMap[props.type];
    return (
      <DrawOption key={idx} {...props}>
        <Setting
          value={option[props.name]}
          setValue={(v) => setOption({ ...option, [props.name]: v })}
          {...props}
        />
      </DrawOption>
    );
  });
  const Style = data.style.map((props, idx) => {
    const Setting = ComponentMap[props.type];
    return (
      <DrawOption key={idx} {...props}>
        <Setting
          value={option[props.name]}
          setValue={(v) => setOption({ ...option, [props.name]: v })}
          {...props}
        />
      </DrawOption>
    );
  });
  return (
    <div className="w-full">
      <div className="bg-primary px-8 py-3 font-semibold text-white">Base</div>
      {Base}
      <div className="bg-primary px-8 py-3 font-semibold text-white">Style</div>
      {Style}
    </div>
  );
};
export default OptionBar;
