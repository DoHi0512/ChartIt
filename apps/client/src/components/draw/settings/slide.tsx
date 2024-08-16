import { GraphSettingType } from "@/types/graph";

const Slide = ({ scale, setValue, value }: GraphSettingType) => {
  const { min, max, step } = scale || {};
  console.log(min, max);
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <span className="font-light">{value}</span>
    </div>
  );
};

export default Slide;
