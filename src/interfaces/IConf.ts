import { Control } from "react-hook-form";
import { orderFieldType } from "types/orderFieldType";

export interface IConf extends React.HTMLProps<HTMLInputElement> {
  control: Control<orderFieldType>;
}
