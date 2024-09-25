import { GraphSettingType } from "@/types/graph";

const Choise = ({ settings, setValue, value }: GraphSettingType) => {
  const SETTING = settings?.map((setting, idx) => (
    <div
      className={`${value === setting ? "bg-white" : "bg-gray-100 shadow-inner"} flex flex-1 items-center justify-center border-r border-gray-300 py-1`}
      onClick={() => setValue(setting)}
      key={idx}
    >
      {setting}
    </div>
  ));
  return (
    <div className="flex cursor-pointer border border-r-0 border-gray-300">
      {SETTING}
    </div>
  );
};

export default Choise;
