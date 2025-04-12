import { useModalStore } from "stores"
import { Modal, OrderForm } from "components";
import { modalEnum } from "enums";

export const OrderModal = () => {
    const { isOrderOpen } = useModalStore();

    return (
        <Modal isOpen={isOrderOpen} modalName={modalEnum.ORDER}>
            <div className="space-y-10">
                <div className="text-center space-y-5 text-gray-31 font-bold uppercase">
                    <h6 className="text-4xl">Обсудить поставку</h6>

                    <p className="text-lg">
                        Оставьте Ваши контакты и мы свяжемся с вами<br />
                        в течение 20 минут
                    </p>
                </div>

                <OrderForm />
            </div>
        </Modal>
    )
}