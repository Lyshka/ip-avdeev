import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { orderFieldType } from "types";

export interface ITelInput {
  register: UseFormRegister<orderFieldType>;
  setValue: UseFormSetValue<orderFieldType>;
}
