import { create } from "zustand";
import { modalGalleryType } from "types";

export const useModalGallery = create<modalGalleryType>()((set) => ({
  isOpen: false,
  toggle: (isOpen) => set(() => ({ isOpen })),
  img: "",
  setImg: (img) => set(() => ({ img })),
}));
