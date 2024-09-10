import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const GraphOptionsState = atom({
  key: "graph-options",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useOptionState = () => useRecoilState(GraphOptionsState);
export const useSetOptionState = () => useSetRecoilState(GraphOptionsState);
export const useOptionValueState = () => useRecoilValue(GraphOptionsState);
