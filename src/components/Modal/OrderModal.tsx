import { IMaskInput } from "react-imask"

import { useModalStore } from "stores"
import { Modal } from "components";
import { Button, Input, Conf } from "ui"
import { useForm } from "react-hook-form";

export const OrderModal = () => {
    const { register } = useForm();
    const { isOrderOpen } = useModalStore();

    return (
        <Modal isOpen={true}>
            <div className="space-y-10">
                <div className="text-center space-y-5 text-gray-31 font-bold uppercase">
                    <h6 className="text-4xl">Обсудить поставку</h6>

                    <p className="text-lg">
                        Оставьте Ваши контакты и мы свяжемся с вами<br />
                        в течение 20 минут
                    </p>
                </div>

                <div className="space-y-6">
                    <IMaskInput
                        className="inputForm"
                        mask="+375 00 0000000"
                        lazy={false}
                        definitions={{
                            '0': /[0-9]/
                        }}
                        {...register("tel")}
                    />

                    <Input placeholder="Ваше имя" />

                    <Conf />

                    <Button className="w-fit mx-auto block">
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </Modal>
    )
}