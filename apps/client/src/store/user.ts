import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const userState = atom<any>({
  key: "user",
  default: {},
});

export const useUserStore = () => useRecoilState(userState);
