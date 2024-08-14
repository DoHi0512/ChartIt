import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const graphState = atom<any>({
  key: "graph",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useGraphStore = () => useRecoilState(graphState);
