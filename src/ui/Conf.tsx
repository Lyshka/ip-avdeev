import { Controller } from "react-hook-form";

import { modalEnum } from "enums";
import { CheckIcon } from "icons";
import { cn } from "libs";
import { useModalStore } from "stores"
import { IConf } from "interfaces";

export const Conf: React.FC<IConf> = ({ control, ...props }) => {

    const { toggle } = useModalStore();

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();

        toggle(modalEnum.CONF, true)
    }

    return (
        <Controller
            control={control}
            name="conf"
            render={({ field: { onChange, value, ref } }) => {
                return (
                    <div onClick={onChange} className="flex gap-2.5 items-center font-robotoFlex text-base">
                        <div className="relative rounded bg-white border border-gray-ae">
                            <input
                                type="checkbox"
                                ref={ref}
                                defaultChecked={value}
                                className={cn("absolute inset-0 opacity-0 cursor-pointer", props.className)}
                            />

                            <CheckIcon className={cn("fill-green opacity-0 cursor-pointer", value && "opacity-100")} />
                        </div>

                        <p>
                            Соглашаюсь с{" "}
                            <button type="button" className="underline" onClick={handleToggle}>
                                Политикой обработки персональных данных
                            </button>
                        </p>
                    </div>
                )
            }}
        />
    )
}