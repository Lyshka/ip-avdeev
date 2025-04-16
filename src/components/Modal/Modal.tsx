import { IModal } from "interfaces"
import { cn } from "libs"
import { CloseIcon } from "icons"
import { useModalStore } from "stores"
import { Container } from "ui"
import { useCloseModal } from "hooks"

export const Modal: React.FC<React.PropsWithChildren<IModal>> = ({ children, isOpen, modalName }) => {
  const { toggle, isConfOpen, isOrderOpen } = useModalStore();

  const handleToggle = () => {
    toggle(modalName, false);
  }

  const { handleClose } = useCloseModal([isConfOpen, isOrderOpen], handleToggle);

  return (
    <div onClick={handleClose} className={cn("modal",
      isOpen && "flex")}>
      <Container className="flex justify-center items-center">
        <div className="bg-gray-f8 w-fit relative border border-gray-ae rounded-md py-14 px-20 max-h-[80vh] overflow-y-auto">
          <button onClick={handleToggle} className="absolute top-2.5 right-2.5 group p-2.5 -m-2.5 z-10">
            <CloseIcon className="stroke-gray-7" />
          </button>

          {children}
        </div>
      </Container>
    </div>
  )
}