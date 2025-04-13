import { Control } from "react-hook-form";
import { orderFieldType } from "types";

export interface IConf extends React.HTMLProps<HTMLInputElement> {
  control: Control<orderFieldType>;
}
