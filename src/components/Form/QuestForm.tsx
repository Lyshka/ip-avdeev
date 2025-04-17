import { useFormInfo } from "hooks"
import { Button, Input, Conf, TelInput } from "ui"

export const QuestForm = () => {
    const { control, onSubmit, register, setValue } = useFormInfo();

    return (
        <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-3 gap-6">
                <Input {...register("name")} />

                <TelInput register={register} setValue={setValue} />

                <Button type="submit" className="w-full">
                    Заказать звонок
                </Button>
            </div>

            <Conf control={control} />
        </form>
    )
}