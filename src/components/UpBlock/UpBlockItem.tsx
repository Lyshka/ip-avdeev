import { Check2Icon } from "icons"
import { IUpblock } from "interfaces"

export const UpBlockItem: React.FC<IUpblock> = ({ text }) => {
    return (
        <li className="text-lg font-bold font-robotoFlex text-white flex items-center gap-2.5">
            <Check2Icon className="shrink-0"/>

            {text}
        </li>
    )
}