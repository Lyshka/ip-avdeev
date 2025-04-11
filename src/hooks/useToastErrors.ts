import { useEffect } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useToastErrors = <T extends FieldValues>(
  errors: FieldErrors<T>,
  isValid: boolean,
) => {
    const onToastError = () => {
        (Object.keys(errors) as Array<keyof T>).forEach((key) => {
          const error = errors[key];
          if (error && error.message && typeof error.message === "string") {
            toast.warning(error.message);
          }
        });
      };

  useEffect(() => {
    if (!isValid) {
      onToastError();
    }
  }, [isValid, errors]);
};
