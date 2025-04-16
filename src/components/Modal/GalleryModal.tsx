import { useCloseModal } from "hooks"
import { CloseIcon } from "icons"
import { cn } from "libs"
import { useModalGallery } from "stores"

export const GalleryModal = () => {
    const { img, isOpen, toggle } = useModalGallery()

    const handleToggle = () => {
        toggle(false);
    }

    const { handleClose } = useCloseModal([isOpen], handleToggle);

    return (
        <div onClick={handleClose} className={cn("modal", isOpen && "flex")}>
            <button onClick={handleToggle} className="absolute top-5 right-5 group p-5 -m-5 z-10">
                <CloseIcon width={40} height={40} className="stroke-white" />
            </button>

            <div className="max-h-[80vh] h-full flex justify-center items-center">
                <img className="h-full" src={img} alt="Фото галереи" />
            </div>
        </div>
    )
}