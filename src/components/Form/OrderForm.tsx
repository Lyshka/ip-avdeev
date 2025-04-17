import { Button, Input, Conf, TelInput } from "ui"
import { useFormInfo } from "hooks"

export const OrderForm = () => {
    const { control, onSubmit, register, setValue } = useFormInfo();

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <TelInput register={register} setValue={setValue} />

            <Input {...register("name")} />

            <Conf control={control} />

            <Button type="submit" className="mx-auto block">
                Заказать звонок
            </Button>
        </form>
    )
}