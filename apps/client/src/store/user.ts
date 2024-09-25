import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const userState = atom<any>({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useUserStore = () => useRecoilState(userState);
