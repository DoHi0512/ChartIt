import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
const GraphOptionsState = atom<any>({
  key: "graph-options",
  default: { data: [] },
});

export const useOptionState = () => useRecoilState(GraphOptionsState);
export const useSetOptionState = () => useSetRecoilState(GraphOptionsState);
export const useOptionValueState = () => useRecoilValue(GraphOptionsState);
