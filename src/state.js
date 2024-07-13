import { atom } from "jotai";

export const uiAtom = atom({
  modal: {
    open: null,
    id: null,
  },
  toast: null,
});