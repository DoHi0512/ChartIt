import { atom, useRecoilState } from "recoil";
const userState = atom<any>({
  key: "user",
  default: {},
});

export const useUserStore = () => useRecoilState(userState);
