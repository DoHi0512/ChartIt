import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
const GraphOptionsState = atom({
  key: "graph-options",
  default: {},
});

export const useOptionState = () => useRecoilState(GraphOptionsState);
export const useSetOptionState = () => useSetRecoilState(GraphOptionsState);
export const useOptionValueState = () => useRecoilValue(GraphOptionsState);
