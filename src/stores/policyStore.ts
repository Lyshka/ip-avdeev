import { create } from "zustand";
import { policyStoreType } from "types";

export const usePolicyStore = create<policyStoreType>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
