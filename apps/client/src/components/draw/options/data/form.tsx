import readExcel from "@/utils/readExcel";
import { Button } from "@chartit/ui";
import { ChangeEvent, useEffect, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import { MdOutlineFileUpload } from "react-icons/md";
import GraphSection from "../../graph";
const DataForm = () => {
  const [data, setData] = useState<any>([
    ["", "", ""],
    ["", "", ""],
  ]);

  const addRow = () => {
    const emptyArray = new Array(data[0].length).fill("");
    const newData = [...data, emptyArray];
    setData(newData);
  };
  const addColumn = () => {
    const newData = data.map((row: any) => [...row, { value: "" }]);
    setData(newData);
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!!files?.length) {
      const jsonData = (await readExcel(files[0])) as string[][] | number[][];
      const convertObj = jsonData.map((row) =>
        row.map((col) => ({ value: col })),
      );
      setData(convertObj);
    }
  };

  return (
    <div className="flex h-[45rem] w-[70rem] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
      <div className="flex h-full w-[20rem] flex-shrink-0 flex-col gap-2 border-r border-gray-300 p-4">
        <div className="w-full flex-1">
          <GraphSection />
        </div>
        <Button
          className="rounded-md border border-gray-300 py-1"
          onClick={addColumn}
        >
          행 추가
        </Button>
        <Button
          className="rounded-md border border-gray-300 py-1"
          onClick={addRow}
        >
          열 추가
        </Button>
        <input
          accept=".xlsx, .csv"
          placeholder="엑셀 업로드"
          type="file"
          onChange={handleUpload}
          className="hidden"
          id="excel"
        />
        <label
          htmlFor="excel"
          className="hover:bg-primary-hover flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary py-2 text-white duration-200"
        >
          <MdOutlineFileUpload size="1.5rem" />
          파일 업로드
        </label>
        <span className="text-center text-gray-500">
          지원되는 파일 형식 (.xlsx, .csv)
        </span>
      </div>
      <Spreadsheet onChange={setData} data={data} />
    </div>
  );
};

export default DataForm;
