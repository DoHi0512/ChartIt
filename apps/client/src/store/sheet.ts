import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const sheetState = atom<any>({
  key: "sheet",
  default: [
    ["", "", ""],
    ["", "", ""],
  ],
});

export const useSheetState = () => useRecoilState(sheetState);
export const useSetSheetState = () => useSetRecoilState(sheetState);
export const useSheetValueState = () => useRecoilValue(sheetState);
