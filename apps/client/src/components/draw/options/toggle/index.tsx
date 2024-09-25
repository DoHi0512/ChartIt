import { GraphSettingType } from "@/types/graph";
import Slide from "../slide";
import { useState } from "react";

const Toggle = (props: GraphSettingType) => {
  const [tglState, setTglState] = useState(true);
  const { value, scale, setValue } = props;
  const handleOnClick = () => {
    if (scale) {
      setTglState(!tglState);
      setValue("auto");
    } else setValue(!value);
  };
  const currentState = scale ? tglState : value;
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      <div
        onClick={handleOnClick}
        className={`${currentState ? "bg-primary" : "bg-red-400"} relative flex h-5 w-10 cursor-pointer items-center rounded-full`}
      >
        <div
          className={`${currentState ? "right-1" : "right-6"} absolute h-3 w-3 rounded-full bg-white duration-150`}
        />
      </div>
      <span
        className={`font-light ${scale && !tglState ? "text-gray-400" : "text-inherit"}`}
      >
        {scale ? "auto" : value?.toString()}
      </span>
      {scale && !tglState ? (
        <div className="w-full">
          <Slide {...props} />
        </div>
      ) : null}
    </div>
  );
};

export default Toggle;
