import { atom } from "recoil";

export const boardsState = atom ({
  key: 'boardsState', // 고유한 키 값
  default: []
});