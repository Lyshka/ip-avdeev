import { Modal } from "components"
import { useModalStore } from "stores/modalStore"

export const ConfModal = () => {
    const { isConfOpen } = useModalStore();

    return (
        <Modal isOpen={isConfOpen}>
            <div>Conf</div>
        </Modal>
    )
}