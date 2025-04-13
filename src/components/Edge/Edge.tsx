import { edge } from "constants"
import { EdgeItem } from "components/Edge"

export const Edge = () => {
  return (
    <ul className="grid grid-cols-4 gap-12">
      {edge.map((props) => (
        <EdgeItem key={props.id} {...props} />
      ))}
    </ul>
  )
}