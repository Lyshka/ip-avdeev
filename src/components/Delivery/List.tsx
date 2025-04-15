import { delivery } from "constants"
import { DeliveryItem } from "./DeliveryItem"

export const List = () => {
  return (
    <ul className="space-y-5">
      {delivery.map((props) => (
        <DeliveryItem key={props.id} {...props} />
      ))}
    </ul>
  )
}