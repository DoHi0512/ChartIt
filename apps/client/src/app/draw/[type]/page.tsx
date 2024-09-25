"use client";
import GraphSection from "@/components/draw/graph";
import OptionBar from "@/components/draw/optionbar";
import { GRAPH_OPTIONS, OPTIONS_INIT } from "@/constants/options";
import { useOptionState } from "@/store/options";
import { useCallback, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { Button } from "@chartit/ui";
import { IoDownloadOutline } from "react-icons/io5";
const DrawPage = ({ params }: { params: { type: "bar" } }) => {
  const { type } = params;
  const [option, setOption] = useOptionState();
  const ref = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const exportToImage = useCallback(() => {
    console.log("click", ref.current);
    if (!ref.current) return;
    toPng(ref.current, { cacheBust: true })
      .then((url) => {
        if (downloadRef.current) {
          downloadRef.current.href = url;
          downloadRef.current.click();
        }
      })
      .catch((e) => console.log(e));
  }, [ref]);

  useEffect(() => {
    setOption(OPTIONS_INIT[type]);
  }, [type]);
  const { description, options } = GRAPH_OPTIONS[type];
  return (
    <div className="flex w-full">
      <div className="w-[35rem] flex-shrink-0 overflow-auto border-r border-gray-300">
        <div className="bg-primary px-8 py-6 text-xl text-white">
          {type.toUpperCase()}
        </div>
        <div className="p-8">{description}</div>
        <OptionBar option={option} setOption={setOption} data={options} />
      </div>
      <div className="relative flex flex-1">
        <a ref={downloadRef} download={`${type}graph.png`} className="hidden" />
        <Button
          sizes="lg"
          className="absolute left-4 top-4 z-10 bg-primary py-2 text-white duration-200 hover:bg-primary-hover"
          onClick={exportToImage}
        >
          이미지로 저장
          <IoDownloadOutline />
        </Button>
        <GraphSection ref={ref} />
      </div>
    </div>
  );
};

export default DrawPage;
