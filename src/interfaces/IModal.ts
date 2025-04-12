import { modalEnum } from "enums";

export interface IModal extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  modalName: modalEnum;
}
