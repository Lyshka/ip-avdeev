import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { orderFieldType } from "types";
import { orderScheme } from "schemes";
import { useFormReset, useToastErrors } from "hooks";
import { useModalStore } from "stores";
import { modalEnum } from "enums";

export const useFormInfo = () => {
  const { toggle } = useModalStore();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<orderFieldType>({
    resolver: zodResolver(orderScheme),
    defaultValues: {
      tel: "",
      name: "",
      conf: true,
    },
  });

  useToastErrors<orderFieldType>(errors, isValid);
  useFormReset<orderFieldType>(isSubmitSuccessful, reset);

  const onSubmitHandler: SubmitHandler<orderFieldType> = (data) => {
    console.log(data);
    toast.success("Ваши данные уже отправлены менеджеру");
    toggle(modalEnum.ORDER, false);
  };

  return {
    onSubmit: handleSubmit(onSubmitHandler),
    register,
    setValue,
    control,
  };
};
