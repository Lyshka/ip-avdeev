import { useEffect } from "react";
import { FieldValues, UseFormReset } from "react-hook-form";

export const useFormReset = <T extends FieldValues>(
  isSubmitSuccessful: boolean,
  reset: UseFormReset<T>
) => {
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
};
