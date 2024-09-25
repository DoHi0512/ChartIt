import { GraphSettingType } from "@/types/graph";
import { Dropdown } from "@chartit/ui";

const Select = ({ settings, setValue, value }: GraphSettingType) => {
  return (
    <div>
      <Dropdown
        className="w-full p-2"
        items={settings}
        setValue={setValue}
        value={value}
      />
    </div>
  );
};

export default Select;
