import { create } from "zustand";
import { modalEnum } from "enums";
import { modalStoreType } from "types";

export const useModalStore = create<modalStoreType>()((set) => ({
  isOrderOpen: false,
  isConfOpen: false,
  toggle: (name: string, isOpen: boolean) =>
    set(() => {
      switch (name) {
        case modalEnum.ORDER:
          return { isOrderOpen: isOpen };
        case modalEnum.CONF:
          return { isConfOpen: isOpen };
        default:
          return {};
      }
    }),
}));
