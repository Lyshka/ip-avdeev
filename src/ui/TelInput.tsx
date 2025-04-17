import { IMaskInput } from "react-imask"

import { ITelInput } from "interfaces";

export const TelInput: React.FC<ITelInput> = ({ register, setValue }) => {
    return (
        <IMaskInput
            {...register("tel")}
            className="inputForm" placeholder="+375 __ _______"
            mask={"+375 00 0000000"}
            lazy={false}
            onAccept={
                (_, unMask) => {
                    setValue("tel", `+375${unMask.unmaskedValue}`);
                }
            }
        />
    );
};