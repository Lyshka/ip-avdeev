import { contact } from "constants"
import { TelItem } from "components/Contact"

export const Tels = () => {
  return (
    <ul className="space-y-6">
      {contact.map((props) => (
        <TelItem key={props.id} {...props} />
      ))}
    </ul>
  )
}