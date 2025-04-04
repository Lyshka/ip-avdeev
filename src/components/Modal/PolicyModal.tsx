import { usePolicyStore } from "stores"
import { Modal } from "components/Modal"

export const PolicyModal = () => {
    const policyStore = usePolicyStore();

    return (
        <Modal {...policyStore}>
            <div className="w-[550px] h-[400px] bg-white">

            </div>
        </Modal>
    )
}