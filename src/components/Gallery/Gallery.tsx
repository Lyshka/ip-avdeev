import { gallery } from "constants"
import { Title } from "ui"
import { GalleryItem } from "components/Gallery"

export const Gallery = () => {
  return (
    <section>
      <Title title="Фотогалерея" />

      <ul className="grid grid-cols-3 gap-6">
        {gallery.map((props) => (
          <GalleryItem key={props.id} {...props} />
        ))}
      </ul>
    </section>
  )
}