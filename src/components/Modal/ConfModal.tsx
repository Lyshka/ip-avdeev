import { Modal } from "components"
import { modalEnum } from "enums";
import { useModalStore } from "stores"

export const ConfModal = () => {
    const { isConfOpen } = useModalStore();

    return (
        <Modal isOpen={isConfOpen} modalName={modalEnum.CONF}>
            <div>Conf</div>
        </Modal>
    )
}