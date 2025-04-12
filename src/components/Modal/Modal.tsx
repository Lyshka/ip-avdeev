import { useEffect } from "react"

import { IModal } from "interfaces"
import { cn } from "libs"
import { CloseIcon } from "icons"
import { useModalStore } from "stores"
import { Container } from "ui"

export const Modal: React.FC<React.PropsWithChildren<IModal>> = ({ children, isOpen, modalName }) => {
  const { toggle } = useModalStore();

  useEffect(() => {
    const body = document.querySelector('body');

    body?.classList.toggle('noScroll');
  }, [isOpen])

  const handleToggle = () => {
    toggle(modalName, false);
  }

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleToggle();
    }
  }

  return (
    <div onClick={handleClose} className={cn("fixed inset-0 bg-black/50 backdrop-blur hidden justify-center items-center animate-fadeIn",
      isOpen && "flex")}>
      <Container className="flex justify-center items-center">
        <div className="bg-gray-f8 w-fit relative border border-gray-ae rounded-md py-14 px-20 max-h-[80vh] overflow-y-auto">
          <button onClick={handleToggle} className="absolute top-2.5 right-2.5 group p-2.5 -m-2.5 z-10">
            <CloseIcon />
          </button>

          {children}
        </div>
      </Container>
    </div>
  )
}