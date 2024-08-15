import { GraphSettingType } from "@/types/graph";

const Slide = ({ scale, setValue, value }: GraphSettingType) => {
  const { min, max } = scale || { min: 0, max: 1 };
  console.log(min, max);
  return (
    <div className="flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={0.05}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <span className="font-light">{value}</span>
    </div>
  );
};

export default Slide;
