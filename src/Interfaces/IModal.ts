export interface IModal extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  toggle: VoidFunction;
}
