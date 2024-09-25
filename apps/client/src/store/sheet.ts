import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const sheetState = atom<any>({
  key: "sheet",
  default: [
    [{ value: "라벨" }, { value: "데이터1" }, { value: "데이터2" }],
    ["", "", ""],
  ],
});

export const useSheetState = () => useRecoilState(sheetState);
export const useSetSheetState = () => useSetRecoilState(sheetState);
export const useSheetValueState = () => useRecoilValue(sheetState);
