import { useEffect } from "react"
import { IModal } from "interfaces/index"
import { cn } from "libs"
import { CloseIcon } from "icons/CloseIcon"

export const Modal: React.FC<React.PropsWithChildren<IModal>> = ({ children, isOpen, toggle }) => {
  useEffect(() => {
    const body = document.querySelector('body');

    body?.classList.toggle('noScroll');
  }, [isOpen])

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  }

  return (
    <div onClick={handleClose} className={cn("fixed inset-0 bg-black/50 backdrop-blur hidden justify-center items-center",
      true && "flex")}>
      <div className="bg-gray-f8 relative border border-gray-ae rounded-md py-14 px-20">
        <button onClick={toggle} className="absolute top-2.5 right-2.5 group p-2.5 -m-2.5 z-10">
          <CloseIcon />
        </button>

        {children}
      </div>
    </div>
  )
}