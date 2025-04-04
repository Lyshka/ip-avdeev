import { contact } from "../../../constant/contact"
import Item from "./Item"

const Contact = () => {
  return (
    <ul className="space-y-2.5">
      {contact.map((item) =>
        <Item key={item.id} item={item} />
      )}
    </ul>
  )
}
export default Contact