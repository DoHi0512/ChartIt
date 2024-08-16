import { GraphSettingType } from "@/types/graph";

const Toggle = ({ value, setValue }: GraphSettingType) => {
  console.log("value", value || value == "true");
  return (
    <div className="flex items-center gap-4">
      <div
        onClick={() => setValue(!value)}
        className={`${value || value == "true" ? "bg-primary" : "bg-red-400"} relative flex h-5 w-10 cursor-pointer items-center rounded-full`}
      >
        <div
          className={`${value || value == "true" ? "right-1" : "right-6"} absolute h-3 w-3 rounded-full bg-white duration-150`}
        />
      </div>
      <span className="font-light">{value?.toString()}</span>
    </div>
  );
};

export default Toggle;
