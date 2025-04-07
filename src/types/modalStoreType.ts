export type modalStoreType = {
  isOrderOpen: boolean;
  isConfOpen: boolean;
  toggle: (name: string, isOpen: boolean) => void;
}
