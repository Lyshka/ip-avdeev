import { useEffect } from "react"
import { IModal } from "interfaces"
import { cn } from "libs"

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
      isOpen && "flex")}>
      {children}
    </div>
  )
}