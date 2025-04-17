import { contact } from "constants"
import { ContactItem } from "components/Header"

export const Contact = () => {
  return (
    <ul className="space-y-2.5">
      {contact.map((props) =>
        <ContactItem key={props.id} {...props} />
      )}
    </ul>
  )
}