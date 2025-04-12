import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask"
import { toast } from "react-toastify";

import { Button, Input, Conf } from "ui"
import { orderFieldType } from "types";
import { orderScheme } from "schemes";
import { useFormReset, useToastErrors } from "hooks";
import { useModalStore } from "stores";
import { modalEnum } from "enums";

export const OrderForm = () => {
    const { toggle } = useModalStore()
    const { register, handleSubmit, setValue, reset, formState: { errors, isValid, isSubmitSuccessful } } = useForm<orderFieldType>({
        resolver: zodResolver(orderScheme),
        defaultValues: {
            tel: "",
            name: "",
            conf: true,
        },
    });

    useToastErrors<orderFieldType>(errors, isValid);
    useFormReset<orderFieldType>(isSubmitSuccessful, reset);

    const onSubmit: SubmitHandler<orderFieldType> = () => {
        toast.success("Ваши данные уже отправлены менеджеру");
        toggle(modalEnum.ORDER, false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <IMaskInput
                {...register("tel")}
                className="inputForm" placeholder="+375 __ _______"
                mask={"+375 00 0000000"}
                lazy={false}
                onAccept={
                    (_, unMask) => {
                        setValue("tel", `+375${unMask.unmaskedValue}`);
                    }
                }
            />

            <Input placeholder="Ваше имя" {...register("name")} />

            <Conf {...register("conf")} />

            <Button type="submit" className="w-fit mx-auto block">
                Заказать звонок
            </Button>
        </form>
    )
}