import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface DropdownProps {
  items?: (string | number)[];
  setValue: (v: string | number) => void;
  value: string | number;
  className?: string;
}

const Dropdown = ({ items, setValue, value, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Items = items?.map((data, key) => (
    <div
      className={`${value == data ? "bg-primary text-white" : "hover:bg-gray-100"} w-full p-2 `}
      onClick={() => setValue(data)}
      key={key}
    >
      {data}
    </div>
  ));

  return (
    <div
      className={`${className} relative cursor-pointer  justify-between border border-gray-400 items-center flex `}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {value}
      <FaAngleDown />
      <div
        className={`absolute  bg-white z-10 top-[120%] w-full flex-col left-0 ${isOpen ? "flex" : "hidden"} border border-gray-400 `}
      >
        {Items}
      </div>
    </div>
  );
};

export default Dropdown;
