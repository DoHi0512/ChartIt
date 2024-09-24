import { Button } from "@chartit/ui";
import { ChangeEvent } from "react";
import Spreadsheet from "react-spreadsheet";
import { MdOutlineFileUpload } from "react-icons/md";
import GraphSection from "../../graph";
import { useOptionState } from "@/store/options";
import readExcel from "@/utils/excel/readExcel";
import { useSheetState } from "@/store/sheet";
import { toast } from "react-toastify";

const DataForm = () => {
  const [option, setOption] = useOptionState();
  const [data, setData] = useSheetState();

  const addRow = () => {
    const emptyArray = new Array(data[0].length).fill("");
    const newData = [...data, emptyArray];
    setData(newData);
  };

  const addColumn = () => {
    const newData = data.map((row: any) => [...row, { value: "" }]);
    setData(newData);
  };

  const transformData = (data: any) => {
    const [header, ...rows] = data;
    const value = rows.map((row: any) => {
      const result: Record<string, number | string> = {};
      header.forEach((key: any, idx: number) => {
        const value = row[idx];
        result[key] = value;
      });
      return result;
    });
    return {
      keys: header?.slice(1),
      value: value,
      indexBy: header?.slice(0, 1),
    };
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!!files?.length) {
      const jsonData = (await readExcel(files[0])) as (string | number)[][];
      const convertObj = jsonData.map((row) =>
        row.map((col) => ({ value: col })),
      );
      setData(convertObj);
      handleOption(jsonData);
    }
  };

  const handleOption = (data: (string | number)[][]) => {
    const removeEmpty = data.map((row) => {
      return Array.from(row, (value, index) => (index in row ? value : 0));
    });
    const { keys, value, indexBy } = transformData(removeEmpty);
    setOption({ ...option, keys: keys, data: value, indexBy: indexBy });
  };

  const saveChange = () => {
    const hasUndefined = data.some((row: (string | number)[]) =>
      row.some((col) => !!!col),
    );
    if (hasUndefined) {
      toast.error("비어있는 값이 있습니다!");
      return;
    }
    const originalArray = data.map((row: any) =>
      row.map((col: any) => col.value),
    );
    handleOption(originalArray);
    toast.success("저장 성공!");
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
        <Button
          className="rounded-md border bg-primary py-2 text-white"
          onClick={saveChange}
        >
          저장하기
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
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary py-2 text-white duration-200 hover:bg-primary-hover"
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
