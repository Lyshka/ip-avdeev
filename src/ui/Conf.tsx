import { modalEnum } from "enums/modalEnum";
import { useModalStore } from "stores/modalStore"

export const Conf: React.FC = () => {
    const { toggle } = useModalStore();

    const handleToggle = () => {
        toggle(modalEnum.CONF, true)
    }

    return (
        <label className="flex gap-2.5 items-center font-robotoFlex text-base">
            <input type="checkbox" />

            <p>
                Соглашаюсь с{" "}
                <button className="underline" onClick={handleToggle}>
                    Политикой обработки персональных данных
                </button>
            </p>
        </label>
    )
}