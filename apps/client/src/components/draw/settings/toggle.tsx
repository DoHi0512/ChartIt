import { useGraphStore } from "@/store/graph";
import { GraphOptionType } from "@/types/graph";
import { useEffect, useState } from "react";

const Toggle = ({ defaultValue, name }: GraphOptionType) => {
  const [graph, setGraph] = useGraphStore();
  const [on, setOn] = useState(defaultValue == "true");
  console.log(graph);
  useEffect(() => {
    setGraph({ ...graph, [name]: on });
  }, [on]);
  return (
    <div className="flex items-center gap-4">
      <div
        onClick={() => setOn((prev) => !prev)}
        className={`${on ? "bg-primary" : "bg-red-400"} relative flex h-5 w-10 cursor-pointer items-center rounded-full`}
      >
        <div
          className={`${on ? "right-1" : "right-6"} absolute h-3 w-3 rounded-full bg-white duration-150`}
        />
      </div>
      <span className="font-light">{on.toString()}</span>
    </div>
  );
};

export default Toggle;
