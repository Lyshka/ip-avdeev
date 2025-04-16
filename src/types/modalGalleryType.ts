export type modalGalleryType = {
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
  img: string;
  setImg: (img: string) => void;
};
