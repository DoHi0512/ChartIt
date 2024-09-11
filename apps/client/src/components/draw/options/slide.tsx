import { GraphSettingType } from "@/types/graph";

const Slide = ({ scale, setValue, value }: GraphSettingType) => {
  const { min, max, step } = scale || {};
  const currentValue = value == "auto" ? max : value;
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        value={currentValue}
        step={step}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <span className="font-light">{currentValue}</span>
    </div>
  );
};

export default Slide;
