import { address } from "constants"
import { AddressItem } from "components/Contact"

export const Address = () => {
  return (
    <ul className="space-y-3.5">
      {address.map((props) => (
        <AddressItem key={props.id} {...props} />
      ))}
    </ul>
  )
}