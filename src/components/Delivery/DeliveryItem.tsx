import { Check2Icon } from "icons/Check2Icon"
import { IDelivery } from "interfaces"

export const DeliveryItem: React.FC<IDelivery> = ({ text }) => {
  return (
    <li className="flex items-center gap-2.5 font-bold text-lg uppercase">
      <Check2Icon className="shrink-0 1"/>

      {text}
    </li>
  )
}