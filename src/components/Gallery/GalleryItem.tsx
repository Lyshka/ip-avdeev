import { IGallery } from "interfaces"
import { useModalGallery } from "stores/modalGallery"

export const GalleryItem: React.FC<IGallery> = ({ img, id }) => {
    const { toggle, setImg } = useModalGallery();

    const handleOpenModal = () => {
        setImg(img);
        toggle(true);
    }

    return (
        <li>
            <button onClick={handleOpenModal} className="h-72 w-full">
                <img src={img} alt={`Дрова ${id}`} className="object-cover h-full w-full object-center" />
            </button>
        </li>
    )
}