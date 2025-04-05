import { usePolicyStore } from "stores"
import { Modal } from "components";
import { Button, Input } from "ui"

export const PolicyModal = () => {
    const policyStore = usePolicyStore();

    return (
        <Modal {...policyStore}>
            <div className="space-y-10">
                <div className="text-center space-y-5 text-gray-31 font-bold uppercase">
                    <h6 className="text-4xl">Обсудить поставку</h6>

                    <p className="text-lg">
                        Оставьте Ваши контакты и мы свяжемся с вами<br />
                        в течение 20 минут
                    </p>
                </div>

                <div className="space-y-6">
                    <Input placeholder="Ваше имя" />

                    <Input placeholder="+ 375 __ _______" />

                    <Button className="w-fit mx-auto block">
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </Modal>
    )
}