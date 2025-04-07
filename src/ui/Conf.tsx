import { useState } from "react"

import { modalEnum } from "enums/modalEnum";
import { CheckIcon } from "icons/CheckIcon";
import { cn } from "libs/utils";
import { useModalStore } from "stores/modalStore"

export const Conf: React.FC<React.HTMLProps<HTMLInputElement>> = ({ ...props }) => {
    const [isChecked, setIsChecked] = useState(true)

    const { toggle } = useModalStore();

    const handleToggle = () => {
        toggle(modalEnum.CONF, true)
    }

    const handleChecked = () => {
        setIsChecked(prv => !prv);
    }

    return (
        <div onClick={handleChecked} className="flex gap-2.5 items-center font-robotoFlex text-base">
            <div className="relative rounded bg-white border border-gray-ae">
                <input type="checkbox" {...props} defaultChecked={isChecked} className={cn("absolute inset-0 opacity-0 cursor-pointer", props.className)} />

                <CheckIcon className={cn("fill-green opacity-0 cursor-pointer", isChecked && "opacity-100")} />
            </div>

            <p>
                Соглашаюсь с{" "}
                <button className="underline" onClick={handleToggle}>
                    Политикой обработки персональных данных
                </button>
            </p>
        </div>
    )
}